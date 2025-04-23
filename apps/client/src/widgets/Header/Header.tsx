import React from 'react'
import { observer } from 'mobx-react-lite'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Input } from '@poizon/shared'
import { authStore } from '@/shared/stores/auth.store'
import { cartStore } from '@/shared/stores/cart.store'

export const Header = observer(() => {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold">
            POIZON
          </Link>

          <div className="flex-1 max-w-xl mx-8">
            <Input
              placeholder="Поиск товаров..."
              variant="outlined"
              fullWidth
            />
          </div>

          <nav className="flex items-center space-x-6">
            <Link href="/products" className="text-gray-600 hover:text-gray-900">
              Каталог
            </Link>
            <Link href="/cart" className="relative">
              <span className="text-gray-600 hover:text-gray-900">Корзина</span>
              {cartStore.items.length > 0 && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center"
                >
                  {cartStore.items.length}
                </motion.span>
              )}
            </Link>
            {authStore.isAuthenticated ? (
              <Link href="/profile" className="text-gray-600 hover:text-gray-900">
                Профиль
              </Link>
            ) : (
              <Link href="/login" className="text-gray-600 hover:text-gray-900">
                Войти
              </Link>
            )}
          </nav>
        </div>
      </div>
    </header>
  )
}) 