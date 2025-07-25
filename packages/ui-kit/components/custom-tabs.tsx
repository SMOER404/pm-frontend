"use client"

import React from "react"

import { cn } from "../lib/utils"
import { useState } from "react"
import type { ReactNode } from "react"

interface CustomTabProps {
  label: string
  value: string
  disabled?: boolean
  icon?: ReactNode
}

interface CustomTabsProps {
  children: ReactNode
  defaultValue?: string
  value?: string
  onChange?: (value: string) => void
  variant?: "default" | "outlined" | "pills"
  orientation?: "horizontal" | "vertical"
  borderColor?: string
  backgroundColor?: string
  className?: string
}

interface CustomTabPanelProps {
  children: ReactNode
  value: string
}

export function CustomTab({ label, value, disabled = false, icon }: CustomTabProps) {
  // Этот компонент используется только для типизации
  return null
}

export function CustomTabPanel({ children, value }: CustomTabPanelProps) {
  return <div>{children}</div>
}

export default function CustomTabs({
  children,
  defaultValue,
  value: controlledValue,
  onChange,
  variant = "default",
  orientation = "horizontal",
  borderColor,
  backgroundColor,
  className,
}: CustomTabsProps) {
  const [internalValue, setInternalValue] = useState(defaultValue || "")

  const currentValue = controlledValue !== undefined ? controlledValue : internalValue
  const setValue = onChange || setInternalValue

  // Извлекаем табы и панели из children
  const tabs: CustomTabProps[] = []
  const panels: React.ReactElement[] = []

  React.Children.forEach(children, (child) => {
    if (React.isValidElement(child)) {
      if (child.type === CustomTab) {
        tabs.push(child.props as CustomTabProps)
      } else if (child.type === CustomTabPanel) {
        panels.push(child)
      }
    }
  })

  // clipPath для скосов (1px)
  const clipPath = "[clip-path:polygon(8px_0px,100%_0px,100%_calc(100%-8px),calc(100%-8px)_100%,0px_100%,0px_8px)]"

  const customBorderStyles = {
    ...(borderColor && { backgroundColor: borderColor }),
  }

  const customContentStyles = {
    ...(backgroundColor && { backgroundColor: backgroundColor }),
  }

  return (
    <div className={cn("space-y-4", className)}>
      {/* Tab List */}
      <div
        className={cn(
          "flex",
          orientation === "horizontal" ? "flex-row border-b border-gray-200" : "flex-col space-y-1",
          variant === "pills" && "bg-gray-100 p-1 rounded-lg",
        )}
      >
        {tabs.map((tab) => (
          <button
            key={tab.value}
            className={cn(
              "flex items-center gap-2 px-4 py-2 text-sm font-medium transition-all duration-200",
              tab.disabled && "opacity-50 cursor-not-allowed",
              variant === "default" && [
                orientation === "horizontal" ? "border-b-2" : "border-r-2",
                currentValue === tab.value
                  ? "border-[#AFEB0F] text-[#AFEB0F]"
                  : "border-transparent text-[#292D30] hover:text-[#AFEB0F]",
              ],
              variant === "outlined" && [
                "border border-gray-300 rounded",
                currentValue === tab.value
                  ? "bg-[#AFEB0F] text-[#292D30] border-[#AFEB0F]"
                  : "bg-white text-[#292D30] hover:border-[#AFEB0F]",
              ],
              variant === "pills" && [
                "rounded-md",
                currentValue === tab.value ? "bg-white text-[#292D30] shadow-sm" : "text-gray-600 hover:text-[#292D30]",
              ],
            )}
            onClick={() => !tab.disabled && setValue(tab.value)}
            disabled={tab.disabled}
          >
            {tab.icon && <span>{tab.icon}</span>}
            <span>{tab.label}</span>
          </button>
        ))}
      </div>

      {/* Tab Panels */}
      <div>
        {panels.map((panel) => {
          if (panel.props.value === currentValue) {
            return <div key={panel.props.value}>{panel.props.children}</div>
          }
          return null
        })}
      </div>
    </div>
  )
}
