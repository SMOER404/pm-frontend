"use client"

import type React from "react"
import { useState, useRef, useEffect, useCallback } from "react"
import { cn } from "../lib/utils"
import { tokens, type SizeToken } from "../lib/design-tokens"
import { createChamferStyles, getChamferSizeFromComponentSize } from "../lib/chamfer-utils"
import { useComponentStates } from "../lib/with-states"
import { validate, type ValidationRule } from "../lib/validation"
import { applyMask, removeMask, type MaskConfig } from "../lib/input-masks"
import { Eye, EyeOff, Search, Calendar, Phone, Mail, Lock } from "lucide-react"

interface CustomInputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> {
  label?: string
  error?: string
  helperText?: string
  size?: SizeToken
  variant?: "outlined" | "filled"
  icon?: React.ReactNode
  iconPosition?: "left" | "right"
  validation?: ValidationRule
  mask?: MaskConfig
  showPasswordToggle?: boolean
  autocomplete?: string
  onValidationChange?: (isValid: boolean, error?: string) => void
  onValueChange?: (value: string, maskedValue: string) => void
}

export default function CustomInput({
  label,
  error: externalError,
  helperText,
  size = "md",
  variant = "outlined",
  icon,
  iconPosition = "left",
  validation,
  mask,
  showPasswordToggle = false,
  autocomplete,
  onValidationChange,
  onValueChange,
  className,
  value: externalValue,
  onChange,
  type = "text",
  ...props
}: CustomInputProps) {
  const inputRef = useRef<HTMLInputElement>(null)
  const [internalValue, setInternalValue] = useState("")
  const [maskedValue, setMaskedValue] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [validationError, setValidationError] = useState<string>()
  const [cursorPosition, setCursorPosition] = useState(0)

  const { states, handlers } = useComponentStates(props.disabled)

  // Определяем значение (внешнее или внутреннее)
  const value = externalValue !== undefined ? String(externalValue) : internalValue
  const displayValue = mask ? maskedValue : value

  // Получаем размеры из токенов
  const sizeConfig = tokens.sizes[size]
  const chamferSize = getChamferSizeFromComponentSize(size)
  
  // Создаем стили для скосов
  const chamferStyles = createChamferStyles(
    chamferSize,
    states.isFocused ? tokens.colors.brand.DEFAULT : 
    validationError || externalError ? tokens.colors.danger.DEFAULT : 
    tokens.colors.primary[300]
  )

  // Определяем цвета на основе состояния
  const getColors = () => {
    if (validationError || externalError) {
      return {
        border: tokens.colors.danger.DEFAULT,
        background: tokens.colors.neutral.white,
        text: tokens.colors.primary.DEFAULT,
      }
    }
    
    if (states.isFocused) {
      return {
        border: tokens.colors.brand.DEFAULT,
        background: tokens.colors.neutral.white,
        text: tokens.colors.primary.DEFAULT,
      }
    }

    return {
      border: tokens.colors.primary[300],
      background: variant === "filled" ? tokens.colors.primary[50] : tokens.colors.neutral.white,
      text: tokens.colors.primary.DEFAULT,
    }
  }

  const colors = getColors()

  // Обработка изменения значения
  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value
    const newCursorPosition = e.target.selectionStart || 0

    let processedValue = newValue
    let processedMaskedValue = newValue

    // Применяем маску если есть
    if (mask) {
      const maskResult = applyMask(newValue, mask, newCursorPosition)
      processedValue = removeMask(maskResult.value, mask)
      processedMaskedValue = maskResult.value
      setCursorPosition(maskResult.cursorPosition)
    }

    // Обновляем внутреннее состояние
    if (externalValue === undefined) {
      setInternalValue(processedValue)
    }
    setMaskedValue(processedMaskedValue)

    // Валидация
    if (validation) {
      const validationResult = validate(processedValue, validation)
      setValidationError(validationResult.error)
      onValidationChange?.(validationResult.isValid, validationResult.error)
    }

    // Вызываем внешний onChange
    if (onChange) {
      const syntheticEvent = {
        ...e,
        target: {
          ...e.target,
          value: processedValue,
        },
      }
      onChange(syntheticEvent as React.ChangeEvent<HTMLInputElement>)
    }

    // Вызываем onValueChange
    onValueChange?.(processedValue, processedMaskedValue)
  }, [mask, validation, onChange, onValidationChange, onValueChange, externalValue])

  // Валидация при изменении validation rules
  useEffect(() => {
    if (validation) {
      const validationResult = validate(value, validation)
      setValidationError(validationResult.error)
      onValidationChange?.(validationResult.isValid, validationResult.error)
    }
  }, [validation, value, onValidationChange])

  // Установка позиции курсора после применения маски
  useEffect(() => {
    if (mask && inputRef.current) {
      inputRef.current.setSelectionRange(cursorPosition, cursorPosition)
    }
  }, [mask, cursorPosition])

  // Определяем тип ввода
  const inputType = showPasswordToggle && type === "password" 
    ? (showPassword ? "text" : "password") 
    : type

  // Определяем иконку
  const getIcon = () => {
    if (showPasswordToggle && type === "password") {
      return showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />
    }
    
    if (icon) {
      return icon
    }

    // Автоматические иконки на основе типа
    switch (type) {
      case "email":
        return <Mail className="w-4 h-4" />
      case "tel":
        return <Phone className="w-4 h-4" />
      case "password":
        return <Lock className="w-4 h-4" />
      case "search":
        return <Search className="w-4 h-4" />
      case "date":
        return <Calendar className="w-4 h-4" />
      default:
        return null
    }
  }

  const iconElement = getIcon()
  const hasLeftIcon = iconElement && iconPosition === "left"
  const hasRightIcon = iconElement && (iconPosition === "right" || showPasswordToggle)

  return (
    <div className={cn("space-y-1", className)}>
      {/* Label */}
      {label && (
        <label className="block text-sm font-medium text-foreground">
          {label}
          {validation?.required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}

      {/* Input Container */}
      <div className="relative">
        {/* Внешняя рамка со скосами */}
        <div
          className="absolute inset-0 transition-all duration-200"
          style={{
            ...chamferStyles.outer,
            backgroundColor: colors.border,
          }}
        />

        {/* Внутренний контент */}
        <div
          className="relative"
          style={chamferStyles.inner}
        >
          <div className="relative flex items-center">
            {/* Left Icon */}
            {hasLeftIcon && (
              <div className="absolute left-3 z-10 text-gray-400">
                {iconElement}
              </div>
            )}

            <input
              ref={inputRef}
              className={cn(
                "w-full border-0 outline-none transition-all duration-200 placeholder:text-gray-400",
                hasLeftIcon && "pl-10",
                hasRightIcon && "pr-10",
                "focus:ring-0",
              )}
              style={{
                padding: sizeConfig.padding,
                fontSize: sizeConfig.fontSize,
                minHeight: sizeConfig.height,
                backgroundColor: colors.background,
                color: colors.text,
              }}
              value={displayValue}
              onChange={handleChange}
              type={inputType}
              autoComplete={autocomplete}
              {...handlers}
              {...props}
            />

            {/* Right Icon */}
            {hasRightIcon && (
              <div className="absolute right-3 z-10">
                {showPasswordToggle && type === "password" ? (
                  <button
                    type="button"
                    className="text-gray-400 hover:text-gray-600 transition-colors"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {iconElement}
                  </button>
                ) : (
                  <span className="text-gray-400">{iconElement}</span>
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Helper Text / Error */}
      {(validationError || externalError || helperText) && (
        <p className={cn(
          "text-xs",
          validationError || externalError ? "text-red-500" : "text-gray-500"
        )}>
          {validationError || externalError || helperText}
        </p>
      )}
    </div>
  )
} 