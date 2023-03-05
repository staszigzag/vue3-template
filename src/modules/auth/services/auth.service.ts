import { ref } from 'vue'
import type { AccessScopesEnum } from '@/modules/auth/services/auth.types'

function createService() {
  const userScopes = ref<Record<AccessScopesEnum, boolean | undefined> | null>(null)

  async function fetchUserOnes(): Promise<void> {
    if (userScopes.value) return

    const req = await fetch('https://lorem.com', {})

    const [{ payload }] = await req.json()

    userScopes.value = payload.scopes.reduce(
      (acc: Record<AccessScopesEnum, boolean | undefined>, curr: AccessScopesEnum) => {
        acc[curr] = true
        return acc
      },
      {}
    )
  }

  function checkHasScope(scopes: AccessScopesEnum[]) {
    if (!userScopes.value) return false

    return scopes.some((scope) => (userScopes.value ? userScopes.value[scope] : false))
  }

  return {
    fetchUserOnes,
    checkHasScope
  }
}

// decrementCounter(payload: Pick<ICounterItem, 'id'>)
// let service!: ReturnType<typeof createCountersService>
type IService = ReturnType<typeof createService>
let singletonService: ReturnType<typeof createService> | null = null

function useService(): IService {
  if (!singletonService) singletonService = createService()
  return singletonService
}

export { createService as createAuthService, useService as useAuthService }
