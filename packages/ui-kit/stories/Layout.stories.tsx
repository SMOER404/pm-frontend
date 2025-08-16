import type { Meta, StoryObj } from '@storybook/react'
import { Layout } from '../components/ui/layout'
import { Box } from '../components/ui/box'
import { Text } from '../components/ui/text'
import { Heading } from '../components/ui/heading'
import { Button } from '../components/ui/button'
import { Stack } from '../components/ui/stack'

const meta: Meta<typeof Layout> = {
  title: 'Layout/Layout',
  component: Layout,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    sidebarPosition: {
      control: { type: 'select' },
      options: ['left', 'right'],
    },
    stickyHeader: {
      control: { type: 'boolean' },
    },
    stickyFooter: {
      control: { type: 'boolean' },
    },
    gap: {
      control: { type: 'object' },
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

const HeaderContent = () => (
  <Box backgroundColor="primary" padding={4} className="text-center">
    <Heading level={1} className="text-primary-foreground">
      Application Header
    </Heading>
  </Box>
)

const FooterContent = () => (
  <Box backgroundColor="muted" padding={4} className="text-center">
    <Text>© 2024 Application Footer</Text>
  </Box>
)

const SidebarContent = () => (
  <Box padding={4} backgroundColor="muted" className="h-fit">
    <Stack spacing={3}>
      <Heading level={4}>Sidebar</Heading>
      <Text>This is sidebar content</Text>
      <Button>Sidebar Action</Button>
      <Text className="text-sm text-muted-foreground">
        The sidebar automatically adjusts on mobile devices.
      </Text>
    </Stack>
  </Box>
)

const MainContent = () => (
  <Box padding={6}>
    <Stack spacing={4}>
      <Heading level={3}>Main Content</Heading>
      <Text>
        This is the main content area. The layout automatically adjusts to accommodate 
        the sidebar on larger screens and stacks vertically on mobile devices.
      </Text>
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor 
        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
        nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </Text>
      <Button>Main Action</Button>
    </Stack>
  </Box>
)

export const Default: Story = {
  args: {
    children: <MainContent />,
  },
}

export const WithHeader: Story = {
  args: {
    header: <HeaderContent />,
    children: <MainContent />,
  },
}

export const WithFooter: Story = {
  args: {
    footer: <FooterContent />,
    children: <MainContent />,
  },
}

export const WithHeaderAndFooter: Story = {
  args: {
    header: <HeaderContent />,
    footer: <FooterContent />,
    children: <MainContent />,
  },
}

export const WithSidebar: Story = {
  args: {
    header: <HeaderContent />,
    sidebar: <SidebarContent />,
    footer: <FooterContent />,
    children: <MainContent />,
  },
}

export const SidebarRight: Story = {
  args: {
    header: <HeaderContent />,
    sidebar: <SidebarContent />,
    sidebarPosition: 'right',
    footer: <FooterContent />,
    children: <MainContent />,
  },
}

export const StickyHeader: Story = {
  args: {
    header: <HeaderContent />,
    sidebar: <SidebarContent />,
    footer: <FooterContent />,
    stickyHeader: true,
    children: (
      <Box padding={6}>
        <Stack spacing={4}>
          <Heading level={3}>Content with Sticky Header</Heading>
          <Text>This layout has a sticky header that stays at the top when scrolling.</Text>
          {Array.from({ length: 10 }, (_, i) => (
            <Box key={i} padding={4} backgroundColor="card" border>
              <Text>Content section {i + 1}</Text>
            </Box>
          ))}
        </Stack>
      </Box>
    ),
  },
}

export const StickyFooter: Story = {
  args: {
    header: <HeaderContent />,
    sidebar: <SidebarContent />,
    footer: <FooterContent />,
    stickyFooter: true,
    children: (
      <Box padding={6}>
        <Stack spacing={4}>
          <Heading level={3}>Content with Sticky Footer</Heading>
          <Text>This layout has a sticky footer that stays at the bottom.</Text>
          {Array.from({ length: 10 }, (_, i) => (
            <Box key={i} padding={4} backgroundColor="card" border>
              <Text>Content section {i + 1}</Text>
            </Box>
          ))}
        </Stack>
      </Box>
    ),
  },
}

export const BothSticky: Story = {
  args: {
    header: <HeaderContent />,
    sidebar: <SidebarContent />,
    footer: <FooterContent />,
    stickyHeader: true,
    stickyFooter: true,
    children: (
      <Box padding={6}>
        <Stack spacing={4}>
          <Heading level={3}>Content with Sticky Header and Footer</Heading>
          <Text>This layout has both sticky header and footer.</Text>
          {Array.from({ length: 15 }, (_, i) => (
            <Box key={i} padding={4} backgroundColor="card" border>
              <Text>Content section {i + 1}</Text>
            </Box>
          ))}
        </Stack>
      </Box>
    ),
  },
}

export const CustomGap: Story = {
  args: {
    header: <HeaderContent />,
    sidebar: <SidebarContent />,
    footer: <FooterContent />,
    gap: { xs: 2, sm: 4, md: 6, lg: 8 },
    children: <MainContent />,
  },
}

export const NoSidebar: Story = {
  args: {
    header: <HeaderContent />,
    footer: <FooterContent />,
    children: (
      <Box padding={6}>
        <Stack spacing={4}>
          <Heading level={3}>Full Width Content</Heading>
          <Text>
            This layout has no sidebar, so the main content takes the full width 
            of the available space.
          </Text>
          <Box padding={4} backgroundColor="card" border>
            <Text>Full width content area</Text>
          </Box>
        </Stack>
      </Box>
    ),
  },
}

export const ResponsiveLayout: Story = {
  render: () => (
    <Layout
      header={
        <Box backgroundColor="primary" padding={4} className="text-center">
          <Heading level={1} className="text-primary-foreground">
            Responsive Layout Demo
          </Heading>
          <Text className="text-primary-foreground text-sm mt-2">
            Resize the browser window to see the responsive behavior
          </Text>
        </Box>
      }
      sidebar={
        <Box padding={4} backgroundColor="muted" className="h-fit">
          <Stack spacing={3}>
            <Heading level={4}>Sidebar</Heading>
            <Text>This sidebar will:</Text>
            <ul className="text-sm text-muted-foreground list-disc list-inside space-y-1">
              <li>Stack above content on mobile</li>
              <li>Show as sidebar on desktop</li>
              <li>Maintain proper spacing</li>
            </ul>
          </Stack>
        </Box>
      }
      footer={
        <Box backgroundColor="muted" padding={4} className="text-center">
          <Text>Footer - Always at bottom</Text>
        </Box>
      }
    >
      <Box padding={6}>
        <Stack spacing={4}>
          <Heading level={3}>Responsive Behavior</Heading>
          <Text>
            This layout demonstrates responsive behavior. On mobile devices, the sidebar 
            will appear above the main content. On larger screens, it will appear as a 
            sidebar on the left.
          </Text>
          <Box padding={4} backgroundColor="card" border>
            <Text>Main content area</Text>
          </Box>
        </Stack>
      </Box>
    </Layout>
  ),
}
