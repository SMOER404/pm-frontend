import { Metadata } from 'next'
import { api } from '@/shared/api'
import ProductCardList from "@/shared/ui/product-card-list/ProductCardList"
import HeroSection from "@/components/HeroSection"
import { CustomContainer, CustomTypography } from "@poizon/ui-kit"

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'POIZON MARKET - Главная',
  description: 'Официальный маркетплейс POIZON в России. Стильная одежда и аксессуары от лучших брендов.',
}

export default async function HomePage() {
  // Получаем популярные товары
  const popularProducts = await api.recommendations.getPopularRecommendations(4)

  // Получаем трендовые товары
  const trendingProducts = await api.recommendations.getTrendingRecommendations(8)

  return (
    <>
      {/* <HeroSection /> */}
      
      <CustomContainer className="mt-10 mb-10 px-0">
        <div className='mb-20'>
          {Boolean(popularProducts.data.length) &&
              <ProductCardList
                  title='Популярные'
                  products={popularProducts.data.slice(0,4)}
              />
          }
        </div>

        {Boolean(trendingProducts.data.length) &&
            <ProductCardList
                title='В тренде'
                products={trendingProducts.data.slice(0,4)}
            />
        }
      </CustomContainer>
    </>
  )
} 