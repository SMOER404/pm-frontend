import type { Meta, StoryObj } from "@storybook/react"
import CustomBox from "../components/custom-box"

const meta = {
  title: "Components/CustomBox",
  component: CustomBox,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "Универсальный компонент Box для создания контейнеров с кастомными стилями.",
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
  },
} satisfies Meta<typeof CustomBox>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: "Это базовый Box компонент",
    padding: 16,
    backgroundColor: "#f0f0f0",
    border: "1px solid #ccc",
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
        <CustomBox padding={8} backgroundColor="#fff" borderRadius={4}>Элемент 1</CustomBox>
        <CustomBox padding={8} backgroundColor="#fff" borderRadius={4}>Элемент 2</CustomBox>
        <CustomBox padding={8} backgroundColor="#fff" borderRadius={4}>Элемент 3</CustomBox>
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
        <CustomBox padding={12} backgroundColor="#fff" borderRadius={6} textAlign="center">Ячейка 1</CustomBox>
        <CustomBox padding={12} backgroundColor="#fff" borderRadius={6} textAlign="center">Ячейка 2</CustomBox>
        <CustomBox padding={12} backgroundColor="#fff" borderRadius={6} textAlign="center">Ячейка 3</CustomBox>
        <CustomBox padding={12} backgroundColor="#fff" borderRadius={6} textAlign="center">Ячейка 4</CustomBox>
        <CustomBox padding={12} backgroundColor="#fff" borderRadius={6} textAlign="center">Ячейка 5</CustomBox>
        <CustomBox padding={12} backgroundColor="#fff" borderRadius={6} textAlign="center">Ячейка 6</CustomBox>
      </>
    ),
  },
}

export const WithShadow: Story = {
  args: {
    padding: 24,
    backgroundColor: "#fff",
    border: "1px solid #e0e0e0",
    borderRadius: 16,
    boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
    children: (
      <div>
        <h3 style={{ margin: "0 0 12px 0", color: "#333" }}>Карточка с тенью</h3>
        <p style={{ margin: 0, color: "#666" }}>
          Этот Box компонент демонстрирует использование тени и скругленных углов.
        </p>
      </div>
    ),
  },
}

export const Responsive: Story = {
  args: {
    display: "flex",
    padding: 20,
    backgroundColor: "#fff3e0",
    border: "2px solid #ff9800",
    borderRadius: 12,
    minHeight: 200,
    style: { flexDirection: "column", gap: "12px" },
    children: (
      <>
        <CustomBox 
          padding={12} 
          backgroundColor="#fff" 
          borderRadius={8}
          textAlign="center"
          boxShadow="0 2px 4px rgba(0,0,0,0.1)"
        >
          Адаптивный элемент 1
        </CustomBox>
        <CustomBox 
          padding={12} 
          backgroundColor="#fff" 
          borderRadius={8}
          textAlign="center"
          boxShadow="0 2px 4px rgba(0,0,0,0.1)"
        >
          Адаптивный элемент 2
        </CustomBox>
        <CustomBox 
          padding={12} 
          backgroundColor="#fff" 
          borderRadius={8}
          textAlign="center"
          boxShadow="0 2px 4px rgba(0,0,0,0.1)"
        >
          Адаптивный элемент 3
        </CustomBox>
      </>
    ),
  },
}

export const Overflow: Story = {
  args: {
    width: 300,
    height: 200,
    padding: 16,
    backgroundColor: "#f5f5f5",
    border: "1px solid #ddd",
    borderRadius: 8,
    overflow: "scroll",
    children: (
      <div>
        <p>Этот контейнер имеет фиксированную высоту и прокрутку.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
        <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>
    ),
  },
} 