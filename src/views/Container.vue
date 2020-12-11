<template>
  <el-container :class="`container-view--${isAtHome ? 'home' : 'content'}`" class="container-view">
    <el-header :height="isAtHome ? 'auto' : '60px'" class="container-view__header">
      <pokemon-icon
        :size="isAtHome ? 'large' : 'small'"
        :class="isAtHome ? 'mr-24' : 'mr-12'"
        name="pokeball"
      />
      <h1>
        PokeGames <br v-if="isAtHome"> Generations
      </h1>
    </el-header>
    <el-main>
      <el-breadcrumb v-if="!isAtHome" separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">homepage</el-breadcrumb-item>
        <el-breadcrumb-item><a href="/">promotion management</a></el-breadcrumb-item>
        <el-breadcrumb-item>promotion list</el-breadcrumb-item>
        <el-breadcrumb-item>promotion detail</el-breadcrumb-item>
      </el-breadcrumb>
      <router-view/>
    </el-main>
  </el-container>
</template>

<script>
export default {
  name: 'Container',
  computed: {
    isAtHome () {
      return this.$route.name === 'Home'
    }
  },
  methods: {
    returnToHome () {
      if (!this.isAtSearchHome) this.$router.push({ name: 'Home' })
    }
  }
}
</script>

<style lang="scss" scoped>
  .container-view {
    &__header {
        display: flex;
        justify-content: center;
        align-items: center;
      }
    &--home {
      .container-view__header {
        font-size: 2rem;
        font-weight:400;
        margin: 8rem 0 4rem;
      }
    }
    &--content {
      .container-view__header {
        box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
      }
    }
  }
</style>
