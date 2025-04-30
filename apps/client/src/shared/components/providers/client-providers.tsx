'use client'

import { Providers } from '@/shared/providers'

export function ClientProviders({ children }: { children: React.ReactNode }) {
  return (
    <Providers>
      {children}
    </Providers>
  )
} 