import { Metadata } from 'next'
import { api } from '@/shared/api'
import { CatalogPage } from '@/features/catalog/CatalogPage'
import { ProductBasicDto } from '@poizon/api'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'Каталог товаров | POIZON MARKET',
  description: 'Каталог стильной одежды и аксессуаров от лучших брендов. Фильтрация по категориям, брендам, размерам и цветам.',
}

export default async function Page() {
  const [productsResponse, categoriesResponse, brandsResponse] = await Promise.all([
    api.products.getAllProducts(),
    api.categories.getAllCategories(),
    api.brands.getAllBrands()
  ])

  const products = productsResponse.data.items as unknown as ProductBasicDto[]
  const categories = categoriesResponse.data
  const brands = brandsResponse.data

  return (
    <CatalogPage 
      initialProducts={products} 
      categories={categories} 
      brands={brands} 
    />
  )
} 