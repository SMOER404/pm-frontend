// Утилиты для работы с Typography компонентами
import { tokens, type SizeToken } from "./design-tokens"

export interface TypographyVariant {
  h1: string
  h2: string
  h3: string
  h4: string
  h5: string
  h6: string
  body: string
  lead: string
  small: string
  caption: string
  code: string
  blockquote: string
}

export interface TypographyStyle {
  default: string
  brand: string
  primary: string
  secondary: string
  muted: string
  success: string
  warning: string
  danger: string
  info: string
}

export interface TypographySize {
  fontSize: string
  lineHeight: string
  fontWeight: string
  letterSpacing: string
}

export const typographyVariants: TypographyVariant = {
  h1: "text-4xl font-bold leading-tight tracking-tight",
  h2: "text-3xl font-bold leading-tight tracking-tight",
  h3: "text-2xl font-bold leading-tight tracking-tight",
  h4: "text-xl font-bold leading-tight tracking-tight",
  h5: "text-lg font-bold leading-tight tracking-tight",
  h6: "text-base font-bold leading-tight tracking-tight",
  body: "text-base font-normal leading-relaxed tracking-normal",
  lead: "text-lg font-normal leading-relaxed tracking-normal",
  small: "text-sm font-normal leading-relaxed tracking-normal",
  caption: "text-xs font-normal leading-relaxed tracking-normal",
  code: "text-sm font-mono leading-relaxed tracking-normal",
  blockquote: "text-lg font-normal leading-relaxed tracking-normal italic",
}

export const typographyStyles: Record<string, TypographyStyle> = {
  default: {
    default: "text-gray-900",
    brand: "text-brand",
    primary: "text-primary",
    secondary: "text-gray-600",
    muted: "text-gray-500",
    success: "text-green-600",
    warning: "text-yellow-600",
    danger: "text-red-600",
    info: "text-blue-600",
  },
  dark: {
    default: "text-white",
    brand: "text-brand",
    primary: "text-primary",
    secondary: "text-gray-300",
    muted: "text-gray-400",
    success: "text-green-400",
    warning: "text-yellow-400",
    danger: "text-red-400",
    info: "text-blue-400",
  },
}

export const typographySizes: Record<SizeToken, TypographySize> = {
  xs: {
    fontSize: "12px",
    lineHeight: "16px",
    fontWeight: "400",
    letterSpacing: "0.025em",
  },
  sm: {
    fontSize: "14px",
    lineHeight: "20px",
    fontWeight: "400",
    letterSpacing: "0.025em",
  },
  md: {
    fontSize: "16px",
    lineHeight: "24px",
    fontWeight: "400",
    letterSpacing: "0em",
  },
  lg: {
    fontSize: "18px",
    lineHeight: "28px",
    fontWeight: "400",
    letterSpacing: "-0.025em",
  },
  xl: {
    fontSize: "20px",
    lineHeight: "28px",
    fontWeight: "400",
    letterSpacing: "-0.025em",
  },
}

/**
 * Получает стили типографики на основе варианта, стиля и размера
 * @param variant - вариант типографики
 * @param style - стиль типографики
 * @param size - размер типографики
 * @returns объект со стилями
 */
export function getTypographyStyles(
  variant: keyof TypographyVariant = "body",
  style: keyof TypographyStyle = "default",
  size: SizeToken = "md"
) {
  const variantClass = typographyVariants[variant]
  const styleClass = typographyStyles.default[style]
  const sizeStyles = typographySizes[size]

  return {
    className: `${variantClass} ${styleClass}`,
    style: {
      fontSize: sizeStyles.fontSize,
      lineHeight: sizeStyles.lineHeight,
      fontWeight: sizeStyles.fontWeight,
      letterSpacing: sizeStyles.letterSpacing,
    },
  }
}

/**
 * Создает классы для типографики с дополнительными эффектами
 * @param variant - вариант типографики
 * @param style - стиль типографики
 * @param size - размер типографики
 * @param truncate - обрезать ли текст
 * @param ellipsis - добавлять ли многоточие
 * @returns строку с классами
 */
