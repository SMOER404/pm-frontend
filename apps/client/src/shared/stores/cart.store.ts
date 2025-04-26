import { makeAutoObservable, runInAction } from 'mobx'
import { cartApi, CartItemResponseDto, AddToCartDto } from '@poizon/api'

export class CartStore {
  items: CartItemResponseDto[] = []
  isLoading = false
  error: string | null = null

  constructor() {
    makeAutoObservable(this)
  }

  async addItem(variantId: string, quantity: number = 1) {
    try {
      runInAction(() => {
        this.isLoading = true
        this.error = null
      })

      const addToCartDto: AddToCartDto = {
        productVariantId: variantId,
        quantity
      }

      const response = await cartApi.addToCart(addToCartDto)
      const cartResponse = await cartApi.findAll()
      
      runInAction(() => {
        this.items = cartResponse.data
      })
    } catch (error: any) {
      runInAction(() => {
        this.error = error.message || 'Ошибка при добавлении товара в корзину'
      })
      throw error
    } finally {
      runInAction(() => {
        this.isLoading = false
      })
    }
  }

  async getCart() {
    try {
      runInAction(() => {
        this.isLoading = true
        this.error = null
      })

      const response = await cartApi.findAll()
      
      runInAction(() => {
        this.items = response.data
      })
      return true
    } catch (error) {
      runInAction(() => {
        this.error = 'Ошибка при получении корзины'
      })
      return false
    } finally {
      runInAction(() => {
        this.isLoading = false
      })
    }
  }

  async removeItem(variantId: string) {
    try {
      runInAction(() => {
        this.isLoading = true
        this.error = null
      })

      await cartApi.remove(variantId)
      
      runInAction(() => {
        this.items = this.items.filter(item => item.variantId !== variantId)
      })
      return true
    } catch (error) {
      runInAction(() => {
        this.error = 'Ошибка при удалении товара из корзины'
      })
      return false
    } finally {
      runInAction(() => {
        this.isLoading = false
      })
    }
  }

  async updateQuantity(variantId: string, quantity: number) {
    try {
      runInAction(() => {
        this.isLoading = true
        this.error = null
      })

      const addToCartDto: AddToCartDto = {
        productVariantId: variantId,
        quantity
      }

      const response = await cartApi.addToCart(addToCartDto)
      
      runInAction(() => {
        this.items = [response.data]
      })
      return true
    } catch (error) {
      runInAction(() => {
        this.error = 'Ошибка при обновлении количества товара'
      })
      return false
    } finally {
      runInAction(() => {
        this.isLoading = false
      })
    }
  }

  clearCart() {
    runInAction(() => {
      this.items = []
      this.error = null
    })
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