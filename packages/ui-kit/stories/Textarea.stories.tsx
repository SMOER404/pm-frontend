import type { Meta, StoryObj } from "@storybook/react"
import CustomTextarea from "../components/custom-textarea"

const meta: Meta<typeof CustomTextarea> = {
  title: "Components/Textarea",
  component: CustomTextarea,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: { type: "select" },
      options: ["sm", "md", "lg"],
    },
    variant: {
      control: { type: "select" },
      options: ["outlined", "filled"],
    },
    resize: {
      control: { type: "select" },
      options: ["none", "vertical", "horizontal", "both"],
    },
    disabled: {
      control: { type: "boolean" },
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    placeholder: "Введите текст...",
    label: "Описание",
  },
}

export const WithHelperText: Story = {
  args: {
    placeholder: "Введите текст...",
    label: "Описание",
    helperText: "Это поле для ввода описания",
  },
}

export const WithError: Story = {
  args: {
    placeholder: "Введите текст...",
    label: "Описание",
    error: "Это поле обязательно для заполнения",
  },
}

export const DifferentSizes: Story = {
  render: () => (
    <div className="space-y-4">
      <CustomTextarea
        size="sm"
        placeholder="Маленький размер"
        label="Small"
      />
      <CustomTextarea
        size="md"
        placeholder="Средний размер"
        label="Medium"
      />
      <CustomTextarea
        size="lg"
        placeholder="Большой размер"
        label="Large"
      />
    </div>
  ),
}

export const DifferentVariants: Story = {
  render: () => (
    <div className="space-y-4">
      <CustomTextarea
        variant="outlined"
        placeholder="Outlined вариант"
        label="Outlined"
      />
      <CustomTextarea
        variant="filled"
        placeholder="Filled вариант"
        label="Filled"
      />
    </div>
  ),
}

export const ResizeOptions: Story = {
  render: () => (
    <div className="space-y-4">
      <CustomTextarea
        resize="none"
        placeholder="Без изменения размера"
        label="No Resize"
      />
      <CustomTextarea
        resize="vertical"
        placeholder="Только по вертикали"
        label="Vertical Resize"
      />
      <CustomTextarea
        resize="horizontal"
        placeholder="Только по горизонтали"
        label="Horizontal Resize"
      />
      <CustomTextarea
        resize="both"
        placeholder="По обеим осям"
        label="Both Resize"
      />
    </div>
  ),
}

export const CustomColors: Story = {
  args: {
    placeholder: "Кастомные цвета",
    label: "Custom Colors",
    borderColor: "#3b82f6",
    backgroundColor: "#f0f9ff",
    textColor: "#1e40af",
  },
}

export const Disabled: Story = {
  args: {
    placeholder: "Отключенное поле",
    label: "Disabled",
    disabled: true,
    value: "Это поле отключено",
  },
}

export const WithDefaultValue: Story = {
  args: {
    placeholder: "Введите текст...",
    label: "С значением по умолчанию",
    defaultValue: "Это значение по умолчанию для textarea компонента.",
  },
} 