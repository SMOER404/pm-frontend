import type { Meta, StoryObj } from "@storybook/react"
import CustomSkeleton from "../components/custom-skeleton"

const meta: Meta<typeof CustomSkeleton> = {
  title: "Components/Skeleton",
  component: CustomSkeleton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["text", "circular", "rectangular"],
    },
    animation: {
      control: { type: "select" },
      options: ["pulse", "wave", "none"],
    },
    width: {
      control: { type: "text" },
    },
    height: {
      control: { type: "text" },
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    variant: "text",
  },
}

export const Text: Story = {
  args: {
    variant: "text",
    width: "100%",
  },
}

export const Circular: Story = {
  args: {
    variant: "circular",
    width: "40px",
    height: "40px",
  },
}

export const Rectangular: Story = {
  args: {
    variant: "rectangular",
    width: "200px",
    height: "100px",
  },
}

export const DifferentVariants: Story = {
  render: () => (
    <div className="space-y-4">
      <div>
        <h3 className="text-lg font-semibold mb-2">Text</h3>
        <CustomSkeleton variant="text" width="300px" />
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-2">Circular</h3>
        <CustomSkeleton variant="circular" width="60px" height="60px" />
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-2">Rectangular</h3>
        <CustomSkeleton variant="rectangular" width="200px" height="100px" />
      </div>
    </div>
  ),
}

export const DifferentAnimations: Story = {
  render: () => (
    <div className="space-y-4">
      <div>
        <h3 className="text-lg font-semibold mb-2">Pulse Animation</h3>
        <CustomSkeleton variant="text" width="200px" animation="pulse" />
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-2">Wave Animation</h3>
        <CustomSkeleton variant="text" width="200px" animation="wave" />
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-2">No Animation</h3>
        <CustomSkeleton variant="text" width="200px" animation="none" />
      </div>
    </div>
  ),
}

export const CustomDimensions: Story = {
  render: () => (
    <div className="space-y-4">
      <div>
        <h3 className="text-lg font-semibold mb-2">Custom Width</h3>
        <CustomSkeleton variant="text" width="300px" />
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-2">Custom Height</h3>
        <CustomSkeleton variant="rectangular" width="200px" height="50px" />
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-2">Square</h3>
        <CustomSkeleton variant="rectangular" width="100px" height="100px" />
      </div>
    </div>
  ),
}

export const CardSkeleton: Story = {
  render: () => (
    <div className="w-80 p-4 border rounded-lg space-y-4">
      <CustomSkeleton variant="rectangular" width="100%" height="200px" />
      <div className="space-y-2">
        <CustomSkeleton variant="text" width="80%" />
        <CustomSkeleton variant="text" width="60%" />
        <CustomSkeleton variant="text" width="40%" />
      </div>
      <div className="flex gap-2">
        <CustomSkeleton variant="circular" width="24px" height="24px" />
        <CustomSkeleton variant="text" width="100px" />
      </div>
    </div>
  ),
}

export const ListSkeleton: Story = {
  render: () => (
    <div className="space-y-3">
      {[1, 2, 3, 4, 5].map((item) => (
        <div key={item} className="flex items-center gap-3 p-3 border rounded">
          <CustomSkeleton variant="circular" width="40px" height="40px" />
          <div className="flex-1 space-y-2">
            <CustomSkeleton variant="text" width="70%" />
            <CustomSkeleton variant="text" width="50%" />
          </div>
        </div>
      ))}
    </div>
  ),
}

export const ProfileSkeleton: Story = {
  render: () => (
    <div className="w-64 p-4 border rounded-lg space-y-4">
      <div className="flex items-center gap-3">
        <CustomSkeleton variant="circular" width="60px" height="60px" />
        <div className="flex-1 space-y-2">
          <CustomSkeleton variant="text" width="80%" />
          <CustomSkeleton variant="text" width="60%" />
        </div>
      </div>
      <div className="space-y-2">
        <CustomSkeleton variant="text" width="100%" />
        <CustomSkeleton variant="text" width="90%" />
        <CustomSkeleton variant="text" width="75%" />
      </div>
      <div className="flex gap-2">
        <CustomSkeleton variant="rectangular" width="80px" height="32px" />
        <CustomSkeleton variant="rectangular" width="80px" height="32px" />
      </div>
    </div>
  ),
}

export const TableSkeleton: Story = {
  render: () => (
    <div className="border rounded-lg overflow-hidden">
      <div className="p-4 border-b">
        <CustomSkeleton variant="text" width="200px" />
      </div>
      <div className="divide-y">
        {[1, 2, 3, 4, 5].map((row) => (
          <div key={row} className="p-4 flex items-center gap-4">
            <CustomSkeleton variant="text" width="100px" />
            <CustomSkeleton variant="text" width="150px" />
            <CustomSkeleton variant="text" width="120px" />
            <CustomSkeleton variant="circular" width="24px" height="24px" />
          </div>
        ))}
      </div>
    </div>
  ),
} 