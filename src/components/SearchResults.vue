<template>
  <div class="search-results">
    <el-row :gutter="20">
      <el-col v-for="(game, index) in games" :key="index" :xs="24" :sm="12" :md="8">
        <el-card>
          <pokemon-icon />
        {{ game.name }}
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'SearchResults',
  data () {
    return {
      games: []
    }
  },
  created () {
    this.searchGames()
  },
  watch: {
    '$route.query.generation' () {
      this.searchGames()
    }
  },
  methods: {
    async searchGames () {
      const loading = this.$loading()
      this.games = await this.$api.getGames(parseInt(this.$route.query.generation))
      loading.close()
    }
  }
}
</script>

<style lang="scss">
  .search-results {
  }
</style>
