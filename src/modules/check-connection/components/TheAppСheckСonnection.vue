<script setup lang="ts">
  import { storeToRefs } from 'pinia'
  import messages from '../helpers/messages'
  import { useСheckСonnectionStore } from '../store/сheckСonnection'

  const store = useСheckСonnectionStore()
  const { isShowTopSystemBar } = storeToRefs(store)
</script>
<template>
  <v-system-bar v-if="isShowTopSystemBar" app color="grey lighten-1">
    <v-spacer />
    <span>{{ messages.errorNetwork }}</span>
    <v-icon class="ml-2"> mdi-wifi-off </v-icon>
    <v-spacer />
  </v-system-bar>
</template>
