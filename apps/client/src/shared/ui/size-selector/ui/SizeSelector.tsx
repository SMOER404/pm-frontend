import { cn } from "../../classNames/ClassNames";
import { CustomButton } from "@poizon/ui-kit";

interface SizeSelectorProps {
    pricesAndSizes: Array<{ size: string, price: number }>;
    selectedSize: string;
    onChange: (size: string) => void;
    className?: string;
    sizeItemClassName?: string;
    disabledSizes?: string[];
}

export const SizeSelector = ({
                                 pricesAndSizes,
                                 selectedSize,
                                 onChange,
                                 className = '',
                                 sizeItemClassName = 'w-12 h-10',
                                 disabledSizes = [],
                             }: SizeSelectorProps) => {
    return (
        <div className={cn('flex flex-col gap-2', className)}>
            <h3 className="text-sm font-medium mt-4">Размер</h3>
            <div className="flex flex-wrap gap-2">
                {pricesAndSizes.map((priseAndSize) => {
                    const { size, price} = priseAndSize
                    const isDisabled = disabledSizes.includes(size);
                    return (
                        <CustomButton
                            key={size}
                            variant={isDisabled ? "ghost" : "outlined"}
                            size='sm'
                            onClick={() => !isDisabled && onChange(size)}
                            disabled={isDisabled}
                            aria-label={`Выбрать размер ${size}`}
                            aria-disabled={isDisabled}
                        >
                            <p className='text-sm mb-0 text-center'>RU {size}</p>
                            <p className='text-sm text-primary-light mb-0 mt-1 text-center'>{price} ₽</p>
                        </CustomButton>
                    );
                })}
            </div>
        </div>
    );
};