export function createTypographyClasses(
  variant: keyof TypographyVariant = "body",
  style: keyof TypographyStyle = "default",
  size: SizeToken = "md",
  truncate: boolean = false,
  ellipsis: boolean = false
): string {
  const baseClasses = getTypographyStyles(variant, style, size).className
  const truncateClasses = truncate ? "truncate" : ""
  const ellipsisClasses = ellipsis ? "overflow-hidden text-ellipsis whitespace-nowrap" : ""

  return `${baseClasses} ${truncateClasses} ${ellipsisClasses}`.trim()
}

/**
 * Создает стили для заголовков
 * @param level - уровень заголовка (1-6)
 * @param style - стиль типографики
 * @returns объект со стилями
 */
export function getHeadingStyles(
  level: 1 | 2 | 3 | 4 | 5 | 6,
  style: keyof TypographyStyle = "default"
) {
  const headingVariants = {
    1: "h1",
    2: "h2", 
    3: "h3",
    4: "h4",
    5: "h5",
    6: "h6",
  } as const

  const variant = headingVariants[level]
  const size = level <= 2 ? "xl" : level <= 4 ? "lg" : "md"

  return getTypographyStyles(variant, style, size)
}

/**
 * Создает стили для параграфов
 * @param style - стиль типографики
 * @param size - размер типографики
 * @returns объект со стилями
 */
export function getParagraphStyles(
  style: keyof TypographyStyle = "default",
  size: SizeToken = "md"
) {
  return getTypographyStyles("body", style, size)
}

/**
 * Создает стили для кода
 * @param style - стиль типографики
 * @param size - размер типографики
 * @param inline - инлайн ли код
 * @returns объект со стилями
 */
export function getCodeStyles(
  style: keyof TypographyStyle = "default",
  size: SizeToken = "md",
  inline: boolean = false
) {
  const baseStyles = getTypographyStyles("code", style, size)
  
  if (inline) {
    return {
      ...baseStyles,
      className: `${baseStyles.className} bg-gray-100 px-1 py-0.5 rounded text-sm`,
    }
  }

  return {
    ...baseStyles,
    className: `${baseStyles.className} bg-gray-100 p-4 rounded-lg block`,
  }
}

/**
 * Создает стили для цитат
 * @param style - стиль типографики
 * @param size - размер типографики
 * @returns объект со стилями
 */
export function getBlockquoteStyles(
  style: keyof TypographyStyle = "default",
  size: SizeToken = "md"
) {
  const baseStyles = getTypographyStyles("blockquote", style, size)
  
  return {
    ...baseStyles,
    className: `${baseStyles.className} border-l-4 border-gray-300 pl-4 italic`,
  }
}

/**
 * Создает стили для ссылок
 * @param style - стиль типографики
 * @param underline - подчеркивать ли ссылку
 * @returns объект со стилями
 */
export function getLinkStyles(
  style: keyof TypographyStyle = "default",
  underline: boolean = true
) {
  const baseClasses = typographyStyles.default[style]
  const linkClasses = underline 
    ? "underline hover:no-underline transition-all duration-200" 
    : "hover:underline transition-all duration-200"

  return {
    className: `${baseClasses} ${linkClasses} cursor-pointer`,
  }
}

/**
 * Создает стили для списков
 * @param style - стиль типографики
 * @param size - размер типографики
 * @param ordered - нумерованный ли список
 * @returns объект со стилями
 */
export function getListStyles(
  style: keyof TypographyStyle = "default",
  size: SizeToken = "md",
  ordered: boolean = false
) {
  const baseStyles = getTypographyStyles("body", style, size)
  const listClasses = ordered 
    ? "list-decimal list-inside space-y-1" 
    : "list-disc list-inside space-y-1"

  return {
    ...baseStyles,
    className: `${baseStyles.className} ${listClasses}`,
  }
}

/**
 * Создает стили для выделенного текста
 * @param style - стиль типографики
 * @param highlight - цвет выделения
 * @returns объект со стилями
 */
export function getHighlightStyles(
  style: keyof TypographyStyle = "default",
  highlight: "yellow" | "green" | "blue" | "pink" = "yellow"
) {
  const baseClasses = typographyStyles.default[style]
  const highlightClasses = {
    yellow: "bg-yellow-200",
    green: "bg-green-200", 
    blue: "bg-blue-200",
    pink: "bg-pink-200",
  }

  return {
    className: `${baseClasses} ${highlightClasses[highlight]} px-1 rounded`,
  }
} 