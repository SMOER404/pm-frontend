import { Metadata } from 'next'
import { api } from '@/shared/api'
import { ProductResponse } from '@poizon/api/src/recommendations-api/models'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'POIZON MARKET - Главная',
  description: 'Официальный маркетплейс POIZON в России. Стильная одежда и аксессуары от лучших брендов.',
}

// Компонент карточки товара
const ProductCard = ({ product }: { product: ProductResponse }) => {
  const getPrice = (variants: any[]) => {
    if (!variants || variants.length === 0) return 0
    return Math.min(...variants.map((variant: any) => variant.priceCny || 0))
  }

  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
      <div className="p-0">
        <img
          src={product.media?.[0] || 'https://picsum.photos/400/300'}
          alt={product.name}
          className="w-full h-64 object-cover rounded-t-lg"
        />
      </div>
      <div className="p-4">
        <div className="space-y-3">
          <h3 className="text-sm font-medium line-clamp-2 text-gray-900">
            {product.name}
          </h3>
          <p className="text-lg font-bold text-blue-600">
            от {getPrice(product.variants || [])} ₽
          </p>
          {product.brandData && (
            <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold bg-gray-50">
              {product.brandData.name}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

// Компонент секции товаров
const ProductSection = ({ 
  title, 
  products, 
  viewAllLink 
}: { 
  title: string
  products: ProductResponse[]
  viewAllLink?: string 
}) => {
  return (
    <section className="py-12 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900">{title}</h2>
          {viewAllLink && (
            <a href={viewAllLink} className="text-sm text-blue-600 hover:text-blue-800 font-medium">
              Все модели →
            </a>
          )}
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}

// Компонент преимущества
const FeatureCard = ({ 
  icon, 
  title, 
  description 
}: { 
  icon: string
  title: string
  description: string 
}) => {
  return (
    <div className="bg-white rounded-lg p-8 text-center shadow-md hover:shadow-lg transition-shadow">
      <div className="w-16 h-16 bg-blue-600 rounded-full mx-auto mb-6 flex items-center justify-center text-white text-2xl">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-600">
        {description}
      </p>
    </div>
  )
}

export default async function HomePage() {
  // Получаем популярные товары
  const popularProducts = await api.recommendations.getPopularRecommendations(4)
  const trendingProducts = await api.recommendations.getTrendingRecommendations(8)

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

  const popularProductsList = getProductsFromResponse(popularProducts)
  const trendingProductsList = getProductsFromResponse(trendingProducts)

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-bold">POIZON MARKET</h1>
            <nav className="flex space-x-6">
              <a href="/catalog" className="hover:text-blue-200 transition-colors">Каталог</a>
              <a href="/about" className="hover:text-blue-200 transition-colors">О нас</a>
              <a href="/contacts" className="hover:text-blue-200 transition-colors">Контакты</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-blue-600 rounded-2xl p-12 md:p-16 text-center text-white">
            <div className="max-w-3xl mx-auto space-y-8">
              <h1 className="text-5xl md:text-7xl font-bold">
                POIZON MARKET
              </h1>
              <p className="text-xl md:text-2xl opacity-90">
                Официальный маркетплейс POIZON в России. Стильная одежда и аксессуары от лучших брендов.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/catalog" 
                  className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg"
                >
                  Перейти в каталог
                </a>
                <a 
                  href="/about" 
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors text-lg"
                >
                  Узнать больше
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Популярные товары */}
      {popularProductsList.length > 0 && (
        <ProductSection 
          title="Популярные товары" 
          products={popularProductsList.slice(0, 4)}
          viewAllLink="/catalog"
        />
      )}

      {/* Трендовые товары */}
      {trendingProductsList.length > 0 && (
        <ProductSection 
          title="В тренде" 
          products={trendingProductsList.slice(0, 4)}
          viewAllLink="/catalog"
        />
      )}

      {/* Преимущества */}
      <section className="py-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Почему POIZON MARKET?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard 
              icon="🚀"
              title="Быстрая доставка"
              description="Доставляем по всей России от 9 до 25 дней"
            />
            <FeatureCard 
              icon="✅"
              title="Гарантия качества"
              description="Все товары проходят проверку на подлинность"
            />
            <FeatureCard 
              icon="💰"
              title="Лучшие цены"
              description="Прямые поставки от производителей"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gray-100 rounded-2xl p-12 md:p-16 text-center">
            <div className="max-w-2xl mx-auto space-y-6">
              <h2 className="text-3xl font-bold">Готовы к покупкам?</h2>
              <p className="text-lg text-gray-600">
                Присоединяйтесь к тысячам довольных клиентов POIZON MARKET
              </p>
              <a 
                href="/catalog" 
                className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-lg"
              >
                Начать покупки
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">POIZON MARKET</h3>
              <p className="text-gray-400">
                Официальный маркетплейс POIZON в России
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Информация</h4>
              <div className="space-y-2">
                <p className="text-gray-400">О компании</p>
                <p className="text-gray-400">Доставка</p>
                <p className="text-gray-400">Оплата</p>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Контакты</h4>
              <div className="space-y-2">
                <p className="text-gray-400">+7 (999) 123-45-67</p>
                <p className="text-gray-400">info@poizonmarket.ru</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              © 2024 POIZON MARKET. Все права защищены.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
} 