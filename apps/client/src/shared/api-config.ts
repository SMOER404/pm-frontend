import { Configuration } from '@poizon/api';

// Создаем базовую конфигурацию
const baseConfig = new Configuration({
  basePath: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000',
  baseOptions: {
    withCredentials: true,
  },
});

// Функция для получения конфигурации с актуальным токеном
export function getApiConfig(): Configuration {
  const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null;
  
  if (token) {
    return new Configuration({
      ...baseConfig,
      baseOptions: {
        ...baseConfig.baseOptions,
        headers: {
          ...baseConfig.baseOptions?.headers,
          Authorization: `Bearer ${token}`,
        },
      },
    });
  }
  
  return baseConfig;
}

// Функция для обновления конфигурации API клиентов
export function updateApiConfig(): void {
  if (typeof window !== 'undefined') {
    const token = localStorage.getItem('token');
    if (token) {
      baseConfig.baseOptions = {
        ...baseConfig.baseOptions,
        headers: {
          ...baseConfig.baseOptions?.headers,
          Authorization: `Bearer ${token}`,
        },
      };
    } else {
      baseConfig.baseOptions = {
        ...baseConfig.baseOptions,
        headers: {
          ...baseConfig.baseOptions?.headers,
          Authorization: undefined,
        },
      };
    }
  }
} 