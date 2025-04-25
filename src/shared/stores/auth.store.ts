import { makeAutoObservable } from 'mobx'
import { DefaultApi, Configuration } from '@poizon/api'

export class AuthStore {
  user: any = null
  token: string | null = null
  authApi: DefaultApi

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

  // ... existing code ...
} 