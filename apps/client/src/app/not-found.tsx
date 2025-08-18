export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center space-y-6">
        <h1 className="text-6xl font-bold text-red-600">404</h1>
        <h2 className="text-3xl font-semibold text-gray-900">Страница не найдена</h2>
        <p className="text-lg text-gray-600">
          К сожалению, запрашиваемая страница не существует.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="/" 
            className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            На главную
          </a>
          <a 
            href="/catalog" 
            className="border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors"
          >
            Перейти в каталог
          </a>
        </div>
      </div>
    </div>
  )
} 