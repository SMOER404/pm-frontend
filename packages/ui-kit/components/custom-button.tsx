"use client"

import type React from "react"
import { cn } from "../lib/utils"

interface CustomButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outlined" | "ghost" | "danger"
  size?: "xs" | "sm" | "md" | "lg" | "xl"
  icon?: React.ReactNode
  iconOnly?: boolean
  loading?: boolean
  borderColor?: string
  backgroundColor?: string
  textColor?: string
  children: React.ReactNode
}

export default function CustomButton({
  variant = "primary",
  size = "md",
  icon,
  iconOnly = false,
  loading = false,
  borderColor,
  backgroundColor,
  textColor,
  className,
  children,
  disabled,
  ...props
}: CustomButtonProps) {
  // Размеры кнопок
  const sizes = {
    xs: "px-2 py-1 text-xs min-h-[24px]",
    sm: "px-3 py-1.5 text-sm min-h-[32px]",
    md: "px-4 py-2 text-sm min-h-[40px]",
    lg: "px-6 py-3 text-base min-h-[48px]",
    xl: "px-8 py-4 text-lg min-h-[56px]",
  }

  // Точные размеры для расчета скоса (25% от высоты)
  const getChamferSize = () => {
    switch (size) {
      case "xs": return 6 // 25% от 24px = 6px
      case "sm": return 8 // 25% от 32px = 8px
      case "lg": return 12 // 25% от 48px = 12px
      case "xl": return 14 // 25% от 56px = 14px
      default: return 10 // 25% от 40px = 10px
    }
  }

  // Кастомные стили
  const customBorderStyles = {
    ...(borderColor && { backgroundColor: borderColor }),
  }

  const customContentStyles = {
    ...(backgroundColor && { backgroundColor: backgroundColor }),
    ...(textColor && { color: textColor }),
  }

  const chamferSize = getChamferSize()

  // Точные clip-path без округлений
  const outerClipPath = `polygon(${chamferSize}px 0px, 100% 0px, 100% calc(100% - ${chamferSize}px), calc(100% - ${chamferSize}px) 100%, 0px 100%, 0px ${chamferSize}px)`
  
  // Точный внутренний clip-path с идеальным отступом
  const innerClipPath = `polygon(calc(${chamferSize}px + 1px) 1px, calc(100% - 1px) 1px, calc(100% - 1px) calc(100% - ${chamferSize}px - 1px), calc(100% - ${chamferSize}px - 1px) calc(100% - 1px), 1px calc(100% - 1px), 1px calc(${chamferSize}px + 1px))`

  return (
    <div className="relative inline-block">
      {/* Внешняя рамка со скосами */}
      <div
        className="absolute inset-0 transition-colors duration-200"
        style={{
          clipPath: outerClipPath,
          backgroundColor: variant === "primary" ? "#AFEB0F" : 
                          variant === "secondary" ? "#292D30" : 
                          variant === "outlined" ? "#292D30" : 
                          variant === "ghost" ? "transparent" : 
                          variant === "danger" ? "#ef4444" : "#e5e7eb",
          ...customBorderStyles,
        }}
      />

      {/* Внутренний контент */}
      <div
        className="relative"
        style={{
          clipPath: innerClipPath,
        }}
      >
        <button
          className={cn(
            "w-full border-0 outline-none transition-all duration-200 font-medium focus:ring-2 focus:ring-[#AFEB0F] focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed",
            sizes[size],
            iconOnly && "aspect-square p-0",
            // Базовые стили
            variant === "primary" && "bg-[#AFEB0F] text-[#292D30]",
            variant === "secondary" && "bg-[#292D30] text-white",
            variant === "outlined" && "bg-transparent text-[#292D30]", // Прозрачный фон для outlined
            variant === "ghost" && "bg-transparent text-[#292D30]",
            variant === "danger" && "bg-red-500 text-white",
            // Hover эффекты
            variant === "primary" && "hover:bg-[#292D30] hover:text-[#AFEB0F]",
            variant === "secondary" && "hover:bg-[#1F2326]",
            variant === "outlined" && "hover:bg-[#292D30] hover:text-[#AFEB0F]",
            variant === "ghost" && "hover:bg-gray-100",
            variant === "danger" && "hover:bg-red-600",
            className,
          )}
          style={customContentStyles}
          disabled={disabled || loading}
          {...props}
        >
          <div className="flex items-center justify-center gap-2">
            {loading && <div className="animate-spin rounded-full h-4 w-4 border-2 border-current border-t-transparent" />}
            {!loading && icon && <span className="flex-shrink-0">{icon}</span>}
            {!iconOnly && <span>{children}</span>}
          </div>
        </button>
      </div>
    </div>
  )
}
