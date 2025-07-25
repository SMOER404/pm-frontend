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

  // clipPath для скосов (1px) - меньшие скосы для badge
  const clipPath = dot
    ? "[clip-path:polygon(2px_0px,100%_0px,100%_calc(100%-2px),calc(100%-2px)_100%,0px_100%,0px_2px)]"
    : "[clip-path:polygon(4px_0px,100%_0px,100%_calc(100%-4px),calc(100%-4px)_100%,0px_100%,0px_4px)]"

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

  if (dot) {
    return (
      <span
        className={cn("inline-block rounded-full", sizes[size], variants[variant], clipPath, className)}
        style={customStyles}
      />
    )
  }

  return (
    <span
      className={cn(
        "inline-flex items-center justify-center font-medium rounded-full",
        sizes[size],
        variants[variant],
        clipPath,
        className,
      )}
      style={customStyles}
    >
      {displayContent}
    </span>
  )
}
