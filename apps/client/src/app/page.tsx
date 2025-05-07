import { Metadata } from 'next'
import { api } from '@/shared/api'
import type { CategoryDto } from '@poizon/api'
import { CategoryProducts } from '@/features/category-products/CategoryProducts'
import { ShopFeatures } from '@/features/shop-features/ShopFeatures'
import { log } from 'console'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'POIZON MARKET - Магазин стильной одежды',
  description: 'Широкий выбор одежды от лучших брендов по доступным ценам. Бесплатная доставка по всей России.',
}

export default async function HomePage() {


  // Получаем только основные категории
  const categoriesResponse = await api.recommendations.getPopularItems()
  console.log(categoriesResponse)
  // const mainCategories: CategoryDto[] = categoriesResponse.data
  // console.log('Main categories:', mainCategories)

  // const categoryProducts = await Promise.all(mainCategories.map(async (category) => {
  //   const products = await api.products.getAllProducts(1, 4, category.id)
  //   console.log(`Products for category ${category.name}:`, products.data)
  //   return {
  //     categoryId: category.id,
  //     categoryName: category.name,
  //     categorySlug: category.slug,
  //     products: products.data.items
  //   }
  // }))
  // console.log('Category products:', categoryProducts)

  return (
    <div className="space-y-12">
      {/* <CategoryProducts categories={categoryProducts} /> */}
      <ShopFeatures />
    </div>
  )
} 