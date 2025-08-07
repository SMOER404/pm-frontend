import type { Meta, StoryObj } from "@storybook/react"
import CustomGrid from "../components/custom-grid"
import { CustomTypography } from "../components/custom-typography"
import CustomBox from "../components/custom-box"

const meta = {
  title: "Layout/Grid",
  component: CustomGrid,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component: `
# Grid - Система сеток для адаптивного макета

## Основные возможности

### Адаптивные колонки
- **xs, sm, md, lg, xl**: Размеры элементов на разных экранах
- **spacing**: Отступы между элементами
- **container/item**: Контейнер и элементы сетки

### Позиционирование
- **justifyContent**: Выравнивание по горизонтали
- **alignItems**: Выравнивание по вертикали
- **direction**: Направление элементов

### Responsive breakpoints
- **xs**: < 640px (мобильные)
- **sm**: 640px - 768px (планшеты)
- **md**: 768px - 1024px (малые десктопы)
- **lg**: 1024px - 1280px (десктопы)
- **xl**: ≥ 1280px (большие экраны)

## Использование

\`\`\`tsx
import { CustomGrid } from "@poizon/ui-kit"

<CustomGrid container spacing={2}>
  <CustomGrid item xs={12} sm={6} lg={4}>
    <div>Элемент 1</div>
  </CustomGrid>
  <CustomGrid item xs={12} sm={6} lg={4}>
    <div>Элемент 2</div>
  </CustomGrid>
  <CustomGrid item xs={12} sm={6} lg={4}>
    <div>Элемент 3</div>
  </CustomGrid>
</CustomGrid>
\`\`\`

## Примеры размеров

| Размер | xs | sm | md | lg | xl |
|--------|----|----|----|----|----|
| 1 колонка | 12 | 12 | 12 | 12 | 12 |
| 2 колонки | 12 | 6 | 6 | 6 | 6 |
| 3 колонки | 12 | 6 | 4 | 4 | 4 |
| 4 колонки | 12 | 6 | 6 | 3 | 3 |
| 6 колонок | 12 | 6 | 4 | 2 | 2 |
| 12 колонок | 12 | 6 | 4 | 2 | 1 |
        `,
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    container: {
      control: "boolean",
      description: "Контейнер сетки",
    },
    item: {
      control: "boolean",
      description: "Элемент сетки",
    },
    xs: {
      control: "select",
      options: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, "auto"],
      description: "Размер на мобильных (xs)",
    },
    sm: {
      control: "select",
      options: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, "auto"],
      description: "Размер на планшетах (sm)",
    },
    md: {
      control: "select",
      options: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, "auto"],
      description: "Размер на десктопах (md)",
    },
    lg: {
      control: "select",
      options: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, "auto"],
      description: "Размер на больших экранах (lg)",
    },
    xl: {
      control: "select",
      options: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, "auto"],
      description: "Размер на очень больших экранах (xl)",
    },
    spacing: {
      control: "select",
      options: [0, 1, 2, 3, 4, 5, 6, 8, 10, 12],
      description: "Отступ между элементами",
    },
    direction: {
      control: "select",
      options: ["row", "column", "row-reverse", "column-reverse"],
      description: "Направление элементов",
    },
    justifyContent: {
      control: "select",
      options: ["flex-start", "center", "flex-end", "space-between", "space-around", "space-evenly"],
      description: "Выравнивание по горизонтали",
    },
    alignItems: {
      control: "select",
      options: ["flex-start", "center", "flex-end", "stretch", "baseline"],
      description: "Выравнивание по вертикали",
    },
  },
} satisfies Meta<typeof CustomGrid>

export default meta
type Story = StoryObj<typeof meta>

