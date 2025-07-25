"use client"

import type React from "react"
import { cn } from "../lib/utils"

interface CustomCardProps {
  children: React.ReactNode
  variant?: "default" | "outlined" | "elevated"
  padding?: "none" | "sm" | "md" | "lg"
  borderColor?: string
  backgroundColor?: string
  className?: string
}

export default function CustomCard({
  children,
  variant = "default",
  padding = "md",
  borderColor,
  backgroundColor,
  className,
}: CustomCardProps) {
  // Варианты отступов
  const paddings = {
    none: "",
    sm: "p-4",
    md: "p-6",
    lg: "p-8",
  }

  // Варианты стилей
  const variants = {
    default: "bg-white border-gray-200",
    outlined: "bg-white border-[#292D30]",
    elevated: "bg-white border-gray-200 shadow-lg",
  }

  // clipPath для скосов (1px)
  const clipPath = "[clip-path:polygon(12px_0px,100%_0px,100%_calc(100%-12px),calc(100%-12px)_100%,0px_100%,0px_12px)]"
  const contentClipPath =
    "[clip-path:polygon(11px_1px,calc(100%-1px)_1px,calc(100%-1px)_calc(100%-11px),calc(100%-11px)_calc(100%-1px),1px_calc(100%-1px),1px_11px)]"

  const customBorderStyles = {
    ...(borderColor && { backgroundColor: borderColor }),
  }

  const customContentStyles = {
    ...(backgroundColor && { backgroundColor: backgroundColor }),
  }

  return (
    <div className={cn("relative", className)}>
      {/* Border */}
      <div className={cn("absolute inset-0 bg-[#292D30]", clipPath)} style={customBorderStyles} />

      {/* Content */}
      <div
        className={cn("relative", contentClipPath, variants[variant], paddings[padding])}
        style={customContentStyles}
      >
        {children}
      </div>
    </div>
  )
}
