'use client'

import { RootStoreProvider } from '@/shared/providers/root-store-provider'
import { StoreProvider } from '@/shared/lib/store/StoreContext'

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <RootStoreProvider>
      <StoreProvider>{children}</StoreProvider>
    </RootStoreProvider>
  )
} 