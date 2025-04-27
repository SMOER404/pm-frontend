import { ProductResponseDto, ProductVariantDto, CreateProductDto } from '@poizon/api'

export interface ExtendedProductVariantDto extends Omit<ProductVariantDto, 'sizesAndPrices'> {
  sizesAndPrices: Record<string, number>
}

export interface ProductFormProps {
  product?: ProductResponseDto
  categories: any[]
  brands: any[]
  onSubmit: (product: CreateProductDto) => Promise<void>
  onCancel: () => void
} 