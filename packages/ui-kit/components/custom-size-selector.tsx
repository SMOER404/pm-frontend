"use client"

import React from "react"
import { cn } from "../lib/utils"
import CustomButton from "./custom-button"
import { CustomTypography } from "./custom-typography"

export interface SizeOption {
  size: string
  price: number
  available?: boolean
}

export interface CustomSizeSelectorProps {
  sizes: SizeOption[]
  selectedSize: string
  onChange: (size: string) => void
  title?: string
  variant?: "default" | "compact" | "detailed"
  size?: "sm" | "md" | "lg"
  disabled?: boolean
  showPrice?: boolean
  currency?: string
  className?: string
  sizeItemClassName?: string
  titleClassName?: string
  containerClassName?: string
}

export default function CustomSizeSelector({
  sizes,
  selectedSize,
  onChange,
  title = "Размер",
  variant = "default",
  size = "md",
  disabled = false,
  showPrice = true,
  currency = "₽",
  className,
  sizeItemClassName,
  titleClassName,
  containerClassName,
}: CustomSizeSelectorProps) {
  const getSizeClasses = () => {
    switch (size) {
      case "sm":
        return "w-10 h-8 text-xs"
      case "lg":
        return "w-16 h-12 text-base"
      case "md":
      default:
        return "w-12 h-10 text-sm"
    }
  }

  const getVariantClasses = () => {
    switch (variant) {
      case "compact":
        return "flex-col gap-1"
      case "detailed":
        return "flex-col gap-2"
      case "default":
      default:
        return "flex-col gap-1"
    }
  }

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("ru-RU").format(price)
  }

  return (
    <div className={cn("flex flex-col gap-2", className)}>
      {title && (
        <CustomTypography variant="body" className={cn("text-sm font-medium", titleClassName)}>
          {title}
        </CustomTypography>
      )}
      <div className={cn("flex flex-wrap gap-2", containerClassName)}>
        {sizes && sizes.length > 0 && sizes.map((sizeOption) => {
          const isSelected = selectedSize === sizeOption.size
          const isDisabled = disabled || !sizeOption.available

          return (
            <CustomButton
              key={sizeOption.size}
              onClick={() => !isDisabled && onChange(sizeOption.size)}
              variant={isSelected ? "primary" : isDisabled ? "ghost" : "outlined"}
              size="sm"
              disabled={isDisabled}
              aria-label={`Выбрать размер ${sizeOption.size}`}
              aria-disabled={isDisabled}
              className={cn(getSizeClasses(), sizeItemClassName)}
            >
              <div className={cn("flex flex-col items-center", getVariantClasses())}>
                <span className="text-center">RU {sizeOption.size}</span>
                {showPrice && (
                  <span className="text-xs text-gray-600">
                    {formatPrice(sizeOption.price)} {currency}
                  </span>
                )}
              </div>
            </CustomButton>
          )
        })}
      </div>
    </div>
  )
} 