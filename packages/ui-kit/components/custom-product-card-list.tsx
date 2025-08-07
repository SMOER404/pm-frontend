"use client"

import React from "react"
import { cn } from "../lib/utils"
import { CustomTypography } from "./custom-typography"
import CustomProductCard, { ProductCardData } from "./custom-product-card"

export interface CustomProductCardListProps {
  title: string
  products: ProductCardData[]
  showViewAll?: boolean
  viewAllText?: string
  viewAllHref?: string
  variant?: "default" | "compact" | "detailed"
  columns?: 1 | 2 | 3 | 4 | 5 | 6
  gap?: "sm" | "md" | "lg"
  className?: string
  headerClassName?: string
  gridClassName?: string
  titleClassName?: string
  viewAllClassName?: string
}

export default function CustomProductCardList({
  title,
  products,
  showViewAll = true,
  viewAllText = "Все модели",
  viewAllHref,
  variant = "default",
  columns = 4,
  gap = "lg",
  className,
  headerClassName,
  gridClassName,
  titleClassName,
  viewAllClassName,
}: CustomProductCardListProps) {
  const getGridClasses = () => {
    const columnClasses = {
      1: "grid-cols-1",
      2: "grid-cols-1 sm:grid-cols-2",
      3: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
      4: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4",
      5: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5",
      6: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6",
    }

    const gapClasses = {
      sm: "gap-4",
      md: "gap-6",
      lg: "gap-8",
    }

    return cn("grid", columnClasses[columns], gapClasses[gap])
  }

  const getCardSize = () => {
    switch (variant) {
      case "compact":
        return "sm"
      case "detailed":
        return "lg"
      case "default":
      default:
        return "md"
    }
  }

  return (
    <div className={cn("mb-20", className)}>
      {/* Header */}
      <div className={cn("flex justify-between items-center mb-6", headerClassName)}>
        <CustomTypography
          variant="h3"
          className={cn("font-bold uppercase", titleClassName)}
        >
          {title}
        </CustomTypography>
        {showViewAll && viewAllHref && (
          <a
            href={viewAllHref}
            className={cn(
              "text-primary hover:text-primary-dark transition-colors uppercase text-sm font-medium",
              viewAllClassName
            )}
          >
            {viewAllText}
          </a>
        )}
      </div>

      {/* Product Grid */}
      <div className={cn(getGridClasses(), gridClassName)}>
        {products.map((product) => (
          <CustomProductCard
            key={product.id}
            product={product}
            href={`/product/${product.slug}`}
            variant={variant}
            size={getCardSize()}
          />
        ))}
      </div>
    </div>
  )
} 