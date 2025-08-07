"use client"

import CustomCard from "./custom-card"
import CustomButton from "./custom-button"
import CustomInput from "./custom-input"
import { User, Heart, Share, Star, ShoppingCart, Eye, Settings, Bell } from "lucide-react"

export default function CardDemo() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-[#292D30] mb-4">Карточки со скосами</h1>
          <p className="text-gray-600">Универсальные контейнеры для контента</p>
        </div>

        {/* Основные варианты */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-[#292D30]">Основные варианты</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <CustomCard variant="outlined">
              <h3 className="text-lg font-semibold mb-2 text-[#292D30]">Outlined Card</h3>
              <p className="text-gray-600">Карточка с контуром. Подходит для основного контента.</p>
            </CustomCard>

            <CustomCard variant="filled">
              <h3 className="text-lg font-semibold mb-2 text-[#292D30]">Filled Card</h3>
              <p className="text-gray-600">Карточка с заливкой. Для второстепенного контента.</p>
            </CustomCard>

            <CustomCard variant="elevated">
              <h3 className="text-lg font-semibold mb-2 text-[#292D30]">Elevated Card</h3>
              <p className="text-gray-600">Карточка с тенью. Для важного контента.</p>
            </CustomCard>
          </div>
        </section>

        {/* Размеры */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-[#292D30]">Размеры скосов</h2>
          <div className="space-y-4">
            <CustomCard size="sm">
              <p className="text-[#292D30]">Small card - маленькие скосы (8px)</p>
            </CustomCard>
            <CustomCard size="md">
              <p className="text-[#292D30]">Medium card - средние скосы (12px)</p>
            </CustomCard>
            <CustomCard size="lg">
              <p className="text-[#292D30]">Large card - большие скосы (16px)</p>
            </CustomCard>
          </div>
        </section>

        {/* Примеры использования */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-[#292D30]">Примеры использования</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Product Card */}
            <CustomCard variant="elevated">
              <div className="space-y-4">
                <div className="w-full h-32 bg-gray-200 rounded flex items-center justify-center">
                  <span className="text-gray-500">Изображение товара</span>
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-[#292D30]">Название товара</h3>
                  <p className="text-gray-600 text-sm">Описание товара в несколько строк</p>
                  <p className="text-xl font-bold text-[#AFEB0F] mt-2">$99.99</p>
                </div>
                <div className="flex gap-2">
                  <CustomButton variant="primary" size="sm" className="flex-1">
                    Купить
                  </CustomButton>
                  <CustomButton variant="outlined" size="sm" icon={<Heart className="w-4 h-4" />} iconOnly>
                    Лайк
                  </CustomButton>
                </div>
              </div>
            </CustomCard>

            {/* Profile Card */}
            <CustomCard variant="outlined">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-[#AFEB0F] bg-opacity-20 rounded-full mx-auto flex items-center justify-center">
                  <User className="w-8 h-8 text-[#AFEB0F]" />
                </div>
                <div>
                  <h3 className="font-semibold text-[#292D30]">Иван Петров</h3>
                  <p className="text-gray-600 text-sm">Frontend Developer</p>
                </div>
                <div className="flex gap-2 justify-center">
                  <CustomButton variant="outlined" size="sm">
                    Профиль
                  </CustomButton>
                  <CustomButton variant="ghost" size="sm" icon={<Share className="w-4 h-4" />} iconOnly>
                    Поделиться
                  </CustomButton>
                </div>
              </div>
            </CustomCard>

            {/* Stats Card */}
            <CustomCard variant="filled">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-[#292D30]">Статистика</h3>
                  <Star className="w-5 h-5 text-[#AFEB0F]" />
                </div>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <p className="text-2xl font-bold text-[#AFEB0F]">1,234</p>
                    <p className="text-sm text-gray-600">Просмотры</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-[#292D30]">567</p>
                    <p className="text-sm text-gray-600">Лайки</p>
                  </div>
                </div>
              </div>
            </CustomCard>

            {/* Settings Card */}
            <CustomCard variant="outlined">
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <Settings className="w-5 h-5 text-[#292D30]" />
                  <h3 className="font-semibold text-[#292D30]">Настройки</h3>
                </div>
                <div className="space-y-3">
                  <label className="flex items-center justify-between">
                    <span className="text-[#292D30]">Уведомления</span>
                    <input type="checkbox" defaultChecked />
                  </label>
                  <label className="flex items-center justify-between">
                    <span className="text-[#292D30]">Темная тема</span>
                    <input type="checkbox" />
                  </label>
                  <label className="flex items-center justify-between">
                    <span className="text-[#292D30]">Автосохранение</span>
                    <input type="checkbox" defaultChecked />
                  </label>
                </div>
              </div>
            </CustomCard>

            {/* Form Card */}
            <CustomCard variant="elevated">
              <div className="space-y-4">
                <h3 className="font-semibold text-[#292D30]">Обратная связь</h3>
                <div className="space-y-3">
                  <CustomInput size="sm" placeholder="Ваше имя" />
                  <CustomInput size="sm" type="email" placeholder="Email" />
                  <textarea
                    className="w-full p-2 border border-gray-300 rounded text-sm resize-none"
                    rows={3}
                    placeholder="Сообщение"
                  />
                  <CustomButton variant="primary" size="sm" className="w-full">
                    Отправить
                  </CustomButton>
                </div>
              </div>
            </CustomCard>

            {/* Notification Card */}
            <CustomCard variant="filled" borderColor="#AFEB0F">
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Bell className="w-5 h-5 text-[#AFEB0F]" />
                  <h3 className="font-semibold text-[#292D30]">Новое уведомление</h3>
                </div>
                <p className="text-gray-600 text-sm">
                  У вас есть 3 новых сообщения. Проверьте свою почту для получения подробной информации.
                </p>
                <div className="flex gap-2">
                  <CustomButton variant="primary" size="sm">
                    Просмотреть
                  </CustomButton>
                  <CustomButton variant="ghost" size="sm">
                    Позже
                  </CustomButton>
                </div>
              </div>
            </CustomCard>
          </div>
        </section>

        {/* Адаптивные примеры */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-[#292D30]">Адаптивные карточки</h2>

          {/* Mobile Layout */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-[#292D30]">Мобильная раскладка</h3>
            <div className="max-w-sm mx-auto space-y-4">
              <CustomCard size="sm">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-[#AFEB0F] bg-opacity-20 rounded-full flex items-center justify-center">
                    <ShoppingCart className="w-6 h-6 text-[#AFEB0F]" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium text-[#292D30]">Товар в корзине</h4>
                    <p className="text-sm text-gray-600">$29.99</p>
                  </div>
                  <CustomButton variant="ghost" size="sm" icon={<Eye className="w-4 h-4" />} iconOnly>
                    Просмотр
                  </CustomButton>
                </div>
              </CustomCard>

              <CustomCard size="sm">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-[#292D30] bg-opacity-10 rounded-full flex items-center justify-center">
                    <User className="w-6 h-6 text-[#292D30]" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium text-[#292D30]">Новый подписчик</h4>
                    <p className="text-sm text-gray-600">2 минуты назад</p>
                  </div>
                  <CustomButton variant="primary" size="sm">
                    Подписаться
                  </CustomButton>
                </div>
              </CustomCard>
            </div>
          </div>

          {/* Tablet Layout */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-[#292D30]">Планшетная раскладка</h3>
            <div className="max-w-2xl mx-auto">
              <div className="grid grid-cols-2 gap-4">
                <CustomCard size="md">
                  <div className="text-center space-y-3">
                    <div className="w-16 h-16 bg-[#AFEB0F] bg-opacity-20 rounded-full mx-auto flex items-center justify-center">
                      <Star className="w-8 h-8 text-[#AFEB0F]" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#292D30]">Премиум</h4>
                      <p className="text-sm text-gray-600">Расширенные возможности</p>
                    </div>
                    <CustomButton variant="primary" size="sm" className="w-full">
                      Подключить
                    </CustomButton>
                  </div>
                </CustomCard>

                <CustomCard size="md">
                  <div className="text-center space-y-3">
                    <div className="w-16 h-16 bg-[#292D30] bg-opacity-10 rounded-full mx-auto flex items-center justify-center">
                      <User className="w-8 h-8 text-[#292D30]" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#292D30]">Базовый</h4>
                      <p className="text-sm text-gray-600">Стандартные функции</p>
                    </div>
                    <CustomButton variant="outlined" size="sm" className="w-full">
                      Выбрать
                    </CustomButton>
                  </div>
                </CustomCard>
              </div>
            </div>
          </div>

          {/* Desktop Layout */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-[#292D30]">Десктопная раскладка</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <CustomCard size="lg" className="md:col-span-2">
                <div className="space-y-4">
                  <h4 className="text-xl font-bold text-[#292D30]">Главная карточка</h4>
                  <p className="text-gray-600">
                    Большая карточка для важного контента. Занимает две колонки в сетке и имеет больше места для
                    информации.
                  </p>
                  <div className="flex gap-3">
                    <CustomButton variant="primary">Основное действие</CustomButton>
                    <CustomButton variant="outlined">Дополнительно</CustomButton>
                  </div>
                </div>
              </CustomCard>

              <CustomCard size="lg">
                <div className="text-center space-y-3">
                  <div className="w-20 h-20 bg-[#AFEB0F] bg-opacity-20 rounded-full mx-auto flex items-center justify-center">
                    <Settings className="w-10 h-10 text-[#AFEB0F]" />
                  </div>
                  <h4 className="font-semibold text-[#292D30]">Настройки</h4>
                  <p className="text-sm text-gray-600">Управление параметрами</p>
                  <CustomButton variant="ghost" size="sm" className="w-full">
                    Открыть
                  </CustomButton>
                </div>
              </CustomCard>

              <CustomCard size="lg">
                <div className="text-center space-y-3">
                  <div className="w-20 h-20 bg-[#292D30] bg-opacity-10 rounded-full mx-auto flex items-center justify-center">
                    <Bell className="w-10 h-10 text-[#292D30]" />
                  </div>
                  <h4 className="font-semibold text-[#292D30]">Уведомления</h4>
                  <p className="text-sm text-gray-600">Новые сообщения</p>
                  <CustomButton variant="ghost" size="sm" className="w-full">
                    Просмотреть
                  </CustomButton>
                </div>
              </CustomCard>
            </div>
          </div>
        </section>

        {/* Кастомные цвета */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-[#292D30]">Кастомные цвета</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <CustomCard borderColor="#AFEB0F" backgroundColor="#AFEB0F" className="bg-opacity-10">
              <h3 className="text-lg font-semibold mb-2 text-[#292D30]">Брендовая карточка</h3>
              <p className="text-gray-600">Карточка с брендовым цветом рамки и фона.</p>
            </CustomCard>

            <CustomCard borderColor="#ef4444" backgroundColor="#fef2f2">
              <h3 className="text-lg font-semibold mb-2 text-red-700">Ошибка</h3>
              <p className="text-red-600">Карточка для отображения ошибок и предупреждений.</p>
            </CustomCard>

            <CustomCard borderColor="#10b981" backgroundColor="#f0fdf4">
              <h3 className="text-lg font-semibold mb-2 text-green-700">Успех</h3>
              <p className="text-green-600">Карточка для отображения успешных операций.</p>
            </CustomCard>
          </div>
        </section>

        {/* Документация API */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-[#292D30]">Документация API</h2>
          <CustomCard>
            <h3 className="text-lg font-semibold mb-4 text-[#292D30]">CustomCard Props</h3>
            <div className="space-y-4 text-sm">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <code className="bg-gray-100 px-2 py-1 rounded text-[#292D30]">variant</code>
                  <span className="ml-2 text-gray-600">"outlined" | "filled" | "elevated"</span>
                  <p className="text-gray-500 mt-1">Стиль карточки. По умолчанию "outlined"</p>
                </div>
                <div>
                  <code className="bg-gray-100 px-2 py-1 rounded text-[#292D30]">size</code>
                  <span className="ml-2 text-gray-600">"sm" | "md" | "lg"</span>
                  <p className="text-gray-500 mt-1">Размер скосов. По умолчанию "md"</p>
                </div>
                <div>
                  <code className="bg-gray-100 px-2 py-1 rounded text-[#292D30]">padding</code>
                  <span className="ml-2 text-gray-600">boolean</span>
                  <p className="text-gray-500 mt-1">Добавлять внутренние отступы. По умолчанию true</p>
                </div>
                <div>
                  <code className="bg-gray-100 px-2 py-1 rounded text-[#292D30]">borderColor</code>
                  <span className="ml-2 text-gray-600">string</span>
                  <p className="text-gray-500 mt-1">Кастомный цвет рамки (1px)</p>
                </div>
                <div>
                  <code className="bg-gray-100 px-2 py-1 rounded text-[#292D30]">backgroundColor</code>
                  <span className="ml-2 text-gray-600">string</span>
                  <p className="text-gray-500 mt-1">Кастомный цвет фона</p>
                </div>
                <div>
                  <code className="bg-gray-100 px-2 py-1 rounded text-[#292D30]">className</code>
                  <span className="ml-2 text-gray-600">string</span>
                  <p className="text-gray-500 mt-1">Дополнительные CSS классы</p>
                </div>
              </div>
            </div>
          </CustomCard>
        </section>
      </div>
    </div>
  )
}
