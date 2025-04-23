import Link from 'next/link'
import { observer } from 'mobx-react-lite'
import { useRouter } from 'next/router'
import { authStore } from '@/shared/stores/auth.store'
import { cartStore } from '@/shared/stores/cart.store'

// Определяем интерфейс для пользователя
interface User {
  name: string;
  email: string;
  [key: string]: any;
}

const Header = observer(() => {
  const router = useRouter()

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-primary-600">
            POIZON MARKET
          </Link>

          <nav className="hidden md:flex space-x-8">
            <Link href="/catalog" className="text-gray-600 hover:text-primary-600">
              Каталог
            </Link>
            <Link href="/brands" className="text-gray-600 hover:text-primary-600">
              Бренды
            </Link>
            <Link href="/about" className="text-gray-600 hover:text-primary-600">
              О нас
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <Link href="/cart" className="relative">
              <span className="sr-only">Корзина</span>
              <svg
                className="h-6 w-6 text-gray-600"
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
              {cartStore.totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-primary-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartStore.totalItems}
                </span>
              )}
            </Link>

            {authStore.isAuthenticated ? (
              <div className="relative group">
                <button className="flex items-center space-x-2 text-gray-600 hover:text-primary-600">
                  <span>{authStore.user ? (authStore.user as User).name : 'Пользователь'}</span>
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                <div className="absolute right-0 w-48 mt-2 py-2 bg-white rounded-md shadow-xl hidden group-hover:block">
                  <Link
                    href="/profile"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                  >
                    Профиль
                  </Link>
                  <Link
                    href="/orders"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                  >
                    Заказы
                  </Link>
                  <button
                    onClick={() => authStore.logout()}
                    className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100"
                  >
                    Выйти
                  </button>
                </div>
              </div>
            ) : (
              <div className="flex items-center space-x-4">
                <Link
                  href="/login"
                  className="text-gray-600 hover:text-primary-600"
                >
                  Войти
                </Link>
                <Link
                  href="/register"
                  className="bg-primary-600 text-white px-4 py-2 rounded-md hover:bg-primary-700"
                >
                  Регистрация
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  )
})

export default Header 