<template>
  <div class="generations-view">
    <el-row :gutter="40">
      <el-col v-for="(generation, index) in generations" :key="index" :xs="24" :md="8" :sm="12">
        <generation-card :generation-name="generation.name" />
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import GenerationCard from '@/components/GenerationCard'

export default {
  name: 'Generations',
  components: { GenerationCard },
  computed: {
    ...mapGetters([
      'generations'
    ])
  },
  beforeMount () {
    if (this.generations.length) return false
    const loading = this.$loading()
    this.$store.dispatch('fetchGenerations')
      .finally(() => { loading.close() })
  }
}
</script>
