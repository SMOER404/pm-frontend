import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { api } from '@/shared/api'
import { ProductPage } from '@/features/product/ProductPage'
import { ProductBasicDto, ProductVariantDto, ProductVariantsResponseDto } from '@poizon/api'

export const dynamic = 'force-dynamic'

interface ProductPageProps {
  params: {
    categorySlug: string
    brandSlug: string
    productSlug: string
  }
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const [categoriesResponse, brandsResponse, productsResponse] = await Promise.all([
    api.categories.getAllCategories(),
    api.brands.getAllBrands(),
    api.products.getAllProducts()
  ])

  const category = categoriesResponse.data.find(c => c.slug === params.categorySlug)
  const brand = brandsResponse.data.find(b => b.slug === params.brandSlug)
  const product = (productsResponse.data.items as unknown as ProductBasicDto[]).find(p => 
    p.category.slug === params.categorySlug && 
    p.brand.slug === params.brandSlug && 
    p.slug === params.productSlug
  )

  if (!category || !brand || !product) {
    return {
      title: 'Товар не найден | POIZON MARKET',
      description: 'Запрошенный товар не существует.'
    }
  }

  return {
    title: `${product.name} | ${brand.name} | POIZON MARKET`,
    description: `Купить ${product.name} от ${brand.name} в категории ${category.name}`,
    openGraph: {
      images: product.media && 'images' in product.media && Array.isArray(product.media.images) 
        ? product.media.images 
        : undefined
    }
  }
}

export default async function Page({ params }: ProductPageProps) {
  const [categoriesResponse, brandsResponse, productsResponse] = await Promise.all([
    api.categories.getAllCategories(),
    api.brands.getAllBrands(),
    api.products.getAllProducts()
  ])

  const category = categoriesResponse.data.find(c => c.slug === params.categorySlug)
  const brand = brandsResponse.data.find(b => b.slug === params.brandSlug)
  const product = (productsResponse.data.items as unknown as ProductBasicDto[]).find(p => 
    p.category.slug === params.categorySlug && 
    p.brand.slug === params.brandSlug && 
    p.slug === params.productSlug
  )

  if (!category || !brand || !product) {
    notFound()
  }

  // Получаем варианты продукта
  const variantsResponse = await api.products.getProductVariants(product.id)
  const variants = (variantsResponse.data as ProductVariantsResponseDto).variants

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: `Купить ${product.name} от ${brand.name} в категории ${category.name}`,
    brand: {
      '@type': 'Brand',
      name: brand.name
    },
    category: category.name,
    offers: {
      '@type': 'Offer',
      price: product.minPrice,
      priceCurrency: 'RUB',
      availability: 'https://schema.org/InStock'
    },
    image: product.media && 'images' in product.media && Array.isArray(product.media.images) 
      ? product.media.images[0] 
      : undefined
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ProductPage 
        product={product}
        category={category}
        variants={variants}
      />
    </>
  )
} 