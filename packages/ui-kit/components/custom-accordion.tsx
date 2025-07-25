"use client"

import type React from "react"
import { cn } from "../lib/utils"
import { useState } from "react"
import { ChevronDown } from "lucide-react"

interface CustomAccordionItemProps {
  title: string
  children: React.ReactNode
  defaultExpanded?: boolean
  disabled?: boolean
  icon?: React.ReactNode
}

interface CustomAccordionProps {
  children: React.ReactNode
  variant?: "default" | "outlined"
  allowMultiple?: boolean
  borderColor?: string
  backgroundColor?: string
  className?: string
}

export function CustomAccordionItem({
  title,
  children,
  defaultExpanded = false,
  disabled = false,
  icon,
}: CustomAccordionItemProps) {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded)

  return (
    <div className="border-b border-gray-200 last:border-b-0">
      {/* Header */}
      <button
        className={cn(
          "w-full flex items-center justify-between p-4 text-left transition-colors duration-200",
          disabled ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-50 cursor-pointer",
        )}
        onClick={() => !disabled && setIsExpanded(!isExpanded)}
        disabled={disabled}
      >
        <div className="flex items-center gap-3">
          {icon && <span className="flex-shrink-0 text-[#292D30]">{icon}</span>}
          <span className="font-medium text-[#292D30]">{title}</span>
        </div>
        <ChevronDown className={cn("w-5 h-5 transition-transform duration-200", isExpanded && "rotate-180")} />
      </button>

      {/* Content */}
      {isExpanded && (
        <div className="px-4 pb-4">
          <div className="text-sm text-gray-600">{children}</div>
        </div>
      )}
    </div>
  )
}

export default function CustomAccordion({
  children,
  variant = "default",
  allowMultiple = false,
  borderColor,
  backgroundColor,
  className,
}: CustomAccordionProps) {
  // clipPath для скосов (1px)
  const clipPath = "[clip-path:polygon(8px_0px,100%_0px,100%_calc(100%-8px),calc(100%-8px)_100%,0px_100%,0px_8px)]"
  const contentClipPath =
    "[clip-path:polygon(7px_1px,calc(100%-1px)_1px,calc(100%-1px)_calc(100%-7px),calc(100%-7px)_calc(100%-1px),1px_calc(100%-1px),1px_7px)]"

  const customBorderStyles = {
    ...(borderColor && { backgroundColor: borderColor }),
  }

  const customContentStyles = {
    ...(backgroundColor && { backgroundColor: backgroundColor }),
  }

  if (variant === "outlined") {
    return (
      <div className={cn("relative", className)}>
        {/* Border */}
        <div className={cn("absolute inset-0 bg-[#292D30]", clipPath)} style={customBorderStyles} />

        {/* Content */}
        <div className={cn("relative bg-white overflow-hidden", contentClipPath)} style={customContentStyles}>
          {children}
        </div>
      </div>
    )
  }

  return (
    <div className={cn("bg-white overflow-hidden", className)} style={customContentStyles}>
      {children}
    </div>
  )
}
