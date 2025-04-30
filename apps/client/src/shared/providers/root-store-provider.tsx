'use client'

import { ReactNode, useMemo } from 'react'
import { RootStore, RootStoreContext } from '@/shared/stores/root-store'

interface RootStoreProviderProps {
  children: ReactNode
}

export const RootStoreProvider = ({ children }: RootStoreProviderProps) => {
  const store = useMemo(() => new RootStore(), [])

  return (
    <RootStoreContext.Provider value={store}>
      {children}
    </RootStoreContext.Provider>
  )
}

export function useRootStore() {
  const store = useContext(RootStoreContext)
  if (!store) {
    throw new Error('useRootStore must be used within RootStoreProvider')
  }
  return store
} 