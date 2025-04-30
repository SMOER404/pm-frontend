'use client'

import { useEffect } from 'react'
import { useRootStore } from '@/shared/hooks/use-root-store'
import { CategoryDto, ProductDto } from '@poizon/api'

interface StoreInitializerProps {
  categories: CategoryDto[]
  products: ProductDto[]
}

export function StoreInitializer({ categories, products }: StoreInitializerProps) {
  const { categoryStore, productStore } = useRootStore()

  useEffect(() => {
    categoryStore.setCategories(categories)
    productStore.setProducts(products)
  }, [categories, products, categoryStore, productStore])

  return null
} 