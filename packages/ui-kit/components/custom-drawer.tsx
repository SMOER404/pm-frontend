"use client"

import React from "react"
import { cn } from "../lib/utils"
import { useEffect } from "react"
import { X } from "lucide-react"
import CustomButton from "./custom-button"
import { tokens } from "../lib/design-tokens"
import { createChamferStyles, getChamferSizeFromComponentSize } from "../lib/chamfer-utils"

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

  // Получаем размеры скосов
  const chamferSize = getChamferSizeFromComponentSize("md")
  
  // Создаем стили для скосов
  const chamferStyles = createChamferStyles(
    chamferSize,
    borderColor || tokens.colors.primary[300]
  )

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

  if (!open && variant === "temporary") return null

  return (
    <>
      {/* Overlay для temporary drawer */}
      {variant === "temporary" && open && (
        <div
          className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
          onClick={closeOnOverlayClick ? onClose : undefined}
        />
      )}

      {/* Drawer */}
      <div
        className={cn(
          "fixed z-50 bg-white shadow-xl transition-transform duration-300 ease-in-out",
          sizes[size],
          positions[anchor],
          variant === "temporary" && animations[anchor],
          variant === "persistent" && !open && animations[anchor],
        )}
      >
        {/* Внешняя рамка со скосами */}
        <div
          className="absolute inset-0 transition-all duration-200"
          style={{
            ...chamferStyles.outer,
            backgroundColor: borderColor || tokens.colors.primary[300],
          }}
        />

        {/* Внутренний контент */}
        <div
          className="relative h-full bg-white"
          style={{
            ...chamferStyles.inner,
            ...customContentStyles,
          }}
        >
          {/* Header */}
          {showCloseButton && (
            <div className="flex items-center justify-between p-4 border-b border-gray-200">
              <h2 className="text-lg font-semibold text-[#292D30]">Drawer</h2>
              <CustomButton variant="ghost" size="sm" icon={<X className="w-4 h-4" />} iconOnly onClick={onClose}>
                Закрыть
              </CustomButton>
            </div>
          )}

          {/* Content */}
          <div className="p-4 overflow-y-auto h-full">{children}</div>
        </div>
      </div>
    </>
  )
}
