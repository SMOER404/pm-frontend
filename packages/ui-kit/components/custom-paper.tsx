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

  // Размер скоса для paper (фиксированный)
  const chamferSize = 12

  // Точные clip-path без округлений
  const outerClipPath = square ? "" : `polygon(${chamferSize}px 0px, 100% 0px, 100% calc(100% - ${chamferSize}px), calc(100% - ${chamferSize}px) 100%, 0px 100%, 0px ${chamferSize}px)`
  
  // Точный внутренний clip-path с идеальным отступом
  const innerClipPath = square ? "" : `polygon(calc(${chamferSize}px + 1px) 1px, calc(100% - 1px) 1px, calc(100% - 1px) calc(100% - ${chamferSize}px - 1px), calc(100% - ${chamferSize}px - 1px) calc(100% - 1px), 1px calc(100% - 1px), 1px calc(${chamferSize}px + 1px))`

  const customBorderStyles = {
    ...(borderColor && { backgroundColor: borderColor }),
  }

  const customContentStyles = {
    ...(backgroundColor && { backgroundColor: backgroundColor }),
  }

  if (variant === "outlined") {
    return (
      <div className={cn("relative", className)}>
        {/* Внешняя рамка со скосами */}
        <div
          className="absolute inset-0 transition-colors duration-200"
          style={{
            clipPath: outerClipPath,
            backgroundColor: "#292D30",
            ...customBorderStyles,
          }}
        />

        {/* Внутренний контент */}
        <div
          className="relative bg-white"
          style={{
            clipPath: innerClipPath,
            ...customContentStyles,
          }}
        >
          {children}
        </div>
      </div>
    )
  }

  return (
    <div 
      className={cn("bg-white", elevations[elevation], className)} 
      style={{
        clipPath: outerClipPath,
        ...customContentStyles,
      }}
    >
      {children}
    </div>
  )
}
