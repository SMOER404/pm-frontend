import { useState, useEffect } from 'react'
import { Spinner } from '@/shared/ui/Spinner'
import { Fallback } from '@/shared/ui/Fallback'

export const ProductList = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [products, setProducts] = useState([])

  useEffect(() => {
    // Имитация загрузки данных
    const fetchProducts = async () => {
      try {
        setIsLoading(true)
        // Здесь будет реальный API запрос
        await new Promise(resolve => setTimeout(resolve, 2000))
        setProducts([])
      } finally {
        setIsLoading(false)
      }
    }

    fetchProducts()
  }, [])

  if (isLoading) {
    return <Fallback />
  }

  return (
    <div>
      {/* Содержимое списка продуктов */}
      <button 
        className="flex items-center gap-2 px-4 py-2 bg-black text-white rounded-md"
        onClick={() => setIsLoading(true)}
      >
        {isLoading ? (
          <>
            <Spinner size={20} />
            <span>Загрузка...</span>
          </>
        ) : (
          <span>Загрузить еще</span>
        )}
      </button>
    </div>
  )
} 