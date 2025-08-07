import { Configuration } from '@poizon/api/src/api'
import { CategoriesApi } from '@poizon/api/src/api/services/categories-api'
import { BrandsApi } from '@poizon/api/src/api/services/brands-api'
import { ProductsApi } from '@poizon/api/src/api/services/products-api'
import { RecommendationsApi } from '@poizon/api/src/recommendations-api'

const config = new Configuration({
  basePath: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000',
})

const recConfig = new Configuration({
  basePath: process.env.RECOMMENDATIONS_API_URL || 'http://localhost:8000',
})

export const api = {
  categories: new CategoriesApi(config),
  brands: new BrandsApi(config),
  products: new ProductsApi(config),
  recommendations: new RecommendationsApi(recConfig),
} 