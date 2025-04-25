import { makeAutoObservable } from 'mobx'
import { ProductsApi, Configuration, ProductResponseDto } from '@poizon/api'

export class ProductStore {
  products: ProductResponseDto[] = []
  productsApi: ProductsApi

  constructor() {
    makeAutoObservable(this)
    const baseUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000'
    const config = new Configuration({
      basePath: baseUrl,
      baseOptions: {
        withCredentials: true
      }
    })
    this.productsApi = new ProductsApi(config)
  }

  // ... existing code ...
} 