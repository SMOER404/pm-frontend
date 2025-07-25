import type { Meta, StoryObj } from "@storybook/react"
import CustomButton from "../components/custom-button-v2"
import { Heart, Star, Download, Settings } from "lucide-react"

const meta: Meta<typeof CustomButton> = {
  title: "Components/Button V2",
  component: CustomButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["primary", "secondary", "outlined", "ghost", "danger", "success", "warning"],
    },
    size: {
      control: { type: "select" },
      options: ["xs", "sm", "md", "lg", "xl"],
    },
    disabled: {
      control: { type: "boolean" },
    },
    loading: {
      control: { type: "boolean" },
    },
    fullWidth: {
      control: { type: "boolean" },
    },
    iconOnly: {
      control: { type: "boolean" },
    },
  },
}

export default meta
type Story = StoryObj<typeof CustomButton>

export const Default: Story = {
  args: {
    children: "Button",
  },
}

export const Variants: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-4">
        <CustomButton variant="primary">Primary</CustomButton>
        <CustomButton variant="secondary">Secondary</CustomButton>
        <CustomButton variant="outlined">Outlined</CustomButton>
        <CustomButton variant="ghost">Ghost</CustomButton>
        <CustomButton variant="danger">Danger</CustomButton>
        <CustomButton variant="success">Success</CustomButton>
        <CustomButton variant="warning">Warning</CustomButton>
      </div>
    </div>
  ),
}

export const Sizes: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="flex items-center gap-4">
        <CustomButton size="xs">Extra Small</CustomButton>
        <CustomButton size="sm">Small</CustomButton>
        <CustomButton size="md">Medium</CustomButton>
        <CustomButton size="lg">Large</CustomButton>
        <CustomButton size="xl">Extra Large</CustomButton>
      </div>
    </div>
  ),
}

export const WithIcons: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-4">
        <CustomButton icon={<Heart className="w-4 h-4" />}>
          Like
        </CustomButton>
        <CustomButton icon={<Star className="w-4 h-4" />} iconOnly />
        <CustomButton icon={<Download className="w-4 h-4" />}>
          Download
        </CustomButton>
        <CustomButton icon={<Settings className="w-4 h-4" />} variant="outlined">
          Settings
        </CustomButton>
      </div>
    </div>
  ),
}

export const States: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-4">
        <CustomButton>Normal</CustomButton>
        <CustomButton disabled>Disabled</CustomButton>
        <CustomButton loading>Loading</CustomButton>
        <CustomButton disabled loading>Disabled Loading</CustomButton>
      </div>
    </div>
  ),
}

export const FullWidth: Story = {
  render: () => (
    <div className="space-y-4 w-96">
      <CustomButton fullWidth>Full Width Button</CustomButton>
      <CustomButton fullWidth variant="outlined">
        Full Width Outlined
      </CustomButton>
      <CustomButton fullWidth variant="ghost">
        Full Width Ghost
      </CustomButton>
    </div>
  ),
}

export const Interactive: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-4">
        <CustomButton 
          onClick={() => alert('Button clicked!')}
          icon={<Heart className="w-4 h-4" />}
        >
          Click Me
        </CustomButton>
        <CustomButton 
          variant="outlined"
          onClick={() => console.log('Outlined button clicked')}
        >
          Console Log
        </CustomButton>
        <CustomButton 
          variant="danger"
          onClick={() => confirm('Are you sure?')}
        >
          Confirm Action
        </CustomButton>
      </div>
    </div>
  ),
}

export const LoadingStates: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-4">
        <CustomButton loading>Loading...</CustomButton>
        <CustomButton loading icon={<Download className="w-4 h-4" />}>
          Downloading...
        </CustomButton>
        <CustomButton loading variant="outlined">
          Processing...
        </CustomButton>
        <CustomButton loading variant="ghost" iconOnly />
      </div>
    </div>
  ),
}

export const IconOnlyButtons: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-4">
        <CustomButton icon={<Heart className="w-4 h-4" />} iconOnly />
        <CustomButton icon={<Star className="w-4 h-4" />} iconOnly variant="outlined" />
        <CustomButton icon={<Settings className="w-4 h-4" />} iconOnly variant="ghost" />
        <CustomButton icon={<Download className="w-4 h-4" />} iconOnly variant="danger" />
        <CustomButton icon={<Heart className="w-4 h-4" />} iconOnly size="lg" />
        <CustomButton icon={<Star className="w-4 h-4" />} iconOnly size="xl" />
      </div>
    </div>
  ),
} 