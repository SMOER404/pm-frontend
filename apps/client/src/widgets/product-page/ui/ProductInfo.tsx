import {ColorPicker} from "@/shared/ui/color-picker/ui/ColorPicker";
import {SizeSelector} from "@/shared/ui/size-selector/ui/SizeSelector";
import {Price} from "@/shared/ui/price/Price";
import { CustomTypography } from "@poizon/ui-kit";

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
        <CustomTypography variant="body2" className='text-primary-light mb-4'>ПОВСЕДНЕВНАЯ ОБУВЬ</CustomTypography>
        <CustomTypography variant="h1" className='font-medium'>{title}</CustomTypography>
        <CustomTypography variant="body1" className='mb-2'>{description}</CustomTypography>
        <Price value={price} oldValue={oldPrice} className='mb-2'/>
        <div className="mb-4">
            <ColorPicker
                colors={colors}
                selectedColor={selectedColor}
                onChange={onColorChange}
            />
        </div>
        <SizeSelector
            pricesAndSizes={pricesAndSizes}
            selectedSize={selectedSize}
            onChange={onSizeChange}
        />

    </div>
);