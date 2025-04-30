import { observer } from 'mobx-react-lite'
import { GetServerSideProps } from 'next'
import { useEffect, useState } from 'react'
import Layout from '@/components/layout/Layout'
import { SeoHead } from '@/shared/ui/SeoHead'
import { Snackbar } from '@/shared/ui/Snackbar/Snackbar'
import { Breadcrumbs } from '@/shared/ui/Breadcrumbs'
import { ProductsApi, Configuration, CategoriesApi } from '@poizon/api'
import type { ProductResponseDto, ProductVariantDto, CategoryDto } from '@poizon/api'
import { cartStore } from '@/shared/stores/cart.store'
import { useRouter } from 'next/router'
import { ProductGallery } from '@/features/product-gallery/ProductGallery'
import { ProductInfo } from '@/features/product-info/ProductInfo'
import { ProductSelection } from '@/features/product-selection/ProductSelection'
import { motion } from 'framer-motion'

interface ProductPageProps {
  product: ProductResponseDto
  category: CategoryDto
}

const ProductPage = ({ product, category }: ProductPageProps) => {
  const router = useRouter()
  const { id } = router.query
  const [selectedVariant, setSelectedVariant] = useState<ProductVariantDto | null>(null)
  const [selectedSize, setSelectedSize] = useState<string>('')
  const [selectedColor, setSelectedColor] = useState<string>('')
  const [isAddingToCart, setIsAddingToCart] = useState(false)
  const [snackbar, setSnackbar] = useState<{
    open: boolean;
    message: string;
    severity: 'success' | 'error';
  }>({
    open: false,
    message: '',
    severity: 'success'
  })
  console.log(product	)

  // Обновляем выбранный вариант при изменении размера или цвета
  useEffect(() => {
    if (selectedSize && selectedColor) {
      const variant = product.variants.find(v => {
        const sizesAndPrices = v.sizesAndPrices as Record<string, number>;
        return Object.keys(sizesAndPrices).includes(selectedSize) && v.color === selectedColor;
      })
      setSelectedVariant(variant || null)
    } else {
      setSelectedVariant(null)
    }
  }, [selectedSize, selectedColor, product.variants])

  const handleAddToCart = async () => {
    if (!selectedVariant?.id) {
      setSnackbar({
        open: true,
        message: 'Пожалуйста, выберите размер и цвет',
        severity: 'error'
      })
      return
    }

    try {
      setIsAddingToCart(true)
      await cartStore.addItem(selectedVariant.id)
      setSnackbar({
        open: true,
        message: 'Товар добавлен в корзину',
        severity: 'success'
      })
    } catch (error) {
      setSnackbar({
        open: true,
        message: 'Ошибка при добавлении товара в корзину',
        severity: 'error'
      })
    } finally {
      setIsAddingToCart(false)
    }
  }

  const handleCloseSnackbar = () => {
    setSnackbar(prev => ({ ...prev, open: false }))
  }

  const breadcrumbItems = [
    { label: 'Каталог', href: '/catalog' },
    { label: category.name, href: `/catalog/${category.id}` },
    { label: product.name }
  ]

  return (
    <Layout>
      <SeoHead
        title={`${product.name} | POIZON MARKET`}
        description={product.description || `Купить ${product.name} на POIZON MARKET`}
        url={`/product/${product.id}`}
      />

      <div className="container mx-auto px-4 py-8">
        <Breadcrumbs items={breadcrumbItems} />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ProductGallery product={product} />
          
          <div className="space-y-6">
            <ProductInfo 
              product={product}
              selectedVariant={selectedVariant}
              selectedSize={selectedSize}
            />

            <ProductSelection
              product={product}
              onVariantChange={setSelectedVariant}
            />

            {/* Кнопка добавления в корзину */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`w-full py-3 px-6 rounded-lg font-medium ${
                !selectedVariant || isAddingToCart
                  ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
                  : 'bg-indigo-600 text-white hover:bg-indigo-700'
              }`}
              onClick={handleAddToCart}
              disabled={!selectedVariant || isAddingToCart}
            >
              {isAddingToCart ? 'Добавление...' : 'Добавить в корзину'}
            </motion.button>
          </div>
        </div>
      </div>

      <Snackbar
        open={snackbar.open}
        message={snackbar.message}
        severity={snackbar.severity}
        onClose={handleCloseSnackbar}
      />
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000'
  const configuration = new Configuration({ basePath: baseUrl })
  const productsApi = new ProductsApi(configuration)
  const categoriesApi = new CategoriesApi(configuration)

  try {
    const [productResponse, categoriesResponse] = await Promise.all([
      productsApi.getProductById(params?.id as string),
      categoriesApi.getAllCategories()
    ])

    const product = productResponse.data
    const category = categoriesResponse.data.find(
      (category: CategoryDto) => category.id === product.category
    )

    if (!category) {
      return {
        notFound: true
      }
    }

    return {
      props: {
        product,
        category
      }
    }
  } catch (error) {
    console.error('Error fetching product:', error)
    return {
      notFound: true
    }
  }
}

export default observer(ProductPage) 