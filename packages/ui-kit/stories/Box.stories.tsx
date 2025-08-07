import type { Meta, StoryObj } from "@storybook/react"
import CustomBox from "../components/custom-box"
import { CustomTypography } from "../components/custom-typography"

const meta = {
  title: "Layout/Box",
  component: CustomBox,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component: `
# Box - Универсальный компонент для создания блоков

## Основные возможности

### Позиционирование
- **position**: static, relative, absolute, fixed, sticky
- **top, right, bottom, left**: Позиционирование элементов
- **zIndex**: Уровень слоя

### Отображение
- **display**: block, inline, inline-block, flex, inline-flex, grid, none
- **flexDirection**: row, column, row-reverse, column-reverse
- **justifyContent**: flex-start, center, flex-end, space-between, space-around, space-evenly
- **alignItems**: flex-start, center, flex-end, stretch, baseline

### Размеры и отступы
- **width, height**: Размеры блока
- **padding, margin**: Внутренние и внешние отступы
- **minWidth, maxWidth, minHeight, maxHeight**: Ограничения размеров

### Стилизация
- **backgroundColor, color**: Цвета
- **border, borderRadius**: Границы и скругления
- **boxShadow**: Тени
- **overflow**: Переполнение

## Использование

\`\`\`tsx
import { CustomBox } from "@poizon/ui-kit"

// Базовый блок
<CustomBox padding={16} backgroundColor="#f5f5f5">
  <h2>Заголовок</h2>
  <p>Контент</p>
</CustomBox>

// Flexbox контейнер
<CustomBox 
  display="flex" 
  justifyContent="space-between" 
  alignItems="center"
  padding={20}
>
  <span>Левая часть</span>
  <span>Правая часть</span>
</CustomBox>
\`\`\`
        `,
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    display: {
      control: "select",
      options: ["block", "inline", "inline-block", "flex", "inline-flex", "grid", "none"],
      description: "Тип отображения",
    },
    position: {
      control: "select",
      options: ["static", "relative", "absolute", "fixed", "sticky"],
      description: "Позиционирование",
    },
    textAlign: {
      control: "select",
      options: ["left", "center", "right", "justify"],
      description: "Выравнивание текста",
    },
    overflow: {
      control: "select",
      options: ["visible", "hidden", "scroll", "auto"],
      description: "Переполнение",
    },
    padding: {
      control: "number",
      description: "Внутренние отступы (px)",
    },
    margin: {
      control: "number",
      description: "Внешние отступы (px)",
    },
    width: {
      control: "text",
      description: "Ширина (px, %, auto)",
    },
    height: {
      control: "text",
      description: "Высота (px, %, auto)",
    },
    backgroundColor: {
      control: "color",
      description: "Цвет фона",
    },
    color: {
      control: "color",
      description: "Цвет текста",
    },
    border: {
      control: "text",
      description: "Граница (CSS border)",
    },
    borderRadius: {
      control: "number",
      description: "Скругление углов (px)",
    },
    boxShadow: {
      control: "text",
      description: "Тень (CSS box-shadow)",
    },
  },
} satisfies Meta<typeof CustomBox>

export default meta
type Story = StoryObj<typeof meta>

// Базовые примеры
export const Default: Story = {
  args: {
    children: (
      <>
        <CustomTypography variant="h4" className="mb-4">Базовый Box</CustomTypography>
        <CustomTypography variant="body" size="md">
          Это базовый Box компонент с стандартными настройками.
        </CustomTypography>
      </>
    ),
    padding: 20,
    backgroundColor: "#f5f5f5",
    border: "1px solid #e0e0e0",
    borderRadius: 8,
  },
}

export const Flexbox: Story = {
  args: {
    display: "flex",
    padding: 20,
    backgroundColor: "#e3f2fd",
    border: "2px solid #2196f3",
    borderRadius: 12,
    style: { gap: "16px" },
    children: (
      <>
        <CustomBox padding={12} backgroundColor="#fff" borderRadius={6}>
          <CustomTypography variant="body" size="sm" className="font-semibold">Элемент 1</CustomTypography>
        </CustomBox>
        <CustomBox padding={12} backgroundColor="#fff" borderRadius={6}>
          <CustomTypography variant="body" size="sm" className="font-semibold">Элемент 2</CustomTypography>
        </CustomBox>
        <CustomBox padding={12} backgroundColor="#fff" borderRadius={6}>
          <CustomTypography variant="body" size="sm" className="font-semibold">Элемент 3</CustomTypography>
        </CustomBox>
      </>
    ),
  },
}

