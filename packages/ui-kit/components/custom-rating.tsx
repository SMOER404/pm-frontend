"use client"

import React from "react"
import { cn } from "../lib/utils"
import { Star } from "lucide-react"

export interface CustomRatingProps {
  value: number
  max?: number
  size?: "sm" | "md" | "lg"
  variant?: "default" | "filled" | "outlined"
  color?: "default" | "yellow" | "brand" | "custom"
  customColor?: string
  showValue?: boolean
  showCount?: boolean
  reviewCount?: number
  readonly?: boolean
  onValueChange?: (value: number) => void
  className?: string
  starClassName?: string
}

export default function CustomRating({
  value,
  max = 5,
  size = "md",
  variant = "default",
  color = "default",
  customColor,
  showValue = false,
  showCount = false,
  reviewCount,
  readonly = false,
  onValueChange,
  className,
  starClassName,
}: CustomRatingProps) {
  const getSizeClasses = () => {
    switch (size) {
      case "sm":
        return "w-4 h-4"
      case "lg":
        return "w-6 h-6"
      case "md":
      default:
        return "w-5 h-5"
    }
  }

  const getColorClasses = () => {
    switch (color) {
      case "yellow":
        return "text-yellow-400 fill-yellow-400"
      case "brand":
        return "text-brand fill-brand"
      case "custom":
        return customColor ? "" : "text-gray-300"
      case "default":
      default:
        return "text-gray-300"
    }
  }

  const getFilledColorClasses = () => {
    switch (color) {
      case "yellow":
        return "text-yellow-400 fill-yellow-400"
      case "brand":
        return "text-brand fill-brand"
      case "custom":
        return customColor ? "" : "text-gray-400 fill-gray-400"
      case "default":
      default:
        return "text-gray-400 fill-gray-400"
    }
  }

  const handleStarClick = (starValue: number) => {
    if (!readonly && onValueChange) {
      onValueChange(starValue)
    }
  }

  const handleStarHover = (starValue: number) => {
    if (!readonly) {
      // Можно добавить hover эффект
    }
  }

  return (
    <div className={cn("flex items-center gap-1", className)}>
      <div className="flex items-center">
        {[...Array(max)].map((_, index) => {
          const starValue = index + 1
          const isFilled = starValue <= value
          const isHalfFilled = variant === "default" && starValue === Math.ceil(value) && value % 1 !== 0

          return (
            <button
              key={index}
              type="button"
              className={cn(
                "transition-colors duration-200",
                !readonly && "cursor-pointer hover:scale-110",
                readonly && "cursor-default",
                getSizeClasses(),
                starClassName
              )}
              onClick={() => handleStarClick(starValue)}
              onMouseEnter={() => handleStarHover(starValue)}
              disabled={readonly}
              style={color === "custom" && customColor ? { color: customColor, fill: customColor } : undefined}
            >
              <Star
                className={cn(
                  getSizeClasses(),
                  isFilled ? getColorClasses() : getFilledColorClasses(),
                  isHalfFilled && "fill-current"
                )}
              />
            </button>
          )
        })}
      </div>
      
      {(showValue || showCount) && (
        <div className="flex items-center gap-2 ml-2">
          {showValue && (
            <span className="text-sm font-medium text-gray-700">
              {value.toFixed(1)}
            </span>
          )}
          {showCount && reviewCount && (
            <span className="text-sm text-gray-500">
              ({reviewCount})
            </span>
          )}
        </div>
      )}
    </div>
  )
} 