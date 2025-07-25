// Система масок для ввода

export type MaskConfig = {
  mask: string | readonly RegExp[]
  placeholder?: string
  guide?: boolean
  keepCharPositions?: boolean
  showMask?: boolean
}

export type MaskResult = {
  value: string
  displayValue: string
  cursorPosition: number
}

// Предустановленные маски
export const masks = {
  phone: {
    mask: ['+', '7', ' ', '(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/] as const,
    placeholder: '+7 (___) ___-__-__',
  },
  phoneSimple: {
    mask: ['+', '7', ' ', /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/] as const,
    placeholder: '+7 ___ ___-__-__',
  },
  date: {
    mask: [/\d/, /\d/, '.', /\d/, /\d/, '.', /\d/, /\d/, /\d/, /\d/] as const,
    placeholder: 'DD.MM.YYYY',
  },
  time: {
    mask: [/\d/, /\d/, ':', /\d/, /\d/] as const,
    placeholder: 'HH:MM',
  },
  card: {
    mask: [/\d/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/] as const,
    placeholder: '____ ____ ____ ____',
  },
  cvv: {
    mask: [/\d/, /\d/, /\d/] as const,
    placeholder: '___',
  },
  expiry: {
    mask: [/\d/, /\d/, '/', /\d/, /\d/] as const,
    placeholder: 'MM/YY',
  },
  postal: {
    mask: [/\d/, /\d/, /\d/, /\d/, /\d/, /\d/] as const,
    placeholder: '______',
  },
  ip: {
    mask: [/\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/] as const,
    placeholder: '___.___.___.___',
  },
} as const

/**
 * Применяет маску к значению
 * @param value - исходное значение
 * @param maskConfig - конфигурация маски
 * @param cursorPosition - позиция курсора
 * @returns результат с маской
 */
export function applyMask(
  value: string,
  maskConfig: MaskConfig,
  cursorPosition: number = 0
): MaskResult {
  const { mask, placeholder = '', guide = true } = maskConfig
  
  if (!Array.isArray(mask)) {
    return { value, displayValue: value, cursorPosition }
  }

  let result = ''
  let valueIndex = 0
  let newCursorPosition = cursorPosition

  for (let i = 0; i < mask.length && valueIndex < value.length; i++) {
    const maskChar = mask[i]
    
    if (typeof maskChar === 'string') {
      // Фиксированный символ маски
      result += maskChar
      if (cursorPosition > i) {
        newCursorPosition++
      }
    } else if (maskChar instanceof RegExp) {
      // Регулярное выражение
      const char = value[valueIndex]
      if (maskChar.test(char)) {
        result += char
        valueIndex++
        if (cursorPosition > i) {
          newCursorPosition++
        }
      } else {
        // Пропускаем невалидный символ
        valueIndex++
        if (cursorPosition > i) {
          newCursorPosition--
        }
      }
    }
  }

  // Добавляем placeholder если включен guide
  if (guide && result.length < placeholder.length) {
    result += placeholder.slice(result.length)
  }

  return {
    value: result,
    displayValue: result,
    cursorPosition: Math.min(newCursorPosition, result.length),
  }
}

/**
 * Удаляет маску из значения
 * @param maskedValue - значение с маской
 * @param maskConfig - конфигурация маски
 * @returns значение без маски
 */
export function removeMask(maskedValue: string, maskConfig: MaskConfig): string {
  const { mask } = maskConfig
  
  if (!Array.isArray(mask)) {
    return maskedValue
  }

  let result = ''
  let maskIndex = 0

  for (let i = 0; i < maskedValue.length && maskIndex < mask.length; i++) {
    const char = maskedValue[i]
    const maskChar = mask[maskIndex]

    if (typeof maskChar === 'string') {
      // Пропускаем фиксированные символы маски
      if (char === maskChar) {
        maskIndex++
      }
    } else if (maskChar instanceof RegExp) {
      // Добавляем символы, соответствующие регулярному выражению
      if (maskChar.test(char)) {
        result += char
        maskIndex++
      }
    }
  }

  return result
}

/**
 * Получает позицию курсора в маске
 * @param value - значение
 * @param maskConfig - конфигурация маски
 * @param cursorPosition - позиция курсора в исходном значении
 * @returns позиция курсора в маске
 */
export function getMaskedCursorPosition(
  value: string,
  maskConfig: MaskConfig,
  cursorPosition: number
): number {
  const { mask } = maskConfig
  
  if (!Array.isArray(mask)) {
    return cursorPosition
  }

  let result = 0
  let valueIndex = 0

  for (let i = 0; i < mask.length && valueIndex < value.length; i++) {
    const maskChar = mask[i]
    
    if (typeof maskChar === 'string') {
      result++
    } else if (maskChar instanceof RegExp) {
      const char = value[valueIndex]
      if (maskChar.test(char)) {
        result++
        valueIndex++
        if (valueIndex >= cursorPosition) {
          break
        }
      } else {
        valueIndex++
      }
    }
  }

  return result
}

/**
 * Хук для работы с масками
 */
export function useInputMask(maskConfig: MaskConfig) {
  return {
    apply: (value: string, cursorPosition?: number) => applyMask(value, maskConfig, cursorPosition),
    remove: (value: string) => removeMask(value, maskConfig),
    getCursorPosition: (value: string, cursorPosition: number) => 
      getMaskedCursorPosition(value, maskConfig, cursorPosition),
  }
} 