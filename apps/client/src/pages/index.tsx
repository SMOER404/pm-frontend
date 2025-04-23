import { observer } from 'mobx-react-lite'
import { GetServerSideProps } from 'next'
import Layout from '@/components/layout/Layout'
import { SeoHead } from '@/shared/ui/SeoHead'
import { productStore } from '@/shared/stores/product.store'
import React from 'react'

interface HomePageProps {
  initialProducts: any[] // TODO: Добавить правильный тип после генерации API
}

const HomePage = observer(({ initialProducts }: HomePageProps) => {
  // Инициализируем стор начальными данными через action
  React.useEffect(() => {
    productStore.setProducts(initialProducts)
  }, [initialProducts])

  return (
    <Layout>
      <SeoHead
        title="POIZON MARKET - Магазин стильной одежды"
        description="Широкий выбор одежды от лучших брендов по доступным ценам. Бесплатная доставка по всей России."
        url="/"
      />

      {/* Hero Section */}
      <section className="relative h-[600px] bg-gray-900 text-white">
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent" />
        <div className="container mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl">
            <h1 className="text-5xl font-bold mb-6">
              Откройте для себя мир стиля с POIZON MARKET
            </h1>
            <p className="text-xl mb-8">
              Широкий выбор одежды от лучших брендов по доступным ценам
            </p>
            <a
              href="/catalog"
              className="btn btn-primary text-lg px-8 py-3"
            >
              Смотреть каталог
            </a>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Категории</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <a
              href="/catalog/men"
              className="relative h-80 rounded-lg overflow-hidden group"
            >
              <img
                src="/images/men-category.jpg"
                alt="Мужская одежда"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors" />
              <div className="absolute inset-0 flex items-center justify-center">
                <h3 className="text-2xl font-bold text-white">Мужская одежда</h3>
              </div>
            </a>

            <a
              href="/catalog/women"
              className="relative h-80 rounded-lg overflow-hidden group"
            >
              <img
                src="/images/women-category.jpg"
                alt="Женская одежда"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors" />
              <div className="absolute inset-0 flex items-center justify-center">
                <h3 className="text-2xl font-bold text-white">Женская одежда</h3>
              </div>
            </a>

            <a
              href="/catalog/accessories"
              className="relative h-80 rounded-lg overflow-hidden group"
            >
              <img
                src="/images/accessories-category.jpg"
                alt="Аксессуары"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors" />
              <div className="absolute inset-0 flex items-center justify-center">
                <h3 className="text-2xl font-bold text-white">Аксессуары</h3>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Популярные товары</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {productStore.products.length && productStore.products.slice(0, 8).map((product) => (
              <a
                key={product.id}
                href={`/product/${product.id}`}
                className="group"
              >
                <div className="relative aspect-square rounded-lg overflow-hidden mb-4">
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="font-medium mb-2 group-hover:text-primary-600">
                  {product.name}
                </h3>
                <p className="text-gray-600">{product.brand}</p>
                <p className="font-bold mt-2">{product.price} ₽</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-primary-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Гарантия качества</h3>
              <p className="text-gray-600">
                Все товары проходят тщательную проверку перед отправкой
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-primary-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Быстрая доставка</h3>
              <p className="text-gray-600">
                Доставляем заказы по всей России в кратчайшие сроки
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-primary-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Удобная оплата</h3>
              <p className="text-gray-600">
                Принимаем все популярные способы оплаты
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
})

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000'
    const response = await fetch(`${baseUrl}/products/popular`)
    const products = await response.json()

    return {
      props: {
        initialProducts: products,
      },
    }
  } catch (error) {
    console.error('Ошибка при загрузке популярных товаров:', error)
    return {
      props: {
        initialProducts: [],
      },
    }
  }
}

export default HomePage 