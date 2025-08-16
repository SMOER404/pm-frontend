import type { Meta, StoryObj } from '@storybook/react'
import { Section } from '../components/ui/section'
import { Text } from '../components/ui/text'
import { Heading } from '../components/ui/heading'

const meta: Meta<typeof Section> = {
  title: 'Layout/Section',
  component: Section,
  parameters: {
    layout: 'fullscreen',
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
    fullWidth: {
      control: { type: 'boolean' },
    },
    container: {
      control: { type: 'boolean' },
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: (
      <div className="text-center">
        <Heading level={2}>Default Section</Heading>
        <Text>This is a default section with standard padding and background.</Text>
      </div>
    ),
  },
}

export const WithContainer: Story = {
  args: {
    container: true,
    children: (
      <div className="text-center">
        <Heading level={2}>Section with Container</Heading>
        <Text>This section uses a Container component internally for content width control.</Text>
      </div>
    ),
  },
}

export const WithCustomContainer: Story = {
  args: {
    container: true,
    containerProps: { maxWidth: 'lg' },
    children: (
      <div className="text-center">
        <Heading level={2}>Section with Custom Container</Heading>
        <Text>This section uses a Container with maxWidth: 'lg'.</Text>
      </div>
    ),
  },
}

export const PrimaryBackground: Story = {
  args: {
    backgroundColor: 'primary',
    padding: { xs: 4, md: 8 },
    children: (
      <div className="text-center">
        <Heading level={2} className="text-primary-foreground">Primary Background Section</Heading>
        <Text className="text-primary-foreground">This section has a primary background color.</Text>
      </div>
    ),
  },
}

export const SecondaryBackground: Story = {
  args: {
    backgroundColor: 'secondary',
    padding: { xs: 4, md: 8 },
    children: (
      <div className="text-center">
        <Heading level={2} className="text-secondary-foreground">Secondary Background Section</Heading>
        <Text className="text-secondary-foreground">This section has a secondary background color.</Text>
      </div>
    ),
  },
}

export const MutedBackground: Story = {
  args: {
    backgroundColor: 'muted',
    padding: { xs: 4, md: 8 },
    children: (
      <div className="text-center">
        <Heading level={2}>Muted Background Section</Heading>
        <Text>This section has a muted background color.</Text>
      </div>
    ),
  },
}

export const FullWidth: Story = {
  args: {
    fullWidth: true,
    backgroundColor: 'accent',
    padding: { xs: 4, md: 8 },
    children: (
      <div className="text-center">
        <Heading level={2} className="text-accent-foreground">Full Width Section</Heading>
        <Text className="text-accent-foreground">This section spans the full width of the viewport.</Text>
      </div>
    ),
  },
}

export const ResponsivePadding: Story = {
  args: {
    padding: { xs: 2, sm: 4, md: 6, lg: 8, xl: 12 },
    backgroundColor: 'card',
    border: true,
    children: (
      <div className="text-center">
        <Heading level={2}>Responsive Padding Section</Heading>
        <Text>This section has responsive padding that adapts to screen size.</Text>
        <Text className="text-sm text-muted-foreground mt-2">
          xs: 2, sm: 4, md: 6, lg: 8, xl: 12
        </Text>
      </div>
    ),
  },
}

export const WithMargin: Story = {
  args: {
    margin: { xs: 2, sm: 4, md: 6 },
    padding: { xs: 4, md: 8 },
    backgroundColor: 'muted',
    children: (
      <div className="text-center">
        <Heading level={2}>Section with Margin</Heading>
        <Text>This section has responsive margin applied.</Text>
        <Text className="text-sm text-muted-foreground mt-2">
          margin: xs: 2, sm: 4, md: 6
        </Text>
      </div>
    ),
  },
}

export const MultipleSections: Story = {
  render: () => (
    <div>
      <Section backgroundColor="primary" padding={{ xs: 4, md: 8 }}>
        <div className="text-center">
          <Heading level={2} className="text-primary-foreground">First Section</Heading>
          <Text className="text-primary-foreground">Primary background section</Text>
        </div>
      </Section>
      
      <Section backgroundColor="muted" padding={{ xs: 4, md: 8 }}>
        <div className="text-center">
          <Heading level={2}>Second Section</Heading>
          <Text>Muted background section</Text>
        </div>
      </Section>
      
      <Section backgroundColor="secondary" padding={{ xs: 4, md: 8 }}>
        <div className="text-center">
          <Heading level={2} className="text-secondary-foreground">Third Section</Heading>
          <Text className="text-secondary-foreground">Secondary background section</Text>
        </div>
      </Section>
    </div>
  ),
}

export const AllBackgroundColors: Story = {
  render: () => (
    <div>
      {['default', 'primary', 'secondary', 'muted', 'accent', 'card'].map((color) => (
        <Section
          key={color}
          backgroundColor={color as any}
          padding={{ xs: 4, md: 6 }}
          margin={{ xs: 2, md: 4 }}
        >
          <div className="text-center">
            <Heading 
              level={3} 
              className={color === 'primary' || color === 'secondary' ? `text-${color}-foreground` : ''}
            >
              {color.charAt(0).toUpperCase() + color.slice(1)} Background
            </Heading>
            <Text className={color === 'primary' || color === 'secondary' ? `text-${color}-foreground` : ''}>
              This section uses {color} background color
            </Text>
          </div>
        </Section>
      ))}
    </div>
  ),
}
