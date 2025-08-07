"use client"

import React from "react"
import { cn } from "../lib/utils"
import { tokens, type SizeToken } from "../lib/design-tokens"
import { createChamferStyles, getChamferSizeFromComponentSize } from "../lib/chamfer-utils"
import {
  getTabStyles,
  createTabClasses,
  getTabsContainerStyles,
  getTabPanelStyles,
  getTabBadgeStyles,
  useTabsState,
  type TabItem,
  type TabsVariant,
  type TabsStyle,
} from "../lib/tabs-utils"

interface CustomTabsProps {
  tabs?: TabItem[]
  variant?: keyof TabsVariant
  style?: keyof TabsStyle
  size?: SizeToken
  orientation?: "horizontal" | "vertical"
  defaultActiveTab?: string
  defaultValue?: string
  controlled?: boolean
  activeTab?: string
  onTabChange?: (tabId: string) => void
  className?: string
  tabsClassName?: string
  panelClassName?: string
  tabClassName?: string
  children?: React.ReactNode
}

interface CustomTabProps {
  label: string
  value: string
  icon?: React.ReactNode
  disabled?: boolean
  badge?: string | number
  children?: React.ReactNode
}

interface CustomTabPanelProps {
  value: string
  children?: React.ReactNode
  className?: string
}

// CustomTab component for compound API
export function CustomTab({ label, value, icon, disabled, badge, children }: CustomTabProps) {
  // This component is used for compound API, the actual rendering is handled by CustomTabs
  return null
}

// CustomTabPanel component for compound API
export function CustomTabPanel({ value, children, className }: CustomTabPanelProps) {
  // This component is used for compound API, the actual rendering is handled by CustomTabs
  return null
}

export default function CustomTabs({
  tabs: propTabs,
  variant = "default",
  style = "line",
  size = "md",
  orientation = "horizontal",
  defaultActiveTab,
  defaultValue,
  controlled = false,
  activeTab: externalActiveTab,
  onTabChange,
  className,
  tabsClassName,
  panelClassName,
  tabClassName,
  children,
}: CustomTabsProps) {
  // Handle compound component API
  const [compoundTabs, setCompoundTabs] = React.useState<TabItem[]>([])
  const [compoundPanels, setCompoundPanels] = React.useState<Record<string, React.ReactNode>>({})
  
  React.useEffect(() => {
    if (children) {
      const tabs: TabItem[] = []
      const panels: Record<string, React.ReactNode> = {}
      
      React.Children.forEach(children, (child) => {
        if (React.isValidElement(child)) {
          if (child.type === CustomTab) {
            const { label, value, icon, disabled, badge } = child.props
            tabs.push({
              id: value,
              label,
              content: null, // Will be set from panels
              icon,
              disabled,
              badge,
            })
          } else if (child.type === CustomTabPanel) {
            const { value, children: panelChildren } = child.props
            panels[value] = panelChildren
          }
        }
      })
      
      setCompoundTabs(tabs)
      setCompoundPanels(panels)
    }
  }, [children])

  // Use compound tabs if no prop tabs provided
  const tabs = propTabs || compoundTabs
  const defaultTab = defaultValue || defaultActiveTab
  
  // Update tab content from panels
  const tabsWithContent = tabs.map(tab => ({
    ...tab,
    content: compoundPanels[tab.id] || tab.content
  }))

  // Управление состоянием табов
  const [internalState, internalActions] = useTabsState(tabsWithContent, defaultTab)
  
  const state = controlled ? { activeTab: externalActiveTab || "", tabs: tabsWithContent } : internalState
  const actions = controlled ? { setActiveTab: onTabChange || (() => {}) } : internalActions

  // Получаем стили
  const containerStyles = getTabsContainerStyles(style, orientation)
  const panelStyles = getTabPanelStyles(style, orientation)

  // Получаем размеры скосов
  const chamferSize = getChamferSizeFromComponentSize(size)
  
  // Создаем стили для скосов
  const chamferStyles = createChamferStyles(
    chamferSize,
    tokens.colors.primary[300]
  )

  // Обработчик клика по табу
  const handleTabClick = (tabId: string, disabled?: boolean) => {
    if (disabled) return
    if (controlled && onTabChange) {
      onTabChange(tabId)
    } else {
      actions.setActiveTab(tabId)
    }
  }

  // Находим активный таб
  const activeTab = state.tabs.find(tab => tab.id === state.activeTab)
  const activeTabContent = activeTab?.content

  return (
    <div className={cn("w-full", className)}>
      {/* Контейнер табов */}
      <div className={cn(containerStyles.className, "relative", tabsClassName)}>
        {/* Внешняя рамка со скосами */}
        <div
          className="absolute inset-0 transition-all duration-200"
          style={{
            ...chamferStyles.outer,
            backgroundColor: tokens.colors.primary[300],
          }}
        />

        {/* Внутренний контент */}
        <div
          className="relative"
          style={chamferStyles.inner}
        >
          {state.tabs.map((tab) => {
            const isActive = tab.id === state.activeTab
            const tabStyles = getTabStyles(variant, style, size, isActive)
            const tabClasses = createTabClasses(variant, style, isActive, tab.disabled)
            const badgeStyles = tab.badge ? getTabBadgeStyles(size) : null

            return (
              <button
                key={tab.id}
                className={cn(
                  tabClasses,
                  "flex items-center justify-center gap-2 font-medium focus:outline-none focus:ring-1 focus:ring-brand focus:ring-inset",
                  tabClassName
                )}
                style={tabStyles.style}
                onClick={() => handleTabClick(tab.id, tab.disabled)}
                disabled={tab.disabled}
                role="tab"
                aria-selected={isActive}
                aria-controls={`panel-${tab.id}`}
              >
                {/* Иконка */}
                {tab.icon && (
                  <span 
                    className="flex-shrink-0"
                    style={{ fontSize: tabStyles.iconSize }}
                  >
                    {tab.icon}
                  </span>
                )}

                {/* Лейбл */}
                <span>{tab.label}</span>

                {/* Бейдж */}
                {tab.badge && (
                  <span className={cn("flex-shrink-0", badgeStyles?.className)}>
                    {tab.badge}
                  </span>
                )}
              </button>
            )
          })}
        </div>
      </div>

      {/* Панель контента */}
      {activeTabContent && (
        <div
          className={cn(panelStyles.className, panelClassName)}
          role="tabpanel"
          id={`panel-${state.activeTab}`}
          aria-labelledby={`tab-${state.activeTab}`}
        >
          {activeTabContent}
        </div>
      )}
    </div>
  )
} 