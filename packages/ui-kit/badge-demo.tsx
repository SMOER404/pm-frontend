"use client"

import CustomBadge from "./custom-badge"
import CustomButton from "./custom-button"
import CustomCard from "./custom-card"
import { Mail, Bell, ShoppingCart, User, Star, Heart, Settings } from "lucide-react"

export default function BadgeDemo() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-[#292D30] mb-4">Бейджи и индикаторы</h1>
          <p className="text-gray-600">Уведомления, счетчики и статусы</p>
        </div>

        {/* Основные варианты */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-[#292D30]">Основные варианты</h2>
          <div className="flex flex-wrap gap-8 items-center">
            <CustomBadge badgeContent={4}>
              <Mail className="w-6 h-6 text-[#292D30]" />
            </CustomBadge>

            <CustomBadge badgeContent={99}>
              <Bell className="w-6 h-6 text-[#292D30]" />
            </CustomBadge>

            <CustomBadge badgeContent={1000} max={999}>
              <ShoppingCart className="w-6 h-6 text-[#292D30]" />
            </CustomBadge>

            <CustomBadge variant="dot">
              <User className="w-6 h-6 text-[#292D30]" />
            </CustomBadge>
          </div>
        </section>

        {/* Цвета */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-[#292D30]">Цвета</h2>
          <div className="flex flex-wrap gap-8 items-center">
            <div className="text-center space-y-2">
              <CustomBadge badgeContent={5} color="primary">
                <Mail className="w-6 h-6 text-[#292D30]" />
              </CustomBadge>
              <p className="text-sm text-gray-600">Primary</p>
            </div>

            <div className="text-center space-y-2">
              <CustomBadge badgeContent={3} color="secondary">
                <Bell className="w-6 h-6 text-[#292D30]" />
              </CustomBadge>
              <p className="text-sm text-gray-600">Secondary</p>
            </div>

            <div className="text-center space-y-2">
              <CustomBadge badgeContent={12} color="error">
                <ShoppingCart className="w-6 h-6 text-[#292D30]" />
              </CustomBadge>
              <p className="text-sm text-gray-600">Error</p>
            </div>

            <div className="text-center space-y-2">
              <CustomBadge badgeContent={7} color="warning">
                <Star className="w-6 h-6 text-[#292D30]" />
              </CustomBadge>
              <p className="text-sm text-gray-600">Warning</p>
            </div>

            <div className="text-center space-y-2">
              <CustomBadge badgeContent={2} color="success">
                <Heart className="w-6 h-6 text-[#292D30]" />
              </CustomBadge>
              <p className="text-sm text-gray-600">Success</p>
            </div>
          </div>
        </section>

        {/* Размеры */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-[#292D30]">Размеры</h2>
          <div className="flex flex-wrap gap-8 items-center">
            <div className="text-center space-y-2">
              <CustomBadge badgeContent={5} size="sm">
                <Mail className="w-5 h-5 text-[#292D30]" />
              </CustomBadge>
              <p className="text-sm text-gray-600">Small</p>
            </div>

            <div className="text-center space-y-2">
              <CustomBadge badgeContent={5} size="md">
                <Mail className="w-6 h-6 text-[#292D30]" />
              </CustomBadge>
              <p className="text-sm text-gray-600">Medium</p>
            </div>

            <div className="text-center space-y-2">
              <CustomBadge badgeContent={5} size="lg">
                <Mail className="w-7 h-7 text-[#292D30]" />
              </CustomBadge>
              <p className="text-sm text-gray-600">Large</p>
            </div>
          </div>
        </section>

        {/* Позиционирование */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-[#292D30]">Позиционирование</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center space-y-2">
              <CustomBadge badgeContent={1} position="top-right">
                <div className="w-12 h-12 bg-gray-200 rounded flex items-center justify-center">
                  <Mail className="w-6 h-6 text-[#292D30]" />
                </div>
              </CustomBadge>
              <p className="text-sm text-gray-600">Top Right</p>
            </div>

            <div className="text-center space-y-2">
              <CustomBadge badgeContent={2} position="top-left">
                <div className="w-12 h-12 bg-gray-200 rounded flex items-center justify-center">
                  <Bell className="w-6 h-6 text-[#292D30]" />
                </div>
              </CustomBadge>
              <p className="text-sm text-gray-600">Top Left</p>
            </div>

            <div className="text-center space-y-2">
              <CustomBadge badgeContent={3} position="bottom-right">
                <div className="w-12 h-12 bg-gray-200 rounded flex items-center justify-center">
                  <ShoppingCart className="w-6 h-6 text-[#292D30]" />
                </div>
              </CustomBadge>
              <p className="text-sm text-gray-600">Bottom Right</p>
            </div>

            <div className="text-center space-y-2">
              <CustomBadge badgeContent={4} position="bottom-left">
                <div className="w-12 h-12 bg-gray-200 rounded flex items-center justify-center">
                  <User className="w-6 h-6 text-[#292D30]" />
                </div>
              </CustomBadge>
              <p className="text-sm text-gray-600">Bottom Left</p>
            </div>
          </div>
        </section>

        {/* Точечные бейджи */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-[#292D30]">Точечные индикаторы</h2>
          <div className="flex flex-wrap gap-8 items-center">
            <CustomBadge variant="dot" color="primary">
              <Mail className="w-6 h-6 text-[#292D30]" />
            </CustomBadge>

            <CustomBadge variant="dot" color="error">
              <Bell className="w-6 h-6 text-[#292D30]" />
            </CustomBadge>

            <CustomBadge variant="dot" color="success">
              <User className="w-6 h-6 text-[#292D30]" />
            </CustomBadge>

            <CustomBadge variant="dot" color="warning">
              <Settings className="w-6 h-6 text-[#292D30]" />
            </CustomBadge>
          </div>
        </section>

        {/* Практические примеры */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-[#292D30]">Практические примеры</h2>

          {/* Навигация с бейджами */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-[#292D30]">Навигация</h3>
            <div className="flex flex-wrap gap-4">
              <CustomButton variant="ghost">
                <CustomBadge badgeContent={5} color="error" size="sm">
                  <Bell className="w-4 h-4 mr-2" />
                </CustomBadge>
                Уведомления
              </CustomButton>

              <CustomButton variant="ghost">
                <CustomBadge badgeContent={12} color="primary" size="sm">
                  <Mail className="w-4 h-4 mr-2" />
                </CustomBadge>
                Сообщения
              </CustomButton>

              <CustomButton variant="ghost">
                <CustomBadge badgeContent={3} color="warning" size="sm">
                  <ShoppingCart className="w-4 h-4 mr-2" />
                </CustomBadge>
                Корзина
              </CustomButton>

              <CustomButton variant="ghost">
                <CustomBadge variant="dot" color="success" size="sm">
                  <User className="w-4 h-4 mr-2" />
                </CustomBadge>
                Профиль
              </CustomButton>
            </div>
          </div>

          {/* Карточки с бейджами */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-[#292D30]">Карточки</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <CustomCard>
                <div className="space-y-4">
                  <div className="flex items-start justify-between">
                    <h4 className="font-semibold text-[#292D30]">Входящие</h4>
                    <CustomBadge badgeContent={24} color="error" size="sm">
                      <span></span>
                    </CustomBadge>
                  </div>
                  <p className="text-gray-600 text-sm">Новые сообщения и уведомления</p>
                  <CustomButton variant="primary" size="sm" className="w-full">
                    Просмотреть
                  </CustomButton>
                </div>
              </CustomCard>

              <CustomCard>
                <div className="space-y-4">
                  <div className="flex items-start justify-between">
                    <h4 className="font-semibold text-[#292D30]">Задачи</h4>
                    <CustomBadge badgeContent={7} color="warning" size="sm">
                      <span></span>
                    </CustomBadge>
                  </div>
                  <p className="text-gray-600 text-sm">Активные задачи и проекты</p>
                  <CustomButton variant="outlined" size="sm" className="w-full">
                    Управление
                  </CustomButton>
                </div>
              </CustomCard>

              <CustomCard>
                <div className="space-y-4">
                  <div className="flex items-start justify-between">
                    <h4 className="font-semibold text-[#292D30]">Завершено</h4>
                    <CustomBadge badgeContent={156} color="success" size="sm">
                      <span></span>
                    </CustomBadge>
                  </div>
                  <p className="text-gray-600 text-sm">Выполненные задачи</p>
                  <CustomButton variant="ghost" size="sm" className="w-full">
                    История
                  </CustomButton>
                </div>
              </CustomCard>
            </div>
          </div>

          {/* Список с бейджами */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-[#292D30]">Список уведомлений</h3>
            <CustomCard>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 hover:bg-gray-50 rounded">
                  <div className="flex items-center gap-3">
                    <CustomBadge variant="dot" color="error">
                      <Mail className="w-5 h-5 text-[#292D30]" />
                    </CustomBadge>
                    <div>
                      <p className="font-medium text-[#292D30]">Новое сообщение</p>
                      <p className="text-sm text-gray-600">От: john@example.com</p>
                    </div>
                  </div>
                  <span className="text-xs text-gray-500">2 мин назад</span>
                </div>

                <div className="flex items-center justify-between p-3 hover:bg-gray-50 rounded">
                  <div className="flex items-center gap-3">
                    <CustomBadge badgeContent={3} color="warning" size="sm">
                      <Bell className="w-5 h-5 text-[#292D30]" />
                    </CustomBadge>
                    <div>
                      <p className="font-medium text-[#292D30]">Системные уведомления</p>
                      <p className="text-sm text-gray-600">Обновления безопасности</p>
                    </div>
                  </div>
                  <span className="text-xs text-gray-500">1 час назад</span>
                </div>

                <div className="flex items-center justify-between p-3 hover:bg-gray-50 rounded">
                  <div className="flex items-center gap-3">
                    <CustomBadge badgeContent={12} color="success" size="sm">
                      <Star className="w-5 h-5 text-[#292D30]" />
                    </CustomBadge>
                    <div>
                      <p className="font-medium text-[#292D30]">Новые отзывы</p>
                      <p className="text-sm text-gray-600">Оценки ваших проектов</p>
                    </div>
                  </div>
                  <span className="text-xs text-gray-500">3 часа назад</span>
                </div>
              </div>
            </CustomCard>
          </div>
        </section>

        {/* Особые случаи */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-[#292D30]">Особые случаи</h2>
          <div className="flex flex-wrap gap-8 items-center">
            <div className="text-center space-y-2">
              <CustomBadge badgeContent={0} showZero>
                <Mail className="w-6 h-6 text-[#292D30]" />
              </CustomBadge>
              <p className="text-sm text-gray-600">Показать ноль</p>
            </div>

            <div className="text-center space-y-2">
              <CustomBadge badgeContent={0}>
                <Bell className="w-6 h-6 text-[#292D30]" />
              </CustomBadge>
              <p className="text-sm text-gray-600">Скрыть ноль</p>
            </div>

            <div className="text-center space-y-2">
              <CustomBadge badgeContent={5} invisible>
                <ShoppingCart className="w-6 h-6 text-[#292D30]" />
              </CustomBadge>
              <p className="text-sm text-gray-600">Невидимый</p>
            </div>

            <div className="text-center space-y-2">
              <CustomBadge badgeContent={1500} max={999}>
                <User className="w-6 h-6 text-[#292D30]" />
              </CustomBadge>
              <p className="text-sm text-gray-600">Максимум 999+</p>
            </div>
          </div>
        </section>

        {/* Кастомные цвета */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-[#292D30]">Кастомные цвета</h2>
          <div className="flex flex-wrap gap-8 items-center">
            <CustomBadge badgeContent={5} customBackgroundColor="#AFEB0F" customColor="#292D30">
              <Mail className="w-6 h-6 text-[#292D30]" />
            </CustomBadge>

            <CustomBadge badgeContent={3} customBackgroundColor="#8B5CF6" customColor="white">
              <Bell className="w-6 h-6 text-[#292D30]" />
            </CustomBadge>

            <CustomBadge badgeContent={12} customBackgroundColor="#F59E0B" customColor="white">
              <ShoppingCart className="w-6 h-6 text-[#292D30]" />
            </CustomBadge>

            <CustomBadge variant="dot" customBackgroundColor="#EC4899">
              <Heart className="w-6 h-6 text-[#292D30]" />
            </CustomBadge>
          </div>
        </section>

        {/* Адаптивные примеры */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-[#292D30]">Адаптивные примеры</h2>

          {/* Мобильная навигация */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-[#292D30]">Мобильная навигация</h3>
            <div className="max-w-sm mx-auto">
              <CustomCard>
                <div className="flex justify-around py-2">
                  <CustomBadge badgeContent={3} color="error" size="sm">
                    <div className="flex flex-col items-center gap-1 p-2">
                      <Bell className="w-5 h-5 text-[#292D30]" />
                      <span className="text-xs text-[#292D30]">Уведомления</span>
                    </div>
                  </CustomBadge>

                  <CustomBadge badgeContent={7} color="primary" size="sm">
                    <div className="flex flex-col items-center gap-1 p-2">
                      <Mail className="w-5 h-5 text-[#292D30]" />
                      <span className="text-xs text-[#292D30]">Сообщения</span>
                    </div>
                  </CustomBadge>

                  <CustomBadge variant="dot" color="success" size="sm">
                    <div className="flex flex-col items-center gap-1 p-2">
                      <User className="w-5 h-5 text-[#292D30]" />
                      <span className="text-xs text-[#292D30]">Профиль</span>
                    </div>
                  </CustomBadge>

                  <CustomBadge badgeContent={2} color="warning" size="sm">
                    <div className="flex flex-col items-center gap-1 p-2">
                      <Settings className="w-5 h-5 text-[#292D30]" />
                      <span className="text-xs text-[#292D30]">Настройки</span>
                    </div>
                  </CustomBadge>
                </div>
              </CustomCard>
            </div>
          </div>

          {/* Планшетная панель */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-[#292D30]">Планшетная панель</h3>
            <div className="max-w-2xl mx-auto">
              <CustomCard>
                <div className="flex items-center justify-between p-4">
                  <h3 className="text-xl font-bold text-[#292D30]">Панель управления</h3>
                  <div className="flex gap-4">
                    <CustomBadge badgeContent={15} color="error">
                      <CustomButton variant="ghost" size="sm" icon={<Bell className="w-4 h-4" />} iconOnly>
                        Уведомления
                      </CustomButton>
                    </CustomBadge>

                    <CustomBadge badgeContent={8} color="primary">
                      <CustomButton variant="ghost" size="sm" icon={<Mail className="w-4 h-4" />} iconOnly>
                        Сообщения
                      </CustomButton>
                    </CustomBadge>

                    <CustomBadge variant="dot" color="success">
                      <CustomButton variant="ghost" size="sm" icon={<User className="w-4 h-4" />} iconOnly>
                        Профиль
                      </CustomButton>
                    </CustomBadge>
                  </div>
                </div>
              </CustomCard>
            </div>
          </div>
        </section>

        {/* Документация API */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-[#292D30]">Документация API</h2>
          <CustomCard>
            <h3 className="text-lg font-semibold mb-4 text-[#292D30]">CustomBadge Props</h3>
            <div className="space-y-4 text-sm">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <code className="bg-gray-100 px-2 py-1 rounded text-[#292D30]">badgeContent</code>
                  <span className="ml-2 text-gray-600">React.ReactNode</span>
                  <p className="text-gray-500 mt-1">Содержимое бейджа</p>
                </div>
                <div>
                  <code className="bg-gray-100 px-2 py-1 rounded text-[#292D30]">variant</code>
                  <span className="ml-2 text-gray-600">"standard" | "dot"</span>
                  <p className="text-gray-500 mt-1">Тип бейджа. По умолчанию "standard"</p>
                </div>
                <div>
                  <code className="bg-gray-100 px-2 py-1 rounded text-[#292D30]">color</code>
                  <span className="ml-2 text-gray-600">"primary" | "secondary" | "error" | "warning" | "success"</span>
                  <p className="text-gray-500 mt-1">Цвет бейджа. По умолчанию "primary"</p>
                </div>
                <div>
                  <code className="bg-gray-100 px-2 py-1 rounded text-[#292D30]">size</code>
                  <span className="ml-2 text-gray-600">"sm" | "md" | "lg"</span>
                  <p className="text-gray-500 mt-1">Размер бейджа. По умолчанию "md"</p>
                </div>
                <div>
                  <code className="bg-gray-100 px-2 py-1 rounded text-[#292D30]">position</code>
                  <span className="ml-2 text-gray-600">"top-right" | "top-left" | "bottom-right" | "bottom-left"</span>
                  <p className="text-gray-500 mt-1">Позиция бейджа. По умолчанию "top-right"</p>
                </div>
                <div>
                  <code className="bg-gray-100 px-2 py-1 rounded text-[#292D30]">invisible</code>
                  <span className="ml-2 text-gray-600">boolean</span>
                  <p className="text-gray-500 mt-1">Скрыть бейдж. По умолчанию false</p>
                </div>
                <div>
                  <code className="bg-gray-100 px-2 py-1 rounded text-[#292D30]">showZero</code>
                  <span className="ml-2 text-gray-600">boolean</span>
                  <p className="text-gray-500 mt-1">Показывать ноль. По умолчанию false</p>
                </div>
                <div>
                  <code className="bg-gray-100 px-2 py-1 rounded text-[#292D30]">max</code>
                  <span className="ml-2 text-gray-600">number</span>
                  <p className="text-gray-500 mt-1">Максимальное число. По умолчанию 99</p>
                </div>
                <div>
                  <code className="bg-gray-100 px-2 py-1 rounded text-[#292D30]">customColor</code>
                  <span className="ml-2 text-gray-600">string</span>
                  <p className="text-gray-500 mt-1">Кастомный цвет текста</p>
                </div>
                <div>
                  <code className="bg-gray-100 px-2 py-1 rounded text-[#292D30]">customBackgroundColor</code>
                  <span className="ml-2 text-gray-600">string</span>
                  <p className="text-gray-500 mt-1">Кастомный цвет фона</p>
                </div>
              </div>
            </div>
          </CustomCard>
        </section>
      </div>
    </div>
  )
}
