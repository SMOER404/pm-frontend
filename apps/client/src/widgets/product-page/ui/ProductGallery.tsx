import { useState } from 'react';
import Image from 'next/image';
import { cn } from "@poizon/ui-kit";

interface ProductGalleryProps {
    images: string[];
    thumbnails?: string[];
    className?: string;
    imageClassName?: string;
    thumbnailClassName?: string;
    activeThumbnailClassName?: string;
}

export const ProductGallery = ({
                                   images,
                                   thumbnails = images,
                                   className = '',
                                   imageClassName = 'rounded-lg relative',
                                   thumbnailClassName = 'border-2 border-transparent hover:border-gray-300 transition-all',
                                   activeThumbnailClassName = 'border-gray-900',
                               }: ProductGalleryProps) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    return (
        <div className={cn('', className)}>
            {/* Основное изображение */}
            <div className="relative order-1 md:order-2 flex-1 aspect-square bg-gray-100 rounded-xl overflow-hidden">
                <div className='h-[600px]'>
                    <Image
                        src={images[currentImageIndex]}
                        fill
                        alt="Основное изображение товара"
                        className={cn('bg-white', imageClassName)}
                        sizes="(max-width: 768px) 100vw, 50vw"
                        priority
                    />
                </div>
                {/* Бейдж скидки */}
                <div className="absolute top-4 left-4 bg-red-500 text-white text-sm font-bold px-3 py-1 rounded-full">
                    -25%
                </div>
            </div>
            <div className="flex flex-row gap-2 overflow-x-auto py-2 md:py-0">
                {thumbnails.map((thumb, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={cn(
                            'shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-md overflow-hidden',
                            thumbnailClassName,
                            index === currentImageIndex && activeThumbnailClassName
                        )}
                        aria-label={`Показать изображение ${index + 1}`}
                    >
                        <Image
                            src={thumb}
                            width={80}
                            height={80}
                            alt=""
                            className="w-full h-full object-cover"
                        />
                    </button>
                ))}
            </div>
        </div>
    );
};
