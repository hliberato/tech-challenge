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
    },
    randomIcon: Boolean,
    randomPokemon: Boolean
  },
  data () {
    return {
      pokemons: [
        'abra',
        'bellsprout',
        'caterpie',
        'charmander',
        'dratini',
        'eevee',
        'jigglypuff',
        'mankey',
        'meowth',
        'mew',
        'pidgey',
        'pikachu-2',
        'psyduck',
        'rattata',
        'snorlax',
        'squirtle',
        'venonat',
        'weedle',
        'zubat'
      ],
      icons: [
        'action-1',
        'blue-team',
        'camera',
        'egg-incubator-1',
        'hyper-potion',
        'instinct-1',
        'new',
        'pokestop-1',
        'red-team',
        'valor-1',
        'yellow-team'
      ]
    }
  },
  computed: {
    src () {
      return require(`@/assets/icons/${this.name || this.getSortedIcon}.svg`)
    },
    getSortedIcon () {
      if (this.randomIcon) {
        return this.icons[Math.floor(Math.random() * this.icons.length)]
      } else if (this.randomPokemon) {
        return this.pokemons[Math.floor(Math.random() * this.pokemons.length)]
      } else {
        return 'pokeball'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .pokemon-icon {
    display: inline-block;
    vertical-align: text-bottom;
    &__large {
      width: 160px;
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
