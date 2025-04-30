'use client'

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { productsApi } from '@poizon-market/api';
import type { ProductResponseDto } from '@poizon-market/api';
import { ProductDetails } from '@/features/product-details/ProductDetails';

export default function ProductPage() {
  const params = useParams();
  const [product, setProduct] = useState<ProductResponseDto | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        const { categorySlug, brandSlug, productSlug } = params;
        const response = await productsApi.getProductBySlug(
          categorySlug as string,
          brandSlug as string,
          productSlug as string
        );
        setProduct(response);
      } catch (err) {
        console.error('Ошибка при загрузке продукта:', err);
        setError('Не удалось загрузить информацию о продукте');
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [params]);

  if (loading) {
    return <div>Загрузка...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!product) {
    return <div>Продукт не найден</div>;
  }

  return <ProductDetails product={product} />;
} 