import React, { useEffect, useRef, useState } from "react";
import { ProductResponseDto, ProductVariantDto } from '@poizon/api'
import { motion } from 'framer-motion'
import Image from 'next/image'
import styles from './ProductCard.module.css'

interface ProductCardProps {
    product: ProductResponseDto;
    onClickLike: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onClickLike }) => {
    const [isVisible, setIsVisible] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const imageRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            {
                rootMargin: '50px',
                threshold: 0.1
            }
        );

        if (imageRef.current) {
            observer.observe(imageRef.current);
        }

        return () => {
            observer.disconnect();
        };
    }, []);

    // Находим вариант с самой низкой ценой на самый маленький размер
    const getLowestPriceVariant = () => {
        let lowestPrice = Infinity;
        let lowestPriceVariant: ProductVariantDto | null = null;

        if (!product.variants) return null;

        for (const variant of product.variants) {
            const sizesAndPrices = variant.sizesAndPrices as Record<string, number>;
            const sizes = Object.keys(sizesAndPrices).sort((a, b) => 
                parseFloat(a) - parseFloat(b)
            );
            
            if (sizes.length > 0) {
                const smallestSize = sizes[0];
                const price = sizesAndPrices[smallestSize];
                if (price < lowestPrice) {
                    lowestPrice = price;
                    lowestPriceVariant = variant;
                }
            }
        }

        return lowestPriceVariant;
    };

    const lowestPriceVariant = getLowestPriceVariant();
    const sizesAndPrices = lowestPriceVariant?.sizesAndPrices as Record<string, number>;
    const sizes = Object.keys(sizesAndPrices || {}).sort((a, b) => 
        parseFloat(a) - parseFloat(b)
    );
    const smallestSize = sizes[0];
    const price = sizesAndPrices?.[smallestSize] || 0;

    return (
        <div>
            <div className={styles.image}>
                <div className={`${styles.placeholder} ${isLoading ? styles.visible : styles.hidden}`}>
                    {product.name}
                </div>
                <Image 
                    src={`https://dummyimage.com/307x161/000000/FFFFFF&text=${product.name}`}
                    alt={product.name} 
                    width={307} 
                    height={161}
                    loading="lazy"
                    className={`${styles.productImage} ${isLoading ? styles.hidden : styles.visible}`}
                    onLoadingComplete={() => setIsLoading(false)}
                />
            </div>
            <div className="price">
                <div className={styles.priceMain}>
                    {price.toLocaleString()} ¥
                </div>
                <div className="price-split">
                    {price.toLocaleString()} ¥ В сплит
                </div>
            </div>
            <motion.div 
                className={styles.title}
                whileHover={{ color: "#4F46E5" }}
            >
                {product.name}
            </motion.div>
            <div className="delivery-info">
                <div className="delivery-simple">
                    25 дней
                </div>
                <div className="delivery-fast">
                    9 дней
                </div>
            </div>
        </div>
    );
};

export default ProductCard;