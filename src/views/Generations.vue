<template>
  <div class="generations-view">
    <el-row :gutter="40">
      <el-col v-for="(generation, index) in generations" :key="index" :xs="24" :md="8" :sm="12">
        <el-card shadow="hover" class="cursor-pointer">
          <div class="generations-view__card">
            <span class="mr-40">
              <h3 class="mb-8">
                {{ generation.name }}
              </h3>
              <p>
                Total pokemons: {{ generation.pokemon_total }}
              </p>
              <p>
                Total games: {{ generation.pokemon_total }}
              </p>
            </span>
            <pokemon-icon class="generations-view__icon" />
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Generations',
  computed: {
    ...mapGetters([
      'generations'
    ])
  },
  beforeMount () {
    const loading = this.$loading()
    this.$store.dispatch('fetchGenerations')
      .finally(() => { loading.close() })
  }
}
</script>

<style lang="scss" scoped>
  .generations-view {
    &__card {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 12px;
    }
  }
</style>
