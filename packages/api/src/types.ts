export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  brand: string;
  category: string;
  sizes: string[];
  colors: string[];
  images: string[];
  createdAt: string;
  updatedAt: string;
}

export interface CartItem {
  productId: string;
  quantity: number;
  size: string;
  color: string;
  product: Product;
}

export interface Cart {
  items: CartItem[];
  total: number;
}

export interface AuthResponse {
  token: string;
  user: {
    id: string;
    email: string;
    name: string;
  };
} 