import { makeAutoObservable } from 'mobx'
import { RootStore } from './root-store'
import { ProductDto, ProductVariantDto } from '@poizon-market/api'

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
      product.variants?.forEach(variant => {
        this.variants.set(variant.id, variant)
      })
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
      product => product.category.id === categoryId
    )
  }

  getProductsByBrand(brandId: string): ProductDto[] {
    return Array.from(this.products.values()).filter(
      product => product.brand.id === brandId
    )
  }

  clear() {
    this.products.clear()
    this.variants.clear()
  }
} 