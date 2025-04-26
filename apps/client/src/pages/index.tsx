import { observer } from 'mobx-react-lite'
import { GetServerSideProps } from 'next'
import Layout from '@/components/layout/Layout'
import { SeoHead } from '@/shared/ui/SeoHead'
import { productStore } from '@/shared/stores/product.store'
import React from 'react'
import ProductCard from "@/shared/ui/Product-Card/ProductCard";
import { ProductsApi, Configuration, ProductResponseDto } from '@poizon/api'

interface HomePageProps {
  initialProducts: any[] // TODO: Добавить правильный тип после генерации API
}

const HomePage = observer(({ initialProducts }: HomePageProps) => {
  // Инициализируем стор начальными данными через action
  React.useEffect(() => {
    productStore.setProducts(initialProducts)
  }, [initialProducts])

  console.log('initialProducts', initialProducts)

  return (
    <Layout>
      <SeoHead
        title="POIZON MARKET - Магазин стильной одежды"
        description="Широкий выбор одежды от лучших брендов по доступным ценам. Бесплатная доставка по всей России."
        url="/"
      />

      {/* Categories Section */}
      {/* <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Категории</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <a
              href="/catalog/men"
              className="relative h-80 rounded-lg overflow-hidden group"
            >
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors" />
              <div className="absolute inset-0 flex items-center justify-center">
                <h3 className="text-2xl font-bold text-white">Мужская одежда</h3>
              </div>
            </a>

            <a
              href="/catalog/women"
              className="relative h-80 rounded-lg overflow-hidden group"
            >
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors" />
              <div className="absolute inset-0 flex items-center justify-center">
                <h3 className="text-2xl font-bold text-white">Женская одежда</h3>
              </div>
            </a>

            <a
              href="/catalog/accessories"
              className="relative h-80 rounded-lg overflow-hidden group"
            >
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors" />
              <div className="absolute inset-0 flex items-center justify-center">
                <h3 className="text-2xl font-bold text-white">Аксессуары</h3>
              </div>
            </a>
          </div>
        </div>
      </section> */}

      {/* Featured Products Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Популярные товары</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {initialProducts.length && initialProducts.slice(0, 8).map((product) => (
              <a
                key={product.id}
                href={`/product/${product.id}`}
                className="group"
              >
                <ProductCard product={product} onClickLike={() => console.log('like')} />
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
    const config = new Configuration({
      basePath: baseUrl,
      baseOptions: {
        withCredentials: true
      }
    })
    const productsApi = new ProductsApi(config)
    const productsResponse = await productsApi.getAllProducts()

    return {
      props: {
        initialProducts: productsResponse.data,
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