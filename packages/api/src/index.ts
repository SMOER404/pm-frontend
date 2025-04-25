import { Configuration, DefaultApi, AdminApi, BrandsApi, CartApi, CategoriesApi, OrdersApi, ReviewsApi, SearchApi, TagsApi, UserContentApi } from './api';

const config = new Configuration({
  basePath: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000',
  baseOptions: {
    withCredentials: true,
  },
});

// Добавляем перехватчик для токена
if (typeof window !== 'undefined') {
  const token = localStorage.getItem('token');
  if (token) {
    config.baseOptions = {
      ...config.baseOptions,
      headers: {
        ...config.baseOptions?.headers,
        Authorization: `Bearer ${token}`,
      },
    };
  }
}

// Создаем экземпляры всех API клиентов
export const defaultApi = new DefaultApi(config);
export const adminApi = new AdminApi(config);
export const brandsApi = new BrandsApi(config);
export const cartApi = new CartApi(config);
export const categoriesApi = new CategoriesApi(config);
export const ordersApi = new OrdersApi(config);
export const reviewsApi = new ReviewsApi(config);
export const searchApi = new SearchApi(config);
export const tagsApi = new TagsApi(config);
export const userContentApi = new UserContentApi(config);

// Реэкспортируем все типы из сгенерированного API
export * from './api'; 