import type { Meta, StoryObj } from "@storybook/react"
import CustomContainer from "../components/custom-container"
import { CustomTypography } from "../components/custom-typography"
import CustomBox from "../components/custom-box"

const meta = {
  title: "Layout/Container",
  component: CustomContainer,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component: `
# Container - Компонент для позиционирования и адаптивности

## Основные возможности

### Позиционирование
- **maxWidth**: Контролирует максимальную ширину контейнера
- **fixed**: Фиксированное позиционирование
- **disableGutters**: Отключение отступов

### Адаптивность
- Автоматические отступы на разных экранах
- Responsive max-width
- Центрирование контента

## Использование

\`\`\`tsx
import { CustomContainer } from "@poizon/ui-kit"

<CustomContainer maxWidth="lg" className="py-8">
  <h1>Контент</h1>
</CustomContainer>
\`\`\`

## Размеры maxWidth

| Размер | Максимальная ширина | Применение |
|--------|-------------------|------------|
| xs | 320px | Мобильные формы |
| sm | 384px | Небольшие карточки |
| md | 448px | Средние компоненты |
| lg | 896px | Основной контент |
| xl | 1152px | Широкий контент |
| 2xl | 1280px | Максимальная ширина |
| false | 100% | Полная ширина |
        `,
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    maxWidth: {
      control: "select",
      options: ["xs", "sm", "md", "lg", "xl", "2xl", false],
      description: "Максимальная ширина контейнера",
    },
    fixed: {
      control: "boolean",
      description: "Фиксированное позиционирование",
    },
    disableGutters: {
      control: "boolean",
      description: "Отключить отступы",
    },
    component: {
      control: "select",
      options: ["div", "section", "main", "article", "aside"],
      description: "HTML элемент",
    },
  },
} satisfies Meta<typeof CustomContainer>

export default meta
type Story = StoryObj<typeof meta>

// Базовые примеры
export const Default: Story = {
  args: {
    children: (
      <CustomBox padding={20} backgroundColor="#f5f5f5" borderRadius={8}>
        <CustomTypography variant="h3" className="mb-4">Стандартный контейнер</CustomTypography>
        <CustomTypography variant="body" size="md">
          Этот контейнер использует стандартные настройки: maxWidth="lg" (896px), 
          автоматические отступы и центрирование контента.
        </CustomTypography>
      </CustomBox>
    ),
  },
}

export const SmallContainer: Story = {
  args: {
    maxWidth: "sm",
    children: (
      <CustomBox padding={20} backgroundColor="#e3f2fd" borderRadius={8}>
        <CustomTypography variant="h4" className="mb-4">Маленький контейнер</CustomTypography>
        <CustomTypography variant="body" size="md">
          Максимальная ширина: 384px. Идеально для форм и небольших карточек.
        </CustomTypography>
      </CustomBox>
    ),
  },
}

export const LargeContainer: Story = {
  args: {
    maxWidth: "xl",
    children: (
      <CustomBox padding={20} backgroundColor="#f3e5f5" borderRadius={8}>
        <CustomTypography variant="h4" className="mb-4">Большой контейнер</CustomTypography>
        <CustomTypography variant="body" size="md">
          Максимальная ширина: 1152px. Подходит для широкого контента и галерей.
        </CustomTypography>
      </CustomBox>
    ),
  },
}

export const FullWidth: Story = {
  args: {
    maxWidth: false,
    children: (
      <CustomBox padding={20} backgroundColor="#fff3e0" borderRadius={8}>
        <CustomTypography variant="h4" className="mb-4">Полная ширина</CustomTypography>
        <CustomTypography variant="body" size="md">
          Контейнер занимает 100% ширины родителя без ограничений.
        </CustomTypography>
      </CustomBox>
    ),
  },
}

