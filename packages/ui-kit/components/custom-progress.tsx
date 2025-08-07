"use client"

import type React from "react"
import { cn } from "../lib/utils"
import { tokens, type SizeToken } from "../lib/design-tokens"

interface CustomProgressProps {
  value: number
  max?: number
  size?: SizeToken
  variant?: "default" | "brand" | "primary" | "success" | "warning" | "danger"
  showLabel?: boolean
  animated?: boolean
  className?: string
}

export default function CustomProgress({
  value,
  max = 100,
  size = "md",
  variant = "default",
  showLabel = false,
  animated = false,
  className,
}: CustomProgressProps) {
  const percentage = Math.min(Math.max((value / max) * 100, 0), 100)

  const sizeConfig = {
    xs: { height: "4px", fontSize: "10px" },
    sm: { height: "6px", fontSize: "12px" },
    md: { height: "8px", fontSize: "14px" },
    lg: { height: "12px", fontSize: "16px" },
    xl: { height: "16px", fontSize: "18px" },
  }

  const variantColors = {
    default: tokens.colors.primary.DEFAULT,
    brand: tokens.colors.brand.DEFAULT,
    primary: tokens.colors.primary.DEFAULT,
    success: tokens.colors.success.DEFAULT,
    warning: tokens.colors.warning.DEFAULT,
    danger: tokens.colors.danger.DEFAULT,
  }

  return (
    <div className={cn("w-full", className)}>
      {(showLabel || size === "lg" || size === "xl") && (
        <div className="flex justify-between items-center mb-2">
          <span 
            className="text-sm font-medium text-gray-700"
            style={{ fontSize: sizeConfig[size].fontSize }}
          >
            Progress
          </span>
          <span 
            className="text-sm text-gray-500"
            style={{ fontSize: sizeConfig[size].fontSize }}
          >
            {Math.round(percentage)}%
          </span>
        </div>
      )}
      
      <div
        className="w-full bg-gray-200 rounded-full overflow-hidden"
        style={{ height: sizeConfig[size].height }}
      >
        <div
          className={cn(
            "h-full transition-all duration-300 ease-out",
            animated && "animate-pulse"
          )}
          style={{
            width: `${percentage}%`,
            backgroundColor: variantColors[variant],
          }}
        />
      </div>
    </div>
  )
} 