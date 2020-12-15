<template>
  <el-card shadow="hover" class="cursor-pointer generation-card" @click.native="goToGeneration(generation.name)">
    <div class="generation-card__content">
      <span class="mr-40">
        <h3 class="mb-8">
          {{ generation.display_name }}
        </h3>
        <p>
          Games:
          <span v-if="hasGames">
            {{ generation.games.length }}
          </span>
          <span v-else>
            Fetching... <i class="el-icon-loading"></i>
          </span>
        </p>
        <p>New pokemons: {{ generation.pokemon_species.length }} </p>
        <p>Total pokemons: {{ generation.total_pokemons }}</p>
      </span>
      <pokemon-icon randon-pokemon />
    </div>
  </el-card>
</template>

<script>
export default {
  name: 'GenerationCard',
  props: {
    generationName: {
      type: String,
      default: ''
    }
  },
  computed: {
    generation () {
      return this.$store.getters.generationByName(this.generationName)
    },
    hasGames () {
      return this.generation.games && this.generation.games.length
    }
  },
  methods: {
    goToGeneration (generationName) {
      if (this.hasGames) {
        this.$router.push({
          name: 'generation',
          params: { generationName }
        })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .generation-card {
    &__content {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 12px;
    }
  }
</style>
