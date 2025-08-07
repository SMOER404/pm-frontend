"use client"

// Утилиты для работы с Accordion компонентами
import { useState, useCallback } from "react"
import { tokens, type SizeToken } from "./design-tokens"

export interface AccordionItem {
  id: string
  title: string
  content: React.ReactNode
  icon?: React.ReactNode
  disabled?: boolean
  badge?: string | number
}

export interface AccordionVariant {
  default: string
  brand: string
  primary: string
  secondary: string
}

export interface AccordionStyle {
  bordered: string
  card: string
  minimal: string
  elevated: string
}

export interface AccordionSize {
  padding: string
  fontSize: string
  iconSize: string
  gap: string
}

export const accordionVariants: Record<string, AccordionVariant> = {
  default: {
    default: "text-gray-700 border-gray-200 bg-white",
    brand: "text-gray-700 border-brand/20 bg-white",
    primary: "text-gray-700 border-primary/20 bg-white",
    secondary: "text-gray-700 border-gray-200 bg-white",
  },
  active: {
    default: "text-gray-900 border-gray-300 bg-gray-50",
    brand: "text-brand border-brand bg-brand/5",
    primary: "text-primary border-primary bg-primary/5",
    secondary: "text-gray-900 border-gray-300 bg-gray-50",
  },
  hover: {
    default: "hover:text-gray-800 hover:border-gray-300 hover:bg-gray-50",
    brand: "hover:text-brand hover:border-brand/30 hover:bg-brand/5",
    primary: "hover:text-primary hover:border-primary/30 hover:bg-primary/5",
    secondary: "hover:text-gray-800 hover:border-gray-300 hover:bg-gray-50",
  },
}

export const accordionStyles: Record<string, AccordionStyle> = {
  bordered: {
    bordered: "border border-gray-200 rounded-lg",
    card: "border border-gray-200 rounded-lg shadow-sm",
    minimal: "border-b border-gray-200",
    elevated: "border border-gray-200 rounded-lg shadow-md",
  },
  active: {
    bordered: "border-gray-300",
    card: "border-gray-300 shadow-md",
    minimal: "border-gray-300",
    elevated: "border-gray-300 shadow-lg",
  },
}

export const accordionSizes: Record<SizeToken, AccordionSize> = {
  xs: {
    padding: "8px 12px",
    fontSize: "12px",
    iconSize: "12px",
    gap: "6px",
  },
  sm: {
    padding: "12px 16px",
    fontSize: "14px",
    iconSize: "14px",
    gap: "8px",
  },
  md: {
    padding: "16px 20px",
    fontSize: "16px",
    iconSize: "16px",
    gap: "10px",
  },
  lg: {
    padding: "20px 24px",
    fontSize: "18px",
    iconSize: "18px",
    gap: "12px",
  },
  xl: {
    padding: "24px 28px",
    fontSize: "20px",
    iconSize: "20px",
    gap: "14px",
  },
}

export interface AccordionState {
  openItems: string[]
  items: AccordionItem[]
}

export interface AccordionActions {
  toggleItem: (id: string) => void
  openItem: (id: string) => void
  closeItem: (id: string) => void
  openAll: () => void
  closeAll: () => void
  addItem: (item: AccordionItem) => void
  removeItem: (id: string) => void
  updateItem: (id: string, updates: Partial<AccordionItem>) => void
}

/**
 * Получает стили аккордеона на основе варианта, стиля и размера
 * @param variant - вариант аккордеона
 * @param style - стиль аккордеона
 * @param size - размер аккордеона
 * @param isActive - активен ли элемент
 * @returns объект со стилями
 */
export function getAccordionStyles(
  variant: keyof AccordionVariant = "default",
  style: keyof AccordionStyle = "bordered",
  size: SizeToken = "md",
  isActive: boolean = false
) {
  const variantStyles = isActive ? accordionVariants.active : accordionVariants.default
  const styleClasses = isActive ? accordionStyles.active : accordionStyles.bordered
  const sizeStyles = accordionSizes[size]

  return {
    className: `${variantStyles[variant]} ${styleClasses[style]}`,
    style: {
      padding: sizeStyles.padding,
      fontSize: sizeStyles.fontSize,
      gap: sizeStyles.gap,
    },
    iconSize: sizeStyles.iconSize,
  }
}

/**
 * Создает классы для аккордеона с ховер-эффектами
 * @param variant - вариант аккордеона
 * @param style - стиль аккордеона
 * @param isActive - активен ли элемент
 * @param disabled - отключен ли элемент
 * @returns строку с классами
 */
export function createAccordionClasses(
  variant: keyof AccordionVariant = "default",
  style: keyof AccordionStyle = "bordered",
  isActive: boolean = false,
  disabled: boolean = false
): string {
  const baseClasses = getAccordionStyles(variant, style, "md", isActive).className
  const hoverClasses = accordionVariants.hover[variant]
  const disabledClasses = disabled ? "opacity-50 cursor-not-allowed" : ""
  const interactiveClasses = !disabled ? "cursor-pointer transition-all duration-200" : ""

  return `${baseClasses} ${hoverClasses} ${disabledClasses} ${interactiveClasses}`
}

