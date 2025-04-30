import { makeAutoObservable } from 'mobx'
import { api } from '@/shared/api'
import { BrandDto } from '@poizon/api'

export class BrandStore {
  brands: BrandDto[] = []
  isLoading = false
  error: string | null = null

  constructor() {
    makeAutoObservable(this)
  }

  async fetchBrandsByCategorySlug(categorySlug: string) {
    this.isLoading = true
    this.error = null

    try {
      const response = await api.brands.getAllBrands()
      // TODO: Добавить фильтрацию по категории, когда API будет поддерживать это
      this.brands = response.data
    } catch (error) {
      this.error = 'Ошибка при загрузке брендов'
      console.error('Error fetching brands:', error)
    } finally {
      this.isLoading = false
    }
  }
} 