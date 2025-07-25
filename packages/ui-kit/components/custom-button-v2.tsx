"use client"

import type React from "react"
import { cn } from "../lib/utils"
import { tokens, type SizeToken } from "../lib/design-tokens"
import { createChamferStyles, getChamferSizeFromComponentSize } from "../lib/chamfer-utils"
import { useComponentStates } from "../lib/with-states"

interface CustomButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "size"> {
  variant?: "primary" | "secondary" | "outlined" | "ghost" | "danger" | "success" | "warning"
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
  const chamferStyles = createChamferStyles(
    chamferSize,
    states.isFocused ? tokens.colors.brand.DEFAULT : tokens.colors.primary.DEFAULT
  )

  // Определяем цвета на основе варианта и состояния
  const getVariantColors = () => {
    const baseColors = {
      primary: {
        border: tokens.colors.brand.DEFAULT,
        background: tokens.colors.brand.DEFAULT,
        text: tokens.colors.primary.DEFAULT,
        hover: {
          border: tokens.colors.brand.dark,
          background: tokens.colors.brand.dark,
          text: tokens.colors.brand.DEFAULT,
        },
      },
      secondary: {
        border: tokens.colors.primary.DEFAULT,
        background: tokens.colors.primary.DEFAULT,
        text: tokens.colors.neutral.white,
        hover: {
          border: tokens.colors.primary.dark,
          background: tokens.colors.primary.dark,
          text: tokens.colors.neutral.white,
        },
      },
      outlined: {
        border: tokens.colors.primary.DEFAULT,
        background: tokens.colors.neutral.transparent,
        text: tokens.colors.primary.DEFAULT,
        hover: {
          border: tokens.colors.brand.DEFAULT,
          background: tokens.colors.brand.DEFAULT,
          text: tokens.colors.primary.DEFAULT,
        },
      },
      ghost: {
        border: tokens.colors.neutral.transparent,
        background: tokens.colors.neutral.transparent,
        text: tokens.colors.primary.DEFAULT,
        hover: {
          border: tokens.colors.neutral.transparent,
          background: tokens.colors.primary[100],
          text: tokens.colors.primary.DEFAULT,
        },
      },
      danger: {
        border: tokens.colors.danger.DEFAULT,
        background: tokens.colors.danger.DEFAULT,
        text: tokens.colors.neutral.white,
        hover: {
          border: tokens.colors.danger.dark,
          background: tokens.colors.danger.dark,
          text: tokens.colors.neutral.white,
        },
      },
      success: {
        border: tokens.colors.success.DEFAULT,
        background: tokens.colors.success.DEFAULT,
        text: tokens.colors.neutral.white,
        hover: {
          border: tokens.colors.success.dark,
          background: tokens.colors.success.dark,
          text: tokens.colors.neutral.white,
        },
      },
      warning: {
        border: tokens.colors.warning.DEFAULT,
        background: tokens.colors.warning.DEFAULT,
        text: tokens.colors.neutral.white,
        hover: {
          border: tokens.colors.warning.dark,
          background: tokens.colors.warning.dark,
          text: tokens.colors.neutral.white,
        },
      },
    }

    const colors = baseColors[variant]
    return states.isHovered ? colors.hover : colors
  }

  const colors = getVariantColors()

  return (
    <div className={cn("relative inline-block", fullWidth && "w-full")}>
      {/* Внешняя рамка со скосами */}
      <div
        className="absolute inset-0 transition-all duration-200"
        style={{
          ...chamferStyles.outer,
          backgroundColor: colors.border,
        }}
      />

      {/* Внутренний контент */}
      <div
        className="relative"
        style={chamferStyles.inner}
      >
        <button
          className={cn(
            "w-full border-0 outline-none transition-all duration-200 font-medium focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed",
            iconOnly && "aspect-square p-0",
            fullWidth && "w-full",
            className,
          )}
          style={{
            padding: sizeConfig.padding,
            fontSize: sizeConfig.fontSize,
            minHeight: sizeConfig.height,
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