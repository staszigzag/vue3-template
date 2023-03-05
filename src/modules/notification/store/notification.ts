/* eslint-disable no-param-reassign */
import { ref } from 'vue'
import { defineStore } from 'pinia'

const TIMEOUT = 4000

enum COLORS_NOTIFICATION {
  BASE = 'secondary',
  ERROR = 'error'
}

export enum TYPES_NOTIFICATION {
  ERROR = 'error',
  ALERT = 'alert'
}

export interface INotification {
  text: string
  type: TYPES_NOTIFICATION
  id?: number
  color?: COLORS_NOTIFICATION
}

export const useNotificationStore = defineStore('confirmAction', () => {
  const notifications = ref<INotification[]>([])

  let count = 0

  function deleteNotification(notification: INotification) {
    const index = notifications.value.findIndex((not) => not.id === notification.id)
    if (index === -1) return
    notifications.value.splice(index, 1)
  }

  function showNotification(notification: INotification) {
    switch (notification.type) {
      case TYPES_NOTIFICATION.ERROR:
        notification.color = COLORS_NOTIFICATION.ERROR
        break
      default:
        notification.color = COLORS_NOTIFICATION.BASE
    }

    notification.id = count
    notifications.value.unshift(notification)

    setTimeout(() => {
      deleteNotification(notification)
    }, TIMEOUT)

    count++
  }

  return { notifications, showNotification, deleteNotification }
})
