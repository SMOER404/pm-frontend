import React from "react";
import { ProductResponseDto, VariantDto } from '@poizon/api'
import { motion } from 'framer-motion'
import styles from './ProductCard.module.css'

interface ProductCardProps {
    product: ProductResponseDto;
    onClickLike: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onClickLike }) => {
    const variant = product.variants?.[0] as VariantDto;
    const price = variant?.priceCny || 0;

    return (
        <div>
            <div className={styles.image}>
                <motion.img 
                    src={`https://dummyimage.com/307x161/CCCCCC/000000&text=${encodeURIComponent(product.name)}`}
                    alt={product.name} 
                    width={307} 
                    height={161}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
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