<template>
  <div class="generation-view">
    {{ generationByName }}
  </div>
</template>

<script>
export default {
  name: 'Generations',
  computed: {
    generationByName () {
      const generationName = this.$route.params.generationName
      return this.$store.getters.generationByName(generationName)
    }
  }
}
</script>

<style lang="scss" scoped>
  .generation-view {
  }
</style>
