// Утилиты для работы с Card компонентами
import { tokens, type SizeToken } from './design-tokens'

export interface CardVariant {
  outlined: string
  filled: string
  elevated: string
  flat: string
}

export interface CardSize {
  padding: string
  borderRadius: string
  fontSize: string
}

export const cardVariants: Record<string, CardVariant> = {
  default: {
    outlined: "border border-gray-200 bg-white",
    filled: "bg-gray-50 border border-gray-100",
    elevated: "bg-white shadow-lg border border-gray-100",
    flat: "bg-white",
  },
  brand: {
    outlined: "border border-brand bg-white",
    filled: "bg-brand/5 border border-brand/20",
    elevated: "bg-white shadow-lg border border-brand/20",
    flat: "bg-white",
  },
  primary: {
    outlined: "border border-primary bg-white",
    filled: "bg-primary/5 border border-primary/20",
    elevated: "bg-white shadow-lg border border-primary/20",
    flat: "bg-white",
  },
}

export const cardSizes: Record<SizeToken, CardSize> = {
  xs: {
    padding: "8px",
    borderRadius: "4px",
    fontSize: "12px",
  },
  sm: {
    padding: "12px",
    borderRadius: "6px",
    fontSize: "14px",
  },
  md: {
    padding: "16px",
    borderRadius: "8px",
    fontSize: "16px",
  },
  lg: {
    padding: "20px",
    borderRadius: "10px",
    fontSize: "18px",
  },
  xl: {
    padding: "24px",
    borderRadius: "12px",
    fontSize: "20px",
  },
}

/**
 * Получает стили карточки на основе варианта и размера
 * @param variant - вариант карточки
 * @param size - размер карточки
 * @param style - стиль карточки (outlined, filled, elevated, flat)
 * @returns объект со стилями
 */
export function getCardStyles(
  variant: string = "default",
  size: SizeToken = "md",
  style: keyof CardVariant = "outlined"
) {
  const variantStyles = cardVariants[variant] || cardVariants.default
  const sizeStyles = cardSizes[size]

  return {
    className: variantStyles[style],
    style: {
      padding: sizeStyles.padding,
      borderRadius: sizeStyles.borderRadius,
      fontSize: sizeStyles.fontSize,
    },
  }
}

/**
 * Создает классы для карточки с ховер-эффектами
 * @param variant - вариант карточки
 * @param style - стиль карточки
 * @param hoverable - добавлять ли ховер-эффекты
 * @returns строку с классами
 */
export function createCardClasses(
  variant: string = "default",
  style: keyof CardVariant = "outlined",
  hoverable: boolean = false
): string {
  const baseClasses = cardVariants[variant]?.[style] || cardVariants.default[style]
  
  if (!hoverable) return baseClasses

  const hoverClasses = {
    outlined: "hover:border-gray-300 hover:shadow-sm transition-all duration-200",
    filled: "hover:bg-gray-100 transition-colors duration-200",
    elevated: "hover:shadow-xl hover:border-gray-200 transition-all duration-200",
    flat: "hover:bg-gray-50 transition-colors duration-200",
  }

  return `${baseClasses} ${hoverClasses[style]}`
}

/**
 * Создает стили для карточки с изображением
 * @param imagePosition - позиция изображения
 * @param imageSize - размер изображения
 * @returns объект со стилями
 */
export function getImageCardStyles(
  imagePosition: "top" | "bottom" | "left" | "right" = "top",
  imageSize: "sm" | "md" | "lg" = "md"
) {
  const imageSizes = {
    sm: "h-24",
    md: "h-32",
    lg: "h-48",
  }

  const layoutClasses = {
    top: "flex-col",
    bottom: "flex-col-reverse",
    left: "flex-row",
    right: "flex-row-reverse",
  }

  return {
    containerClass: `flex ${layoutClasses[imagePosition]}`,
    imageClass: `${imageSizes[imageSize]} w-full object-cover`,
    contentClass: imagePosition === "left" || imagePosition === "right" ? "flex-1" : "",
  }
}

/**
 * Создает стили для интерактивной карточки
 * @param interactive - интерактивная ли карточка
 * @param disabled - отключена ли карточка
 * @returns объект со стилями
 */
export function getInteractiveCardStyles(
  interactive: boolean = false,
  disabled: boolean = false
) {
  if (!interactive) return {}

  const baseClasses = "cursor-pointer select-none"
  const disabledClasses = disabled ? "opacity-50 cursor-not-allowed" : ""
  const interactiveClasses = !disabled ? "active:scale-95 transition-transform duration-100" : ""

  return {
    className: `${baseClasses} ${disabledClasses} ${interactiveClasses}`,
    role: "button",
    tabIndex: disabled ? -1 : 0,
  }
} 