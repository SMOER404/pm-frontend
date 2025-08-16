import type { Meta, StoryObj } from '@storybook/react'
import { Badge, BadgeWithIcon } from '../components/ui/badge'
import { CheckCircle, AlertCircle, XCircle, Info, Star, Heart } from 'lucide-react'

const meta: Meta<typeof Badge> = {
  title: 'Data Display/Badge',
  component: Badge,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'secondary', 'destructive', 'outline'],
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'default', 'lg'],
    },
    color: {
      control: { type: 'select' },
      options: ['default', 'success', 'warning', 'error', 'info'],
    },
    dot: {
      control: { type: 'boolean' },
    },
    showZero: {
      control: { type: 'boolean' },
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: "Badge",
  },
}

export const Secondary: Story = {
  args: {
    variant: "secondary",
    children: "Secondary",
  },
}

export const Destructive: Story = {
  args: {
    variant: "destructive",
    children: "Destructive",
  },
}

export const Outline: Story = {
  args: {
    variant: "outline",
    children: "Outline",
  },
}

export const Small: Story = {
  args: {
    size: "sm",
    children: "Small",
  },
}

export const Large: Story = {
  args: {
    size: "lg",
    children: "Large",
  },
}

export const Success: Story = {
  args: {
    color: "success",
    children: "Success",
  },
}

export const Warning: Story = {
  args: {
    color: "warning",
    children: "Warning",
  },
}

export const Error: Story = {
  args: {
    color: "error",
    children: "Error",
  },
}

export const InfoColor: Story = {
  args: {
    color: "info",
    children: "Info",
  },
}

export const WithNumber: Story = {
  args: {
    children: 42,
  },
}

export const WithMaxNumber: Story = {
  args: {
    children: 150,
    max: 99,
  },
}

export const ShowZero: Story = {
  args: {
    children: 0,
    showZero: true,
  },
}

export const Dot: Story = {
  args: {
    dot: true,
    children: "Status",
  },
}

export const DotOnly: Story = {
  args: {
    dot: true,
  },
}

// BadgeWithIcon stories
export const WithIconLeft: Story = {
  render: (args) => (
    <BadgeWithIcon
      icon={<CheckCircle className="h-3 w-3" />}
      iconPosition="left"
      {...args}
    >
      Success
    </BadgeWithIcon>
  ),
}

export const WithIconRight: Story = {
  render: (args) => (
    <BadgeWithIcon
      icon={<Star className="h-3 w-3" />}
      iconPosition="right"
      {...args}
    >
      Featured
    </BadgeWithIcon>
  ),
}

export const WithIconSuccess: Story = {
  render: (args) => (
    <BadgeWithIcon
      icon={<CheckCircle className="h-3 w-3" />}
      color="success"
      {...args}
    >
      Completed
    </BadgeWithIcon>
  ),
}

export const WithIconWarning: Story = {
  render: (args) => (
    <BadgeWithIcon
      icon={<AlertCircle className="h-3 w-3" />}
      color="warning"
      {...args}
    >
      Pending
    </BadgeWithIcon>
  ),
}

export const WithIconError: Story = {
  render: (args) => (
    <BadgeWithIcon
      icon={<XCircle className="h-3 w-3" />}
      color="error"
      {...args}
    >
      Failed
    </BadgeWithIcon>
  ),
}

export const WithIconInfo: Story = {
  render: (args) => (
    <BadgeWithIcon
      icon={<Info className="h-3 w-3" />}
      color="info"
      {...args}
    >
      Information
    </BadgeWithIcon>
  ),
}

// Complex examples
export const NotificationBadge: Story = {
  render: (args) => (
    <div className="flex items-center space-x-4">
      <div className="relative">
        <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
          <span className="text-sm">📧</span>
        </div>
        <Badge
          className="absolute -top-1 -right-1"
          variant="destructive"
          size="sm"
          {...args}
        >
          3
        </Badge>
      </div>
      
      <div className="relative">
        <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
          <span className="text-sm">🔔</span>
        </div>
        <Badge
          className="absolute -top-1 -right-1"
          dot={true}
          variant="destructive"
          size="sm"
          {...args}
        />
      </div>
    </div>
  ),
}

