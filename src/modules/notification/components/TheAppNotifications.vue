<script setup lang="ts">
    import { storeToRefs } from 'pinia'
    import { useNotificationStore } from '../store/notification'

    const store = useNotificationStore()
    const { notifications } = storeToRefs(store)
    const { deleteNotification } = store

    const widthSnackbar = 55

</script>

<template>
  <div>
    <transition-group appear mode="out-in" name="slide-fade">
      <v-snackbar
        v-for="(n, idx) in notifications"
        :key="n.id"
        :style="{ top: `${widthSnackbar * idx}px` }"
        top
        right
        :color="n.color"
        :timeout="60000"
        :value="n"
      >
        {{ n.text }}
        <template #action>
          <v-btn fab small text @click="deleteNotification(n)">
            <v-icon large> close </v-icon>
          </v-btn>
        </template>
      </v-snackbar>
    </transition-group>
  </div>
</template>

<style lang="scss" scoped>
  @import '@/assets/scss/slideFadeAnimation.scss';
</style>
