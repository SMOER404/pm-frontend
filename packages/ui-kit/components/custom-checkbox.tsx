"use client"

import React from "react"
import { cn } from "../lib/utils"
import { tokens, type SizeToken } from "../lib/design-tokens"
import { createChamferStyles, getChamferSizeFromComponentSize } from "../lib/chamfer-utils"


interface CustomCheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> {
  label?: string
  size?: SizeToken
  indeterminate?: boolean
  error?: boolean
  helperText?: string
  className?: string
  labelClassName?: string
  containerClassName?: string
}

const sizes: Record<SizeToken, { width: string; height: string }> = {
  xs: { width: "12px", height: "12px" },
  sm: { width: "16px", height: "16px" },
  md: { width: "20px", height: "20px" },
  lg: { width: "24px", height: "24px" },
  xl: { width: "28px", height: "28px" },
}



export default function CustomCheckbox({
  label,
  size = "md",
  indeterminate = false,
  error = false,
  helperText,
  className,
  labelClassName,
  containerClassName,
  disabled,
  checked,
  onChange,
  ...props
}: CustomCheckboxProps) {
  const [isHovered, setIsHovered] = React.useState(false)
  const [isFocused, setIsFocused] = React.useState(false)
  
  // Получаем размеры скосов (меньшие для checkbox, как в radio)
  const chamferSize = getChamferSizeFromComponentSize("xs")
  
  // Определяем состояние чекбокса
  const isChecked = checked || indeterminate
  
  // Получаем цвета в зависимости от состояния
  const getColors = () => {
    if (error) {
      return {
        border: tokens.colors.danger.DEFAULT,
        background: "transparent",
      }
    }
    
    if (isChecked) {
      return {
        border: tokens.colors.brand.DEFAULT,
        background: "transparent",
      }
    }
    
    if (isHovered) {
      return {
        border: tokens.colors.brand.DEFAULT,
        background: "transparent",
      }
    }
    
    return {
      border: tokens.colors.primary[300],
      background: "transparent",
    }
  }
  
  // Создаем стили для скосов
  const chamferStyles = createChamferStyles(
    chamferSize,
    getColors().border
  )
  
  const colors = getColors()
  const sizeStyles = sizes[size]
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(e)
    }
  }
  
  return (
    <div className={cn("flex items-start gap-3", containerClassName)}>
      {/* Контейнер чекбокса */}
      <div className="relative">
        {/* Внешняя рамка со скосами */}
        <div
          className="absolute inset-0 transition-all duration-200"
          style={{
            ...chamferStyles.outer,
            backgroundColor: colors.border,
            width: sizeStyles.width,
            height: sizeStyles.height,
          }}
        />
        
                 {/* Внутренний контент */}
         <div
           className="relative w-full h-full bg-white transition-all duration-200"
           style={{
             ...chamferStyles.inner,
             width: sizeStyles.width,
             height: sizeStyles.height,
           }}
         >
           {/* Checked Indicator */}
           {isChecked && (
             <div
               className="absolute inset-1 bg-[#AFEB0F] transition-all duration-200"
               style={{
                 clipPath: `polygon(2px 0px, 100% 0px, 100% calc(100% - 2px), calc(100% - 2px) 100%, 0px 100%, 0px 2px)`,
               }}
             />
           )}
           
           {/* Indeterminate Indicator */}
           {indeterminate && !checked && (
             <div
               className="absolute inset-1 bg-[#AFEB0F] transition-all duration-200"
               style={{
                 clipPath: `polygon(2px 0px, 100% 0px, 100% calc(100% - 2px), calc(100% - 2px) 100%, 0px 100%, 0px 2px)`,
               }}
             >
               <div
                 className="absolute inset-1 bg-white"
                 style={{
                   clipPath: `polygon(3px 0px, 100% 0px, 100% calc(100% - 3px), calc(100% - 3px) 100%, 0px 100%, 0px 3px)`,
                 }}
               />
             </div>
           )}
         </div>
        
        {/* Скрытый input */}
        <input
          type="checkbox"
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
          checked={checked}
          onChange={handleChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          disabled={disabled}
          {...props}
        />
      </div>
      
      {/* Лейбл и текст помощи */}
      {(label || helperText) && (
        <div className="flex flex-col gap-1">
          {label && (
            <label
              className={cn(
                "text-sm font-medium cursor-pointer select-none",
                disabled && "opacity-50 cursor-not-allowed",
                error && "text-red-600",
                labelClassName
              )}
            >
              {label}
            </label>
          )}
          
          {helperText && (
            <span
              className={cn(
                "text-xs",
                error ? "text-red-600" : "text-gray-500",
                disabled && "opacity-50"
              )}
            >
              {helperText}
            </span>
          )}
        </div>
      )}
    </div>
  )
} 