<template>
  <div class="search-form flex mt-80">
    <el-select
      v-model="selectedGenerationId"
      reserve-keyword
      placeholder="Please select a generation"
      class="search-form__select w100"
    >
      <el-option
        v-for="generation in generations"
        :key="generation.id"
        :value="generation.id"
        :label="generation.name">
        {{ generation.name }}
      </el-option>
    </el-select>
    <el-button
      type="danger"
      icon="el-icon-search"
      plain
      @click="searchGames"
    >
      Search!
    </el-button>
  </div>
</template>

<script>
export default {
  name: 'SearchForm',
  data () {
    return {
      generations: [],
      selectedGenerationId: undefined
    }
  },
  beforeMount () {
    const loading = this.$loading()
    this.$api.getGenerations()
      .then(response => {
        this.generations = response.results.map(generation => {
          // unique ID
          const regexId = generation.url.match(/\/generation\/(\d+)/)
          if (regexId.length === 2) generation.id = regexId[1]
          // formated name
          const name = generation.name.replace('-', ' ')
          generation.name = name.toUpperCase()

          return generation
        })
      })
      .finally(() => {
        loading.close()
      })
  },
  methods: {
    searchGames () {
      if (this.selectedGenerationId) {
        this.$router.push({
          name: 'SearchResults',
          query: { generation: this.selectedGenerationId }
        })
      }
    }
  }
}
</script>

<style lang="scss">
  @import '../styles/_media.scss';

  .search-form {
    max-width: 758px;
    margin-left: auto;
    margin-right: auto;
    @include tablet-and-up {
      padding: 0 40px;
      &__select  {
        margin-right: 16px;
      }
    }
    @include mobile-only {
      margin-top: 52px;
      flex-direction: column;
      &__select  {
        margin-bottom: 16px;
      }
    }
  }
</style>
