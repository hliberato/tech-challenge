<template>
  <el-card class="games-card">
    <div class="games-card__content">
      <h3>
        Pokemon {{ game.name | capitalize }}
      </h3>
      <pokemon-icon randon-icon />
    </div>
  </el-card>
</template>

<script>
export default {
  name: 'GamesCard',
  props: {
    game: {
      type: Object,
      default: () => {}
    }
  }
}
</script>

<style lang="scss" scoped>
  .games-card {
    &__content {
      min-height: 80px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 12px;
    }
  }
</style>
