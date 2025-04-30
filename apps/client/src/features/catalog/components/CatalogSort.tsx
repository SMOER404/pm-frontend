'use client'

import { observer } from 'mobx-react-lite'
import { useRouter, useSearchParams } from 'next/navigation'
import { productStore } from '@/shared/stores/product.store'

const sortOptions = [
  { value: 'price-asc', label: 'По цене (возрастание)' },
  { value: 'price-desc', label: 'По цене (убывание)' },
  { value: 'name-asc', label: 'По названию (А-Я)' },
  { value: 'name-desc', label: 'По названию (Я-А)' },
  { value: 'newest', label: 'Сначала новые' },
  { value: 'oldest', label: 'Сначала старые' }
]

export const CatalogSort = observer(() => {
  const router = useRouter()
  const searchParams = useSearchParams()

  const handleSortChange = (value: string) => {
    const newParams = new URLSearchParams(searchParams.toString())
    newParams.set('sort', value)
    router.push(`/catalog?${newParams.toString()}`)
  }

  return (
    <div className="flex items-center justify-between mb-6">
      <div className="text-sm text-gray-500">
        Найдено товаров: {productStore.filteredProducts.length}
      </div>
      <div className="flex items-center gap-4">
        <label htmlFor="sort" className="text-sm font-medium">
          Сортировка:
        </label>
        <select
          id="sort"
          className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={productStore.filters.sort}
          onChange={(e) => handleSortChange(e.target.value)}
        >
          {sortOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  )
}) 