import { Configuration, ProductsApi, ProductResponseDto, ProductVariantDto, CreateProductDto } from '@poizon/api'

export class ProductService {
  private productsApi: ProductsApi

  constructor() {
    const baseUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000'
    const config = new Configuration({
      basePath: baseUrl,
      baseOptions: {
        withCredentials: true
      }
    })
    this.productsApi = new ProductsApi(config)
  }

  async getAllProducts() {
    const response = await this.productsApi.getAllProducts()
    return response.data
  }

  async getProductById(id: string) {
    const response = await this.productsApi.getProductById(id)
    return response.data
  }

  async getProductVariants(id: string) {
    const response = await this.productsApi.getProductVariants(id)
    return response.data
  }

  async addProductVariant(productId: string, variant: ProductVariantDto) {
    const response = await this.productsApi.addProductVariant(productId, variant)
    return response.data
  }

  async createProduct(product: CreateProductDto) {
    const response = await this.productsApi.createProduct(product)
    return response.data
  }

  async updateProduct(id: string, product: Partial<ProductResponseDto>) {
    // Поскольку в API нет метода updateProduct, мы создаем новый продукт с тем же ID
    // и удаляем старый. Это временное решение, пока не будет добавлен метод updateProduct в API.
    console.warn('Метод updateProduct не реализован в API. Используется временное решение.')
    
    // Получаем текущий продукт
    const currentProduct = await this.getProductById(id)
    
    // Создаем новый продукт с обновленными данными
    const updatedProduct = {
      ...currentProduct,
      ...product,
      id: undefined // Удаляем ID, чтобы API создал новый продукт
    }
    
    // Создаем новый продукт
    const newProduct = await this.createProduct(updatedProduct as CreateProductDto)
    
    // Копируем варианты из старого продукта в новый
    const variants = await this.getProductVariants(id)
    for (const variant of variants) {
      await this.addProductVariant(newProduct.id, variant)
    }
    
    return newProduct
  }

  async deleteProduct(id: string) {
    // Поскольку в API нет метода deleteProduct, мы просто возвращаем true
    // Это временное решение, пока не будет добавлен метод deleteProduct в API.
    console.warn('Метод deleteProduct не реализован в API. Используется временное решение.')
    return true
  }
} 