// Базовые примеры
export const Default: Story = {
  render: () => (
    <CustomGrid container spacing={2}>
      {Array.from({ length: 6 }, (_, i) => (
        <CustomGrid key={i} item xs={12} sm={6} lg={4}>
          <CustomBox padding={20} backgroundColor="#f5f5f5" borderRadius={8}>
            <CustomTypography variant="h5" className="mb-2">Элемент {i + 1}</CustomTypography>
            <CustomTypography variant="body" size="sm">
              Это элемент сетки с адаптивными колонками.
            </CustomTypography>
          </CustomBox>
        </CustomGrid>
      ))}
    </CustomGrid>
  ),
}

export const SingleColumn: Story = {
  render: () => (
    <CustomGrid container spacing={2}>
      {Array.from({ length: 4 }, (_, i) => (
        <CustomGrid key={i} item xs={12}>
          <CustomBox padding={16} backgroundColor="#e3f2fd" borderRadius={8}>
            <CustomTypography variant="h5" className="mb-2">Строка {i + 1}</CustomTypography>
            <CustomTypography variant="body" size="sm">
              Всегда одна колонка на всех экранах.
            </CustomTypography>
          </CustomBox>
        </CustomGrid>
      ))}
    </CustomGrid>
  ),
}

export const TwoColumns: Story = {
  render: () => (
    <CustomGrid container spacing={3}>
      {Array.from({ length: 6 }, (_, i) => (
        <CustomGrid key={i} item xs={12} sm={6}>
          <CustomBox padding={20} backgroundColor="#e8f5e8" borderRadius={8}>
            <CustomTypography variant="h5" className="mb-2">Блок {i + 1}</CustomTypography>
            <CustomTypography variant="body" size="sm">
              Две колонки на планшетах и десктопах, одна на мобильных.
            </CustomTypography>
          </CustomBox>
        </CustomGrid>
      ))}
    </CustomGrid>
  ),
}

export const ThreeColumns: Story = {
  render: () => (
    <CustomGrid container spacing={2}>
      {Array.from({ length: 9 }, (_, i) => (
        <CustomGrid key={i} item xs={12} sm={6} md={4}>
          <CustomBox padding={16} backgroundColor="#fff3e0" borderRadius={8}>
            <CustomTypography variant="h6" className="mb-2">Карточка {i + 1}</CustomTypography>
            <CustomTypography variant="body" size="sm">
              Три колонки на средних и больших экранах.
            </CustomTypography>
          </CustomBox>
        </CustomGrid>
      ))}
    </CustomGrid>
  ),
}

export const FourColumns: Story = {
  render: () => (
    <CustomGrid container spacing={2}>
      {Array.from({ length: 8 }, (_, i) => (
        <CustomGrid key={i} item xs={12} sm={6} lg={3}>
          <CustomBox padding={12} backgroundColor="#f3e5f5" borderRadius={6}>
            <CustomTypography variant="body" size="sm" className="font-semibold mb-1">
              Элемент {i + 1}
            </CustomTypography>
            <CustomTypography variant="caption">
              Четыре колонки на больших экранах.
            </CustomTypography>
          </CustomBox>
        </CustomGrid>
      ))}
    </CustomGrid>
  ),
}

// Примеры с разными отступами
export const LargeSpacing: Story = {
  render: () => (
    <CustomGrid container spacing={4}>
      {Array.from({ length: 6 }, (_, i) => (
        <CustomGrid key={i} item xs={12} sm={6} lg={4}>
          <CustomBox padding={24} backgroundColor="#ffebee" borderRadius={12}>
            <CustomTypography variant="h5" className="mb-3">Блок {i + 1}</CustomTypography>
            <CustomTypography variant="body" size="md">
              Большие отступы между элементами (spacing={4}).
            </CustomTypography>
          </CustomBox>
        </CustomGrid>
      ))}
    </CustomGrid>
  ),
}

export const SmallSpacing: Story = {
  render: () => (
    <CustomGrid container spacing={1}>
      {Array.from({ length: 12 }, (_, i) => (
        <CustomGrid key={i} item xs={6} sm={4} md={3} lg={2} xl={1}>
          <CustomBox padding={12} backgroundColor="#f8f9fa" borderRadius={6}>
            <CustomTypography variant="body" size="sm" className="font-semibold">
              {i + 1}
            </CustomTypography>
          </CustomBox>
        </CustomGrid>
      ))}
    </CustomGrid>
  ),
}

