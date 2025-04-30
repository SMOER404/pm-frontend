import Link from 'next/link'
import { CategoryDto, BrandDto, ProductResponseDto } from '@poizon/api'
import { Card, CardContent, CardHeader, CardTitle } from '@/shared/ui/card'

interface BrandCategoryPageProps {
  category: CategoryDto
  brand: BrandDto
  products: ProductResponseDto[]
}

export function BrandCategoryPage({ category, brand, products }: BrandCategoryPageProps) {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="space-y-8">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold">
            {brand.name} в категории {category.name}
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {products.map((product) => (
            <Link 
              key={product.id}
              href={`/catalog/${category.slug}/${brand.slug}/${product.slug}`}
              className="group"
            >
              <Card className="h-full hover:shadow-lg transition-shadow">
                {product.media && 'images' in product.media && Array.isArray(product.media.images) && product.media.images[0] && (
                  <img 
                    src={product.media.images[0]} 
                    alt={product.name}
                    className="w-full h-64 object-cover rounded-t-lg"
                  />
                )}
                <CardHeader>
                  <CardTitle>{product.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{brand.name}</p>
                  {product.variants?.[0]?.sizesAndPrices && (
                    <p className="text-lg font-bold mt-2">
                      {Object.values(product.variants[0].sizesAndPrices as Record<string, number>)[0]} ₽
                    </p>
                  )}
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
} 