import { config } from '../config';
import { ProductsApi, CategoriesApi, BrandsApi, Configuration } from '@poizon-market/api';
import axios from 'axios';

// Создаем экземпляр axios с перехватчиками
const axiosInstance = axios.create({
  baseURL: typeof window !== 'undefined' ? '' : config.api.baseUrl, // Используем относительный путь на клиенте
  headers: {
    'Content-Type': 'application/json',
  },
});

// Добавляем перехватчик для логирования запросов
axiosInstance.interceptors.request.use(
  (config) => {
    console.log('API Request:', config.method?.toUpperCase(), config.url);
    return config;
  },
  (error) => {
    console.error('API Request Error:', error);
    return Promise.reject(error);
  }
);

// Добавляем перехватчик для логирования ответов
axiosInstance.interceptors.response.use(
  (response) => {
    console.log('API Response:', response.status, response.config.url);
    return response;
  },
  (error) => {
    console.error('API Response Error:', error.response?.status, error.config?.url, error.response?.data);
    return Promise.reject(error);
  }
);

// Создаем конфигурацию для API
const configuration = new Configuration({
  basePath: config.api.baseUrl,
  baseOptions: {
    withCredentials: true
  }
});

// Создаем экземпляры API клиентов
export const productsApi = new ProductsApi(configuration);
export const categoriesApi = new CategoriesApi(configuration);
export const brandsApi = new BrandsApi(configuration); 