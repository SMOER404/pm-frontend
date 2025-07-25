"use client"

import CustomDrawer from "./custom-drawer"
import CustomButton from "./custom-button"
import CustomCard from "./custom-card"
import CustomTypography from "./custom-typography"
import { useState } from "react"
import { Menu, User, Settings, Bell, Home, Search, Star, Heart, Mail, Phone } from "lucide-react"

export default function DrawerDemo() {
  const [leftDrawerOpen, setLeftDrawerOpen] = useState(false)
  const [rightDrawerOpen, setRightDrawerOpen] = useState(false)
  const [topDrawerOpen, setTopDrawerOpen] = useState(false)
  const [bottomDrawerOpen, setBottomDrawerOpen] = useState(false)
  const [persistentDrawerOpen, setPersistentDrawerOpen] = useState(false)
  const [permanentDrawerOpen, setPermanentDrawerOpen] = useState(true)

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-[#292D30] mb-4">Drawer панели</h1>
          <p className="text-gray-600">Боковые панели и выдвижные меню</p>
        </div>

        {/* Основные варианты */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-[#292D30]">Основные варианты</h2>
          <div className="flex flex-wrap gap-4">
            <CustomButton variant="primary" onClick={() => setLeftDrawerOpen(true)}>
              Temporary Drawer (Left)
            </CustomButton>
            <CustomButton variant="secondary" onClick={() => setPersistentDrawerOpen(!persistentDrawerOpen)}>
              Persistent Drawer
            </CustomButton>
            <CustomButton variant="outlined" onClick={() => setPermanentDrawerOpen(!permanentDrawerOpen)}>
              Toggle Permanent
            </CustomButton>
          </div>
        </section>

        {/* Позиционирование */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-[#292D30]">Позиционирование</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <CustomButton variant="outlined" onClick={() => setLeftDrawerOpen(true)} className="w-full">
              Слева
            </CustomButton>
            <CustomButton variant="outlined" onClick={() => setRightDrawerOpen(true)} className="w-full">
              Справа
            </CustomButton>
            <CustomButton variant="outlined" onClick={() => setTopDrawerOpen(true)} className="w-full">
              Сверху
            </CustomButton>
            <CustomButton variant="outlined" onClick={() => setBottomDrawerOpen(true)} className="w-full">
              Снизу
            </CustomButton>
          </div>
        </section>

        {/* Размеры */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-[#292D30]">Размеры</h2>
          <div className="flex flex-wrap gap-4">
            <CustomButton variant="ghost" onClick={() => setLeftDrawerOpen(true)}>
              Small (sm)
            </CustomButton>
            <CustomButton variant="ghost" onClick={() => setLeftDrawerOpen(true)}>
              Medium (md)
            </CustomButton>
            <CustomButton variant="ghost" onClick={() => setLeftDrawerOpen(true)}>
              Large (lg)
            </CustomButton>
            <CustomButton variant="ghost" onClick={() => setLeftDrawerOpen(true)}>
              Extra Large (xl)
            </CustomButton>
          </div>
        </section>

        {/* Примеры использования */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-[#292D30]">Примеры использования</h2>

          {/* Навигационное меню */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-[#292D30]">Навигационное меню</h3>
            <CustomCard>
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <CustomTypography variant="h5">Мое приложение</CustomTypography>
                  <CustomButton
                    variant="ghost"
                    icon={<Menu className="w-5 h-5" />}
                    iconOnly
                    onClick={() => setLeftDrawerOpen(true)}
                  >
                    Меню
                  </CustomButton>
                </div>
                <CustomTypography variant="body1">
                  Нажмите на иконку меню, чтобы открыть навигационную панель
                </CustomTypography>
              </div>
            </CustomCard>
          </div>

          {/* Панель настроек */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-[#292D30]">Панель настроек</h3>
            <CustomCard>
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <CustomTypography variant="h5">Настройки профиля</CustomTypography>
                  <CustomButton
                    variant="outlined"
                    icon={<Settings className="w-4 h-4" />}
                    onClick={() => setRightDrawerOpen(true)}
                  >
                    Открыть настройки
                  </CustomButton>
                </div>
                <CustomTypography variant="body1">
                  Панель настроек откроется справа и позволит изменить параметры профиля
                </CustomTypography>
              </div>
            </CustomCard>
          </div>

          {/* Уведомления */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-[#292D30]">Панель уведомлений</h3>
            <CustomCard>
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <CustomTypography variant="h5">Центр уведомлений</CustomTypography>
                  <CustomButton
                    variant="primary"
                    icon={<Bell className="w-4 h-4" />}
                    onClick={() => setTopDrawerOpen(true)}
                  >
                    Показать уведомления
                  </CustomButton>
                </div>
                <CustomTypography variant="body1">
                  Панель уведомлений выдвигается сверху и показывает последние обновления
                </CustomTypography>
              </div>
            </CustomCard>
          </div>
        </section>

        {/* Адаптивные примеры */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-[#292D30]">Адаптивные примеры</h2>

          {/* Мобильное меню */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-[#292D30]">Мобильное меню</h3>
            <div className="max-w-sm mx-auto">
              <CustomCard>
                <div className="p-4">
                  <div className="flex items-center justify-between mb-4">
                    <CustomTypography variant="h6">Мобильное приложение</CustomTypography>
                    <CustomButton
                      variant="ghost"
                      size="sm"
                      icon={<Menu className="w-4 h-4" />}
                      iconOnly
                      onClick={() => setLeftDrawerOpen(true)}
                    >
                      Меню
                    </CustomButton>
                  </div>
                  <CustomTypography variant="body2">Компактное меню для мобильных устройств</CustomTypography>
                </div>
              </CustomCard>
            </div>
          </div>

          {/* Планшетная панель */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-[#292D30]">Планшетная панель</h3>
            <div className="max-w-2xl mx-auto">
              <CustomCard>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <CustomTypography variant="h5">Планшетное приложение</CustomTypography>
                    <div className="flex gap-2">
                      <CustomButton variant="outlined" size="sm" onClick={() => setLeftDrawerOpen(true)}>
                        Навигация
                      </CustomButton>
                      <CustomButton variant="outlined" size="sm" onClick={() => setRightDrawerOpen(true)}>
                        Настройки
                      </CustomButton>
                    </div>
                  </div>
                  <CustomTypography variant="body1">
                    На планшетах можно использовать несколько панелей одновременно
                  </CustomTypography>
                </div>
              </CustomCard>
            </div>
          </div>
        </section>

        {/* Кастомные цвета */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-[#292D30]">Кастомные цвета</h2>
          <div className="flex flex-wrap gap-4">
            <CustomButton
              variant="primary"
              borderColor="#AFEB0F"
              backgroundColor="#AFEB0F"
              onClick={() => setLeftDrawerOpen(true)}
            >
              Брендовая панель
            </CustomButton>
            <CustomButton
              variant="outlined"
              borderColor="#ef4444"
              textColor="#ef4444"
              onClick={() => setRightDrawerOpen(true)}
            >
              Красная панель
            </CustomButton>
            <CustomButton
              variant="outlined"
              borderColor="#10b981"
              textColor="#10b981"
              onClick={() => setTopDrawerOpen(true)}
            >
              Зеленая панель
            </CustomButton>
          </div>
        </section>

        {/* Drawers */}
        {/* Left Drawer */}
        <CustomDrawer
          open={leftDrawerOpen}
          onClose={() => setLeftDrawerOpen(false)}
          anchor="left"
          variant="temporary"
          size="md"
        >
          <div className="space-y-6">
            <CustomTypography variant="h5" gutterBottom>
              Навигационное меню
            </CustomTypography>
            <nav className="space-y-2">
              <div className="flex items-center gap-3 p-3 hover:bg-gray-50 rounded cursor-pointer">
                <Home className="w-5 h-5 text-[#292D30]" />
                <CustomTypography variant="body1">Главная</CustomTypography>
              </div>
              <div className="flex items-center gap-3 p-3 hover:bg-gray-50 rounded cursor-pointer">
                <Search className="w-5 h-5 text-[#292D30]" />
                <CustomTypography variant="body1">Поиск</CustomTypography>
              </div>
              <div className="flex items-center gap-3 p-3 hover:bg-gray-50 rounded cursor-pointer">
                <Star className="w-5 h-5 text-[#292D30]" />
                <CustomTypography variant="body1">Избранное</CustomTypography>
              </div>
              <div className="flex items-center gap-3 p-3 hover:bg-gray-50 rounded cursor-pointer">
                <User className="w-5 h-5 text-[#292D30]" />
                <CustomTypography variant="body1">Профиль</CustomTypography>
              </div>
              <div className="flex items-center gap-3 p-3 hover:bg-gray-50 rounded cursor-pointer">
                <Settings className="w-5 h-5 text-[#292D30]" />
                <CustomTypography variant="body1">Настройки</CustomTypography>
              </div>
            </nav>
          </div>
        </CustomDrawer>

        {/* Right Drawer */}
        <CustomDrawer
          open={rightDrawerOpen}
          onClose={() => setRightDrawerOpen(false)}
          anchor="right"
          variant="temporary"
          size="md"
        >
          <div className="space-y-6">
            <CustomTypography variant="h5" gutterBottom>
              Настройки профиля
            </CustomTypography>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-[#292D30] mb-1">Имя</label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-[#AFEB0F]"
                  defaultValue="Иван Петров"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#292D30] mb-1">Email</label>
                <input
                  type="email"
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-[#AFEB0F]"
                  defaultValue="ivan@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#292D30] mb-1">Телефон</label>
                <input
                  type="tel"
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-[#AFEB0F]"
                  defaultValue="+7 (999) 123-45-67"
                />
              </div>
              <div className="space-y-3">
                <CustomTypography variant="subtitle2">Уведомления</CustomTypography>
                <label className="flex items-center gap-2">
                  <input type="checkbox" defaultChecked />
                  <span className="text-sm">Email уведомления</span>
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" />
                  <span className="text-sm">Push уведомления</span>
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" defaultChecked />
                  <span className="text-sm">SMS уведомления</span>
                </label>
              </div>
              <div className="flex gap-3 pt-4">
                <CustomButton variant="primary" className="flex-1">
                  Сохранить
                </CustomButton>
                <CustomButton variant="outlined" className="flex-1" onClick={() => setRightDrawerOpen(false)}>
                  Отмена
                </CustomButton>
              </div>
            </div>
          </div>
        </CustomDrawer>

        {/* Top Drawer */}
        <CustomDrawer
          open={topDrawerOpen}
          onClose={() => setTopDrawerOpen(false)}
          anchor="top"
          variant="temporary"
          size="md"
        >
          <div className="space-y-4">
            <CustomTypography variant="h5" gutterBottom>
              Уведомления
            </CustomTypography>
            <div className="space-y-3">
              <div className="flex items-start gap-3 p-3 bg-gray-50 rounded">
                <Bell className="w-5 h-5 text-[#AFEB0F] mt-0.5" />
                <div className="flex-1">
                  <CustomTypography variant="subtitle2" gutterBottom>
                    Новое сообщение
                  </CustomTypography>
                  <CustomTypography variant="body2" color="secondary">
                    У вас есть новое сообщение от коллеги
                  </CustomTypography>
                  <CustomTypography variant="caption" color="disabled">
                    2 минуты назад
                  </CustomTypography>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3 bg-gray-50 rounded">
                <Star className="w-5 h-5 text-yellow-500 mt-0.5" />
                <div className="flex-1">
                  <CustomTypography variant="subtitle2" gutterBottom>
                    Новый отзыв
                  </CustomTypography>
                  <CustomTypography variant="body2" color="secondary">
                    Ваш проект получил 5-звездочный отзыв
                  </CustomTypography>
                  <CustomTypography variant="caption" color="disabled">
                    1 час назад
                  </CustomTypography>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3 bg-gray-50 rounded">
                <Heart className="w-5 h-5 text-red-500 mt-0.5" />
                <div className="flex-1">
                  <CustomTypography variant="subtitle2" gutterBottom>
                    Новый лайк
                  </CustomTypography>
                  <CustomTypography variant="body2" color="secondary">
                    Ваша публикация понравилась 15 пользователям
                  </CustomTypography>
                  <CustomTypography variant="caption" color="disabled">
                    3 часа назад
                  </CustomTypography>
                </div>
              </div>
            </div>
          </div>
        </CustomDrawer>

        {/* Bottom Drawer */}
        <CustomDrawer
          open={bottomDrawerOpen}
          onClose={() => setBottomDrawerOpen(false)}
          anchor="bottom"
          variant="temporary"
          size="md"
        >
          <div className="space-y-4">
            <CustomTypography variant="h5" gutterBottom>
              Быстрые действия
            </CustomTypography>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <CustomButton variant="outlined" className="flex-col h-20 gap-2">
                <Mail className="w-6 h-6" />
                <span className="text-xs">Написать</span>
              </CustomButton>
              <CustomButton variant="outlined" className="flex-col h-20 gap-2">
                <Phone className="w-6 h-6" />
                <span className="text-xs">Позвонить</span>
              </CustomButton>
              <CustomButton variant="outlined" className="flex-col h-20 gap-2">
                <Star className="w-6 h-6" />
                <span className="text-xs">Оценить</span>
              </CustomButton>
              <CustomButton variant="outlined" className="flex-col h-20 gap-2">
                <Heart className="w-6 h-6" />
                <span className="text-xs">Лайк</span>
              </CustomButton>
            </div>
          </div>
        </CustomDrawer>

        {/* Persistent Drawer */}
        <CustomDrawer
          open={persistentDrawerOpen}
          onClose={() => setPersistentDrawerOpen(false)}
          anchor="left"
          variant="persistent"
          size="sm"
          showCloseButton={false}
        >
          <div className="space-y-4">
            <CustomTypography variant="h6" gutterBottom>
              Persistent Menu
            </CustomTypography>
            <nav className="space-y-1">
              <div className="flex items-center gap-2 p-2 hover:bg-gray-50 rounded text-sm cursor-pointer">
                <Home className="w-4 h-4" />
                <span>Главная</span>
              </div>
              <div className="flex items-center gap-2 p-2 hover:bg-gray-50 rounded text-sm cursor-pointer">
                <Search className="w-4 h-4" />
                <span>Поиск</span>
              </div>
              <div className="flex items-center gap-2 p-2 hover:bg-gray-50 rounded text-sm cursor-pointer">
                <User className="w-4 h-4" />
                <span>Профиль</span>
              </div>
            </nav>
          </div>
        </CustomDrawer>

        {/* Permanent Drawer */}
        {permanentDrawerOpen && (
          <div className="fixed left-0 top-0 z-30">
            <CustomDrawer
              open={true}
              onClose={() => {}}
              anchor="left"
              variant="permanent"
              size="sm"
              showCloseButton={false}
            >
              <div className="space-y-4">
                <CustomTypography variant="h6" gutterBottom>
                  Permanent Menu
                </CustomTypography>
                <nav className="space-y-1">
                  <div className="flex items-center gap-2 p-2 bg-[#AFEB0F] bg-opacity-10 rounded text-sm">
                    <Home className="w-4 h-4 text-[#AFEB0F]" />
                    <span className="text-[#292D30] font-medium">Главная</span>
                  </div>
                  <div className="flex items-center gap-2 p-2 hover:bg-gray-50 rounded text-sm cursor-pointer">
                    <Search className="w-4 h-4" />
                    <span>Поиск</span>
                  </div>
                  <div className="flex items-center gap-2 p-2 hover:bg-gray-50 rounded text-sm cursor-pointer">
                    <Star className="w-4 h-4" />
                    <span>Избранное</span>
                  </div>
                  <div className="flex items-center gap-2 p-2 hover:bg-gray-50 rounded text-sm cursor-pointer">
                    <User className="w-4 h-4" />
                    <span>Профиль</span>
                  </div>
                </nav>
              </div>
            </CustomDrawer>
          </div>
        )}

        {/* Документация API */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-[#292D30]">Документация API</h2>
          <CustomCard>
            <div className="p-6">
              <h3 className="text-lg font-semibold mb-4 text-[#292D30]">CustomDrawer Props</h3>
              <div className="space-y-4 text-sm">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <code className="bg-gray-100 px-2 py-1 rounded text-[#292D30]">open</code>
                    <span className="ml-2 text-gray-600">boolean</span>
                    <p className="text-gray-500 mt-1">Состояние открытия drawer'а</p>
                  </div>
                  <div>
                    <code className="bg-gray-100 px-2 py-1 rounded text-[#292D30]">onClose</code>
                    <span className="ml-2 text-gray-600">() =&gt; void</span>
                    <p className="text-gray-500 mt-1">Функция закрытия drawer'а</p>
                  </div>
                  <div>
                    <code className="bg-gray-100 px-2 py-1 rounded text-[#292D30]">anchor</code>
                    <span className="ml-2 text-gray-600">"left" | "right" | "top" | "bottom"</span>
                    <p className="text-gray-500 mt-1">Позиция drawer'а. По умолчанию "left"</p>
                  </div>
                  <div>
                    <code className="bg-gray-100 px-2 py-1 rounded text-[#292D30]">variant</code>
                    <span className="ml-2 text-gray-600">"temporary" | "persistent" | "permanent"</span>
                    <p className="text-gray-500 mt-1">Тип drawer'а. По умолчанию "temporary"</p>
                  </div>
                  <div>
                    <code className="bg-gray-100 px-2 py-1 rounded text-[#292D30]">size</code>
                    <span className="ml-2 text-gray-600">"sm" | "md" | "lg" | "xl"</span>
                    <p className="text-gray-500 mt-1">Размер drawer'а. По умолчанию "md"</p>
                  </div>
                  <div>
                    <code className="bg-gray-100 px-2 py-1 rounded text-[#292D30]">showCloseButton</code>
                    <span className="ml-2 text-gray-600">boolean</span>
                    <p className="text-gray-500 mt-1">Показать кнопку закрытия. По умолчанию true</p>
                  </div>
                  <div>
                    <code className="bg-gray-100 px-2 py-1 rounded text-[#292D30]">closeOnOverlayClick</code>
                    <span className="ml-2 text-gray-600">boolean</span>
                    <p className="text-gray-500 mt-1">Закрывать при клике на overlay. По умолчанию true</p>
                  </div>
                  <div>
                    <code className="bg-gray-100 px-2 py-1 rounded text-[#292D30]">borderColor</code>
                    <span className="ml-2 text-gray-600">string</span>
                    <p className="text-gray-500 mt-1">Кастомный цвет рамки</p>
                  </div>
                  <div>
                    <code className="bg-gray-100 px-2 py-1 rounded text-[#292D30]">backgroundColor</code>
                    <span className="ml-2 text-gray-600">string</span>
                    <p className="text-gray-500 mt-1">Кастомный цвет фона</p>
                  </div>
                </div>
              </div>
            </div>
          </CustomCard>
        </section>
      </div>
    </div>
  )
}
