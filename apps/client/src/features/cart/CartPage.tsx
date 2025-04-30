'use client'

import { observer } from 'mobx-react-lite'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { SeoHead } from '@/shared/ui/SeoHead'
import { Snackbar } from '@/shared/ui/Snackbar/Snackbar'
import { cartStore } from '@/shared/stores/cart.store'
import { formatPrice } from '@/shared/utils/format-price'

export const CartPage = observer(() => {
  const [isLoading, setIsLoading] = useState(true)
  const [snackbar, setSnackbar] = useState<{
    open: boolean;
    message: string;
    severity: 'success' | 'error';
  }>({
    open: false,
    message: '',
    severity: 'success'
  })

  useEffect(() => {
    const loadCart = async () => {
      try {
        await cartStore.getCart()
      } catch (error) {
        setSnackbar({
          open: true,
          message: 'Ошибка при загрузке корзины',
          severity: 'error'
        })
      } finally {
        setIsLoading(false)
      }
    }

    loadCart()
  }, [])

  const handleRemoveItem = async (variantId: string) => {
    try {
      await cartStore.removeItem(variantId)
      setSnackbar({
        open: true,
        message: 'Товар удален из корзины',
        severity: 'success'
      })
    } catch (error) {
      setSnackbar({
        open: true,
        message: 'Ошибка при удалении товара',
        severity: 'error'
      })
    }
  }

  const handleUpdateQuantity = async (variantId: string, size: string, quantity: number) => {
    if (quantity < 1) return

    try {
      await cartStore.updateQuantity(variantId, size, quantity)
      setSnackbar({
        open: true,
        message: 'Количество обновлено',
        severity: 'success'
      })
    } catch (error) {
      setSnackbar({
        open: true,
        message: 'Ошибка при обновлении количества',
        severity: 'error'
      })
    }
  }

  const handleCloseSnackbar = () => {
    setSnackbar(prev => ({ ...prev, open: false }))
  }

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="animate-pulse space-y-4">
          <div className="h-8 bg-gray-200 rounded w-1/4"></div>
          <div className="h-64 bg-gray-200 rounded"></div>
        </div>
      </div>
    )
  }

  if (cartStore.items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-4">Корзина</h1>
        <div className="text-center py-12">
          <p className="text-gray-500">Ваша корзина пуста</p>
        </div>
      </div>
    )
  }

  return (
    <>
      <SeoHead
        title="Корзина | POIZON MARKET"
        description="Корзина покупок на POIZON MARKET"
        url="/cart"
      />

      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-6">Корзина</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Список товаров */}
          <div className="lg:col-span-2 space-y-4">
            {cartStore.items.map(item => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="flex gap-4 p-4 bg-white rounded-lg shadow"
              >
                {/* Изображение товара */}
                <div className="w-24 h-24 flex-shrink-0">
                  <img
                    src={item.variant.imageUrls[0]}
                    alt={item.variant.product.name}
                    className="w-full h-full object-cover rounded"
                  />
                </div>

                {/* Информация о товаре */}
                <div className="flex-grow">
                  <h3 className="font-medium">{item.variant.product.name}</h3>
                  <p className="text-gray-500 text-sm">
                    Цвет: {item.variant.color}, Размер: {(item as any).size}
                  </p>
                  <div className="mt-2 flex items-center gap-4">
                    <div className="flex items-center gap-2">
                      <button
                        className="p-1 rounded hover:bg-gray-100"
                        onClick={() => handleUpdateQuantity(item.variantId, (item as any).size, item.quantity - 1)}
                        disabled={item.quantity <= 1}
                      >
                        -
                      </button>
                      <span className="w-8 text-center">{item.quantity}</span>
                      <button
                        className="p-1 rounded hover:bg-gray-100"
                        onClick={() => handleUpdateQuantity(item.variantId, (item as any).size, item.quantity + 1)}
                      >
                        +
                      </button>
                    </div>
                    <button
                      className="text-red-600 hover:text-red-700 text-sm"
                      onClick={() => handleRemoveItem(item.variantId)}
                    >
                      Удалить
                    </button>
                  </div>
                </div>

                {/* Цена */}
                <div className="text-right">
                  <p className="font-medium">{formatPrice(item.variant.sizesAndPrices.find(p => p.size === (item as any).size)?.priceCny || 0)}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Итого */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow p-4 sticky top-4">
              <h2 className="text-lg font-medium mb-4">Итого</h2>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Товары ({cartStore.totalItems} шт.)</span>
                  <span>{formatPrice(cartStore.totalPrice)}</span>
                </div>
                <div className="border-t pt-2 mt-2">
                  <div className="flex justify-between font-medium">
                    <span>К оплате</span>
                    <span>{formatPrice(cartStore.totalPrice)}</span>
                  </div>
                </div>
              </div>
              <button
                className="w-full mt-4 py-2 px-4 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
                onClick={() => {
                  // TODO: Реализовать оформление заказа
                }}
              >
                Оформить заказ
              </button>
            </div>
          </div>
        </div>
      </div>

      <Snackbar
        open={snackbar.open}
        message={snackbar.message}
        severity={snackbar.severity}
        onClose={handleCloseSnackbar}
      />
    </>
  )
}) 