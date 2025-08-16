import type { Meta, StoryObj } from '@storybook/react'
import { Modal, ModalTrigger, ModalContent, ModalHeader, ModalBody, ModalFooter, ModalTitle, ModalDescription } from '../components/ui/modal'
import { Button } from '../components/ui/button'
import { Input } from '../components/ui/input'
import { Label } from '../components/ui/label'
import { Textarea } from '../components/ui/textarea'

const meta: Meta<typeof Modal> = {
  title: 'Feedback/Modal',
  component: Modal,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['sm', 'default', 'lg', 'xl', 'full'],
    },
    centered: {
      control: { type: 'boolean' },
    },
    closeOnOverlayClick: {
      control: { type: 'boolean' },
    },
    closeOnEscape: {
      control: { type: 'boolean' },
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <Modal {...args}>
      <ModalTrigger asChild>
        <Button variant="outline">Open Modal</Button>
      </ModalTrigger>
      <ModalContent>
        <ModalHeader>
          <ModalTitle>Edit Profile</ModalTitle>
          <ModalDescription>
            Make changes to your profile here. Click save when you're done.
          </ModalDescription>
        </ModalHeader>
        <ModalBody>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Name
              </Label>
              <Input
                id="name"
                defaultValue="Pedro Duarte"
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="username" className="text-right">
                Username
              </Label>
              <Input
                id="username"
                defaultValue="@peduarte"
                className="col-span-3"
              />
            </div>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button type="submit">Save changes</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  ),
}

export const Small: Story = {
  render: (args) => (
    <Modal {...args}>
      <ModalTrigger asChild>
        <Button variant="outline">Small Modal</Button>
      </ModalTrigger>
      <ModalContent size="sm">
        <ModalHeader>
          <ModalTitle>Confirm Action</ModalTitle>
          <ModalDescription>
            Are you sure you want to delete this item? This action cannot be undone.
          </ModalDescription>
        </ModalHeader>
        <ModalFooter>
          <Button variant="outline">Cancel</Button>
          <Button variant="destructive">Delete</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  ),
}

export const Large: Story = {
  render: (args) => (
    <Modal {...args}>
      <ModalTrigger asChild>
        <Button variant="outline">Large Modal</Button>
      </ModalTrigger>
      <ModalContent size="lg">
        <ModalHeader>
          <ModalTitle>Create New Project</ModalTitle>
          <ModalDescription>
            Fill in the details below to create a new project.
          </ModalDescription>
        </ModalHeader>
        <ModalBody>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="project-name" className="text-right">
                Project Name
              </Label>
              <Input
                id="project-name"
                placeholder="Enter project name"
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="description" className="text-right">
                Description
              </Label>
              <Textarea
                id="description"
                placeholder="Enter project description"
                className="col-span-3"
                rows={4}
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="category" className="text-right">
                Category
              </Label>
              <Input
                id="category"
                placeholder="Enter category"
                className="col-span-3"
              />
            </div>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button variant="outline">Cancel</Button>
          <Button>Create Project</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  ),
}

export const ExtraLarge: Story = {
  render: (args) => (
    <Modal {...args}>
      <ModalTrigger asChild>
        <Button variant="outline">Extra Large Modal</Button>
      </ModalTrigger>
      <ModalContent size="xl">
        <ModalHeader>
          <ModalTitle>Advanced Settings</ModalTitle>
          <ModalDescription>
            Configure advanced settings for your application.
          </ModalDescription>
        </ModalHeader>
        <ModalBody scrollable>
          <div className="space-y-6">
            <div className="space-y-4">
              <h4 className="text-sm font-medium">General Settings</h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="theme">Theme</Label>
                  <Input id="theme" placeholder="Select theme" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="language">Language</Label>
                  <Input id="language" placeholder="Select language" />
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <h4 className="text-sm font-medium">Security Settings</h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="2fa">Two-Factor Authentication</Label>
                  <Input id="2fa" placeholder="Enable/Disable" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="session-timeout">Session Timeout</Label>
                  <Input id="session-timeout" placeholder="30 minutes" />
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <h4 className="text-sm font-medium">Notification Settings</h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="email-notifications">Email Notifications</Label>
                  <Input id="email-notifications" placeholder="Enable/Disable" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="push-notifications">Push Notifications</Label>
                  <Input id="push-notifications" placeholder="Enable/Disable" />
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <h4 className="text-sm font-medium">Performance Settings</h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="cache-size">Cache Size</Label>
                  <Input id="cache-size" placeholder="100MB" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="auto-save">Auto Save Interval</Label>
                  <Input id="auto-save" placeholder="5 minutes" />
                </div>
              </div>
            </div>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button variant="outline">Reset to Default</Button>
          <Button>Save Settings</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  ),
}

