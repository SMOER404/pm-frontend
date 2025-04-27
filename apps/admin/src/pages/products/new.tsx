import { observer } from 'mobx-react-lite'
import { GetServerSideProps } from 'next'
import { useRouter } from 'next/router'
import { ProductResponseDto, Configuration, CategoriesApi, BrandsApi } from '@poizon/api'
import ProductForm from '@/features/product-form/ProductForm'
import { ProductService } from '@/shared/services/product.service'

interface NewProductPageProps {
  categories: any[]
  brands: any[]
}

const NewProductPage = observer(({ categories, brands }: NewProductPageProps) => {
  const router = useRouter()
  const productService = new ProductService()

  const handleSubmit = async (product: Partial<ProductResponseDto>) => {
    try {
      if (!product.name || !product.category || !product.brand) {
        console.error('Не все обязательные поля заполнены')
        return
      }

      // Создаем товар
      const newProduct = await productService.createProduct({
        name: product.name,
        description: product.description || '',
        category: product.category,
        brand: product.brand,
        media: product.media || { images: [] }
      })

      if (!newProduct) {
        throw new Error('Не удалось создать товар')
      }

      // Добавляем варианты товара
      if (product.variants) {
        for (const variant of product.variants) {
          await productService.addProductVariant(newProduct.id, variant)
        }
      }

      router.push('/products')
    } catch (error) {
      console.error('Ошибка при создании товара:', error)
    }
  }

  const handleCancel = () => {
    router.push('/products')
  }

  return (
    <div>
      <h1>Создание нового товара</h1>
      <ProductForm
        categories={categories}
        brands={brands}
        onSubmit={handleSubmit}
        onCancel={handleCancel}
      />
    </div>
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
    const categoriesApi = new CategoriesApi(config)
    const brandsApi = new BrandsApi(config)
    
    const [categoriesResponse, brandsResponse] = await Promise.all([
      categoriesApi.getAllCategories(),
      brandsApi.getAllBrands()
    ])

    return {
      props: {
        categories: categoriesResponse.data,
        brands: brandsResponse.data,
      },
    }
  } catch (error) {
    console.error('Ошибка при загрузке данных:', error)
    return {
      notFound: true,
    }
  }
}

export default NewProductPage 