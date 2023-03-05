<script setup lang="ts">
  import { useLifeСycleLogger } from '@/common/hooks/lifecycleLogger'
  import TheNavMenu from '@/components/TheNavMenu.vue'

  useLifeСycleLogger({ name: 'AppLayoutError' })
</script>

<template>
  <div>
    <TheNavMenu />
    <main class="app-layout-error">
      <h2>AppLayoutError</h2>
      <slot />
    </main>
  </div>
</template>
