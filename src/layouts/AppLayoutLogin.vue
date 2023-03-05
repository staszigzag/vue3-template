<script setup lang="ts">
  import { useLifeСycleLogger } from '@/common/hooks/lifecycleLogger'
  import TheNavMenu from '@/components/TheNavMenu.vue'

  useLifeСycleLogger({ name: 'AppLayoutLogin' })
</script>

<template>
  <div>
    <TheNavMenu />
    <main class="app-layout-login-main">
      <h2>AppLayoutLogin</h2>
      <slot />
    </main>
  </div>
</template>
