"use client"

import React from "react"
import Link from "next/link"
import Image from "next/image"
import { cn } from "../lib/utils"
import CustomButton from "./custom-button"
import { CustomTypography } from "./custom-typography"

export interface NavigationItem {
  label: string
  href: string
  icon?: React.ReactNode
}

export interface ActionItem {
  label: string
  href?: string
  onClick?: () => void
  icon?: React.ReactNode
  badge?: number
  variant?: "primary" | "secondary" | "ghost"
}

export interface CustomHeaderProps {
  logo?: {
    src: string
    alt: string
    width?: number
    height?: number
    href?: string
  }
  navigation?: NavigationItem[]
  actions?: ActionItem[]
  variant?: "default" | "transparent" | "dark"
  fixed?: boolean
  className?: string
  containerClassName?: string
  logoClassName?: string
  navClassName?: string
  actionsClassName?: string
  mobileMenu?: React.ReactNode
}

export default function CustomHeader({
  logo,
  navigation = [],
  actions = [],
  variant = "default",
  fixed = false,
  className,
  containerClassName,
  logoClassName,
  navClassName,
  actionsClassName,
  mobileMenu,
}: CustomHeaderProps) {
  const getVariantClasses = () => {
    switch (variant) {
      case "transparent":
        return "bg-transparent"
      case "dark":
        return "bg-gray-900 text-white"
      case "default":
      default:
        return "bg-white shadow-md"
    }
  }

  const getFixedClasses = () => {
    if (fixed) {
      return "fixed top-0 left-0 right-0 z-50"
    }
    return ""
  }

  return (
    <header className={cn("h-16", getVariantClasses(), getFixedClasses(), className)}>
      <div className={cn("container mx-auto px-4 h-full", containerClassName)}>
        <div className="flex items-center justify-between h-full">
          {/* Logo */}
          {logo && (
            <Link href={logo.href || "/"} className={cn("flex items-center", logoClassName)}>
              <Image
                src={logo.src}
                alt={logo.alt}
                width={logo.width || 120}
                height={logo.height || 40}
                className="h-auto"
              />
            </Link>
          )}

          {/* Navigation */}
          {navigation.length > 0 && (
            <nav className={cn("hidden md:flex space-x-8", navClassName)}>
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="flex items-center gap-2 text-gray-600 hover:text-primary transition-colors uppercase text-sm"
                >
                  {item.icon && item.icon}
                  <span>{item.label}</span>
                </Link>
              ))}
            </nav>
          )}

          {/* Actions */}
          <div className={cn("flex items-center gap-4", actionsClassName)}>
            {actions.map((action, index) => (
              <div key={index} className="relative">
                {action.href ? (
                  <Link
                    href={action.href}
                    className="flex items-center gap-2 text-gray-600 hover:text-primary transition-colors"
                  >
                    {action.icon && action.icon}
                    <span className="text-sm uppercase">{action.label}</span>
                    {action.badge && (
                      <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                        {action.badge}
                      </span>
                    )}
                  </Link>
                ) : (
                  <CustomButton
                    variant={action.variant || "ghost"}
                    size="sm"
                    onClick={action.onClick}
                    className="flex items-center gap-2"
                  >
                    {action.icon && action.icon}
                    <span className="text-sm uppercase">{action.label}</span>
                    {action.badge && (
                      <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                        {action.badge}
                      </span>
                    )}
                  </CustomButton>
                )}
              </div>
            ))}

            {/* Mobile Menu Button */}
            {mobileMenu && (
              <CustomButton
                variant="ghost"
                size="sm"
                className="md:hidden"
                aria-label="Открыть меню"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </CustomButton>
            )}
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenu && (
          <div className="md:hidden">
            {mobileMenu}
          </div>
        )}
      </div>
    </header>
  )
} 