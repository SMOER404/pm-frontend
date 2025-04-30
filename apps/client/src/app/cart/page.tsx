import { Metadata } from 'next'
import { CartPage } from '@/features/cart/CartPage'

export const metadata: Metadata = {
  title: 'Корзина | POIZON MARKET',
  description: 'Корзина покупок на POIZON MARKET',
}

export default function Page() {
  return <CartPage />
} 