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
        return generation
      })
    }
  },
  actions: {
    fetchGenerations ({ commit, dispatch }) {
      return new Promise((resolve, reject) => {
        GenerationService
          .getGenerations()
          .then(response => {
            const generationPromise = []
            for (const generation of response.results) {
              generationPromise.push(dispatch('getGenerationByName', generation.name))
            }
            Promise.all(generationPromise)
              .then(response => {
                commit('setGenerations', response)
                resolve()
              })
              .catch(err => reject(err))
          })
          .catch(err => {
            reject(err)
          })
      })
    },
    getGenerationByName ({ commit }, generationName) {
      return new Promise((resolve, reject) => {
        GenerationService
          .getGenerationByName(generationName)
          .then(response => resolve(response))
          .catch(err => reject(err))
      })
    }
  },
  getters: {
    generations: state => {
      const generations = state.generations.map((generation, index, generations) => {
        generation.pokemon_total = generations
          .slice(0, index + 1)
          .reduce((acc, currentGeneration) => acc + currentGeneration.pokemon_species.length, 0)
        return generation
      })
      return generations
    },
    generationByName: state => name => state.generations.find(g => g.name === name)
  }
})
