'use client'

import { observer } from 'mobx-react-lite'
import { motion } from 'framer-motion'
import { ProductBasicDto, BrandDto } from '@poizon/api'
import { ProductCard } from '@/shared/ui/Product-Card/ProductCard'
import { CatalogSort } from '../components/CatalogSort'
import { BrandInfo } from '../components/BrandInfo'

interface BrandLayoutProps {
  brand: BrandDto
  products: ProductBasicDto[]
}

export const BrandLayout = observer(({ brand, products }: BrandLayoutProps) => {
  return (
    <div className="container mx-auto px-4 py-8">
      <BrandInfo brand={brand} />
      <CatalogSort />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map((product) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <ProductCard product={product} />
          </motion.div>
        ))}
      </div>

      {products.length === 0 && (
        <div className="text-center py-12">
          <h3 className="text-xl font-medium mb-2">Товары не найдены</h3>
          <p className="text-gray-600">Попробуйте изменить параметры фильтрации</p>
        </div>
      )}
    </div>
  )
}) 