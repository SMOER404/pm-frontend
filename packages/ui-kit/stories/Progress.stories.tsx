import type { Meta, StoryObj } from '@storybook/react'
import { Progress, CircularProgress } from '../components/ui/progress'

const meta: Meta<typeof Progress> = {
  title: 'Feedback/Progress',
  component: Progress,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['linear', 'circular'],
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'default', 'lg'],
    },
    color: {
      control: { type: 'select' },
      options: ['default', 'success', 'warning', 'error'],
    },
    showValue: {
      control: { type: 'boolean' },
    },
    animated: {
      control: { type: 'boolean' },
    },
    indeterminate: {
      control: { type: 'boolean' },
    },
    value: {
      control: { type: 'range', min: 0, max: 100, step: 1 },
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    value: 50,
    className: "w-[60%]",
  },
}

export const Linear: Story = {
  args: {
    variant: "linear",
    value: 75,
    className: "w-[60%]",
  },
}

export const Circular: Story = {
  args: {
    variant: "circular",
    value: 75,
    showValue: true,
  },
}

export const Small: Story = {
  args: {
    size: "sm",
    value: 60,
    className: "w-[60%]",
  },
}

export const Large: Story = {
  args: {
    size: "lg",
    value: 60,
    className: "w-[60%]",
  },
}

export const WithValue: Story = {
  args: {
    value: 45,
    showValue: true,
    className: "w-[60%]",
  },
}

export const Success: Story = {
  args: {
    color: "success",
    value: 85,
    showValue: true,
    className: "w-[60%]",
  },
}

export const Warning: Story = {
  args: {
    color: "warning",
    value: 65,
    showValue: true,
    className: "w-[60%]",
  },
}

export const Error: Story = {
  args: {
    color: "error",
    value: 25,
    showValue: true,
    className: "w-[60%]",
  },
}

export const Animated: Story = {
  args: {
    value: 70,
    animated: true,
    className: "w-[60%]",
  },
}

export const Indeterminate: Story = {
  args: {
    indeterminate: true,
    className: "w-[60%]",
  },
}

export const CircularSmall: Story = {
  render: (args) => (
    <CircularProgress
      size="sm"
      value={75}
      showValue={true}
      {...args}
    />
  ),
}

export const CircularDefault: Story = {
  render: (args) => (
    <CircularProgress
      size="default"
      value={75}
      showValue={true}
      {...args}
    />
  ),
}

export const CircularLarge: Story = {
  render: (args) => (
    <CircularProgress
      size="lg"
      value={75}
      showValue={true}
      {...args}
    />
  ),
}

export const CircularSuccess: Story = {
  render: (args) => (
    <CircularProgress
      color="success"
      value={90}
      showValue={true}
      {...args}
    />
  ),
}

export const CircularWarning: Story = {
  render: (args) => (
    <CircularProgress
      color="warning"
      value={60}
      showValue={true}
      {...args}
    />
  ),
}

export const CircularError: Story = {
  render: (args) => (
    <CircularProgress
      color="error"
      value={30}
      showValue={true}
      {...args}
    />
  ),
}

export const CircularAnimated: Story = {
  render: (args) => (
    <CircularProgress
      value={80}
      animated={true}
      showValue={true}
      {...args}
    />
  ),
}

export const CircularIndeterminate: Story = {
  render: (args) => (
    <CircularProgress
      indeterminate={true}
      {...args}
    />
  ),
}

export const CustomColors: Story = {
  render: (args) => (
    <CircularProgress
      value={75}
      showValue={true}
      trackColor="#f3f4f6"
      progressColor="#8b5cf6"
      {...args}
    />
  ),
}

export const CustomStrokeWidth: Story = {
  render: (args) => (
    <CircularProgress
      value={75}
      showValue={true}
      strokeWidth={8}
      {...args}
    />
  ),
}

export const CustomStrokeLinecap: Story = {
  render: (args) => (
    <CircularProgress
      value={75}
      showValue={true}
      strokeLinecap="square"
      {...args}
    />
  ),
}

// Complex examples
export const UploadProgress: Story = {
  render: (args) => (
    <div className="space-y-4 w-[400px]">
      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span>Uploading file.pdf</span>
          <span>75%</span>
        </div>
        <Progress value={75} color="success" {...args} />
      </div>
    </div>
  ),
}

export const DownloadProgress: Story = {
  render: (args) => (
    <div className="space-y-4 w-[400px]">
      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span>Downloading update</span>
          <span>45%</span>
        </div>
        <Progress value={45} color="warning" {...args} />
      </div>
    </div>
  ),
}

export const ProcessingProgress: Story = {
  render: (args) => (
    <div className="space-y-4 w-[400px]">
      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span>Processing data</span>
          <span>Processing...</span>
        </div>
        <Progress indeterminate={true} color="default" {...args} />
      </div>
    </div>
  ),
}

export const MultipleProgress: Story = {
  render: (args) => (
    <div className="space-y-6 w-[400px]">
      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span>CPU Usage</span>
          <span>85%</span>
        </div>
        <Progress value={85} color="success" {...args} />
      </div>
      
      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span>Memory Usage</span>
          <span>65%</span>
        </div>
        <Progress value={65} color="warning" {...args} />
      </div>
      
      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span>Disk Usage</span>
          <span>95%</span>
        </div>
        <Progress value={95} color="error" {...args} />
      </div>
    </div>
  ),
}

export const CircularProgressGroup: Story = {
  render: (args) => (
    <div className="flex space-x-8">
      <div className="text-center space-y-2">
        <CircularProgress value={75} showValue={true} color="success" {...args} />
        <p className="text-sm text-muted-foreground">Success</p>
      </div>
      
      <div className="text-center space-y-2">
        <CircularProgress value={60} showValue={true} color="warning" {...args} />
        <p className="text-sm text-muted-foreground">Warning</p>
      </div>
      
      <div className="text-center space-y-2">
        <CircularProgress value={30} showValue={true} color="error" {...args} />
        <p className="text-sm text-muted-foreground">Error</p>
      </div>
    </div>
  ),
}

export const ProgressWithLabels: Story = {
  render: (args) => (
    <div className="space-y-6 w-[400px]">
      <div className="space-y-2">
        <label className="text-sm font-medium">Project Completion</label>
        <Progress value={75} showValue={true} color="success" {...args} />
      </div>
      
      <div className="space-y-2">
        <label className="text-sm font-medium">Task Progress</label>
        <Progress value={45} showValue={true} color="warning" {...args} />
      </div>
      
      <div className="space-y-2">
        <label className="text-sm font-medium">System Load</label>
        <Progress value={90} showValue={true} color="error" {...args} />
      </div>
    </div>
  ),
}

