import { Metadata } from 'next'
import { api } from '@/shared/api'
import { ProductResponse } from '@poizon/api/src/recommendations-api/models'
import { CatalogPageContent } from './CatalogPageContent'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'Каталог | POIZON MARKET',
  description: 'Каталог товаров POIZON MARKET',
}

export default async function CatalogPage() {
  // Получаем все товары
  const popularProducts = await api.recommendations.getPopularRecommendations(20)
  const trendingProducts = await api.recommendations.getTrendingRecommendations(20)

  // Обрабатываем возможные структуры ответа API
  const getProductsFromResponse = (response: any): ProductResponse[] => {
    if (Array.isArray(response.data)) {
      return response.data
    }
    if (response.data?.items && Array.isArray(response.data.items)) {
      return response.data.items.map((item: any) => item.product).filter(Boolean)
    }
    return []
  }

  const allProducts = [
    ...getProductsFromResponse(popularProducts),
    ...getProductsFromResponse(trendingProducts)
  ]

  return <CatalogPageContent products={allProducts} />
} 