export const Grid: Story = {
  args: {
    display: "grid",
    padding: 20,
    backgroundColor: "#f3e5f5",
    border: "2px solid #9c27b0",
    borderRadius: 12,
    style: { gridTemplateColumns: "repeat(3, 1fr)", gap: "16px" },
    children: (
      <>
        <CustomBox padding={12} backgroundColor="#fff" borderRadius={6} textAlign="center">
          <CustomTypography variant="body" size="sm">Ячейка 1</CustomTypography>
        </CustomBox>
        <CustomBox padding={12} backgroundColor="#fff" borderRadius={6} textAlign="center">
          <CustomTypography variant="body" size="sm">Ячейка 2</CustomTypography>
        </CustomBox>
        <CustomBox padding={12} backgroundColor="#fff" borderRadius={6} textAlign="center">
          <CustomTypography variant="body" size="sm">Ячейка 3</CustomTypography>
        </CustomBox>
        <CustomBox padding={12} backgroundColor="#fff" borderRadius={6} textAlign="center">
          <CustomTypography variant="body" size="sm">Ячейка 4</CustomTypography>
        </CustomBox>
        <CustomBox padding={12} backgroundColor="#fff" borderRadius={6} textAlign="center">
          <CustomTypography variant="body" size="sm">Ячейка 5</CustomTypography>
        </CustomBox>
        <CustomBox padding={12} backgroundColor="#fff" borderRadius={6} textAlign="center">
          <CustomTypography variant="body" size="sm">Ячейка 6</CustomTypography>
        </CustomBox>
      </>
    ),
  },
}

// Позиционирование
export const Positioning: Story = {
  render: () => (
    <div className="relative h-96 bg-gray-100 p-8">
      <CustomTypography variant="h4" className="mb-6">Примеры позиционирования</CustomTypography>
      
      {/* Relative */}
      <CustomBox
        position="relative"
        top={20}
        left={20}
        padding={12}
        backgroundColor="#e3f2fd"
        borderRadius={6}
        border="1px solid #2196f3"
      >
        <CustomTypography variant="body" size="sm">Relative</CustomTypography>
      </CustomBox>

      {/* Absolute */}
      <CustomBox
        position="absolute"
        top={20}
        right={20}
        padding={12}
        backgroundColor="#ffebee"
        borderRadius={6}
        border="1px solid #f44336"
      >
        <CustomTypography variant="body" size="sm">Absolute</CustomTypography>
      </CustomBox>

      {/* Fixed */}
      <CustomBox
        position="fixed"
        bottom={20}
        left={20}
        padding={12}
        backgroundColor="#e8f5e8"
        borderRadius={6}
        border="1px solid #4caf50"
        zIndex={1000}
      >
        <CustomTypography variant="body" size="sm">Fixed</CustomTypography>
      </CustomBox>

      {/* Sticky */}
      <CustomBox
        position="sticky"
        top={100}
        padding={12}
        backgroundColor="#fff3e0"
        borderRadius={6}
        border="1px solid #ff9800"
        margin={8}
      >
        <CustomTypography variant="body" size="sm">Sticky</CustomTypography>
      </CustomBox>
    </div>
  ),
}

// Flexbox выравнивание
export const FlexboxAlignment: Story = {
  render: () => (
    <div className="space-y-8">
      {/* Center */}
      <CustomBox
        display="flex"
        padding={20}
        backgroundColor="#e3f2fd"
        borderRadius={8}
        height={100}
        style={{ justifyContent: "center", alignItems: "center" }}
      >
        <CustomTypography variant="body" size="md">Центрированный контент</CustomTypography>
      </CustomBox>

      {/* Space Between */}
      <CustomBox
        display="flex"
        padding={20}
        backgroundColor="#e8f5e8"
        borderRadius={8}
        height={100}
        style={{ justifyContent: "space-between", alignItems: "center" }}
      >
        <CustomTypography variant="body" size="sm">Левая часть</CustomTypography>
        <CustomTypography variant="body" size="sm">Центр</CustomTypography>
        <CustomTypography variant="body" size="sm">Правая часть</CustomTypography>
      </CustomBox>

      {/* Space Around */}
      <CustomBox
        display="flex"
        padding={20}
        backgroundColor="#fff3e0"
        borderRadius={8}
        height={100}
        style={{ justifyContent: "space-around", alignItems: "center" }}
      >
        <CustomTypography variant="body" size="sm">Элемент 1</CustomTypography>
        <CustomTypography variant="body" size="sm">Элемент 2</CustomTypography>
        <CustomTypography variant="body" size="sm">Элемент 3</CustomTypography>
      </CustomBox>
    </div>
  ),
}

