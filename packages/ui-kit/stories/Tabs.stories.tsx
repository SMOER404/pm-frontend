import type { Meta, StoryObj } from '@storybook/react'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '../components/ui/tabs'
import { Home, Settings, User, FileText, BarChart3, Mail, Phone, Camera } from 'lucide-react'

const meta: Meta<typeof Tabs> = {
  title: 'Navigation/Tabs',
  component: Tabs,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'outlined', 'pills'],
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'default', 'lg'],
    },
    orientation: {
      control: { type: 'select' },
      options: ['horizontal', 'vertical'],
    },
    fullWidth: {
      control: { type: 'boolean' },
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <Tabs defaultValue="account" className="w-[400px]" {...args}>
      <TabsList>
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
        <TabsTrigger value="settings">Settings</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <div className="space-y-4">
          <h4 className="text-sm font-medium">Account</h4>
          <p className="text-sm text-muted-foreground">
            Make changes to your account here. Click save when you're done.
          </p>
        </div>
      </TabsContent>
      <TabsContent value="password">
        <div className="space-y-4">
          <h4 className="text-sm font-medium">Password</h4>
          <p className="text-sm text-muted-foreground">
            Change your password here. After saving, you'll be logged out.
          </p>
        </div>
      </TabsContent>
      <TabsContent value="settings">
        <div className="space-y-4">
          <h4 className="text-sm font-medium">Settings</h4>
          <p className="text-sm text-muted-foreground">
            Manage your application settings and preferences.
          </p>
        </div>
      </TabsContent>
    </Tabs>
  ),
}

export const WithIcons: Story = {
  render: (args) => (
    <Tabs defaultValue="home" className="w-[400px]" {...args}>
      <TabsList>
        <TabsTrigger value="home" icon={<Home className="h-4 w-4" />}>
          Home
        </TabsTrigger>
        <TabsTrigger value="profile" icon={<User className="h-4 w-4" />}>
          Profile
        </TabsTrigger>
        <TabsTrigger value="settings" icon={<Settings className="h-4 w-4" />}>
          Settings
        </TabsTrigger>
        <TabsTrigger value="reports" icon={<BarChart3 className="h-4 w-4" />}>
          Reports
        </TabsTrigger>
      </TabsList>
      <TabsContent value="home">
        <div className="space-y-4">
          <h4 className="text-sm font-medium">Home</h4>
          <p className="text-sm text-muted-foreground">
            Welcome to your dashboard. Here you can see an overview of your account.
          </p>
        </div>
      </TabsContent>
      <TabsContent value="profile">
        <div className="space-y-4">
          <h4 className="text-sm font-medium">Profile</h4>
          <p className="text-sm text-muted-foreground">
            Manage your profile information and preferences.
          </p>
        </div>
      </TabsContent>
      <TabsContent value="settings">
        <div className="space-y-4">
          <h4 className="text-sm font-medium">Settings</h4>
          <p className="text-sm text-muted-foreground">
            Configure your application settings and preferences.
          </p>
        </div>
      </TabsContent>
      <TabsContent value="reports">
        <div className="space-y-4">
          <h4 className="text-sm font-medium">Reports</h4>
          <p className="text-sm text-muted-foreground">
            View and analyze your data reports and analytics.
          </p>
        </div>
      </TabsContent>
    </Tabs>
  ),
}

export const Outlined: Story = {
  render: (args) => (
    <Tabs defaultValue="account" className="w-[400px]" {...args}>
      <TabsList>
        <TabsTrigger value="account" variant="outlined">Account</TabsTrigger>
        <TabsTrigger value="password" variant="outlined">Password</TabsTrigger>
        <TabsTrigger value="settings" variant="outlined">Settings</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <div className="space-y-4">
          <h4 className="text-sm font-medium">Account</h4>
          <p className="text-sm text-muted-foreground">
            Make changes to your account here. Click save when you're done.
          </p>
        </div>
      </TabsContent>
      <TabsContent value="password">
        <div className="space-y-4">
          <h4 className="text-sm font-medium">Password</h4>
          <p className="text-sm text-muted-foreground">
            Change your password here. After saving, you'll be logged out.
          </p>
        </div>
      </TabsContent>
      <TabsContent value="settings">
        <div className="space-y-4">
          <h4 className="text-sm font-medium">Settings</h4>
          <p className="text-sm text-muted-foreground">
            Manage your application settings and preferences.
          </p>
        </div>
      </TabsContent>
    </Tabs>
  ),
}

