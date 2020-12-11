
import Vue from 'vue'
import http from '../plugins/axios'

const getGames = async (generationId) => {
  let versionGroups = []
  let gamesVersions = []
  for (let index = 1; index < generationId + 1; index++) {
    const versionGroup = await getVersionGroupsByGenerationId(index)
    versionGroups = [...versionGroups, ...versionGroup]
  }
  for (const versionGroup of versionGroups) {
    const version = await getVersionsByVersionGroupName(versionGroup.name)
    gamesVersions = [...gamesVersions, ...version]
  }

  return gamesVersions
}

const getGenerations = () => {
  return http
    .get('/generation')
    .then(res => res.data)
}

const getVersionGroupsByGenerationId = async (generationId) => {
  return http
    .get('/generation/' + generationId)
    .then(res => res.data?.version_groups)
}

const getVersionsByVersionGroupName = async (versionGroupName) => {
  return http
    .get('/version-group/' + versionGroupName)
    .then(res => res.data?.versions)
}

Vue.prototype.$api = {
  getGames,
  getGenerations
}
