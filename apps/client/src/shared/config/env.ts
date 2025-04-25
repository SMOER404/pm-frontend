/**
 * Конфигурация переменных окружения
 * Все переменные должны быть определены в .env файле
 */

// API
export const API_URL = process.env.NEXT_PUBLIC_API_URL! || 'http://localhost:3001'
export const API_VERSION = process.env.NEXT_PUBLIC_API_VERSION || 'v1'

// Платежные системы
export const YOOMONEY_ID = process.env.NEXT_PUBLIC_YOOMONEY_ID! || ''
export const YOOMONEY_REDIRECT_URL = process.env.NEXT_PUBLIC_YOOMONEY_REDIRECT_URL! || ''

// Сайт
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://poizon-market.ru'
export const SITE_NAME = process.env.NEXT_PUBLIC_SITE_NAME || 'POIZON MARKET'
export const SITE_DESCRIPTION = process.env.NEXT_PUBLIC_SITE_DESCRIPTION || 'Магазин стильной одежды'

// Социальные сети
export const VK_APP_ID = process.env.NEXT_PUBLIC_VK_APP_ID! || ''
export const VK_APP_SECRET = process.env.NEXT_PUBLIC_VK_APP_SECRET! || ''

// Аналитика
export const YANDEX_METRIKA_ID = process.env.NEXT_PUBLIC_YANDEX_METRIKA_ID! || ''

// Проверка наличия обязательных переменных
const requiredEnvVars = [
  'NEXT_PUBLIC_API_URL',
  'NEXT_PUBLIC_YOOMONEY_ID',
  'NEXT_PUBLIC_YOOMONEY_REDIRECT_URL',
  'NEXT_PUBLIC_VK_APP_ID',
  'NEXT_PUBLIC_VK_APP_SECRET',
] as const

// TODO посмотреть эту шляпу
// for (const envVar of requiredEnvVars) {
//   if (!process.env[envVar]) {
//     throw new Error(`Missing required environment variable: ${envVar}`)
//   }
// }

// Типы для переменных окружения
declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NEXT_PUBLIC_API_URL: string
      NEXT_PUBLIC_API_VERSION?: string
      NEXT_PUBLIC_YOOMONEY_ID: string
      NEXT_PUBLIC_YOOMONEY_REDIRECT_URL: string
      NEXT_PUBLIC_SITE_URL?: string
      NEXT_PUBLIC_SITE_NAME?: string
      NEXT_PUBLIC_SITE_DESCRIPTION?: string
      NEXT_PUBLIC_VK_APP_ID: string
      NEXT_PUBLIC_VK_APP_SECRET: string
      NEXT_PUBLIC_YANDEX_METRIKA_ID?: string
    }
  }
} 