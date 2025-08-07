"use client"

import React from "react"
import { cn } from "../lib/utils"
import { tokens, type SizeToken } from "../lib/design-tokens"
import { useComponentStates } from "../lib/with-states"
import {
  getAccordionStyles,
  createAccordionClasses,
  getAccordionContainerStyles,
  getAccordionPanelStyles,
  getAccordionIconStyles,
  getAccordionBadgeStyles,
  useAccordionState,
  type AccordionItem,
  type AccordionVariant,
  type AccordionStyle,
} from "../lib/accordion-utils"

interface CustomAccordionProps {
  items?: AccordionItem[]
  variant?: keyof AccordionVariant
  style?: keyof AccordionStyle
  size?: SizeToken
  multiple?: boolean
  defaultOpenItems?: string[]
  controlled?: boolean
  openItems?: string[]
  onItemToggle?: (itemId: string, isOpen: boolean) => void
  className?: string
  containerClassName?: string
  itemClassName?: string
  headerClassName?: string
  panelClassName?: string
  children?: React.ReactNode
}

interface CustomAccordionItemProps {
  id: string
  title: string
  content: React.ReactNode
  icon?: React.ReactNode
  disabled?: boolean
  badge?: string | number
}

// CustomAccordionItem component for compound API
export function CustomAccordionItem({ id, title, content, icon, disabled, badge }: CustomAccordionItemProps) {
  // This component is used for compound API, the actual rendering is handled by CustomAccordion
  return null
}

export default function CustomAccordion({
  items: propItems,
  variant = "default",
  style = "bordered",
  size = "md",
  multiple = false,
  defaultOpenItems = [],
  controlled = false,
  openItems: externalOpenItems,
  onItemToggle,
  className,
  containerClassName,
  itemClassName,
  headerClassName,
  panelClassName,
  children,
}: CustomAccordionProps) {
  // Handle compound component API
  const [compoundItems, setCompoundItems] = React.useState<AccordionItem[]>([])
  
  React.useEffect(() => {
    if (children) {
      const items: AccordionItem[] = []
      
      React.Children.forEach(children, (child) => {
        if (React.isValidElement(child) && child.type === CustomAccordionItem) {
          const { id, title, content, icon, disabled, badge } = child.props
          items.push({
            id,
            title,
            content,
            icon,
            disabled,
            badge,
          })
        }
      })
      
      setCompoundItems(items)
    }
  }, [children])

  // Use compound items if no prop items provided
  const items = propItems || compoundItems
  
  // Управление состоянием аккордеона
  const [internalState, internalActions] = useAccordionState(items, defaultOpenItems, multiple)
  
  const state = controlled ? { openItems: externalOpenItems || [], items } : internalState
  const actions = controlled ? {
    toggleItem: (id: string) => {
      const isOpen = externalOpenItems?.includes(id) || false
      onItemToggle?.(id, !isOpen)
    },
    openItem: () => {},
    closeItem: () => {},
    openAll: () => {},
    closeAll: () => {},
    addItem: () => {},
    removeItem: () => {},
    updateItem: () => {},
  } : internalActions

  // Получаем стили
  const containerStyles = getAccordionContainerStyles(style, multiple)

  // Обработчик клика по элементу
  const handleItemClick = (itemId: string, disabled?: boolean) => {
    if (disabled) return
    actions.toggleItem(itemId)
  }

  return (
    <div className={cn("w-full", className)}>
      {/* Контейнер элементов */}
      <div className={cn(containerStyles.className, containerClassName)}>
        {state.items.map((item) => {
          const isOpen = state.openItems.includes(item.id)
          const accordionStyles = getAccordionStyles(variant, style, size, isOpen)
          const accordionClasses = createAccordionClasses(variant, style, isOpen, item.disabled)
          const iconStyles = getAccordionIconStyles(isOpen, size)
          const badgeStyles = item.badge ? getAccordionBadgeStyles(size) : null
          const panelStyles = getAccordionPanelStyles(style, size)

          return (
            <div key={item.id} className={cn("w-full", itemClassName)}>
              {/* Заголовок элемента */}
              <button
                className={cn(
                  accordionClasses,
                  "w-full flex items-center justify-between text-left focus:outline-none focus:ring-1 focus:ring-brand focus:ring-inset",
                  headerClassName
                )}
                style={accordionStyles.style}
                onClick={() => handleItemClick(item.id, item.disabled)}
                disabled={item.disabled}
                aria-expanded={isOpen}
                aria-controls={`accordion-panel-${item.id}`}
              >
                <div className="flex items-center gap-2 flex-1">
                  {/* Иконка */}
                  {item.icon && (
                    <span 
                      className="flex-shrink-0"
                      style={{ fontSize: accordionStyles.iconSize }}
                    >
                      {item.icon}
                    </span>
                  )}

                  {/* Заголовок */}
                  <span className="font-medium">{item.title}</span>

                  {/* Бейдж */}
                  {item.badge && (
                    <span className={cn("flex-shrink-0", badgeStyles?.className)}>
                      {item.badge}
                    </span>
                  )}
                </div>

                {/* Иконка стрелки */}
                <svg
                  className={cn("flex-shrink-0 text-gray-500", iconStyles.className)}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {/* Панель контента */}
              {isOpen && (
                <div
                  className={cn(panelStyles.className, panelClassName)}
                  id={`accordion-panel-${item.id}`}
                  role="region"
                  aria-labelledby={`accordion-header-${item.id}`}
                >
                  {item.content}
                </div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
} 