import type { VueElement } from 'vue'
import type { AppLayoutsEnum } from '@/layouts/layouts.types'
import type { AccessScopesEnum } from '@/modules/auth/services/auth.types'

declare module 'vue-router' {
  interface RouteMeta {
    layout?: AppLayoutsEnum
    layoutComponent?: VueElement
    accessScopes?: AccessScopesEnum[]
  }
}

export enum RouteNamesEnum {
  home = 'home',
  two = 'two',
  three = 'three',
  accessError = 'accessError'
}
