<script setup lang="ts">
import { useCounterStore } from '@/stores/counter'
import { useCounterStore2 } from '@/stores/counter copy'

// const t = 'dfddf'

// defineProps<{
//   msg: string
// }>()

// const dd = useCounterStore()
// const dd2 = useCounterStore2()
// dd2.increment()
</script>

<template>
  <div class="greetings">

      You’ve successfully created a project with
      <a href="https://vitejs.dev/" target="_blank" rel="noopener">Vite</a> +
      <a href="https://vuejs.org/" target="_blank" rel="noopener">Vue 3</a>. What's next?
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