// Размеры и отступы
export const SizingAndSpacing: Story = {
  render: () => (
    <div className="space-y-6">
      {/* Разные размеры */}
      <CustomBox
        width="100%"
        height={80}
        padding={16}
        backgroundColor="#f5f5f5"
        borderRadius={8}
        textAlign="center"
      >
        <CustomTypography variant="body" size="md">Полная ширина, высота 80px</CustomTypography>
      </CustomBox>

      <CustomBox
        width="50%"
        height={60}
        padding={12}
        backgroundColor="#e3f2fd"
        borderRadius={8}
        textAlign="center"
      >
        <CustomTypography variant="body" size="sm">50% ширины, высота 60px</CustomTypography>
      </CustomBox>

      <CustomBox
        width={200}
        height={40}
        padding={8}
        backgroundColor="#e8f5e8"
        borderRadius={6}
        textAlign="center"
      >
        <CustomTypography variant="body" size="sm">Фиксированная ширина 200px</CustomTypography>
      </CustomBox>

      {/* Разные отступы */}
      <div className="flex space-x-4">
        <CustomBox
          padding={8}
          margin={4}
          backgroundColor="#ffebee"
          borderRadius={4}
          textAlign="center"
        >
          <CustomTypography variant="caption">Маленькие отступы</CustomTypography>
        </CustomBox>

        <CustomBox
          padding={16}
          margin={8}
          backgroundColor="#fff3e0"
          borderRadius={6}
          textAlign="center"
        >
          <CustomTypography variant="body" size="sm">Средние отступы</CustomTypography>
        </CustomBox>

        <CustomBox
          padding={24}
          margin={12}
          backgroundColor="#f3e5f5"
          borderRadius={8}
          textAlign="center"
        >
          <CustomTypography variant="body" size="md">Большие отступы</CustomTypography>
        </CustomBox>
      </div>
    </div>
  ),
}

// Стилизация
export const Styling: Story = {
  render: () => (
    <div className="space-y-6">
      {/* Границы */}
      <CustomBox
        padding={16}
        border="2px solid #2196f3"
        borderRadius={8}
        textAlign="center"
      >
        <CustomTypography variant="body" size="md">С синей границей</CustomTypography>
      </CustomBox>

      {/* Тени */}
      <CustomBox
        padding={20}
        backgroundColor="#fff"
        borderRadius={12}
        boxShadow="0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)"
        textAlign="center"
      >
        <CustomTypography variant="body" size="md">С тенью</CustomTypography>
      </CustomBox>

      {/* Градиент */}
      <CustomBox
        padding={20}
        style={{
          background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
          color: "white"
        }}
        borderRadius={12}
        textAlign="center"
      >
        <CustomTypography variant="body" size="md" className="text-white">С градиентом</CustomTypography>
      </CustomBox>

      {/* Переполнение */}
      <CustomBox
        width={200}
        height={100}
        padding={12}
        backgroundColor="#f5f5f5"
        borderRadius={8}
        overflow="hidden"
      >
        <CustomTypography variant="body" size="sm">
          Этот текст очень длинный и может не поместиться в контейнер, 
          поэтому используется overflow: hidden для скрытия лишнего контента.
        </CustomTypography>
      </CustomBox>
    </div>
  ),
}

// Адаптивные примеры
export const Responsive: Story = {
  render: () => (
    <div className="space-y-6">
      <CustomTypography variant="h4" className="mb-4">Адаптивные примеры</CustomTypography>
      
      {/* Адаптивная ширина */}
      <CustomBox
        padding={16}
        backgroundColor="#e3f2fd"
        borderRadius={8}
        style={{
          width: "100%",
          maxWidth: "600px",
          margin: "0 auto"
        }}
        textAlign="center"
      >
        <CustomTypography variant="body" size="md">
          Адаптивная ширина с максимальной шириной 600px
        </CustomTypography>
      </CustomBox>

      {/* Адаптивные отступы */}
      <CustomBox
        padding={16}
        backgroundColor="#e8f5e8"
        borderRadius={8}
        className="p-4 sm:p-6 md:p-8"
        textAlign="center"
      >
        <CustomTypography variant="body" size="md">
          Адаптивные отступы: 16px на мобильных, 24px на планшетах, 32px на десктопах
        </CustomTypography>
      </CustomBox>

      {/* Адаптивная сетка */}
      <CustomBox
        display="grid"
        style={{
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "16px"
        }}
        padding={16}
        backgroundColor="#fff3e0"
        borderRadius={8}
      >
        <CustomBox padding={12} backgroundColor="#fff" borderRadius={6} textAlign="center">
          <CustomTypography variant="body" size="sm">Адаптивная ячейка 1</CustomTypography>
        </CustomBox>
        <CustomBox padding={12} backgroundColor="#fff" borderRadius={6} textAlign="center">
          <CustomTypography variant="body" size="sm">Адаптивная ячейка 2</CustomTypography>
        </CustomBox>
        <CustomBox padding={12} backgroundColor="#fff" borderRadius={6} textAlign="center">
          <CustomTypography variant="body" size="sm">Адаптивная ячейка 3</CustomTypography>
        </CustomBox>
      </CustomBox>
    </div>
  ),
}

