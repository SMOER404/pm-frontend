"use client"

import React from "react"
import { cn } from "../lib/utils"

export interface CustomLayoutProps {
  children: React.ReactNode
  header?: React.ReactNode
  footer?: React.ReactNode
  sidebar?: React.ReactNode
  sidebarPosition?: "left" | "right"
  variant?: "default" | "full-width" | "contained"
  className?: string
  mainClassName?: string
  headerClassName?: string
  footerClassName?: string
  sidebarClassName?: string
}

export default function CustomLayout({
  children,
  header,
  footer,
  sidebar,
  sidebarPosition = "left",
  variant = "default",
  className,
  mainClassName,
  headerClassName,
  footerClassName,
  sidebarClassName,
}: CustomLayoutProps) {
  const getVariantClasses = () => {
    switch (variant) {
      case "full-width":
        return "w-full"
      case "contained":
        return "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      case "default":
      default:
        return "container mx-auto px-4 sm:px-6 lg:px-8"
    }
  }

  const getLayoutClasses = () => {
    if (sidebar) {
      return "flex min-h-screen"
    }
    return "min-h-screen flex flex-col"
  }

  const getSidebarClasses = () => {
    const baseClasses = "flex-shrink-0"
    const positionClasses = sidebarPosition === "right" ? "order-last" : "order-first"
    return cn(baseClasses, positionClasses, sidebarClassName)
  }

  const getMainClasses = () => {
    if (sidebar) {
      return "flex-1 flex flex-col"
    }
    return "flex-grow"
  }

  return (
    <div className={cn(getLayoutClasses(), className)}>
      {/* Header */}
      {header && (
        <header className={cn("flex-shrink-0", headerClassName)}>
          {header}
        </header>
      )}

      {/* Sidebar */}
      {sidebar && (
        <aside className={getSidebarClasses()}>
          {sidebar}
        </aside>
      )}

      {/* Main Content */}
      <main className={cn(getMainClasses(), getVariantClasses(), mainClassName)}>
        {children}
      </main>

      {/* Footer */}
      {footer && (
        <footer className={cn("flex-shrink-0", footerClassName)}>
          {footer}
        </footer>
      )}
    </div>
  )
} 