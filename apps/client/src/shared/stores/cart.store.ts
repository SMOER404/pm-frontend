import { makeAutoObservable } from 'mobx'
import { CartService } from '@poizon/api'

interface CartItem {
  id: string
  name: string
  price: number
  quantity: number
  size: string
  color: string
  image: string
}

export class CartStore {
  items: CartItem[] = []
  loading = false
  error: string | null = null
  private cartService: CartService

  constructor() {
    makeAutoObservable(this)
    this.cartService = new CartService({
      BASE: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000',
    })
    // this.loadCart()
  }

  private async loadCart() {
    try {
      const response = await this.cartService.cartControllerGetCart()
      this.items = response.items
    } catch (error) {
      console.error('Ошибка при загрузке корзины:', error)
    }
  }

  async addItem(item: CartItem) {
    try {
      const response = await this.cartService.cartControllerAddItem({
        productId: item.id,
        quantity: item.quantity,
        size: item.size,
        color: item.color,
      })
      this.items = response.items
    } catch (error) {
      console.error('Ошибка при добавлении товара в корзину:', error)
      this.error = 'Не удалось добавить товар в корзину'
    }
  }

  async removeItem(id: string, size: string, color: string) {
    try {
      const response = await this.cartService.cartControllerRemoveItem({
        productId: id,
        size,
        color,
      })
      this.items = response.items
    } catch (error) {
      console.error('Ошибка при удалении товара из корзины:', error)
      this.error = 'Не удалось удалить товар из корзины'
    }
  }

  async updateQuantity(id: string, size: string, color: string, quantity: number) {
    try {
      const response = await this.cartService.cartControllerUpdateQuantity({
        productId: id,
        size,
        color,
        quantity,
      })
      this.items = response.items
    } catch (error) {
      console.error('Ошибка при обновлении количества товара:', error)
      this.error = 'Не удалось обновить количество товара'
    }
  }

  async clearCart() {
    try {
      await this.cartService.cartControllerClearCart()
      this.items = []
    } catch (error) {
      console.error('Ошибка при очистке корзины:', error)
      this.error = 'Не удалось очистить корзину'
    }
  }

  get totalItems() {
    return this.items.reduce((sum, item) => sum + item.quantity, 0)
  }

  get totalPrice() {
    return this.items.reduce((sum, item) => sum + item.price * item.quantity, 0)
  }
}

export const cartStore = new CartStore() 