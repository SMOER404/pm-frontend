import { makeAutoObservable, runInAction } from 'mobx'
import { defaultApi, AuthResponseDto, LoginDto, RegisterDto } from '@poizon/api'
import { cartStore } from './cart.store'

interface User {
  id: string;
  email: string;
  name: string;
  username: string;
  avatarUrl: string | null;
  role: string;
  createdAt: string;
  updatedAt: string;
}

interface UpdateProfileDto {
  name: string;
  email: string;
  currentPassword?: string;
  newPassword?: string;
}

export class AuthStore {
  isAuthenticated = false
  user: User | null = null
  isLoading = false
  error: string | null = null

  constructor() {
    makeAutoObservable(this)
  }

  setAuth(user: User, token: string) {
    runInAction(() => {
      this.isAuthenticated = true
      this.user = user
      this.error = null
    })
    if (typeof window !== 'undefined') {
      localStorage.setItem('token', token)
    }
  }

  logout() {
    runInAction(() => {
      this.isAuthenticated = false
      this.user = null
      this.error = null
    })
    if (typeof window !== 'undefined') {
      localStorage.removeItem('token')
    }
  }

  setError(error: string | null) {
    runInAction(() => {
      this.error = error
    })
  }

  async login(email: string, password: string) {
    try {
      runInAction(() => {
        this.isLoading = true
        this.error = null
      })
      const loginDto: LoginDto = {
        email,
        password
      }
      const response = await defaultApi.loginUser(loginDto)
      const token = response.data.accessToken
      
      // Проверяем валидность токена
      try {
        const payload = JSON.parse(atob(token.split('.')[1]))
        const user: User = {
          id: payload.sub,
          email: payload.email,
          name: payload.name || '',
          username: payload.username || '',
          avatarUrl: payload.avatarUrl || null,
          role: payload.role || 'USER',
          createdAt: payload.createdAt || new Date().toISOString(),
          updatedAt: payload.updatedAt || new Date().toISOString()
        }
        runInAction(() => {
          this.setAuth(user, token)
        })
        return true
      } catch (error) {
        console.error('Ошибка при декодировании токена:', error)
        this.setError('Ошибка при обработке ответа сервера')
        return false
      }
    } catch (error) {
      runInAction(() => {
        this.setError('Неверный email или пароль')
      })
      return false
    } finally {
      runInAction(() => {
        this.isLoading = false
      })
    }
  }

  async register(name: string, email: string, password: string) {
    try {
      runInAction(() => {
        this.isLoading = true
        this.error = null
      })
      const registerDto: RegisterDto = {
        name,
        email,
        password,
        username: name // Используем name как username
      }
      const response = await defaultApi.registerUser(registerDto)
      const token = response.data.accessToken
      
      // Проверяем валидность токена
      try {
        const payload = JSON.parse(atob(token.split('.')[1]))
        const user: User = {
          id: payload.sub,
          email: payload.email,
          name: payload.name || '',
          username: payload.username || '',
          avatarUrl: payload.avatarUrl || null,
          role: payload.role || 'USER',
          createdAt: payload.createdAt || new Date().toISOString(),
          updatedAt: payload.updatedAt || new Date().toISOString()
        }
        runInAction(() => {
          this.setAuth(user, token)
        })
        return true
      } catch (error) {
        console.error('Ошибка при декодировании токена:', error)
        this.setError('Ошибка при обработке ответа сервера')
        return false
      }
    } catch (error) {
      runInAction(() => {
        this.setError('Ошибка при регистрации')
      })
      return false
    } finally {
      runInAction(() => {
        this.isLoading = false
      })
    }
  }

  async checkAuth() {
    try {
      const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null
      if (!token) {
        this.logout()
        return false
      }

      // Проверяем валидность токена
      try {
        const payload = JSON.parse(atob(token.split('.')[1]))
        const user: User = {
          id: payload.sub,
          email: payload.email,
          name: payload.name || '',
          username: payload.username || '',
          avatarUrl: payload.avatarUrl || null,
          role: payload.role || 'USER',
          createdAt: payload.createdAt || new Date().toISOString(),
          updatedAt: payload.updatedAt || new Date().toISOString()
        }
        runInAction(() => {
          this.setAuth(user, token)
        })
        return true
      } catch (error) {
        console.error('Ошибка при декодировании токена:', error)
        this.logout()
        return false
      }
    } catch (error) {
      this.logout()
      return false
    }
  }

  async updateProfile(updateData: UpdateProfileDto) {
    try {
      runInAction(() => {
        this.isLoading = true
        this.error = null
      })

      if (!this.user) {
        throw new Error('Пользователь не авторизован')
      }

      // Обновляем состояние в сторе
      runInAction(() => {
        if (this.user) {
          this.user = {
            ...this.user,
            name: updateData.name,
            email: updateData.email,
            updatedAt: new Date().toISOString()
          }
        }
      })
      return true
    } catch (error) {
      runInAction(() => {
        this.setError('Ошибка при обновлении профиля')
      })
      return false
    } finally {
      runInAction(() => {
        this.isLoading = false
      })
    }
  }

  // Метод для SSR
  setInitialState(isAuthenticated: boolean, user: User | null) {
    runInAction(() => {
      this.isAuthenticated = isAuthenticated
      this.user = user
    })
  }
}

export const authStore = new AuthStore() 