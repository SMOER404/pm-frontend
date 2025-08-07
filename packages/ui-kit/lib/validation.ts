// Система валидации для UI Kit

export type ValidationRule = {
  required?: boolean
  minLength?: number
  maxLength?: number
  pattern?: RegExp
  email?: boolean
  phone?: boolean
  url?: boolean
  numeric?: boolean
  integer?: boolean
  positive?: boolean
  custom?: (value: string) => string | null
}

export type ValidationResult = {
  isValid: boolean
  error?: string
}

export type ValidationSchema = Record<string, ValidationRule>

// Предустановленные паттерны
export const patterns = {
  email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  phone: /^[\+]?[1-9][\d]{0,15}$/,
  url: /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)$/,
  numeric: /^\d+(\.\d+)?$/,
  integer: /^\d+$/,
  positive: /^[1-9]\d*$/,
  password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d@$!%*?&]{8,}$/,
  username: /^[a-zA-Z0-9_]{3,20}$/,
}

// Сообщения об ошибках
export const errorMessages = {
  required: 'Это поле обязательно для заполнения',
  minLength: (min: number) => `Минимальная длина ${min} символов`,
  maxLength: (max: number) => `Максимальная длина ${max} символов`,
  pattern: 'Неверный формат',
  email: 'Введите корректный email',
  phone: 'Введите корректный номер телефона',
  url: 'Введите корректный URL',
  numeric: 'Введите число',
  integer: 'Введите целое число',
  positive: 'Введите положительное число',
  password: 'Пароль должен содержать минимум 8 символов, включая буквы и цифры',
  username: 'Имя пользователя должно содержать 3-20 символов (буквы, цифры, подчеркивания)',
}

/**
 * Валидирует значение по правилам
 * @param value - значение для валидации
 * @param rules - правила валидации
 * @returns результат валидации
 */
export function validate(value: string, rules: ValidationRule): ValidationResult {
  // Проверка на обязательность
  if (rules.required && (!value || value.trim() === '')) {
    return { isValid: false, error: errorMessages.required }
  }

  // Если значение пустое и не обязательное, считаем валидным
  if (!value || value.trim() === '') {
    return { isValid: true }
  }

  const trimmedValue = value.trim()

  // Проверка минимальной длины
  if (rules.minLength && trimmedValue.length < rules.minLength) {
    return { isValid: false, error: errorMessages.minLength(rules.minLength) }
  }

  // Проверка максимальной длины
  if (rules.maxLength && trimmedValue.length > rules.maxLength) {
    return { isValid: false, error: errorMessages.maxLength(rules.maxLength) }
  }

  // Проверка email
  if (rules.email && !patterns.email.test(trimmedValue)) {
    return { isValid: false, error: errorMessages.email }
  }

  // Проверка телефона
  if (rules.phone && !patterns.phone.test(trimmedValue.replace(/\s/g, ''))) {
    return { isValid: false, error: errorMessages.phone }
  }

  // Проверка URL
  if (rules.url && !patterns.url.test(trimmedValue)) {
    return { isValid: false, error: errorMessages.url }
  }

  // Проверка числового значения
  if (rules.numeric && !patterns.numeric.test(trimmedValue)) {
    return { isValid: false, error: errorMessages.numeric }
  }

  // Проверка целого числа
  if (rules.integer && !patterns.integer.test(trimmedValue)) {
    return { isValid: false, error: errorMessages.integer }
  }

  // Проверка положительного числа
  if (rules.positive && !patterns.positive.test(trimmedValue)) {
    return { isValid: false, error: errorMessages.positive }
  }

  // Проверка паттерна
  if (rules.pattern && !rules.pattern.test(trimmedValue)) {
    return { isValid: false, error: errorMessages.pattern }
  }

  // Кастомная валидация
  if (rules.custom) {
    const customError = rules.custom(trimmedValue)
    if (customError) {
      return { isValid: false, error: customError }
    }
  }

  return { isValid: true }
}

/**
 * Валидирует форму по схеме
 * @param values - значения формы
 * @param schema - схема валидации
 * @returns объект с ошибками
 */
export function validateForm(values: Record<string, string>, schema: ValidationSchema): Record<string, string> {
  const errors: Record<string, string> = {}

  Object.keys(schema).forEach(fieldName => {
    const value = values[fieldName] || ''
    const rules = schema[fieldName]
    const result = validate(value, rules)
    
    if (!result.isValid && result.error) {
      errors[fieldName] = result.error
    }
  })

  return errors
}

/**
 * Предустановленные схемы валидации
 */
export const validationSchemas = {
  email: { required: true, email: true },
  phone: { required: true, phone: true },
  password: { required: true, minLength: 8, pattern: patterns.password },
  username: { required: true, pattern: patterns.username },
  url: { url: true },
  number: { numeric: true },
  integer: { integer: true },
  positive: { positive: true },
} as const 