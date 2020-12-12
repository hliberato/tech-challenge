
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
  }
}

// const getGames = async (generationId) => {
//   let gamesVersions = []
//   for (let index = 1; index < generationId + 1; index++) {
//     const generation = await getByGenerationId(index)
//     for (const versionGroup of generation.versionGroups) {
//       const version = await getVersionsByVersionGroupName(versionGroup.name)
//       gamesVersions = [...gamesVersions, ...version]
//     }
//   }
//   return gamesVersions
// }

// const getGenerations = () => {
//   return http
//     .get('/generation')
//     .then(res => res.data)
// }

// const getByGenerationId = async (generationId) => {
//   return http
//     .get('/generation/' + generationId)
//     .then(res => {
//       return {
//         versionGroups: res.data?.version_groups,
//         pokemonSpecies: res.data?.pokemon_species
//       }
//     })
// }

// const getVersionsByVersionGroupName = async (versionGroupName) => {
//   return http
//     .get('/version-group/' + versionGroupName)
//     .then(res => res.data?.versions)
// }
