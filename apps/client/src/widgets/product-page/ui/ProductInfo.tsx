"use client";

import {ColorPicker} from "@/shared/ui/color-picker/ui/ColorPicker";
import {SizeSelector} from "@/shared/ui/size-selector/ui/SizeSelector";
import {Price} from "@/shared/ui/price/Price";
import { Text, Heading } from "@poizon/ui-kit";

interface ProductInfoProps {
    title: string;
    description: string;
    price: number;
    oldPrice?: number;
    rating: number;
    reviewCount: number;
    colors: string[];
    pricesAndSizes: Array<{ size: string, price: number }>;
    selectedColor: string;
    selectedSize: string;
    onColorChange: (color: string) => void;
    onSizeChange: (size: string) => void;
}

export const ProductInfo = ({
                                title,
                                description,
                                price,
                                oldPrice,
                                rating,
                                reviewCount,
                                colors,
                                pricesAndSizes,
                                selectedColor,
                                selectedSize,
                                onColorChange,
                                onSizeChange,
                            }: ProductInfoProps) => (
    <div className="product-info uppercase">
        <Text type="body" size="sm" className='text-primary-light mb-4'>ПОВСЕДНЕВНАЯ ОБУВЬ</Text>
        <Heading size="h1" className='font-medium'>{title}</Heading>
        <Text type="body" size="md" className='mb-2'>{description}</Text>
        <Price value={price} oldValue={oldPrice} className='mb-2'/>
        <div className="mb-4">
            <ColorPicker />
        </div>
        <SizeSelector
            pricesAndSizes={pricesAndSizes}
            selectedSize={selectedSize}
            onChange={onSizeChange}
        />

    </div>
);