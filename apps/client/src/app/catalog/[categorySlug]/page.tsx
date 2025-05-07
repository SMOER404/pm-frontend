import { Metadata } from 'next'
import { CategoryLayout } from '@/features/catalog/layouts/CategoryLayout'
import { CategoryStore } from '@/entities/category/CategoryStore'
import { BrandStore } from '@/entities/brand/BrandStore'
import { api } from '@/shared/api'
import { CategoryProducts } from '@/features/category-products/CategoryProducts'
import type { CategoryDto } from '@poizon/api'

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

  // Получаем подкатегории
  const categoriesResponse = await api.categories.getAllCategories()
  const subcategories = categoriesResponse.data.filter(cat => cat.parentId === categoryStore.category?.id)

  // Получаем товары для каждой подкатегории
  const categoryProducts = await Promise.all(subcategories.map(async (subcategory) => {
    const products = await api.products.getAllProducts(1, 4, subcategory.id)
    return {
      categoryId: subcategory.id,
      categoryName: subcategory.name,
      categorySlug: subcategory.slug,
      products: products.data.items
    }
  }))

  return (
    <div className="space-y-12">
      <CategoryLayout
        category={categoryStore.category}
        brands={brandStore.brands}
      />
      {categoryProducts.length > 0 && (
        <CategoryProducts categories={categoryProducts} />
      )}
    </div>
  )
} 