"use client"

import React from "react"
import { cn } from "../lib/utils"
import { CustomTypography } from "./custom-typography"
import CustomPrice from "./custom-price"
import CustomRating from "./custom-rating"
import CustomColorPicker from "./custom-color-picker"
import CustomSizeSelector from "./custom-size-selector"

export interface ProductInfoData {
  title: string
  description: string
  price: number
  oldPrice?: number
  rating?: number
  reviewCount?: number
  colors: string[]
  sizes: Array<{ size: string; price: number; available?: boolean }>
  selectedColor: string
  selectedSize: string
}

export interface CustomProductInfoProps {
  product: ProductInfoData
  category?: string
  variant?: "default" | "compact" | "detailed"
  showRating?: boolean
  showCategory?: boolean
  onColorChange: (color: string) => void
  onSizeChange: (size: string) => void
  className?: string
  titleClassName?: string
  descriptionClassName?: string
  priceClassName?: string
  categoryClassName?: string
}

export default function CustomProductInfo({
  product,
  category,
  variant = "default",
  showRating = true,
  showCategory = true,
  onColorChange,
  onSizeChange,
  className,
  titleClassName,
  descriptionClassName,
  priceClassName,
  categoryClassName,
}: CustomProductInfoProps) {
  const getVariantClasses = () => {
    switch (variant) {
      case "compact":
        return "space-y-3"
      case "detailed":
        return "space-y-6"
      case "default":
      default:
        return "space-y-4"
    }
  }

  return (
    <div className={cn("product-info", getVariantClasses(), className)}>
      {/* Category */}
      {showCategory && category && (
        <CustomTypography
          variant="body"
          className={cn("text-gray-600 uppercase", categoryClassName)}
        >
          {category}
        </CustomTypography>
      )}

      {/* Title */}
      <CustomTypography
        variant="h1"
        className={cn("font-medium uppercase", titleClassName)}
      >
        {product.title}
      </CustomTypography>

      {/* Description */}
      <CustomTypography
        variant="body"
        className={cn("text-gray-700", descriptionClassName)}
      >
        {product.description}
      </CustomTypography>

      {/* Rating */}
      {showRating && product.rating && (
        <div className="mb-4">
          <CustomRating
            value={product.rating}
            reviewCount={product.reviewCount}
            size="md"
            showCount={true}
          />
        </div>
      )}

      {/* Price */}
      <div className={priceClassName}>
        <CustomPrice
          value={product.price}
          oldValue={product.oldPrice}
          variant="large"
          showFrom={true}
        />
      </div>

      {/* Color Picker */}
      <div className="mb-4">
        <CustomColorPicker
          colors={product.colors}
          selectedColor={product.selectedColor}
          onChange={onColorChange}
          title="Цвет"
          variant="buttons"
        />
      </div>
      {product.sizes && product.sizes.length > 0 && (
        <CustomSizeSelector
          sizes={product.sizes}
          selectedSize={product.selectedSize}
          onChange={onSizeChange}
          title="Размер"
          showPrice={true}
        />
      )}
    </div>
  )
} 