// Комплексный пример
export const ComplexExample: Story = {
  render: () => (
         <CustomBox
       display="flex"
       padding={24}
       backgroundColor="#f8f9fa"
       borderRadius={16}
       border="1px solid #e9ecef"
       style={{ flexDirection: "column", minHeight: "400px" }}
     >
       {/* Header */}
       <CustomBox
         display="flex"
         padding={16}
         backgroundColor="#fff"
         borderRadius={8}
         margin={8}
         boxShadow="0 2px 4px rgba(0,0,0,0.1)"
         style={{ justifyContent: "space-between", alignItems: "center" }}
       >
        <CustomTypography variant="h5">Заголовок секции</CustomTypography>
        <CustomBox
          padding={8}
          backgroundColor="#e3f2fd"
          borderRadius={4}
        >
          <CustomTypography variant="body" size="sm">Статус</CustomTypography>
        </CustomBox>
      </CustomBox>

             {/* Content */}
       <CustomBox
         display="flex"
         padding={16}
         margin={8}
         style={{ flex: 1, gap: "16px" }}
       >
         {/* Left sidebar */}
         <CustomBox
           width={200}
           padding={16}
           backgroundColor="#fff"
           borderRadius={8}
           boxShadow="0 2px 4px rgba(0,0,0,0.1)"
         >
           <CustomTypography variant="h6" className="mb-4">Боковая панель</CustomTypography>
           <div className="space-y-2">
             <CustomTypography variant="body" size="sm">• Пункт 1</CustomTypography>
             <CustomTypography variant="body" size="sm">• Пункт 2</CustomTypography>
             <CustomTypography variant="body" size="sm">• Пункт 3</CustomTypography>
           </div>
         </CustomBox>

         {/* Main content */}
         <CustomBox
           padding={16}
           backgroundColor="#fff"
           borderRadius={8}
           boxShadow="0 2px 4px rgba(0,0,0,0.1)"
           style={{ flex: 1 }}
         >
          <CustomTypography variant="h6" className="mb-4">Основной контент</CustomTypography>
          <CustomTypography variant="body" size="md" className="mb-4">
            Это пример сложного макета с использованием Box компонента. 
            Здесь может быть любой контент: текст, изображения, формы и т.д.
          </CustomTypography>
          
          {/* Nested grid */}
          <CustomBox
            display="grid"
            style={{ gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", gap: "12px" }}
            margin={16}
          >
            <CustomBox padding={12} backgroundColor="#f8f9fa" borderRadius={6} textAlign="center">
              <CustomTypography variant="body" size="sm">Блок 1</CustomTypography>
            </CustomBox>
            <CustomBox padding={12} backgroundColor="#f8f9fa" borderRadius={6} textAlign="center">
              <CustomTypography variant="body" size="sm">Блок 2</CustomTypography>
            </CustomBox>
            <CustomBox padding={12} backgroundColor="#f8f9fa" borderRadius={6} textAlign="center">
              <CustomTypography variant="body" size="sm">Блок 3</CustomTypography>
            </CustomBox>
          </CustomBox>
        </CustomBox>
      </CustomBox>

             {/* Footer */}
       <CustomBox
         display="flex"
         padding={16}
         backgroundColor="#fff"
         borderRadius={8}
         margin={8}
         boxShadow="0 2px 4px rgba(0,0,0,0.1)"
         style={{ justifyContent: "space-between", alignItems: "center" }}
       >
         <CustomTypography variant="body" size="sm" color="muted">
           © 2024 POIZON MARKET
         </CustomTypography>
         <CustomBox
           display="flex"
           style={{ gap: "8px" }}
         >
          <CustomBox padding={8} backgroundColor="#e3f2fd" borderRadius={4}>
            <CustomTypography variant="body" size="sm">Кнопка 1</CustomTypography>
          </CustomBox>
          <CustomBox padding={8} backgroundColor="#e8f5e8" borderRadius={4}>
            <CustomTypography variant="body" size="sm">Кнопка 2</CustomTypography>
          </CustomBox>
        </CustomBox>
      </CustomBox>
    </CustomBox>
  ),
} 