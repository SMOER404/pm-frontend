import { observer } from 'mobx-react-lite'
import { GetServerSideProps } from 'next'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import Layout from '@/components/layout/Layout'
import { SeoHead } from '@/shared/ui/SeoHead'
import { productStore } from '@/shared/stores/product.store'
import { 
  CategoryDto, 
  BrandDto, 
  ProductResponseDto,
  Configuration,
  ProductsApi,
  CategoriesApi,
  BrandsApi
} from "@poizon/api"
import { CatalogFilters } from '@/features/catalog-filters/CatalogFilters'
import ProductCard from '@/shared/ui/Product-Card/ProductCard'
import styles from './Catalog.module.css'

interface CatalogPageProps {
  initialProducts: ProductResponseDto[]
  categories: CategoryDto[]
  brands: BrandDto[]
}

const CatalogPage = observer(({ initialProducts, categories, brands }: CatalogPageProps) => {
  const router = useRouter()

  useEffect(() => {
    productStore.setProducts(initialProducts)
  }, [initialProducts])

  return (
    <Layout>
      <SeoHead
        title="Каталог товаров | POIZON MARKET"
        description="Каталог стильной одежды и аксессуаров от лучших брендов. Фильтрация по категориям, брендам, размерам и цветам."
        url="/catalog"
      />

      <div className={styles.container}>
        <div className={styles.header}>
          <h1 className={styles.title}>Каталог товаров</h1>
          <div className={styles.controls}>
            <CatalogFilters categories={categories} brands={brands} />
            <select
              className={styles.sortSelect}
              value={productStore.sortBy}
              onChange={(e) => {
                productStore.setSortBy(e.target.value)
                router.push({
                  pathname: router.pathname,
                  query: { ...router.query, sortBy: e.target.value },
                })
              }}
            >
              <option value="price">По цене</option>
              <option value="rating">По рейтингу</option>
            </select>
          </div>
        </div>

        <div className={styles.productsGrid}>
          {productStore.filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onClickLike={() => {}}
            />
          ))}
        </div>
      </div>
    </Layout>
  )
})

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
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
    const brandsApi = new BrandsApi(config)
    
    const [productsResponse, categoriesResponse, brandsResponse] = await Promise.all([
      productsApi.getAllProducts(),
      categoriesApi.getAllCategories(),
      brandsApi.getAllBrands()
    ])

    return {
      props: {
        initialProducts: productsResponse.data,
        categories: categoriesResponse.data,
        brands: brandsResponse.data,
      },
    }
  } catch (error) {
    console.error('Ошибка при загрузке данных:', error)
    return {
      props: {
        initialProducts: [],
        categories: [],
        brands: [],
      },
    }
  }
}

export default CatalogPage 