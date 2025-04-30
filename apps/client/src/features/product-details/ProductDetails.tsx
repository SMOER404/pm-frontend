'use client'

import { observer } from 'mobx-react-lite'
import Image from 'next/image'
import { useState } from 'react'
import { ProductResponseDto, CategoryDto, ProductVariantDto } from '@poizon-market/api'
import { formatPrice } from '@/shared/utils/format-price'
import { useRootStore } from '@/shared/hooks/use-root-store'

interface ProductDetailsProps {
  product: ProductResponseDto
  category: CategoryDto
}

export const ProductDetails = observer(({ product, category }: ProductDetailsProps) => {
  const { cartStore } = useRootStore()
  const [selectedVariantIndex, setSelectedVariantIndex] = useState(0)
  const [selectedSize, setSelectedSize] = useState<string | null>(null)

  const selectedVariant = product.variants[selectedVariantIndex]
  const sizes = Object.keys(selectedVariant.sizesAndPrices as Record<string, number>)
  const prices = Object.values(selectedVariant.sizesAndPrices as Record<string, number>)
  const minPrice = Math.min(...prices)
  const maxPrice = Math.max(...prices)

  const handleAddToCart = () => {
    if (!selectedSize) return

    const price = (selectedVariant.sizesAndPrices as Record<string, number>)[selectedSize]
    const variant: ProductVariantDto = {
      ...selectedVariant,
      price
    }
    cartStore.addItem(variant)
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="relative aspect-square">
        <Image
          src={selectedVariant.imageUrls[0] || '/placeholder.png'}
          alt={product.name}
          fill
          className="object-cover rounded-lg"
          sizes="(min-width: 768px) 50vw, 100vw"
        />
      </div>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold">{product.name}</h1>
          <p className="text-gray-600">{category.name}</p>
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-2">Варианты</h2>
          <div className="flex gap-2">
            {product.variants.map((variant, index) => (
              <button
                key={variant.id}
                className={`px-4 py-2 border rounded ${
                  selectedVariantIndex === index
                    ? 'border-black bg-black text-white'
                    : 'border-gray-300'
                }`}
                onClick={() => setSelectedVariantIndex(index)}
              >
                {variant.color}
              </button>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-2">Размеры</h2>
          <div className="flex flex-wrap gap-2">
            {sizes.map((size) => (
              <button
                key={size}
                className={`px-4 py-2 border rounded ${
                  selectedSize === size
                    ? 'border-black bg-black text-white'
                    : 'border-gray-300'
                }`}
                onClick={() => setSelectedSize(size)}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-2">Цена</h2>
          <p className="text-2xl font-bold">
            {minPrice === maxPrice
              ? formatPrice(minPrice)
              : `${formatPrice(minPrice)} - ${formatPrice(maxPrice)}`}
          </p>
        </div>

        {product.description && (
          <div>
            <h2 className="text-lg font-semibold mb-2">Описание</h2>
            <p className="text-gray-600">{product.description}</p>
          </div>
        )}

        <button
          className="w-full bg-black text-white py-3 px-6 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
          onClick={handleAddToCart}
          disabled={!selectedSize}
        >
          Добавить в корзину
        </button>
      </div>
    </div>
  )
}) 