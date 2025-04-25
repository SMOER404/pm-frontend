import { makeAutoObservable } from 'mobx'
import { ProductsApi, Configuration, ProductResponseDto } from '@poizon/api'

export class ProductStore {
  products: ProductResponseDto[] = []
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
  private productsApi: ProductsApi

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

  setProducts = (products: ProductResponseDto[]) => {
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
      const response = await this.productsApi.getAllProducts()
      this.products = response.data
    } catch (error) {
      this.error = error instanceof Error ? error.message : 'Произошла ошибка при загрузке товаров'
    } finally {
      this.isLoading = false
    }
  }

  async fetchProductById(id: string) {
    this.isLoading = true
    this.error = null
    try {
      const response = await this.productsApi.getProductById(id)
      return response.data
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
      if (this.filters.minPrice && this.getMinPrice(product) < this.filters.minPrice) return false
      if (this.filters.maxPrice && this.getMaxPrice(product) > this.filters.maxPrice) return false
      if (this.filters.size && !this.hasSize(product, this.filters.size)) return false
      if (this.filters.color && !this.hasColor(product, this.filters.color)) return false
      return true
    }).sort((a, b) => {
      if (this.sortBy === 'price') return this.getMinPrice(a) - this.getMinPrice(b)
      if (this.sortBy === 'rating') return 0 // Рейтинг не реализован в API
      return 0
    })
  }

  private getMinPrice(product: ProductResponseDto): number {
    if (!product.variants || product.variants.length === 0) return 0
    return Math.min(...product.variants.map(v => v.priceCny))
  }

  private getMaxPrice(product: ProductResponseDto): number {
    if (!product.variants || product.variants.length === 0) return 0
    return Math.max(...product.variants.map(v => v.priceCny))
  }

  private hasSize(product: ProductResponseDto, size: string): boolean {
    if (!product.variants) return false
    return product.variants.some(v => v.size === size)
  }

  private hasColor(product: ProductResponseDto, color: string): boolean {
    if (!product.variants) return false
    return product.variants.some(v => v.color === color)
  }
}

export const productStore = new ProductStore() 