"use client"

import React from "react"
import { cn } from "../lib/utils"
import CustomFallback from "./custom-fallback"

export interface CustomLoadingProps {
  variant?: "default" | "overlay" | "inline"
  size?: "sm" | "md" | "lg"
  text?: string
  showSpinner?: boolean
  className?: string
}

export default function CustomLoading({
  variant = "overlay",
  size = "md",
  text = "Загрузка...",
  showSpinner = true,
  className,
}: CustomLoadingProps) {
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