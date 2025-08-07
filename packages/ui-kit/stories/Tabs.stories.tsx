import type { Meta, StoryObj } from "@storybook/react"
import { useState } from "react"
import CustomTabs from "../components/custom-tabs"
import CustomBadge from "../components/custom-badge"
import { Home, User, Settings, Bell, Heart, Star, FileText, Image } from "lucide-react"

const meta: Meta<typeof CustomTabs> = {
  title: "Components/Tabs V2",
  component: CustomTabs,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["default", "brand", "primary", "secondary"],
    },
    style: {
      control: { type: "select" },
      options: ["line", "card", "pill", "underline"],
    },
    size: {
      control: { type: "select" },
      options: ["xs", "sm", "md", "lg", "xl"],
    },
    orientation: {
      control: { type: "select" },
      options: ["horizontal", "vertical"],
    },
  },
}

export default meta
type Story = StoryObj<typeof CustomTabs>

// Базовые табы для демонстрации
const basicTabs = [
  {
    id: "home",
    label: "Главная",
    content: (
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Главная страница</h3>
        <p>Добро пожаловать на главную страницу приложения.</p>
        <div className="bg-gray-50 p-4 rounded-lg">
          <h4 className="font-medium mb-2">Быстрые действия</h4>
          <ul className="space-y-1 text-sm">
            <li>• Просмотр статистики</li>
            <li>• Управление настройками</li>
            <li>• Мониторинг системы</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    id: "profile",
    label: "Профиль",
    content: (
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Профиль пользователя</h3>
        <p>Управление настройками профиля и личными данными.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="font-medium mb-2">Личная информация</h4>
            <p className="text-sm text-gray-600">Имя, email, телефон</p>
          </div>
          <div className="bg-green-50 p-4 rounded-lg">
            <h4 className="font-medium mb-2">Безопасность</h4>
            <p className="text-sm text-gray-600">Пароль, двухфакторная аутентификация</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "settings",
    label: "Настройки",
    content: (
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Настройки приложения</h3>
        <p>Настройка параметров и конфигурации системы.</p>
        <div className="space-y-3">
          <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
            <span>Уведомления</span>
            <input type="checkbox" className="w-4 h-4" defaultChecked />
          </div>
          <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
            <span>Темная тема</span>
            <input type="checkbox" className="w-4 h-4" />
          </div>
          <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
            <span>Автосохранение</span>
            <input type="checkbox" className="w-4 h-4" defaultChecked />
          </div>
        </div>
      </div>
    ),
  },
]

export const Default: Story = {
  args: {
    tabs: basicTabs,
  },
}

export const Variants: Story = {
  render: () => (
    <div className="space-y-8 w-full max-w-4xl">
      <div>
        <h3 className="text-lg font-semibold mb-4">Default Variant</h3>
        <CustomTabs tabs={basicTabs} variant="default" />
      </div>
      
      <div>
        <h3 className="text-lg font-semibold mb-4">Brand Variant</h3>
        <CustomTabs tabs={basicTabs} variant="brand" />
      </div>
      
      <div>
        <h3 className="text-lg font-semibold mb-4">Primary Variant</h3>
        <CustomTabs tabs={basicTabs} variant="primary" />
      </div>
    </div>
  ),
}

export const Styles: Story = {
  render: () => (
    <div className="space-y-8 w-full max-w-4xl">
      <div>
        <h3 className="text-lg font-semibold mb-4">Line Style</h3>
        <CustomTabs tabs={basicTabs} style="line" />
      </div>
      
      <div>
        <h3 className="text-lg font-semibold mb-4">Card Style</h3>
        <CustomTabs tabs={basicTabs} style="card" />
      </div>
      
      <div>
        <h3 className="text-lg font-semibold mb-4">Pill Style</h3>
        <CustomTabs tabs={basicTabs} style="pill" />
      </div>
      
      <div>
        <h3 className="text-lg font-semibold mb-4">Underline Style</h3>
        <CustomTabs tabs={basicTabs} style="underline" />
      </div>
    </div>
  ),
}

export const Sizes: Story = {
  render: () => (
    <div className="space-y-8 w-full max-w-4xl">
      <div>
        <h3 className="text-lg font-semibold mb-4">Extra Small</h3>
        <CustomTabs tabs={basicTabs} size="xs" />
      </div>
      
      <div>
        <h3 className="text-lg font-semibold mb-4">Small</h3>
        <CustomTabs tabs={basicTabs} size="sm" />
      </div>
      
      <div>
        <h3 className="text-lg font-semibold mb-4">Medium (Default)</h3>
        <CustomTabs tabs={basicTabs} size="md" />
      </div>
      
      <div>
        <h3 className="text-lg font-semibold mb-4">Large</h3>
        <CustomTabs tabs={basicTabs} size="lg" />
      </div>
      
      <div>
        <h3 className="text-lg font-semibold mb-4">Extra Large</h3>
        <CustomTabs tabs={basicTabs} size="xl" />
      </div>
    </div>
  ),
}

export const WithIcons: Story = {
  render: () => {
    const tabsWithIcons = [
      {
        id: "home",
        label: "Главная",
        icon: <Home className="w-4 h-4" />,
        content: (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Главная страница</h3>
            <p>Добро пожаловать на главную страницу приложения.</p>
          </div>
        ),
      },
      {
        id: "profile",
        label: "Профиль",
        icon: <User className="w-4 h-4" />,
        content: (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Профиль пользователя</h3>
            <p>Управление настройками профиля и личными данными.</p>
          </div>
        ),
      },
      {
        id: "settings",
        label: "Настройки",
        icon: <Settings className="w-4 h-4" />,
        content: (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Настройки приложения</h3>
            <p>Настройка параметров и конфигурации системы.</p>
          </div>
        ),
      },
      {
        id: "notifications",
        label: "Уведомления",
        icon: <Bell className="w-4 h-4" />,
        content: (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Уведомления</h3>
            <p>Управление уведомлениями и оповещениями.</p>
          </div>
        ),
      },
    ]

    return (
      <div className="space-y-8 w-full max-w-4xl">
        <div>
          <h3 className="text-lg font-semibold mb-4">With Icons</h3>
          <CustomTabs tabs={tabsWithIcons} variant="brand" />
        </div>
      </div>
    )
  },
}

export const WithBadges: Story = {
  render: () => {
    const tabsWithBadges = [
      {
        id: "home",
        label: "Главная",
        icon: <Home className="w-4 h-4" />,
        badge: "3",
        content: (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Главная страница</h3>
            <p>У вас есть 3 новых уведомления.</p>
          </div>
        ),
      },
      {
        id: "favorites",
        label: "Избранное",
        icon: <Heart className="w-4 h-4" />,
        badge: "12",
        content: (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Избранное</h3>
            <p>У вас 12 избранных элементов.</p>
          </div>
        ),
      },
      {
        id: "reviews",
        label: "Отзывы",
        icon: <Star className="w-4 h-4" />,
        badge: "5",
        content: (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Отзывы</h3>
            <p>У вас 5 непрочитанных отзывов.</p>
          </div>
        ),
      },
    ]

    return (
      <div className="space-y-8 w-full max-w-4xl">
        <div>
          <h3 className="text-lg font-semibold mb-4">With Badges</h3>
          <CustomTabs tabs={tabsWithBadges} variant="brand" style="card" />
        </div>
      </div>
    )
  },
}

export const DisabledTabs: Story = {
  render: () => {
    const tabsWithDisabled = [
      {
        id: "home",
        label: "Главная",
        icon: <Home className="w-4 h-4" />,
        content: (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Главная страница</h3>
            <p>Добро пожаловать на главную страницу приложения.</p>
          </div>
        ),
      },
      {
        id: "profile",
        label: "Профиль",
        icon: <User className="w-4 h-4" />,
        disabled: true,
        content: (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Профиль пользователя</h3>
            <p>Этот раздел временно недоступен.</p>
          </div>
        ),
      },
      {
        id: "settings",
        label: "Настройки",
        icon: <Settings className="w-4 h-4" />,
        content: (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Настройки приложения</h3>
            <p>Настройка параметров и конфигурации системы.</p>
          </div>
        ),
      },
    ]

    return (
      <div className="space-y-8 w-full max-w-4xl">
        <div>
          <h3 className="text-lg font-semibold mb-4">With Disabled Tab</h3>
          <CustomTabs tabs={tabsWithDisabled} variant="brand" />
        </div>
      </div>
    )
  },
}

export const ControlledTabs: Story = {
  render: () => {
    const [activeTab, setActiveTab] = useState("home")

    const controlledTabs = [
      {
        id: "home",
        label: "Главная",
        icon: <Home className="w-4 h-4" />,
        content: (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Главная страница</h3>
            <p>Активный таб: {activeTab}</p>
            <button
              onClick={() => setActiveTab("profile")}
              className="px-4 py-2 bg-brand text-primary rounded-md"
            >
              Переключиться на Профиль
            </button>
          </div>
        ),
      },
      {
        id: "profile",
        label: "Профиль",
        icon: <User className="w-4 h-4" />,
        content: (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Профиль пользователя</h3>
            <p>Активный таб: {activeTab}</p>
            <button
              onClick={() => setActiveTab("settings")}
              className="px-4 py-2 bg-brand text-primary rounded-md"
            >
              Переключиться на Настройки
            </button>
          </div>
        ),
      },
      {
        id: "settings",
        label: "Настройки",
        icon: <Settings className="w-4 h-4" />,
        content: (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Настройки приложения</h3>
            <p>Активный таб: {activeTab}</p>
            <button
              onClick={() => setActiveTab("home")}
              className="px-4 py-2 bg-brand text-primary rounded-md"
            >
              Переключиться на Главную
            </button>
          </div>
        ),
      },
    ]

    return (
      <div className="space-y-8 w-full max-w-4xl">
        <div>
          <h3 className="text-lg font-semibold mb-4">Controlled Tabs</h3>
          <CustomTabs
            tabs={controlledTabs}
            controlled
            activeTab={activeTab}
            onTabChange={setActiveTab}
            variant="brand"
            style="card"
          />
        </div>
      </div>
    )
  },
}

export const VerticalTabs: Story = {
  render: () => {
    const verticalTabs = [
      {
        id: "overview",
        label: "Обзор",
        icon: <FileText className="w-4 h-4" />,
        content: (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Обзор проекта</h3>
            <p>Общая информация о проекте и его состоянии.</p>
          </div>
        ),
      },
      {
        id: "gallery",
        label: "Галерея",
        icon: <Image className="w-4 h-4" />,
        content: (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Галерея изображений</h3>
            <p>Просмотр и управление изображениями проекта.</p>
          </div>
        ),
      },
      {
        id: "analytics",
        label: "Аналитика",
        icon: <Star className="w-4 h-4" />,
        content: (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Аналитика</h3>
            <p>Статистика и аналитические данные проекта.</p>
          </div>
        ),
      },
    ]

    return (
      <div className="space-y-8 w-full max-w-6xl">
        <div>
          <h3 className="text-lg font-semibold mb-4">Vertical Tabs</h3>
          <div className="flex gap-8">
            <div className="w-64">
              <CustomTabs
                tabs={verticalTabs}
                orientation="vertical"
                variant="brand"
                style="card"
              />
            </div>
            <div className="flex-1">
              <h4 className="text-md font-medium mb-2">Дополнительная информация</h4>
              <p className="text-gray-600">
                Вертикальные табы удобны для навигации по разделам с большим количеством контента.
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  },
}

export const CustomStyling: Story = {
  render: () => (
    <div className="space-y-8 w-full max-w-4xl">
      <div>
        <h3 className="text-lg font-semibold mb-4">Custom Styled Tabs</h3>
        <CustomTabs
          tabs={basicTabs}
          variant="brand"
          style="pill"
          className="bg-gradient-to-r from-purple-50 to-pink-50 p-4 rounded-lg"
          tabsClassName="bg-white/50 backdrop-blur-sm rounded-full p-1"
          panelClassName="bg-white/80 backdrop-blur-sm rounded-lg p-6"
        />
      </div>
    </div>
  ),
} 