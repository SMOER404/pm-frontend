import { makeAutoObservable } from 'mobx'
import { RootStore } from './root-store'
import { ProductVariantDto } from '@poizon-market/api'

interface CartItem {
  variant: ProductVariantDto
  quantity: number
  size: string
  price: number
}

export class CartStore {
  items: Map<string, CartItem> = new Map()
  rootStore: RootStore

  constructor(rootStore: RootStore) {
    makeAutoObservable(this)
    this.rootStore = rootStore
  }

  addItem(variant: ProductVariantDto, size: string, price: number, quantity: number = 1) {
    const itemKey = `${variant.id}-${size}`
    const existingItem = this.items.get(itemKey)
    if (existingItem) {
      existingItem.quantity += quantity
    } else {
      this.items.set(itemKey, { variant, quantity, size, price })
    }
  }

  removeItem(variantId: string, size: string) {
    const itemKey = `${variantId}-${size}`
    this.items.delete(itemKey)
  }

  updateQuantity(variantId: string, size: string, quantity: number) {
    const itemKey = `${variantId}-${size}`
    const item = this.items.get(itemKey)
    if (item) {
      item.quantity = quantity
    }
  }

  getItemCount(): number {
    return Array.from(this.items.values()).reduce(
      (total, item) => total + item.quantity,
      0
    )
  }

  getTotalPrice(): number {
    return Array.from(this.items.values()).reduce(
      (total, item) => total + item.price * item.quantity,
      0
    )
  }

  clear() {
    this.items.clear()
  }
} 