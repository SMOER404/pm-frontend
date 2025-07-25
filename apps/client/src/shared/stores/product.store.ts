import { makeAutoObservable } from 'mobx'
import { ProductsApi, Configuration, ProductResponseDto } from '@poizon/api'

interface ProductFilters {
  category: string
  brand: string
  minPrice?: number
  maxPrice?: number
}

export class ProductStore {
  products: ProductResponseDto[] = []
  isLoading = false
  error: string | null = null
  filters: ProductFilters = {
    category: '',
    brand: '',
  }
  sortBy = 'price'
  pagination = {
    currentPage: 1,
    itemsPerPage: 12,
    totalItems: 0,
    totalPages: 0
  }
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

  setProducts = (products: ProductResponseDto[], totalItems: number) => {
    this.products = products
    this.pagination.totalItems = totalItems
    this.pagination.totalPages = Math.ceil(totalItems / this.pagination.itemsPerPage)
  }

  setLoading = (loading: boolean) => {
    this.isLoading = loading
  }

  setError = (error: string | null) => {
    this.error = error
  }

  setFilters = (filters: Partial<ProductFilters>) => {
    this.filters = { ...this.filters, ...filters }
    this.pagination.currentPage = 1 // Сброс на первую страницу при изменении фильтров
  }

  setSortBy = (sortBy: string) => {
    this.sortBy = sortBy
    this.pagination.currentPage = 1 // Сброс на первую страницу при изменении сортировки
  }

  setCurrentPage = (page: number) => {
    this.pagination.currentPage = page
  }

  get paginatedProducts() {
    const startIndex = (this.pagination.currentPage - 1) * this.pagination.itemsPerPage
    const endIndex = startIndex + this.pagination.itemsPerPage
    return this.filteredProducts.slice(startIndex, endIndex)
  }

  async fetchProducts() {
    this.isLoading = true
    this.error = null
    try {
      const response = await this.productsApi.getAllProducts({
        params: {
          page: this.pagination.currentPage,
          limit: this.pagination.itemsPerPage
        }
      })
      this.products = response.data.items
      this.pagination.totalItems = response.data.total
      this.pagination.totalPages = response.data.totalPages
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

  private getMinPrice(product: ProductResponseDto): number {
    if (!product.variants || product.variants.length === 0) return 0
    return Math.min(...product.variants.map(v => {
      const prices = Object.values((v.sizesAndPrices as Record<string, number>) || {})
      return Math.min(...prices)
    }))
  }

  private getMaxPrice(product: ProductResponseDto): number {
    if (!product.variants || product.variants.length === 0) return 0
    return Math.max(...product.variants.map(v => {
      const prices = Object.values((v.sizesAndPrices as Record<string, number>) || {})
      return Math.max(...prices)
    }))
  }

  get filteredProducts() {
    return this.products.filter(product => {
      if (this.filters.category && product.category !== this.filters.category) {
        return false
      }
      if (this.filters.brand && product.brand !== this.filters.brand) {
        return false
      }
      if (this.filters.minPrice && this.getMinPrice(product) < this.filters.minPrice) {
        return false
      }
      if (this.filters.maxPrice && this.getMaxPrice(product) > this.filters.maxPrice) {
        return false
      }
      return true
    }).sort((a, b) => {
      if (this.sortBy === 'price') return this.getMinPrice(a) - this.getMinPrice(b)
      if (this.sortBy === 'name') return a.name.localeCompare(b.name)
      if (this.sortBy === 'newest') return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      return 0
    })
  }
}

export const productStore = new ProductStore() 