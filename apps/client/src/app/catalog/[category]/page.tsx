import Link from 'next/link'
import { productsApi, categoriesApi } from '@/shared/api'
import type { CategoryDto, ProductResponseDto } from '@poizon/api'

export const dynamic = 'force-dynamic'

export default async function CategoryPage({ 
  params 
}: { 
  params: { category: string } 
}) {
  const [categoryResponse, productsResponse] = await Promise.all([
    categoriesApi.getCategoryById(params.category),
    productsApi.getAllProducts()
  ])

  const category = categoryResponse.data
  const products = (productsResponse.data.items as unknown as ProductResponseDto[]).filter(product => 
    product.category.name.toLowerCase() === params.category
  )

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">{category.name}</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {products.map((product) => (
          <Link 
            key={product.id}
            href={`/catalog/${params.category}/${product.brand.name.toLowerCase()}/${product.name.toLowerCase().replace(/\s+/g, '-')}`}
            className="group"
          >
            <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition">
              {product.media && 'images' in product.media && Array.isArray(product.media.images) && product.media.images[0] && (
                <img 
                  src={product.media.images[0]} 
                  alt={product.name}
                  className="w-full h-64 object-cover rounded-lg mb-4"
                />
              )}
              <h3 className="font-semibold mb-2">{product.name}</h3>
              <p className="text-gray-600">{product.brand.name}</p>
              {product.variants?.[0]?.sizesAndPrices && (
                <p className="text-lg font-bold mt-2">
                  {Object.values(product.variants[0].sizesAndPrices as Record<string, number>)[0]} ₽
                </p>
              )}
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
} 