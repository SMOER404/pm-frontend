const DEFAULT_API_URL = 'http://localhost:3000';
const DEFAULT_APP_URL = 'http://localhost:3001';

export const API_URL = process.env.NEXT_PUBLIC_API_URL || DEFAULT_API_URL;
export const APP_URL = process.env.NEXT_PUBLIC_APP_URL || DEFAULT_APP_URL;

export const config = {
  api: {
    baseUrl: API_URL,
    endpoints: {
      products: '/products',
      categories: '/categories',
      cart: '/cart',
      orders: '/orders',
      auth: '/auth',
    },
  },
  app: {
    baseUrl: APP_URL,
  },
}; 