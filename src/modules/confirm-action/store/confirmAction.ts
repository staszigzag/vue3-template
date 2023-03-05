import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import messages from "../helpers/messages"

enum TYPES_USER_ACTIONS {
  DELETE = 'delete'
}

interface IUuserAction {
  type: TYPES_USER_ACTIONS
  text: string
}

let resolvePromiseFunc: (value: boolean) => void

export const useConfirmActionStore = defineStore('confirmAction', () => {
  const userAction = ref<IUuserAction | null>(null)

  function confirmUserAction(text = messages.exitConfirmAction, type = TYPES_USER_ACTIONS.DELETE) {
    return new Promise<boolean>((resolve) => {
      // назначаем resolve глобальной переменной
      resolvePromiseFunc = resolve
      userAction.value = { type, text }
    })
  }

  async function resolveConfirmUserAction(isConfirm: boolean) {
    userAction.value = null
    // резолвим промис который создали в confirmUserAction
    resolvePromiseFunc(isConfirm)
  }

  return { userAction, confirmUserAction, resolveConfirmUserAction }
})
