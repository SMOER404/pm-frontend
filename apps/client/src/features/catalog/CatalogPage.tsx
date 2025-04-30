'use client'

import { observer } from 'mobx-react-lite'
import { useRouter, useSearchParams } from 'next/navigation'
import { useEffect } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { SeoHead } from '@/shared/ui/SeoHead'
import { productStore } from '@/shared/stores/product.store'
import { 
  CategoryDto, 
  BrandDto, 
  ProductBasicDto
} from "@poizon/api"
import { ProductCard } from '@/shared/ui/Product-Card/ProductCard'

interface CatalogPageProps {
  categories: CategoryDto[]
  brands: BrandDto[]
  initialProducts: ProductBasicDto[]
}

export const CatalogPage = observer(({ initialProducts, categories, brands }: CatalogPageProps) => {
  const router = useRouter()
  const searchParams = useSearchParams()

  useEffect(() => {
    productStore.setProducts(initialProducts, initialProducts.length)
    
    // Устанавливаем фильтры из URL
    const category = searchParams.get('category')
    const brand = searchParams.get('brand')
    const minPrice = searchParams.get('minPrice')
    const maxPrice = searchParams.get('maxPrice')
    
    if (category || brand || minPrice || maxPrice) {
      productStore.setFilters({
        category: category || '',
        brand: brand || '',
        minPrice: minPrice ? Number(minPrice) : undefined,
        maxPrice: maxPrice ? Number(maxPrice) : undefined
      })
    }
  }, [initialProducts, searchParams])

  const handleFilterChange = (key: string, value: string | number | undefined) => {
    const newParams = new URLSearchParams(searchParams.toString())
    
    if (value === undefined || value === '') {
      newParams.delete(key)
    } else {
      newParams.set(key, String(value))
    }
    
    router.push(`/catalog?${newParams.toString()}`)
  }

  const filteredProducts = productStore.filteredProducts

  return (
    <>
      <SeoHead
        title="Каталог товаров | POIZON MARKET"
        description="Каталог стильной одежды и аксессуаров от лучших брендов. Фильтрация по категориям, брендам, размерам и цветам."
        url="/catalog"
      />

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col gap-8">
          {/* Filters */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-medium mb-6">Фильтры</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Brand Filter */}
              <div>
                <h3 className="font-medium mb-3">Бренд</h3>
                <select
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={productStore.filters.brand}
                  onChange={(e) => handleFilterChange('brand', e.target.value)}
                >
                  <option value="">Все бренды</option>
                  {brands.map((brand) => (
                    <option key={brand.id} value={brand.id}>
                      {brand.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Price Range Filter */}
              <div className="md:col-span-2">
                <h3 className="font-medium mb-3">Цена</h3>
                <div className="flex gap-4">
                  <input
                    type="number"
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="От"
                    value={productStore.filters.minPrice || ''}
                    onChange={(e) => handleFilterChange('minPrice', e.target.value ? Number(e.target.value) : undefined)}
                  />
                  <input
                    type="number"
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="До"
                    value={productStore.filters.maxPrice || ''}
                    onChange={(e) => handleFilterChange('maxPrice', e.target.value ? Number(e.target.value) : undefined)}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <Link href={`/catalog/${product.category.slug}/${product.brand.slug}/${product.slug}`}>
                  <ProductCard product={product} />
                </Link>
              </motion.div>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <h3 className="text-xl font-medium mb-2">Товары не найдены</h3>
              <p className="text-gray-600">Попробуйте изменить параметры фильтрации</p>
            </div>
          )}
        </div>
      </div>
    </>
  )
}) 