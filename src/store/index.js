import Vue from 'vue'
import Vuex from 'vuex'

import GenerationService from '@/services/GenerationService.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    generations: [],
    games: []
  },
  mutations: {
    setGenerations (state, generations) {
      state.generations = generations.map(generation => {
        const name = generation.name.replace('-', ' ')
        generation.name = name.toUpperCase()

        const regexId = generation.url.match(/\/generation\/(\d+)/)
        if (regexId.length === 2) generation.id = regexId[1]

        return generation
      })
    }
  },
  actions: {
    fetchGenerations ({ commit }, medal) {
      return new Promise((resolve, reject) => {
        GenerationService
          .getGenerations()
          .then(response => {
            commit('setGenerations', response.results)
            resolve()
          })
          .catch(err => {
            reject(err)
          })
      })
    }
  },
  getters: {
    generations: state => state.generations,
    generationByName: state => name => state.generations.find(g => g.name === name)
  }
})