export const FullScreen: Story = {
  render: (args) => (
    <Modal {...args}>
      <ModalTrigger asChild>
        <Button variant="outline">Full Screen Modal</Button>
      </ModalTrigger>
      <ModalContent size="full">
        <ModalHeader>
          <ModalTitle>Full Screen Content</ModalTitle>
          <ModalDescription>
            This modal takes up the full screen for immersive experiences.
          </ModalDescription>
        </ModalHeader>
        <ModalBody>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 12 }).map((_, i) => (
              <div key={i} className="p-4 border rounded-lg">
                <h3 className="font-medium">Card {i + 1}</h3>
                <p className="text-sm text-muted-foreground">
                  This is some content for card {i + 1}. It demonstrates how the full screen modal can accommodate a lot of content.
                </p>
              </div>
            ))}
          </div>
        </ModalBody>
        <ModalFooter>
          <Button variant="outline">Cancel</Button>
          <Button>Save All</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  ),
}

export const NoCloseButton: Story = {
  render: (args) => (
    <Modal {...args}>
      <ModalTrigger asChild>
        <Button variant="outline">Modal without Close Button</Button>
      </ModalTrigger>
      <ModalContent>
        <ModalHeader showClose={false}>
          <ModalTitle>Important Notice</ModalTitle>
          <ModalDescription>
            This modal cannot be closed with the X button. You must use the action buttons below.
          </ModalDescription>
        </ModalHeader>
        <ModalBody>
          <p className="text-sm text-muted-foreground">
            This is useful for important confirmations or when you want to ensure users make a deliberate choice.
          </p>
        </ModalBody>
        <ModalFooter>
          <Button variant="outline">Cancel</Button>
          <Button>Confirm</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  ),
}

export const CenteredFooter: Story = {
  render: (args) => (
    <Modal {...args}>
      <ModalTrigger asChild>
        <Button variant="outline">Centered Footer</Button>
      </ModalTrigger>
      <ModalContent>
        <ModalHeader>
          <ModalTitle>Centered Actions</ModalTitle>
          <ModalDescription>
            This modal has centered footer actions.
          </ModalDescription>
        </ModalHeader>
        <ModalBody>
          <p className="text-sm text-muted-foreground">
            The footer buttons are centered instead of right-aligned.
          </p>
        </ModalBody>
        <ModalFooter align="center">
          <Button variant="outline">Cancel</Button>
          <Button>Save</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  ),
}

export const LeftAlignedFooter: Story = {
  render: (args) => (
    <Modal {...args}>
      <ModalTrigger asChild>
        <Button variant="outline">Left Aligned Footer</Button>
      </ModalTrigger>
      <ModalContent>
        <ModalHeader>
          <ModalTitle>Left Aligned Actions</ModalTitle>
          <ModalDescription>
            This modal has left-aligned footer actions.
          </ModalDescription>
        </ModalHeader>
        <ModalBody>
          <p className="text-sm text-muted-foreground">
            The footer buttons are left-aligned instead of right-aligned.
          </p>
        </ModalBody>
        <ModalFooter align="start">
          <Button variant="outline">Cancel</Button>
          <Button>Save</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  ),
}

export const ScrollableContent: Story = {
  render: (args) => (
    <Modal {...args}>
      <ModalTrigger asChild>
        <Button variant="outline">Scrollable Content</Button>
      </ModalTrigger>
      <ModalContent>
        <ModalHeader>
          <ModalTitle>Long Content</ModalTitle>
          <ModalDescription>
            This modal has scrollable content when it exceeds the viewport height.
          </ModalDescription>
        </ModalHeader>
        <ModalBody scrollable>
          <div className="space-y-4">
            {Array.from({ length: 20 }).map((_, i) => (
              <div key={i} className="p-4 border rounded-lg">
                <h4 className="font-medium">Section {i + 1}</h4>
                <p className="text-sm text-muted-foreground">
                  This is section {i + 1} of the content. It contains some text to demonstrate scrolling behavior.
                  When there's too much content to fit in the modal, it becomes scrollable.
                </p>
              </div>
            ))}
          </div>
        </ModalBody>
        <ModalFooter>
          <Button variant="outline">Cancel</Button>
          <Button>Save</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  ),
}

