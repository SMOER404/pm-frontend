import { makeAutoObservable } from 'mobx'
import { RootStore } from './root-store'
import { ProductDto, ProductVariantDto } from '@poizon/api'

export class ProductStore {
  products: Map<string, ProductDto> = new Map()
  variants: Map<string, ProductVariantDto> = new Map()
  rootStore: RootStore

  constructor(rootStore: RootStore) {
    makeAutoObservable(this)
    this.rootStore = rootStore
  }

  setProducts(products: ProductDto[]) {
    products.forEach(product => {
      this.products.set(product.id, product)
    })
  }

  getProductById(id: string): ProductDto | undefined {
    return this.products.get(id)
  }

  getVariantById(id: string): ProductVariantDto | undefined {
    return this.variants.get(id)
  }

  getProductsByCategory(categoryId: string): ProductDto[] {
    return Array.from(this.products.values()).filter(
      product => product.categoryId === categoryId
    )
  }

  getProductsByBrand(brandId: string): ProductDto[] {
    return Array.from(this.products.values()).filter(
      product => product.brandId === brandId
    )
  }

  clear() {
    this.products.clear()
    this.variants.clear()
  }
} 