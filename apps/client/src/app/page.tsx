import { Metadata } from 'next'
import { productsApi, categoriesApi } from '@/shared/api'
import type { CategoryDto } from '@poizon-market/api'
import { CategoryProducts } from '@/features/category-products/CategoryProducts'
import { ShopFeatures } from '@/features/shop-features/ShopFeatures'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'POIZON MARKET - Магазин стильной одежды',
  description: 'Широкий выбор одежды от лучших брендов по доступным ценам. Бесплатная доставка по всей России.',
}

export default async function HomePage() {
  // Получаем все категории
  const categoriesResponse = await categoriesApi.getAllCategories()
  const categories: CategoryDto[] = categoriesResponse.data

  const categoryProducts = await Promise.all(categories.map(async (category) => {
    const products = await productsApi.getAllProducts(1, 4, category.id)
    return {
      categoryId: category.id,
      categoryName: category.name,
      categorySlug: category.slug,
      products: products.data.items
    }
  }))

  return (
    <div className="space-y-12">
      <CategoryProducts categories={categoryProducts} />
      <ShopFeatures />
    </div>
  )
} 