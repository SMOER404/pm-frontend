import { Metadata } from 'next'
import { CategoryLayout } from '@/features/catalog/layouts/CategoryLayout'
import { CategoryStore } from '@/entities/category/CategoryStore'
import { BrandStore } from '@/entities/brand/BrandStore'
import { api } from '@/shared/api'

interface CategoryPageProps {
  params: {
    categorySlug: string
  }
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const categoryStore = new CategoryStore()
  await categoryStore.fetchCategoryBySlug(params.categorySlug)

  if (!categoryStore.category) {
    return {
      title: 'Категория не найдена',
    }
  }

  return {
    title: categoryStore.category.name,
    description: `Бренды в категории ${categoryStore.category.name}`,
  }
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const categoryStore = new CategoryStore()
  const brandStore = new BrandStore()

  await Promise.all([
    categoryStore.fetchCategoryBySlug(params.categorySlug),
    brandStore.fetchBrandsByCategorySlug(params.categorySlug),
  ])

  if (!categoryStore.category) {
    return <div>Категория не найдена</div>
  }

  return (
    <CategoryLayout
      category={categoryStore.category}
      brands={brandStore.brands}
    />
  )
} 