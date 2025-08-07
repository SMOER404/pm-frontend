"use client"

import type React from "react"
import { cn } from "../lib/utils"
import { tokens, type SizeToken } from "../lib/design-tokens"

interface CustomSpinnerProps {
  size?: SizeToken
  variant?: "default" | "brand" | "primary" | "success" | "warning" | "danger"
  className?: string
  label?: string
}

export default function CustomSpinner({
  size = "md",
  variant = "default",
  className,
  label,
}: CustomSpinnerProps) {
  const sizeConfig = {
    xs: { width: "12px", height: "12px", borderWidth: "1px" },
    sm: { width: "16px", height: "16px", borderWidth: "1.5px" },
    md: { width: "20px", height: "20px", borderWidth: "2px" },
    lg: { width: "24px", height: "24px", borderWidth: "2.5px" },
    xl: { width: "32px", height: "32px", borderWidth: "3px" },
  }

  const variantColors = {
    default: tokens.colors.primary[300],
    brand: tokens.colors.brand.DEFAULT,
    primary: tokens.colors.primary.DEFAULT,
    success: tokens.colors.success.DEFAULT,
    warning: tokens.colors.warning.DEFAULT,
    danger: tokens.colors.danger.DEFAULT,
  }

  const spinnerStyle = {
    width: sizeConfig[size].width,
    height: sizeConfig[size].height,
    borderWidth: sizeConfig[size].borderWidth,
    borderColor: variantColors[variant],
  }

  return (
    <div className={cn("flex items-center gap-2", className)}>
      <div
        className="animate-spin rounded-full border-solid border-t-transparent"
        style={spinnerStyle}
        role="status"
        aria-label={label || "Loading"}
      />
      {label && (
        <span className="text-sm text-gray-600">{label}</span>
      )}
    </div>
  )
} 