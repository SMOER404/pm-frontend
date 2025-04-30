import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { RootStoreProvider } from '@/shared/providers/root-store-provider'
import { SnackbarProvider } from '@/shared/providers/snackbar-provider'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

const inter = Inter({ subsets: ['latin', 'cyrillic'] })

export const metadata: Metadata = {
  title: 'POIZON MARKET',
  description: 'Магазин стильной одежды',
  icons: {
    icon: '/static/favicons/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <body className={inter.className}>
        <RootStoreProvider>
          <SnackbarProvider>
            <div className="min-h-screen flex flex-col">
              <Header />
              <main className="flex-grow container mx-auto px-4 pt-[70px] pb-8">
                {children}
              </main>
              <Footer />
            </div>
          </SnackbarProvider>
        </RootStoreProvider>
      </body>
    </html>
  )
} 