'use client'

import { observer } from 'mobx-react-lite';
import Image from 'next/image';
import Link from 'next/link';
import { ProductBasicDto } from '@poizon-market/api';
import { formatPrice } from '@/shared/utils/format-price';
import styles from './ProductCard.module.css';
import { useRootStore } from '@/shared/hooks/use-root-store';

interface ProductMedia {
  images: string[];
}

interface ProductCardProps {
  product: ProductBasicDto;
  showAddToCart?: boolean;
}

// Клиентский компонент для кнопки добавления в корзину
const AddToCartButton = observer(({ product }: { product: ProductBasicDto }) => {
  const { cartStore } = useRootStore();

  const handleAddToCart = () => {
    // TODO: Реализовать добавление в корзину
    console.log('Добавление в корзину:', product);
  };

  return (
    <button
      onClick={handleAddToCart}
      className="w-full bg-primary-600 text-white py-2 px-4 rounded-b-lg hover:bg-primary-700 transition-colors"
    >
      В корзину
    </button>
  );
});

export const ProductCard = observer(({ product, showAddToCart = false }: ProductCardProps) => {
  const { media, name, minPrice, maxPrice, slug } = product;
  const productMedia = media as ProductMedia;

  return (
    <div className={styles.card}>
      <Link href={`/catalog/${product.category.slug}/${product.brand.slug}/${slug}`} className={styles.productLink}>
        <div className={styles.image}>
          {productMedia.images && productMedia.images.length > 0 ? (
            <Image
              src={productMedia.images[0]}
              alt={name}
              width={300}
              height={300}
              className={styles.productImage}
            />
          ) : (
            <div className={styles.placeholder}>
              Нет изображения
            </div>
          )}
        </div>
        <div className={styles.title}>{name}</div>
        <div className={styles.price}>
          <div className={styles.priceMain}>
            {formatPrice(minPrice)}
          </div>
        </div>
      </Link>
      {showAddToCart && <AddToCartButton product={product} />}
    </div>
  );
});