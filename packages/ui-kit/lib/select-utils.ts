"use client"

// Утилиты для работы с Select компонентами
import { useState } from "react"

export interface SelectOption {
  value: string
  label: string
  disabled?: boolean
  icon?: React.ReactNode
  description?: string
}

export interface SelectGroup {
  label: string
  options: SelectOption[]
  disabled?: boolean
}

export type SelectData = SelectOption[] | SelectGroup[]

export interface SelectState {
  isOpen: boolean
  searchValue: string
  selectedValues: string[]
  highlightedIndex: number
}

export interface SelectActions {
  open: () => void
  close: () => void
  toggle: () => void
  setSearchValue: (value: string) => void
  selectValue: (value: string) => void
  deselectValue: (value: string) => void
  clearSelection: () => void
  highlightIndex: (index: number) => void
  highlightNext: () => void
  highlightPrevious: () => void
}

/**
 * Фильтрует опции по поисковому запросу
 * @param data - данные для фильтрации
 * @param searchValue - поисковый запрос
 * @param searchFields - поля для поиска
 * @returns отфильтрованные данные
 */
export function filterSelectData(
  data: SelectData,
  searchValue: string,
  searchFields: ('label' | 'description')[] = ['label']
): SelectData {
  // Проверяем, что data определен
  if (!data) {
    console.error('filterSelectData: data is undefined or null')
    return []
  }

  if (!searchValue.trim()) {
    return data
  }

  const searchLower = searchValue.toLowerCase()

  const filterOptions = (options: SelectOption[]): SelectOption[] => {
    return options.filter(option => {
      return searchFields.some(field => {
        const fieldValue = option[field]
        return fieldValue && fieldValue.toLowerCase().includes(searchLower)
      })
    })
  }

  if (Array.isArray(data) && data.length > 0 && 'options' in data[0]) {
    // Группированные данные
    return (data as SelectGroup[]).map(group => ({
      ...group,
      options: filterOptions(group.options),
    })).filter(group => group.options.length > 0)
  } else {
    // Простые опции
    return filterOptions(data as SelectOption[])
  }
}

/**
 * Получает все опции из данных (включая группы)
 * @param data - данные
 * @returns массив всех опций
 */
export function getAllOptions(data: SelectData): SelectOption[] {
  // Проверяем, что data определен
  if (!data) {
    console.error('getAllOptions: data is undefined or null')
    return []
  }

  if (Array.isArray(data) && data.length > 0 && 'options' in data[0]) {
    // Группированные данные
    return (data as SelectGroup[]).flatMap(group => group.options)
  } else {
    // Простые опции
    return data as SelectOption[]
  }
}

/**
 * Находит опцию по значению
 * @param data - данные
 * @param value - значение для поиска
 * @returns найденная опция или undefined
 */
export function findOptionByValue(data: SelectData, value: string): SelectOption | undefined {
  const allOptions = getAllOptions(data)
  return allOptions.find(option => option.value === value)
}

/**
 * Получает отображаемый текст для выбранных значений
 * @param data - данные
 * @param selectedValues - выбранные значения
 * @param maxDisplay - максимальное количество отображаемых элементов
 * @returns отображаемый текст
 */
export function getDisplayText(
  data: SelectData,
  selectedValues: string[],
  maxDisplay: number = 3
): string {
  if (selectedValues.length === 0) {
    return ''
  }

  if (selectedValues.length === 1) {
    const option = findOptionByValue(data, selectedValues[0])
    return option?.label || selectedValues[0]
  }

  const displayOptions = selectedValues
    .slice(0, maxDisplay)
    .map(value => findOptionByValue(data, value)?.label || value)

  if (selectedValues.length <= maxDisplay) {
    return displayOptions.join(', ')
  }

  return `${displayOptions.join(', ')} +${selectedValues.length - maxDisplay}`
}

/**
 * Проверяет, является ли опция выбранной
 * @param option - опция
 * @param selectedValues - выбранные значения
 * @returns true если опция выбрана
 */
export function isOptionSelected(option: SelectOption, selectedValues: string[]): boolean {
  return selectedValues.includes(option.value)
}

/**
 * Получает индекс опции в плоском списке
 * @param data - данные
 * @param value - значение опции
 * @returns индекс или -1 если не найдено
 */
export function getOptionIndex(data: SelectData, value: string): number {
  const allOptions = getAllOptions(data)
  return allOptions.findIndex(option => option.value === value)
}

