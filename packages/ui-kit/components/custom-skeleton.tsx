"use client"
import { cn } from "../lib/utils"

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

  // clipPath для скосов (1px) только для rectangular
  const clipPath =
    variant === "rectangular"
      ? "[clip-path:polygon(8px_0px,100%_0px,100%_calc(100%-8px),calc(100%-8px)_100%,0px_100%,0px_8px)]"
      : ""

  const styles = {
    ...(width && { width: typeof width === "number" ? `${width}px` : width }),
    ...(height && { height: typeof height === "number" ? `${height}px` : height }),
  }

  return (
    <div className={cn("bg-gray-200", variants[variant], animations[animation], clipPath, className)} style={styles} />
  )
}
