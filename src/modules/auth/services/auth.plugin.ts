/* eslint-disable no-param-reassign */
import type { Plugin } from 'vue'
import { AccessScopesEnum } from '@/modules/auth/services/auth.types'
import { useAuthService } from '@/modules/auth/services/auth.service'

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $scopes: typeof AccessScopesEnum
    $checkHasScope(scopes: AccessScopesEnum[]): boolean
  }
}

export const AuthPlugin: Plugin = {
  install(app) {
    const { checkHasScope } = useAuthService()

    app.config.globalProperties.$scopes = AccessScopesEnum
    app.config.globalProperties.$checkHasScope = checkHasScope
  }
}

// <Button
//   v-if="$checkHasScope([$scopes.CAN_CREATE_CARS])"
//  />