/**
 * Получает опцию по индексу
 * @param data - данные
 * @param index - индекс
 * @returns опция или undefined
 */
export function getOptionByIndex(data: SelectData, index: number): SelectOption | undefined {
  const allOptions = getAllOptions(data)
  return allOptions[index]
}

/**
 * Создает хук для управления состоянием Select
 * @param initialValues - начальные значения
 * @param multiSelect - поддержка множественного выбора
 * @returns объект с состоянием и действиями
 */
export function useSelectState(
  initialValues: string[] = [],
  multiSelect: boolean = false
): [SelectState, SelectActions] {
  const [state, setState] = useState<SelectState>({
    isOpen: false,
    searchValue: '',
    selectedValues: initialValues,
    highlightedIndex: -1,
  })

  const actions: SelectActions = {
    open: () => setState((prev: SelectState) => ({ ...prev, isOpen: true })),
    close: () => setState((prev: SelectState) => ({ ...prev, isOpen: false, searchValue: '' })),
    toggle: () => setState((prev: SelectState) => ({ ...prev, isOpen: !prev.isOpen })),
    setSearchValue: (value: string) => setState((prev: SelectState) => ({ ...prev, searchValue: value })),
    selectValue: (value: string) => {
      setState((prev: SelectState) => {
        if (multiSelect) {
          const newValues = prev.selectedValues.includes(value)
            ? prev.selectedValues.filter((v: string) => v !== value)
            : [...prev.selectedValues, value]
          return { ...prev, selectedValues: newValues }
        } else {
          return { ...prev, selectedValues: [value], isOpen: false, searchValue: '' }
        }
      })
    },
    deselectValue: (value: string) => {
      setState((prev: SelectState) => ({
        ...prev,
        selectedValues: prev.selectedValues.filter((v: string) => v !== value)
      }))
    },
    clearSelection: () => {
      setState((prev: SelectState) => ({ ...prev, selectedValues: [] }))
    },
    highlightIndex: (index: number) => {
      setState((prev: SelectState) => ({ ...prev, highlightedIndex: index }))
    },
    highlightNext: () => {
      setState((prev: SelectState) => ({ ...prev, highlightedIndex: prev.highlightedIndex + 1 }))
    },
    highlightPrevious: () => {
      setState((prev: SelectState) => ({ ...prev, highlightedIndex: Math.max(-1, prev.highlightedIndex - 1) }))
    },
  }

  return [state, actions]
}

/**
 * Предустановленные данные для демонстрации
 */
export const demoSelectData = {
  countries: [
    { value: 'ru', label: 'Россия', icon: '🇷🇺' },
    { value: 'us', label: 'США', icon: '🇺🇸' },
    { value: 'gb', label: 'Великобритания', icon: '🇬🇧' },
    { value: 'de', label: 'Германия', icon: '🇩🇪' },
    { value: 'fr', label: 'Франция', icon: '🇫🇷' },
    { value: 'it', label: 'Италия', icon: '🇮🇹' },
    { value: 'es', label: 'Испания', icon: '🇪🇸' },
    { value: 'cn', label: 'Китай', icon: '🇨🇳' },
    { value: 'jp', label: 'Япония', icon: '🇯🇵' },
    { value: 'kr', label: 'Южная Корея', icon: '🇰🇷' },
  ] as SelectOption[],

  groupedCategories: [
    {
      label: 'Электроника',
      options: [
        { value: 'smartphone', label: 'Смартфоны', description: 'Мобильные устройства' },
        { value: 'laptop', label: 'Ноутбуки', description: 'Портативные компьютеры' },
        { value: 'tablet', label: 'Планшеты', description: 'Планшетные компьютеры' },
      ]
    },
    {
      label: 'Одежда',
      options: [
        { value: 'shirt', label: 'Футболки', description: 'Верхняя одежда' },
        { value: 'pants', label: 'Брюки', description: 'Нижняя одежда' },
        { value: 'shoes', label: 'Обувь', description: 'Обувные изделия' },
      ]
    },
    {
      label: 'Спорт',
      options: [
        { value: 'football', label: 'Футбол', description: 'Командный спорт' },
        { value: 'basketball', label: 'Баскетбол', description: 'Игра с мячом' },
        { value: 'tennis', label: 'Теннис', description: 'Ракеточный спорт' },
      ]
    },
  ] as SelectGroup[],
} 