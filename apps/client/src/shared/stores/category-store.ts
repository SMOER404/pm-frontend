import { makeAutoObservable } from 'mobx'
import { RootStore } from './root-store'
import {CategoryDto} from '@poizon/api'
import {api} from "@/shared/api";

export class CategoryStore {
  categories: Array<CategoryDto> = []
  rootStore: RootStore

  constructor(rootStore: RootStore) {
    makeAutoObservable(this)
    this.rootStore = rootStore
  }

  async getAllCategories() {
    return api.categories.getAllCategories()
        .then((result) => {
          console.log('getAllCategories result',result.data.filter((category) => !category.parentId))
          if (result.status === 200) {
            this.categories = result.data
          }
        })
        .catch((err) => console.log('err fetch categories error', err))
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
} 