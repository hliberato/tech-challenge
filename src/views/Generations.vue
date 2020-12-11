<template>
  <div class="generations-view">
    <el-row :gutter="20">
      <el-col v-for="(generation, index) in generations" :key="index" :xs="24" :sm="12" :md="12">
        <el-card>
          <pokemon-icon class="search-results__icon pb-12" />
          <h3>
            {{ generation.name }}
          </h3>
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
  }
</style>
