"use client"

import React from "react"
import { cn } from "../lib/utils"
import CustomSpinner from "./custom-spinner"

export interface CustomFallbackProps {
  size?: "sm" | "md" | "lg"
  variant?: "default" | "overlay" | "inline"
  text?: string
  showSpinner?: boolean
  className?: string
  spinnerClassName?: string
  textClassName?: string
}

export default function CustomFallback({
  size = "md",
  variant = "default",
  text,
  showSpinner = true,
  className,
  spinnerClassName,
  textClassName,
}: CustomFallbackProps) {
  const getSizeClasses = () => {
    switch (size) {
      case "sm":
        return "w-6 h-6"
      case "lg":
        return "w-12 h-12"
      case "md":
      default:
        return "w-8 h-8"
    }
  }

  const getVariantClasses = () => {
    switch (variant) {
      case "overlay":
        return "fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm z-50"
      case "inline":
        return "flex items-center justify-center p-4"
      case "default":
      default:
        return "flex items-center justify-center"
    }
  }

  return (
    <div className={cn(getVariantClasses(), className)}>
      <div className="flex flex-col items-center gap-3">
        {showSpinner && (
          <CustomSpinner 
            size={size === "sm" ? "sm" : size === "lg" ? "xl" : "lg"}
            className={cn("text-white", spinnerClassName)}
          />
        )}
        {text && (
          <p className={cn("text-sm text-gray-600 text-center", textClassName)}>
            {text}
          </p>
        )}
      </div>
    </div>
  )
} 