import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">POIZON MARKET</h3>
            <p className="text-gray-400">
              Ваш надежный партнер в мире моды и стиля
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Каталог</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/catalog/men" className="text-gray-400 hover:text-white">
                  Мужская одежда
                </Link>
              </li>
              <li>
                <Link href="/catalog/women" className="text-gray-400 hover:text-white">
                  Женская одежда
                </Link>
              </li>
              <li>
                <Link href="/catalog/accessories" className="text-gray-400 hover:text-white">
                  Аксессуары
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Информация</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white">
                  О нас
                </Link>
              </li>
              <li>
                <Link href="/delivery" className="text-gray-400 hover:text-white">
                  Доставка
                </Link>
              </li>
              <li>
                <Link href="/returns" className="text-gray-400 hover:text-white">
                  Возврат
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Контакты</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Телефон: +7 (999) 123-45-67</li>
              <li>Email: info@poizonmarket.ru</li>
              <li>Адрес: г. Москва, ул. Примерная, 1</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} POIZON MARKET. Все права защищены.</p>
        </div>
      </div>
    </footer>
  )
} 