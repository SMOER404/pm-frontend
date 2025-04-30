import { createContext } from 'react';
import { makeAutoObservable } from 'mobx';
import { CategoryStore } from './category-store'
import { ProductStore } from './product-store'
import { CartStore } from './cart-store'

export class RootStore {
  cartStore: CartStore
  categoryStore: CategoryStore
  productStore: ProductStore

  constructor() {
    this.cartStore = new CartStore(this)
    this.categoryStore = new CategoryStore(this)
    this.productStore = new ProductStore(this)
    makeAutoObservable(this)
  }
}

export const RootStoreContext = createContext<RootStore | null>(null) 