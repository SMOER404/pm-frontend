import React from 'react';
import ProductCard from "@/shared/ui/product-card/ProductCard";
import { CustomTypography } from "@poizon/ui-kit";
import { ProductResponse } from '@poizon/api/src/api';


interface ProductCardListProps {
    title: string;
    products: ProductResponse[]
}

const ProductCardList: React.FC<ProductCardListProps> = ({ title, products }) => {
    return (
        <div className='mb-20 text-primary'>
            <div className='flex justify-between mb-6'>
                <CustomTypography variant="h3" className="heading mb-0 uppercase">{title}</CustomTypography>
                <CustomTypography variant="body1" className='uppercase'>Все модели</CustomTypography>
            </div>

            <div className='inline-grid grid-cols-4 gap-8 '>
                {products.map((product) => (
                    <ProductCard {...product} key={product.id} />
                ))}
            </div>
        </div>

    );
};

export default ProductCardList;