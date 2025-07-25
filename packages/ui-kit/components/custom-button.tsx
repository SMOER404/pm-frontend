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

  // clipPath для скосов (как в Input)
  const borderClipPath = "[clip-path:polygon(12px_0px,100%_0px,100%_calc(100%-12px),calc(100%-12px)_100%,0px_100%,0px_12px)]"
  const contentClipPath = "[clip-path:polygon(11px_1px,calc(100%-1px)_1px,calc(100%-1px)_calc(100%-11px),calc(100%-11px)_calc(100%-1px),1px_calc(100%-1px),1px_11px)]"

  // Кастомные стили
  const customBorderStyles = {
    ...(borderColor && { backgroundColor: borderColor }),
  }

  const customContentStyles = {
    ...(backgroundColor && { backgroundColor: backgroundColor }),
    ...(textColor && { color: textColor }),
  }

  return (
    <div className="relative inline-block">
      {/* Border - фигура со скошенными углами */}
      <div
        className={cn(
          "absolute inset-0 transition-colors duration-200",
          borderClipPath,
          variant === "primary" && "bg-[#AFEB0F]",
          variant === "secondary" && "bg-[#292D30]",
          variant === "outlined" && "bg-[#292D30]", // Видимая граница для outlined
          variant === "ghost" && "bg-transparent",
          variant === "danger" && "bg-red-500",
        )}
        style={customBorderStyles}
      />

      {/* Button Content - внутренняя область с отступом 1px */}
      <div className={cn("relative", contentClipPath)}>
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
