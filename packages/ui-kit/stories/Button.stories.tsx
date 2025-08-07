import type { Meta, StoryObj } from "@storybook/react"
import CustomButton from "../components/custom-button"
import { Home, Download, Settings } from "lucide-react"

const meta: Meta<typeof CustomButton> = {
  title: "Components/Button",
  component: CustomButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["primary", "secondary", "outlined", "ghost", "text", "danger", "success", "warning"],
    },
    size: {
      control: { type: "select" },
      options: ["xs", "sm", "md", "lg", "xl"],
    },
    icon: {
      control: { type: "select" },
      options: ["none", "home", "download", "settings"],
    },
    loading: {
      control: { type: "boolean" },
    },
    fullWidth: {
      control: { type: "boolean" },
    },
    disabled: {
      control: { type: "boolean" },
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

// Базовые варианты кнопок
export const Primary: Story = {
  args: {
    children: "Primary",
    variant: "primary",
  },
}

export const Secondary: Story = {
  args: {
    children: "Secondary",
    variant: "secondary",
  },
}

export const Outlined: Story = {
  args: {
    children: "Outlined",
    variant: "outlined",
  },
}

export const Ghost: Story = {
  args: {
    children: "Ghost",
    variant: "ghost",
  },
}

export const Text: Story = {
  args: {
    children: "Text",
    variant: "text",
  },
}

export const Danger: Story = {
  args: {
    children: "Danger",
    variant: "danger",
  },
}

export const Success: Story = {
  args: {
    children: "Success",
    variant: "success",
  },
}

export const Warning: Story = {
  args: {
    children: "Warning",
    variant: "warning",
  },
}

// Размеры кнопок
export const Small: Story = {
  args: {
    children: "Small",
    size: "sm",
  },
}

export const Medium: Story = {
  args: {
    children: "Medium",
    size: "md",
  },
}

export const Large: Story = {
  args: {
    children: "Large",
    size: "lg",
  },
}

export const ExtraLarge: Story = {
  args: {
    children: "Extra Large",
    size: "xl",
  },
}

// Кнопки с иконками
export const WithIcon: Story = {
  args: {
    children: "With Icon",
    icon: <Home className="w-4 h-4" />,
  },
}

export const IconOnly: Story = {
  args: {
    icon: <Settings className="w-4 h-4" />,
    iconOnly: true,
  },
}

export const WithIconRight: Story = {
  args: {
    children: "Download",
    icon: <Download className="w-4 h-4" />,
  },
}

// Состояния кнопок
export const Loading: Story = {
  args: {
    children: "Loading",
    loading: true,
  },
}

export const Disabled: Story = {
  args: {
    children: "Disabled",
    disabled: true,
  },
}

export const FullWidth: Story = {
  args: {
    children: "Full Width Button",
    fullWidth: true,
  },
}

// Демонстрация всех вариантов
export const AllVariants: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-4">
        <CustomButton variant="primary">Primary</CustomButton>
        <CustomButton variant="secondary">Secondary</CustomButton>
        <CustomButton variant="outlined">Outlined</CustomButton>
        <CustomButton variant="ghost">Ghost</CustomButton>
        <CustomButton variant="text">Text</CustomButton>
        <CustomButton variant="danger">Danger</CustomButton>
        <CustomButton variant="success">Success</CustomButton>
        <CustomButton variant="warning">Warning</CustomButton>
      </div>
    </div>
  ),
}

// Демонстрация всех размеров
export const AllSizes: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center gap-4">
        <CustomButton size="xs">Extra Small</CustomButton>
        <CustomButton size="sm">Small</CustomButton>
        <CustomButton size="md">Medium</CustomButton>
        <CustomButton size="lg">Large</CustomButton>
        <CustomButton size="xl">Extra Large</CustomButton>
      </div>
    </div>
  ),
} 