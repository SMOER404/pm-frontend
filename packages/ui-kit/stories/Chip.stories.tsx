import type { Meta, StoryObj } from '@storybook/react'
import { Chip } from '../components/ui/chip'
import { Tag, Star, CheckCircle, AlertCircle, Info } from 'lucide-react'

const meta: Meta<typeof Chip> = {
  title: 'Data Display/Chip',
  component: Chip,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'secondary', 'outline', 'ghost', 'destructive', 'success', 'warning', 'info'],
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'default', 'lg', 'xl'],
    },
    clickable: {
      control: { type: 'boolean' },
    },
    removable: {
      control: { type: 'boolean' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: "Default Chip",
  },
}

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: "Secondary Chip",
  },
}

export const Outline: Story = {
  args: {
    variant: 'outline',
    children: "Outline Chip",
  },
}

export const Ghost: Story = {
  args: {
    variant: 'ghost',
    children: "Ghost Chip",
  },
}

export const Destructive: Story = {
  args: {
    variant: 'destructive',
    children: "Destructive Chip",
  },
}

export const Success: Story = {
  args: {
    variant: 'success',
    children: "Success Chip",
  },
}

export const Warning: Story = {
  args: {
    variant: 'warning',
    children: "Warning Chip",
  },
}

export const InfoChip: Story = {
  args: {
    variant: 'info',
    children: "Info Chip",
  },
}

export const Small: Story = {
  args: {
    size: 'sm',
    children: "Small Chip",
  },
}

export const Large: Story = {
  args: {
    size: 'lg',
    children: "Large Chip",
  },
}

export const ExtraLarge: Story = {
  args: {
    size: 'xl',
    children: "Extra Large Chip",
  },
}

export const WithIcon: Story = {
  args: {
    icon: <Tag className="h-3 w-3" />,
    children: "With Icon",
  },
}

export const Clickable: Story = {
  args: {
    clickable: true,
    children: "Clickable Chip",
    onClick: () => alert('Chip clicked!'),
  },
}

export const Removable: Story = {
  args: {
    removable: true,
    children: "Removable Chip",
    onRemove: () => alert('Chip removed!'),
  },
}

export const ClickableAndRemovable: Story = {
  args: {
    clickable: true,
    removable: true,
    children: "Clickable & Removable",
    onClick: () => alert('Chip clicked!'),
    onRemove: () => alert('Chip removed!'),
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
    children: "Disabled Chip",
  },
}

export const DisabledClickable: Story = {
  args: {
    disabled: true,
    clickable: true,
    children: "Disabled Clickable",
    onClick: () => alert('This should not trigger'),
  },
}

export const DisabledRemovable: Story = {
  args: {
    disabled: true,
    removable: true,
    children: "Disabled Removable",
    onRemove: () => alert('This should not trigger'),
  },
}

export const StatusChips: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Chip variant="success" icon={<CheckCircle className="h-3 w-3" />}>
        Completed
      </Chip>
      <Chip variant="warning" icon={<AlertCircle className="h-3 w-3" />}>
        Pending
      </Chip>
      <Chip variant="destructive" icon={<AlertCircle className="h-3 w-3" />}>
        Failed
      </Chip>
      <Chip variant="info" icon={<Info className="h-3 w-3" />}>
        In Progress
      </Chip>
    </div>
  ),
}

export const TagChips: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Chip variant="outline" icon={<Tag className="h-3 w-3" />}>
        React
      </Chip>
      <Chip variant="outline" icon={<Tag className="h-3 w-3" />}>
        TypeScript
      </Chip>
      <Chip variant="outline" icon={<Tag className="h-3 w-3" />}>
        Tailwind CSS
      </Chip>
      <Chip variant="outline" icon={<Tag className="h-3 w-3" />}>
        Next.js
      </Chip>
    </div>
  ),
}

export const RemovableTags: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Chip 
        variant="outline" 
        removable 
        onRemove={() => alert('React removed')}
      >
        React
      </Chip>
      <Chip 
        variant="outline" 
        removable 
        onRemove={() => alert('TypeScript removed')}
      >
        TypeScript
      </Chip>
      <Chip 
        variant="outline" 
        removable 
        onRemove={() => alert('Tailwind CSS removed')}
      >
        Tailwind CSS
      </Chip>
      <Chip 
        variant="outline" 
        removable 
        onRemove={() => alert('Next.js removed')}
      >
        Next.js
      </Chip>
    </div>
  ),
}

export const RatingChips: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Chip variant="warning" icon={<Star className="h-3 w-3" />}>
        4.5 Stars
      </Chip>
      <Chip variant="success" icon={<Star className="h-3 w-3" />}>
        Highly Rated
      </Chip>
      <Chip variant="info" icon={<Star className="h-3 w-3" />}>
        New
      </Chip>
    </div>
  ),
}

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Chip variant="default">Default</Chip>
      <Chip variant="secondary">Secondary</Chip>
      <Chip variant="outline">Outline</Chip>
      <Chip variant="ghost">Ghost</Chip>
      <Chip variant="destructive">Destructive</Chip>
      <Chip variant="success">Success</Chip>
      <Chip variant="warning">Warning</Chip>
      <Chip variant="info">Info</Chip>
    </div>
  ),
}

export const AllSizes: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-2">
      <Chip size="sm">Small</Chip>
      <Chip size="default">Default</Chip>
      <Chip size="lg">Large</Chip>
      <Chip size="xl">Extra Large</Chip>
    </div>
  ),
}

export const InteractiveExample: Story = {
  render: () => {
    const [chips, setChips] = React.useState([
      { id: 1, label: 'React', removable: true },
      { id: 2, label: 'TypeScript', removable: true },
      { id: 3, label: 'Tailwind CSS', removable: true },
    ])

    const handleRemove = (id: number) => {
      setChips(chips.filter(chip => chip.id !== id))
    }

    const handleAdd = () => {
      const newChip = {
        id: Date.now(),
        label: `Chip ${chips.length + 1}`,
        removable: true,
      }
      setChips([...chips, newChip])
    }

    return (
      <div className="space-y-4">
        <div className="flex flex-wrap gap-2">
          {chips.map(chip => (
            <Chip
              key={chip.id}
              variant="outline"
              removable
              onRemove={() => handleRemove(chip.id)}
            >
              {chip.label}
            </Chip>
          ))}
        </div>
        <button
          onClick={handleAdd}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Add Chip
        </button>
      </div>
    )
  },
}
