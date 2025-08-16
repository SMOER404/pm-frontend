import type { Meta, StoryObj } from '@storybook/react'
import { Skeleton, SkeletonText, SkeletonAvatar } from '../components/ui/skeleton'

const meta: Meta<typeof Skeleton> = {
  title: 'Feedback/Skeleton',
  component: Skeleton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['text', 'circular', 'rectangular'],
    },
    animation: {
      control: { type: 'select' },
      options: ['pulse', 'wave', 'none'],
    },
    speed: {
      control: { type: 'select' },
      options: ['slow', 'normal', 'fast'],
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    className: "h-4 w-[250px]",
  },
}

export const Text: Story = {
  args: {
    variant: "text",
    className: "h-4 w-[250px]",
  },
}

export const Circular: Story = {
  args: {
    variant: "circular",
    className: "h-12 w-12",
  },
}

export const Rectangular: Story = {
  args: {
    variant: "rectangular",
    className: "h-32 w-[250px]",
  },
}

export const CustomSize: Story = {
  args: {
    width: 200,
    height: 100,
    className: "rounded-lg",
  },
}

export const SlowAnimation: Story = {
  args: {
    className: "h-4 w-[250px]",
    speed: "slow",
  },
}

export const FastAnimation: Story = {
  args: {
    className: "h-4 w-[250px]",
    speed: "fast",
  },
}

export const WaveAnimation: Story = {
  args: {
    className: "h-4 w-[250px]",
    animation: "wave",
  },
}

export const NoAnimation: Story = {
  args: {
    className: "h-4 w-[250px]",
    animation: "none",
  },
}

// SkeletonText stories
export const TextLines: Story = {
  render: (args) => (
    <div className="space-y-4">
      <SkeletonText lines={3} {...args} />
    </div>
  ),
}

export const HeadingText: Story = {
  render: (args) => (
    <div className="space-y-4">
      <SkeletonText variant="heading" lines={1} {...args} />
      <SkeletonText lines={3} {...args} />
    </div>
  ),
}

export const CaptionText: Story = {
  render: (args) => (
    <div className="space-y-4">
      <SkeletonText variant="heading" lines={1} {...args} />
      <SkeletonText lines={2} {...args} />
      <SkeletonText variant="caption" lines={1} {...args} />
    </div>
  ),
}

export const MultipleLines: Story = {
  render: (args) => (
    <div className="space-y-4">
      <SkeletonText lines={5} {...args} />
    </div>
  ),
}

// SkeletonAvatar stories
export const AvatarSmall: Story = {
  render: (args) => (
    <div className="space-y-4">
      <SkeletonAvatar size="sm" {...args} />
    </div>
  ),
}

export const AvatarDefault: Story = {
  render: (args) => (
    <div className="space-y-4">
      <SkeletonAvatar size="default" {...args} />
    </div>
  ),
}

export const AvatarLarge: Story = {
  render: (args) => (
    <div className="space-y-4">
      <SkeletonAvatar size="lg" {...args} />
    </div>
  ),
}

export const AvatarExtraLarge: Story = {
  render: (args) => (
    <div className="space-y-4">
      <SkeletonAvatar size="xl" {...args} />
    </div>
  ),
}

export const AvatarSquare: Story = {
  render: (args) => (
    <div className="space-y-4">
      <SkeletonAvatar variant="square" size="lg" {...args} />
    </div>
  ),
}

export const AvatarCircular: Story = {
  render: (args) => (
    <div className="space-y-4">
      <SkeletonAvatar variant="circular" size="lg" {...args} />
    </div>
  ),
}

// Complex examples
export const CardSkeleton: Story = {
  render: (args) => (
    <div className="flex flex-col space-y-3">
      <Skeleton className="h-[125px] w-[250px] rounded-xl" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[200px]" />
      </div>
    </div>
  ),
}

export const ProfileSkeleton: Story = {
  render: (args) => (
    <div className="flex items-center space-x-4">
      <SkeletonAvatar size="lg" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[150px]" />
        <Skeleton className="h-4 w-[100px]" />
      </div>
    </div>
  ),
}

export const ArticleSkeleton: Story = {
  render: (args) => (
    <div className="space-y-4">
      <div className="flex items-center space-x-4">
        <SkeletonAvatar size="sm" />
        <div className="space-y-2">
          <Skeleton className="h-4 w-[100px]" />
          <Skeleton className="h-4 w-[150px]" />
        </div>
      </div>
      <Skeleton className="h-4 w-[250px]" />
      <Skeleton className="h-4 w-[200px]" />
      <Skeleton className="h-4 w-[220px]" />
    </div>
  ),
}

export const ListSkeleton: Story = {
  render: (args) => (
    <div className="space-y-3">
      {Array.from({ length: 5 }).map((_, i) => (
        <div key={i} className="flex items-center space-x-4">
          <Skeleton className="h-12 w-12 rounded-full" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-[150px]" />
            <Skeleton className="h-4 w-[100px]" />
          </div>
        </div>
      ))}
    </div>
  ),
}

export const TableSkeleton: Story = {
  render: (args) => (
    <div className="space-y-3">
      {Array.from({ length: 4 }).map((_, i) => (
        <div key={i} className="flex space-x-4">
          <Skeleton className="h-4 w-[100px]" />
          <Skeleton className="h-4 w-[150px]" />
          <Skeleton className="h-4 w-[120px]" />
          <Skeleton className="h-4 w-[80px]" />
        </div>
      ))}
    </div>
  ),
}

export const FormSkeleton: Story = {
  render: (args) => (
    <div className="space-y-4">
      <div className="space-y-2">
        <Skeleton className="h-4 w-[80px]" />
        <Skeleton className="h-10 w-[300px]" />
      </div>
      <div className="space-y-2">
        <Skeleton className="h-4 w-[100px]" />
        <Skeleton className="h-10 w-[300px]" />
      </div>
      <div className="space-y-2">
        <Skeleton className="h-4 w-[120px]" />
        <Skeleton className="h-20 w-[300px]" />
      </div>
      <div className="flex space-x-2">
        <Skeleton className="h-10 w-[100px]" />
        <Skeleton className="h-10 w-[100px]" />
      </div>
    </div>
  ),
}

