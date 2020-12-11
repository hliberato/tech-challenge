<template>
  <el-container class="home-container">
    <el-header
      :class="[{'center': isAtSearchHome}, isAtSearchHome ? 'home-container--home' : 'home-container--content']"
      class="flex"
      height="auto"
    >
      <div
        class="flex cursor-pointer home-container__header"
        @click="returnToHome"
      >
        <pokemon-icon :size="isAtSearchHome ? 'large' : 'small'" name="pokeball" />
        <h1>
          PokeGames Search!
        </h1>
      </div>
      <search-form />
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
import SearchForm from '../components/SearchForm'

export default {
  name: 'Home',
  components: { SearchForm },
  computed: {
    isAtSearchHome () {
      return this.$route.name === 'SearchHome'
    }
  },
  methods: {
    returnToHome () {
      if (!this.isAtSearchHome) this.$router.push({ name: 'SearchHome' })
    }
  }
}
</script>

<style lang="scss">
  @import '../styles/_media.scss';

  .home-container {
    &__header {
      width: 100%;
      min-height: 60px;
      align-items: center;
      justify-content: center;
    }
    &--content {
      box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
      h1 {
        margin-left: 12px;
      }
      .home-container__header {
        min-height: 60px;
      }
    }
    &--home {
      font-size: 2rem;
    }
    @include tablet-and-up {
      &--home {
        margin-top: 12rem;
        h1 {
          margin-left: 20px;
        }
      }
    }
    @include mobile-only {
      &--home {
        margin-top: 6rem;
        .home-container__header {
          flex-direction: column;
        }
        h1 {
          margin-top: 20px;
        }
      }
      &__title {
        margin: 16px 0 0;
      }
      &__header {
        text-align: center;
      }
    }
  }
</style>