// Примеры без отступов
export const NoGutters: Story = {
  args: {
    disableGutters: true,
    children: (
      <CustomBox padding={20} backgroundColor="#e8f5e8" borderRadius={8}>
        <CustomTypography variant="h4" className="mb-4">Без отступов</CustomTypography>
        <CustomTypography variant="body" size="md">
          Контейнер без автоматических отступов (px-4 sm:px-6 lg:px-8).
        </CustomTypography>
      </CustomBox>
    ),
  },
}

// Фиксированное позиционирование
export const FixedPosition: Story = {
  args: {
    fixed: true,
    maxWidth: "lg",
    children: (
      <CustomBox padding={16} backgroundColor="#ffebee" borderRadius={8}>
        <CustomTypography variant="h5" className="mb-2">Фиксированный контейнер</CustomTypography>
        <CustomTypography variant="body" size="sm">
          Этот контейнер имеет position: fixed и привязан к верху экрана.
        </CustomTypography>
      </CustomBox>
    ),
  },
  parameters: {
    layout: "fullscreen",
  },
}

// Адаптивные примеры
export const ResponsiveExample: Story = {
  args: {
    maxWidth: "lg",
    children: (
      <div className="space-y-6">
        <CustomBox padding={20} backgroundColor="#f5f5f5" borderRadius={8}>
          <CustomTypography variant="h4" className="mb-4">Адаптивный контейнер</CustomTypography>
          <CustomTypography variant="body" size="md" className="mb-4">
            Этот контейнер демонстрирует адаптивное поведение:
          </CustomTypography>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <CustomBox padding={12} backgroundColor="#e3f2fd" borderRadius={6}>
              <CustomTypography variant="body" size="sm" className="font-semibold">Мобильный</CustomTypography>
              <CustomTypography variant="caption">1 колонка</CustomTypography>
            </CustomBox>
            <CustomBox padding={12} backgroundColor="#e8f5e8" borderRadius={6}>
              <CustomTypography variant="body" size="sm" className="font-semibold">Планшет</CustomTypography>
              <CustomTypography variant="caption">2 колонки</CustomTypography>
            </CustomBox>
            <CustomBox padding={12} backgroundColor="#fff3e0" borderRadius={6}>
              <CustomTypography variant="body" size="sm" className="font-semibold">Десктоп</CustomTypography>
              <CustomTypography variant="caption">3 колонки</CustomTypography>
            </CustomBox>
          </div>
        </CustomBox>
      </div>
    ),
  },
}

// Примеры с разными HTML элементами
export const AsSection: Story = {
  args: {
    component: "section",
    maxWidth: "lg",
    children: (
      <CustomBox padding={20} backgroundColor="#f3e5f5" borderRadius={8}>
        <CustomTypography variant="h4" className="mb-4">Section элемент</CustomTypography>
        <CustomTypography variant="body" size="md">
          Контейнер рендерится как &lt;section&gt; элемент для семантической разметки.
        </CustomTypography>
      </CustomBox>
    ),
  },
}

export const AsMain: Story = {
  args: {
    component: "main",
    maxWidth: "xl",
    children: (
      <CustomBox padding={20} backgroundColor="#e8f5e8" borderRadius={8}>
        <CustomTypography variant="h4" className="mb-4">Main элемент</CustomTypography>
        <CustomTypography variant="body" size="md">
          Контейнер рендерится как &lt;main&gt; элемент для основного контента страницы.
        </CustomTypography>
      </CustomBox>
    ),
  },
}

