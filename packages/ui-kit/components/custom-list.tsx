"use client"

import type React from "react"
import { cn } from "../lib/utils"

interface CustomListItemProps {
  children: React.ReactNode
  icon?: React.ReactNode
  secondaryText?: string
  action?: React.ReactNode
  onClick?: () => void
  disabled?: boolean
  selected?: boolean
  divider?: boolean
}

interface CustomListProps {
  children: React.ReactNode
  variant?: "default" | "outlined"
  dense?: boolean
  borderColor?: string
  backgroundColor?: string
  className?: string
}

export function CustomListItem({
  children,
  icon,
  secondaryText,
  action,
  onClick,
  disabled = false,
  selected = false,
  divider = false,
}: CustomListItemProps) {
  const Component = onClick ? "button" : "div"

  return (
    <>
      <Component
        className={cn(
          "w-full flex items-center gap-3 px-4 py-3 text-left transition-colors duration-200",
          onClick && "hover:bg-gray-50 cursor-pointer",
          selected && "bg-[#AFEB0F] bg-opacity-10",
          disabled && "opacity-50 cursor-not-allowed",
        )}
        onClick={!disabled ? onClick : undefined}
        disabled={disabled}
      >
        {/* Icon */}
        {icon && <div className="flex-shrink-0 text-[#292D30]">{icon}</div>}

        {/* Content */}
        <div className="flex-1 min-w-0">
          <div className="text-sm font-medium text-[#292D30] truncate">{children}</div>
          {secondaryText && <div className="text-xs text-gray-500 truncate">{secondaryText}</div>}
        </div>

        {/* Action */}
        {action && <div className="flex-shrink-0">{action}</div>}
      </Component>

      {/* Divider */}
      {divider && <div className="border-b border-gray-200" />}
    </>
  )
}

export default function CustomList({
  children,
  variant = "default",
  dense = false,
  borderColor,
  backgroundColor,
  className,
}: CustomListProps) {
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
        <div
          className={cn("relative bg-white overflow-hidden", contentClipPath, dense && "[&>*]:py-2")}
          style={customContentStyles}
        >
          {children}
        </div>
      </div>
    )
  }

  return (
    <div className={cn("bg-white overflow-hidden", dense && "[&>*]:py-2", className)} style={customContentStyles}>
      {children}
    </div>
  )
}
