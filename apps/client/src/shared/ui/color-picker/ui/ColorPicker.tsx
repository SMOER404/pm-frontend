import { cn } from "../../classNames/ClassNames";
import { CustomButton } from "@poizon/ui-kit";

interface ColorPickerProps {
    colors: string[];
    selectedColor: string;
    onChange: (color: string) => void;
    className?: string;
    colorItemClassName?: string;
}

export const ColorPicker = ({
                                colors,
                                selectedColor,
                                onChange,
                                className = '',
                                colorItemClassName = 'w-8 h-8',
                            }: ColorPickerProps) => {
    return (
        <div className={cn('flex flex-col gap-2', className)}>
            <h3 className="text-sm font-medium mt-4">Цвет</h3>
            <div className="flex flex-wrap gap-2">
                {colors.map((color) => (
                    <CustomButton
                        key={color}
                        onClick={() => onChange(color)}
                        variant={false ? "ghost" : "outlined"}
                        size='sm'
                        disabled={false}
                        aria-label={`Выбрать цвет ${color}`}
                        aria-pressed={selectedColor === color}
                    >
                        <span className='uppercase'>{color}</span>
                    </CustomButton>
                ))}
            </div>
        </div>
    );
};