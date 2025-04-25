import React from "react";
import imageUrl from '@/shared/image/product-card-image.png'
import styles from './ProductCard.module.css'

interface IProductCard {
    image: string;
    price: number;
    title: string;
    onClickLike: () => void;
}

const ProductCard: React.FC<IProductCard> = ({image, price, title, onClickLike}) => {
    console.log('imageUrl', imageUrl)
    return (
        <div>
            <div className={styles.image}>
                <img src={imageUrl.src} alt={title} width={307} height={161}/>
            </div>
            <div className="price">
                <div className={styles.priceMain}>
                    {price.toLocaleString()}
                </div>
                <div className="price-split">
                    {price.toLocaleString()} В сплит
                </div>
            </div>
            <div className={styles.title}>
                {title}
            </div>
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