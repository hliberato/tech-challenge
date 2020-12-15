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
      to bring to you a versatile tool to browse all Pokemon games.
    </p>
    <el-button class="home-view__button" type="primary" @click="$router.push({ name: 'generations' })">
      <pokemon-icon size="small" name="compass" class="mr-8" />
      Browse by generations
    </el-button>
    <el-button class="home-view__button" @click="goToGithub">
      <pokemon-icon size="small" name="pokestop-3" class="mr-8" />
      View on Github
    </el-button>
    <el-row :gutter="40" class="mt-64">
      <el-col :md="8" class="mb-16">
        <h2>Search</h2>
        <p class="mt-8">
          <pokemon-icon size="small" class="mr-8" random-icon />
          Search games by generations
        </p>
        <p class="mt-8">
          <pokemon-icon size="small" class="mr-8" random-icon />
          Search for maps and routes
        </p>
      </el-col>
      <el-col :md="8" class="mb-16">
        <h2>View</h2>
         <p class="mt-8">
          <pokemon-icon size="small" class="mr-8" random-icon />
          See Pokemon details
        </p>
        <p class="mt-8">
          <pokemon-icon size="small" class="mr-8" random-icon />
          Browse abilities and evolutions
        </p>
      </el-col>
      <el-col :md="8" class="mb-16">
        <h2>Filter</h2>
        <p class="mt-8">
          <pokemon-icon size="small" class="mr-8" random-icon />
          Filter by Pokemon types
        </p>
        <p class="mt-8">
          <pokemon-icon size="small" class="mr-8" random-icon />
          Filter by game versions
        </p>
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
  @import '../styles/_colors.scss';
   @import '@/styles/_media.scss';

  .home-view {
    margin: 0 auto;
    text-align: center;
    @include tablet-and-up () {
      width: 640px;
    }
    @include mobile-only () {
      .home-view__button {
        width: 100%;
        margin: 0;
        & + .home-view__button {
          margin-top: 1rem;
        }
      }
    }
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
