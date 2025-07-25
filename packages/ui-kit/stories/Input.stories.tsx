import type { Meta, StoryObj } from "@storybook/react"
import { fn } from "@storybook/test"
import CustomInput from "../components/custom-input"

const meta = {
  title: "Components/CustomInput",
  component: CustomInput,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "Кастомное поле ввода с поддержкой различных типов и состояний.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: "select",
      options: ["text", "email", "password", "number", "tel", "url", "search"],
      description: "Тип поля ввода",
    },
    variant: {
      control: "select",
      options: ["outlined", "filled"],
      description: "Вариант стиля поля",
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
      description: "Размер поля",
    },
    placeholder: {
      control: "text",
      description: "Плейсхолдер",
    },
    disabled: {
      control: "boolean",
      description: "Отключенное состояние",
    },
    error: {
      control: "boolean",
      description: "Состояние ошибки",
    },
    icon: {
      control: "text",
      description: "Иконка",
    },
  },
  args: { onChange: fn() },
} satisfies Meta<typeof CustomInput>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    placeholder: "Введите текст...",
  },
}

export const WithLabel: Story = {
  args: {
    label: "Email",
    placeholder: "example@email.com",
    type: "email",
  },
}

export const Password: Story = {
  args: {
    label: "Пароль",
    type: "password",
    placeholder: "Введите пароль",
  },
}

export const Number: Story = {
  args: {
    label: "Возраст",
    type: "number",
    placeholder: "Введите возраст",
  },
}

export const Outlined: Story = {
  args: {
    variant: "outlined",
    placeholder: "Outlined input",
  },
}

export const Filled: Story = {
  args: {
    variant: "filled",
    placeholder: "Filled input",
  },
}

export const Small: Story = {
  args: {
    size: "sm",
    placeholder: "Small input",
  },
}

export const Large: Story = {
  args: {
    size: "lg",
    placeholder: "Large input",
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
    placeholder: "Disabled input",
    value: "Неизменяемое значение",
  },
}

export const WithError: Story = {
  args: {
    error: "Это поле обязательно для заполнения",
    placeholder: "Input with error",
  },
}

export const WithIcon: Story = {
  args: {
    icon: "🔍",
    placeholder: "Поиск...",
    type: "search",
  },
}
