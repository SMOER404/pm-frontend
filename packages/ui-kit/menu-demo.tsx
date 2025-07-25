"use client"

import CustomMenu from "./custom-menu"
import CustomButton from "./custom-button"
import CustomCard from "./custom-card"
import {
  User,
  Settings,
  Bell,
  LogOut,
  Edit,
  Trash2,
  Copy,
  Share,
  Download,
  MoreHorizontal,
  ChevronDown,
  Home,
  Search,
  Heart,
  Bookmark,
} from "lucide-react"

export default function MenuDemo() {
  const handleMenuAction = (action: string) => {
    console.log(`Действие: ${action}`)
  }

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-[#292D30] mb-4">Меню со скосами</h1>
          <p className="text-gray-600">Выпадающие меню и контекстные действия</p>
        </div>

        {/* Основные примеры */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-[#292D30]">Основные примеры</h2>
          <div className="flex flex-wrap gap-4">
            {/* Простое меню */}
            <CustomMenu
              trigger={
                <CustomButton variant="outlined" icon={<ChevronDown className="w-4 h-4" />} iconPosition="right">
                  Простое меню
                </CustomButton>
              }
              children={[
                {
                  children: "Профиль",
                  icon: <User className="w-4 h-4" />,
                  onClick: () => handleMenuAction("profile"),
                },
                {
                  children: "Настройки",
                  icon: <Settings className="w-4 h-4" />,
                  onClick: () => handleMenuAction("settings"),
                },
                { divider: true },
                {
                  children: "Выйти",
                  icon: <LogOut className="w-4 h-4" />,
                  onClick: () => handleMenuAction("logout"),
                },
              ]}
            />

            {/* Меню с горячими клавишами */}
            <CustomMenu
              trigger={
                <CustomButton variant="primary" icon={<MoreHorizontal className="w-4 h-4" />} iconOnly>
                  Действия
                </CustomButton>
              }
              children={[
                {
                  children: "Редактировать",
                  icon: <Edit className="w-4 h-4" />,
                  shortcut: "Ctrl+E",
                  onClick: () => handleMenuAction("edit"),
                },
                {
                  children: "Копировать",
                  icon: <Copy className="w-4 h-4" />,
                  shortcut: "Ctrl+C",
                  onClick: () => handleMenuAction("copy"),
                },
                {
                  children: "Поделиться",
                  icon: <Share className="w-4 h-4" />,
                  shortcut: "Ctrl+S",
                  onClick: () => handleMenuAction("share"),
                },
                { divider: true },
                {
                  children: "Удалить",
                  icon: <Trash2 className="w-4 h-4" />,
                  shortcut: "Del",
                  onClick: () => handleMenuAction("delete"),
                },
              ]}
            />

            {/* Меню с подменю */}
            <CustomMenu
              trigger={
                <CustomButton variant="secondary" icon={<ChevronDown className="w-4 h-4" />} iconPosition="right">
                  С подменю
                </CustomButton>
              }
              children={[
                {
                  children: "Главная",
                  icon: <Home className="w-4 h-4" />,
                  onClick: () => handleMenuAction("home"),
                },
                {
                  children: "Поиск",
                  icon: <Search className="w-4 h-4" />,
                  submenu: [
                    {
                      children: "Поиск по названию",
                      onClick: () => handleMenuAction("search-title"),
                    },
                    {
                      children: "Поиск по автору",
                      onClick: () => handleMenuAction("search-author"),
                    },
                    {
                      children: "Расширенный поиск",
                      onClick: () => handleMenuAction("search-advanced"),
                    },
                  ],
                },
                {
                  children: "Избранное",
                  icon: <Heart className="w-4 h-4" />,
                  submenu: [
                    {
                      children: "Мои избранные",
                      icon: <Bookmark className="w-4 h-4" />,
                      onClick: () => handleMenuAction("my-favorites"),
                    },
                    {
                      children: "Недавно добавленные",
                      onClick: () => handleMenuAction("recent-favorites"),
                    },
                    { divider: true },
                    {
                      children: "Очистить избранное",
                      onClick: () => handleMenuAction("clear-favorites"),
                    },
                  ],
                },
                { divider: true },
                {
                  children: "Настройки",
                  icon: <Settings className="w-4 h-4" />,
                  onClick: () => handleMenuAction("settings"),
                },
              ]}
            />

            {/* Отключенные элементы */}
            <CustomMenu
              trigger={
                <CustomButton variant="ghost" icon={<ChevronDown className="w-4 h-4" />} iconPosition="right">
                  С отключенными
                </CustomButton>
              }
              children={[
                {
                  children: "Доступно",
                  icon: <User className="w-4 h-4" />,
                  onClick: () => handleMenuAction("available"),
                },
                {
                  children: "Отключено",
                  icon: <Settings className="w-4 h-4" />,
                  disabled: true,
                  onClick: () => handleMenuAction("disabled"),
                },
                {
                  children: "Тоже отключено",
                  icon: <Bell className="w-4 h-4" />,
                  disabled: true,
                  onClick: () => handleMenuAction("also-disabled"),
                },
                { divider: true },
                {
                  children: "Снова доступно",
                  icon: <Download className="w-4 h-4" />,
                  onClick: () => handleMenuAction("available-again"),
                },
              ]}
            />
          </div>
        </section>

        {/* Размеры */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-[#292D30]">Размеры</h2>
          <div className="flex flex-wrap gap-4">
            <CustomMenu
              size="sm"
              trigger={<CustomButton size="sm">Small Menu</CustomButton>}
              children={[
                { children: "Элемент 1", onClick: () => handleMenuAction("item1") },
                { children: "Элемент 2", onClick: () => handleMenuAction("item2") },
                { children: "Элемент 3", onClick: () => handleMenuAction("item3") },
              ]}
            />

            <CustomMenu
              size="md"
              trigger={<CustomButton size="md">Medium Menu</CustomButton>}
              children={[
                { children: "Элемент 1", onClick: () => handleMenuAction("item1") },
                { children: "Элемент 2", onClick: () => handleMenuAction("item2") },
                { children: "Элемент 3", onClick: () => handleMenuAction("item3") },
              ]}
            />

            <CustomMenu
              size="lg"
              trigger={<CustomButton size="lg">Large Menu</CustomButton>}
              children={[
                { children: "Элемент 1", onClick: () => handleMenuAction("item1") },
                { children: "Элемент 2", onClick: () => handleMenuAction("item2") },
                { children: "Элемент 3", onClick: () => handleMenuAction("item3") },
              ]}
            />
          </div>
        </section>

        {/* Позиционирование */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-[#292D30]">Позиционирование</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <CustomMenu
              placement="bottom-start"
              trigger={<CustomButton className="w-full">Bottom Start</CustomButton>}
              children={[
                { children: "Элемент 1", onClick: () => handleMenuAction("item1") },
                { children: "Элемент 2", onClick: () => handleMenuAction("item2") },
              ]}
            />

            <CustomMenu
              placement="bottom-end"
              trigger={<CustomButton className="w-full">Bottom End</CustomButton>}
              children={[
                { children: "Элемент 1", onClick: () => handleMenuAction("item1") },
                { children: "Элемент 2", onClick: () => handleMenuAction("item2") },
              ]}
            />

            <CustomMenu
              placement="top-start"
              trigger={<CustomButton className="w-full">Top Start</CustomButton>}
              children={[
                { children: "Элемент 1", onClick: () => handleMenuAction("item1") },
                { children: "Элемент 2", onClick: () => handleMenuAction("item2") },
              ]}
            />

            <CustomMenu
              placement="top-end"
              trigger={<CustomButton className="w-full">Top End</CustomButton>}
              children={[
                { children: "Элемент 1", onClick: () => handleMenuAction("item1") },
                { children: "Элемент 2", onClick: () => handleMenuAction("item2") },
              ]}
            />
          </div>
        </section>

        {/* Практические примеры */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-[#292D30]">Практические примеры</h2>

          {/* Карточки с меню */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-[#292D30]">Карточки с контекстным меню</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[1, 2, 3].map((item) => (
                <CustomCard key={item}>
                  <div className="space-y-4">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="font-semibold text-[#292D30]">Карточка {item}</h3>
                        <p className="text-gray-600 text-sm">Описание карточки</p>
                      </div>
                      <CustomMenu
                        placement="bottom-end"
                        trigger={
                          <CustomButton
                            variant="ghost"
                            size="sm"
                            icon={<MoreHorizontal className="w-4 h-4" />}
                            iconOnly
                          >
                            Меню
                          </CustomButton>
                        }
                        children={[
                          {
                            children: "Редактировать",
                            icon: <Edit className="w-4 h-4" />,
                            onClick: () => handleMenuAction(`edit-${item}`),
                          },
                          {
                            children: "Дублировать",
                            icon: <Copy className="w-4 h-4" />,
                            onClick: () => handleMenuAction(`duplicate-${item}`),
                          },
                          {
                            children: "Поделиться",
                            icon: <Share className="w-4 h-4" />,
                            onClick: () => handleMenuAction(`share-${item}`),
                          },
                          { divider: true },
                          {
                            children: "Удалить",
                            icon: <Trash2 className="w-4 h-4" />,
                            onClick: () => handleMenuAction(`delete-${item}`),
                          },
                        ]}
                      />
                    </div>
                    <div className="w-full h-32 bg-gray-200 rounded flex items-center justify-center">
                      <span className="text-gray-500">Контент {item}</span>
                    </div>
                    <div className="flex gap-2">
                      <CustomButton variant="primary" size="sm" className="flex-1">
                        Основное действие
                      </CustomButton>
                    </div>
                  </div>
                </CustomCard>
              ))}
            </div>
          </div>

          {/* Навигационное меню */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-[#292D30]">Навигационное меню</h3>
            <CustomCard>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <h3 className="text-xl font-bold text-[#292D30]">Мое приложение</h3>
                  <div className="flex gap-2">
                    <CustomMenu
                      trigger={
                        <CustomButton variant="ghost" icon={<ChevronDown className="w-4 h-4" />} iconPosition="right">
                          Файл
                        </CustomButton>
                      }
                      children={[
                        {
                          children: "Новый файл",
                          shortcut: "Ctrl+N",
                          onClick: () => handleMenuAction("new-file"),
                        },
                        {
                          children: "Открыть",
                          shortcut: "Ctrl+O",
                          onClick: () => handleMenuAction("open"),
                        },
                        {
                          children: "Сохранить",
                          shortcut: "Ctrl+S",
                          onClick: () => handleMenuAction("save"),
                        },
                        { divider: true },
                        {
                          children: "Экспорт",
                          submenu: [
                            {
                              children: "Экспорт в PDF",
                              onClick: () => handleMenuAction("export-pdf"),
                            },
                            {
                              children: "Экспорт в PNG",
                              onClick: () => handleMenuAction("export-png"),
                            },
                            {
                              children: "Экспорт в SVG",
                              onClick: () => handleMenuAction("export-svg"),
                            },
                          ],
                        },
                      ]}
                    />

                    <CustomMenu
                      trigger={
                        <CustomButton variant="ghost" icon={<ChevronDown className="w-4 h-4" />} iconPosition="right">
                          Правка
                        </CustomButton>
                      }
                      children={[
                        {
                          children: "Отменить",
                          shortcut: "Ctrl+Z",
                          onClick: () => handleMenuAction("undo"),
                        },
                        {
                          children: "Повторить",
                          shortcut: "Ctrl+Y",
                          onClick: () => handleMenuAction("redo"),
                        },
                        { divider: true },
                        {
                          children: "Вырезать",
                          shortcut: "Ctrl+X",
                          onClick: () => handleMenuAction("cut"),
                        },
                        {
                          children: "Копировать",
                          shortcut: "Ctrl+C",
                          onClick: () => handleMenuAction("copy"),
                        },
                        {
                          children: "Вставить",
                          shortcut: "Ctrl+V",
                          onClick: () => handleMenuAction("paste"),
                        },
                      ]}
                    />

                    <CustomMenu
                      trigger={
                        <CustomButton variant="ghost" icon={<ChevronDown className="w-4 h-4" />} iconPosition="right">
                          Вид
                        </CustomButton>
                      }
                      children={[
                        {
                          children: "Масштаб",
                          submenu: [
                            {
                              children: "Увеличить",
                              shortcut: "Ctrl++",
                              onClick: () => handleMenuAction("zoom-in"),
                            },
                            {
                              children: "Уменьшить",
                              shortcut: "Ctrl+-",
                              onClick: () => handleMenuAction("zoom-out"),
                            },
                            {
                              children: "100%",
                              shortcut: "Ctrl+0",
                              onClick: () => handleMenuAction("zoom-100"),
                            },
                          ],
                        },
                        { divider: true },
                        {
                          children: "Полноэкранный режим",
                          shortcut: "F11",
                          onClick: () => handleMenuAction("fullscreen"),
                        },
                      ]}
                    />
                  </div>
                </div>

                <CustomMenu
                  placement="bottom-end"
                  trigger={
                    <CustomButton variant="outlined" icon={<User className="w-4 h-4" />} iconPosition="left">
                      Профиль
                    </CustomButton>
                  }
                  children={[
                    {
                      children: "Мой профиль",
                      icon: <User className="w-4 h-4" />,
                      onClick: () => handleMenuAction("profile"),
                    },
                    {
                      children: "Настройки",
                      icon: <Settings className="w-4 h-4" />,
                      onClick: () => handleMenuAction("settings"),
                    },
                    {
                      children: "Уведомления",
                      icon: <Bell className="w-4 h-4" />,
                      onClick: () => handleMenuAction("notifications"),
                    },
                    { divider: true },
                    {
                      children: "Выйти",
                      icon: <LogOut className="w-4 h-4" />,
                      onClick: () => handleMenuAction("logout"),
                    },
                  ]}
                />
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
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-[#292D30]">Мобильное приложение</h3>
                  <CustomMenu
                    size="sm"
                    placement="bottom-end"
                    trigger={
                      <CustomButton variant="ghost" size="sm" icon={<MoreHorizontal className="w-4 h-4" />} iconOnly>
                        Меню
                      </CustomButton>
                    }
                    children={[
                      {
                        children: "Главная",
                        icon: <Home className="w-4 h-4" />,
                        onClick: () => handleMenuAction("home"),
                      },
                      {
                        children: "Поиск",
                        icon: <Search className="w-4 h-4" />,
                        onClick: () => handleMenuAction("search"),
                      },
                      {
                        children: "Избранное",
                        icon: <Heart className="w-4 h-4" />,
                        onClick: () => handleMenuAction("favorites"),
                      },
                      {
                        children: "Профиль",
                        icon: <User className="w-4 h-4" />,
                        onClick: () => handleMenuAction("profile"),
                      },
                      { divider: true },
                      {
                        children: "Настройки",
                        icon: <Settings className="w-4 h-4" />,
                        onClick: () => handleMenuAction("settings"),
                      },
                    ]}
                  />
                </div>
                <div className="mt-4 space-y-3">
                  <div className="w-full h-32 bg-gray-200 rounded flex items-center justify-center">
                    <span className="text-gray-500">Мобильный контент</span>
                  </div>
                  <div className="flex gap-2">
                    <CustomButton variant="primary" size="sm" className="flex-1">
                      Действие
                    </CustomButton>
                    <CustomButton variant="outlined" size="sm" className="flex-1">
                      Отмена
                    </CustomButton>
                  </div>
                </div>
              </CustomCard>
            </div>
          </div>

          {/* Планшетное меню */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-[#292D30]">Планшетное меню</h3>
            <div className="max-w-2xl mx-auto">
              <CustomCard>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-[#292D30]">Планшетное приложение</h3>
                  <div className="flex gap-2">
                    <CustomMenu
                      trigger={
                        <CustomButton
                          variant="outlined"
                          icon={<ChevronDown className="w-4 h-4" />}
                          iconPosition="right"
                        >
                          Действия
                        </CustomButton>
                      }
                      children={[
                        {
                          children: "Создать",
                          icon: <Edit className="w-4 h-4" />,
                          onClick: () => handleMenuAction("create"),
                        },
                        {
                          children: "Импорт",
                          icon: <Download className="w-4 h-4" />,
                          onClick: () => handleMenuAction("import"),
                        },
                        {
                          children: "Экспорт",
                          icon: <Share className="w-4 h-4" />,
                          onClick: () => handleMenuAction("export"),
                        },
                      ]}
                    />
                    <CustomMenu
                      placement="bottom-end"
                      trigger={
                        <CustomButton variant="primary" icon={<User className="w-4 h-4" />} iconPosition="left">
                          Аккаунт
                        </CustomButton>
                      }
                      children={[
                        {
                          children: "Профиль",
                          icon: <User className="w-4 h-4" />,
                          onClick: () => handleMenuAction("profile"),
                        },
                        {
                          children: "Настройки",
                          icon: <Settings className="w-4 h-4" />,
                          onClick: () => handleMenuAction("settings"),
                        },
                        { divider: true },
                        {
                          children: "Выйти",
                          icon: <LogOut className="w-4 h-4" />,
                          onClick: () => handleMenuAction("logout"),
                        },
                      ]}
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="w-full h-40 bg-gray-200 rounded flex items-center justify-center">
                    <span className="text-gray-500">Контент 1</span>
                  </div>
                  <div className="w-full h-40 bg-gray-200 rounded flex items-center justify-center">
                    <span className="text-gray-500">Контент 2</span>
                  </div>
                </div>
              </CustomCard>
            </div>
          </div>
        </section>

        {/* Кастомные цвета */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-[#292D30]">Кастомные цвета</h2>
          <div className="flex flex-wrap gap-4">
            <CustomMenu
              borderColor="#AFEB0F"
              backgroundColor="#AFEB0F"
              trigger={
                <CustomButton borderColor="#AFEB0F" backgroundColor="#AFEB0F">
                  Брендовое меню
                </CustomButton>
              }
              children={[
                { children: "Элемент 1", onClick: () => handleMenuAction("item1") },
                { children: "Элемент 2", onClick: () => handleMenuAction("item2") },
                { children: "Элемент 3", onClick: () => handleMenuAction("item3") },
              ]}
            />

            <CustomMenu
              borderColor="#ef4444"
              backgroundColor="#fef2f2"
              trigger={
                <CustomButton borderColor="#ef4444" textColor="#ef4444">
                  Красное меню
                </CustomButton>
              }
              children={[
                { children: "Элемент 1", onClick: () => handleMenuAction("item1") },
                { children: "Элемент 2", onClick: () => handleMenuAction("item2") },
                { children: "Элемент 3", onClick: () => handleMenuAction("item3") },
              ]}
            />

            <CustomMenu
              borderColor="#10b981"
              backgroundColor="#f0fdf4"
              trigger={
                <CustomButton borderColor="#10b981" textColor="#10b981">
                  Зеленое меню
                </CustomButton>
              }
              children={[
                { children: "Элемент 1", onClick: () => handleMenuAction("item1") },
                { children: "Элемент 2", onClick: () => handleMenuAction("item2") },
                { children: "Элемент 3", onClick: () => handleMenuAction("item3") },
              ]}
            />
          </div>
        </section>

        {/* Документация API */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-[#292D30]">Документация API</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <CustomCard>
              <h3 className="text-lg font-semibold mb-4 text-[#292D30]">CustomMenu Props</h3>
              <div className="space-y-3 text-sm">
                <div>
                  <code className="bg-gray-100 px-2 py-1 rounded text-[#292D30]">trigger</code>
                  <span className="ml-2 text-gray-600">React.ReactNode</span>
                  <p className="text-gray-500 mt-1">Элемент, который открывает меню</p>
                </div>
                <div>
                  <code className="bg-gray-100 px-2 py-1 rounded text-[#292D30]">children</code>
                  <span className="ml-2 text-gray-600">MenuItemProps[]</span>
                  <p className="text-gray-500 mt-1">Массив элементов меню</p>
                </div>
                <div>
                  <code className="bg-gray-100 px-2 py-1 rounded text-[#292D30]">size</code>
                  <span className="ml-2 text-gray-600">"sm" | "md" | "lg"</span>
                  <p className="text-gray-500 mt-1">Размер скосов. По умолчанию "md"</p>
                </div>
                <div>
                  <code className="bg-gray-100 px-2 py-1 rounded text-[#292D30]">placement</code>
                  <span className="ml-2 text-gray-600">"bottom-start" | "bottom-end" | "top-start" | "top-end"</span>
                  <p className="text-gray-500 mt-1">Позиция меню. По умолчанию "bottom-start"</p>
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
              </div>
            </CustomCard>

            <CustomCard>
              <h3 className="text-lg font-semibold mb-4 text-[#292D30]">MenuItemProps</h3>
              <div className="space-y-3 text-sm">
                <div>
                  <code className="bg-gray-100 px-2 py-1 rounded text-[#292D30]">children</code>
                  <span className="ml-2 text-gray-600">React.ReactNode</span>
                  <p className="text-gray-500 mt-1">Содержимое элемента меню</p>
                </div>
                <div>
                  <code className="bg-gray-100 px-2 py-1 rounded text-[#292D30]">onClick</code>
                  <span className="ml-2 text-gray-600">() =&gt; void</span>
                  <p className="text-gray-500 mt-1">Функция обработки клика</p>
                </div>
                <div>
                  <code className="bg-gray-100 px-2 py-1 rounded text-[#292D30]">icon</code>
                  <span className="ml-2 text-gray-600">React.ReactNode</span>
                  <p className="text-gray-500 mt-1">Иконка элемента</p>
                </div>
                <div>
                  <code className="bg-gray-100 px-2 py-1 rounded text-[#292D30]">shortcut</code>
                  <span className="ml-2 text-gray-600">string</span>
                  <p className="text-gray-500 mt-1">Горячая клавиша</p>
                </div>
                <div>
                  <code className="bg-gray-100 px-2 py-1 rounded text-[#292D30]">disabled</code>
                  <span className="ml-2 text-gray-600">boolean</span>
                  <p className="text-gray-500 mt-1">Отключить элемент. По умолчанию false</p>
                </div>
                <div>
                  <code className="bg-gray-100 px-2 py-1 rounded text-[#292D30]">divider</code>
                  <span className="ml-2 text-gray-600">boolean</span>
                  <p className="text-gray-500 mt-1">Разделитель. По умолчанию false</p>
                </div>
                <div>
                  <code className="bg-gray-100 px-2 py-1 rounded text-[#292D30]">submenu</code>
                  <span className="ml-2 text-gray-600">MenuItemProps[]</span>
                  <p className="text-gray-500 mt-1">Подменю</p>
                </div>
              </div>
            </CustomCard>
          </div>
        </section>
      </div>
    </div>
  )
}
