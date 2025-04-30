import { makeAutoObservable } from 'mobx'
import { api } from '@/shared/api'
import { CategoryDto } from '@poizon/api'

export class CategoryStore {
  category: CategoryDto | null = null
  isLoading = false
  error: string | null = null

  constructor() {
    makeAutoObservable(this)
  }

  async fetchCategoryBySlug(slug: string) {
    this.isLoading = true
    this.error = null

    try {
      const response = await api.categories.getAllCategories()
      this.category = response.data.find(c => c.slug === slug) || null
      
      if (!this.category) {
        this.error = 'Категория не найдена'
      }
    } catch (error) {
      this.error = 'Ошибка при загрузке категории'
      console.error('Error fetching category:', error)
    } finally {
      this.isLoading = false
    }
  }
} 