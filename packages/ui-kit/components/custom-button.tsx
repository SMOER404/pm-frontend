"use client"

import React from "react"
import { cn } from "../lib/utils"
import { tokens, type SizeToken } from "../lib/design-tokens"
import { createChamferStyles, getChamferSizeFromComponentSize } from "../lib/chamfer-utils"
import { useComponentStates } from "../lib/with-states"

interface CustomButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "size"> {
  variant?: "primary" | "secondary" | "outlined" | "ghost" | "text" | "danger" | "success" | "warning"
  size?: SizeToken
  icon?: React.ReactNode
  iconOnly?: boolean
  loading?: boolean
  fullWidth?: boolean
  children?: React.ReactNode
}

export default function CustomButton({
  variant = "primary",
  size = "md",
  icon,
  iconOnly = false,
  loading = false,
  fullWidth = false,
  className,
  children,
  disabled,
  ...props
}: CustomButtonProps) {
  const { states, handlers } = useComponentStates(disabled || loading)

  // Получаем размеры из токенов
  const sizeConfig = tokens.sizes[size]
  const chamferSize = getChamferSizeFromComponentSize(size)
  
  // Создаем стили для скосов
  const chamferStyles = createChamferStyles(chamferSize)

  // Определяем цвета на основе варианта и состояния
  const getVariantColors = () => {
    const baseColors = {
      primary: {
        border: "#AFEB0F",
        background: "#AFEB0F",
        text: "#292D30",
        hover: {
          border: "#292D30",
          background: "#292D30",
          text: "#AFEB0F",
        },
      },
      secondary: {
        border: "#292D30",
        background: "#292D30",
        text: "#AFEB0F",
        hover: {
          border: "#AFEB0F",
          background: "#AFEB0F",
          text: "#1A1D20",
        },
      },
      outlined: {
        border: "#AFEB0F",
        background: "white",
        text: "#292D30",
        hover: {

          border: "#AFEB0F",
          background: "#AFEB0F",
          text: "#1A1D20",
        },
      },
      ghost: {
        border: "transparent",
        background: "transparent",
        text: "#292D30",
        hover: {
          border: "transparent",
          background: "#F0F0F0",
          text: "#292D30",
        },
      },
      text: {
        border: "transparent",
        background: "transparent",
        text: "#292D30",
        hover: {
          border: "transparent",
          background: "transparent",
          text: "#AFEB0F",
        },
      },
      danger: {
        border: "#EF4444",
        background: "#EF4444",
        text: "#FFFFFF",
        hover: {
          border: "#B91C1C",
          background: "#B91C1C",
          text: "#FFFFFF",
        },
      },
      success: {
        border: "#10B981",
        background: "#10B981",
        text: "#FFFFFF",
        hover: {
          border: "#047857",
          background: "#047857",
          text: "#FFFFFF",
        },
      },
      warning: {
        border: "#F59E0B",
        background: "#F59E0B",
        text: "#FFFFFF",
        hover: {
          border: "#B45309",
          background: "#B45309",
          text: "#FFFFFF",
        },
      },
    }

    const colors = baseColors[variant]
    
    // Обрабатываем фокус для всех вариантов
    if (states.isFocused && variant !== 'ghost' && variant !== 'text') {
      return {
        border: "#AFEB0F",
        background: variant === 'outlined' ? "transparent" : "#AFEB0F",
        text: variant === 'outlined' ? "#AFEB0F" : "#292D30",
      }
    }
    
    if (variant === 'outlined') {
      // Для outlined всегда показываем border, но меняем background при hover
      return {
        border: states.isHovered ? colors.hover.border : colors.border,
        background: states.isHovered ? colors.hover.background : colors.background,
        text: states.isHovered ? colors.hover.text : colors.text,
      }
    }
    if (variant === 'text') {
      // Для text меняем только цвет текста при hover
      return {
        border: colors.border,
        background: colors.background,
        text: states.isHovered ? colors.hover.text : colors.text,
      }
    }
    return states.isHovered ? colors.hover : colors
  }

  const colors = getVariantColors()

  return (
    <div className={cn("relative inline-block", fullWidth && "w-full")}>
      {/* Внешняя рамка со скосами - для всех вариантов кроме text */}
      {variant !== 'text' && (
        <div
          className="absolute inset-0 transition-all duration-200"
          style={{
            ...chamferStyles.outer,
            backgroundColor: variant === 'ghost' ? 'transparent' : colors.border,
          }}
        />
      )}

      {/* Внутренний контент */}
      <div
        className="relative"
        style={{
          padding: variant !== 'text' ? '1px' : '0',
          backgroundColor: colors.background,
          ...(variant !== 'text' ? { clipPath: chamferStyles.inner.clipPath } : {}),
        }}
      >
        <button
          className={cn(
            "w-full border-0 outline-none transition-all duration-200 font-medium focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed",
            iconOnly && "aspect-square p-0",
            fullWidth && "w-full",
            variant === "text" && "hover:underline",
            className,
          )}
          style={{
            padding: iconOnly ? '0' : sizeConfig.padding,
            fontSize: sizeConfig.fontSize,
            minHeight: sizeConfig.height,
            width: iconOnly ? sizeConfig.height : 'auto',
            backgroundColor: colors.background,
            color: colors.text,
            boxShadow: states.isPressed ? tokens.shadows.inner : tokens.shadows.none,
            transform: states.isPressed ? 'scale(0.98)' : 'scale(1)',
          }}
          disabled={disabled || loading}
          {...handlers}
          {...props}
        >
          <div className="flex items-center justify-center gap-2">
            {loading && (
              <div 
                className="animate-spin rounded-full border-2 border-current border-t-transparent"
                style={{ width: '16px', height: '16px' }}
              />
            )}
            {!loading && icon && <span className="flex-shrink-0">{icon}</span>}
            {!iconOnly && children && <span>{children}</span>}
          </div>
        </button>
      </div>
    </div>
  )
} 