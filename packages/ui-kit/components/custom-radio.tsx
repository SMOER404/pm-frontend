"use client"

import type React from "react"
import { cn } from "../lib/utils"

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

  // clipPath для скосов (1px) - меньшие скосы для radio
  const clipPath = "[clip-path:polygon(4px_0px,100%_0px,100%_calc(100%-4px),calc(100%-4px)_100%,0px_100%,0px_4px)]"
  const contentClipPath =
    "[clip-path:polygon(3px_1px,calc(100%-1px)_1px,calc(100%-1px)_calc(100%-3px),calc(100%-3px)_calc(100%-1px),1px_calc(100%-1px),1px_3px)]"

  const customBorderStyles = {
    ...(borderColor && { backgroundColor: borderColor }),
  }

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
          {/* Border */}
          <div
            className={cn(
              "absolute inset-0 transition-colors duration-200",
              clipPath,
              checked ? "bg-[#AFEB0F]" : "bg-gray-300",
            )}
            style={!checked ? customBorderStyles : undefined}
          />

          {/* Content */}
          <div
            className={cn("relative w-full h-full bg-white transition-all duration-200", contentClipPath)}
            style={customContentStyles}
          >
            {/* Checked Indicator */}
            {checked && (
              <div
                className={cn(
                  "absolute inset-1 bg-[#AFEB0F] transition-all duration-200",
                  "[clip-path:polygon(2px_0px,100%_0px,100%_calc(100%-2px),calc(100%-2px)_100%,0px_100%,0px_2px)]",
                )}
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
