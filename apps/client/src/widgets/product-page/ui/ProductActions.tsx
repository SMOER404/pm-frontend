import Image from 'next/image'
import { CustomButton } from "@poizon/ui-kit";
import {Heart, Save, ShoppingCart} from "lucide-react";

interface ProductActionsProps {
    isAvailable: boolean;
    onAddToCart: () => void;
    onFavoriteToggle: () => void;
}

export const ProductActions = ({
                                   isAvailable,
                                   onAddToCart,
                                   onFavoriteToggle,
                               }: ProductActionsProps) => (
    <div className="product-actions flex flex-wrap items-center gap-4 mb-4 mt-8">
        <CustomButton
            variant="primary"
            icon={<ShoppingCart width={20}  className="w-4 h-4" />}
            onClick={onAddToCart}
            disabled={!isAvailable}
            className='uppercase'
        >
            {isAvailable ? 'Добавить в корзину' : 'Нет в наличии'}
        </CustomButton>
        <CustomButton
            variant="outlined"
            size='lg'
            onClick={onAddToCart}
            disabled={!isAvailable}
            icon={<Heart className="w-4 h-4" />}
            iconOnly
        >
            Лайк
        </CustomButton>
    </div>
);