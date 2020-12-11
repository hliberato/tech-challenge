<template>
  <div class="home-view">
    <h1 class="mb-8">
      Welcome to PokeGames Generations!
    </h1>
    <p class="mb-64">
      We use the powerful
      <el-link href="https://pokeapi.co/" type="primary" target="_blank">
        PokeApi
      </el-link>
      to bring to you a <br> versatile tool to browse all Pokemon games.
    </p>
    <el-button class="home-view__button" type="primary" @click="$router.push({ name: 'Generations' })">
      <pokemon-icon size="small" name="compass" class="mr-8" />
      Browse by generations
    </el-button>
    <el-button class="home-view__button" @click="goToGithub">
      <pokemon-icon size="small" name="pokestop-3" class="mr-8" />
      View on Github
    </el-button>
    <el-row :gutter="40" class="mt-64">
      <el-col :span="8" class="mb-16">
        <h2>Search</h2>
      </el-col>
      <el-col :span="8" class="mb-16">
        <h2>View</h2>
      </el-col>
      <el-col :span="8" class="mb-16">
        <h2>Filter</h2>
      </el-col>
      <el-col :span="8" class="mb-12">
        <pokemon-icon size="small" class="mr-8" />
        Search games by generations
      </el-col>
      <el-col :span="8" class="mb-12">
        <pokemon-icon size="small" class="mr-8" />
        See Pokemon details
      </el-col>
      <el-col :span="8" class="mb-12">
        <pokemon-icon size="small" class="mr-8" />
        Filter by Pokemon types
      </el-col>
      <el-col :span="8" class="mb-12">
        <pokemon-icon size="small" class="mr-8" />
        Search for maps and routes
      </el-col>
      <el-col :span="8" class="mb-12">
        <pokemon-icon size="small" class="mr-8" />
        Browse abilities and evolutions
      </el-col>
      <el-col :span="8" class="mb-12">
        <pokemon-icon size="small" class="mr-8" />
        Filter by Pokemon version
      </el-col>
    </el-row>
  </div>
</template>

<script>

export default {
  name: 'Home',
  methods: {
    goToGithub () {
      window.open('https://github.com/hliberato/tech-challenge', '_blank')
    }
  }
}
</script>

<style lang="scss">
  @import '../styles/_media.scss';
  @import '../styles/_colors.scss';

  .home-view {
    width: 620px;
    margin: 0 auto;
    text-align: center;
    &__button span {
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 1.17rem;
    }
    h1, h3 {
      font-weight: 400 !important;
    }
    h2 {
      color: $--color-primary;
    }
  }
</style>
