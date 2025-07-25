"use client"

import type React from "react"
import { useEffect, useState } from "react"
import { createPortal } from "react-dom"
import { cn } from "../lib/utils"
import { X } from "lucide-react"

export interface CustomModalProps {
  open: boolean
  onClose: () => void
  children: React.ReactNode
  className?: string
  overlayClassName?: string
  closeOnOverlayClick?: boolean
  closeOnEscape?: boolean
  showCloseButton?: boolean
  size?: "sm" | "md" | "lg" | "xl" | "full"
  position?: "center" | "top" | "bottom"
  disablePortal?: boolean
}

const sizeClasses = {
  sm: "max-w-sm",
  md: "max-w-md",
  lg: "max-w-2xl",
  xl: "max-w-4xl",
  full: "max-w-full h-full",
}

const positionClasses = {
  center: "items-center justify-center",
  top: "items-start justify-center pt-16",
  bottom: "items-end justify-center pb-16",
}

const CustomModal: React.FC<CustomModalProps> = ({
  open,
  onClose,
  children,
  className,
  overlayClassName,
  closeOnOverlayClick = true,
  closeOnEscape = true,
  showCloseButton = true,
  size = "md",
  position = "center",
  disablePortal = false,
}) => {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    return () => setMounted(false)
  }, [])

  useEffect(() => {
    if (!open || !closeOnEscape) return

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose()
      }
    }

    document.addEventListener("keydown", handleEscape)
    return () => document.removeEventListener("keydown", handleEscape)
  }, [open, closeOnEscape, onClose])

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }

    return () => {
      document.body.style.overflow = "unset"
    }
  }, [open])

  if (!mounted || !open) return null

  const handleOverlayClick = (event: React.MouseEvent) => {
    if (closeOnOverlayClick && event.target === event.currentTarget) {
      onClose()
    }
  }

  // Размер скоса для модала (фиксированный)
  const chamferSize = 12

  // Точные clip-path без округлений
  const outerClipPath = `polygon(${chamferSize}px 0px, 100% 0px, 100% calc(100% - ${chamferSize}px), calc(100% - ${chamferSize}px) 100%, 0px 100%, 0px ${chamferSize}px)`
  
  // Точный внутренний clip-path с идеальным отступом
  const innerClipPath = `polygon(calc(${chamferSize}px + 1px) 1px, calc(100% - 1px) 1px, calc(100% - 1px) calc(100% - ${chamferSize}px - 1px), calc(100% - ${chamferSize}px - 1px) calc(100% - 1px), 1px calc(100% - 1px), 1px calc(${chamferSize}px + 1px))`

  const modalContent = (
    <div
      className={cn("fixed inset-0 z-50 flex", positionClasses[position], overlayClassName)}
      onClick={handleOverlayClick}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />

      {/* Modal */}
      <div className={cn("relative mx-4 my-8 w-full", sizeClasses[size], {
        "m-0": size === "full",
      }, className)}>
        {/* Внешняя рамка со скосами */}
        <div
          className="absolute inset-0 transition-colors duration-200"
          style={{
            clipPath: size === "full" ? "" : outerClipPath,
            backgroundColor: "#292D30",
          }}
        />

        {/* Внутренний контент */}
        <div
          className="relative bg-white"
          style={{
            clipPath: size === "full" ? "" : innerClipPath,
          }}
          onClick={(e) => e.stopPropagation()}
        >
          {showCloseButton && (
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-1 rounded-full hover:bg-gray-100 transition-colors z-10"
              aria-label="Закрыть модальное окно"
            >
              <X className="w-5 h-5 text-gray-500" />
            </button>
          )}
          {children}
        </div>
      </div>
    </div>
  )

  if (disablePortal) {
    return modalContent
  }

  return createPortal(modalContent, document.body)
}

export default CustomModal
