'use client'

import { CategoryDto, BrandDto } from '@poizon/api'
import { CategoryBrands } from '../components/CategoryBrands'
import { SeoHead } from '@/shared/ui/SeoHead'

interface CategoryLayoutProps {
  category: CategoryDto
  brands: BrandDto[]
}

export const CategoryLayout = ({ category, brands }: CategoryLayoutProps) => {
  return (
    <>
      <SeoHead
        title={`${category.name} | POIZON MARKET`}
        description={`Бренды категории ${category.name} на POIZON MARKET`}
        url={`/catalog/${category.slug}`}
      />

      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">{category.name}</h1>
        <CategoryBrands categorySlug={category.slug} brands={brands} />
      </div>
    </>
  )
} 