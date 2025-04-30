'use client'

import { observer } from 'mobx-react-lite'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { SeoHead } from '@/shared/ui/SeoHead'
import { Snackbar } from '@/shared/ui/Snackbar/Snackbar'
import { Breadcrumbs } from '@/shared/ui/Breadcrumbs'
import type { ProductBasicDto, ProductVariantDto, CategoryDto } from '@poizon/api'
import { cartStore } from '@/shared/stores/cart.store'
import { ProductGallery } from '@/features/product-gallery/ProductGallery'
import { ProductInfo } from '@/features/product-info/ProductInfo'
import { ProductSelection } from '@/features/product-selection/ProductSelection'

interface ProductPageProps {
  product: ProductBasicDto
  category: CategoryDto
  variants: ProductVariantDto[]
}

export const ProductPage = observer(({ product, category, variants }: ProductPageProps) => {
  const [selectedVariant, setSelectedVariant] = useState<ProductVariantDto | null>(null)
  const [selectedSize, setSelectedSize] = useState<string>('')
  const [isAddingToCart, setIsAddingToCart] = useState(false)
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'success' as 'success' | 'error'
  })

  // Обновляем выбранный размер при изменении варианта
  useEffect(() => {
    if (selectedVariant) {
      const sizes = Object.keys(selectedVariant.sizesAndPrices as Record<string, number>)
      if (sizes.length > 0 && !sizes.includes(selectedSize)) {
        setSelectedSize(sizes[0])
      }
    }
  }, [selectedVariant])

  const breadcrumbItems = [
    { label: 'Главная', href: '/' },
    { label: 'Каталог', href: '/catalog' },
    { label: category.name, href: `/catalog/${category.slug}` },
    { label: product.brand.name, href: `/catalog/${category.slug}/${product.brand.slug}` },
    { label: product.name, href: '#' }
  ]

  const handleAddToCart = async () => {
    if (!selectedVariant || !selectedSize) return

    setIsAddingToCart(true)
    try {
      await cartStore.addItem(selectedVariant.id, selectedSize)
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
    <>
      <SeoHead
        title={`${product.name} | POIZON MARKET`}
        description={`Купить ${product.name} на POIZON MARKET`}
        url={`/catalog/${category.slug}/${product.brand.slug}/${product.slug}`}
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
              product={{ productId: product.id, variants }}
              onVariantChange={setSelectedVariant}
              onSizeChange={setSelectedSize}
              selectedSize={selectedSize}
            />

            {/* Кнопка добавления в корзину */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`w-full py-3 px-6 rounded-lg font-medium ${
                !selectedVariant || !selectedSize || isAddingToCart
                  ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
                  : 'bg-indigo-600 text-white hover:bg-indigo-700'
              }`}
              onClick={handleAddToCart}
              disabled={!selectedVariant || !selectedSize || isAddingToCart}
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
    </>
  )
}) 