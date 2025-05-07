'use client'

import { observer } from 'mobx-react-lite'
import { ProductCard } from '@/shared/ui/Product-Card/ProductCard'
import Link from 'next/link'
import type { CategoryDto, BrandDto, ProductBasicDto } from '@poizon/api'

interface BrandCategoryProductsProps {
  category: CategoryDto
  brand: BrandDto
  products: ProductBasicDto[]
}

export const BrandCategoryProducts = observer(({ category, brand, products }: BrandCategoryProductsProps) => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">{brand.name} в категории {category.name}</h1>
        <div className="text-gray-600">
          <Link href="/catalog" className="hover:text-blue-500">Каталог</Link>
          <span className="mx-2">/</span>
          <Link href={`/catalog/${category.slug}`} className="hover:text-blue-500">{category.name}</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900">{brand.name}</span>
        </div>
      </div>

      {products.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <Link 
              key={product.id} 
              href={`/catalog/${category.slug}/${brand.slug}/${product.slug}`}
            >
              <ProductCard product={product} />
            </Link>
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <h3 className="text-xl font-medium mb-2">Товары не найдены</h3>
          <p className="text-gray-600">В данной категории нет товаров этого бренда</p>
        </div>
      )}
    </div>
  )
}) 