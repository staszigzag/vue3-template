<script setup lang="ts">
  import { useLifeСycleLogger } from '@/common/hooks/lifecycleLogger'
  import TheNavMenuVue from '@/components/TheNavMenu.vue'

  useLifeСycleLogger({ name: 'AppLayoutDefault' })
</script>

<template>
  <TheNavMenuVue />

  <main class="app-layout-default">
    <h2>AppLayoutDefault</h2>
    <slot />
  </main>
</template>

<style scoped lang="scss">
  .app-layout-default {
  }
</style>
