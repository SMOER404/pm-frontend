import { motion } from 'framer-motion'
import { ProductResponseDto, ProductVariantDto } from '@poizon/api'
import { useState, useEffect } from 'react'

interface ProductSelectionProps {
  product: ProductResponseDto
  onVariantChange: (variant: ProductVariantDto | null) => void
}

export const ProductSelection = ({ product, onVariantChange }: ProductSelectionProps) => {
  const [selectedSize, setSelectedSize] = useState<string>('')
  const [selectedColor, setSelectedColor] = useState<string>('')

  // Получаем все доступные размеры из sizesAndPrices
  const sizes = Array.from(new Set(product.variants.flatMap((v: ProductVariantDto) => 
    Object.keys(v.sizesAndPrices as Record<string, number>)
  )))
  const colors = Array.from(new Set(product.variants.map((v: ProductVariantDto) => v.color)))

  // Обновляем выбранный вариант при изменении размера или цвета
  useEffect(() => {
    if (selectedSize && selectedColor) {
      const variant = product.variants.find(v => {
        const sizesAndPrices = v.sizesAndPrices as Record<string, number>;
        return Object.keys(sizesAndPrices).includes(selectedSize) && v.color === selectedColor;
      })
      onVariantChange(variant || null)
    } else {
      onVariantChange(null)
    }
  }, [selectedSize, selectedColor, product.variants, onVariantChange])

  return (
    <div className="space-y-6">
      {/* Выбор цвета */}
      <div className="space-y-2">
        <h3 className="text-lg font-medium">Цвет</h3>
        <div className="grid grid-cols-6 gap-2">
          {colors.map(color => (
            <motion.button
              key={color}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`p-2 border rounded-lg ${
                selectedColor === color
                  ? 'border-indigo-600 bg-indigo-50 text-indigo-600'
                  : 'border-gray-200 hover:border-indigo-600'
              }`}
              onClick={() => setSelectedColor(color)}
            >
              {color}
            </motion.button>
          ))}
        </div>
      </div>

      {/* Выбор размера */}
      <div className="space-y-2">
        <h3 className="text-lg font-medium">Размер</h3>
        <div className="grid grid-cols-6 gap-2">
          {sizes.map(size => (
            <motion.button
              key={size}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`p-2 border rounded-lg ${
                selectedSize === size
                  ? 'border-indigo-600 bg-indigo-50 text-indigo-600'
                  : 'border-gray-200 hover:border-indigo-600'
              }`}
              onClick={() => setSelectedSize(size)}
            >
              {size}
            </motion.button>
          ))}
        </div>
      </div>
    </div>
  )
} 