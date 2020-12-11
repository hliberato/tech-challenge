
import Vue from 'vue'
import http from '../plugins/axios'

const getGames = () => {
  return null
}

const getGenerations = () => {
  return http
    .get('/generation')
    .then(res => res.data)
}

const getVersionGroupsByGenerationId = (generationId) => {
  return http
    .get('/generation/' + generationId)
    .then(res => res.data)
}

const getVersionsByVersionGroupId = (versionGroupId) => {
  return http
    .get('/version-group/' + versionGroupId)
    .then(res => res.data?.version_groups)
}

Vue.prototype.$api = {
  getGenerations,
  getGames,
  getVersionGroupsByGenerationId,
  getVersionsByVersionGroupId
}
