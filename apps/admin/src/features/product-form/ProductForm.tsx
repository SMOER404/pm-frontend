import { observer } from 'mobx-react-lite'
import { useState, useEffect } from 'react'
import { ProductResponseDto, ProductVariantDto, CreateProductDto } from '@poizon/api'
import styles from './ProductForm.module.css'

interface ProductFormProps {
  product?: ProductResponseDto
  categories: any[]
  brands: any[]
  onSubmit: (product: CreateProductDto) => Promise<void>
  onCancel: () => void
}

interface ExtendedProductVariantDto {
  id: string;
  color: string;
  imageUrls: string[];
  sizesAndPrices: Record<string, number>;
  createdAt: string;
  updatedAt: string;
}

const ProductForm = observer(({ product, categories, brands, onSubmit, onCancel }: ProductFormProps) => {
  const [formData, setFormData] = useState<CreateProductDto>({
    name: '',
    description: '',
    category: '',
    brand: '',
    media: { images: [] }
  })
  const [variants, setVariants] = useState<ExtendedProductVariantDto[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (product) {
      setFormData({
        name: product.name,
        description: product.description || '',
        category: product.category,
        brand: product.brand,
        media: product.media
      })
      setVariants(product.variants.map(mapVariantToExtended))
    }
  }, [product])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleVariantChange = (index: number, field: keyof ExtendedProductVariantDto, value: any) => {
    setVariants(prev => {
      const newVariants = [...prev]
      if (!newVariants[index]) {
        newVariants[index] = createVariant()
      }
      newVariants[index] = { ...newVariants[index], [field]: value }
      return newVariants
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError(null)
    
    try {
      await onSubmit(formData)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Произошла ошибка при сохранении товара')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      {error && <div className={styles.error}>{error}</div>}
      
      <div className={styles.formGroup}>
        <label htmlFor="name">Название</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          disabled={isLoading}
        />
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="description">Описание</label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          rows={4}
          disabled={isLoading}
        />
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="category">Категория</label>
        <select
          id="category"
          name="category"
          value={formData.category}
          onChange={handleChange}
          required
          disabled={isLoading}
        >
          <option value="">Выберите категорию</option>
          {categories.map(category => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="brand">Бренд</label>
        <select
          id="brand"
          name="brand"
          value={formData.brand}
          onChange={handleChange}
          required
          disabled={isLoading}
        >
          <option value="">Выберите бренд</option>
          {brands.map(brand => (
            <option key={brand.id} value={brand.id}>
              {brand.name}
            </option>
          ))}
        </select>
      </div>

      <div className={styles.variants}>
        <h3>Варианты товара</h3>
        {variants.map((variant, index) => (
          <div key={index} className={styles.variant}>
            <div className={styles.formGroup}>
              <label>Цвет</label>
              <input
                type="text"
                value={variant.color || ''}
                onChange={(e) => handleVariantChange(index, 'color', e.target.value)}
                disabled={isLoading}
              />
            </div>
            <div className={styles.formGroup}>
              <label>Размеры и цены</label>
              <div className={styles.sizesAndPrices}>
                {Object.entries(variant.sizesAndPrices || {}).map(([size, price]) => (
                  <div key={size} className={styles.sizePrice}>
                    <input
                      type="text"
                      value={size}
                      onChange={(e) => {
                        const newSizesAndPrices = { ...variant.sizesAndPrices }
                        delete newSizesAndPrices[size]
                        newSizesAndPrices[e.target.value] = price
                        handleVariantChange(index, 'sizesAndPrices', newSizesAndPrices)
                      }}
                      disabled={isLoading}
                    />
                    <input
                      type="number"
                      value={price}
                      onChange={(e) => {
                        const newSizesAndPrices = { ...variant.sizesAndPrices }
                        newSizesAndPrices[size] = Number(e.target.value)
                        handleVariantChange(index, 'sizesAndPrices', newSizesAndPrices)
                      }}
                      disabled={isLoading}
                    />
                  </div>
                ))}
                <button
                  type="button"
                  onClick={() => {
                    const newSizesAndPrices = { ...variant.sizesAndPrices }
                    newSizesAndPrices[''] = 0
                    handleVariantChange(index, 'sizesAndPrices', newSizesAndPrices)
                  }}
                  disabled={isLoading}
                >
                  Добавить размер
                </button>
              </div>
            </div>
          </div>
        ))}
        <button
          type="button"
          onClick={() => {
            setVariants(prev => [...prev, createVariant()])
          }}
          disabled={isLoading}
        >
          Добавить вариант
        </button>
      </div>

      <div className={styles.buttons}>
        <button type="submit" className={styles.submitButton} disabled={isLoading}>
          {isLoading ? 'Сохранение...' : (product ? 'Сохранить' : 'Создать')}
        </button>
        <button type="button" className={styles.cancelButton} onClick={onCancel} disabled={isLoading}>
          Отмена
        </button>
      </div>
    </form>
  )
})

const mapVariantToExtended = (variant: ProductVariantDto): ExtendedProductVariantDto => {
  return {
    id: variant.id,
    color: variant.color,
    imageUrls: variant.imageUrls,
    sizesAndPrices: variant.sizesAndPrices as Record<string, number>,
    createdAt: variant.createdAt,
    updatedAt: variant.updatedAt
  };
};

const createVariant = (): ExtendedProductVariantDto => ({
  id: '',
  color: '',
  imageUrls: [],
  sizesAndPrices: {},
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
});

export default ProductForm 