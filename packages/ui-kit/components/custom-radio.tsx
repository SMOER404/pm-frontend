"use client"

import React from "react"
import { cn } from "../lib/utils"
import { tokens } from "../lib/design-tokens"
import { createChamferStyles, getChamferSizeFromComponentSize } from "../lib/chamfer-utils"

interface CustomRadioProps {
  name: string
  value: string
  checked?: boolean
  onChange?: (value: string) => void
  label?: string
  disabled?: boolean
  size?: "sm" | "md" | "lg"
  borderColor?: string
  backgroundColor?: string
  children?: React.ReactNode
}

export default function CustomRadio({
  name,
  value,
  checked = false,
  onChange,
  label,
  disabled = false,
  size = "md",
  borderColor,
  backgroundColor,
  children,
}: CustomRadioProps) {
  // Размеры
  const sizes = {
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-6 h-6",
  }

  const textSizes = {
    sm: "text-sm",
    md: "text-base",
    lg: "text-lg",
  }

  // Получаем размеры скосов (меньшие для radio)
  const chamferSize = getChamferSizeFromComponentSize("xs")
  
  // Создаем стили для скосов
  const chamferStyles = createChamferStyles(
    chamferSize,
    checked ? tokens.colors.brand.DEFAULT : (borderColor || tokens.colors.primary[300])
  )

  const customContentStyles = {
    ...(backgroundColor && { backgroundColor: backgroundColor }),
  }

  const handleChange = () => {
    if (!disabled && onChange) {
      onChange(value)
    }
  }

  return (
    <label className={cn("inline-flex items-center gap-3 cursor-pointer", disabled && "opacity-50 cursor-not-allowed")}>
      <div className="relative">
        {/* Hidden Input */}
        <input
          type="radio"
          name={name}
          value={value}
          checked={checked}
          onChange={handleChange}
          disabled={disabled}
          className="sr-only"
        />

        {/* Custom Radio */}
        <div className={cn("relative", sizes[size])}>
          {/* Внешняя рамка со скосами */}
          <div
            className="absolute inset-0 transition-all duration-200"
            style={{
              ...chamferStyles.outer,
              backgroundColor: checked ? tokens.colors.brand.DEFAULT : (borderColor || tokens.colors.primary[300]),
            }}
          />

          {/* Внутренний контент */}
          <div
            className="relative w-full h-full bg-white transition-all duration-200"
            style={{
              ...chamferStyles.inner,
              ...customContentStyles,
            }}
          >
            {/* Checked Indicator */}
            {checked && (
              <div
                className="absolute inset-1 bg-[#AFEB0F] transition-all duration-200"
                style={{
                  clipPath: `polygon(2px 0px, 100% 0px, 100% calc(100% - 2px), calc(100% - 2px) 100%, 0px 100%, 0px 2px)`,
                }}
              />
            )}
          </div>
        </div>
      </div>

      {/* Label */}
      {(label || children) && <span className={cn("text-[#292D30]", textSizes[size])}>{label || children}</span>}
    </label>
  )
}
