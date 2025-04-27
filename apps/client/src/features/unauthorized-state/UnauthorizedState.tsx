import Link from 'next/link'

export const UnauthorizedState = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 text-center">
      <h2 className="text-xl font-medium mb-4">Доступ запрещен</h2>
      <p className="text-gray-500 mb-6">
        Для просмотра этой страницы необходимо авторизоваться
      </p>
      <Link
        href="/auth/login"
        className="inline-block bg-black text-white px-6 py-2 rounded-md hover:bg-gray-800 transition-colors"
      >
        Войти
      </Link>
    </div>
  )
} 