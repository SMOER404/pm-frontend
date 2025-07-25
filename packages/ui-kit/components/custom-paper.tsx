"use client"

import type React from "react"
import { cn } from "../lib/utils"

interface CustomPaperProps {
  children: React.ReactNode
  elevation?: 0 | 1 | 2 | 3 | 4 | 5
  variant?: "elevation" | "outlined"
  square?: boolean
  borderColor?: string
  backgroundColor?: string
  className?: string
}

export default function CustomPaper({
  children,
  elevation = 1,
  variant = "elevation",
  square = false,
  borderColor,
  backgroundColor,
  className,
}: CustomPaperProps) {
  // Тени для elevation
  const elevations = {
    0: "",
    1: "shadow-sm",
    2: "shadow",
    3: "shadow-md",
    4: "shadow-lg",
    5: "shadow-xl",
  }

  // clipPath для скосов (1px)
  const clipPath = square
    ? ""
    : "[clip-path:polygon(12px_0px,100%_0px,100%_calc(100%-12px),calc(100%-12px)_100%,0px_100%,0px_12px)]"

  const contentClipPath = square
    ? ""
    : "[clip-path:polygon(11px_1px,calc(100%-1px)_1px,calc(100%-1px)_calc(100%-11px),calc(100%-11px)_calc(100%-1px),1px_calc(100%-1px),1px_11px)]"

  const customBorderStyles = {
    ...(borderColor && { backgroundColor: borderColor }),
  }

  const customContentStyles = {
    ...(backgroundColor && { backgroundColor: backgroundColor }),
  }

  if (variant === "outlined") {
    return (
      <div className={cn("relative", className)}>
        {/* Border */}
        <div className={cn("absolute inset-0 bg-[#292D30]", clipPath)} style={customBorderStyles} />

        {/* Content */}
        <div className={cn("relative bg-white", contentClipPath)} style={customContentStyles}>
          {children}
        </div>
      </div>
    )
  }

  return (
    <div className={cn("bg-white", elevations[elevation], clipPath, className)} style={customContentStyles}>
      {children}
    </div>
  )
}
