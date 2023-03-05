import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  const doubleCount = computed(() => count.value * 2)
  function increment() {
    count.value++
  }

  // async getSettings() {
  //   let settings: Settings
  //   try {
  //     const { result } = await api.main.getConfig()
  //     settings = new Settings(result)
  //   } catch (err) {
  //     // если сломалось ставим дефолтные
  //     settings = new Settings()
  //     notificationsModule.showNotification({
  //       text: messagesNotifications.defaultSettings,
  //       type: TYPES_NOTIFICATION.ALERT
  //     })
  //   } finally {
  //     console.info('settings from api', settings!)
  //     this.SET_SETTINGS(settings!)
  //   }
  // }

  return { count, doubleCount, increment }
})
