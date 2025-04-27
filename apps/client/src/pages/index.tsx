import { observer } from 'mobx-react-lite'
import { GetServerSideProps } from 'next'
import Layout from '@/components/layout/Layout'
import { SeoHead } from '@/shared/ui/SeoHead'
import { productStore } from '@/shared/stores/product.store'
import React from 'react'
import { ProductsApi, CategoriesApi, Configuration, ProductResponseDto, CategoryDto } from '@poizon/api'
import { CategoryProducts } from '@/features/category-products/CategoryProducts'
import { ShopFeatures } from '@/features/shop-features/ShopFeatures'

interface HomePageProps {
  initialProducts: ProductResponseDto[]
  categories: CategoryDto[]
}

const HomePage = observer(({ initialProducts, categories }: HomePageProps) => {
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
      
      <CategoryProducts categories={categories} products={initialProducts} />
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
    const categoriesApi = new CategoriesApi(config)
    
    const [productsResponse, categoriesResponse] = await Promise.all([
      productsApi.getAllProducts(),
      categoriesApi.getAllCategories()
    ])

    return {
      props: {
        initialProducts: productsResponse.data,
        categories: categoriesResponse.data,
      },
    }
  } catch (error) {
    console.error('Ошибка при загрузке данных:', error)
    return {
      props: {
        initialProducts: [],
        categories: [],
      },
    }
  }
}

export default HomePage 