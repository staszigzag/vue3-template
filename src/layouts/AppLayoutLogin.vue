<script setup lang="ts">
  import { useLifecycleLogger } from '@/common/hooks/lifecycleLogger'
  import TheNavMenu from '@/components/TheNavMenu.vue'

  useLifecycleLogger({ name: 'AppLayoutLogin' })
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
