import { makeAutoObservable } from 'mobx'
import { RootStore } from './root-store'
import { CategoryDto } from '@poizon-market/api'

export class CategoryStore {
  categories: Map<string, CategoryDto> = new Map()
  rootStore: RootStore

  constructor(rootStore: RootStore) {
    makeAutoObservable(this)
    this.rootStore = rootStore
  }

  setCategories(categories: CategoryDto[]) {
    categories.forEach(category => {
      this.categories.set(category.id, category)
    })
  }

  getCategoryById(id: string): CategoryDto | undefined {
    return this.categories.get(id)
  }

  getChildCategories(parentId: string): CategoryDto[] {
    return Array.from(this.categories.values()).filter(
      category => category.parentId === parentId
    )
  }

  getRootCategories(): CategoryDto[] {
    return Array.from(this.categories.values()).filter(
      category => !category.parentId
    )
  }

  clear() {
    this.categories.clear()
  }
} 