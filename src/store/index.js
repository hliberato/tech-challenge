import Vue from 'vue'
import Vuex from 'vuex'

import GenerationService from '@/services/GenerationService.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    generations: []
  },
  mutations: {
    setGenerations (state, generations) {
      state.generations = generations
    },
    setGenerationGames (state, { generationId, games }) {
      const generation = state.generations.find(g => g.id === generationId)
      const generationIndex = state.generations.findIndex(g => g.id === generationId)
      generation.games = games
      Vue.set(state.generations, generationIndex, generation)
    }
  },
  actions: {
    fetchGenerations ({ dispatch }) {
      return new Promise((resolve, reject) => {
        GenerationService
          .getGenerations()
          .then(response => {
            dispatch('getGenerationsDetails', response.results)
              .then(generations => {
                dispatch('getGenerationsGames', generations)
                  .then(() => resolve())
                  .catch(err => reject(err))
              })
              .catch(err => reject(err))
          })
          .catch(err => reject(err))
      })
    },
    getGenerationsDetails ({ commit }, generations) {
      return new Promise((resolve, reject) => {
        const generationPromises = []
        for (const generation of generations) {
          generationPromises.push(GenerationService.getGenerationByName(generation.name))
        }
        Promise.all(generationPromises)
          .then(generations => {
            commit('setGenerations', generations)
            resolve(generations)
          })
          .catch(err => reject(err))
      })
    },
    getGenerationsGames ({ commit }, generations) {
      return new Promise((resolve, reject) => {
        for (const generation of generations) {
          GenerationService
            .getGenerationGames(generation)
            .then(games => {
              commit('setGenerationGames', { generationId: generation.id, games })
              resolve(games)
            })
            .catch(err => reject(err))
        }
      })
    }
  },
  getters: {
    generations: state => {
      if (!state.generations.length) return []
      const generations = state.generations.map((generation, index, generations) => {
        generation.display_name = generation.name.replace('-', ' ').toUpperCase()
        generation.total_pokemons =
          generations
            .slice(0, index + 1)
            .reduce((acc, currentGeneration) => acc + currentGeneration.pokemon_species.length, 0)
        return generation
      })
      return generations
    },
    generationByName: (state, getters) => name => getters.generations.find(g => g.name === name)
  }
})
