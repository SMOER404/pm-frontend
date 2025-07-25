"use client"

import type React from "react"
import { cn } from "../lib/utils"
import { useState } from "react"

interface CustomInputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> {
  label?: string
  error?: string
  helperText?: string
  size?: "sm" | "md" | "lg"
  variant?: "outlined" | "filled"
  borderColor?: string
  backgroundColor?: string
  textColor?: string
  icon?: React.ReactNode
  iconPosition?: "left" | "right"
}

export default function CustomInput({
  label,
  error,
  helperText,
  size = "md",
  variant = "outlined",
  borderColor,
  backgroundColor,
  textColor,
  icon,
  iconPosition = "left",
  className,
  ...props
}: CustomInputProps) {
  const [isFocused, setIsFocused] = useState(false)

  // Размеры
  const sizes = {
    sm: "px-3 py-2 text-sm min-h-[32px]",
    md: "px-4 py-3 text-sm min-h-[40px]",
    lg: "px-5 py-4 text-base min-h-[48px]",
  }

  // Точные размеры для расчета скоса (25% от высоты)
  const getChamferSize = () => {
    switch (size) {
      case "sm": return 8 // 25% от 32px = 8px
      case "lg": return 12 // 25% от 48px = 12px
      default: return 10 // 25% от 40px = 10px
    }
  }

  // Варианты стилей
  const variants = {
    outlined: "bg-background",
    filled: "bg-muted",
  }

  const customContentStyles = {
    ...(backgroundColor && { backgroundColor: backgroundColor }),
    ...(textColor && { color: textColor }),
  }

  // Определяем цвет для рамки
  const getBorderColor = () => {
    if (error) return "#ef4444" // destructive
    if (isFocused) return "#AFEB0F" // brand
    if (borderColor) return borderColor
    return "#e5e7eb" // border
  }

  const chamferSize = getChamferSize()
  const borderColorValue = getBorderColor()

  // Точные clip-path без округлений
  const outerClipPath = `polygon(${chamferSize}px 0px, 100% 0px, 100% calc(100% - ${chamferSize}px), calc(100% - ${chamferSize}px) 100%, 0px 100%, 0px ${chamferSize}px)`
  
  // Точный внутренний clip-path с идеальным отступом
  const innerClipPath = `polygon(calc(${chamferSize}px + 1px) 1px, calc(100% - 1px) 1px, calc(100% - 1px) calc(100% - ${chamferSize}px - 1px), calc(100% - ${chamferSize}px - 1px) calc(100% - 1px), 1px calc(100% - 1px), 1px calc(${chamferSize}px + 1px))`

  return (
    <div className={cn("space-y-1", className)}>
      {/* Label */}
      {label && <label className="block text-sm font-medium text-foreground">{label}</label>}

      {/* Input Container */}
      <div className="relative">
        {/* Внешняя рамка со скосами */}
        <div
          className="absolute inset-0 transition-colors duration-200"
          style={{
            clipPath: outerClipPath,
            backgroundColor: borderColorValue,
          }}
        />

        {/* Внутренний контент */}
        <div
          className="relative"
          style={{
            clipPath: innerClipPath,
          }}
        >
          <div className="relative flex items-center">
            {/* Left Icon */}
            {icon && iconPosition === "left" && <div className="absolute left-3 z-10 text-gray-400">{icon}</div>}

            <input
              className={cn(
                "w-full border-0 outline-none transition-all duration-200 placeholder:text-gray-400",
                sizes[size],
                variants[variant],
                icon && iconPosition === "left" && "pl-10",
                icon && iconPosition === "right" && "pr-10",
                error && "border-red-500 focus:border-red-500",
              )}
              style={customContentStyles}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              {...props}
            />

            {/* Right Icon */}
            {icon && iconPosition === "right" && <div className="absolute right-3 z-10 text-gray-400">{icon}</div>}
          </div>
        </div>
      </div>

      {/* Helper Text / Error */}
      {(error || helperText) && (
        <p className={cn("text-xs", error ? "text-red-500" : "text-gray-500")}>{error || helperText}</p>
      )}
    </div>
  )
}