// Комплексный пример
export const ComplexLayout: Story = {
  args: {
    maxWidth: "xl",
    children: (
      <div className="space-y-8">
        {/* Header */}
        <CustomBox padding={16} backgroundColor="#1976d2" borderRadius={8}>
          <CustomTypography variant="h3" className="text-white mb-2">Заголовок страницы</CustomTypography>
          <CustomTypography variant="body" size="md" className="text-white/80">
            Пример сложного макета с использованием Container
          </CustomTypography>
        </CustomBox>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Sidebar */}
          <CustomBox padding={16} backgroundColor="#f5f5f5" borderRadius={8}>
            <CustomTypography variant="h5" className="mb-4">Боковая панель</CustomTypography>
            <div className="space-y-2">
              <CustomTypography variant="body" size="sm">• Пункт меню 1</CustomTypography>
              <CustomTypography variant="body" size="sm">• Пункт меню 2</CustomTypography>
              <CustomTypography variant="body" size="sm">• Пункт меню 3</CustomTypography>
            </div>
          </CustomBox>

          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            <CustomBox padding={16} backgroundColor="#fff" borderRadius={8} border="1px solid #e0e0e0">
              <CustomTypography variant="h4" className="mb-4">Основной контент</CustomTypography>
              <CustomTypography variant="body" size="md" className="mb-4">
                Это основной контент страницы. Он занимает 2/3 ширины на больших экранах 
                и полную ширину на мобильных устройствах.
              </CustomTypography>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <CustomBox padding={12} backgroundColor="#f8f9fa" borderRadius={6}>
                  <CustomTypography variant="body" size="sm" className="font-semibold">Карточка 1</CustomTypography>
                </CustomBox>
                <CustomBox padding={12} backgroundColor="#f8f9fa" borderRadius={6}>
                  <CustomTypography variant="body" size="sm" className="font-semibold">Карточка 2</CustomTypography>
                </CustomBox>
              </div>
            </CustomBox>

            <CustomBox padding={16} backgroundColor="#fff" borderRadius={8} border="1px solid #e0e0e0">
              <CustomTypography variant="h5" className="mb-4">Дополнительная информация</CustomTypography>
              <CustomTypography variant="body" size="md">
                Здесь может быть дополнительный контент, формы или другие элементы интерфейса.
              </CustomTypography>
            </CustomBox>
          </div>
        </div>

        {/* Footer */}
        <CustomBox padding={16} backgroundColor="#424242" borderRadius={8}>
          <CustomTypography variant="body" size="sm" className="text-white text-center">
            © 2024 POIZON MARKET. Все права защищены.
          </CustomTypography>
        </CustomBox>
      </div>
    ),
  },
}

// Примеры для разных размеров экранов
export const ScreenSizes: Story = {
  args: {
    maxWidth: "lg",
    children: (
      <div className="space-y-6">
        <CustomBox padding={20} backgroundColor="#f5f5f5" borderRadius={8}>
          <CustomTypography variant="h4" className="mb-4">Размеры экранов</CustomTypography>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <CustomBox padding={12} backgroundColor="#ffebee" borderRadius={6}>
              <CustomTypography variant="body" size="sm" className="font-semibold">Mobile</CustomTypography>
              <CustomTypography variant="caption">≤ 768px</CustomTypography>
              <CustomTypography variant="caption">px-4</CustomTypography>
            </CustomBox>
            <CustomBox padding={12} backgroundColor="#e3f2fd" borderRadius={6}>
              <CustomTypography variant="body" size="sm" className="font-semibold">Tablet</CustomTypography>
              <CustomTypography variant="caption">768px - 1024px</CustomTypography>
              <CustomTypography variant="caption">px-6</CustomTypography>
            </CustomBox>
            <CustomBox padding={12} backgroundColor="#e8f5e8" borderRadius={6}>
              <CustomTypography variant="body" size="sm" className="font-semibold">Desktop</CustomTypography>
              <CustomTypography variant="caption">1024px - 1280px</CustomTypography>
              <CustomTypography variant="caption">px-8</CustomTypography>
            </CustomBox>
            <CustomBox padding={12} backgroundColor="#fff3e0" borderRadius={6}>
              <CustomTypography variant="body" size="sm" className="font-semibold">Large</CustomTypography>
              <CustomTypography variant="caption">≥ 1280px</CustomTypography>
              <CustomTypography variant="caption">px-8</CustomTypography>
            </CustomBox>
          </div>
        </CustomBox>
      </div>
    ),
  },
} 