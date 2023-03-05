<script setup lang="ts">
import { useLifecycleLogger } from '@/common/hooks/lifecycleLogger'

useLifecycleLogger({ name: 'AppLayoutDefault' })
</script>

<template>
  <main class="app-layout-default">
    <h2>AppLayoutDefault</h2>
    <slot />
  </main>
</template>

<style scoped lang="scss">
.app-layout-default {
}
</style>
