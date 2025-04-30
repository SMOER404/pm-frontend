import { createContext, ReactNode } from 'react'
import { makeAutoObservable } from 'mobx'

export class RootStore {
  private stores = new Map()

  constructor() {
    makeAutoObservable(this)
  }

  getStore<T>(storeClass: new () => T): T {
    let store = this.stores.get(storeClass)
    if (!store) {
      store = new storeClass()
      this.stores.set(storeClass, store)
    }
    return store
  }
}

export const StoreContext = createContext<RootStore | null>(null)

interface StoreProviderProps {
  children: ReactNode
}

export const StoreProvider = ({ children }: StoreProviderProps) => {
  const rootStore = new RootStore()
  return (
    <StoreContext.Provider value={rootStore}>
      {children}
    </StoreContext.Provider>
  )
} 