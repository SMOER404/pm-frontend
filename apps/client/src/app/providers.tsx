'use client'

import { StoreProvider } from '@/shared/lib/store/StoreContext'

export function Providers({ children }: { children: React.ReactNode }) {
  return <StoreProvider>{children}</StoreProvider>
} 