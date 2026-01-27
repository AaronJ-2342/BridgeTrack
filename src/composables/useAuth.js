import { computed } from 'vue'
import { useAuthStore } from '@/stores/auth'

export const useAuth = () => {
  const auth = useAuthStore()
  const isAuthenticated = computed(() => Boolean(auth.user?.name))

  const login = () => {
    // TODO: connect to real authentication flow.
  }

  const logout = () => {
    // TODO: same as login
  }

  return {
    auth,
    isAuthenticated,
    login,
    logout,
  }
}
