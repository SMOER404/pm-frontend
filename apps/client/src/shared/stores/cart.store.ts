import { makeAutoObservable, runInAction } from 'mobx'
import { CartApi, CartItemResponseDto, AddToCartDto } from '@poizon/api'

export class CartStore {
  items: CartItemResponseDto[] = []
  isLoading = false
  error: string | null = null
  private api: CartApi

  constructor() {
    this.api = new CartApi()
    makeAutoObservable(this)
  }

  async fetchCart() {
    this.isLoading = true
    this.error = null
    try {
      const response = await this.api.findAll()
      runInAction(() => {
        this.items = response.data
      })
    } catch (error) {
      runInAction(() => {
        this.error = 'Ошибка при загрузке корзины'
        console.error(error)
      })
    } finally {
      runInAction(() => {
        this.isLoading = false
      })
    }
  }

  async addToCart(productVariantId: string, quantity: number = 1) {
    this.isLoading = true
    this.error = null
    try {
      const dto: AddToCartDto = {
        productVariantId,
        quantity
      }
      await this.api.addToCart(dto)
      await this.fetchCart()
    } catch (error) {
      runInAction(() => {
        this.error = 'Ошибка при добавлении товара в корзину'
        console.error(error)
      })
    } finally {
      runInAction(() => {
        this.isLoading = false
      })
    }
  }

  async removeFromCart(itemId: string) {
    this.isLoading = true
    this.error = null
    try {
      await this.api.remove(itemId)
      await this.fetchCart()
    } catch (error) {
      runInAction(() => {
        this.error = 'Ошибка при удалении товара из корзины'
        console.error(error)
      })
    } finally {
      runInAction(() => {
        this.isLoading = false
      })
    }
  }

  get totalItems() {
    return this.items.length
  }

  get totalPrice() {
    return this.items.reduce((sum, item) => sum + (item.variant.priceCny * item.quantity), 0)
  }
}

export const cartStore = new CartStore() 