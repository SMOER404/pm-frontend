import { ProductResponseDto, ProductVariantDto } from '@poizon/api'
import { motion } from 'framer-motion'

interface ProductInfoProps {
  product: ProductResponseDto
  selectedVariant: ProductVariantDto | null
  selectedSize: string
}

export const ProductInfo = ({ product, selectedVariant, selectedSize }: ProductInfoProps) => {
  const getSelectedPrice = () => {
    if (!selectedVariant || !selectedSize) return null
    const sizesAndPrices = selectedVariant.sizesAndPrices as Record<string, number>
    return sizesAndPrices[selectedSize]
  }

  const selectedPrice = getSelectedPrice()

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">{product.name}</h1>
        <p className="text-gray-500 mt-2">{product.brand}</p>
      </div>

      <div className="space-y-4">
        <div>
          <h2 className="text-xl font-semibold">Описание</h2>
          <p className="mt-2 text-gray-600">{product.description}</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold">Характеристики</h2>
          <ul className="mt-2 space-y-2">
            <li className="flex justify-between">
              <span className="text-gray-600">Категория</span>
              <span className="font-medium">{product.category}</span>
            </li>
            {selectedVariant && (
              <li className="flex justify-between">
                <span className="text-gray-600">Цвет</span>
                <span className="font-medium">{selectedVariant.color}</span>
              </li>
            )}
            {selectedSize && (
              <li className="flex justify-between">
                <span className="text-gray-600">Размер</span>
                <span className="font-medium">{selectedSize}</span>
              </li>
            )}
          </ul>
        </div>

        {selectedPrice && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-2xl font-bold text-indigo-600"
          >
            {selectedPrice} ¥
          </motion.div>
        )}
      </div>
    </div>
  )
} 