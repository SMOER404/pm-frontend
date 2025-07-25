"use client"
import { cn } from "../lib/utils"
import { useState } from "react"
import { ChevronDown } from "lucide-react"

interface SelectOption {
  value: string
  label: string
  disabled?: boolean
}

interface CustomSelectProps {
  options: SelectOption[]
  value?: string
  onChange?: (value: string) => void
  placeholder?: string
  label?: string
  error?: string
  helperText?: string
  size?: "sm" | "md" | "lg"
  variant?: "outlined" | "filled"
  disabled?: boolean
  borderColor?: string
  backgroundColor?: string
  textColor?: string
}

export default function CustomSelect({
  options,
  value,
  onChange,
  placeholder = "Выберите опцию",
  label,
  error,
  helperText,
  size = "md",
  variant = "outlined",
  disabled = false,
  borderColor,
  backgroundColor,
  textColor,
}: CustomSelectProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [isFocused, setIsFocused] = useState(false)

  // Размеры
  const sizes = {
    sm: "px-3 py-2 text-sm min-h-[32px]",
    md: "px-4 py-3 text-sm min-h-[40px]",
    lg: "px-5 py-4 text-base min-h-[48px]",
  }

  // Варианты стилей
  const variants = {
    outlined: "bg-white border-gray-300 focus:border-[#AFEB0F]",
    filled: "bg-gray-50 border-transparent focus:bg-white focus:border-[#AFEB0F]",
  }

  // clipPath для скосов (1px)
  const clipPath = "[clip-path:polygon(8px_0px,100%_0px,100%_calc(100%-8px),calc(100%-8px)_100%,0px_100%,0px_8px)]"
  const contentClipPath =
    "[clip-path:polygon(7px_1px,calc(100%-1px)_1px,calc(100%-1px)_calc(100%-7px),calc(100%-7px)_calc(100%-1px),1px_calc(100%-1px),1px_7px)]"

  const customBorderStyles = {
    ...(borderColor && { backgroundColor: borderColor }),
  }

  const customContentStyles = {
    ...(backgroundColor && { backgroundColor: backgroundColor }),
    ...(textColor && { color: textColor }),
  }

  const selectedOption = options.find((option) => option.value === value)

  const handleSelect = (optionValue: string) => {
    if (onChange) {
      onChange(optionValue)
    }
    setIsOpen(false)
  }

  return (
    <div className="relative space-y-1">
      {/* Label */}
      {label && <label className="block text-sm font-medium text-[#292D30]">{label}</label>}

      {/* Select Container */}
      <div className="relative">
        {/* Border */}
        <div
          className={cn(
            "absolute inset-0 transition-colors duration-200",
            clipPath,
            error ? "bg-red-500" : isFocused || isOpen ? "bg-[#AFEB0F]" : "bg-gray-300",
          )}
          style={!error && !isFocused && !isOpen ? customBorderStyles : undefined}
        />

        {/* Select Button */}
        <button
          type="button"
          className={cn(
            "relative w-full flex items-center justify-between border-0 outline-none transition-all duration-200 cursor-pointer",
            sizes[size],
            variants[variant],
            disabled && "opacity-50 cursor-not-allowed",
            contentClipPath,
          )}
          style={customContentStyles}
          onClick={() => !disabled && setIsOpen(!isOpen)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          disabled={disabled}
        >
          <span className={cn(selectedOption ? "text-[#292D30]" : "text-gray-400")}>
            {selectedOption ? selectedOption.label : placeholder}
          </span>
          <ChevronDown className={cn("w-4 h-4 transition-transform duration-200", isOpen && "rotate-180")} />
        </button>

        {/* Dropdown */}
        {isOpen && (
          <div className="absolute top-full left-0 right-0 z-50 mt-1">
            {/* Border */}
            <div className={cn("absolute inset-0 bg-[#292D30]", clipPath)} />

            {/* Content */}
            <div className={cn("relative bg-white max-h-60 overflow-auto", contentClipPath)}>
              {options.map((option) => (
                <button
                  key={option.value}
                  type="button"
                  className={cn(
                    "w-full px-4 py-3 text-left text-sm hover:bg-gray-50 transition-colors duration-200",
                    option.disabled && "opacity-50 cursor-not-allowed",
                    value === option.value && "bg-[#AFEB0F] bg-opacity-10 text-[#292D30] font-medium",
                  )}
                  onClick={() => !option.disabled && handleSelect(option.value)}
                  disabled={option.disabled}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Helper Text / Error */}
      {(error || helperText) && (
        <p className={cn("text-xs", error ? "text-red-500" : "text-gray-500")}>{error || helperText}</p>
      )}

      {/* Overlay to close dropdown */}
      {isOpen && <div className="fixed inset-0 z-40" onClick={() => setIsOpen(false)} />}
    </div>
  )
}
