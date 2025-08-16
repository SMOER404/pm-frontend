import type { Meta, StoryObj } from '@storybook/react'
import { Box } from '../components/ui/box'
import { Text } from '../components/ui/text'

const meta: Meta<typeof Box> = {
  title: 'Layout/Box',
  component: Box,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    padding: {
      control: { type: 'object' },
    },
    margin: {
      control: { type: 'object' },
    },
    backgroundColor: {
      control: { type: 'select' },
      options: ['default', 'primary', 'secondary', 'muted', 'accent', 'card', 'transparent'],
    },
    border: {
      control: { type: 'boolean' },
    },
    borderRadius: {
      control: { type: 'select' },
      options: ['none', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', 'full'],
    },
    bevel: {
      control: { type: 'boolean' },
    },
    bevelVariant: {
      control: { type: 'select' },
      options: ['default', 'secondary', 'outlined', 'ghost'],
    },
    bevelSize: {
      control: { type: 'select' },
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: <Text>Default box with background and border radius</Text>,
  },
}

export const WithPadding: Story = {
  args: {
    padding: 6,
    children: <Text>Box with padding: 6</Text>,
  },
}

export const ResponsivePadding: Story = {
  args: {
    padding: { xs: 2, sm: 4, md: 6, lg: 8 },
    children: (
      <div>
        <Text>Box with responsive padding</Text>
        <Text className="text-sm text-muted-foreground mt-2">
          xs: 2, sm: 4, md: 6, lg: 8
        </Text>
      </div>
    ),
  },
}

export const PrimaryBackground: Story = {
  args: {
    backgroundColor: 'primary',
    padding: 4,
    children: <Text className="text-primary-foreground">Primary background box</Text>,
  },
}

export const SecondaryBackground: Story = {
  args: {
    backgroundColor: 'secondary',
    padding: 4,
    children: <Text className="text-secondary-foreground">Secondary background box</Text>,
  },
}

export const WithBorder: Story = {
  args: {
    border: true,
    padding: 4,
    children: <Text>Box with border</Text>,
  },
}

export const RoundedCorners: Story = {
  args: {
    borderRadius: 'xl',
    padding: 4,
    backgroundColor: 'muted',
    children: <Text>Box with rounded corners (xl)</Text>,
  },
}

export const FullRounded: Story = {
  args: {
    borderRadius: 'full',
    padding: 4,
    backgroundColor: 'accent',
    children: <Text className="text-accent-foreground">Fully rounded box</Text>,
  },
}

export const WithBevel: Story = {
  args: {
    bevel: true,
    bevelVariant: 'default',
    bevelSize: 'md',
    padding: 4,
    children: <Text>Box with bevel effect</Text>,
  },
}

export const BevelSecondary: Story = {
  args: {
    bevel: true,
    bevelVariant: 'secondary',
    bevelSize: 'lg',
    padding: 4,
    children: <Text>Box with secondary bevel</Text>,
  },
}

export const BevelOutlined: Story = {
  args: {
    bevel: true,
    bevelVariant: 'outlined',
    bevelSize: 'md',
    padding: 4,
    children: <Text>Box with outlined bevel</Text>,
  },
}

export const BevelGhost: Story = {
  args: {
    bevel: true,
    bevelVariant: 'ghost',
    bevelSize: 'sm',
    padding: 4,
    children: <Text>Box with ghost bevel</Text>,
  },
}

export const WithMargin: Story = {
  args: {
    margin: { xs: 2, sm: 4, md: 6 },
    padding: 4,
    backgroundColor: 'card',
    border: true,
    children: (
      <div>
        <Text>Box with responsive margin</Text>
        <Text className="text-sm text-muted-foreground mt-2">
          margin: xs: 2, sm: 4, md: 6
        </Text>
      </div>
    ),
  },
}

export const AllBackgroundColors: Story = {
  render: () => (
    <div className="space-y-4">
      {['default', 'primary', 'secondary', 'muted', 'accent', 'card'].map((color) => (
        <Box
          key={color}
          backgroundColor={color as any}
          padding={4}
          border={color === 'card'}
          className="text-center"
        >
          <Text className={color === 'primary' || color === 'secondary' ? `text-${color}-foreground` : ''}>
            {color.charAt(0).toUpperCase() + color.slice(1)} Background
          </Text>
        </Box>
      ))}
    </div>
  ),
}

export const AllBorderRadius: Story = {
  render: () => (
    <div className="space-y-4">
      {['none', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', 'full'].map((radius) => (
        <Box
          key={radius}
          borderRadius={radius as any}
          padding={4}
          backgroundColor="muted"
          className="text-center"
        >
          <Text>Border Radius: {radius}</Text>
        </Box>
      ))}
    </div>
  ),
}

export const AllBevelSizes: Story = {
  render: () => (
    <div className="space-y-4">
      {['xs', 'sm', 'md', 'lg', 'xl'].map((size) => (
        <Box
          key={size}
          bevel
          bevelSize={size as any}
          padding={4}
          className="text-center"
        >
          <Text>Bevel Size: {size}</Text>
        </Box>
      ))}
    </div>
  ),
}
