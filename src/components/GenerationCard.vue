<template>
  <el-card shadow="hover" class="cursor-pointer generation-card" @click.native="goToGeneration(generation.name)">
    <div class="generation-card__content">
      <span class="mr-40">
        <h3 class="mb-8">
          {{ generation.display_name }}
        </h3>
        <p>Games: {{ generation.games.length }}</p>
        <p>New pokemons: {{ generation.pokemon_species.length }} </p>
        <p>Total pokemons: {{ generation.total_pokemons }}</p>
      </span>
      <pokemon-icon />
    </div>
  </el-card>
</template>

<script>
export default {
  name: 'GenerationCard',
  props: {
    generation: {
      type: Object,
      default: () => {}
    }
  },
  methods: {
    goToGeneration (generationName) {
      this.$router.push({
        name: 'generation',
        params: { generationName }
      })
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
