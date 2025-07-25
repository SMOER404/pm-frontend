"use client"

import type React from "react"
import { cn } from "../lib/utils"
import { useEffect } from "react"
import { X } from "lucide-react"
import CustomButton from "./custom-button"

interface CustomDrawerProps {
  open: boolean
  onClose: () => void
  children: React.ReactNode
  anchor?: "left" | "right" | "top" | "bottom"
  variant?: "temporary" | "persistent" | "permanent"
  size?: "sm" | "md" | "lg" | "xl"
  showCloseButton?: boolean
  closeOnOverlayClick?: boolean
  borderColor?: string
  backgroundColor?: string
}

export default function CustomDrawer({
  open,
  onClose,
  children,
  anchor = "left",
  variant = "temporary",
  size = "md",
  showCloseButton = true,
  closeOnOverlayClick = true,
  borderColor,
  backgroundColor,
}: CustomDrawerProps) {
  // Размеры drawer'а
  const sizes = {
    sm: anchor === "left" || anchor === "right" ? "w-64" : "h-64",
    md: anchor === "left" || anchor === "right" ? "w-80" : "h-80",
    lg: anchor === "left" || anchor === "right" ? "w-96" : "h-96",
    xl: anchor === "left" || anchor === "right" ? "w-[480px]" : "h-[480px]",
  }

  // Позиционирование
  const positions = {
    left: "left-0 top-0 h-full",
    right: "right-0 top-0 h-full",
    top: "top-0 left-0 w-full",
    bottom: "bottom-0 left-0 w-full",
  }

  // Анимации появления
  const animations = {
    left: open ? "translate-x-0" : "-translate-x-full",
    right: open ? "translate-x-0" : "translate-x-full",
    top: open ? "translate-y-0" : "-translate-y-full",
    bottom: open ? "translate-y-0" : "translate-y-full",
  }

  // clipPath для drawer'а (скосы только с внешней стороны, 1px)
  const clipPaths = {
    left: "[clip-path:polygon(0px_0px,calc(100%-12px)_0px,100%_12px,100%_100%,0px_100%)]",
    right: "[clip-path:polygon(12px_0px,100%_0px,100%_100%,0px_100%,0px_12px)]",
    top: "[clip-path:polygon(0px_0px,100%_0px,100%_calc(100%-12px),calc(100%-12px)_100%,0px_100%)]",
    bottom: "[clip-path:polygon(0px_12px,12px_0px,100%_0px,100%_100%,0px_100%)]",
  }

  const contentClipPaths = {
    left: "[clip-path:polygon(1px_1px,calc(100%-11px)_1px,calc(100%-1px)_11px,calc(100%-1px)_calc(100%-1px),1px_calc(100%-1px))]",
    right: "[clip-path:polygon(11px_1px,calc(100%-1px)_1px,calc(100%-1px)_calc(100%-1px),1px_calc(100%-1px),1px_11px)]",
    top: "[clip-path:polygon(1px_1px,calc(100%-1px)_1px,calc(100%-1px)_calc(100%-11px),calc(100%-11px)_calc(100%-1px),1px_calc(100%-1px))]",
    bottom:
      "[clip-path:polygon(1px_11px,11px_1px,calc(100%-1px)_1px,calc(100%-1px)_calc(100%-1px),1px_calc(100%-1px))]",
  }

  // Закрытие по Escape
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && open && variant === "temporary") {
        onClose()
      }
    }

    if (open) {
      document.addEventListener("keydown", handleEscape)
      if (variant === "temporary") {
        document.body.style.overflow = "hidden"
      }
    }

    return () => {
      document.removeEventListener("keydown", handleEscape)
      if (variant === "temporary") {
        document.body.style.overflow = "unset"
      }
    }
  }, [open, onClose, variant])

  const customBorderStyles = {
    ...(borderColor && { backgroundColor: borderColor }),
  }

  const customContentStyles = {
    ...(backgroundColor && { backgroundColor: backgroundColor }),
  }

  // Permanent drawer всегда видим
  if (variant === "permanent") {
    return (
      <div className={cn("relative", sizes[size], positions[anchor])}>
        {/* Border */}
        <div className={cn("absolute inset-0 bg-[#292D30]", clipPaths[anchor])} style={customBorderStyles} />

        {/* Content */}
        <div
          className={cn("relative bg-white h-full overflow-auto", contentClipPaths[anchor])}
          style={customContentStyles}
        >
          <div className="p-6">{children}</div>
        </div>
      </div>
    )
  }

  // Temporary и Persistent drawer'ы - ИСПРАВЛЕН Z-INDEX
  return (
    <>
      {/* Overlay */}
      {variant === "temporary" && open && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-30"
          onClick={closeOnOverlayClick ? onClose : undefined}
        />
      )}

      {/* Drawer */}
      <div
        className={cn(
          "fixed z-30 transition-transform duration-300 ease-in-out",
          sizes[size],
          positions[anchor],
          animations[anchor],
          variant === "persistent" && !open && "pointer-events-none",
        )}
      >
        {/* Border */}
        <div className={cn("absolute inset-0 bg-[#292D30]", clipPaths[anchor])} style={customBorderStyles} />

        {/* Content */}
        <div
          className={cn("relative bg-white h-full overflow-auto", contentClipPaths[anchor])}
          style={customContentStyles}
        >
          {/* Close Button */}
          {showCloseButton && variant === "temporary" && (
            <div className="absolute top-4 right-4 z-10">
              <CustomButton variant="ghost" size="sm" icon={<X className="w-4 h-4" />} iconOnly onClick={onClose}>
                Закрыть
              </CustomButton>
            </div>
          )}

          {/* Content */}
          <div className={cn("p-6", showCloseButton && variant === "temporary" && "pt-16")}>{children}</div>
        </div>
      </div>
    </>
  )
}
