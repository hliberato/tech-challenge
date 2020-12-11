<template>
  <div class="search-form flex mt-80">
    <el-select
      v-model="selectedGeneration"
      :loading="loading"
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
      type="info"
      icon="el-icon-search"
      plain
      @click="searchGames"
    >
      Search form games
    </el-button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      generations: [],
      selectedGeneration: '',
      loading: false
    }
  },
  mounted () {
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
  },
  methods: {
    searchGames () {
      if (this.selectedGeneration) this.$api.getVersionGroupsByGenerationId(this.selectedGeneration)
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
