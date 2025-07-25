"use client"

import type React from "react"
import { cn } from "../lib/utils"
import { useState } from "react"

interface CustomTextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string
  error?: string
  helperText?: string
  variant?: "outlined" | "filled"
  borderColor?: string
  backgroundColor?: string
  textColor?: string
  resize?: "none" | "vertical" | "horizontal" | "both"
}

export default function CustomTextarea({
  label,
  error,
  helperText,
  variant = "outlined",
  borderColor,
  backgroundColor,
  textColor,
  resize = "vertical",
  className,
  ...props
}: CustomTextareaProps) {
  const [isFocused, setIsFocused] = useState(false)

  // Варианты стилей
  const variants = {
    outlined: "bg-white border-gray-300 focus:border-[#AFEB0F]",
    filled: "bg-gray-50 border-transparent focus:bg-white focus:border-[#AFEB0F]",
  }

  // Варианты resize
  const resizeStyles = {
    none: "resize-none",
    vertical: "resize-y",
    horizontal: "resize-x",
    both: "resize",
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

  return (
    <div className={cn("space-y-1", className)}>
      {/* Label */}
      {label && <label className="block text-sm font-medium text-[#292D30]">{label}</label>}

      {/* Textarea Container */}
      <div className="relative">
        {/* Border */}
        <div
          className={cn(
            "absolute inset-0 transition-colors duration-200",
            clipPath,
            error ? "bg-red-500" : isFocused ? "bg-[#AFEB0F]" : "bg-gray-300",
          )}
          style={!error && !isFocused ? customBorderStyles : undefined}
        />

        {/* Textarea */}
        <textarea
          className={cn(
            "relative w-full px-4 py-3 text-sm border-0 outline-none transition-all duration-200 placeholder:text-gray-400 min-h-[80px]",
            variants[variant],
            resizeStyles[resize],
            error && "border-red-500 focus:border-red-500",
            contentClipPath,
          )}
          style={customContentStyles}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          {...props}
        />
      </div>

      {/* Helper Text / Error */}
      {(error || helperText) && (
        <p className={cn("text-xs", error ? "text-red-500" : "text-gray-500")}>{error || helperText}</p>
      )}
    </div>
  )
}
