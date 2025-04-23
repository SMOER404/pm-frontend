import { makeAutoObservable } from 'mobx'
import { ProductService } from '@/shared/api/product.service'

export interface Product {
  id: number
  name: string
  price: number
  description: string
  images: string[]
  category: string
  brand: string
  size: string
  color: string
  inStock: boolean
  createdAt: string
  updatedAt: string
  rating: number
  sizes: string[]
  colors: string[]
}

export class ProductStore {
  products: Product[] = []
  isLoading = false
  error: string | null = null
  filters = {
    category: '',
    brand: '',
    minPrice: 0,
    maxPrice: 0,
    size: '',
    color: ''
  }
  sortBy = 'price'
  private productService: ProductService

  constructor() {
    makeAutoObservable(this)
    const baseUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000'
    this.productService = new ProductService(baseUrl)
  }

  setProducts = (products: Product[]) => {
    this.products = products
  }

  setLoading = (loading: boolean) => {
    this.isLoading = loading
  }

  setError = (error: string | null) => {
    this.error = error
  }

  setFilters = (filters: Partial<typeof this.filters>) => {
    this.filters = { ...this.filters, ...filters }
  }

  setSortBy = (sortBy: string) => {
    this.sortBy = sortBy
  }

  async fetchProducts() {
    this.isLoading = true
    this.error = null
    try {
      const products = await this.productService.getProducts()
      this.products = products
    } catch (error) {
      this.error = error instanceof Error ? error.message : 'Произошла ошибка при загрузке товаров'
    } finally {
      this.isLoading = false
    }
  }

  async fetchProductById(id: number) {
    this.isLoading = true
    this.error = null
    try {
      return await this.productService.getProductById(id)
    } catch (error) {
      this.error = error instanceof Error ? error.message : 'Не удалось загрузить товар'
      return null
    } finally {
      this.isLoading = false
    }
  }

  get filteredProducts() {
    return this.products.filter(product => {
      if (this.filters.category && product.category !== this.filters.category) return false
      if (this.filters.brand && product.brand !== this.filters.brand) return false
      if (this.filters.minPrice && product.price < this.filters.minPrice) return false
      if (this.filters.maxPrice && product.price > this.filters.maxPrice) return false
      if (this.filters.size && !product.sizes.includes(this.filters.size)) return false
      if (this.filters.color && !product.colors.includes(this.filters.color)) return false
      return true
    }).sort((a, b) => {
      if (this.sortBy === 'price') return a.price - b.price
      if (this.sortBy === 'rating') return b.rating - a.rating
      return 0
    })
  }
}

export const productStore = new ProductStore() 