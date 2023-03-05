<script setup lang="ts">
  import { RouteNamesEnum } from '@/router/router.types'
</script>

<template>
  <div class="">
    <router-link
      v-for="routeName in RouteNamesEnum"
      :key="routeName"
      class="mx-7"
      :to="{ name: routeName }"
    >
      {{ routeName }}
    </router-link>
  </div>
</template>
