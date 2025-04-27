import React from 'react';
import { CategoryDto, ProductResponseDto } from '@poizon/api';
import ProductCard from '@/shared/ui/Product-Card/ProductCard';
import Link from 'next/link';
import styles from './CategoryProducts.module.css';

interface CategoryProductsProps {
  categories: CategoryDto[];
  products: ProductResponseDto[];
}

export const CategoryProducts: React.FC<CategoryProductsProps> = ({ categories, products }) => {
  return (
    <div className={styles.container}>
      {categories.map((category) => {
        const categoryProducts = products
          .filter((product) => product.category === category.id)
          .slice(0, 4);

        if (categoryProducts.length === 0) return null;

        return (
          <div key={category.id} className={styles.categorySection}>
            <div className={styles.categoryHeader}>
              <h2 className={styles.categoryTitle}>{category.name}</h2>
              <Link href={`/catalog/${category.id}`} className={styles.viewAllLink}>
                Смотреть все
              </Link>
            </div>
            <div className={styles.productsGrid}>
              {categoryProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onClickLike={() => {}}
                />
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}; 