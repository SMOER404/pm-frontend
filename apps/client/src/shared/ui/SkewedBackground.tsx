import { CustomBox } from "@poizon/ui-kit";

interface SkewedBackgroundProps {
    children?: React.ReactNode;
    className?: string;
    width?: string | number;
    height?: string | number;
    fillColor?: string;
    hoverFillColor?: string;
    contentClassName?: string;
}

export const SkewedBackground = ({
                                     children,
                                     className = "",
                                     width = "100%",
                                     height = "auto",
                                     fillColor = "bg-gray-900",
                                     hoverFillColor = "group-hover:bg-brand",
                                     contentClassName = ""
                                 }: SkewedBackgroundProps) => {
    return (
        <CustomBox
            className={`relative group chamfer-clip ${className}`}
            style={{ 
                width, 
                height,
                backgroundColor: fillColor.startsWith('#') ? fillColor : undefined
            }}
        >
            <div className={`relative z-10 h-full ${contentClassName}`}>
                {children}
            </div>
        </CustomBox>
    );
};