import type { Metadata } from 'next'
import './globals.css'
import { Providers } from './providers'
import { Header } from '@/widgets/layout/Header'
import { Footer } from '@/widgets/layout/Footer'
import { MobileNav } from '@/shared/components/MobileNav'

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
            <main className="flex-grow container mx-auto lg:px-4 lg:pt-[70px] md:pt-[50px] xs:pt-[15px] pt-[30px] pb-24 md:pb-8 lg:pb-20">
              {children}
            </main>
            {/* Spacer to prevent MobileNav from overlapping the footer on mobile */}
            <div className="md:hidden h-16" />
            <Footer />
            <MobileNav />
          </div>
        </Providers>
      </body>
    </html>
  )
} 