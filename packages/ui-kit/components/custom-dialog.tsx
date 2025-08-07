"use client"

import type React from "react"
import { cn } from "../lib/utils"
import { X } from "lucide-react"
import { useEffect } from "react"
import CustomButton from "./custom-button"

interface CustomDialogProps {
  open: boolean
  onClose: () => void
  children: React.ReactNode
  title?: string
  size?: "sm" | "md" | "lg" | "xl"
  showCloseButton?: boolean
  closeOnOverlayClick?: boolean
  borderColor?: string
  backgroundColor?: string
}

export default function CustomDialog({
  open,
  onClose,
  children,
  title,
  size = "md",
  showCloseButton = true,
  closeOnOverlayClick = true,
  borderColor,
  backgroundColor,
}: CustomDialogProps) {
  // Размеры диалога
  const sizeStyles = {
    sm: "max-w-sm",
    md: "max-w-md",
    lg: "max-w-lg",
    xl: "max-w-2xl",
  }

  // Размер скоса для диалога (фиксированный)
  const chamferSize = 12

  // Точные clip-path без округлений
  const outerClipPath = `polygon(${chamferSize}px 0px, 100% 0px, 100% calc(100% - ${chamferSize}px), calc(100% - ${chamferSize}px) 100%, 0px 100%, 0px ${chamferSize}px)`
  
  // Точный внутренний clip-path с идеальным отступом
  const innerClipPath = `polygon(calc(${chamferSize}px + 1px) 1px, calc(100% - 1px) 1px, calc(100% - 1px) calc(100% - ${chamferSize}px - 1px), calc(100% - ${chamferSize}px - 1px) calc(100% - 1px), 1px calc(100% - 1px), 1px calc(${chamferSize}px + 1px))`

  // Закрытие по Escape
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && open) {
        onClose()
      }
    }

    if (open) {
      document.addEventListener("keydown", handleEscape)
      document.body.style.overflow = "hidden"
    }

    return () => {
      document.removeEventListener("keydown", handleEscape)
      document.body.style.overflow = "unset"
    }
  }, [open, onClose])

  if (!open) return null

  const customBorderStyles = {
    ...(borderColor && { backgroundColor: borderColor }),
  }

  const customContentStyles = {
    ...(backgroundColor && { backgroundColor: backgroundColor }),
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={closeOnOverlayClick ? onClose : undefined}
      />

      {/* Dialog */}
      <div className={cn("relative w-full mx-4", sizeStyles[size])}>
        {/* Внешняя рамка со скосами */}
        <div
          className="absolute inset-0 transition-colors duration-200"
          style={{
            clipPath: outerClipPath,
            backgroundColor: "#292D30",
            ...customBorderStyles,
          }}
        />

        {/* Внутренний контент */}
        <div
          className="relative bg-white"
          style={{
            clipPath: innerClipPath,
            ...customContentStyles,
          }}
        >
          {/* Header */}
          {(title || showCloseButton) && (
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              {title && <h2 className="text-lg font-semibold text-[#292D30]">{title}</h2>}
              {showCloseButton && (
                <CustomButton variant="ghost" size="sm" icon={<X className="w-4 h-4" />} iconOnly onClick={onClose}>
                  Закрыть
                </CustomButton>
              )}
            </div>
          )}

          {/* Body */}
          <div className="p-6">{children}</div>
        </div>
      </div>
    </div>
  )
}
