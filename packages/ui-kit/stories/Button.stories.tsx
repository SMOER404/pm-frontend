import type { Meta, StoryObj } from "@storybook/react"
import { Button } from "../components/ui/button"

const meta: Meta<typeof Button> = {
  title: "UI/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["default", "destructive", "outline", "secondary", "ghost", "link"],
    },
    size: {
      control: { type: "select" },
      options: ["default", "sm", "lg", "icon"],
    },
    hover: {
      control: { type: "boolean" },
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
    children: "Button",
    variant: "default",
    size: "default",
    hover: false,
  },
}

export const Secondary: Story = {
  args: {
    children: "Secondary",
    variant: "secondary",
    size: "default",
    hover: false,
  },
}

export const Outline: Story = {
  args: {
    children: "Outline",
    variant: "outline",
    size: "default",
    hover: false,
  },
}

export const Ghost: Story = {
  args: {
    children: "Ghost",
    variant: "ghost",
    size: "default",
    hover: false,
  },
}

export const Link: Story = {
  args: {
    children: "Link",
    variant: "link",
    size: "default",
    hover: false,
  },
}

export const Destructive: Story = {
  args: {
    children: "Destructive",
    variant: "destructive",
    size: "default",
    hover: false,
  },
}

export const WithHover: Story = {
  args: {
    children: "Hover Enabled",
    variant: "outline",
    size: "default",
    hover: true,
  },
}

export const Small: Story = {
  args: {
    children: "Small",
    variant: "default",
    size: "sm",
    hover: false,
  },
}

export const Large: Story = {
  args: {
    children: "Large",
    variant: "default",
    size: "lg",
    hover: false,
  },
}

export const Disabled: Story = {
  args: {
    children: "Disabled",
    variant: "default",
    size: "default",
    hover: false,
    disabled: true,
  },
}

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Button variant="default" hover={false}>Default</Button>
      <Button variant="secondary" hover={false}>Secondary</Button>
      <Button variant="outline" hover={false}>Outline</Button>
      <Button variant="ghost" hover={false}>Ghost</Button>
      <Button variant="link" hover={false}>Link</Button>
      <Button variant="destructive" hover={false}>Destructive</Button>
    </div>
  ),
}

export const AllVariantsWithHover: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Button variant="default" hover={true}>Default</Button>
      <Button variant="secondary" hover={true}>Secondary</Button>
      <Button variant="outline" hover={true}>Outline</Button>
      <Button variant="ghost" hover={true}>Ghost</Button>
      <Button variant="link" hover={true}>Link</Button>
      <Button variant="destructive" hover={true}>Destructive</Button>
    </div>
  ),
}

export const AllSizes: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4 items-center">
      <Button size="sm" hover={false}>Small</Button>
      <Button size="default" hover={false}>Default</Button>
      <Button size="lg" hover={false}>Large</Button>
    </div>
  ),
}

export const AllSizesWithHover: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4 items-center">
      <Button size="sm" hover={true}>Small</Button>
      <Button size="default" hover={true}>Default</Button>
      <Button size="lg" hover={true}>Large</Button>
    </div>
  ),
} 