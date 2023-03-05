import type { RouteLocationNormalized, RouteLocationRaw } from 'vue-router'
import { useAuthService } from '@/modules/auth/services/auth.service'
import { RouteNamesEnum } from '@/router/router.types'

export function accessGuardMiddleware(to: RouteLocationNormalized): void | RouteLocationRaw {
  const { accessScopes } = to.meta
  if (!accessScopes) return

  const { checkHasScope } = useAuthService()
  if (checkHasScope(accessScopes)) return

  return { name: RouteNamesEnum.accessError }
}
