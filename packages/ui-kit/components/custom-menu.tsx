"use client"

import type React from "react"
import { cn } from "../lib/utils"
import { useState, useRef, useEffect } from "react"

interface CustomMenuItemProps {
  children: React.ReactNode
  onClick?: () => void
  disabled?: boolean
  icon?: React.ReactNode
  divider?: boolean
}

interface CustomMenuProps {
  children: React.ReactNode
  trigger: React.ReactNode
  open?: boolean
  onOpenChange?: (open: boolean) => void
  placement?: "bottom-start" | "bottom-end" | "top-start" | "top-end"
  borderColor?: string
  backgroundColor?: string
}

export function CustomMenuItem({ children, onClick, disabled = false, icon, divider = false }: CustomMenuItemProps) {
  return (
    <>
      <button
        className={cn(
          "w-full flex items-center gap-3 px-4 py-2 text-left text-sm transition-colors duration-200",
          disabled ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-50 cursor-pointer",
        )}
        onClick={!disabled ? onClick : undefined}
        disabled={disabled}
      >
        {icon && <span className="flex-shrink-0 text-[#292D30]">{icon}</span>}
        <span className="text-[#292D30]">{children}</span>
      </button>
      {divider && <div className="border-b border-gray-200 my-1" />}
    </>
  )
}

export default function CustomMenu({
  children,
  trigger,
  open: controlledOpen,
  onOpenChange,
  placement = "bottom-start",
  borderColor,
  backgroundColor,
}: CustomMenuProps) {
  const [internalOpen, setInternalOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)
  const triggerRef = useRef<HTMLDivElement>(null)

  const isOpen = controlledOpen !== undefined ? controlledOpen : internalOpen
  const setIsOpen = onOpenChange || setInternalOpen

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

  // Позиционирование
  const placements = {
    "bottom-start": "top-full left-0 mt-1",
    "bottom-end": "top-full right-0 mt-1",
    "top-start": "bottom-full left-0 mb-1",
    "top-end": "bottom-full right-0 mb-1",
  }

  // Закрытие при клике вне меню
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isOpen &&
        menuRef.current &&
        triggerRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        !triggerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [isOpen, setIsOpen])

  return (
    <div className="relative inline-block">
      {/* Trigger */}
      <div ref={triggerRef} onClick={() => setIsOpen(!isOpen)} className="cursor-pointer">
        {trigger}
      </div>

      {/* Menu */}
      {isOpen && (
        <div ref={menuRef} className={cn("absolute z-50 min-w-[200px]", placements[placement])}>
          {/* Border */}
          <div className={cn("absolute inset-0 bg-[#292D30]", clipPath)} style={customBorderStyles} />

          {/* Content */}
          <div
            className={cn("relative bg-white py-2 shadow-lg max-h-60 overflow-auto", contentClipPath)}
            style={customContentStyles}
          >
            {children}
          </div>
        </div>
      )}
    </div>
  )
}
