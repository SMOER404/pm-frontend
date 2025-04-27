import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="mb-4">
              <Image
                src="/static/images/logo-white.svg"
                alt="POIZON MARKET"
                width={150}
                height={40}
                priority
              />
            </div>
            <p>
              Ваш надежный партнер в мире моды и стиля
            </p>
          </div>

          <div>
            <h4 className="text-lg font-medium mb-4">Каталог</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/catalog/men" className="hover:text-white">
                  Мужская одежда
                </Link>
              </li>
              <li>
                <Link href="/catalog/women" className="hover:text-white">
                  Женская одежда
                </Link>
              </li>
              <li>
                <Link href="/catalog/accessories" className="hover:text-white">
                  Аксессуары
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-medium mb-4">Информация</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="hover:text-white">
                  О нас
                </Link>
              </li>
              <li>
                <Link href="/delivery" className="hover:text-white">
                  Доставка
                </Link>
              </li>
              <li>
                <Link href="/returns" className="hover:text-white">
                  Возврат
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-medium mb-4">Контакты</h4>
            <ul className="space-y-2">
              <li>Телефон: +7 (999) 123-45-67</li>
              <li>Email: info@poizonmarket.ru</li>
              <li>Адрес: г. Москва, ул. Примерная, 1</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} POIZON MARKET. Все права защищены.</p>
        </div>
      </div>
    </footer>
  )
} 