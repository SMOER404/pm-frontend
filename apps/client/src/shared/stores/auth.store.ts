import { makeAutoObservable } from 'mobx'
import Cookies from 'js-cookie'
import { api } from '@poizon/api'
import { API_URL } from '@/shared/config/env'

export class AuthStore {
  isAuthenticated = false
  user = null
  isLoading = false
  error = null

  constructor() {
    makeAutoObservable(this)
  }

  setAuth(user: any, token: string) {
    this.isAuthenticated = true
    this.user = user
    this.error = null
    Cookies.set('token', token, { expires: 7 })
  }

  logout() {
    this.isAuthenticated = false
    this.user = null
    this.error = null
    Cookies.remove('token')
  }

  setError(error: string | null) {
    this.error = error
  }

  async login(email: string, password: string) {
    try {
      this.isLoading = true
      this.error = null
      const response = await api.auth.login({ email, password })
      this.setAuth(response.user, response.token)
      return true
    } catch (error) {
      this.setError('Неверный email или пароль')
      return false
    } finally {
      this.isLoading = false
    }
  }

  async register(name: string, email: string, password: string) {
    try {
      this.isLoading = true
      this.error = null
      const response = await api.auth.register({ name, email, password })
      this.setAuth(response.user, response.token)
      return true
    } catch (error) {
      this.setError('Ошибка при регистрации')
      return false
    } finally {
      this.isLoading = false
    }
  }

  async checkAuth() {
    try {
      const token = Cookies.get('token')
      if (!token) {
        this.logout()
        return false
      }

      const response = await api.auth.me()
      this.setAuth(response.user, token)
      return true
    } catch (error) {
      this.logout()
      return false
    }
  }

  // Метод для SSR
  setInitialState(isAuthenticated: boolean, user: any) {
    this.isAuthenticated = isAuthenticated
    this.user = user
  }
}

export const authStore = new AuthStore() 