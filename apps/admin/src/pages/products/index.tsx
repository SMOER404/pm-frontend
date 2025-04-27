import { observer } from 'mobx-react-lite'
import { GetServerSideProps } from 'next'
import { useEffect, useState, useMemo } from 'react'
import { 
  ProductResponseDto,
  Configuration,
  ProductsApi,
  CategoriesApi,
  BrandsApi,
  CategoryDto,
  BrandDto
} from "@poizon/api"
import styles from './Products.module.css'
import { ProductService } from '@/shared/services/product.service'
import Link from 'next/link'

interface ProductsPageProps {
  initialProducts: ProductResponseDto[]
  categories: CategoryDto[]
  brands: BrandDto[]
}

const ProductsPage = observer(({ initialProducts, categories, brands }: ProductsPageProps) => {
  const [products, setProducts] = useState(initialProducts)
  const [selectedCategory, setSelectedCategory] = useState<string>('')
  const [selectedBrand, setSelectedBrand] = useState<string>('')
  const [searchQuery, setSearchQuery] = useState<string>('')
  const [isDeleting, setIsDeleting] = useState<string | null>(null)

  const productService = new ProductService()

  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      const matchesCategory = !selectedCategory || product.category === selectedCategory
      const matchesBrand = !selectedBrand || product.brand === selectedBrand
      const matchesSearch = !searchQuery || 
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
      
      return matchesCategory && matchesBrand && matchesSearch
    })
  }, [products, selectedCategory, selectedBrand, searchQuery])

  const handleDelete = async (id: string) => {
    if (window.confirm('Вы уверены, что хотите удалить этот товар?')) {
      setIsDeleting(id)
      try {
        await productService.deleteProduct(id)
        setProducts(products.filter(product => product.id !== id))
      } catch (error) {
        console.error('Ошибка при удалении товара:', error)
        alert('Не удалось удалить товар. Пожалуйста, попробуйте еще раз.')
      } finally {
        setIsDeleting(null)
      }
    }
  }

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Управление товарами</h1>
        <Link href="/products/new" className="bg-blue-500 text-white px-4 py-2 rounded">
          Добавить товар
        </Link>
      </div>

      <div className="grid grid-cols-3 gap-4 mb-6">
        <select 
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="border p-2 rounded"
        >
          <option value="">Все категории</option>
          {categories.map(category => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>

        <select
          value={selectedBrand}
          onChange={(e) => setSelectedBrand(e.target.value)}
          className="border p-2 rounded"
        >
          <option value="">Все бренды</option>
          {brands.map(brand => (
            <option key={brand.id} value={brand.id}>
              {brand.name}
            </option>
          ))}
        </select>

        <input
          type="text"
          placeholder="Поиск по названию"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="border p-2 rounded"
        />
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-6 py-3 text-left">Название</th>
              <th className="px-6 py-3 text-left">Категория</th>
              <th className="px-6 py-3 text-left">Бренд</th>
              <th className="px-6 py-3 text-left">Варианты</th>
              <th className="px-6 py-3 text-left">Действия</th>
            </tr>
          </thead>
          <tbody>
            {filteredProducts.map(product => (
              <tr key={product.id} className="border-b">
                <td className="px-6 py-4">{product.name}</td>
                <td className="px-6 py-4">
                  {categories.find(c => c.id === product.category)?.name}
                </td>
                <td className="px-6 py-4">
                  {brands.find(b => b.id === product.brand)?.name}
                </td>
                <td className="px-6 py-4">
                  {product.variants.length} вариантов
                </td>
                <td className="px-6 py-4">
                  <Link href={`/products/${product.id}`} className="text-blue-500 mr-2">Редактировать</Link>
                  <button 
                    className="text-red-500"
                    onClick={() => handleDelete(product.id)}
                    disabled={isDeleting === product.id}
                  >
                    {isDeleting === product.id ? 'Удаление...' : 'Удалить'}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
})

export const getServerSideProps: GetServerSideProps<ProductsPageProps> = async () => {
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
    console.error('Error fetching data:', error)
    return {
      props: {
        initialProducts: [],
        categories: [],
        brands: [],
      },
    }
  }
}

export default ProductsPage 