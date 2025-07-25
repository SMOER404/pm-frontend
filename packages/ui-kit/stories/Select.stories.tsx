import type { Meta, StoryObj } from "@storybook/react"
import { useState } from "react"
import CustomSelect from "../components/custom-select"

const meta = {
  title: "Components/CustomSelect",
  component: CustomSelect,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "Кастомный селект с скошенными углами для выбора опций.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
      description: "Размер селекта",
    },
    variant: {
      control: "select",
      options: ["outlined", "filled"],
      description: "Вариант стиля",
    },
    disabled: {
      control: "boolean",
      description: "Отключенное состояние",
    },
  },
} satisfies Meta<typeof CustomSelect>

export default meta
type Story = StoryObj<typeof meta>

const SelectWithState = (args: any) => {
  const [value, setValue] = useState<string>("")

  return (
    <CustomSelect
      {...args}
      value={value}
      onChange={setValue}
    />
  )
}

const options = [
  { value: "option1", label: "Опция 1" },
  { value: "option2", label: "Опция 2" },
  { value: "option3", label: "Опция 3" },
  { value: "option4", label: "Опция 4" },
  { value: "option5", label: "Опция 5" },
]

const countries = [
  { value: "ru", label: "Россия" },
  { value: "us", label: "США" },
  { value: "de", label: "Германия" },
  { value: "fr", label: "Франция" },
  { value: "uk", label: "Великобритания" },
  { value: "cn", label: "Китай" },
  { value: "jp", label: "Япония" },
  { value: "kr", label: "Южная Корея" },
]

export const Default: Story = {
  args: {
    options,
    placeholder: "Выберите опцию",
  },
  render: (args) => <SelectWithState {...args} />,
}

export const WithLabel: Story = {
  args: {
    options,
    label: "Выберите страну",
    placeholder: "Выберите страну",
  },
  render: (args) => <SelectWithState {...args} />,
}

export const Countries: Story = {
  args: {
    options: countries,
    label: "Страна",
    placeholder: "Выберите страну",
  },
  render: (args) => <SelectWithState {...args} />,
}

export const Small: Story = {
  args: {
    options,
    size: "sm",
    label: "Маленький селект",
    placeholder: "Выберите опцию",
  },
  render: (args) => <SelectWithState {...args} />,
}

export const Large: Story = {
  args: {
    options,
    size: "lg",
    label: "Большой селект",
    placeholder: "Выберите опцию",
  },
  render: (args) => <SelectWithState {...args} />,
}

export const Filled: Story = {
  args: {
    options,
    variant: "filled",
    label: "Заполненный селект",
    placeholder: "Выберите опцию",
  },
  render: (args) => <SelectWithState {...args} />,
}

export const Disabled: Story = {
  args: {
    options,
    disabled: true,
    label: "Отключенный селект",
    placeholder: "Выберите опцию",
  },
  render: (args) => <SelectWithState {...args} />,
}

export const WithError: Story = {
  args: {
    options,
    error: "Это поле обязательно для заполнения",
    label: "Селект с ошибкой",
    placeholder: "Выберите опцию",
  },
  render: (args) => <SelectWithState {...args} />,
}

export const WithHelperText: Story = {
  args: {
    options,
    helperText: "Выберите подходящую опцию из списка",
    label: "Селект с подсказкой",
    placeholder: "Выберите опцию",
  },
  render: (args) => <SelectWithState {...args} />,
}

export const WithDisabledOptions: Story = {
  args: {
    options: [
      { value: "option1", label: "Опция 1" },
      { value: "option2", label: "Опция 2", disabled: true },
      { value: "option3", label: "Опция 3" },
      { value: "option4", label: "Опция 4", disabled: true },
      { value: "option5", label: "Опция 5" },
    ],
    label: "Селект с отключенными опциями",
    placeholder: "Выберите опцию",
  },
  render: (args) => <SelectWithState {...args} />,
} 