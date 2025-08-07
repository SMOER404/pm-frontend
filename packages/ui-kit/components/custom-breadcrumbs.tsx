"use client"

import React from "react"
import Link from "next/link"
import { cn } from "../lib/utils"
import { CustomTypography } from "./custom-typography"

export interface BreadcrumbItem {
  label: string
  href?: string
  icon?: React.ReactNode
}

export interface CustomBreadcrumbsProps {
  items: BreadcrumbItem[]
  separator?: string | React.ReactNode
  variant?: "default" | "minimal" | "detailed"
  size?: "sm" | "md" | "lg"
  className?: string
  itemClassName?: string
  separatorClassName?: string
  linkClassName?: string
  activeClassName?: string
}

export default function CustomBreadcrumbs({
  items,
  separator = "/",
  variant = "default",
  size = "md",
  className,
  itemClassName,
  separatorClassName,
  linkClassName,
  activeClassName,
}: CustomBreadcrumbsProps) {
  const getSizeClasses = () => {
    switch (size) {
      case "sm":
        return "text-sm"
      case "lg":
        return "text-lg"
      case "md":
      default:
        return "text-base"
    }
  }

  const getVariantClasses = () => {
    switch (variant) {
      case "minimal":
        return "text-gray-500"
      case "detailed":
        return "text-gray-700"
      case "default":
      default:
        return "text-gray-600"
    }
  }

  return (
    <nav className={cn("flex items-center gap-2", className)} aria-label="Breadcrumb">
      {items.map((item, index) => (
        <div key={item.label} className={cn("flex items-center", itemClassName)}>
          {index > 0 && (
            <span className={cn("mx-2 text-gray-400", separatorClassName)} aria-hidden="true">
              {separator}
            </span>
          )}
          {item.href ? (
            <Link
              href={item.href}
              className={cn(
                "transition-colors hover:text-primary",
                getSizeClasses(),
                getVariantClasses(),
                linkClassName
              )}
            >
              <div className="flex items-center gap-1">
                {item.icon && item.icon}
                <CustomTypography variant="body">{item.label}</CustomTypography>
              </div>
            </Link>
          ) : (
            <div className={cn("flex items-center gap-1", activeClassName)}>
              {item.icon && item.icon}
              <CustomTypography 
                variant="body" 
                className={cn("text-gray-900 font-medium", getSizeClasses())}
              >
                {item.label}
              </CustomTypography>
            </div>
          )}
        </div>
      ))}
    </nav>
  )
} 