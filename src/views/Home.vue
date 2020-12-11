<template>
  <el-container>
    <el-header
      :class="[{'center': isAtSearchForm}, isAtSearchForm ? 'el-header__home' : 'el-header__content']"
      class="pt-20 pb-20 flex"
      height="auto"
    >
      <div
        class="flex flex-row vertical-center cursor-pointer"
        @click="returnToHome"
      >
        <pokemon-icon :size="isAtSearchForm ? 'large' : 'medium'" />
        <h1 :class="isAtSearchForm ? 'ml-28' : 'ml-12'">
          PokeGames Search!
        </h1>
      </div>
    </el-header>
    <el-main>
      <router-view/>
    </el-main>
    <el-footer class="text-center">
      © PokeGames Search! - 2020
    </el-footer>
  </el-container>
</template>

<script>
export default {
  name: 'Home',
  computed: {
    isAtSearchForm () {
      return this.$route.name === 'SearchForm'
    }
  },
  methods: {
    returnToHome () {
      if (this.isAtSearchForm) this.$router.push({ name: 'Home' })
    }
  }
}
</script>
