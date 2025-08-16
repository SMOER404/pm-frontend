import type { Meta, StoryObj } from '@storybook/react'
import { Grid } from '../components/ui/grid'
import { Box } from '../components/ui/box'
import { Text } from '../components/ui/text'
import { Card, CardHeader, CardTitle, CardContent } from '../components/ui/card'

const meta: Meta<typeof Grid> = {
  title: 'Layout/Grid',
  component: Grid,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    columns: {
      control: { type: 'object' },
    },
    gap: {
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
    autoFit: {
      control: { type: 'boolean' },
    },
    autoFill: {
      control: { type: 'boolean' },
    },
    minColumnWidth: {
      control: { type: 'text' },
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

const GridItem = ({ children, height = 'h-20' }: { children: React.ReactNode; height?: string }) => (
  <Box padding={4} backgroundColor="muted" className={`text-center ${height}`}>
    <Text>{children}</Text>
  </Box>
)

export const Default: Story = {
  args: {
    children: (
      <>
        <GridItem>Item 1</GridItem>
        <GridItem>Item 2</GridItem>
        <GridItem>Item 3</GridItem>
        <GridItem>Item 4</GridItem>
        <GridItem>Item 5</GridItem>
        <GridItem>Item 6</GridItem>
      </>
    ),
  },
}

export const ResponsiveColumns: Story = {
  args: {
    columns: { xs: 1, sm: 2, md: 3, lg: 4 },
    gap: 4,
    children: (
      <>
        <GridItem>1 Column (xs)</GridItem>
        <GridItem>2 Columns (sm)</GridItem>
        <GridItem>3 Columns (md)</GridItem>
        <GridItem>4 Columns (lg)</GridItem>
        <GridItem>Item 5</GridItem>
        <GridItem>Item 6</GridItem>
        <GridItem>Item 7</GridItem>
        <GridItem>Item 8</GridItem>
      </>
    ),
  },
}

export const AutoFit: Story = {
  args: {
    autoFit: true,
    minColumnWidth: '250px',
    gap: 4,
    children: (
      <>
        <GridItem>Auto-fit item 1</GridItem>
        <GridItem>Auto-fit item 2</GridItem>
        <GridItem>Auto-fit item 3</GridItem>
        <GridItem>Auto-fit item 4</GridItem>
        <GridItem>Auto-fit item 5</GridItem>
        <GridItem>Auto-fit item 6</GridItem>
      </>
    ),
  },
}

export const AutoFill: Story = {
  args: {
    autoFill: true,
    minColumnWidth: '200px',
    gap: 4,
    children: (
      <>
        <GridItem>Auto-fill item 1</GridItem>
        <GridItem>Auto-fill item 2</GridItem>
        <GridItem>Auto-fill item 3</GridItem>
        <GridItem>Auto-fill item 4</GridItem>
      </>
    ),
  },
}

export const WithCards: Story = {
  args: {
    columns: { xs: 1, sm: 2, md: 3 },
    gap: 6,
    children: (
      <>
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <Card key={i}>
            <CardHeader>
              <CardTitle>Card {i}</CardTitle>
            </CardHeader>
            <CardContent>
              <Text>This is card content {i}</Text>
            </CardContent>
          </Card>
        ))}
      </>
    ),
  },
}

export const AlignedCenter: Story = {
  args: {
    columns: 3,
    gap: 4,
    alignItems: 'center',
    justifyContent: 'center',
    children: (
      <>
        <GridItem height="h-16">Short</GridItem>
        <GridItem height="h-32">Tall</GridItem>
        <GridItem height="h-24">Medium</GridItem>
      </>
    ),
  },
}

export const JustifyBetween: Story = {
  args: {
    columns: 3,
    gap: 4,
    justifyContent: 'between',
    children: (
      <>
        <GridItem>Left</GridItem>
        <GridItem>Center</GridItem>
        <GridItem>Right</GridItem>
      </>
    ),
  },
}

export const DifferentHeights: Story = {
  args: {
    columns: { xs: 1, sm: 2, md: 3 },
    gap: 4,
    alignItems: 'stretch',
    children: (
      <>
        <GridItem height="h-16">Short item</GridItem>
        <GridItem height="h-32">Tall item with more content</GridItem>
        <GridItem height="h-24">Medium item</GridItem>
        <GridItem height="h-40">Very tall item</GridItem>
        <GridItem height="h-20">Another short item</GridItem>
        <GridItem height="h-28">Medium tall item</GridItem>
      </>
    ),
  },
}

export const ResponsiveGap: Story = {
  args: {
    columns: { xs: 1, sm: 2, md: 3 },
    gap: { xs: 2, sm: 4, md: 6, lg: 8 },
    children: (
      <>
        <GridItem>Responsive gap xs:2</GridItem>
        <GridItem>Responsive gap sm:4</GridItem>
        <GridItem>Responsive gap md:6</GridItem>
        <GridItem>Responsive gap lg:8</GridItem>
        <GridItem>Item 5</GridItem>
        <GridItem>Item 6</GridItem>
      </>
    ),
  },
}
