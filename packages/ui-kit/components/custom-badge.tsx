"use client"

import React from "react"
import { cn } from "../lib/utils"
import { tokens, type SizeToken } from "../lib/design-tokens"
import { useComponentStates } from "../lib/with-states"
import {
  getBadgeStyles,
  createBadgeClasses,
  getInteractiveBadgeStyles,
  getDotStyles,
  getAnimatedBadgeStyles,
  type BadgeVariant,
  type BadgeStyle,
} from "../lib/badge-utils"

interface CustomBadgeProps {
  children?: React.ReactNode
  variant?: keyof BadgeVariant
  style?: keyof BadgeStyle
  size?: SizeToken
  icon?: React.ReactNode
  iconPosition?: "left" | "right"
  dot?: boolean
  dotPosition?: "left" | "right"
  animated?: boolean
  animationType?: "pulse" | "bounce" | "spin"
  interactive?: boolean
  disabled?: boolean
  hoverable?: boolean
  removable?: boolean
  className?: string
  onClick?: () => void
  onRemove?: () => void
  onMouseEnter?: () => void
  onMouseLeave?: () => void
}

export default function CustomBadge({
  children,
  variant = "default",
  style = "solid",
  size = "md",
  icon,
  iconPosition = "left",
  dot = false,
  dotPosition = "left",
  animated = false,
  animationType = "pulse",
  interactive = false,
  disabled = false,
  hoverable = false,
  removable = false,
  className,
  onClick,
  onRemove,
  onMouseEnter,
  onMouseLeave,
}: CustomBadgeProps) {
  const { states, handlers } = useComponentStates(disabled)

  // Получаем стили бейджа
  const badgeStyles = getBadgeStyles(variant, style, size)
  const badgeClasses = createBadgeClasses(variant, style, hoverable)
  
  // Получаем стили для интерактивности
  const interactiveStyles = getInteractiveBadgeStyles(interactive, disabled)
  
  // Получаем стили для точки
  const dotStyles = dot ? getDotStyles(variant, size) : null
  
  // Получаем стили для анимации
  const animationStyles = getAnimatedBadgeStyles(animated, animationType)

  // Получаем цвет скоса в зависимости от варианта и стиля
  const getChamferColor = () => {
    if (style === "outlined") {
      switch (variant) {
        case "brand": return "#AFEB0F"
        case "primary": return "#292D30"
        case "success": return "#10B981"
        case "warning": return "#F59E0B"
        case "danger": return "#EF4444"
        case "info": return "#3B82F6"
        default: return "#292D30"
      }
    }
    return "#292D30"
  }

  // Обработчики событий
  const handleClick = () => {
    if (!disabled && onClick) {
      onClick()
    }
  }

  const handleRemove = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (!disabled && onRemove) {
      onRemove()
    }
  }

  const handleMouseEnter = () => {
    if (!disabled && onMouseEnter) {
      onMouseEnter()
    }
  }

  const handleMouseLeave = () => {
    if (!disabled && onMouseLeave) {
      onMouseLeave()
    }
  }

  // Определяем содержимое
  const hasContent = !!children
  const hasIcon = !!icon
  const hasDot = !!dot
  const hasRemoveButton = !!removable

  // Создаем основной контент
  const badgeContent = (
    <>
      {/* Точка слева */}
      {hasDot && dotPosition === "left" && (
        <div className={cn("mr-2", dotStyles?.className)} />
      )}

      {/* Иконка слева */}
      {hasIcon && iconPosition === "left" && (
        <span 
          className="mr-2 flex-shrink-0"
          style={{ fontSize: badgeStyles.iconSize }}
        >
          {icon}
        </span>
      )}

      {/* Текст */}
      {hasContent && <span>{children}</span>}

      {/* Иконка справа */}
      {hasIcon && iconPosition === "right" && (
        <span 
          className="ml-2 flex-shrink-0"
          style={{ fontSize: badgeStyles.iconSize }}
        >
          {icon}
        </span>
      )}

      {/* Точка справа */}
      {hasDot && dotPosition === "right" && (
        <div className={cn("ml-2", dotStyles?.className)} />
      )}

      {/* Кнопка удаления */}
      {hasRemoveButton && (
        <button
          type="button"
          className="ml-2 p-0.5 hover:bg-black/10 rounded-full transition-colors"
          onClick={handleRemove}
          disabled={disabled}
          aria-label="Удалить бейдж"
        >
          <svg
            className="w-3 h-3"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      )}
    </>
  )

  // Если бейдж только с точкой или иконкой без текста
  if (!hasContent && (hasDot || hasIcon)) {
    return (
      <div
        className={cn(
          badgeClasses,
          interactiveStyles.className,
          animationStyles.className,
          "inline-flex items-center justify-center rounded-full border",
          className
        )}
        style={{
          ...badgeStyles.style,
        }}
        onClick={handleClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        {...interactiveStyles}
      >
        {badgeContent}
      </div>
    )
  }

  // Обычный бейдж с текстом
  return (
    <div
      className={cn(
        badgeClasses,
        interactiveStyles.className,
        animationStyles.className,
        "inline-flex items-center rounded-full border",
        className
      )}
      style={{
        ...badgeStyles.style,
      }}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...interactiveStyles}
    >
      {badgeContent}
    </div>
  )
} 