"use client"

import React, { useState } from "react"
import Image from "next/image"
import { cn } from "../lib/utils"

export interface CustomProductGalleryProps {
  images: string[]
  thumbnails?: string[]
  variant?: "default" | "compact" | "detailed"
  size?: "sm" | "md" | "lg"
  showBadge?: boolean
  badgeText?: string
  badgeColor?: string
  className?: string
  imageClassName?: string
  thumbnailClassName?: string
  activeThumbnailClassName?: string
  badgeClassName?: string
  thumbnailsContainerClassName?: string
}

export default function CustomProductGallery({
  images,
  thumbnails = images,
  variant = "default",
  size = "md",
  showBadge = false,
  badgeText = "-25%",
  badgeColor = "bg-red-500",
  className,
  imageClassName,
  thumbnailClassName = "border-2 border-transparent hover:border-gray-300 transition-all",
  activeThumbnailClassName = "border-gray-900",
  badgeClassName,
  thumbnailsContainerClassName,
}: CustomProductGalleryProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const getSizeClasses = () => {
    switch (size) {
      case "sm":
        return "h-64"
      case "lg":
        return "h-96"
      case "md":
      default:
        return "h-80"
    }
  }

  const getThumbnailSize = () => {
    switch (size) {
      case "sm":
        return { width: 48, height: 48 }
      case "lg":
        return { width: 80, height: 80 }
      case "md":
      default:
        return { width: 64, height: 64 }
    }
  }

  const getVariantClasses = () => {
    switch (variant) {
      case "compact":
        return "flex-col"
      case "detailed":
        return "flex-col gap-4"
      case "default":
      default:
        return "flex-col gap-2"
    }
  }

  return (
    <div className={cn("flex", getVariantClasses(), className)}>
      {/* Основное изображение */}
      <div className={cn("relative aspect-square bg-gray-100 rounded-xl overflow-hidden", getSizeClasses())}>
        <Image
          src={images[currentImageIndex]}
          fill
          alt="Основное изображение товара"
          className={cn("object-cover", imageClassName)}
          sizes="(max-width: 768px) 100vw, 50vw"
          priority
        />
        
        {/* Бейдж */}
        {showBadge && (
          <div
            className={cn(
              "absolute top-4 left-4 text-white text-sm font-bold px-3 py-1 rounded-full",
              badgeColor,
              badgeClassName
            )}
          >
            {badgeText}
          </div>
        )}
      </div>

      {/* Миниатюры */}
      <div className={cn("flex gap-2 overflow-x-auto py-2", thumbnailsContainerClassName)}>
        {thumbnails.map((thumb, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={cn(
              "shrink-0 rounded-md overflow-hidden transition-all",
              thumbnailClassName,
              index === currentImageIndex && activeThumbnailClassName
            )}
            aria-label={`Показать изображение ${index + 1}`}
          >
            <Image
              src={thumb}
              {...getThumbnailSize()}
              alt=""
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  )
} 