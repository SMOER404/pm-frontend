import axios, { AxiosInstance } from 'axios';

interface ServiceConfig {
  BASE: string;
}

export class CartService {
  private api: AxiosInstance;

  constructor(config: ServiceConfig) {
    this.api = axios.create({
      baseURL: config.BASE,
      withCredentials: true
    });
  }

  async cartControllerGetCart() {
    const response = await this.api.get('/cart');
    return response.data;
  }

  async cartControllerAddItem(data: {
    productId: string;
    quantity: number;
    size: string;
    color: string;
  }) {
    const response = await this.api.post('/cart/items', data);
    return response.data;
  }

  async cartControllerRemoveItem(data: {
    productId: string;
    size: string;
    color: string;
  }) {
    const response = await this.api.delete('/cart/items', { data });
    return response.data;
  }

  async cartControllerUpdateQuantity(data: {
    productId: string;
    size: string;
    color: string;
    quantity: number;
  }) {
    const response = await this.api.patch('/cart/items', data);
    return response.data;
  }

  async cartControllerClearCart() {
    const response = await this.api.delete('/cart');
    return response.data;
  }
}

export class ProductService {
  private api: AxiosInstance;

  constructor(config: ServiceConfig) {
    this.api = axios.create({
      baseURL: config.BASE,
      withCredentials: true
    });
  }

  async productControllerGetAll(params?: {
    category?: string;
    brand?: string;
    minPrice?: number;
    maxPrice?: number;
    size?: string;
    color?: string;
    sortBy?: string;
  }) {
    const response = await this.api.get('/products', { params });
    return response.data;
  }

  async productControllerGetById(params: { id: string }) {
    const response = await this.api.get(`/products/${params.id}`);
    return response.data;
  }
}

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000',
  withCredentials: true
});

// Добавляем перехватчик для токена
api.interceptors.request.use((config) => {
  if (typeof window !== 'undefined') {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
  }
  return config;
});

export const auth = {
  login: async (data: { email: string; password: string }) => {
    const response = await api.post('/auth/login', data);
    return response.data;
  },
  register: async (data: { name: string; email: string; password: string }) => {
    const response = await api.post('/auth/register', data);
    return response.data;
  },
  me: async () => {
    const response = await api.get('/auth/me');
    return response.data;
  }
}; 