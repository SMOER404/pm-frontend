import { observer } from 'mobx-react-lite'
import Layout from '@/components/layout/Layout'
import { cartStore } from '@/shared/stores/cart.store'

const CartPage = observer(() => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Корзина</h1>

        {cartStore.items.length === 0 ? (
          <div className="bg-white rounded-lg shadow-md p-8 text-center">
            <svg
              className="w-16 h-16 text-gray-400 mx-auto mb-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            <h2 className="text-xl font-medium mb-2">Корзина пуста</h2>
            <p className="text-gray-600 mb-6">
              Добавьте товары в корзину, чтобы оформить заказ
            </p>
            <a
              href="/catalog"
              className="btn btn-primary"
            >
              Перейти в каталог
            </a>
          </div>
        ) : (
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Cart Items */}
            <div className="flex-1">
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="divide-y">
                  {cartStore.items.map((item) => (
                    <div
                      key={`${item.id}-${item.size}-${item.color}`}
                      className="p-6"
                    >
                      <div className="flex gap-6">
                        <div className="w-24 h-24 flex-shrink-0">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-full h-full object-cover rounded-md"
                          />
                        </div>
                        <div className="flex-1">
                          <div className="flex justify-between">
                            <div>
                              <h3 className="font-medium">{item.name}</h3>
                              <p className="text-gray-600">
                                Размер: {item.size} | Цвет: {item.color}
                              </p>
                            </div>
                            <p className="font-bold">{item.price} ₽</p>
                          </div>
                          <div className="mt-4 flex items-center justify-between">
                            <div className="flex items-center">
                              <button
                                className="w-8 h-8 flex items-center justify-center border rounded-l-md hover:bg-gray-100"
                                onClick={() =>
                                  cartStore.updateQuantity(
                                    item.id,
                                    item.size,
                                    item.color,
                                    Math.max(1, item.quantity - 1)
                                  )
                                }
                              >
                                -
                              </button>
                              <input
                                type="number"
                                min="1"
                                value={item.quantity}
                                onChange={(e) =>
                                  cartStore.updateQuantity(
                                    item.id,
                                    item.size,
                                    item.color,
                                    Math.max(1, parseInt(e.target.value) || 1)
                                  )
                                }
                                className="w-16 h-8 text-center border-t border-b"
                              />
                              <button
                                className="w-8 h-8 flex items-center justify-center border rounded-r-md hover:bg-gray-100"
                                onClick={() =>
                                  cartStore.updateQuantity(
                                    item.id,
                                    item.size,
                                    item.color,
                                    item.quantity + 1
                                  )
                                }
                              >
                                +
                              </button>
                            </div>
                            <button
                              className="text-red-600 hover:text-red-700"
                              onClick={() =>
                                cartStore.removeItem(item.id, item.size, item.color)
                              }
                            >
                              Удалить
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Order Summary */}
            <div className="w-full lg:w-80">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-xl font-bold mb-6">Итого</h2>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Товары ({cartStore.totalItems})</span>
                    <span>{cartStore.totalPrice} ₽</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Доставка</span>
                    <span>Бесплатно</span>
                  </div>
                  <div className="border-t pt-4">
                    <div className="flex justify-between font-bold">
                      <span>Итого</span>
                      <span>{cartStore.totalPrice} ₽</span>
                    </div>
                  </div>
                </div>
                <button
                  className="btn btn-primary w-full mt-6"
                  onClick={() => {
                    // Здесь будет логика оформления заказа
                  }}
                >
                  Оформить заказ
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </Layout>
  )
})

export default CartPage 