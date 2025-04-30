import { Metadata } from 'next'
import { brandsApi } from '@/shared/api'
import { BrandList } from '@/features/catalog/BrandList'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'Бренды | POIZON MARKET',
  description: 'Список всех брендов в нашем каталоге. Выберите интересующий вас бренд для просмотра товаров.',
}

export default async function BrandsPage() {
  const brandsResponse = await brandsApi.getAllBrands()
  const brands = brandsResponse.data

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Бренды',
    description: 'Список всех брендов в нашем каталоге',
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: brands.map((brand, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        item: {
          '@type': 'Brand',
          name: brand.name,
          url: `/catalog/${brand.slug}`,
          description: brand.description
        }
      }))
    }
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <BrandList brands={brands} />
    </>
  )
} 