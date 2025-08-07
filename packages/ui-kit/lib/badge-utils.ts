// Утилиты для работы с Badge компонентами
import { tokens, type SizeToken } from './design-tokens'

export interface BadgeVariant {
  default: string
  success: string
  warning: string
  danger: string
  info: string
  brand: string
  primary: string
  secondary: string
}

export interface BadgeStyle {
  solid: string
  outlined: string
  soft: string
  ghost: string
}

export interface BadgeSize {
  padding: string
  fontSize: string
  borderRadius: string
  iconSize: string
}

export const badgeVariants: Record<string, BadgeVariant> = {
  default: {
    default: "bg-gray-100 text-gray-800 border-gray-200",
    success: "bg-green-100 text-green-800 border-green-200",
    warning: "bg-yellow-100 text-yellow-800 border-yellow-200",
    danger: "bg-red-100 text-red-800 border-red-200",
    info: "bg-blue-100 text-blue-800 border-blue-200",
    brand: "bg-brand/10 text-brand border-brand/20",
    primary: "bg-primary/10 text-primary border-primary/20",
    secondary: "bg-gray-100 text-gray-800 border-gray-200",
  },
  solid: {
    default: "bg-gray-500 text-white border-gray-500",
    success: "bg-green-500 text-white border-green-500",
    warning: "bg-yellow-500 text-white border-yellow-500",
    danger: "bg-red-500 text-white border-red-500",
    info: "bg-blue-500 text-white border-blue-500",
    brand: "bg-brand text-primary border-brand",
    primary: "bg-primary text-white border-primary",
    secondary: "bg-gray-500 text-white border-gray-500",
  },
  outlined: {
    default: "bg-transparent text-gray-600 border-gray-300",
    success: "bg-transparent text-green-600 border-green-300",
    warning: "bg-transparent text-yellow-600 border-yellow-300",
    danger: "bg-transparent text-red-600 border-red-300",
    info: "bg-transparent text-blue-600 border-blue-300",
    brand: "bg-transparent text-brand border-brand",
    primary: "bg-transparent text-primary border-primary",
    secondary: "bg-transparent text-gray-600 border-gray-300",
  },
  soft: {
    default: "bg-gray-50 text-gray-700 border-gray-100",
    success: "bg-green-50 text-green-700 border-green-100",
    warning: "bg-yellow-50 text-yellow-700 border-yellow-100",
    danger: "bg-red-50 text-red-700 border-red-100",
    info: "bg-blue-50 text-blue-700 border-blue-100",
    brand: "bg-brand/5 text-brand border-brand/10",
    primary: "bg-primary/5 text-primary border-primary/10",
    secondary: "bg-gray-50 text-gray-700 border-gray-100",
  },
}

export const badgeSizes: Record<SizeToken, BadgeSize> = {
  xs: {
    padding: "2px 6px",
    fontSize: "10px",
    borderRadius: "4px",
    iconSize: "10px",
  },
  sm: {
    padding: "4px 8px",
    fontSize: "12px",
    borderRadius: "6px",
    iconSize: "12px",
  },
  md: {
    padding: "6px 12px",
    fontSize: "14px",
    borderRadius: "8px",
    iconSize: "14px",
  },
  lg: {
    padding: "8px 16px",
    fontSize: "16px",
    borderRadius: "10px",
    iconSize: "16px",
  },
  xl: {
    padding: "10px 20px",
    fontSize: "18px",
    borderRadius: "12px",
    iconSize: "18px",
  },
}

/**
 * Получает стили бейджа на основе варианта, стиля и размера
 * @param variant - вариант бейджа
 * @param style - стиль бейджа
 * @param size - размер бейджа
 * @returns объект со стилями
 */
export function getBadgeStyles(
  variant: keyof BadgeVariant = "default",
  style: keyof BadgeStyle = "solid",
  size: SizeToken = "md"
) {
  const variantStyles = badgeVariants[style] || badgeVariants.default
  const sizeStyles = badgeSizes[size]

  return {
    className: variantStyles[variant],
    style: {
      padding: sizeStyles.padding,
      fontSize: sizeStyles.fontSize,
      borderRadius: sizeStyles.borderRadius,
    },
    iconSize: sizeStyles.iconSize,
  }
}

/**
 * Создает классы для бейджа с ховер-эффектами
 * @param variant - вариант бейджа
 * @param style - стиль бейджа
 * @param hoverable - добавлять ли ховер-эффекты
 * @returns строку с классами
 */
export function createBadgeClasses(
  variant: keyof BadgeVariant = "default",
  style: keyof BadgeStyle = "solid",
  hoverable: boolean = false
): string {
  const baseClasses = badgeVariants[style]?.[variant] || badgeVariants.default[variant]
  
  if (!hoverable) return baseClasses

  const hoverClasses = {
    default: "hover:bg-gray-200 hover:border-gray-300",
    success: "hover:bg-green-200 hover:border-green-300",
    warning: "hover:bg-yellow-200 hover:border-yellow-300",
    danger: "hover:bg-red-200 hover:border-red-300",
    info: "hover:bg-blue-200 hover:border-blue-300",
    brand: "hover:bg-brand/20 hover:border-brand/30",
    primary: "hover:bg-primary/20 hover:border-primary/30",
    secondary: "hover:bg-gray-200 hover:border-gray-300",
  }

  return `${baseClasses} ${hoverClasses[variant]} transition-colors duration-200`
}

/**
 * Создает стили для интерактивного бейджа
 * @param interactive - интерактивный ли бейдж
 * @param disabled - отключен ли бейдж
 * @returns объект со стилями
 */
export function getInteractiveBadgeStyles(
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

/**
 * Создает стили для бейджа с точкой
 * @param variant - вариант бейджа
 * @param size - размер бейджа
 * @returns объект со стилями для точки
 */
export function getDotStyles(
  variant: keyof BadgeVariant = "default",
  size: SizeToken = "md"
) {
  const dotColors = {
    default: "bg-gray-400",
    success: "bg-green-500",
    warning: "bg-yellow-500",
    danger: "bg-red-500",
    info: "bg-blue-500",
    brand: "bg-brand",
    primary: "bg-primary",
    secondary: "bg-gray-400",
  }

  const dotSizes = {
    xs: "w-1.5 h-1.5",
    sm: "w-2 h-2",
    md: "w-2.5 h-2.5",
    lg: "w-3 h-3",
    xl: "w-3.5 h-3.5",
  }

  return {
    className: `${dotColors[variant]} ${dotSizes[size]} rounded-full`,
  }
}

/**
 * Создает стили для анимированного бейджа
 * @param animated - анимированный ли бейдж
 * @param animationType - тип анимации
 * @returns объект со стилями анимации
 */
export function getAnimatedBadgeStyles(
  animated: boolean = false,
  animationType: "pulse" | "bounce" | "spin" = "pulse"
) {
  if (!animated) return {}

  const animationClasses = {
    pulse: "animate-pulse",
    bounce: "animate-bounce",
    spin: "animate-spin",
  }

  return {
    className: animationClasses[animationType],
  }
} 