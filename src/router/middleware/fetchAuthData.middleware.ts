import { useAuthService } from '@/modules/auth/services/auth.service'

export function fetchAuthDataMiddleware(): Promise<void> {
  const { fetchUserOnes } = useAuthService()
  return fetchUserOnes()
}
