'use client'

import { observer } from 'mobx-react-lite';
import { ProductCard } from '@/shared/ui/Product-Card/ProductCard';
import type { ProductBasicDto } from '@poizon-market/api';
import Link from 'next/link';
import styles from './CategoryProducts.module.css';

interface CategoryProduct {
  categoryId: string;
  categoryName: string;
  categorySlug: string;
  products: ProductBasicDto[];
}

interface CategoryProductsProps {
  categories: CategoryProduct[];
}

export const CategoryProducts = observer(({ categories }: CategoryProductsProps) => {
  return (
    <div className={styles.container}>
      {categories.map((category) => {
        if (category.products.length === 0) return null;

        return (
          <div key={category.categoryId} className={styles.categorySection}>
            <div className={styles.categoryHeader}>
              <h2 className={styles.categoryTitle}>{category.categoryName}</h2>
              <Link href={`/catalog/${category.categorySlug}`} className={styles.viewAllLink}>
                Смотреть все
              </Link>
            </div>
            <div className={styles.productsGrid}>
              {category.products.map((product) => (
                <ProductCard 
                  key={product.id}
                  product={product}
                  showAddToCart={false}
                />
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}); 