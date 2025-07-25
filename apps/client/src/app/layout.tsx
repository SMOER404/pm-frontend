import type { Metadata } from 'next'
import './globals.css'
import { Providers } from './providers'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

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
            <Header />
            <main className="flex-grow container mx-auto px-4 pt-[70px] pb-8">
              {children}
            </main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  )
} 