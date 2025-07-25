import type { Meta, StoryObj } from "@storybook/react"
import { fn } from "@storybook/test"
import CustomButton from "../components/custom-button"

const meta = {
  title: "Components/CustomButton",
  component: CustomButton,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Кнопка со скошенными углами в стиле Material UI с поддержкой различных вариантов, размеров и состояний.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "secondary", "outline", "ghost", "link"],
      description: "Вариант стиля кнопки",
    },
    size: {
      control: "select",
      options: ["xs", "sm", "md", "lg", "xl"],
      description: "Размер кнопки",
    },
    leftIcon: {
      control: "text",
      description: "Иконка слева",
    },
    rightIcon: {
      control: "text",
      description: "Иконка справа",
    },
    iconOnly: {
      control: "boolean",
      description: "Только иконка",
    },
    disabled: {
      control: "boolean",
      description: "Отключенное состояние",
    },
    loading: {
      control: "boolean",
      description: "Состояние загрузки",
    },
    chamferSize: {
      control: "select",
      options: ["small", "medium", "large"],
      description: "Размер скоса",
    },
  },
  args: { onClick: fn() },
} satisfies Meta<typeof CustomButton>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    variant: "primary",
    children: "Primary Button",
  },
}

export const Secondary: Story = {
  args: {
    variant: "secondary",
    children: "Secondary Button",
  },
}

export const Outline: Story = {
  args: {
    variant: "outline",
    children: "Outline Button",
  },
}

export const Ghost: Story = {
  args: {
    variant: "ghost",
    children: "Ghost Button",
  },
}

export const WithIcon: Story = {
  args: {
    variant: "primary",
    leftIcon: "⬇️",
    children: "Download",
  },
}

export const IconOnly: Story = {
  args: {
    variant: "primary",
    leftIcon: "➕",
    iconOnly: true,
    children: "",
  },
}

export const Loading: Story = {
  args: {
    variant: "primary",
    loading: true,
    children: "Loading...",
  },
}

export const Disabled: Story = {
  args: {
    variant: "primary",
    disabled: true,
    children: "Disabled Button",
  },
}

export const Small: Story = {
  args: {
    variant: "primary",
    size: "sm",
    children: "Small Button",
  },
}

export const Large: Story = {
  args: {
    variant: "primary",
    size: "lg",
    children: "Large Button",
  },
}

export const Link: Story = {
  args: {
    variant: "link",
    children: "Link Button",
  },
}

export const ExtraLarge: Story = {
  args: {
    variant: "primary",
    size: "xl",
    children: "Extra Large Button",
  },
}
