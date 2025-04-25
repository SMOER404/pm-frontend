import { makeAutoObservable } from 'mobx'
import { CartApi, Configuration, CartItemResponseDto, AddToCartDto } from '@poizon/api'

export class CartStore {
  items: CartItemResponseDto[] = []
  loading = false
  error: string | null = null
  private cartApi: CartApi

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

  private async loadCart() {
    try {
      this.loading = true
      const response = await this.cartApi.findAll()
      this.items = response.data
    } catch (error) {
      console.error('Ошибка при загрузке корзины:', error)
      this.error = 'Не удалось загрузить корзину'
    } finally {
      this.loading = false
    }
  }

  async addItem(productVariantId: string, quantity: number) {
    try {
      this.loading = true
      const addToCartDto: AddToCartDto = {
        productVariantId,
        quantity
      }
      await this.cartApi.addToCart(addToCartDto)
      await this.loadCart()
    } catch (error) {
      console.error('Ошибка при добавлении товара в корзину:', error)
      this.error = 'Не удалось добавить товар в корзину'
    } finally {
      this.loading = false
    }
  }

  async removeItem(id: string) {
    try {
      this.loading = true
      await this.cartApi.remove(id)
      await this.loadCart()
    } catch (error) {
      console.error('Ошибка при удалении товара из корзины:', error)
      this.error = 'Не удалось удалить товар из корзины'
    } finally {
      this.loading = false
    }
  }

  async updateQuantity(id: string, quantity: number) {
    try {
      this.loading = true
      await this.cartApi.updateQuantity(id)
      await this.loadCart()
    } catch (error) {
      console.error('Ошибка при обновлении количества товара:', error)
      this.error = 'Не удалось обновить количество товара'
    } finally {
      this.loading = false
    }
  }

  async clearCart() {
    try {
      this.loading = true
      await this.cartApi.clearCart()
      this.items = []
    } catch (error) {
      console.error('Ошибка при очистке корзины:', error)
      this.error = 'Не удалось очистить корзину'
    } finally {
      this.loading = false
    }
  }

  get totalItems() {
    return this.items.reduce((sum, item) => sum + item.quantity, 0)
  }

  get totalPrice() {
    return this.items.reduce((sum, item) => {
      const price = item.variant?.priceCny || 0
      return sum + price * item.quantity
    }, 0)
  }
}

export const cartStore = new CartStore() 