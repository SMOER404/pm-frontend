import { Metadata } from 'next'
import { api } from '@/shared/api'
import type { CategoryDto, BrandDto, ProductBasicDto } from '@poizon/api'
import { BrandCategoryProducts } from '@/features/brand-category/BrandCategoryProducts'

export const dynamic = 'force-dynamic'

interface BrandCategoryPageProps {
  params: {
    categorySlug: string
    brandSlug: string
  }
}

export async function generateMetadata({ params }: BrandCategoryPageProps): Promise<Metadata> {
  // Получаем категорию и бренд
  const [categoriesResponse, brandsResponse] = await Promise.all([
    api.categories.getAllCategories(),
    api.brands.getAllBrands()
  ])

  const category = categoriesResponse.data.find(cat => cat.slug === params.categorySlug)
  const brand = brandsResponse.data.find(b => b.slug === params.brandSlug)

  if (!category || !brand) {
    return {
      title: 'Страница не найдена | POIZON MARKET',
      description: 'Страница не найдена',
    }
  }

  return {
    title: `${brand.name} в категории ${category.name} | POIZON MARKET`,
    description: `Каталог ${brand.name} в категории ${category.name.toLowerCase()}. Широкий выбор товаров по доступным ценам.`,
  }
}

export default async function BrandCategoryPage({ params }: BrandCategoryPageProps) {
  // Получаем категорию и бренд
  const [categoriesResponse, brandsResponse] = await Promise.all([
    api.categories.getAllCategories(),
    api.brands.getAllBrands()
  ])

  const category = categoriesResponse.data.find(cat => cat.slug === params.categorySlug)
  const brand = brandsResponse.data.find(b => b.slug === params.brandSlug)

  if (!category || !brand) {
    return <div>Страница не найдена</div>
  }

  // Получаем все товары категории
  const productsResponse = await api.products.getAllProducts(1, 20, category.id)
  const allProducts = productsResponse.data.items as unknown as ProductBasicDto[]

  // Фильтруем товары по бренду
  const products = allProducts.filter(product => product.brand.id === brand.id)

  return <BrandCategoryProducts category={category} brand={brand} products={products} />
} 