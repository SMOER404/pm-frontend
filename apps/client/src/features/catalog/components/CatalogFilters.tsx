'use client'

import { observer } from 'mobx-react-lite'
import { useRouter, useSearchParams } from 'next/navigation'
import { productStore } from '@/shared/stores/product.store'
import { CategoryDto, BrandDto } from '@poizon/api'

interface CatalogFiltersProps {
  categories: CategoryDto[]
  brands: BrandDto[]
}

export const CatalogFilters = observer(({ categories, brands }: CatalogFiltersProps) => {
  const router = useRouter()
  const searchParams = useSearchParams()

  const handleFilterChange = (key: string, value: string | number | undefined) => {
    const newParams = new URLSearchParams(searchParams.toString())
    
    if (value === undefined || value === '') {
      newParams.delete(key)
    } else {
      newParams.set(key, String(value))
    }
    
    router.push(`/catalog?${newParams.toString()}`)
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-8">
      <h2 className="text-xl font-medium mb-6">Фильтры</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Фильтр по бренду */}
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

        {/* Фильтр по цене */}
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
  )
}) 