"use client"

import type React from "react"
import { useState, useRef, useEffect, useCallback } from "react"
import { cn } from "../lib/utils"
import { tokens, type SizeToken } from "../lib/design-tokens"
import { createChamferStyles, getChamferSizeFromComponentSize } from "../lib/chamfer-utils"
import { useComponentStates } from "../lib/with-states"
import { 
  SelectData, 
  SelectOption, 
  SelectGroup,
  filterSelectData,
  getDisplayText,
  isOptionSelected,
  getAllOptions,
  useSelectState,
  type SelectState,
  type SelectActions
} from "../lib/select-utils"
import { ChevronDown, X, Search, Check } from "lucide-react"

interface CustomSelectProps {
  label?: string
  placeholder?: string
  data: SelectData
  value?: string | string[]
  onChange?: (value: string | string[]) => void
  size?: SizeToken
  variant?: "outlined" | "filled"
  multiSelect?: boolean
  searchable?: boolean
  disabled?: boolean
  error?: string
  helperText?: string
  maxDisplay?: number
  className?: string
}

export default function CustomSelect({
  label,
  placeholder = "Выберите опцию...",
  data,
  value,
  onChange,
  size = "md",
  variant = "outlined",
  multiSelect = false,
  searchable = false,
  disabled = false,
  error,
  helperText,
  maxDisplay = 3,
  className,
}: CustomSelectProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const searchRef = useRef<HTMLInputElement>(null)
  
  // Определяем начальные значения
  const initialValues = Array.isArray(value) ? value : value ? [value] : []
  const [state, actions] = useSelectState(initialValues, multiSelect)
  
  // Синхронизируем с внешним value
  useEffect(() => {
    const newValues = Array.isArray(value) ? value : value ? [value] : []
    if (JSON.stringify(newValues) !== JSON.stringify(state.selectedValues)) {
      actions.clearSelection()
      newValues.forEach(v => actions.selectValue(v))
    }
  }, [value])

  // Фильтруем данные по поиску
  const filteredData = searchable ? filterSelectData(data, state.searchValue) : data
  const allOptions = getAllOptions(filteredData)

  // Получаем размеры из токенов
  const sizeConfig = tokens.sizes[size]
  const chamferSize = getChamferSizeFromComponentSize(size)
  
  // Создаем стили для скосов
  const chamferStyles = createChamferStyles(
    chamferSize,
    state.isOpen ? tokens.colors.brand.DEFAULT : 
    error ? tokens.colors.danger.DEFAULT : 
    tokens.colors.primary[300]
  )

  // Определяем цвета на основе состояния
  const getColors = () => {
    if (error) {
      return {
        border: tokens.colors.danger.DEFAULT,
        background: tokens.colors.neutral.white,
        text: tokens.colors.primary.DEFAULT,
      }
    }
    
    if (state.isOpen) {
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

  // Обработчики событий
  const handleToggle = useCallback(() => {
    if (disabled) return
    actions.toggle()
  }, [disabled, actions])

  const handleSelect = useCallback((optionValue: string) => {
    if (disabled) return
    actions.selectValue(optionValue)
    
    // Вызываем внешний onChange
    if (onChange) {
      if (multiSelect) {
        onChange(state.selectedValues)
      } else {
        onChange(optionValue)
      }
    }
  }, [disabled, actions, onChange, multiSelect, state.selectedValues])

  const handleDeselect = useCallback((optionValue: string) => {
    if (disabled) return
    actions.deselectValue(optionValue)
    
    if (onChange) {
      const newValues = state.selectedValues.filter(v => v !== optionValue)
      onChange(multiSelect ? newValues : newValues[0] || '')
    }
  }, [disabled, actions, onChange, multiSelect, state.selectedValues])

  const handleClear = useCallback((e: React.MouseEvent) => {
    e.stopPropagation()
    if (disabled) return
    actions.clearSelection()
    if (onChange) {
      onChange(multiSelect ? [] : '')
    }
  }, [disabled, actions, onChange, multiSelect])

  const handleSearchChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    actions.setSearchValue(e.target.value)
  }, [actions])

  // Обработка клавиатурной навигации
  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (disabled) return

    switch (e.key) {
      case 'Enter':
        e.preventDefault()
        if (state.highlightedIndex >= 0 && allOptions[state.highlightedIndex]) {
          handleSelect(allOptions[state.highlightedIndex].value)
        } else if (state.isOpen) {
          actions.close()
        } else {
          actions.open()
        }
        break
      case 'ArrowDown':
        e.preventDefault()
        if (!state.isOpen) {
          actions.open()
        } else {
          actions.highlightNext()
        }
        break
      case 'ArrowUp':
        e.preventDefault()
        if (state.isOpen) {
          actions.highlightPrevious()
        }
        break
      case 'Escape':
        e.preventDefault()
        actions.close()
        break
      case 'Backspace':
        if (state.searchValue === '' && state.selectedValues.length > 0 && multiSelect) {
          e.preventDefault()
          const lastValue = state.selectedValues[state.selectedValues.length - 1]
          handleDeselect(lastValue)
        }
        break
    }
  }, [disabled, state, allOptions, handleSelect, handleDeselect, actions, multiSelect])

  // Закрытие при клике вне компонента
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        actions.close()
      }
    }

    if (state.isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
      return () => document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [state.isOpen, actions])

  // Фокус на поиск при открытии
  useEffect(() => {
    if (state.isOpen && searchable && searchRef.current) {
      searchRef.current.focus()
    }
  }, [state.isOpen, searchable])

  // Получаем отображаемый текст
  const displayText = getDisplayText(data, state.selectedValues, maxDisplay)

  // Рендер опции
  const renderOption = (option: SelectOption, index: number) => {
    const isSelected = isOptionSelected(option, state.selectedValues)
    const isHighlighted = index === state.highlightedIndex

    return (
      <div
        key={option.value}
        className={cn(
          "flex items-center gap-3 px-3 py-2 cursor-pointer transition-colors",
          isSelected && "bg-brand text-primary",
          isHighlighted && !isSelected && "bg-gray-100",
          option.disabled && "opacity-50 cursor-not-allowed",
          !option.disabled && "hover:bg-gray-50"
        )}
        onClick={() => !option.disabled && handleSelect(option.value)}
      >
        {multiSelect && (
          <div className={cn(
            "w-4 h-4 border rounded flex items-center justify-center",
            isSelected ? "bg-brand border-brand" : "border-gray-300"
          )}>
            {isSelected && <Check className="w-3 h-3 text-primary" />}
          </div>
        )}
        
        {option.icon && <span className="flex-shrink-0">{option.icon}</span>}
        
        <div className="flex-1 min-w-0">
          <div className="font-medium truncate">{option.label}</div>
          {option.description && (
            <div className="text-sm text-gray-500 truncate">{option.description}</div>
          )}
        </div>
      </div>
    )
  }

  // Рендер группы
  const renderGroup = (group: SelectGroup) => (
    <div key={group.label}>
      <div className="px-3 py-2 text-sm font-medium text-gray-500 bg-gray-50">
        {group.label}
      </div>
      {group.options.map((option, index) => renderOption(option, index))}
    </div>
  )

  return (
    <div className={cn("space-y-1", className)}>
      {/* Label */}
      {label && (
        <label className="block text-sm font-medium text-foreground">
          {label}
        </label>
      )}

      {/* Select Container */}
      <div ref={containerRef} className="relative">
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
          <div
            className={cn(
              "flex items-center gap-2 cursor-pointer transition-all duration-200",
              disabled && "opacity-50 cursor-not-allowed"
            )}
            style={{
              padding: sizeConfig.padding,
              fontSize: sizeConfig.fontSize,
              minHeight: sizeConfig.height,
              backgroundColor: colors.background,
              color: colors.text,
            }}
            onClick={handleToggle}
            onKeyDown={handleKeyDown}
            tabIndex={disabled ? -1 : 0}
            role="combobox"
            aria-expanded={state.isOpen}
            aria-haspopup="listbox"
          >
            {/* Выбранные значения */}
            <div className="flex-1 min-w-0">
              {displayText ? (
                <span className="truncate">{displayText}</span>
              ) : (
                <span className="text-gray-400">{placeholder}</span>
              )}
            </div>

            {/* Кнопка очистки */}
            {state.selectedValues.length > 0 && (
              <button
                type="button"
                className="flex-shrink-0 p-1 hover:bg-gray-100 rounded transition-colors"
                onClick={handleClear}
                disabled={disabled}
              >
                <X className="w-4 h-4" />
              </button>
            )}

            {/* Стрелка */}
            <ChevronDown 
              className={cn(
                "w-4 h-4 flex-shrink-0 transition-transform",
                state.isOpen && "rotate-180"
              )} 
            />
          </div>
        </div>

        {/* Dropdown */}
        {state.isOpen && (
          <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-50 max-h-60 overflow-hidden">
            {/* Поиск */}
            {searchable && (
              <div className="p-2 border-b border-gray-100">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    ref={searchRef}
                    type="text"
                    value={state.searchValue}
                    onChange={handleSearchChange}
                    placeholder="Поиск..."
                    className="w-full pl-10 pr-3 py-2 text-sm border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent"
                  />
                </div>
              </div>
            )}

            {/* Список опций */}
            <div className="max-h-48 overflow-y-auto">
              {Array.isArray(filteredData) && filteredData.length > 0 && 'options' in filteredData[0] ? (
                // Группированные данные
                (filteredData as SelectGroup[]).map(renderGroup)
              ) : (
                // Простые опции
                (filteredData as SelectOption[]).map((option, index) => renderOption(option, index))
              )}
              
              {getAllOptions(filteredData).length === 0 && (
                <div className="px-3 py-4 text-center text-gray-500">
                  {state.searchValue ? 'Ничего не найдено' : 'Нет доступных опций'}
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Helper Text / Error */}
      {(error || helperText) && (
        <p className={cn(
          "text-xs",
          error ? "text-red-500" : "text-gray-500"
        )}>
          {error || helperText}
        </p>
      )}
    </div>
  )
} 