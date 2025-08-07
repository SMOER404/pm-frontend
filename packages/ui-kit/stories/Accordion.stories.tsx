import type { Meta, StoryObj } from "@storybook/react"
import { useState } from "react"
import CustomAccordion from "../components/custom-accordion"
import { ChevronDown, Info, Settings, User, FileText, Star, Heart, AlertTriangle } from "lucide-react"

const meta: Meta<typeof CustomAccordion> = {
  title: "Components/Accordion V2",
  component: CustomAccordion,
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
      options: ["bordered", "card", "minimal", "elevated"],
    },
    size: {
      control: { type: "select" },
      options: ["xs", "sm", "md", "lg", "xl"],
    },
    multiple: {
      control: { type: "boolean" },
    },
  },
}

export default meta
type Story = StoryObj<typeof CustomAccordion>

// Базовые элементы для демонстрации
const basicItems = [
  {
    id: "section1",
    title: "Основная информация",
    content: (
      <div className="space-y-3">
        <p>Здесь содержится основная информация о проекте или разделе.</p>
        <div className="bg-blue-50 p-3 rounded-lg">
          <h4 className="font-medium text-blue-900 mb-2">Важные детали</h4>
          <ul className="text-sm text-blue-800 space-y-1">
            <li>• Первый важный пункт</li>
            <li>• Второй важный пункт</li>
            <li>• Третий важный пункт</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    id: "section2",
    title: "Дополнительные настройки",
    content: (
      <div className="space-y-3">
        <p>Расширенные настройки и конфигурации для продвинутых пользователей.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="bg-green-50 p-3 rounded-lg">
            <h4 className="font-medium text-green-900 mb-2">Оптимизация</h4>
            <p className="text-sm text-green-800">Настройки производительности</p>
          </div>
          <div className="bg-purple-50 p-3 rounded-lg">
            <h4 className="font-medium text-purple-900 mb-2">Безопасность</h4>
            <p className="text-sm text-purple-800">Параметры безопасности</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "section3",
    title: "Справочная информация",
    content: (
      <div className="space-y-3">
        <p>Полезная справочная информация и документация.</p>
        <div className="bg-yellow-50 p-3 rounded-lg">
          <h4 className="font-medium text-yellow-900 mb-2">Полезные ссылки</h4>
          <ul className="text-sm text-yellow-800 space-y-1">
            <li>• <a href="#" className="underline hover:no-underline">Документация</a></li>
            <li>• <a href="#" className="underline hover:no-underline">FAQ</a></li>
            <li>• <a href="#" className="underline hover:no-underline">Поддержка</a></li>
          </ul>
        </div>
      </div>
    ),
  },
]

export const Default: Story = {
  args: {
    items: basicItems,
  },
}

export const Variants: Story = {
  render: () => (
    <div className="space-y-8 w-full max-w-4xl">
      <div>
        <h3 className="text-lg font-semibold mb-4">Default Variant</h3>
        <CustomAccordion items={basicItems} variant="default" />
      </div>
      
      <div>
        <h3 className="text-lg font-semibold mb-4">Brand Variant</h3>
        <CustomAccordion items={basicItems} variant="brand" />
      </div>
      
      <div>
        <h3 className="text-lg font-semibold mb-4">Primary Variant</h3>
        <CustomAccordion items={basicItems} variant="primary" />
      </div>
    </div>
  ),
}

export const Styles: Story = {
  render: () => (
    <div className="space-y-8 w-full max-w-4xl">
      <div>
        <h3 className="text-lg font-semibold mb-4">Bordered Style</h3>
        <CustomAccordion items={basicItems} style="bordered" />
      </div>
      
      <div>
        <h3 className="text-lg font-semibold mb-4">Card Style</h3>
        <CustomAccordion items={basicItems} style="card" />
      </div>
      
      <div>
        <h3 className="text-lg font-semibold mb-4">Minimal Style</h3>
        <CustomAccordion items={basicItems} style="minimal" />
      </div>
      
      <div>
        <h3 className="text-lg font-semibold mb-4">Elevated Style</h3>
        <CustomAccordion items={basicItems} style="elevated" />
      </div>
    </div>
  ),
}

export const Sizes: Story = {
  render: () => (
    <div className="space-y-8 w-full max-w-4xl">
      <div>
        <h3 className="text-lg font-semibold mb-4">Extra Small</h3>
        <CustomAccordion items={basicItems} size="xs" />
      </div>
      
      <div>
        <h3 className="text-lg font-semibold mb-4">Small</h3>
        <CustomAccordion items={basicItems} size="sm" />
      </div>
      
      <div>
        <h3 className="text-lg font-semibold mb-4">Medium (Default)</h3>
        <CustomAccordion items={basicItems} size="md" />
      </div>
      
      <div>
        <h3 className="text-lg font-semibold mb-4">Large</h3>
        <CustomAccordion items={basicItems} size="lg" />
      </div>
      
      <div>
        <h3 className="text-lg font-semibold mb-4">Extra Large</h3>
        <CustomAccordion items={basicItems} size="xl" />
      </div>
    </div>
  ),
}

export const WithIcons: Story = {
  render: () => {
    const itemsWithIcons = [
      {
        id: "info",
        title: "Информация",
        icon: <Info className="w-4 h-4" />,
        content: (
          <div className="space-y-3">
            <p>Основная информация о проекте и его возможностях.</p>
            <div className="bg-blue-50 p-3 rounded-lg">
              <p className="text-sm text-blue-800">
                Здесь вы можете найти всю необходимую информацию для начала работы.
              </p>
            </div>
          </div>
        ),
      },
      {
        id: "settings",
        title: "Настройки",
        icon: <Settings className="w-4 h-4" />,
        content: (
          <div className="space-y-3">
            <p>Настройки приложения и пользовательские предпочтения.</p>
            <div className="space-y-2">
              <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                <span className="text-sm">Уведомления</span>
                <input type="checkbox" className="w-4 h-4" defaultChecked />
              </div>
              <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                <span className="text-sm">Темная тема</span>
                <input type="checkbox" className="w-4 h-4" />
              </div>
            </div>
          </div>
        ),
      },
      {
        id: "profile",
        title: "Профиль",
        icon: <User className="w-4 h-4" />,
        content: (
          <div className="space-y-3">
            <p>Управление профилем пользователя и личными данными.</p>
            <div className="bg-green-50 p-3 rounded-lg">
              <h4 className="font-medium text-green-900 mb-2">Личная информация</h4>
              <p className="text-sm text-green-800">
                Имя, email, телефон и другие контактные данные.
              </p>
            </div>
          </div>
        ),
      },
    ]

    return (
      <div className="space-y-8 w-full max-w-4xl">
        <div>
          <h3 className="text-lg font-semibold mb-4">With Icons</h3>
          <CustomAccordion items={itemsWithIcons} variant="brand" />
        </div>
      </div>
    )
  },
}

export const WithBadges: Story = {
  render: () => {
    const itemsWithBadges = [
      {
        id: "notifications",
        title: "Уведомления",
        icon: <AlertTriangle className="w-4 h-4" />,
        badge: "3",
        content: (
          <div className="space-y-3">
            <p>У вас есть 3 непрочитанных уведомления.</p>
            <div className="space-y-2">
              <div className="p-3 bg-red-50 border-l-4 border-red-400 rounded">
                <p className="text-sm text-red-800">Важное уведомление о системе</p>
              </div>
              <div className="p-3 bg-yellow-50 border-l-4 border-yellow-400 rounded">
                <p className="text-sm text-yellow-800">Предупреждение о безопасности</p>
              </div>
              <div className="p-3 bg-blue-50 border-l-4 border-blue-400 rounded">
                <p className="text-sm text-blue-800">Информационное сообщение</p>
              </div>
            </div>
          </div>
        ),
      },
      {
        id: "favorites",
        title: "Избранное",
        icon: <Heart className="w-4 h-4" />,
        badge: "12",
        content: (
          <div className="space-y-3">
            <p>У вас 12 избранных элементов.</p>
            <div className="grid grid-cols-2 gap-2">
              {Array.from({ length: 6 }, (_, i) => (
                <div key={i} className="p-2 bg-gray-50 rounded text-center text-sm">
                  Элемент {i + 1}
                </div>
              ))}
            </div>
          </div>
        ),
      },
      {
        id: "reviews",
        title: "Отзывы",
        icon: <Star className="w-4 h-4" />,
        badge: "5",
        content: (
          <div className="space-y-3">
            <p>У вас 5 непрочитанных отзывов.</p>
            <div className="space-y-2">
              {Array.from({ length: 3 }, (_, i) => (
                <div key={i} className="p-3 bg-gray-50 rounded">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="flex text-yellow-400">
                      {Array.from({ length: 5 }, (_, j) => (
                        <Star key={j} className="w-3 h-3 fill-current" />
                      ))}
                    </div>
                    <span className="text-sm text-gray-600">Отзыв {i + 1}</span>
                  </div>
                  <p className="text-sm text-gray-700">
                    Отличный продукт! Очень доволен качеством и функциональностью.
                  </p>
                </div>
              ))}
            </div>
          </div>
        ),
      },
    ]

    return (
      <div className="space-y-8 w-full max-w-4xl">
        <div>
          <h3 className="text-lg font-semibold mb-4">With Badges</h3>
          <CustomAccordion items={itemsWithBadges} variant="brand" style="card" />
        </div>
      </div>
    )
  },
}

export const MultipleOpen: Story = {
  render: () => {
    const multipleItems = [
      {
        id: "section1",
        title: "Первая секция",
        icon: <FileText className="w-4 h-4" />,
        content: (
          <div className="space-y-3">
            <p>Содержимое первой секции. При множественном открытии можно открыть несколько секций одновременно.</p>
            <div className="bg-blue-50 p-3 rounded-lg">
              <p className="text-sm text-blue-800">
                Эта секция может быть открыта вместе с другими.
              </p>
            </div>
          </div>
        ),
      },
      {
        id: "section2",
        title: "Вторая секция",
        icon: <Settings className="w-4 h-4" />,
        content: (
          <div className="space-y-3">
            <p>Содержимое второй секции. Все секции могут быть открыты одновременно.</p>
            <div className="bg-green-50 p-3 rounded-lg">
              <p className="text-sm text-green-800">
                Множественное открытие полезно для сравнения содержимого.
              </p>
            </div>
          </div>
        ),
      },
      {
        id: "section3",
        title: "Третья секция",
        icon: <User className="w-4 h-4" />,
        content: (
          <div className="space-y-3">
            <p>Содержимое третьей секции. Можно открыть все секции сразу.</p>
            <div className="bg-purple-50 p-3 rounded-lg">
              <p className="text-sm text-purple-800">
                Удобно для просмотра большого количества информации.
              </p>
            </div>
          </div>
        ),
      },
    ]

    return (
      <div className="space-y-8 w-full max-w-4xl">
        <div>
          <h3 className="text-lg font-semibold mb-4">Multiple Open</h3>
          <CustomAccordion 
            items={multipleItems} 
            multiple 
            defaultOpenItems={["section1"]}
            variant="brand" 
          />
        </div>
      </div>
    )
  },
}

export const DisabledItems: Story = {
  render: () => {
    const itemsWithDisabled = [
      {
        id: "active",
        title: "Активная секция",
        icon: <Info className="w-4 h-4" />,
        content: (
          <div className="space-y-3">
            <p>Эта секция активна и может быть открыта.</p>
            <div className="bg-green-50 p-3 rounded-lg">
              <p className="text-sm text-green-800">
                Содержимое доступно для просмотра.
              </p>
            </div>
          </div>
        ),
      },
      {
        id: "disabled",
        title: "Отключенная секция",
        icon: <Settings className="w-4 h-4" />,
        disabled: true,
        content: (
          <div className="space-y-3">
            <p>Эта секция временно недоступна.</p>
          </div>
        ),
      },
      {
        id: "another",
        title: "Еще одна активная секция",
        icon: <User className="w-4 h-4" />,
        content: (
          <div className="space-y-3">
            <p>Эта секция также активна и доступна.</p>
            <div className="bg-blue-50 p-3 rounded-lg">
              <p className="text-sm text-blue-800">
                Можно открыть и просмотреть содержимое.
              </p>
            </div>
          </div>
        ),
      },
    ]

    return (
      <div className="space-y-8 w-full max-w-4xl">
        <div>
          <h3 className="text-lg font-semibold mb-4">With Disabled Items</h3>
          <CustomAccordion items={itemsWithDisabled} variant="brand" />
        </div>
      </div>
    )
  },
}

export const ControlledAccordion: Story = {
  render: () => {
    const [openItems, setOpenItems] = useState<string[]>(["section1"])

    const controlledItems = [
      {
        id: "section1",
        title: "Первая секция",
        icon: <Info className="w-4 h-4" />,
        content: (
          <div className="space-y-3">
            <p>Активные секции: {openItems.join(", ") || "нет"}</p>
            <button
              onClick={() => setOpenItems(["section2"])}
              className="px-4 py-2 bg-brand text-primary rounded-md"
            >
              Открыть вторую секцию
            </button>
          </div>
        ),
      },
      {
        id: "section2",
        title: "Вторая секция",
        icon: <Settings className="w-4 h-4" />,
        content: (
          <div className="space-y-3">
            <p>Активные секции: {openItems.join(", ") || "нет"}</p>
            <button
              onClick={() => setOpenItems(["section3"])}
              className="px-4 py-2 bg-brand text-primary rounded-md"
            >
              Открыть третью секцию
            </button>
          </div>
        ),
      },
      {
        id: "section3",
        title: "Третья секция",
        icon: <User className="w-4 h-4" />,
        content: (
          <div className="space-y-3">
            <p>Активные секции: {openItems.join(", ") || "нет"}</p>
            <button
              onClick={() => setOpenItems(["section1"])}
              className="px-4 py-2 bg-brand text-primary rounded-md"
            >
              Открыть первую секцию
            </button>
          </div>
        ),
      },
    ]

    const handleItemToggle = (itemId: string, isOpen: boolean) => {
      if (isOpen) {
        setOpenItems([itemId])
      } else {
        setOpenItems([])
      }
    }

    return (
      <div className="space-y-8 w-full max-w-4xl">
        <div>
          <h3 className="text-lg font-semibold mb-4">Controlled Accordion</h3>
          <CustomAccordion
            items={controlledItems}
            controlled
            openItems={openItems}
            onItemToggle={handleItemToggle}
            variant="brand"
            style="card"
          />
        </div>
      </div>
    )
  },
}

export const FAQExample: Story = {
  render: () => {
    const faqItems = [
      {
        id: "what-is",
        title: "Что такое этот продукт?",
        icon: <Info className="w-4 h-4" />,
        content: (
          <div className="space-y-3">
            <p>
              Это современная UI библиотека компонентов, созданная с использованием 
              React, TypeScript и Tailwind CSS. Она предоставляет готовые к использованию 
              компоненты с единой системой дизайн-токенов.
            </p>
            <div className="bg-blue-50 p-3 rounded-lg">
              <h4 className="font-medium text-blue-900 mb-2">Основные особенности:</h4>
              <ul className="text-sm text-blue-800 space-y-1">
                <li>• Единая система дизайн-токенов</li>
                <li>• Поддержка скошенных углов</li>
                <li>• Полная типизация TypeScript</li>
                <li>• Документация в Storybook</li>
              </ul>
            </div>
          </div>
        ),
      },
      {
        id: "how-to-use",
        title: "Как использовать компоненты?",
        icon: <Settings className="w-4 h-4" />,
        content: (
          <div className="space-y-3">
            <p>
              Компоненты легко интегрируются в любой React проект. Просто импортируйте 
              нужный компонент и используйте его с необходимыми пропсами.
            </p>
            <div className="bg-green-50 p-3 rounded-lg">
              <h4 className="font-medium text-green-900 mb-2">Пример использования:</h4>
              <pre className="text-sm text-green-800 bg-green-100 p-2 rounded">
{`import CustomButton from './components/custom-button'

<CustomButton variant="brand" size="md">
  Нажми меня
</CustomButton>`}
              </pre>
            </div>
          </div>
        ),
      },
      {
        id: "customization",
        title: "Как настроить внешний вид?",
        icon: <User className="w-4 h-4" />,
        content: (
          <div className="space-y-3">
            <p>
              Все компоненты поддерживают различные варианты, стили и размеры. 
              Вы можете настроить их через пропсы или переопределить стили через CSS классы.
            </p>
            <div className="bg-purple-50 p-3 rounded-lg">
              <h4 className="font-medium text-purple-900 mb-2">Доступные опции:</h4>
              <ul className="text-sm text-purple-800 space-y-1">
                <li>• Варианты: default, brand, primary, secondary</li>
                <li>• Размеры: xs, sm, md, lg, xl</li>
                <li>• Стили: bordered, card, minimal, elevated</li>
                <li>• Кастомные CSS классы</li>
              </ul>
            </div>
          </div>
        ),
      },
    ]

    return (
      <div className="space-y-8 w-full max-w-4xl">
        <div>
          <h3 className="text-lg font-semibold mb-4">FAQ Example</h3>
          <CustomAccordion 
            items={faqItems} 
            variant="brand" 
            style="card"
            defaultOpenItems={["what-is"]}
          />
        </div>
      </div>
    )
  },
}

export const CustomStyling: Story = {
  render: () => (
    <div className="space-y-8 w-full max-w-4xl">
      <div>
        <h3 className="text-lg font-semibold mb-4">Custom Styled Accordion</h3>
        <CustomAccordion
          items={basicItems}
          variant="brand"
          style="elevated"
          className="bg-gradient-to-r from-purple-50 to-pink-50 p-4 rounded-lg"
          containerClassName="space-y-4"
          itemClassName="bg-white/80 backdrop-blur-sm rounded-lg"
          headerClassName="rounded-lg"
          panelClassName="bg-white/60 backdrop-blur-sm rounded-b-lg"
        />
      </div>
    </div>
  ),
} 