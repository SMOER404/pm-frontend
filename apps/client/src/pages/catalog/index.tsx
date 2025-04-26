import { observer } from 'mobx-react-lite'
import { GetServerSideProps } from 'next'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
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

interface CatalogPageProps {
  initialProducts: ProductResponseDto[]
  categories: CategoryDto[]
  brands: BrandDto[]
}

const CatalogPage = ({ initialProducts, categories, brands }: CatalogPageProps) => {
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

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Filters Sidebar */}
          <aside className="w-full md:w-64 flex-shrink-0">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-bold mb-6">Фильтры</h2>

              {/* Category Filter */}
              <div className="mb-6">
                <h3 className="font-medium mb-3">Категория</h3>
                <select
                  className="input"
                  value={productStore.filters.category}
                  onChange={(e) => {
                    productStore.setFilters({ category: e.target.value })
                    router.push({
                      pathname: router.pathname,
                      query: { ...router.query, category: e.target.value },
                    })
                  }}
                >
                  <option value="">Все категории</option>
                  {categories.map((category) => (
                    <option key={category.id} value={category.id}>
                      {category.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Brand Filter */}
              <div className="mb-6">
                <h3 className="font-medium mb-3">Бренд</h3>
                <select
                  className="input"
                  value={productStore.filters.brand}
                  onChange={(e) => {
                    productStore.setFilters({ brand: e.target.value })
                    router.push({
                      pathname: router.pathname,
                      query: { ...router.query, brand: e.target.value },
                    })
                  }}
                >
                  <option value="">Все бренды</option>
                  {brands.map((brand) => (
                    <option key={brand.id} value={brand.id}>
                      {brand.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Price Range Filter */}
              <div className="mb-6">
                <h3 className="font-medium mb-3">Цена</h3>
                <div className="flex gap-4">
                  <input
                    type="number"
                    className="input w-1/2"
                    placeholder="От"
                    value={productStore.filters.minPrice || ''}
                    onChange={(e) => {
                      productStore.setFilters({ minPrice: Number(e.target.value) })
                      router.push({
                        pathname: router.pathname,
                        query: { ...router.query, minPrice: e.target.value },
                      })
                    }}
                  />
                  <input
                    type="number"
                    className="input w-1/2"
                    placeholder="До"
                    value={productStore.filters.maxPrice || ''}
                    onChange={(e) => {
                      productStore.setFilters({ maxPrice: Number(e.target.value) })
                      router.push({
                        pathname: router.pathname,
                        query: { ...router.query, maxPrice: e.target.value },
                      })
                    }}
                  />
                </div>
              </div>

              {/* Size Filter */}
              <div className="mb-6">
                <h3 className="font-medium mb-3">Размер</h3>
                <select
                  className="input"
                  value={productStore.filters.size}
                  onChange={(e) => {
                    productStore.setFilters({ size: e.target.value })
                    router.push({
                      pathname: router.pathname,
                      query: { ...router.query, size: e.target.value },
                    })
                  }}
                >
                  <option value="">Все размеры</option>
                  <option value="XS">XS</option>
                  <option value="S">S</option>
                  <option value="M">M</option>
                  <option value="L">L</option>
                  <option value="XL">XL</option>
                  <option value="XXL">XXL</option>
                </select>
              </div>

              {/* Color Filter */}
              <div className="mb-6">
                <h3 className="font-medium mb-3">Цвет</h3>
                <select
                  className="input"
                  value={productStore.filters.color}
                  onChange={(e) => {
                    productStore.setFilters({ color: e.target.value })
                    router.push({
                      pathname: router.pathname,
                      query: { ...router.query, color: e.target.value },
                    })
                  }}
                >
                  <option value="">Все цвета</option>
                  <option value="black">Черный</option>
                  <option value="white">Белый</option>
                  <option value="red">Красный</option>
                  <option value="blue">Синий</option>
                  <option value="green">Зеленый</option>
                </select>
              </div>
            </div>
          </aside>

          {/* Products Grid */}
          <main className="flex-1">
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-2xl font-bold">Каталог товаров</h1>
              <select
                className="input"
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

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {productStore.filteredProducts.map((product) => (
                <Link 
                  href={`/product/${product.id}`} 
                  key={product.id}
                  className="block bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
                >
                  <motion.img 
                    src={`https://dummyimage.com/400x300/CCCCCC/000000&text=${encodeURIComponent(product.name)}`}
                    alt={product.name}
                    className="w-full h-48 object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  />
                  <div className="p-4">
                    <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
                    <p className="text-gray-600 mb-2">
                      {brands.find(brand => brand.id === product.brand)?.name || 'Бренд не указан'}
                    </p>
                    <p className="text-xl font-bold text-primary">
                      {product.variants?.[0]?.priceCny ? `${product.variants[0].priceCny} ¥` : 'Цена не указана'}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </main>
        </div>
      </div>
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000'
  const config = new Configuration({
    basePath: baseUrl,
    baseOptions: {
      withCredentials: true
    }
  })

  try {
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
        brands: brandsResponse.data
      }
    }
  } catch (error) {
    console.error('Error fetching data:', error)
    return {
      props: {
        initialProducts: [],
        categories: [],
        brands: []
      }
    }
  }
}

export default observer(CatalogPage) 