// Примеры выравнивания
export const Centered: Story = {
  render: () => (
    <CustomGrid container spacing={2} justifyContent="center" alignItems="center">
      {Array.from({ length: 5 }, (_, i) => (
        <CustomGrid key={i} item xs={12} sm={6} lg={4}>
          <CustomBox padding={20} backgroundColor="#e3f2fd" borderRadius={8} textAlign="center">
            <CustomTypography variant="h5" className="mb-2">Центр {i + 1}</CustomTypography>
            <CustomTypography variant="body" size="sm">
              Центрированные элементы.
            </CustomTypography>
          </CustomBox>
        </CustomGrid>
      ))}
    </CustomGrid>
  ),
}

export const SpaceBetween: Story = {
  render: () => (
    <CustomGrid container spacing={2} justifyContent="space-between">
      {Array.from({ length: 3 }, (_, i) => (
        <CustomGrid key={i} item xs={12} sm={4}>
          <CustomBox padding={20} backgroundColor="#e8f5e8" borderRadius={8}>
            <CustomTypography variant="h5" className="mb-2">Элемент {i + 1}</CustomTypography>
            <CustomTypography variant="body" size="sm">
              Распределение с равными отступами.
            </CustomTypography>
          </CustomBox>
        </CustomGrid>
      ))}
    </CustomGrid>
  ),
}

// Направления
export const ColumnDirection: Story = {
  render: () => (
    <CustomGrid container spacing={2} direction="column">
      {Array.from({ length: 4 }, (_, i) => (
        <CustomGrid key={i} item xs={12}>
          <CustomBox padding={16} backgroundColor="#ffebee" borderRadius={8}>
            <CustomTypography variant="h6" className="mb-2">Строка {i + 1}</CustomTypography>
            <CustomTypography variant="body" size="sm">
              Вертикальное расположение элементов.
            </CustomTypography>
          </CustomBox>
        </CustomGrid>
      ))}
    </CustomGrid>
  ),
}

// Комплексные примеры
export const ComplexLayout: Story = {
  render: () => (
    <CustomGrid container spacing={3}>
      {/* Заголовок на всю ширину */}
      <CustomGrid item xs={12}>
        <CustomBox padding={24} backgroundColor="#1976d2" borderRadius={12}>
          <CustomTypography variant="h3" className="text-white mb-2 text-center">
            Комплексный макет
          </CustomTypography>
          <CustomTypography variant="body" size="md" className="text-white/80 text-center">
            Демонстрация различных элементов в сетке
          </CustomTypography>
        </CustomBox>
      </CustomGrid>

      {/* Основные карточки */}
      {Array.from({ length: 3 }, (_, i) => (
        <CustomGrid key={i} item xs={12} lg={4}>
          <CustomBox padding={20} backgroundColor="#fff" borderRadius={12} border="1px solid #e0e0e0">
            <CustomTypography variant="h4" className="mb-4">Секция {i + 1}</CustomTypography>
            <CustomTypography variant="body" size="md" className="mb-4">
              Основной контент секции с подробным описанием функциональности.
            </CustomTypography>
            <CustomGrid container spacing={1}>
              <CustomGrid item xs={6}>
                <CustomBox padding={8} backgroundColor="#f5f5f5" borderRadius={4}>
                  <CustomTypography variant="body" size="sm">Деталь 1</CustomTypography>
                </CustomBox>
              </CustomGrid>
              <CustomGrid item xs={6}>
                <CustomBox padding={8} backgroundColor="#f5f5f5" borderRadius={4}>
                  <CustomTypography variant="body" size="sm">Деталь 2</CustomTypography>
                </CustomBox>
              </CustomGrid>
            </CustomGrid>
          </CustomBox>
        </CustomGrid>
      ))}

      {/* Дополнительные элементы */}
      {Array.from({ length: 6 }, (_, i) => (
        <CustomGrid key={i + 3} item xs={12} sm={6} lg={4}>
          <CustomBox padding={16} backgroundColor="#f8f9fa" borderRadius={8}>
            <CustomTypography variant="h6" className="mb-2">Доп. {i + 1}</CustomTypography>
            <CustomTypography variant="body" size="sm">
              Дополнительная информация.
            </CustomTypography>
          </CustomBox>
        </CustomGrid>
      ))}
    </CustomGrid>
  ),
}

