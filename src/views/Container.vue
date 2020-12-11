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
        <el-breadcrumb-item :to="{ name: 'home' }">HOME</el-breadcrumb-item>
        <el-breadcrumb-item
          v-for="(route, index) in currentRoute"
          :to="{ name: route }"
          :key="index"
        >
          {{ route.toUpperCase() }}
        </el-breadcrumb-item>
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
      return this.$route.name === 'home'
    },
    currentRoute () {
      const path = this.$route.path.replace('%20', ' ').slice(1)
      return path.split('/')
    }
  },
  methods: {
    returnToHome () {
      if (!this.isAtSearchHome) this.$router.push({ name: 'home' })
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
