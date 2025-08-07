"use client"

import React from "react"
import CustomFallback from "./custom-fallback"

export interface CustomNavigationLoaderProps {
  isLoading?: boolean
  variant?: "default" | "overlay" | "inline"
  size?: "sm" | "md" | "lg"
  text?: string
  showSpinner?: boolean
  className?: string
}

export default function CustomNavigationLoader({
  isLoading = false,
  variant = "overlay",
  size = "md",
  text = "Загрузка...",
  showSpinner = true,
  className,
}: CustomNavigationLoaderProps) {
  if (!isLoading) return null

  return (
    <CustomFallback
      variant={variant}
      size={size}
      text={text}
      showSpinner={showSpinner}
      className={className}
    />
  )
} 