"use client"

import React from "react"
import { cn } from "../lib/utils"
import CustomButton from "./custom-button"

export interface ActionButton {
  label: string
  onClick: () => void
  variant?: "primary" | "secondary" | "outlined" | "ghost"
  size?: "sm" | "md" | "lg"
  icon?: React.ReactNode
  disabled?: boolean
  iconOnly?: boolean
}

export interface CustomProductActionsProps {
  actions: ActionButton[]
  variant?: "default" | "compact" | "detailed"
  layout?: "horizontal" | "vertical"
  className?: string
  buttonClassName?: string
}

export default function CustomProductActions({
  actions,
  variant = "default",
  layout = "horizontal",
  className,
  buttonClassName,
}: CustomProductActionsProps) {
  const getLayoutClasses = () => {
    switch (layout) {
      case "vertical":
        return "flex-col"
      case "horizontal":
      default:
        return "flex-row"
    }
  }

  const getVariantClasses = () => {
    switch (variant) {
      case "compact":
        return "gap-2"
      case "detailed":
        return "gap-6"
      case "default":
      default:
        return "gap-4"
    }
  }

  return (
    <div className={cn("flex flex-wrap items-center", getLayoutClasses(), getVariantClasses(), className)}>
      {actions.map((action, index) => (
        <CustomButton
          key={index}
          variant={action.variant || "primary"}
          size={action.size || "md"}
          onClick={action.onClick}
          disabled={action.disabled}
          icon={action.icon}
          iconOnly={action.iconOnly}
          className={cn("uppercase", buttonClassName)}
        >
          {action.label}
        </CustomButton>
      ))}
    </div>
  )
} 