'use client'

import {Breadcrumbs} from '../../../../../../shared/ui/Breadcrumbs';
import {useState} from "react";
import {ProductGallery} from "@/widgets/product-page/ui/ProductGallery";
import {ProductInfo} from "@/widgets/product-page/ui/ProductInfo";
import {ProductActions} from "@/widgets/product-page/ui/ProductActions";
import { CustomContainer } from "@poizon/ui-kit";

interface ProductPageProps {
    params: {
        categorySlug: string;
        subCategorySlug: string;
        brandSlug: string;
        productSlug: string;
    };
}

export default async function ProductPage({params}: ProductPageProps) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [selectedColor, setSelectedColor] = useState('black');
    const [selectedSize, setSelectedSize] = useState('M');

    const resolvedParams = await params;

    let decodedSlug = decodeURIComponent(resolvedParams.productSlug);
    //
    // let product = await api.products.getProductBySlug(decodedSlug).then(res => res.data);
    //
    // if (!product) return notFound();

    const product = {
        title: 'New Balance 860 V2 Mallard Green',
        name: 'New Balance 860 V2 Mallard Green',
        description: 'Кроссовки коллаборации с Mallard Green',
        price: 129999,
        oldPrice: 149999,
        rating: 4.8,
        reviewCount: 24,
        colors: ['black', 'white', 'blue'],
        pricesAndSizes: [
            {size:'40', price: 5340},
            {size:'41', price: 5640},
            {size:'42', price: 6200},
            {size:'42.5', price: 6150},
            {size:'43', price: 5150},
            {size:'43.5', price: 5550},
            {size:'44', price: 7200},
        ],
        images: [
            'https://nikitaefremov.ru/upload/resize_cache/iblock/bec/z5a7faqqi0vieea5a6esjeh8p8zm2jhf/1000_700_1/3a4ce2b5_1e8f_11f0_a5bf_c87f5455080b_dc48cf0a_211a_11f0_a5bf_c87f5455080b.png',
            'https://nikitaefremov.ru/upload/iblock/1b1/o6c7azi88uchi8t0awnyjcbc01os1taa/a7236048_15c2_11ef_9afe_3cecef222b53_1c270112_7cd2_11ef_92f8_3cecef222b53.png',
        ],
        isAvailable: true,
    };


    return (
        <CustomContainer className="mt-10 mb-10 px-0">
            <Breadcrumbs
                items={[
                    {label: 'Каталог', href: '/catalog'},
                    {label: resolvedParams.categorySlug, href: `/catalog/${resolvedParams.categorySlug}`},
                    {
                        label: resolvedParams.subCategorySlug,
                        href: `/catalog/${resolvedParams.categorySlug}/${resolvedParams.subCategorySlug}`
                    },
                    {
                        label: resolvedParams.brandSlug,
                        href: `/catalog/${resolvedParams.categorySlug}/${resolvedParams.subCategorySlug}/${resolvedParams.brandSlug}`
                    },
                    {label: product.name}
                ]}
            />
            <div className="product-page mt-10">
                <div className="product-row flex">
                    <ProductGallery
                        images={product.images}
                        thumbnails={product.images}
                        className="lg:max-w-[60%] w-[100%] mr-10"
                        imageClassName="rounded-xl object-contain"
                        thumbnailClassName="border-2 hover:border-indigo-500"
                        activeThumbnailClassName="border-indigo-600"
                    />
                    <div className="prose">
                        <ProductInfo
                            title={product.title}
                            description={product.description}
                            price={product.price}
                            oldPrice={product.oldPrice}
                            rating={product.rating}
                            reviewCount={product.reviewCount}
                            colors={product.colors}
                            pricesAndSizes={product.pricesAndSizes}
                            selectedColor={selectedColor}
                            selectedSize={selectedSize}
                            onColorChange={setSelectedColor}
                            onSizeChange={setSelectedSize}
                        />
                        <ProductActions
                            isAvailable={product.isAvailable}
                            onAddToCart={() => console.log('Add to cart')}
                            onFavoriteToggle={() => console.log('Toggle favorite')}
                        />
                    </div>
                </div>
            </div>
        </CustomContainer>
    );
}