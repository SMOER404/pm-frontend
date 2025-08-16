import type { Meta, StoryObj } from '@storybook/react'
import { Container } from '../components/ui/container'
import { Box } from '../components/ui/box'
import { Text } from '../components/ui/text'

const meta: Meta<typeof Container> = {
  title: 'Layout/Container',
  component: Container,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    maxWidth: {
      control: { type: 'select' },
      options: ['xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl', '5xl', '6xl', '7xl', 'full'],
    },
    centered: {
      control: { type: 'boolean' },
    },
    fluid: {
      control: { type: 'boolean' },
    },
    padding: {
      control: { type: 'object' },
    },
    margin: {
      control: { type: 'object' },
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: (
      <Box padding={4} backgroundColor="muted" className="text-center">
        <Text>Default container with max-width 7xl and centered</Text>
      </Box>
    ),
  },
}

export const Small: Story = {
  args: {
    maxWidth: 'sm',
    children: (
      <Box padding={4} backgroundColor="primary" className="text-center">
        <Text className="text-primary-foreground">Small container</Text>
      </Box>
    ),
  },
}

export const Large: Story = {
  args: {
    maxWidth: 'lg',
    children: (
      <Box padding={6} backgroundColor="secondary" className="text-center">
        <Text className="text-secondary-foreground">Large container</Text>
      </Box>
    ),
  },
}

export const Fluid: Story = {
  args: {
    fluid: true,
    children: (
      <Box padding={4} backgroundColor="accent" className="text-center">
        <Text className="text-accent-foreground">Fluid container (no max-width)</Text>
      </Box>
    ),
  },
}

export const ResponsivePadding: Story = {
  args: {
    maxWidth: 'xl',
    padding: { xs: 2, sm: 4, md: 6, lg: 8 },
    children: (
      <Box padding={4} backgroundColor="muted" className="text-center">
        <Text>Container with responsive padding</Text>
        <Text className="text-sm text-muted-foreground mt-2">
          xs: 2, sm: 4, md: 6, lg: 8
        </Text>
      </Box>
    ),
  },
}

export const WithMargin: Story = {
  args: {
    maxWidth: 'md',
    margin: { xs: 2, sm: 4, md: 6 },
    children: (
      <Box padding={4} backgroundColor="card" border className="text-center">
        <Text>Container with responsive margin</Text>
        <Text className="text-sm text-muted-foreground mt-2">
          margin: xs: 2, sm: 4, md: 6
        </Text>
      </Box>
    ),
  },
}

export const NotCentered: Story = {
  args: {
    maxWidth: 'lg',
    centered: false,
    children: (
      <Box padding={4} backgroundColor="muted" className="text-center">
        <Text>Container not centered (aligned to left)</Text>
      </Box>
    ),
  },
}

export const AllSizes: Story = {
  render: () => (
    <div className="space-y-4">
      {['xs', 'sm', 'md', 'lg', 'xl', '2xl'].map((size) => (
        <Container key={size} maxWidth={size as any}>
          <Box padding={3} backgroundColor="muted" className="text-center">
            <Text className="font-medium">{size.toUpperCase()} Container</Text>
            <Text className="text-sm text-muted-foreground">
              max-width: {size}
            </Text>
          </Box>
        </Container>
      ))}
    </div>
  ),
}
