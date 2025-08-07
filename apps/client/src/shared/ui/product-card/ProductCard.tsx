'use client'

import React from 'react';
import { ProductResponse, ProductVariant } from '@poizon/api/src/recommendations-api';
import {SkewedBackground} from "@/shared/ui/SkewedBackground";
import { CustomTypography } from "@poizon/ui-kit";
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
        return `/catalog/${categoryData?.parentSlug}/${categoryData?.slug}/${brandData?.slug}/${slug}`
    }

    console.log('categoryData', props.categoryData)

    return (
        <Link href={linkForProductDetails()} className='product-card no-underline hover:no-underline'>
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
                {/*<SkewedBackground*/}
                {/*    width="100%"*/}
                {/*    height="170px"*/}
                {/*    fillColor="#292D30"*/}
                {/*    contentClassName="flex items-center justify-center text-brand px-8 py-8 text-center"*/}
                {/*>*/}
                {/*</SkewedBackground>*/}
                <Image
                    src={'https://nikitaefremov.ru/upload/resize_cache/iblock/543/8u9ly8f2wstuzvvna0zfubx27chm972w/515_384_1/3a4ce2b5_1e8f_11f0_a5bf_c87f5455080b_dc48cf0a_211a_11f0_a5bf_c87f5455080b.png'}
                    alt='shoes'
                    width={300}
                    height={170}
                    className='mt-6 mb-4 z-10'
                />
                <div className="overflow-hidden mt-2 mb-2">
                    <CustomTypography variant="body" size="sm" className='max-h-13 uppercase mb-0'>{name}</CustomTypography>
                </div>
                <div className="flex items-center">
                    <CustomTypography variant="h6" className='heading mb-0 mr-2'>от
                        <span className='uppercase'> {getPrice(variants)} ₽</span>
                    </CustomTypography>
                    <div className="split-block flex items-center">
                        <SkewedBackground
                            width="110px"
                            height="35px"
                            fillColor="#AFEB0F"
                            contentClassName="flex items-center justify-center text-brand uppercase text-primary"
                        >
                            <CustomTypography variant="body" size="sm" className='mb-0 font-bold'>{Math.floor(getPrice(variants) / 2)} ₽</CustomTypography>
                        </SkewedBackground>
                        <CustomTypography variant="caption" className="text-xs ml-1 mb-0 uppercase">В сплит</CustomTypography>
                    </div>
                </div>
            </div>

            <div className="flex h-4 mt-3">
                <div className="flex items-center mr-2">
                    <Image
                        src={'/static/images/base-delivery-icon.svg'}
                        alt='like image'
                        width={15}
                        height={12}
                        className='mt-0 mr-1 mb-0'
                    />
                    <CustomTypography variant="caption" className='text-xs mb-0 uppercase'>25 дней</CustomTypography>
                </div>
                <div className="flex">
                    <Image
                        src={'/static/images/fast-delivery-icon.svg'}
                        alt='like image'
                        width={19}
                        height={15}
                        className='mt-0 mr-1 mb-0'
                    />
                    <CustomTypography variant="caption" className='text-xs mb-0 uppercase'>9 дней</CustomTypography>
                </div>
            </div>
        </Link>
    );
};

export default ProductCard;