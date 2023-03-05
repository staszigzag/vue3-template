<script setup lang="ts">
import { useLifecycleLogger } from '@/common/hooks/lifecycleLogger'

import TheNavMenuVue from '@/components/TheNavMenu.vue'


useLifecycleLogger({ name: 'AppLayoutLogin' })
</script>

<template>
  <TheNavMenuVue />
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>
