'use client'

import { observer } from 'mobx-react-lite'
import { RootStoreProvider } from '@/shared/providers/root-store-provider'

export const Providers = observer(({ children }: { children: React.ReactNode }) => {
  return (
    <RootStoreProvider>
      {children}
    </RootStoreProvider>
  )
}) 