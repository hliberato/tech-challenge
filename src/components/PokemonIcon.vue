<template>
  <img
    class="pokemon-icon"
    :src="src"
    :class="size ? `pokemon-icon__${size}` : ''"
  />
</template>

<script>
export default {
  name: 'PokeIcon',
  props: {
    name: {
      type: String,
      default: ''
    },
    size: {
      type: String,
      default: 'medium',
      validator: (s) => ['large', 'medium', 'small', 'mini'].includes(s)
    }
  },
  computed: {
    src () {
      return require(`@/assets/icons/${this.name || 'pokeball'}.svg`)
    }
  }
}
</script>

<style lang="scss" scoped>
  .pokemon-icon {
    &__large {
      width: 64px;
    }
    &__medium {
      width: 48px;
    }
    &__small {
      width: 24px;
    }
    &__mini {
      width: 16px;
    }
  }
</style>