export const Pills: Story = {
  render: (args) => (
    <Tabs defaultValue="all" className="w-[400px]" {...args}>
      <TabsList>
        <TabsTrigger value="all" variant="pills">All</TabsTrigger>
        <TabsTrigger value="unread" variant="pills">Unread</TabsTrigger>
        <TabsTrigger value="archived" variant="pills">Archived</TabsTrigger>
      </TabsList>
      <TabsContent value="all">
        <div className="space-y-4">
          <h4 className="text-sm font-medium">All Messages</h4>
          <p className="text-sm text-muted-foreground">
            View all your messages in one place.
          </p>
        </div>
      </TabsContent>
      <TabsContent value="unread">
        <div className="space-y-4">
          <h4 className="text-sm font-medium">Unread Messages</h4>
          <p className="text-sm text-muted-foreground">
            Messages you haven't read yet.
          </p>
        </div>
      </TabsContent>
      <TabsContent value="archived">
        <div className="space-y-4">
          <h4 className="text-sm font-medium">Archived Messages</h4>
          <p className="text-sm text-muted-foreground">
            Messages you've archived for later reference.
          </p>
        </div>
      </TabsContent>
    </Tabs>
  ),
}

export const Vertical: Story = {
  render: (args) => (
    <Tabs defaultValue="home" orientation="vertical" className="w-[500px]" {...args}>
      <div className="flex gap-4">
        <TabsList orientation="vertical">
          <TabsTrigger value="home" icon={<Home className="h-4 w-4" />}>
            Home
          </TabsTrigger>
          <TabsTrigger value="profile" icon={<User className="h-4 w-4" />}>
            Profile
          </TabsTrigger>
          <TabsTrigger value="settings" icon={<Settings className="h-4 w-4" />}>
            Settings
          </TabsTrigger>
          <TabsTrigger value="documents" icon={<FileText className="h-4 w-4" />}>
            Documents
          </TabsTrigger>
        </TabsList>
        <div className="flex-1">
          <TabsContent value="home" orientation="vertical">
            <div className="space-y-4">
              <h4 className="text-sm font-medium">Home</h4>
              <p className="text-sm text-muted-foreground">
                Welcome to your dashboard. Here you can see an overview of your account.
              </p>
            </div>
          </TabsContent>
          <TabsContent value="profile" orientation="vertical">
            <div className="space-y-4">
              <h4 className="text-sm font-medium">Profile</h4>
              <p className="text-sm text-muted-foreground">
                Manage your profile information and preferences.
              </p>
            </div>
          </TabsContent>
          <TabsContent value="settings" orientation="vertical">
            <div className="space-y-4">
              <h4 className="text-sm font-medium">Settings</h4>
              <p className="text-sm text-muted-foreground">
                Configure your application settings and preferences.
              </p>
            </div>
          </TabsContent>
          <TabsContent value="documents" orientation="vertical">
            <div className="space-y-4">
              <h4 className="text-sm font-medium">Documents</h4>
              <p className="text-sm text-muted-foreground">
                Access and manage your documents and files.
              </p>
            </div>
          </TabsContent>
        </div>
      </div>
    </Tabs>
  ),
}

export const FullWidth: Story = {
  render: (args) => (
    <Tabs defaultValue="account" className="w-[400px]" {...args}>
      <TabsList fullWidth>
        <TabsTrigger value="account" fullWidth>Account</TabsTrigger>
        <TabsTrigger value="password" fullWidth>Password</TabsTrigger>
        <TabsTrigger value="settings" fullWidth>Settings</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <div className="space-y-4">
          <h4 className="text-sm font-medium">Account</h4>
          <p className="text-sm text-muted-foreground">
            Make changes to your account here. Click save when you're done.
          </p>
        </div>
      </TabsContent>
      <TabsContent value="password">
        <div className="space-y-4">
          <h4 className="text-sm font-medium">Password</h4>
          <p className="text-sm text-muted-foreground">
            Change your password here. After saving, you'll be logged out.
          </p>
        </div>
      </TabsContent>
      <TabsContent value="settings">
        <div className="space-y-4">
          <h4 className="text-sm font-medium">Settings</h4>
          <p className="text-sm text-muted-foreground">
            Manage your application settings and preferences.
          </p>
        </div>
      </TabsContent>
    </Tabs>
  ),
}

