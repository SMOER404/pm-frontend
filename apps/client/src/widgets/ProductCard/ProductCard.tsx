import React from 'react'
import { observer } from 'mobx-react-lite'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Card } from '@/components/ui/Card'
import { cartStore } from '@/shared/stores/cart.store'
import { Product } from '@/shared/stores/product.store'

interface ProductCardProps {
  product: Product
}

export const ProductCard = observer(({ product }: ProductCardProps) => {
  const handleAddToCart = () => {
    cartStore.addItem({
      id: String(product.id),
      name: product.name,
      price: product.price,
      image: product.images[0],
      quantity: 1,
      size: product.size,
      color: product.color,
    })
  }

  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
    >
      <Link href={`/products/${product.id}`}>
        <Card className="h-full cursor-pointer">
          <div className="relative aspect-square">
            <Image
              src={product.images[0]}
              alt={product.name}
              fill
              className="object-cover rounded-t-lg"
            />
          </div>
          <div className="p-4">
            <h3 className="text-lg font-semibold mb-1">{product.name}</h3>
            <p className="text-gray-600 mb-2">{product.brand}</p>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xl font-bold">₽{product.price}</p>
                <div className="flex items-center text-sm text-gray-500">
                  <span>★</span>
                  <span className="ml-1">{product.rating}</span>
                </div>
              </div>
              <button
                onClick={handleAddToCart}
                className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors"
              >
                В корзину
              </button>
            </div>
          </div>
        </Card>
      </Link>
    </motion.div>
  )
}) 