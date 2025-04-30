import { makeAutoObservable, runInAction } from 'mobx'
import { cartApi, CartItemResponseDto, AddToCartDto, SizeAndPriceDto } from '@poizon/api'

export class CartStore {
  items: CartItemResponseDto[] = []
  isLoading = false
  error: string | null = null

  constructor() {
    makeAutoObservable(this)
  }

  async fetchCart() {
    this.isLoading = true
    this.error = null
    try {
      const response = await cartApi.getCart()
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

  async addToCart(productId: string, sizeAndPrice: SizeAndPriceDto) {
    this.isLoading = true
    this.error = null
    try {
      const dto: AddToCartDto = {
        productId,
        sizeAndPrice
      }
      await cartApi.addToCart(dto)
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
      await cartApi.removeFromCart(itemId)
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
    return this.items.reduce((sum, item) => sum + item.sizeAndPrice.price, 0)
  }
}

export const cartStore = new CartStore() 