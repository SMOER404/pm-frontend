import { DefaultApi, AdminApi, BrandsApi, CartApi, CategoriesApi, OrdersApi, ReviewsApi, SearchApi, TagsApi, UserContentApi } from './api';
import { getApiConfig } from './api-config';

// Создаем экземпляры всех API клиентов с актуальной конфигурацией
const config = getApiConfig();

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