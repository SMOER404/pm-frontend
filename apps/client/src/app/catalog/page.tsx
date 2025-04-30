import { Metadata } from 'next'
import { productsApi, categoriesApi, brandsApi } from '@/shared/api'
import { CatalogPage } from '@/features/catalog/CatalogPage'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'Каталог товаров | POIZON MARKET',
  description: 'Каталог стильной одежды и аксессуаров от лучших брендов. Фильтрация по категориям, брендам, размерам и цветам.',
}

export default async function Page() {
  const [productsResponse, categoriesResponse, brandsResponse] = await Promise.all([
    productsApi.getAllProducts(),
    categoriesApi.getAllCategories(),
    brandsApi.getAllBrands()
  ])

  const products = productsResponse.data.items
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