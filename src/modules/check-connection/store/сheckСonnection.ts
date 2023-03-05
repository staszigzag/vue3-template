import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useСheckСonnectionStore = defineStore('confirmAction', () => {
  const isShowTopSystemBar = ref(false)

  function initWatchIsConnection() {
    const updateOnlineStatus = () => {
      isShowTopSystemBar.value = !navigator.onLine
    }

    window.addEventListener('online', updateOnlineStatus)
    window.addEventListener('offline', updateOnlineStatus)
    updateOnlineStatus()
  }

  return { isShowTopSystemBar, initWatchIsConnection }
})
