"use client"

import type React from "react"

// Локальная утилита для объединения классов
function cn(...classes: (string | undefined | null | false)[]) {
  return classes.filter(Boolean).join(' ')
}

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

  // Варианты стилей
  const variants = {
    primary: "bg-[#AFEB0F] text-[#292D30] hover:bg-[#9DD60A] border-[#AFEB0F]",
    secondary: "bg-[#292D30] text-white hover:bg-[#1F2326] border-[#292D30]",
    outlined: "bg-transparent text-[#292D30] hover:bg-[#292D30] hover:text-white border-[#292D30]",
    ghost: "bg-transparent text-[#292D30] hover:bg-gray-100 border-transparent",
    danger: "bg-red-500 text-white hover:bg-red-600 border-red-500",
  }

  // clipPath для скосов (1px)
  const clipPath = "[clip-path:polygon(12px_0px,100%_0px,100%_calc(100%-12px),calc(100%-12px)_100%,0px_100%,0px_12px)]"
  const borderClipPath =
    "[clip-path:polygon(12px_0px,100%_0px,100%_calc(100%-12px),calc(100%-12px)_100%,0px_100%,0px_12px)]"

  // Кастомные стили
  const customBorderStyles = {
    ...(borderColor && { backgroundColor: borderColor }),
  }

  const customButtonStyles = {
    ...(backgroundColor && { backgroundColor: backgroundColor }),
    ...(textColor && { color: textColor }),
  }

  return (
    <button
      className={cn(
        "relative inline-flex items-center justify-center gap-2 font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#AFEB0F] focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed",
        sizes[size],
        iconOnly && "aspect-square p-0",
        className,
      )}
      disabled={disabled || loading}
      {...props}
    >
      {/* Border */}
      <div className={cn("absolute inset-0", borderClipPath)} style={customBorderStyles}>
        <div className={cn("absolute inset-0", variants[variant])} />
      </div>

      {/* Button Content */}
      <div
        className={cn(
          "relative m-px flex items-center justify-center gap-2 h-full w-full transition-all duration-200",
          clipPath,
          variants[variant],
        )}
        style={customButtonStyles}
      >
        {loading && <div className="animate-spin rounded-full h-4 w-4 border-2 border-current border-t-transparent" />}
        {!loading && icon && <span className="flex-shrink-0">{icon}</span>}
        {!iconOnly && <span>{children}</span>}
      </div>
    </button>
  )
} 