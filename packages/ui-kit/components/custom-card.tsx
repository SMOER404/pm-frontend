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

  // Размер скоса для карточки (фиксированный)
  const chamferSize = 12

  // Точные clip-path без округлений
  const outerClipPath = `polygon(${chamferSize}px 0px, 100% 0px, 100% calc(100% - ${chamferSize}px), calc(100% - ${chamferSize}px) 100%, 0px 100%, 0px ${chamferSize}px)`
  
  // Точный внутренний clip-path с идеальным отступом
  const innerClipPath = `polygon(calc(${chamferSize}px + 1px) 1px, calc(100% - 1px) 1px, calc(100% - 1px) calc(100% - ${chamferSize}px - 1px), calc(100% - ${chamferSize}px - 1px) calc(100% - 1px), 1px calc(100% - 1px), 1px calc(${chamferSize}px + 1px))`

  const customBorderStyles = {
    ...(borderColor && { backgroundColor: borderColor }),
  }

  const customContentStyles = {
    ...(backgroundColor && { backgroundColor: backgroundColor }),
  }

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
        className={cn("relative", variants[variant], paddings[padding])}
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
