"use client"

// Утилиты для работы с Tabs компонентами
import { useState, useCallback } from "react"
import { tokens, type SizeToken } from "./design-tokens"

export interface TabItem {
  id: string
  label: string
  content: React.ReactNode
  icon?: React.ReactNode
  disabled?: boolean
  badge?: string | number
}

export interface TabsVariant {
  default: string
  brand: string
  primary: string
  secondary: string
}

export interface TabsStyle {
  line: string
  card: string
  pill: string
  underline: string
}

export interface TabsSize {
  padding: string
  fontSize: string
  iconSize: string
  gap: string
}

export const tabsVariants: Record<string, TabsVariant> = {
  default: {
    default: "text-gray-600 border-gray-200",
    brand: "text-brand border-brand",
    primary: "text-primary border-primary",
    secondary: "text-gray-600 border-gray-200",
  },
  active: {
    default: "text-gray-900 border-gray-900 bg-gray-50",
    brand: "text-brand border-brand bg-brand/5",
    primary: "text-primary border-primary bg-primary/5",
    secondary: "text-gray-900 border-gray-900 bg-gray-50",
  },
  hover: {
    default: "hover:text-gray-800 hover:border-gray-300",
    brand: "hover:text-brand/80 hover:border-brand/80",
    primary: "hover:text-primary/80 hover:border-primary/80",
    secondary: "hover:text-gray-800 hover:border-gray-300",
  },
}

export const tabsStyles: Record<string, TabsStyle> = {
  line: {
    line: "border-b-2 border-transparent",
    card: "border border-transparent rounded-t-lg",
    pill: "border border-transparent rounded-full",
    underline: "border-b-2 border-transparent",
  },
  active: {
    line: "border-b-2",
    card: "border border-gray-200 border-b-0 bg-white",
    pill: "border border-gray-200 bg-white shadow-sm",
    underline: "border-b-2",
  },
}

export const tabsSizes: Record<SizeToken, TabsSize> = {
  xs: {
    padding: "6px 12px",
    fontSize: "12px",
    iconSize: "12px",
    gap: "4px",
  },
  sm: {
    padding: "8px 16px",
    fontSize: "14px",
    iconSize: "14px",
    gap: "6px",
  },
  md: {
    padding: "12px 20px",
    fontSize: "16px",
    iconSize: "16px",
    gap: "8px",
  },
  lg: {
    padding: "16px 24px",
    fontSize: "18px",
    iconSize: "18px",
    gap: "10px",
  },
  xl: {
    padding: "20px 28px",
    fontSize: "20px",
    iconSize: "20px",
    gap: "12px",
  },
}

export interface TabsState {
  activeTab: string
  tabs: TabItem[]
}

export interface TabsActions {
  setActiveTab: (id: string) => void
  addTab: (tab: TabItem) => void
  removeTab: (id: string) => void
  updateTab: (id: string, updates: Partial<TabItem>) => void
}

/**
 * Получает стили таба на основе варианта, стиля и размера
 * @param variant - вариант таба
 * @param style - стиль таба
 * @param size - размер таба
 * @param isActive - активен ли таб
 * @returns объект со стилями
 */
export function getTabStyles(
  variant: keyof TabsVariant = "default",
  style: keyof TabsStyle = "line",
  size: SizeToken = "md",
  isActive: boolean = false
) {
  const variantStyles = isActive ? tabsVariants.active : tabsVariants.default
  const styleClasses = isActive ? tabsStyles.active : tabsStyles.line
  const sizeStyles = tabsSizes[size]

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
 * Создает классы для таба с ховер-эффектами
 * @param variant - вариант таба
 * @param style - стиль таба
 * @param isActive - активен ли таб
 * @param disabled - отключен ли таб
 * @returns строку с классами
 */
export function createTabClasses(
  variant: keyof TabsVariant = "default",
  style: keyof TabsStyle = "line",
  isActive: boolean = false,
  disabled: boolean = false
): string {
  const baseClasses = getTabStyles(variant, style, "md", isActive).className
  const hoverClasses = tabsVariants.hover[variant]
  const disabledClasses = disabled ? "opacity-50 cursor-not-allowed" : ""
  const interactiveClasses = !disabled ? "cursor-pointer transition-all duration-200" : ""

  return `${baseClasses} ${hoverClasses} ${disabledClasses} ${interactiveClasses}`
}

/**
 * Создает стили для контейнера табов
 * @param style - стиль табов
 * @param orientation - ориентация табов
 * @returns объект со стилями
 */
export function getTabsContainerStyles(
  style: keyof TabsStyle = "line",
  orientation: "horizontal" | "vertical" = "horizontal"
) {
  const containerClasses = {
    line: "border-b border-gray-200",
    card: "bg-gray-50 p-1 rounded-lg",
    pill: "bg-gray-100 p-1 rounded-full",
    underline: "border-b border-gray-200",
  }

  const layoutClasses = {
    horizontal: "flex",
    vertical: "flex flex-col",
  }

  return {
    className: `${containerClasses[style]} ${layoutClasses[orientation]}`,
  }
}

/**
 * Создает стили для панели контента
 * @param style - стиль табов
 * @param orientation - ориентация табов
 * @returns объект со стилями
 */
export function getTabPanelStyles(
  style: keyof TabsStyle = "line",
  orientation: "horizontal" | "vertical" = "horizontal"
) {
  const panelClasses = {
    line: "mt-4",
    card: "mt-4 p-4 bg-white border border-gray-200 rounded-b-lg",
    pill: "mt-4",
    underline: "mt-4",
  }

  return {
    className: panelClasses[style],
  }
}

/**
 * Хук для управления состоянием табов
 * @param initialTabs - начальные табы
 * @param defaultActiveTab - активный таб по умолчанию
 * @returns объект с состоянием и действиями
 */
export function useTabsState(
  initialTabs: TabItem[] = [],
  defaultActiveTab?: string
): [TabsState, TabsActions] {
  const [state, setState] = useState<TabsState>({
    activeTab: defaultActiveTab || (initialTabs[0]?.id || ""),
    tabs: initialTabs,
  })

  const actions: TabsActions = {
    setActiveTab: useCallback((id: string) => {
      setState(prev => ({ ...prev, activeTab: id }))
    }, []),

    addTab: useCallback((tab: TabItem) => {
      setState(prev => ({
        ...prev,
        tabs: [...prev.tabs, tab],
        activeTab: prev.activeTab || tab.id,
      }))
    }, []),

    removeTab: useCallback((id: string) => {
      setState(prev => {
        const newTabs = prev.tabs.filter(tab => tab.id !== id)
        const newActiveTab = prev.activeTab === id 
          ? (newTabs[0]?.id || "")
          : prev.activeTab

        return {
          tabs: newTabs,
          activeTab: newActiveTab,
        }
      })
    }, []),

    updateTab: useCallback((id: string, updates: Partial<TabItem>) => {
      setState(prev => ({
        ...prev,
        tabs: prev.tabs.map(tab =>
          tab.id === id ? { ...tab, ...updates } : tab
        ),
      }))
    }, []),
  }

  return [state, actions]
}

/**
 * Создает стили для бейджа в табе
 * @param size - размер таба
 * @returns объект со стилями
 */
export function getTabBadgeStyles(size: SizeToken = "md") {
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