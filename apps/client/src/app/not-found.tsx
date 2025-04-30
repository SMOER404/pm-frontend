import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Страница не найдена | POIZON MARKET',
  description: 'Запрашиваемая страница не найдена',
}

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center px-4">
      <h1 className="text-4xl font-bold mb-4">404</h1>
      <h2 className="text-2xl mb-6">Страница не найдена</h2>
      <p className="text-gray-600 mb-8 text-center">
        К сожалению, запрашиваемая страница не существует или была удалена
      </p>
      <Link 
        href="/"
        className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
      >
        Вернуться на главную
      </Link>
    </div>
  )
} 