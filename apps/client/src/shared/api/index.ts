import { Configuration, CategoriesApi, BrandsApi, ProductsApi, RecommendationsApi } from '@poizon/api'

const config = new Configuration({
  basePath: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000',
})

const recConfig = new Configuration({
  basePath: process.env.RECOMMENDATIONS_API_URL || 'http://localhost:8000/api/v1',
})

export const api = {
  categories: new CategoriesApi(config),
  brands: new BrandsApi(config),
  products: new ProductsApi(config),
  recommendations: new RecommendationsApi(recConfig),
} 