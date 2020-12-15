<!-- eslint-disable vue/no-unused-vars -->
<template>
  <div class="generation-view">
    <h1>Games</h1>
    <el-row :gutter="40" class="mt-32">
      <el-col v-for="(game, index) in generation.games" :key="index" :sm="24" :md="12">
        <games-card :game="game" />
      </el-col>
    </el-row>
    <h1>Pokemons</h1>
    <el-table :data="pagedPokemons">
      <el-table-column prop="name" label="Name">
        <template slot-scope="scope">
          {{ scope.row.name | capitalize }}
        </template>
      </el-table-column>
      <el-table-column align="right" width="340px" min-width="200px">
        <template slot="header" slot-scope="scope">
          <el-input
            v-model="searchTerm"
            placeholder="Type to search" />
        </template>
        <template slot-scope="scope">
          <el-button @click="selectPokemon(scope.row.url)">
            Details
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      :total="filteredPokemons.length"
      :current-page.sync="currentPage"
      class="pt-40 pb-20"
      background
      layout="prev, pager, next, total"
    >
    </el-pagination>
    <el-dialog
      v-if="selectedPokemon"
      :visible.sync="dialogVisible"
      width="30%"
    >
      <span slot="title">
        {{ selectedPokemon.name | capitalize }}
      </span>
      <p>Capture rate: <strong>{{ selectedPokemon.capture_rate }}</strong></p>
      <p>Base happiness: <strong>{{ selectedPokemon.base_happiness }}</strong></p>
      <p>Growth rate: <strong>{{ selectedPokemon.growth_rate.name | capitalize }}</strong></p>
      <p>Shape: <strong>{{ selectedPokemon.shape.name | capitalize }}</strong></p>
      <p>Baby: <strong>{{ selectedPokemon.is_baby | yes-no }}</strong></p>
      <p>Legendary: <strong>{{ selectedPokemon.is_legendary | yes-no }}</strong></p>
      <p>Mythical: <strong>{{ selectedPokemon.is_mythical | yes-no }}</strong></p>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">Close</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import GamesCard from '@/components/GamesCard'
import Service from '@/services/Service'

export default {
  name: 'Generations',
  components: { GamesCard },
  data () {
    return {
      generation: null,
      searchTerm: '',
      dialogVisible: false,
      selectedPokemon: null,
      currentPage: 1
    }
  },
  mounted () {
    const generationName = this.$route.params.generationName
    this.generation = this.$store.getters.generationByName(generationName)
    if (!this.generation) this.$router.push({ name: 'generations' })
  },
  computed: {
    filteredPokemons () {
      return this.generation.pokemon_species.filter(pokemon => {
        this.currentPage = 1
        return !this.searchTerm || pokemon.name.toLowerCase().includes(this.searchTerm.toLowerCase())
      })
    },
    pagedPokemons () {
      return this.filteredPokemons.slice((this.currentPage - 1) * 10, this.currentPage * 10)
    }
  },
  methods: {
    selectPokemon (url) {
      const loading = this.$loading()
      Service.getByUrl(url)
        .then(pokemon => {
          this.selectedPokemon = pokemon
          this.dialogVisible = true
        })
        .finally(() => { loading.close() })
    }
  }
}
</script>

<style lang="scss" scoped>
  .generation-view {
  }
</style>
