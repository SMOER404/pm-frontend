import { ProductResponseDto } from '@poizon/api'
import ProductCard from "@/shared/ui/Product-Card/ProductCard"
import Link from 'next/link'

interface FeaturedProductsProps {
  products: ProductResponseDto[]
}

export const FeaturedProducts = ({ products }: FeaturedProductsProps) => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-medium mb-8">Популярные товары</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {products.slice(0, 8).map((product) => (
            <Link
              key={product.id}
              href={`/product/${product.id}`}
              className="group"
            >
              <ProductCard product={product} onClickLike={() => console.log('like')} />
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
} 