export const StatusBadges: Story = {
  render: (args) => (
    <div className="flex flex-wrap gap-2">
      <BadgeWithIcon
        icon={<CheckCircle className="h-3 w-3" />}
        color="success"
        {...args}
      >
        Active
      </BadgeWithIcon>
      
      <BadgeWithIcon
        icon={<AlertCircle className="h-3 w-3" />}
        color="warning"
        {...args}
      >
        Pending
      </BadgeWithIcon>
      
      <BadgeWithIcon
        icon={<XCircle className="h-3 w-3" />}
        color="error"
        {...args}
      >
        Inactive
      </BadgeWithIcon>
      
      <BadgeWithIcon
        icon={<Info className="h-3 w-3" />}
        color="info"
        {...args}
      >
        Draft
      </BadgeWithIcon>
    </div>
  ),
}

export const CategoryBadges: Story = {
  render: (args) => (
    <div className="flex flex-wrap gap-2">
      <Badge variant="outline" {...args}>
        Technology
      </Badge>
      
      <Badge variant="outline" {...args}>
        Design
      </Badge>
      
      <Badge variant="outline" {...args}>
        Marketing
      </Badge>
      
      <Badge variant="outline" {...args}>
        Development
      </Badge>
    </div>
  ),
}

export const PriorityBadges: Story = {
  render: (args) => (
    <div className="flex flex-wrap gap-2">
      <Badge color="error" {...args}>
        High Priority
      </Badge>
      
      <Badge color="warning" {...args}>
        Medium Priority
      </Badge>
      
      <Badge color="success" {...args}>
        Low Priority
      </Badge>
    </div>
  ),
}

export const UserBadges: Story = {
  render: (args) => (
    <div className="flex flex-wrap gap-2">
      <BadgeWithIcon
        icon={<Star className="h-3 w-3" />}
        color="warning"
        {...args}
      >
        Premium
      </BadgeWithIcon>
      
      <BadgeWithIcon
        icon={<Heart className="h-3 w-3" />}
        color="error"
        {...args}
      >
        VIP
      </BadgeWithIcon>
      
      <Badge variant="secondary" {...args}>
        New User
      </Badge>
      
      <Badge color="info" {...args}>
        Verified
      </Badge>
    </div>
  ),
}

export const ProgressBadges: Story = {
  render: (args) => (
    <div className="flex flex-wrap gap-2">
      <Badge color="success" {...args}>
        100% Complete
      </Badge>
      
      <Badge color="warning" {...args}>
        75% Complete
      </Badge>
      
      <Badge color="error" {...args}>
        25% Complete
      </Badge>
    </div>
  ),
}

export const SizeComparison: Story = {
  render: (args) => (
    <div className="flex items-center space-x-4">
      <Badge size="sm" {...args}>
        Small
      </Badge>
      
      <Badge size="default" {...args}>
        Default
      </Badge>
      
      <Badge size="lg" {...args}>
        Large
      </Badge>
    </div>
  ),
}

export const VariantComparison: Story = {
  render: (args) => (
    <div className="flex flex-wrap gap-2">
      <Badge variant="default" {...args}>
        Default
      </Badge>
      
      <Badge variant="secondary" {...args}>
        Secondary
      </Badge>
      
      <Badge variant="destructive" {...args}>
        Destructive
      </Badge>
      
      <Badge variant="outline" {...args}>
        Outline
      </Badge>
    </div>
  ),
}

export const ColorComparison: Story = {
  render: (args) => (
    <div className="flex flex-wrap gap-2">
      <Badge color="default" {...args}>
        Default
      </Badge>
      
      <Badge color="success" {...args}>
        Success
      </Badge>
      
      <Badge color="warning" {...args}>
        Warning
      </Badge>
      
      <Badge color="error" {...args}>
        Error
      </Badge>
      
      <Badge color="info" {...args}>
        Info
      </Badge>
    </div>
  ),
}
