'use client'

import { observer } from 'mobx-react-lite'
import { useParams } from 'next/navigation'
import { useEffect } from 'react'
import { CategoryLayout } from './layouts/CategoryLayout'
import { useStore } from '@/shared/lib/store'
import { CategoryStore } from '@/entities/category'
import { BrandStore } from '@/entities/brand'

export const CategoryPage = observer(() => {
  const params = useParams()
  const categorySlug = params.categorySlug as string

  const categoryStore = useStore(CategoryStore)
  const brandStore = useStore(BrandStore)

  useEffect(() => {
    if (categorySlug) {
      categoryStore.fetchCategoryBySlug(categorySlug)
      brandStore.fetchBrandsByCategorySlug(categorySlug)
    }
  }, [categorySlug, categoryStore, brandStore])

  if (categoryStore.isLoading || brandStore.isLoading) {
    return <div>Загрузка...</div>
  }

  if (!categoryStore.category || !brandStore.brands) {
    return <div>Категория не найдена</div>
  }

  return (
    <CategoryLayout
      category={categoryStore.category}
      brands={brandStore.brands}
    />
  )
}) 