// Примеры для разных размеров экранов
export const ResponsiveBreakpoints: Story = {
  render: () => (
    <CustomGrid container spacing={2}>
      <CustomGrid item xs={12} sm={6} md={4} lg={3} xl={2}>
        <CustomBox padding={16} backgroundColor="#ffebee" borderRadius={8}>
          <CustomTypography variant="h6" className="mb-2">Mobile (xs)</CustomTypography>
          <CustomTypography variant="body" size="sm">1 колонка</CustomTypography>
        </CustomBox>
      </CustomGrid>
      <CustomGrid item xs={12} sm={6} md={4} lg={3} xl={2}>
        <CustomBox padding={16} backgroundColor="#e3f2fd" borderRadius={8}>
          <CustomTypography variant="h6" className="mb-2">Tablet (sm)</CustomTypography>
          <CustomTypography variant="body" size="sm">2 колонки</CustomTypography>
        </CustomBox>
      </CustomGrid>
      <CustomGrid item xs={12} sm={6} md={4} lg={3} xl={2}>
        <CustomBox padding={16} backgroundColor="#e8f5e8" borderRadius={8}>
          <CustomTypography variant="h6" className="mb-2">Desktop (md)</CustomTypography>
          <CustomTypography variant="body" size="sm">3 колонки</CustomTypography>
        </CustomBox>
      </CustomGrid>
      <CustomGrid item xs={12} sm={6} md={4} lg={3} xl={2}>
        <CustomBox padding={16} backgroundColor="#fff3e0" borderRadius={8}>
          <CustomTypography variant="h6" className="mb-2">Large (lg)</CustomTypography>
          <CustomTypography variant="body" size="sm">4 колонки</CustomTypography>
        </CustomBox>
      </CustomGrid>
      <CustomGrid item xs={12} sm={6} md={4} lg={3} xl={2}>
        <CustomBox padding={16} backgroundColor="#f3e5f5" borderRadius={8}>
          <CustomTypography variant="h6" className="mb-2">XL (xl)</CustomTypography>
          <CustomTypography variant="body" size="sm">6 колонок</CustomTypography>
        </CustomBox>
      </CustomGrid>
      <CustomGrid item xs={12} sm={6} md={4} lg={3} xl={2}>
        <CustomBox padding={16} backgroundColor="#fce4ec" borderRadius={8}>
          <CustomTypography variant="h6" className="mb-2">Extra</CustomTypography>
          <CustomTypography variant="body" size="sm">Дополнительный</CustomTypography>
        </CustomBox>
      </CustomGrid>
    </CustomGrid>
  ),
}

// Пример с изображениями
export const ImageGrid: Story = {
  render: () => (
    <CustomGrid container spacing={1}>
      {Array.from({ length: 16 }, (_, i) => (
        <CustomGrid key={i} item xs={6} sm={4} md={3} lg={2} xl={1}>
          <CustomBox padding={8} backgroundColor="#f5f5f5" borderRadius={6} textAlign="center">
            <div className="w-12 h-12 bg-gray-300 rounded mb-2 mx-auto flex items-center justify-center">
              <CustomTypography variant="caption" className="text-gray-600">
                {i + 1}
              </CustomTypography>
            </div>
            <CustomTypography variant="caption" className="text-gray-600">
              Изображение {i + 1}
            </CustomTypography>
          </CustomBox>
        </CustomGrid>
      ))}
    </CustomGrid>
  ),
} 