import type { Meta, StoryObj } from "@storybook/react"
import CustomBadge from "../components/custom-badge"

const meta = {
  title: "Components/CustomBadge",
  component: CustomBadge,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "Бейдж для отображения статуса, количества или меток.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "primary", "secondary", "success", "warning", "error"],
      description: "Вариант стиля бейджа",
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
      description: "Размер бейджа",
    },
    children: {
      control: "text",
      description: "Содержимое бейджа",
    },
  },
} satisfies Meta<typeof CustomBadge>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: "Default Badge",
  },
}

export const Secondary: Story = {
  args: {
    variant: "secondary",
    children: "Secondary Badge",
  },
}

export const Success: Story = {
  args: {
    variant: "success",
    children: "Success Badge",
  },
}

export const Warning: Story = {
  args: {
    variant: "warning",
    children: "Warning Badge",
  },
}

export const Small: Story = {
  args: {
    size: "sm",
    children: "Small Badge",
  },
}

export const Large: Story = {
  args: {
    size: "lg",
    children: "Large Badge",
  },
}

export const WithNumber: Story = {
  args: {
    children: "42",
  },
}

export const WithIcon: Story = {
  args: {
    children: "✓ Success",
  },
} 