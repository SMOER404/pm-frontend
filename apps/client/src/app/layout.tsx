import type { Metadata } from 'next'
import './globals.css'
import { Providers } from './providers'
import {CustomHeader, CustomFooter} from '@poizon/ui-kit'

export const metadata: Metadata = {
  title: 'POIZON MARKET',
  description: 'Официальный маркетплейс POIZON в России',
  icons: {
    icon: '/static/favicons/favicon.ico',
  },
}

export default function RootLayout({children}: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <body>
        <Providers>
          <div className="min-h-screen flex flex-col">
            <CustomHeader />
            <main className="flex-grow container mx-auto px-4 pt-[70px] pb-8">
              {children}
            </main>
            <CustomFooter />
          </div>
        </Providers>
      </body>
    </html>
  )
} 