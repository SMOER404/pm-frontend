import { ProductResponseDto } from '@poizon-market/api'
import { ProductCard } from "@/shared/ui/Product-Card/ProductCard"

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
            <ProductCard 
              key={product.id}
              product={product}
            />
          ))}
        </div>
      </div>
    </section>
  )
} 