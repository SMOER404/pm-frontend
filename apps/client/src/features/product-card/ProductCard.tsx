import { observer } from 'mobx-react-lite';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useCallback, useState } from 'react';
import { ProductDto } from '@poizon-market/api';
import { useRootStore } from '@/shared/hooks/use-root-store';
import { formatPrice } from '@/shared/utils/format-price';

interface ProductCardProps {
  product: ProductDto;
}

export const ProductCard = observer(({ product }: ProductCardProps) => {
  const router = useRouter();
  const { cartStore } = useRootStore();
  const [isLoading, setIsLoading] = useState(false);

  const handleAddToCart = useCallback(async () => {
    if (!product.variants.length) return;
    
    setIsLoading(true);
    try {
      await cartStore.addToCart(product.id, product.variants[0].id);
      router.push('/cart');
    } catch (error) {
      console.error('Failed to add to cart:', error);
    } finally {
      setIsLoading(false);
    }
  }, [product, cartStore, router]);

  const mainImage = product.media.images[0] || '/placeholder.png';

  return (
    <div className="group relative">
      <Link href={`/product/${product.id}`}>
        <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200">
          <Image
            src={mainImage}
            alt={product.name}
            width={500}
            height={500}
            className="h-full w-full object-cover object-center group-hover:opacity-75"
          />
        </div>
      </Link>
      <div className="mt-4 flex justify-between">
        <div>
          <h3 className="text-sm text-gray-700">
            <Link href={`/product/${product.id}`}>
              {product.name}
            </Link>
          </h3>
          <p className="mt-1 text-sm text-gray-500">{product.brand}</p>
        </div>
        <p className="text-sm font-medium text-gray-900">
          {formatPrice(product.variants[0]?.price || 0)}
        </p>
      </div>
      <button
        onClick={handleAddToCart}
        disabled={isLoading || !product.variants.length}
        className="mt-4 w-full rounded-md bg-black px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black disabled:opacity-50"
      >
        {isLoading ? 'Добавление...' : 'В корзину'}
      </button>
    </div>
  );
}); 