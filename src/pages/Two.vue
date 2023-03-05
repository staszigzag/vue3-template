<script setup lang="ts">
  import { useLifeСycleLogger } from '@/common/hooks/lifecycleLogger'

  const name = 'Page two'
  useLifeСycleLogger({ name })
</script>

<template>
  <div class="page">
    {{ name }}
  </div>
</template>
