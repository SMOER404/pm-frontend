import { Metadata } from 'next'
import { BrandLayout } from '@/features/catalog/layouts/BrandLayout'
import { CategoryStore } from '@/entities/category/CategoryStore'
import { BrandStore } from '@/entities/brand/BrandStore'
import { productStore } from '@/shared/stores/product.store'
import { Breadcrumbs } from '@/shared/ui/Breadcrumbs'

interface BrandPageProps {
  params: {
    categorySlug: string
    brandSlug: string
  }
}

export async function generateMetadata({ params }: BrandPageProps): Promise<Metadata> {
  const categoryStore = new CategoryStore()
  const brandStore = new BrandStore()

  await Promise.all([
    categoryStore.fetchCategoryBySlug(params.categorySlug),
    brandStore.fetchBrandsByCategorySlug(params.categorySlug),
  ])

  const brand = brandStore.brands.find(b => b.slug === params.brandSlug)

  if (!brand) {
    return {
      title: 'Бренд не найден',
    }
  }

  return {
    title: brand.name,
    description: `Товары бренда ${brand.name} в категории ${categoryStore.category?.name}`,
  }
}

export default async function BrandPage({ params }: BrandPageProps) {
  const categoryStore = new CategoryStore()
  const brandStore = new BrandStore()

  await Promise.all([
    categoryStore.fetchCategoryBySlug(params.categorySlug),
    brandStore.fetchBrandsByCategorySlug(params.categorySlug),
  ])

  const brand = brandStore.brands.find(b => b.slug === params.brandSlug)

  if (!brand) {
    return <div>Бренд не найден</div>
  }

  await productStore.fetchProducts()
  productStore.setFilters({ brand: brand.id })

  const breadcrumbItems = [
    { label: 'Каталог', href: '/catalog' },
    { label: categoryStore.category?.name || '', href: `/catalog/${params.categorySlug}` },
    { label: brand.name }
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <Breadcrumbs items={breadcrumbItems} />
      <BrandLayout
        brand={brand}
        products={productStore.filteredProducts}
      />
    </div>
  )
} 