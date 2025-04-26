import { useCallback } from 'react'
import { authStore } from '../stores/auth.store'

export const useAuth = () => {
  const login = useCallback(async (email: string, password: string) => {
    return authStore.login(email, password)
  }, [])

  const register = useCallback(async (name: string, email: string, password: string) => {
    return authStore.register(name, email, password)
  }, [])

  const logout = useCallback(() => {
    authStore.logout()
  }, [])

  const checkAuth = useCallback(async () => {
    return authStore.checkAuth()
  }, [])

  return {
    isAuthenticated: authStore.isAuthenticated,
    user: authStore.user,
    isLoading: authStore.isLoading,
    error: authStore.error,
    login,
    register,
    logout,
    checkAuth
  }
} 