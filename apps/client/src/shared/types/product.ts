import { ProductDto } from '@poizon/api'

export interface ExtendedProductDto extends ProductDto {
  description?: string
  price: number
  inStock: boolean
  category: {
    id: string
    name: string
    slug: string
  }
} 