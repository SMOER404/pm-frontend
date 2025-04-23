import { Product } from '@/shared/stores/product.store'

export class ProductService {
  private baseUrl: string

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl
  }

  async getProducts(): Promise<Product[]> {
    const response = await fetch(`${this.baseUrl}/products`)
    if (!response.ok) {
      throw new Error('Failed to fetch products')
    }
    return response.json()
  }

  async getPopularProducts(): Promise<Product[]> {
    const response = await fetch(`${this.baseUrl}/products/popular`)
    if (!response.ok) {
      throw new Error('Failed to fetch popular products')
    }
    return response.json()
  }

  async getProductById(id: number): Promise<Product> {
    const response = await fetch(`${this.baseUrl}/products/${id}`)
    if (!response.ok) {
      throw new Error('Failed to fetch product')
    }
    return response.json()
  }
} 