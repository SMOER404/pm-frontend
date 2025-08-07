import { useContext } from 'react'
import { StoreContext } from './StoreContext'

export const useStore = <T>(storeClass: new () => T): T => {
  const context = useContext(StoreContext)
  if (!context) {
    throw new Error('useStore must be used within a StoreProvider')
  }
  return context.getStore(storeClass)
} 