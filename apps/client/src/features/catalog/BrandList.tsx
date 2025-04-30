import Link from 'next/link'
import { BrandDto } from '@poizon/api'
import { Card, CardContent, CardHeader, CardTitle } from '@/shared/ui/card'

interface BrandListProps {
  brands: BrandDto[]
}

export function BrandList({ brands }: BrandListProps) {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Бренды</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {brands.map((brand) => (
          <Link key={brand.id} href={`/catalog/${brand.slug}`}>
            <Card className="h-full hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>{brand.name}</CardTitle>
              </CardHeader>
              <CardContent>
                {brand.description && (
                  <p className="text-gray-600">{brand.description}</p>
                )}
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
} 