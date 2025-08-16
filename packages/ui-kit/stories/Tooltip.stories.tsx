import type { Meta, StoryObj } from '@storybook/react'
import { Tooltip, TooltipProvider } from '../components/ui/tooltip'
import { Button } from '../components/ui/button'
import { Info, HelpCircle, AlertCircle, CheckCircle } from 'lucide-react'

const meta: Meta<typeof Tooltip> = {
  title: 'Feedback/Tooltip',
  component: Tooltip,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    side: {
      control: { type: 'select' },
      options: ['top', 'right', 'bottom', 'left'],
    },
    align: {
      control: { type: 'select' },
      options: ['start', 'center', 'end'],
    },
    variant: {
      control: { type: 'select' },
      options: ['default', 'success', 'warning', 'error', 'info'],
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'default', 'lg'],
    },
    delayDuration: {
      control: { type: 'number' },
    },
    sideOffset: {
      control: { type: 'number' },
    },
  },
  decorators: [
    (Story) => (
      <TooltipProvider>
        <Story />
      </TooltipProvider>
    ),
  ],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    content: "This is a default tooltip",
    children: <Button>Hover me</Button>,
  },
}

export const Top: Story = {
  args: {
    side: 'top',
    content: "Tooltip on top",
    children: <Button>Top tooltip</Button>,
  },
}

export const Right: Story = {
  args: {
    side: 'right',
    content: "Tooltip on right",
    children: <Button>Right tooltip</Button>,
  },
}

export const Bottom: Story = {
  args: {
    side: 'bottom',
    content: "Tooltip on bottom",
    children: <Button>Bottom tooltip</Button>,
  },
}

export const Left: Story = {
  args: {
    side: 'left',
    content: "Tooltip on left",
    children: <Button>Left tooltip</Button>,
  },
}

export const Success: Story = {
  args: {
    variant: 'success',
    content: "Success message",
    children: <Button variant="outline">Success tooltip</Button>,
  },
}

export const Warning: Story = {
  args: {
    variant: 'warning',
    content: "Warning message",
    children: <Button variant="outline">Warning tooltip</Button>,
  },
}

export const Error: Story = {
  args: {
    variant: 'error',
    content: "Error message",
    children: <Button variant="outline">Error tooltip</Button>,
  },
}

export const InfoTooltip: Story = {
  args: {
    variant: 'info',
    content: "Information message",
    children: <Button variant="outline">Info tooltip</Button>,
  },
}

export const Small: Story = {
  args: {
    size: 'sm',
    content: "Small tooltip",
    children: <Button size="sm">Small tooltip</Button>,
  },
}

export const Large: Story = {
  args: {
    size: 'lg',
    content: "Large tooltip with more content",
    children: <Button size="lg">Large tooltip</Button>,
  },
}

export const WithIcon: Story = {
  args: {
    content: "This button has additional information",
    children: (
      <Button variant="ghost" size="icon">
        <Info className="h-4 w-4" />
      </Button>
    ),
  },
}

export const LongContent: Story = {
  args: {
    content: "This is a very long tooltip message that demonstrates how the tooltip handles longer content. It should wrap properly and remain readable.",
    children: <Button>Long content tooltip</Button>,
  },
}

export const CustomDelay: Story = {
  args: {
    delayDuration: 2000,
    content: "This tooltip appears after 2 seconds",
    children: <Button>Delayed tooltip</Button>,
  },
}

export const NoDelay: Story = {
  args: {
    delayDuration: 0,
    content: "This tooltip appears immediately",
    children: <Button>Instant tooltip</Button>,
  },
}

export const CustomOffset: Story = {
  args: {
    sideOffset: 12,
    content: "Tooltip with custom offset",
    children: <Button>Custom offset</Button>,
  },
}

export const AlignStart: Story = {
  args: {
    align: 'start',
    content: "Aligned to start",
    children: <Button>Start aligned</Button>,
  },
}

export const AlignEnd: Story = {
  args: {
    align: 'end',
    content: "Aligned to end",
    children: <Button>End aligned</Button>,
  },
}

export const StatusIcons: Story = {
  render: () => (
    <div className="flex gap-4">
      <Tooltip content="Success status">
        <Button variant="ghost" size="icon">
          <CheckCircle className="h-4 w-4 text-green-500" />
        </Button>
      </Tooltip>
      <Tooltip content="Warning status">
        <Button variant="ghost" size="icon">
          <AlertCircle className="h-4 w-4 text-yellow-500" />
        </Button>
      </Tooltip>
      <Tooltip content="Information">
        <Button variant="ghost" size="icon">
          <Info className="h-4 w-4 text-blue-500" />
        </Button>
      </Tooltip>
      <Tooltip content="Help">
        <Button variant="ghost" size="icon">
          <HelpCircle className="h-4 w-4 text-gray-500" />
        </Button>
      </Tooltip>
    </div>
  ),
}

export const FormField: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <label htmlFor="email" className="text-sm font-medium">
          Email
        </label>
        <Tooltip content="We'll never share your email with anyone else">
          <Button variant="ghost" size="icon" className="h-4 w-4">
            <Info className="h-3 w-3" />
          </Button>
        </Tooltip>
      </div>
      <input
        id="email"
        type="email"
        placeholder="Enter your email"
        className="w-full px-3 py-2 border border-gray-300 rounded-md"
      />
    </div>
  ),
}

export const AllPositions: Story = {
  render: () => (
    <div className="grid grid-cols-3 gap-4 p-8">
      <div className="flex justify-center">
        <Tooltip side="top" content="Top tooltip">
          <Button>Top</Button>
        </Tooltip>
      </div>
      <div className="flex justify-center">
        <Tooltip side="bottom" content="Bottom tooltip">
          <Button>Bottom</Button>
        </Tooltip>
      </div>
      <div className="flex justify-center">
        <Tooltip side="left" content="Left tooltip">
          <Button>Left</Button>
        </Tooltip>
      </div>
      <div className="flex justify-center">
        <Tooltip side="right" content="Right tooltip">
          <Button>Right</Button>
        </Tooltip>
      </div>
      <div className="flex justify-center">
        <Tooltip side="top" align="start" content="Top start">
          <Button>Top Start</Button>
        </Tooltip>
      </div>
      <div className="flex justify-center">
        <Tooltip side="top" align="end" content="Top end">
          <Button>Top End</Button>
        </Tooltip>
      </div>
    </div>
  ),
}

export const AllVariants: Story = {
  render: () => (
    <div className="flex gap-4">
      <Tooltip variant="default" content="Default tooltip">
        <Button>Default</Button>
      </Tooltip>
      <Tooltip variant="success" content="Success tooltip">
        <Button variant="outline">Success</Button>
      </Tooltip>
      <Tooltip variant="warning" content="Warning tooltip">
        <Button variant="outline">Warning</Button>
      </Tooltip>
      <Tooltip variant="error" content="Error tooltip">
        <Button variant="outline">Error</Button>
      </Tooltip>
      <Tooltip variant="info" content="Info tooltip">
        <Button variant="outline">Info</Button>
      </Tooltip>
    </div>
  ),
}
