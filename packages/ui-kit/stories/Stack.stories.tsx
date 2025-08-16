import type { Meta, StoryObj } from '@storybook/react'
import { Stack } from '../components/ui/stack'
import { Box } from '../components/ui/box'
import { Text } from '../components/ui/text'
import { Button } from '../components/ui/button'

const meta: Meta<typeof Stack> = {
  title: 'Layout/Stack',
  component: Stack,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    direction: {
      control: { type: 'select' },
      options: ['vertical', 'horizontal', 'responsive'],
    },
    spacing: {
      control: { type: 'object' },
    },
    alignItems: {
      control: { type: 'select' },
      options: ['start', 'center', 'end', 'stretch', 'baseline'],
    },
    justifyContent: {
      control: { type: 'select' },
      options: ['start', 'center', 'end', 'between', 'around', 'evenly'],
    },
    wrap: {
      control: { type: 'boolean' },
    },
    reverse: {
      control: { type: 'boolean' },
    },
    divider: {
      control: { type: 'boolean' },
    },
    dividerStyle: {
      control: { type: 'select' },
      options: ['solid', 'dashed', 'dotted'],
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

const StackItem = ({ children, height = 'h-16' }: { children: React.ReactNode; height?: string }) => (
  <Box padding={4} backgroundColor="muted" className={`text-center ${height}`}>
    <Text>{children}</Text>
  </Box>
)

export const Default: Story = {
  args: {
    children: (
      <>
        <StackItem>Item 1</StackItem>
        <StackItem>Item 2</StackItem>
        <StackItem>Item 3</StackItem>
      </>
    ),
  },
}

export const Horizontal: Story = {
  args: {
    direction: 'horizontal',
    spacing: 4,
    children: (
      <>
        <StackItem>Item 1</StackItem>
        <StackItem>Item 2</StackItem>
        <StackItem>Item 3</StackItem>
      </>
    ),
  },
}

export const Responsive: Story = {
  args: {
    direction: 'responsive',
    spacing: { xs: 2, lg: 4 },
    children: (
      <>
        <StackItem>Vertical on mobile</StackItem>
        <StackItem>Horizontal on desktop</StackItem>
        <StackItem>Responsive spacing</StackItem>
      </>
    ),
  },
}

export const WithSpacing: Story = {
  args: {
    spacing: 6,
    children: (
      <>
        <StackItem>Item with spacing: 6</StackItem>
        <StackItem>Item with spacing: 6</StackItem>
        <StackItem>Item with spacing: 6</StackItem>
      </>
    ),
  },
}

export const ResponsiveSpacing: Story = {
  args: {
    spacing: { xs: 2, sm: 4, md: 6, lg: 8 },
    children: (
      <>
        <StackItem>xs: 2, sm: 4</StackItem>
        <StackItem>md: 6, lg: 8</StackItem>
        <StackItem>Responsive spacing</StackItem>
      </>
    ),
  },
}

export const WithDivider: Story = {
  args: {
    divider: true,
    spacing: 4,
    children: (
      <>
        <StackItem>Item 1</StackItem>
        <StackItem>Item 2</StackItem>
        <StackItem>Item 3</StackItem>
      </>
    ),
  },
}

export const DashedDivider: Story = {
  args: {
    divider: true,
    dividerStyle: 'dashed',
    spacing: 4,
    children: (
      <>
        <StackItem>Item 1</StackItem>
        <StackItem>Item 2</StackItem>
        <StackItem>Item 3</StackItem>
      </>
    ),
  },
}

export const DottedDivider: Story = {
  args: {
    divider: true,
    dividerStyle: 'dotted',
    spacing: 4,
    children: (
      <>
        <StackItem>Item 1</StackItem>
        <StackItem>Item 2</StackItem>
        <StackItem>Item 3</StackItem>
      </>
    ),
  },
}

export const HorizontalWithWrap: Story = {
  args: {
    direction: 'horizontal',
    spacing: 3,
    wrap: true,
    children: (
      <>
        <Button>Button 1</Button>
        <Button>Button 2</Button>
        <Button>Button 3</Button>
        <Button>Button 4</Button>
        <Button>Button 5</Button>
        <Button>Button 6</Button>
      </>
    ),
  },
}

export const AlignedCenter: Story = {
  args: {
    alignItems: 'center',
    justifyContent: 'center',
    spacing: 4,
    children: (
      <>
        <StackItem height="h-12">Short</StackItem>
        <StackItem height="h-24">Tall</StackItem>
        <StackItem height="h-16">Medium</StackItem>
      </>
    ),
  },
}

export const JustifyBetween: Story = {
  args: {
    direction: 'horizontal',
    justifyContent: 'between',
    spacing: 4,
    children: (
      <>
        <StackItem>Left</StackItem>
        <StackItem>Center</StackItem>
        <StackItem>Right</StackItem>
      </>
    ),
  },
}

export const JustifyAround: Story = {
  args: {
    direction: 'horizontal',
    justifyContent: 'around',
    spacing: 4,
    children: (
      <>
        <StackItem>Item 1</StackItem>
        <StackItem>Item 2</StackItem>
        <StackItem>Item 3</StackItem>
      </>
    ),
  },
}

export const JustifyEvenly: Story = {
  args: {
    direction: 'horizontal',
    justifyContent: 'evenly',
    spacing: 4,
    children: (
      <>
        <StackItem>Item 1</StackItem>
        <StackItem>Item 2</StackItem>
        <StackItem>Item 3</StackItem>
      </>
    ),
  },
}

export const Reversed: Story = {
  args: {
    reverse: true,
    spacing: 4,
    children: (
      <>
        <StackItem>First (appears last)</StackItem>
        <StackItem>Second (appears second)</StackItem>
        <StackItem>Third (appears first)</StackItem>
      </>
    ),
  },
}

export const DifferentHeights: Story = {
  args: {
    alignItems: 'stretch',
    spacing: 4,
    children: (
      <>
        <StackItem height="h-12">Short item</StackItem>
        <StackItem height="h-24">Tall item with more content</StackItem>
        <StackItem height="h-16">Medium item</StackItem>
      </>
    ),
  },
}

export const WithButtons: Story = {
  args: {
    direction: 'horizontal',
    spacing: 3,
    wrap: true,
    children: (
      <>
        <Button variant="default">Default</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="link">Link</Button>
      </>
    ),
  },
}

export const AllAlignments: Story = {
  render: () => (
    <div className="space-y-8">
      {['start', 'center', 'end', 'stretch', 'baseline'].map((alignment) => (
        <Box key={alignment} padding={4} backgroundColor="muted">
          <Text className="font-medium mb-2">Align Items: {alignment}</Text>
          <Stack
            direction="horizontal"
            alignItems={alignment as any}
            spacing={4}
            className="h-32 border border-border"
          >
            <StackItem height="h-8">Short</StackItem>
            <StackItem height="h-16">Medium</StackItem>
            <StackItem height="h-24">Tall</StackItem>
          </Stack>
        </Box>
      ))}
    </div>
  ),
}

export const AllJustifications: Story = {
  render: () => (
    <div className="space-y-8">
      {['start', 'center', 'end', 'between', 'around', 'evenly'].map((justify) => (
        <Box key={justify} padding={4} backgroundColor="muted">
          <Text className="font-medium mb-2">Justify Content: {justify}</Text>
          <Stack
            direction="horizontal"
            justifyContent={justify as any}
            spacing={4}
            className="border border-border"
          >
            <StackItem>Item 1</StackItem>
            <StackItem>Item 2</StackItem>
            <StackItem>Item 3</StackItem>
          </Stack>
        </Box>
      ))}
    </div>
  ),
}
