"use client"

import React from "react"
import { cn } from "../lib/utils"
import CustomButton from "./custom-button"
import { CustomTypography } from "./custom-typography"

export interface CustomColorPickerProps {
  colors: string[]
  selectedColor: string
  onChange: (color: string) => void
  title?: string
  variant?: "buttons" | "circles" | "squares"
  size?: "sm" | "md" | "lg"
  disabled?: boolean
  className?: string
  colorItemClassName?: string
  titleClassName?: string
  containerClassName?: string
}

export default function CustomColorPicker({
  colors,
  selectedColor,
  onChange,
  title = "Цвет",
  variant = "buttons",
  size = "md",
  disabled = false,
  className,
  colorItemClassName,
  titleClassName,
  containerClassName,
}: CustomColorPickerProps) {
  const getSizeClasses = () => {
    switch (size) {
      case "sm":
        return "w-6 h-6"
      case "lg":
        return "w-12 h-12"
      case "md":
      default:
        return "w-8 h-8"
    }
  }

  const getVariantClasses = () => {
    switch (variant) {
      case "circles":
        return "rounded-full"
      case "squares":
        return "rounded-md"
      case "buttons":
      default:
        return "rounded"
    }
  }

  const renderColorItem = (color: string) => {
    const isSelected = selectedColor === color

    if (variant === "buttons") {
      return (
        <CustomButton
          key={color}
          onClick={() => onChange(color)}
          variant={isSelected ? "primary" : "outlined"}
          size="sm"
          disabled={disabled}
          aria-label={`Выбрать цвет ${color}`}
          aria-pressed={isSelected}
          className={colorItemClassName}
        >
          <span className="uppercase">{color}</span>
        </CustomButton>
      )
    }

    return (
      <button
        key={color}
        onClick={() => onChange(color)}
        disabled={disabled}
        className={cn(
          "border-2 transition-all duration-200",
          getSizeClasses(),
          getVariantClasses(),
          isSelected ? "border-gray-900 scale-110" : "border-gray-300 hover:border-gray-500",
          colorItemClassName
        )}
        style={{ backgroundColor: color }}
        aria-label={`Выбрать цвет ${color}`}
        aria-pressed={isSelected}
      />
    )
  }

  return (
    <div className={cn("flex flex-col gap-2", className)}>
      {title && (
        <CustomTypography variant="body" className={cn("text-sm font-medium", titleClassName)}>
          {title}
        </CustomTypography>
      )}
      <div className={cn("flex flex-wrap gap-2", containerClassName)}>
        {colors.map(renderColorItem)}
      </div>
    </div>
  )
} 