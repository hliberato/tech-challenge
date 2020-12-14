
import http from '../plugins/axios'

export default {
  getGenerations () {
    return http
      .get('/generation')
      .then(res => res.data)
  },
  getGenerationByName (generationName) {
    return http
      .get('/generation/' + generationName)
      .then(res => res.data)
  },
  getGenerationGames (generation) {
    const versionsPromise = []
    for (const versionGroup of generation.version_groups) {
      versionsPromise.push(getVersionsByVersionGroupName(versionGroup.name))
    }
    return Promise.all(versionsPromise)
      .then(versions => {
        let games = []
        for (const version of versions) {
          games = [...games, ...version]
        }
        return games
      })
  }
}

const getVersionsByVersionGroupName = async (versionGroupName) => {
  return http
    .get('/version-group/' + versionGroupName)
    .then(res => res.data?.versions)
}
