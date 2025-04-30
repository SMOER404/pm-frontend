import Link from 'next/link'
import { productsApi, categoriesApi } from '@/shared/api'
import type { CategoryDto, ProductResponseDto } from '@poizon/api'

export const dynamic = 'force-dynamic'

export default async function BrandPage({ 
  params 
}: { 
  params: { category: string; brand: string } 
}) {
  const [categoryResponse, productsResponse] = await Promise.all([
    categoriesApi.getCategoryById(params.category),
    productsApi.getAllProducts({ 
      params: { 
        categoryId: params.category,
        brand: params.brand
      }
    })
  ])

  const category = categoryResponse.data
  const products = productsResponse.data

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">{params.brand}</h1>
          <p className="text-gray-600">в категории {category.name}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {products.items.map((product: ProductResponseDto) => (
          <Link 
            key={product.id}
            href={`/catalog/${params.category}/${params.brand}/${product.name.toLowerCase().replace(/\s+/g, '-')}`}
            className="group"
          >
            <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition">
              {product.media && product.media.images && product.media.images[0] && (
                <img 
                  src={product.media.images[0]} 
                  alt={product.name}
                  className="w-full h-64 object-cover rounded-lg mb-4"
                />
              )}
              <h3 className="font-semibold mb-2">{product.name}</h3>
              {product.variants?.[0]?.sizesAndPrices && (
                <p className="text-lg font-bold mt-2">
                  {Object.values(product.variants[0].sizesAndPrices)[0]} ₽
                </p>
              )}
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
} 