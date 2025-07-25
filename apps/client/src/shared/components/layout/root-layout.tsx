'use client'

import { CustomTypography } from "@poizon/ui-kit";

export function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <header className="bg-white shadow-sm">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <a href="/" className="text-2xl font-bold">POIZON MARKET</a>
            <div className="space-x-4">
              <a href="/catalog" className="hover:text-gray-600">
                <CustomTypography variant="body1">Каталог</CustomTypography>
              </a>
              <a href="/about" className="hover:text-gray-600">
                <CustomTypography variant="body1">О нас</CustomTypography>
              </a>
              <a href="/contact" className="hover:text-gray-600">
                <CustomTypography variant="body1">Контакты</CustomTypography>
              </a>
            </div>
          </div>
        </nav>
      </header>
      <main className="container mx-auto px-4 py-8">
        {children}
      </main>
      <footer className="bg-gray-100 mt-12">
        <div className="container mx-auto px-4 py-8">
          <CustomTypography variant="body2" className="text-center text-gray-600">© 2024 POIZON MARKET. Все права защищены.</CustomTypography>
        </div>
      </footer>
    </>
  )
} 