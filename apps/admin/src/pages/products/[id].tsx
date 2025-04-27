import { observer } from 'mobx-react-lite'
import { GetServerSideProps } from 'next'
import { useRouter } from 'next/router'
import { ProductResponseDto, Configuration, CategoriesApi, BrandsApi } from '@poizon/api'
import ProductForm from '@/features/product-form/ProductForm'
import { ProductService } from '@/shared/services/product.service'

interface EditProductPageProps {
  product: ProductResponseDto
  categories: any[]
  brands: any[]
}

const EditProductPage = observer(({ product, categories, brands }: EditProductPageProps) => {
  const router = useRouter()
  const productService = new ProductService()

  const handleSubmit = async (updatedProduct: Partial<ProductResponseDto>) => {
    try {
      if (!updatedProduct.name || !updatedProduct.category || !updatedProduct.brand) {
        console.error('Не все обязательные поля заполнены')
        return
      }

      // Обновляем основные данные товара
      await productService.updateProduct(product.id, {
        name: updatedProduct.name,
        description: updatedProduct.description || '',
        category: updatedProduct.category,
        brand: updatedProduct.brand,
        media: updatedProduct.media || { images: [] }
      })

      // Обновляем варианты товара
      if (updatedProduct.variants) {
        for (const variant of updatedProduct.variants) {
          await productService.addProductVariant(product.id, variant)
        }
      }

      router.push('/products')
    } catch (error) {
      console.error('Ошибка при обновлении товара:', error)
    }
  }

  const handleCancel = () => {
    router.push('/products')
  }

  return (
    <div>
      <h1>Редактирование товара</h1>
      <ProductForm
        product={product}
        categories={categories}
        brands={brands}
        onSubmit={handleSubmit}
        onCancel={handleCancel}
      />
    </div>
  )
})

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000'
    const config = new Configuration({
      basePath: baseUrl,
      baseOptions: {
        withCredentials: true
      }
    })
    const productService = new ProductService()
    const categoriesApi = new CategoriesApi(config)
    const brandsApi = new BrandsApi(config)
    
    const [product, categoriesResponse, brandsResponse] = await Promise.all([
      productService.getProductById(params?.id as string),
      categoriesApi.getAllCategories(),
      brandsApi.getAllBrands()
    ])

    return {
      props: {
        product,
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

export default EditProductPage 