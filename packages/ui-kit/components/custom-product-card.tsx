"use client"

import React from "react"
import Link from "next/link"
import Image from "next/image"
import { cn } from "../lib/utils"
import { CustomTypography } from "./custom-typography"
import CustomCard from "./custom-card"
import CustomPrice from "./custom-price"
import CustomRating from "./custom-rating"

export interface ProductCardData {
  id: string
  name: string
  slug: string
  image: string
  price: number
  oldPrice?: number
  rating?: number
  reviewCount?: number
  brand?: string
  category?: string
  badge?: string
  badgeColor?: string
  deliveryInfo?: {
    standard?: string
    express?: string
  }
  splitPrice?: number
}

export interface CustomProductCardProps {
  product: ProductCardData
  href: string
  variant?: "default" | "compact" | "detailed"
  size?: "sm" | "md" | "lg"
  showRating?: boolean
  showBadge?: boolean
  showDelivery?: boolean
  showSplitPrice?: boolean
  showLikeButton?: boolean
  onLikeClick?: () => void
  isLiked?: boolean
  className?: string
  imageClassName?: string
  contentClassName?: string
  badgeClassName?: string
  likeButtonClassName?: string
}

export default function CustomProductCard({
  product,
  href,
  variant = "default",
  size = "md",
  showRating = true,
  showBadge = true,
  showDelivery = true,
  showSplitPrice = true,
  showLikeButton = true,
  onLikeClick,
  isLiked = false,
  className,
  imageClassName,
  contentClassName,
  badgeClassName,
  likeButtonClassName,
}: CustomProductCardProps) {
  const getSizeClasses = () => {
    switch (size) {
      case "sm":
        return "w-48"
      case "lg":
        return "w-80"
      case "md":
      default:
        return "w-64"
    }
  }

  const getImageSize = () => {
    switch (size) {
      case "sm":
        return { width: 192, height: 128 }
      case "lg":
        return { width: 320, height: 240 }
      case "md":
      default:
        return { width: 256, height: 192 }
    }
  }

  const handleLikeClick = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    onLikeClick?.()
  }

  return (
    <Link href={href} className={cn("block no-underline hover:no-underline", className)}>
      <CustomCard className={cn("group relative overflow-hidden transition-all duration-300 hover:shadow-lg", getSizeClasses())}>
        {/* Like Button */}
        {showLikeButton && (
          <button
            onClick={handleLikeClick}
            className={cn(
              "absolute top-2 right-2 z-10 p-1 rounded-full bg-white/80 hover:bg-white transition-colors",
              likeButtonClassName
            )}
            aria-label={isLiked ? "Убрать из избранного" : "Добавить в избранное"}
          >
            <svg
              className={cn(
                "w-4 h-4 transition-colors",
                isLiked ? "fill-red-500 text-red-500" : "fill-gray-400 text-gray-400 hover:fill-red-500 hover:text-red-500"
              )}
              viewBox="0 0 24 24"
            >
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
          </button>
        )}

        {/* Badge */}
        {showBadge && product.badge && (
          <div
            className={cn(
              "absolute top-2 left-2 z-10 px-2 py-1 text-xs font-bold text-white rounded",
              product.badgeColor || "bg-red-500",
              badgeClassName
            )}
          >
            {product.badge}
          </div>
        )}

        {/* Product Image */}
        <div className={cn("relative overflow-hidden", imageClassName)}>
          <Image
            src={product.image}
            alt={product.name}
            {...getImageSize()}
            className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>

        {/* Product Content */}
        <div className={cn("p-4", contentClassName)}>
          {/* Product Name */}
          <CustomTypography
            variant="body"
            className="font-medium text-gray-900 mb-2 line-clamp-2 group-hover:text-primary transition-colors"
          >
            {product.name}
          </CustomTypography>

          {/* Rating */}
          {showRating && product.rating && (
            <div className="mb-2">
              <CustomRating
                value={product.rating}
                reviewCount={product.reviewCount}
                size="sm"
                showCount={false}
              />
            </div>
          )}

          {/* Price */}
          <div className="flex items-center justify-between mb-2">
            <CustomPrice
              value={product.price}
              oldValue={product.oldPrice}
              variant="compact"
              showFrom={true}
            />
            {showSplitPrice && product.splitPrice && (
              <div className="text-xs text-gray-600">
                <span className="font-bold">{product.splitPrice} ₽</span>
                <span className="ml-1">в сплит</span>
              </div>
            )}
          </div>

          {/* Delivery Info */}
          {showDelivery && product.deliveryInfo && (
            <div className="flex items-center gap-4 text-xs text-gray-600">
              {product.deliveryInfo.standard && (
                <div className="flex items-center gap-1">
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                    <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1V8a1 1 0 00-1-1h-3z" />
                  </svg>
                  <span>{product.deliveryInfo.standard}</span>
                </div>
              )}
              {product.deliveryInfo.express && (
                <div className="flex items-center gap-1">
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.293l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd" />
                  </svg>
                  <span>{product.deliveryInfo.express}</span>
                </div>
              )}
            </div>
          )}
        </div>
      </CustomCard>
    </Link>
  )
} 