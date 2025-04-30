import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { productsApi, categoriesApi } from '@/shared/api'
import { ProductPage } from '@/features/product/ProductPage'
import { ProductResponseDto, CategoryDto, PaginatedResponseDto } from '@poizon-market/api'

export const dynamic = 'force-dynamic'

interface ProductPageProps {
  params: {
    category: string
    brand: string
    product: string
  }
}

// Функция для декодирования URL-параметров
function decodeUrlParam(param: string): string {
  try {
    return decodeURIComponent(param)
  } catch (e) {
    console.error('Ошибка декодирования параметра:', param, e)
    return param
  }
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  try {
    console.log('Генерация метаданных для:', params)
    
    // Декодируем параметры URL
    const decodedCategory = decodeUrlParam(params.category)
    const decodedBrand = decodeUrlParam(params.brand)
    const decodedProduct = decodeUrlParam(params.product)
    
    console.log('Декодированные параметры:', {
      category: decodedCategory,
      brand: decodedBrand,
      product: decodedProduct
    })
    
    const productsResponse = await productsApi.getAllProducts()
    // Приводим данные к правильному типу
    const products = productsResponse.data as unknown as { items: ProductResponseDto[] }
    
    console.log('Найдено продуктов:', products.items.length)
    console.log('Поиск продукта с параметрами:', {
      productName: decodedProduct,
      brandName: decodedBrand,
      categoryName: decodedCategory
    })
    
    const product = products.items.find((p: ProductResponseDto) => {
      const productNameMatch = p.name.toLowerCase().replace(/\s+/g, '-') === decodedProduct
      const brandNameMatch = p.brand.name.toLowerCase() === decodedBrand
      const categoryNameMatch = p.category.name.toLowerCase() === decodedCategory
      
      console.log('Проверка продукта:', {
        productName: p.name.toLowerCase().replace(/\s+/g, '-'),
        brandName: p.brand.name.toLowerCase(),
        categoryName: p.category.name.toLowerCase(),
        matches: {
          productNameMatch,
          brandNameMatch,
          categoryNameMatch
        }
      })
      
      return productNameMatch && brandNameMatch && categoryNameMatch
    })
    
    if (!product) {
      console.log('Продукт не найден')
      return {
        title: 'Товар не найден | POIZON MARKET',
        description: 'Запрашиваемый товар не найден',
      }
    }

    console.log('Продукт найден:', product.name)
    return {
      title: `${product.name} | POIZON MARKET`,
      description: `Купить ${product.name} на POIZON MARKET`,
    }
  } catch (error) {
    console.error('Ошибка при получении метаданных:', error)
    return {
      title: 'Ошибка | POIZON MARKET',
      description: 'Произошла ошибка при загрузке страницы',
    }
  }
}

export default async function Page({ params }: ProductPageProps) {
  try {
    console.log('Загрузка страницы товара с параметрами:', params)
    
    // Декодируем параметры URL
    const decodedCategory = decodeUrlParam(params.category)
    const decodedBrand = decodeUrlParam(params.brand)
    const decodedProduct = decodeUrlParam(params.product)
    
    console.log('Декодированные параметры:', {
      category: decodedCategory,
      brand: decodedBrand,
      product: decodedProduct
    })
    
    const [productsResponse, categoriesResponse] = await Promise.all([
      productsApi.getAllProducts(),
      categoriesApi.getAllCategories()
    ])

    // Приводим данные к правильному типу
    const products = productsResponse.data as unknown as { items: ProductResponseDto[] }
    const categories = categoriesResponse.data as CategoryDto[]
    
    console.log('Найдено продуктов:', products.items.length)
    console.log('Найдено категорий:', categories.length)
    
    const product = products.items.find((p: ProductResponseDto) => {
      const productNameMatch = p.name.toLowerCase().replace(/\s+/g, '-') === decodedProduct
      const brandNameMatch = p.brand.name.toLowerCase() === decodedBrand
      const categoryNameMatch = p.category.name.toLowerCase() === decodedCategory
      
      console.log('Проверка продукта:', {
        productName: p.name.toLowerCase().replace(/\s+/g, '-'),
        brandName: p.brand.name.toLowerCase(),
        categoryName: p.category.name.toLowerCase(),
        matches: {
          productNameMatch,
          brandNameMatch,
          categoryNameMatch
        }
      })
      
      return productNameMatch && brandNameMatch && categoryNameMatch
    })
    
    const category = categories.find(c => 
      c.name.toLowerCase() === decodedCategory
    )

    if (!product || !category) {
      console.log('Продукт или категория не найдены')
      notFound()
    }

    console.log('Продукт и категория найдены, рендеринг страницы')
    return <ProductPage product={product} category={category} />
  } catch (error) {
    console.error('Ошибка при загрузке страницы товара:', error)
    notFound()
  }
} 