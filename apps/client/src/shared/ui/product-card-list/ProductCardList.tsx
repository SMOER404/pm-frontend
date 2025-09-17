"use client";

import React from 'react';
import ProductCard from "@/shared/ui/product-card/ProductCard";
import { CustomTypography, CustomContainer, Carousel, CarouselSlide } from "@poizon/ui-kit";
import { ProductResponse } from '@poizon/api/src/api';

interface ProductCardListProps {
    title: string;
    products: ProductResponse[]
}

const ProductCardList: React.FC<ProductCardListProps> = ({ title, products }) => {
    return (
        <CustomContainer className='lg:mb-20 mb-10 text-primary'>
            <div className='flex justify-between mb-6'>
                <CustomTypography type="body" size="lg" weight="bold" className="heading mb-0 uppercase">{title}</CustomTypography>
                <CustomTypography type="body" size="sm" className='uppercase'>Все модели</CustomTypography>
            </div>

            {/* Десктопная версия - сетка */}
            <div className='hidden md:inline-grid grid-cols-4 gap-8'>
                {products?.map((product) => (
                    <ProductCard {...product as any} key={product.id} />
                ))}
            </div>

            {/* Мобильная версия - горизонтальная прокрутка */}
            <div className='md:hidden'>
                {products && products.length > 0 ? (
                    <div className="overflow-x-auto">
                        <div className="flex space-x-4 pb-4" style={{ minWidth: 'max-content' }}>
                            {products.map((product) => (
                                <div key={product.id} className="w-64 flex-shrink-0">
                                    <ProductCard {...product as any} />
                                </div>
                            ))}
                        </div>
                    </div>
                ) : (
                    <div className="text-center text-gray-500 py-8">Нет товаров для отображения</div>
                )}
            </div>
        </CustomContainer>
    );
};

export default ProductCardList;