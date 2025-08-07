"use client"

import React from "react"
import { cn } from "../lib/utils"
import { CustomTypography } from "./custom-typography"

export interface CustomPriceProps {
  value: number
  currency?: string
  oldValue?: number
  orientation?: "horizontal" | "vertical"
  variant?: "default" | "large" | "small" | "compact"
  showFrom?: boolean
  className?: string
  valueClassName?: string
  oldValueClassName?: string
  currencyClassName?: string
  fromClassName?: string
}

export default function CustomPrice({
  value,
  currency = "₽",
  oldValue,
  orientation = "horizontal",
  variant = "default",
  showFrom = false,
  className,
  valueClassName,
  oldValueClassName = "text-gray-500 line-through",
  currencyClassName,
  fromClassName,
}: CustomPriceProps) {
  const formattedValue = new Intl.NumberFormat("ru-RU").format(value)
  const formattedOldValue = oldValue ? new Intl.NumberFormat("ru-RU").format(oldValue) : null

  const getVariantClasses = () => {
    switch (variant) {
      case "large":
        return "text-2xl font-bold"
      case "small":
        return "text-sm"
      case "compact":
        return "text-base font-medium"
      case "default":
      default:
        return "text-lg font-semibold"
    }
  }

  const getOldValueVariantClasses = () => {
    switch (variant) {
      case "large":
        return "text-lg"
      case "small":
        return "text-xs"
      case "compact":
        return "text-sm"
      case "default":
      default:
        return "text-base"
    }
  }

  return (
    <div
      className={cn(
        "flex items-baseline",
        orientation === "vertical" ? "flex-col" : "flex-row gap-2",
        className
      )}
    >
      <div className="flex items-baseline">
        {showFrom && (
          <CustomTypography
            variant="body"
            className={cn("text-gray-600 lowercase mr-1", fromClassName)}
          >
            от
          </CustomTypography>
        )}
        <CustomTypography
          variant="h4"
          className={cn(getVariantClasses(), valueClassName)}
        >
          {formattedValue}
        </CustomTypography>
        {currency && (
          <CustomTypography
            variant="body"
            className={cn("ml-1", currencyClassName)}
          >
            {currency}
          </CustomTypography>
        )}
      </div>

      {formattedOldValue && (
        <div className="flex items-baseline">
          <CustomTypography
            variant="body"
            className={cn(getOldValueVariantClasses(), oldValueClassName)}
          >
            {formattedOldValue}
          </CustomTypography>
          {currency && (
            <CustomTypography
              variant="caption"
              className={cn("ml-1", currencyClassName)}
            >
              {currency}
            </CustomTypography>
          )}
        </div>
      )}
    </div>
  )
} 