<script setup lang="ts">
import { useLifecycleLogger } from '@/common/hooks/lifecycleLogger'
import TheNavMenu from '@/components/TheNavMenu.vue'

useLifecycleLogger({ name: 'AppLayoutError' })
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
