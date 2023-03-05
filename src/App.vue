<script setup lang="ts">
  import { RouterView } from 'vue-router'
  import { ref } from 'vue'
  import AppLayout from './layouts/AppLayout.vue'
  import { TheAppConfirmAction, useConfirmActionStore } from '@/modules/confirm-action'

  const store = useConfirmActionStore()
store.confirmUserAction()


  const loading = ref(true)

  // notificationsModule.initWatchIsOnline()
  // await settingsModule.getSettings()
  // await socketModule.connectSocket()

  try {
    setTimeout(() => {
      loading.value = false
    }, 1000)
    //   // TODO повторная синхронизация при появлении сети
  } finally {
    // this.loading = false
  }
</script>

<template>
  <v-app>
    <!-- <nane-top-system-bar /> -->
    <transition appear mode="out-in" name="opacity-fade">
      <v-progress-circular
        v-if="loading"
        class="ma-auto"
        size="280"
        color="primary"
        width="12"
        indeterminate
      />
      <AppLayout v-else>
        <v-main>
          <router-view />
        </v-main>
      </AppLayout>
    </transition>
    <!-- <TheAppConfirmAction/> -->
    <!-- <mono-notifications />
    <mono-bottom-sheet />
    <mono-top-system-bar /> -->
  </v-app>
</template>

<style lang="scss" scoped>
  @import '@/assets/scss/slideFadeAnimation.scss';
</style>