export const Small: Story = {
  render: (args) => (
    <Tabs defaultValue="account" className="w-[400px]" {...args}>
      <TabsList>
        <TabsTrigger value="account" size="sm">Account</TabsTrigger>
        <TabsTrigger value="password" size="sm">Password</TabsTrigger>
        <TabsTrigger value="settings" size="sm">Settings</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <div className="space-y-4">
          <h4 className="text-sm font-medium">Account</h4>
          <p className="text-sm text-muted-foreground">
            Make changes to your account here. Click save when you're done.
          </p>
        </div>
      </TabsContent>
      <TabsContent value="password">
        <div className="space-y-4">
          <h4 className="text-sm font-medium">Password</h4>
          <p className="text-sm text-muted-foreground">
            Change your password here. After saving, you'll be logged out.
          </p>
        </div>
      </TabsContent>
      <TabsContent value="settings">
        <div className="space-y-4">
          <h4 className="text-sm font-medium">Settings</h4>
          <p className="text-sm text-muted-foreground">
            Manage your application settings and preferences.
          </p>
        </div>
      </TabsContent>
    </Tabs>
  ),
}

export const Large: Story = {
  render: (args) => (
    <Tabs defaultValue="account" className="w-[400px]" {...args}>
      <TabsList>
        <TabsTrigger value="account" size="lg">Account</TabsTrigger>
        <TabsTrigger value="password" size="lg">Password</TabsTrigger>
        <TabsTrigger value="settings" size="lg">Settings</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <div className="space-y-4">
          <h4 className="text-sm font-medium">Account</h4>
          <p className="text-sm text-muted-foreground">
            Make changes to your account here. Click save when you're done.
          </p>
        </div>
      </TabsContent>
      <TabsContent value="password">
        <div className="space-y-4">
          <h4 className="text-sm font-medium">Password</h4>
          <p className="text-sm text-muted-foreground">
            Change your password here. After saving, you'll be logged out.
          </p>
        </div>
      </TabsContent>
      <TabsContent value="settings">
        <div className="space-y-4">
          <h4 className="text-sm font-medium">Settings</h4>
          <p className="text-sm text-muted-foreground">
            Manage your application settings and preferences.
          </p>
        </div>
      </TabsContent>
    </Tabs>
  ),
}

export const ContactTabs: Story = {
  render: (args) => (
    <Tabs defaultValue="email" className="w-[400px]" {...args}>
      <TabsList>
        <TabsTrigger value="email" icon={<Mail className="h-4 w-4" />}>
          Email
        </TabsTrigger>
        <TabsTrigger value="phone" icon={<Phone className="h-4 w-4" />}>
          Phone
        </TabsTrigger>
        <TabsTrigger value="video" icon={<Camera className="h-4 w-4" />}>
          Video
        </TabsTrigger>
      </TabsList>
      <TabsContent value="email">
        <div className="space-y-4">
          <h4 className="text-sm font-medium">Email Contact</h4>
          <p className="text-sm text-muted-foreground">
            Send us an email and we'll get back to you as soon as possible.
          </p>
        </div>
      </TabsContent>
      <TabsContent value="phone">
        <div className="space-y-4">
          <h4 className="text-sm font-medium">Phone Contact</h4>
          <p className="text-sm text-muted-foreground">
            Call us directly for immediate assistance.
          </p>
        </div>
      </TabsContent>
      <TabsContent value="video">
        <div className="space-y-4">
          <h4 className="text-sm font-medium">Video Call</h4>
          <p className="text-sm text-muted-foreground">
            Schedule a video call for a more personal experience.
          </p>
        </div>
      </TabsContent>
    </Tabs>
  ),
}

