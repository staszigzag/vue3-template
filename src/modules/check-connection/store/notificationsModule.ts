import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators'
import messages from '@/utility/messagesNotifications'

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

@Module({ name: 'notificationsModule' })
export default class NotificationsModule extends VuexModule {
  private _count = 0

  private _notifications: INotification[] = []



  get count() {
    return this._count
  }

  get notifications() {
    return this._notifications
  }


  @Mutation
  INCREMENT_COUNT() {
    this._count++
  }

  @Mutation
  ADD_NOTIFICATION(notification: INotification) {
    this._notifications.unshift(notification)
  }

  @Mutation
  DELETE_NOTIFICATION(notification: INotification) {
    const index = this._notifications.findIndex((not) => not.id === notification.id)
    if (index === -1) return
    this._notifications.splice(index, 1)
  }

  @Mutation
  SET_USER_ACTION(action: IUuserAction | null) {
    this._userAction = action
  }

  @Action
  showNotification(notification: INotification) {
    switch (notification.type) {
      case TYPES_NOTIFICATION.ERROR:
        notification.color = COLORS_NOTIFICATION.ERROR
        break
      default:
        notification.color = COLORS_NOTIFICATION.BASE
    }
    notification.id = this.count
    this.ADD_NOTIFICATION(notification)
    setTimeout(() => {
      this.DELETE_NOTIFICATION(notification)
    }, TIMEOUT)
    this.INCREMENT_COUNT()
  }

}