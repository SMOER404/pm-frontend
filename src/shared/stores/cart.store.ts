import { makeAutoObservable } from 'mobx'
import { CartApi, Configuration, CartItemResponseDto } from '@poizon/api'

export class CartStore {
  items: CartItemResponseDto[] = []
  cartApi: CartApi

  constructor() {
    makeAutoObservable(this)
    const baseUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000'
    const config = new Configuration({
      basePath: baseUrl,
      baseOptions: {
        withCredentials: true
      }
    })
    this.cartApi = new CartApi(config)
    // this.loadCart()
  }

  // ... existing code ...
} 