/**
 * Создает стили для контейнера аккордеона
 * @param style - стиль аккордеона
 * @param multiple - множественное открытие
 * @returns объект со стилями
 */
export function getAccordionContainerStyles(
  style: keyof AccordionStyle = "bordered",
  multiple: boolean = false
) {
  const containerClasses = {
    bordered: "space-y-2",
    card: "space-y-3",
    minimal: "divide-y divide-gray-200",
    elevated: "space-y-4",
  }

  return {
    className: containerClasses[style],
  }
}

/**
 * Создает стили для панели контента
 * @param style - стиль аккордеона
 * @param size - размер аккордеона
 * @returns объект со стилями
 */
export function getAccordionPanelStyles(
  style: keyof AccordionStyle = "bordered",
  size: SizeToken = "md"
) {
  const panelClasses = {
    bordered: "p-4 bg-gray-50 border-t border-gray-200",
    card: "p-4 bg-white border-t border-gray-200",
    minimal: "p-4 bg-gray-50",
    elevated: "p-4 bg-white border-t border-gray-200 shadow-inner",
  }

  const sizePadding = {
    xs: "p-2",
    sm: "p-3",
    md: "p-4",
    lg: "p-5",
    xl: "p-6",
  }

  return {
    className: `${panelClasses[style]} ${sizePadding[size]}`,
  }
}

/**
 * Хук для управления состоянием аккордеона
 * @param initialItems - начальные элементы
 * @param defaultOpenItems - открытые элементы по умолчанию
 * @param multiple - множественное открытие
 * @returns объект с состоянием и действиями
 */
export function useAccordionState(
  initialItems: AccordionItem[] = [],
  defaultOpenItems: string[] = [],
  multiple: boolean = false
): [AccordionState, AccordionActions] {
  const [state, setState] = useState<AccordionState>({
    openItems: defaultOpenItems,
    items: initialItems,
  })

  const actions: AccordionActions = {
    toggleItem: useCallback((id: string) => {
      setState(prev => {
        const isOpen = prev.openItems.includes(id)
        let newOpenItems: string[]

        if (multiple) {
          if (isOpen) {
            newOpenItems = prev.openItems.filter(itemId => itemId !== id)
          } else {
            newOpenItems = [...prev.openItems, id]
          }
        } else {
          newOpenItems = isOpen ? [] : [id]
        }

        return { ...prev, openItems: newOpenItems }
      })
    }, [multiple]),

    openItem: useCallback((id: string) => {
      setState(prev => {
        const isOpen = prev.openItems.includes(id)
        if (isOpen) return prev

        let newOpenItems: string[]
        if (multiple) {
          newOpenItems = [...prev.openItems, id]
        } else {
          newOpenItems = [id]
        }

        return { ...prev, openItems: newOpenItems }
      })
    }, [multiple]),

    closeItem: useCallback((id: string) => {
      setState(prev => ({
        ...prev,
        openItems: prev.openItems.filter(itemId => itemId !== id)
      }))
    }, []),

    openAll: useCallback(() => {
      setState(prev => ({
        ...prev,
        openItems: prev.items.map(item => item.id)
      }))
    }, []),

    closeAll: useCallback(() => {
      setState(prev => ({ ...prev, openItems: [] }))
    }, []),

    addItem: useCallback((item: AccordionItem) => {
      setState(prev => ({
        ...prev,
        items: [...prev.items, item]
      }))
    }, []),

    removeItem: useCallback((id: string) => {
      setState(prev => ({
        items: prev.items.filter(item => item.id !== id),
        openItems: prev.openItems.filter(itemId => itemId !== id)
      }))
    }, []),

    updateItem: useCallback((id: string, updates: Partial<AccordionItem>) => {
      setState(prev => ({
        ...prev,
        items: prev.items.map(item =>
          item.id === id ? { ...item, ...updates } : item
        )
      }))
    }, []),
  }

  return [state, actions]
}

/**
 * Создает стили для иконки стрелки
 * @param isOpen - открыт ли элемент
 * @param size - размер аккордеона
 * @returns объект со стилями
 */
export function getAccordionIconStyles(
  isOpen: boolean = false,
  size: SizeToken = "md"
) {
  const iconSizes = {
    xs: "w-3 h-3",
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-6 h-6",
    xl: "w-7 h-7",
  }

  return {
    className: `${iconSizes[size]} transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`,
  }
}

/**
 * Создает стили для бейджа в аккордеоне
 * @param size - размер аккордеона
 * @returns объект со стилями
 */
export function getAccordionBadgeStyles(size: SizeToken = "md") {
  const badgeSizes = {
    xs: "text-xs px-1.5 py-0.5",
    sm: "text-xs px-2 py-0.5",
    md: "text-sm px-2 py-1",
    lg: "text-sm px-2.5 py-1",
    xl: "text-base px-3 py-1.5",
  }

  return {
    className: `${badgeSizes[size]} bg-gray-200 text-gray-700 rounded-full font-medium`,
  }
} 