import { Configuration, CategoriesApi, BrandsApi, ProductsApi } from '@poizon/api'

const config = new Configuration({
  basePath: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000',
})

export const api = {
  categories: new CategoriesApi(config),
  brands: new BrandsApi(config),
  products: new ProductsApi(config),
} 