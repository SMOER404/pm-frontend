import { CustomTypography } from "@poizon/ui-kit";

interface PriceProps {
    /**
     * Текущая цена
     */
    value: number;

    /**
     * Валюта (по умолчанию '₽')
     */
    currency?: string;

    /**
     * Старая цена (для отображения перечеркнутой цены)
     */
    oldValue?: number;

    /**
     * Ориентация компонента
     * @default 'horizontal'
     */
    orientation?: 'horizontal' | 'vertical';
    className?: string;
    valueClassName?: string;
    oldValueClassName?: string;
    currencyClassName?: string;
}

export const Price = ({
                          value,
                          currency = '₽',
                          oldValue,
                          className = '',
                          valueClassName = '',
                          oldValueClassName = 'text-gray-500 line-through',
                          currencyClassName = '',
                          orientation = 'horizontal',
                      }: PriceProps) => {
    const formattedValue = new Intl.NumberFormat('ru-RU').format(value);
    const formattedOldValue = oldValue ? new Intl.NumberFormat('ru-RU').format(oldValue) : null;

    return (
        <div className={`flex items-baseline ${orientation === 'vertical' ? 'flex-col' : 'flex-row gap-2'} ${className}`}>
            <div className="flex items-baseline">
                <CustomTypography variant="h4" className={`${valueClassName}`}>
                    <span className='lowercase'>от</span> {formattedValue}
                </CustomTypography>
                {currency && (
                    <CustomTypography variant="body2" className={`ml-1 ${currencyClassName}`}>
                        {currency}
                    </CustomTypography>
                )}
            </div>

            {formattedOldValue && (
                <div className="flex items-baseline">
                    <CustomTypography variant="body2" className={`${oldValueClassName}`}>
                        {formattedOldValue}
                    </CustomTypography>
                    {currency && (
                        <CustomTypography variant="caption" className={`ml-1 ${currencyClassName}`}>
                            {currency}
                        </CustomTypography>
                    )}
                </div>
            )}
        </div>
    );
};