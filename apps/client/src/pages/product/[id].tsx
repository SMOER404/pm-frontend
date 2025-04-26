import { observer } from 'mobx-react-lite'
import { GetServerSideProps } from 'next'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Snackbar, Alert } from '@mui/material'
import Layout from '@/components/layout/Layout'
import { SeoHead } from '@/shared/ui/SeoHead'
import { ProductsApi, Configuration, ProductResponseDto, ProductVariantDto } from '@poizon/api'
import { cartStore } from '@/shared/stores/cart.store'
import { useRouter } from 'next/router'

interface ProductPageProps {
  product: ProductResponseDto
}

const ProductPage = ({ product }: ProductPageProps) => {
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

  const sizes = Array.from(new Set(product.variants.map(v => v.size)))
  const colors = Array.from(new Set(product.variants.map(v => v.color)))

  // Обновляем выбранный вариант при изменении размера или цвета
  useEffect(() => {
    if (selectedSize && selectedColor) {
      const variant = product.variants.find(
        v => v.size === selectedSize && v.color === selectedColor
      )
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

  return (
    <Layout>
      <SeoHead
        title={`${product.name} | POIZON MARKET`}
        description={product.description || `Купить ${product.name} на POIZON MARKET`}
        url={`/product/${product.id}`}
      />

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Галерея изображений */}
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="aspect-square relative rounded-lg overflow-hidden"
            >
              <Image
                src={`https://dummyimage.com/800x800/CCCCCC/000000&text=${encodeURIComponent(product.name)}`}
                alt={product.name}
                fill
                className="object-cover"
              />
            </motion.div>
            
            {/* Миниатюры */}
            <div className="grid grid-cols-4 gap-2 mt-4">
              {[1, 2, 3, 4].map((_, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="aspect-square relative rounded-lg overflow-hidden cursor-pointer"
                >
                  <Image
                    src={`https://dummyimage.com/200x200/CCCCCC/000000&text=${encodeURIComponent(product.name)}`}
                    alt={`${product.name} - фото ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </motion.div>
              ))}
            </div>
          </div>

          {/* Информация о товаре */}
          <div className="space-y-6">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-3xl font-bold"
            >
              {product.name}
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-2xl font-bold text-indigo-600"
            >
              {selectedVariant ? `${selectedVariant.priceCny} ¥` : 'Выберите размер и цвет'}
            </motion.div>

            {/* Выбор размера */}
            <div className="space-y-2">
              <h3 className="text-lg font-medium">Размер</h3>
              <div className="grid grid-cols-6 gap-2">
                {sizes.map(size => (
                  <motion.button
                    key={size}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`p-2 border rounded-lg ${
                      selectedSize === size
                        ? 'border-indigo-600 bg-indigo-50 text-indigo-600'
                        : 'border-gray-200 hover:border-indigo-600'
                    }`}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Выбор цвета */}
            <div className="space-y-2">
              <h3 className="text-lg font-medium">Цвет</h3>
              <div className="grid grid-cols-6 gap-2">
                {colors.map(color => (
                  <motion.button
                    key={color}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`p-2 border rounded-lg ${
                      selectedColor === color
                        ? 'border-indigo-600 bg-indigo-50 text-indigo-600'
                        : 'border-gray-200 hover:border-indigo-600'
                    }`}
                    onClick={() => setSelectedColor(color)}
                  >
                    {color}
                  </motion.button>
                ))}
              </div>
            </div>

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

            {/* Описание */}
            {product.description && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="prose prose-indigo"
              >
                <h3 className="text-lg font-medium">Описание</h3>
                <p>{product.description}</p>
              </motion.div>
            )}
          </div>
        </div>
      </div>

      {/* Уведомление */}
      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert 
          onClose={handleCloseSnackbar} 
          severity={snackbar.severity}
          sx={{ width: '100%' }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000'
  const config = new Configuration({
    basePath: baseUrl,
    baseOptions: {
      withCredentials: true
    }
  })

  try {
    const productsApi = new ProductsApi(config)
    const response = await productsApi.getProductById(params?.id as string)

    return {
      props: {
        product: response.data
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