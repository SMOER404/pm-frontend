import { observer } from 'mobx-react-lite'
import { GetServerSideProps } from 'next'
import { useRouter } from 'next/router'
import Layout from '@/components/layout/Layout'
import { SeoHead } from '@/shared/ui/SeoHead'
import { productStore } from '@/shared/stores/product.store'
import {api} from "@poizon/api";
import {CategoriesService} from "@poizon/api/dist/generated";

interface CatalogPageProps {
  initialProducts: any[] // TODO: Добавить правильный тип после генерации API
  categories: string[]
  brands: string[]
}

const CatalogPage = ({ initialProducts, categories, brands }: CatalogPageProps) => {
  const router = useRouter()
  // const { category, brand, minPrice, maxPrice, size, color, sortBy } = router.query

  console.log('initialProducts', initialProducts)
  console.log('categories', categories)
  console.log('brands', brands)
  // Инициализируем стор начальными данными и фильтрами
  productStore.setProducts(initialProducts)
  // if (category) productStore.setFilters({ category: category  as string })
  // if (brand) productStore.setFilters({ brand: brand as string })
  // if (minPrice) productStore.setFilters({ minPrice: Number(minPrice) })
  // if (maxPrice) productStore.setFilters({ maxPrice: Number(maxPrice) })
  // if (size) productStore.setFilters({ size: size as string })
  // if (color) productStore.setFilters({ color: color as string })
  // if (sortBy) productStore.setSortBy(sortBy as string)



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
                    <option key={category} value={category}>
                      {category}
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
                    <option key={brand} value={brand}>
                      {brand}
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
                    className="input"
                    placeholder="От"
                    value={productStore.filters.minPrice || ''}
                    onChange={(e) => {
                      productStore.setFilters({
                        minPrice: Number(e.target.value),
                      })
                      router.push({
                        pathname: router.pathname,
                        query: { ...router.query, minPrice: e.target.value },
                      })
                    }}
                  />
                  <input
                    type="number"
                    className="input"
                    placeholder="До"
                    value={productStore.filters.maxPrice || ''}
                    onChange={(e) => {
                      productStore.setFilters({
                        maxPrice: Number(e.target.value),
                      })
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
                </select>
              </div>
            </div>
          </aside>

          {/* Products Grid */}
          <div className="flex-1">
            {/* Sort Controls */}
            <div className="bg-white rounded-lg shadow-md p-4 mb-6">
              <div className="flex items-center justify-between">
                <p className="text-gray-600">
                  Найдено {productStore.filteredProducts.length} товаров
                </p>
                <select
                  className="input w-48"
                  value={productStore.sortBy}
                  onChange={(e) => {
                    productStore.setSortBy(e.target.value)
                    router.push({
                      pathname: router.pathname,
                      query: { ...router.query, sortBy: e.target.value },
                    })
                  }}
                >
                  <option value="newest">Сначала новые</option>
                  <option value="price-asc">По возрастанию цены</option>
                  <option value="price-desc">По убыванию цены</option>
                  <option value="rating">По рейтингу</option>
                </select>
              </div>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {productStore.filteredProducts.map((product) => (
                <a
                  key={product.id}
                  href={`/product/${product.id}`}
                  className="group"
                >
                  <div className="bg-white rounded-lg shadow-md overflow-hidden">
                    <div className="relative aspect-square">
                      {/*<img*/}
                      {/*  src={product.images[0]}*/}
                      {/*  alt={product.name}*/}
                      {/*  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"*/}
                      {/*/>*/}
                    </div>
                    <div className="p-4">
                      <h3 className="font-medium mb-2 group-hover:text-primary-600">
                        {product.name}
                      </h3>
                      <p className="text-gray-600 mb-2">{product.brand}</p>
                      <div className="flex items-center justify-between">
                        <p className="font-bold">{product.price} ₽</p>
                        <div className="flex items-center">
                          <svg
                            className="w-4 h-4 text-yellow-400"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                          <span className="ml-1 text-sm text-gray-600">
                            {product.rating}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  try {
    // TODO: Заменить на реальный API клиент после генерации
    const productsResponse = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products`)
    const products = await productsResponse.json()

    // Получаем список категорий и брендов
    const categoriesResponse = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/categories`)
    const categories = await categoriesResponse.json()

    const brandsResponse = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/brands`)
    const brands = await brandsResponse.json()


    console.log('products', products)

    return {
      props: {
        initialProducts: products,
        categories: categories,
        brands: brands,
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