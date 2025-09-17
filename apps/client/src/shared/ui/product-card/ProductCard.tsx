'use client'

import React from 'react';
import { ProductResponse, ProductVariant } from '@poizon/api/src/recommendations-api';
import {SkewedBackground} from "@/shared/ui/SkewedBackground";
import { BevelBox, CustomTypography } from "@poizon/ui-kit";
import Image from "next/image";
import Link from "next/link";

type ProductCardProps = Required<ProductResponse>

const getPrice = (variants: Array<ProductVariant>) => {
    return Math.min(...variants.map((variant) => variant.priceCny))
}


const ProductCard: React.FC<ProductCardProps> = (props) => {
    const { name, variants, brandData, categoryData, slug } = props;

    const linkForProductDetails = () => {
        //TODO на бэке надо поправить или пересобрать сервисы
        return `/catalog/${(categoryData as any)?.parentSlug}/${(categoryData as any)?.slug}/${(brandData as any)?.slug}/${slug}`
    }


    return (
        <Link href={linkForProductDetails()} className='product-card no-underline hover:no-underline w-full max-w-sm mx-auto'>
            <div>
                <Image
                    src={'/static/images/like.svg'}
                    alt='like image'
                    width={22}
                    height={20}
                    className='mt-0 z-100'
                    style={{marginBottom: '-20px'}}
                />
            </div>
            <div className="">
                <Image
                    src={'https://nikitaefremov.ru/upload/resize_cache/iblock/543/8u9ly8f2wstuzvvna0zfubx27chm972w/515_384_1/3a4ce2b5_1e8f_11f0_a5bf_c87f5455080b_dc48cf0a_211a_11f0_a5bf_c87f5455080b.png'}
                    alt='shoes'
                    width={300}
                    height={170}
                    className='mt-6 mb-4 z-10 w-full h-auto object-cover'
                />
                <div className="overflow-hidden mt-2 mb-2 h-8">
                    <CustomTypography type="body" size="sm" className='max-h-13 uppercase mb-0 line-clamp-2 text-xs md:text-sm'>{name}</CustomTypography>
                </div>
                <div className="flex items-center flex-wrap gap-2">
                    <CustomTypography type="body" size="md" weight="bold" className='heading mb-0 mr-2'>от
                        <span className='uppercase'> {getPrice(variants)} ₽</span>
                    </CustomTypography>
                    <div className="split-block flex items-center">
                        <BevelBox variant='secondary' className='w-14 md:w-20 h-6 md:h-8 flex items-center justify-center' contentClassName='py-1 mt-1'>
                            <CustomTypography type="body" size="sm" weight="bold" className='mb-0 text-xs'>{Math.floor(getPrice(variants) / 2)} ₽</CustomTypography>
                        </BevelBox>
                        <CustomTypography type="caption" size="sm" className="text-xs ml-1 mb-0 uppercase">В сплит</CustomTypography>
                    </div>
                </div>
            </div>

            <div className="flex h-4 mt-3 flex-wrap gap-2">
                <div className="flex items-center mr-2">
                    <Image
                        src={'/static/images/base-delivery-icon.svg'}
                        alt='like image'
                        width={15}
                        height={12}
                        className='mt-0 mr-1 mb-0'
                    />
                    <CustomTypography type="caption" size="sm" className='text-xs mb-0 uppercase'>25 дней</CustomTypography>
                </div>
                <div className="flex items-center">
                    <Image
                        src={'/static/images/fast-delivery-icon.svg'}
                        alt='like image'
                        width={12}
                        height={10}
                        className='mt-0 mr-1 mb-0'
                    />
                    <CustomTypography type="caption" size="sm" className='text-xs mb-0 uppercase'>9 дней</CustomTypography>
                </div>
            </div>
        </Link>
    );
};

export default ProductCard;