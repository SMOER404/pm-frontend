"use client"

import type React from "react"
import { cn } from "../lib/utils"
import { tokens, type SizeToken } from "../lib/design-tokens"
import { createChamferStyles, getChamferSizeFromComponentSize } from "../lib/chamfer-utils"
import { useComponentStates } from "../lib/with-states"
import {
  getCardStyles,
  createCardClasses,
  getImageCardStyles,
  getInteractiveCardStyles,
  type CardVariant,
} from "../lib/card-utils"

interface CustomCardProps {
  children: React.ReactNode
  variant?: "default" | "brand" | "primary"
  style?: keyof CardVariant
  size?: SizeToken
  image?: {
    src: string
    alt: string
    position?: "top" | "bottom" | "left" | "right"
    size?: "sm" | "md" | "lg"
  }
  header?: React.ReactNode
  footer?: React.ReactNode
  interactive?: boolean
  disabled?: boolean
  hoverable?: boolean
  chamfered?: boolean
  className?: string
  headerClassName?: string
  bodyClassName?: string
  footerClassName?: string
  imageClassName?: string
  onClick?: () => void
  onMouseEnter?: () => void
  onMouseLeave?: () => void
}

export default function CustomCard({
  children,
  variant = "default",
  style = "outlined",
  size = "md",
  image,
  header,
  footer,
  interactive = false,
  disabled = false,
  hoverable = false,
  chamfered = true,
  className,
  headerClassName,
  bodyClassName,
  footerClassName,
  imageClassName,
  onClick,
  onMouseEnter,
  onMouseLeave,
}: CustomCardProps) {
  const { states, handlers } = useComponentStates(disabled)

  // Получаем стили карточки
  const cardStyles = getCardStyles(variant, size, style)
  const cardClasses = createCardClasses(variant, style, hoverable)
  
  // Получаем стили для изображения
  const imageStyles = image ? getImageCardStyles(image.position, image.size) : null
  
  // Получаем стили для интерактивности
  const interactiveStyles = getInteractiveCardStyles(interactive, disabled)

  // Получаем стили для скосов
  const chamferSize = getChamferSizeFromComponentSize(size)
  const chamferStyles = chamfered ? createChamferStyles(
    chamferSize,
    states.isFocused ? tokens.colors.brand.DEFAULT : tokens.colors.primary[300]
  ) : null

  // Обработчики событий
  const handleClick = () => {
    if (!disabled && interactive && onClick) {
      onClick()
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

  // Определяем структуру карточки
  const hasImage = !!image
  const hasHeader = !!header
  const hasFooter = !!footer

  // Создаем основной контент
  const cardContent = (
    <>
      {/* Header */}
      {hasHeader && (
        <div className={cn(
          "border-b border-gray-200 pb-3 mb-3",
          headerClassName
        )}>
          {header}
        </div>
      )}

      {/* Body */}
      <div className={cn(
        hasHeader && "pt-0",
        hasFooter && "pb-3 mb-3",
        bodyClassName
      )}>
        {children}
      </div>

      {/* Footer */}
      {hasFooter && (
        <div className={cn(
          "border-t border-gray-200 pt-3 mt-3",
          footerClassName
        )}>
          {footer}
        </div>
      )}
    </>
  )

  // Если есть изображение, создаем композитную структуру
  if (hasImage) {
    return (
      <div
        className={cn(
          cardClasses,
          imageStyles?.containerClass,
          interactiveStyles.className,
          "relative",
          className
        )}
        onClick={handleClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        {...interactiveStyles}
      >
        {/* Внешняя рамка со скосами */}
        {chamfered && (
          <div
            className="absolute inset-0 transition-all duration-200"
            style={{
              ...chamferStyles!.outer,
              backgroundColor: tokens.colors.primary[300],
            }}
          />
        )}

        {/* Внутренний контент */}
        <div
          className="relative h-full"
          style={chamfered ? chamferStyles!.inner : undefined}
        >
          {/* Изображение */}
          <div className={cn(
            imageStyles?.imageClass,
            imageClassName
          )}>
            <img
              src={image!.src}
              alt={image!.alt}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Контент */}
          <div className={cn(
            "p-4",
            imageStyles?.contentClass
          )}>
            {cardContent}
          </div>
        </div>
      </div>
    )
  }

  // Обычная карточка без изображения
  return (
    <div
      className={cn(
        cardClasses,
        interactiveStyles.className,
        chamfered && "relative",
        className
      )}
      style={chamfered ? undefined : cardStyles.style}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...interactiveStyles}
    >
      {/* Внешняя рамка со скосами */}
      {chamfered && (
        <div
          className="absolute inset-0 transition-all duration-200"
          style={{
            ...chamferStyles!.outer,
            backgroundColor: tokens.colors.primary[300],
          }}
        />
      )}

      {/* Внутренний контент */}
      <div
        className={cn(
          "relative",
          chamfered && "h-full"
        )}
        style={chamfered ? chamferStyles!.inner : undefined}
      >
        <div className={cn(
          "p-4",
          chamfered && "h-full"
        )}>
          {cardContent}
        </div>
      </div>
    </div>
  )
} 