import { useState, useEffect } from 'react'
import { api } from '@poizon/api'
import { OrderDto } from '@poizon/api/models/order-dto'

export const OrderHistory = () => {
  const [orders, setOrders] = useState<OrderDto[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await api.orders.getOrders()
        setOrders(response)
      } catch (err) {
        setError('Ошибка при загрузке заказов')
      } finally {
        setLoading(false)
      }
    }

    fetchOrders()
  }, [])

  if (loading) {
    return (
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="animate-pulse">
          <div className="h-4 bg-gray-200 rounded w-1/4 mb-4"></div>
          <div className="space-y-3">
            <div className="h-4 bg-gray-200 rounded"></div>
            <div className="h-4 bg-gray-200 rounded"></div>
            <div className="h-4 bg-gray-200 rounded"></div>
          </div>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
          {error}
        </div>
      </div>
    )
  }

  if (orders.length === 0) {
    return (
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-medium mb-4">История заказов</h2>
        <p className="text-gray-500">У вас пока нет заказов</p>
      </div>
    )
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-medium mb-6">История заказов</h2>
      <div className="space-y-4">
        {orders.map((order) => (
          <div
            key={order.id}
            className="border rounded-lg p-4 hover:shadow-md transition-shadow"
          >
            <div className="flex justify-between items-start mb-4">
              <div>
                <p className="font-medium">Заказ #{order.id}</p>
                <p className="text-sm text-gray-500">
                  {new Date(order.createdAt).toLocaleDateString('ru-RU')}
                </p>
              </div>
              <span
                className={`px-3 py-1 rounded-full text-sm ${
                  order.status === 'COMPLETED'
                    ? 'bg-green-100 text-green-800'
                    : order.status === 'PENDING'
                    ? 'bg-yellow-100 text-yellow-800'
                    : 'bg-gray-100 text-gray-800'
                }`}
              >
                {order.status === 'COMPLETED'
                  ? 'Выполнен'
                  : order.status === 'PENDING'
                  ? 'В обработке'
                  : 'Отменен'}
              </span>
            </div>
            <div className="space-y-2">
              {order.items.map((item) => (
                <div key={item.id} className="flex justify-between">
                  <div>
                    <p className="font-medium">{item.product.name}</p>
                    <p className="text-sm text-gray-500">
                      Размер: {item.size} | Цвет: {item.color}
                    </p>
                  </div>
                  <p className="font-medium">{item.price} ₽</p>
                </div>
              ))}
            </div>
            <div className="mt-4 pt-4 border-t flex justify-between items-center">
              <p className="text-gray-500">Итого:</p>
              <p className="text-xl font-medium">{order.total} ₽</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
} 