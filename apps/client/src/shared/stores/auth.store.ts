import { makeAutoObservable } from 'mobx'
import Cookies from 'js-cookie'
import { DefaultApi, Configuration, AuthResponseDto, LoginDto, RegisterDto } from '@poizon/api'

export class AuthStore {
  isAuthenticated = false
  user: any = null
  isLoading = false
  error: string | null = null
  private authApi: DefaultApi

  constructor() {
    makeAutoObservable(this)
    const baseUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000'
    const config = new Configuration({
      basePath: baseUrl,
      baseOptions: {
        withCredentials: true
      }
    })
    this.authApi = new DefaultApi(config)
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
      const loginDto: LoginDto = {
        email,
        password
      }
      const response = await this.authApi.loginUser(loginDto)
      this.setAuth({ email }, response.data.accessToken)
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
      const registerDto: RegisterDto = {
        name,
        email,
        password,
        username: email
      }
      const response = await this.authApi.registerUser(registerDto)
      this.setAuth({ name, email }, response.data.accessToken)
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

      // Здесь нужно добавить метод для получения информации о пользователе
      // const response = await this.authApi.getCurrentUser()
      // this.setAuth(response.user, token)
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