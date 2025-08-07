"use client"
import { cn } from "../lib/utils"
import { tokens } from "../lib/design-tokens"
import { createChamferStyles, getChamferSizeFromComponentSize } from "../lib/chamfer-utils"

interface CustomSkeletonProps {
  variant?: "text" | "rectangular" | "circular"
  width?: string | number
  height?: string | number
  animation?: "pulse" | "wave" | "none"
  className?: string
}

export default function CustomSkeleton({
  variant = "text",
  width,
  height,
  animation = "pulse",
  className,
}: CustomSkeletonProps) {
  // Варианты анимации
  const animations = {
    pulse: "animate-pulse",
    wave: "animate-pulse", // Можно добавить кастомную wave анимацию
    none: "",
  }

  // Варианты форм
  const variants = {
    text: "h-4 rounded",
    rectangular: "rounded",
    circular: "rounded-full",
  }

  // Получаем стили для скосов только для rectangular
  const chamferSize = getChamferSizeFromComponentSize("sm")
  const chamferStyles = variant === "rectangular" ? createChamferStyles(
    chamferSize,
    tokens.colors.primary[300]
  ) : null

  const styles = {
    ...(width && { width: typeof width === "number" ? `${width}px` : width }),
    ...(height && { height: typeof height === "number" ? `${height}px` : height }),
  }

  // Для rectangular используем структуру со скосами
  if (variant === "rectangular" && chamferStyles) {
    return (
      <div className={cn("relative", className)} style={styles}>
        {/* Внешняя рамка со скосами */}
        <div
          className="absolute inset-0 transition-all duration-200"
          style={{
            ...chamferStyles.outer,
            backgroundColor: tokens.colors.primary[300],
          }}
        />

        {/* Внутренний контент */}
        <div
          className={cn("relative bg-gray-200", animations[animation])}
          style={{
            ...chamferStyles.inner,
          }}
        />
      </div>
    )
  }

  // Для остальных вариантов обычный рендер
  return (
    <div className={cn("bg-gray-200", variants[variant], animations[animation], className)} style={styles} />
  )
}
