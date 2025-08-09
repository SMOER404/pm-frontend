import type { Meta, StoryObj } from "@storybook/react"
import { BevelBox } from "../components/ui/bevel-box"

const meta: Meta<typeof BevelBox> = {
  title: "UI/BevelBox",
  component: BevelBox,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["default", "secondary", "outlined", "ghost"],
    },
    bevelSize: {
      control: { type: "select" },
      options: ["xs", "sm", "md", "lg", "xl"],
    },
    hover: {
      control: { type: "boolean" },
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    variant: "default",
    bevelSize: "md",
    hover: false,
    className: "w-64 h-32",
    children: (
      <div className="flex items-center justify-center h-full">
        <span className="font-semibold">BevelBox Content</span>
      </div>
    ),
  },
}

export const Secondary: Story = {
  args: {
    variant: "secondary",
    bevelSize: "md",
    hover: false,
    className: "w-64 h-32",
    children: (
      <div className="flex items-center justify-center h-full">
        <span className="font-semibold">Secondary BevelBox</span>
      </div>
    ),
  },
}

export const Outlined: Story = {
  args: {
    variant: "outlined",
    bevelSize: "md",
    hover: false,
    className: "w-64 h-32",
    children: (
      <div className="flex items-center justify-center h-full">
        <span className="font-semibold">Outlined BevelBox</span>
      </div>
    ),
  },
}

export const Ghost: Story = {
  args: {
    variant: "ghost",
    bevelSize: "md",
    hover: false,
    className: "w-64 h-32",
    children: (
      <div className="flex items-center justify-center h-full">
        <span className="font-semibold">Ghost BevelBox</span>
      </div>
    ),
  },
}

export const WithHover: Story = {
  args: {
    variant: "outlined",
    bevelSize: "md",
    hover: true,
    className: "w-64 h-32",
    children: (
      <div className="flex items-center justify-center h-full">
        <span className="font-semibold">Hover Enabled</span>
      </div>
    ),
  },
}

export const AllVariants: Story = {
  render: () => (
    <div className="grid grid-cols-2 gap-4 p-4">
      <BevelBox variant="default" bevelSize="md" className="w-48 h-24">
        <div className="flex items-center justify-center h-full">
          <span className="font-semibold text-sm">Default</span>
        </div>
      </BevelBox>
      <BevelBox variant="secondary" bevelSize="md" className="w-48 h-24">
        <div className="flex items-center justify-center h-full">
          <span className="font-semibold text-sm">Secondary</span>
        </div>
      </BevelBox>
      <BevelBox variant="outlined" bevelSize="md" className="w-48 h-24">
        <div className="flex items-center justify-center h-full">
          <span className="font-semibold text-sm">Outlined</span>
        </div>
      </BevelBox>
      <BevelBox variant="ghost" bevelSize="md" className="w-48 h-24">
        <div className="flex items-center justify-center h-full">
          <span className="font-semibold text-sm">Ghost</span>
        </div>
      </BevelBox>
    </div>
  ),
}

export const AllSizes: Story = {
  render: () => (
    <div className="grid grid-cols-5 gap-4 p-4">
      <BevelBox variant="outlined" bevelSize="xs" className="w-32 h-16">
        <div className="flex items-center justify-center h-full">
          <span className="font-semibold text-xs">XS</span>
        </div>
      </BevelBox>
      <BevelBox variant="outlined" bevelSize="sm" className="w-32 h-16">
        <div className="flex items-center justify-center h-full">
          <span className="font-semibold text-xs">SM</span>
        </div>
      </BevelBox>
      <BevelBox variant="outlined" bevelSize="md" className="w-32 h-16">
        <div className="flex items-center justify-center h-full">
          <span className="font-semibold text-xs">MD</span>
        </div>
      </BevelBox>
      <BevelBox variant="outlined" bevelSize="lg" className="w-32 h-16">
        <div className="flex items-center justify-center h-full">
          <span className="font-semibold text-xs">LG</span>
        </div>
      </BevelBox>
      <BevelBox variant="outlined" bevelSize="xl" className="w-32 h-16">
        <div className="flex items-center justify-center h-full">
          <span className="font-semibold text-xs">XL</span>
        </div>
      </BevelBox>
    </div>
  ),
}
