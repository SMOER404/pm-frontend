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

  // clipPath для скосов (1px)
  const containerClipPath =
    "[clip-path:polygon(12px_0px,100%_0px,100%_calc(100%-12px),calc(100%-12px)_100%,0px_100%,0px_12px)]"
  const contentClipPath =
    "[clip-path:polygon(11px_1px,calc(100%-1px)_1px,calc(100%-1px)_calc(100%-11px),calc(100%-11px)_calc(100%-1px),1px_calc(100%-1px),1px_11px)]"

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
        {/* Border */}
        <div className={cn("absolute inset-0 bg-[#292D30]", containerClipPath)} style={customBorderStyles} />

        {/* Content */}
        <div className={cn("relative bg-white", contentClipPath)} style={customContentStyles}>
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
