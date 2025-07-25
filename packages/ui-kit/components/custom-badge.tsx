"use client"

import type React from "react"
import { cn } from "../lib/utils"

interface CustomBadgeProps {
  children: React.ReactNode
  variant?: "default" | "primary" | "secondary" | "success" | "warning" | "error"
  size?: "sm" | "md" | "lg"
  dot?: boolean
  max?: number
  showZero?: boolean
  borderColor?: string
  backgroundColor?: string
  textColor?: string
  className?: string
}

export default function CustomBadge({
  children,
  variant = "default",
  size = "md",
  dot = false,
  max = 99,
  showZero = false,
  borderColor,
  backgroundColor,
  textColor,
  className,
}: CustomBadgeProps) {
  // Размеры
  const sizes = {
    sm: dot ? "w-2 h-2" : "px-1.5 py-0.5 text-xs min-w-[16px] h-4",
    md: dot ? "w-2.5 h-2.5" : "px-2 py-1 text-xs min-w-[20px] h-5",
    lg: dot ? "w-3 h-3" : "px-2.5 py-1 text-sm min-w-[24px] h-6",
  }

  // Варианты стилей
  const variants = {
    default: "bg-muted text-muted-foreground",
    primary: "bg-brand text-primary",
    secondary: "bg-primary text-white",
    success: "bg-success text-white",
    warning: "bg-accent text-accent-foreground",
    error: "bg-destructive text-destructive-foreground",
  }

  // Размер скоса для badge (меньший для маленьких элементов)
  const getChamferSize = () => {
    if (dot) return 1 // Для точек очень маленький скос
    switch (size) {
      case "sm": return 2 // 25% от 8px = 2px
      case "lg": return 3 // 25% от 12px = 3px
      default: return 2.5 // 25% от 10px = 2.5px
    }
  }

  const customStyles = {
    ...(backgroundColor && { backgroundColor: backgroundColor }),
    ...(textColor && { color: textColor }),
    ...(borderColor && { borderColor: borderColor }),
  }

  // Обработка числового контента
  let displayContent = children
  if (typeof children === "number") {
    if (children === 0 && !showZero) {
      return null
    }
    if (children > max) {
      displayContent = `${max}+`
    }
  }

  const chamferSize = getChamferSize()

  // Точные clip-path без округлений
  const outerClipPath = `polygon(${chamferSize}px 0px, 100% 0px, 100% calc(100% - ${chamferSize}px), calc(100% - ${chamferSize}px) 100%, 0px 100%, 0px ${chamferSize}px)`
  
  // Точный внутренний clip-path с идеальным отступом
  const innerClipPath = `polygon(calc(${chamferSize}px + 0.5px) 0.5px, calc(100% - 0.5px) 0.5px, calc(100% - 0.5px) calc(100% - ${chamferSize}px - 0.5px), calc(100% - ${chamferSize}px - 0.5px) calc(100% - 0.5px), 0.5px calc(100% - 0.5px), 0.5px calc(${chamferSize}px + 0.5px))`

  if (dot) {
    return (
      <div className="relative inline-block">
        {/* Внешняя рамка со скосами */}
        <div
          className="absolute inset-0 transition-colors duration-200"
          style={{
            clipPath: outerClipPath,
            backgroundColor: "#292D30",
          }}
        />

        {/* Внутренний контент */}
        <div
          className="relative"
          style={{
            clipPath: innerClipPath,
          }}
        >
          <span
            className={cn("inline-block", sizes[size], variants[variant], className)}
            style={customStyles}
          />
        </div>
      </div>
    )
  }

  return (
    <div className="relative inline-block">
      {/* Внешняя рамка со скосами */}
      <div
        className="absolute inset-0 transition-colors duration-200"
        style={{
          clipPath: outerClipPath,
          backgroundColor: "#292D30",
        }}
      />

      {/* Внутренний контент */}
      <div
        className="relative"
        style={{
          clipPath: innerClipPath,
        }}
      >
        <span
          className={cn(
            "inline-flex items-center justify-center font-medium",
            sizes[size],
            variants[variant],
            className,
          )}
          style={customStyles}
        >
          {displayContent}
        </span>
      </div>
    </div>
  )
}
