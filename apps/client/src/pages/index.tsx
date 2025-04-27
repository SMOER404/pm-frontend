import { observer } from 'mobx-react-lite'
import { GetServerSideProps } from 'next'
import Layout from '@/components/layout/Layout'
import { SeoHead } from '@/shared/ui/SeoHead'
import { productStore } from '@/shared/stores/product.store'
import React from 'react'
import { ProductsApi, Configuration, ProductResponseDto } from '@poizon/api'
import { FeaturedProducts } from '@/features/featured-products/FeaturedProducts'
import { ShopFeatures } from '@/features/shop-features/ShopFeatures'

interface HomePageProps {
  initialProducts: ProductResponseDto[]
}

const HomePage = observer(({ initialProducts }: HomePageProps) => {
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
      
      <FeaturedProducts products={initialProducts} />
      <ShopFeatures />
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