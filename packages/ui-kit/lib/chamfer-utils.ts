import { tokens, type ChamferToken } from './design-tokens'

/**
 * Создает clip-path для внешней рамки со скошенными углами
 * @param size - размер скоса (xs, sm, md, lg, xl)
 * @returns CSS clip-path значение
 */
export const createOuterChamferClipPath = (size: ChamferToken): string => {
  const chamferSize = tokens.chamfer[size]
  const numericSize = parseInt(chamferSize)
  
  return `polygon(${numericSize}px 0px, 100% 0px, 100% calc(100% - ${numericSize}px), calc(100% - ${numericSize}px) 100%, 0px 100%, 0px ${numericSize}px)`
}

/**
 * Создает clip-path для внутреннего контента со скошенными углами
 * @param size - размер скоса (xs, sm, md, lg, xl)
 * @param borderWidth - толщина рамки (по умолчанию 1px)
 * @returns CSS clip-path значение
 */
export const createInnerChamferClipPath = (size: ChamferToken, borderWidth: number = 1): string => {
  const chamferSize = tokens.chamfer[size]
  const numericSize = parseInt(chamferSize)
  
  return `polygon(calc(${numericSize}px + ${borderWidth}px) ${borderWidth}px, calc(100% - ${borderWidth}px) ${borderWidth}px, calc(100% - ${borderWidth}px) calc(100% - ${numericSize}px - ${borderWidth}px), calc(100% - ${numericSize}px - ${borderWidth}px) calc(100% - ${borderWidth}px), ${borderWidth}px calc(100% - ${borderWidth}px), ${borderWidth}px calc(${numericSize}px + ${borderWidth}px))`
}

/**
 * Создает стили для компонента со скошенными углами
 * @param size - размер скоса
 * @param borderColor - цвет рамки
 * @param borderWidth - толщина рамки
 * @returns объект со стилями для внешней и внутренней части
 */
export const createChamferStyles = (
  size: ChamferToken,
  borderColor: string = tokens.colors.primary.DEFAULT,
  borderWidth: number = 1
) => {
  return {
    outer: {
      clipPath: createOuterChamferClipPath(size),
      backgroundColor: borderColor,
    },
    inner: {
      clipPath: createInnerChamferClipPath(size, borderWidth),
    },
  }
}

/**
 * Получает размер скоса на основе размера компонента
 * @param componentSize - размер компонента (xs, sm, md, lg, xl)
 * @returns размер скоса
 */
export const getChamferSizeFromComponentSize = (componentSize: string): ChamferToken => {
  switch (componentSize) {
    case 'xs': return 'xs'
    case 'sm': return 'sm'
    case 'lg': return 'lg'
    case 'xl': return 'xl'
    default: return 'md'
  }
}

/**
 * Создает CSS классы для скошенных углов
 * @param size - размер скоса
 * @returns объект с CSS классами
 */
export const createChamferClasses = (size: ChamferToken) => {
  const chamferSize = tokens.chamfer[size]
  const numericSize = parseInt(chamferSize)
  
  return {
    outer: `[clip-path:polygon(${numericSize}px_0px,100%_0px,100%_calc(100%-${numericSize}px),calc(100%-${numericSize}px)_100%,0px_100%,0px_${numericSize}px)]`,
    inner: `[clip-path:polygon(calc(${numericSize}px+1px)_1px,calc(100%-1px)_1px,calc(100%-1px)_calc(100%-${numericSize}px-1px),calc(100%-${numericSize}px-1px)_calc(100%-1px),1px_calc(100%-1px),1px_calc(${numericSize}px+1px))]`,
  }
} 