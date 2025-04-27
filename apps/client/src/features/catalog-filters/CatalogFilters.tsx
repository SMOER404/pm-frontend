import React, { useState } from 'react';
import { CategoryDto, BrandDto } from '@poizon/api';
import { useRouter } from 'next/router';
import { productStore } from '@/shared/stores/product.store';
import styles from './CatalogFilters.module.css';

interface CatalogFiltersProps {
  categories: CategoryDto[];
  brands: BrandDto[];
}

export const CatalogFilters: React.FC<CatalogFiltersProps> = ({ categories, brands }) => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <button
        className={styles.filterButton}
        onClick={() => setIsOpen(true)}
      >
        Фильтры
      </button>

      {isOpen && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <div className={styles.modalHeader}>
              <h2>Фильтры</h2>
              <button onClick={handleClose} className={styles.closeButton}>
                ✕
              </button>
            </div>

            <div className={styles.filters}>
              {/* Category Filter */}
              <div className={styles.filterGroup}>
                <h3>Категория</h3>
                <select
                  value={productStore.filters.category}
                  onChange={(e) => {
                    productStore.setFilters({ category: e.target.value });
                    router.push({
                      pathname: router.pathname,
                      query: { ...router.query, category: e.target.value },
                    });
                  }}
                >
                  <option value="">Все категории</option>
                  {categories.map((category) => (
                    <option key={category.id} value={category.id}>
                      {category.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Brand Filter */}
              <div className={styles.filterGroup}>
                <h3>Бренд</h3>
                <select
                  value={productStore.filters.brand}
                  onChange={(e) => {
                    productStore.setFilters({ brand: e.target.value });
                    router.push({
                      pathname: router.pathname,
                      query: { ...router.query, brand: e.target.value },
                    });
                  }}
                >
                  <option value="">Все бренды</option>
                  {brands.map((brand) => (
                    <option key={brand.id} value={brand.id}>
                      {brand.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Price Range Filter */}
              <div className={styles.filterGroup}>
                <h3>Цена</h3>
                <div className={styles.priceInputs}>
                  <input
                    type="number"
                    placeholder="От"
                    value={productStore.filters.minPrice || ''}
                    onChange={(e) => {
                      productStore.setFilters({ minPrice: Number(e.target.value) });
                      router.push({
                        pathname: router.pathname,
                        query: { ...router.query, minPrice: e.target.value },
                      });
                    }}
                  />
                  <input
                    type="number"
                    placeholder="До"
                    value={productStore.filters.maxPrice || ''}
                    onChange={(e) => {
                      productStore.setFilters({ maxPrice: Number(e.target.value) });
                      router.push({
                        pathname: router.pathname,
                        query: { ...router.query, maxPrice: e.target.value },
                      });
                    }}
                  />
                </div>
              </div>

              {/* Size Filter */}
              <div className={styles.filterGroup}>
                <h3>Размер</h3>
                <select
                  value={productStore.filters.size}
                  onChange={(e) => {
                    productStore.setFilters({ size: e.target.value });
                    router.push({
                      pathname: router.pathname,
                      query: { ...router.query, size: e.target.value },
                    });
                  }}
                >
                  <option value="">Все размеры</option>
                  <option value="XS">XS</option>
                  <option value="S">S</option>
                  <option value="M">M</option>
                  <option value="L">L</option>
                  <option value="XL">XL</option>
                  <option value="XXL">XXL</option>
                </select>
              </div>

              <div className={styles.filterActions}>
                <button 
                  className={styles.applyButton}
                  onClick={handleClose}
                >
                  Применить
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}; 