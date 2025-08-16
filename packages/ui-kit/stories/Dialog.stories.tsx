import type { Meta, StoryObj } from '@storybook/react'
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogBody, DialogFooter, DialogTitle, DialogDescription, AlertDialog } from '../components/ui/dialog'
import { Button } from '../components/ui/button'
import { Input } from '../components/ui/input'
import { Label } from '../components/ui/label'

const meta: Meta<typeof Dialog> = {
  title: 'Feedback/Dialog',
  component: Dialog,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['sm', 'default', 'lg', 'xl', 'full'],
    },
    type: {
      control: { type: 'select' },
      options: ['alert', 'confirm', 'custom'],
    },
    fullScreen: {
      control: { type: 'boolean' },
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <Dialog {...args}>
      <DialogTrigger asChild>
        <Button variant="outline">Open Dialog</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit Profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <DialogBody>
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
        </DialogBody>
        <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
}

export const Alert: Story = {
  render: (args) => (
    <Dialog 
      type="alert"
      title="Delete Account"
      description="Are you sure you want to delete your account? This action cannot be undone."
      actions={[
        {
          label: "Cancel",
          variant: "secondary",
          onClick: () => console.log("Cancel clicked"),
        },
        {
          label: "Delete",
          variant: "destructive",
          onClick: () => console.log("Delete clicked"),
        },
      ]}
      {...args}
    >
      <DialogTrigger asChild>
        <Button variant="destructive">Delete Account</Button>
      </DialogTrigger>
    </Dialog>
  ),
}

export const Confirm: Story = {
  render: (args) => (
    <Dialog 
      type="confirm"
      title="Save Changes"
      description="Do you want to save your changes before leaving?"
      actions={[
        {
          label: "Don't Save",
          variant: "secondary",
          onClick: () => console.log("Don't save clicked"),
        },
        {
          label: "Save",
          variant: "default",
          onClick: () => console.log("Save clicked"),
        },
      ]}
      {...args}
    >
      <DialogTrigger asChild>
        <Button variant="outline">Save Changes</Button>
      </DialogTrigger>
    </Dialog>
  ),
}

export const Large: Story = {
  render: (args) => (
    <Dialog {...args}>
      <DialogTrigger asChild>
        <Button variant="outline">Large Dialog</Button>
      </DialogTrigger>
      <DialogContent size="lg">
        <DialogHeader>
          <DialogTitle>Create New Project</DialogTitle>
          <DialogDescription>
            Fill in the details below to create a new project.
          </DialogDescription>
        </DialogHeader>
        <DialogBody>
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
              <Input
                id="description"
                placeholder="Enter project description"
                className="col-span-3"
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
        </DialogBody>
        <DialogFooter>
          <Button variant="outline">Cancel</Button>
          <Button>Create Project</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
}

export const FullScreen: Story = {
  render: (args) => (
    <Dialog {...args}>
      <DialogTrigger asChild>
        <Button variant="outline">Full Screen Dialog</Button>
      </DialogTrigger>
      <DialogContent size="full">
        <DialogHeader>
          <DialogTitle>Full Screen Content</DialogTitle>
          <DialogDescription>
            This dialog takes up the full screen for immersive experiences.
          </DialogDescription>
        </DialogHeader>
        <DialogBody>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 12 }).map((_, i) => (
              <div key={i} className="p-4 border rounded-lg">
                <h3 className="font-medium">Card {i + 1}</h3>
                <p className="text-sm text-muted-foreground">
                  This is some content for card {i + 1}. It demonstrates how the full screen dialog can accommodate a lot of content.
                </p>
              </div>
            ))}
          </div>
        </DialogBody>
        <DialogFooter>
          <Button variant="outline">Cancel</Button>
          <Button>Save All</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
}

export const NoCloseButton: Story = {
  render: (args) => (
    <Dialog {...args}>
      <DialogTrigger asChild>
        <Button variant="outline">Dialog without Close Button</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader showClose={false}>
          <DialogTitle>Important Notice</DialogTitle>
          <DialogDescription>
            This dialog cannot be closed with the X button. You must use the action buttons below.
          </DialogDescription>
        </DialogHeader>
        <DialogBody>
          <p className="text-sm text-muted-foreground">
            This is useful for important confirmations or when you want to ensure users make a deliberate choice.
          </p>
        </DialogBody>
        <DialogFooter>
          <Button variant="outline">Cancel</Button>
          <Button>Confirm</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
}

export const CenteredFooter: Story = {
  render: (args) => (
    <Dialog {...args}>
      <DialogTrigger asChild>
        <Button variant="outline">Centered Footer</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Centered Actions</DialogTitle>
          <DialogDescription>
            This dialog has centered footer actions.
          </DialogDescription>
        </DialogHeader>
        <DialogBody>
          <p className="text-sm text-muted-foreground">
            The footer buttons are centered instead of right-aligned.
          </p>
        </DialogBody>
        <DialogFooter align="center">
          <Button variant="outline">Cancel</Button>
          <Button>Save</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
}

export const LeftAlignedFooter: Story = {
  render: (args) => (
    <Dialog {...args}>
      <DialogTrigger asChild>
        <Button variant="outline">Left Aligned Footer</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Left Aligned Actions</DialogTitle>
          <DialogDescription>
            This dialog has left-aligned footer actions.
          </DialogDescription>
        </DialogHeader>
        <DialogBody>
          <p className="text-sm text-muted-foreground">
            The footer buttons are left-aligned instead of right-aligned.
          </p>
        </DialogBody>
        <DialogFooter align="start">
          <Button variant="outline">Cancel</Button>
          <Button>Save</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
}

export const ScrollableContent: Story = {
  render: (args) => (
    <Dialog {...args}>
      <DialogTrigger asChild>
        <Button variant="outline">Scrollable Content</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Long Content</DialogTitle>
          <DialogDescription>
            This dialog has scrollable content when it exceeds the viewport height.
          </DialogDescription>
        </DialogHeader>
        <DialogBody scrollable>
          <div className="space-y-4">
            {Array.from({ length: 20 }).map((_, i) => (
              <div key={i} className="p-4 border rounded-lg">
                <h4 className="font-medium">Section {i + 1}</h4>
                <p className="text-sm text-muted-foreground">
                  This is section {i + 1} of the content. It contains some text to demonstrate scrolling behavior.
                  When there's too much content to fit in the dialog, it becomes scrollable.
                </p>
              </div>
            ))}
          </div>
        </DialogBody>
        <DialogFooter>
          <Button variant="outline">Cancel</Button>
          <Button>Save</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
}

// AlertDialog specific stories
export const AlertDialogDefault: Story = {
  render: (args) => (
    <AlertDialog
      title="Delete Account"
      description="Are you sure you want to delete your account? This action cannot be undone."
      actionLabel="Delete"
      cancelLabel="Cancel"
      onAction={() => console.log("Delete action clicked")}
      onCancel={() => console.log("Cancel action clicked")}
      {...args}
    >
      <DialogTrigger asChild>
        <Button variant="destructive">Delete Account</Button>
      </DialogTrigger>
    </AlertDialog>
  ),
}

export const AlertDialogDestructive: Story = {
  render: (args) => (
    <AlertDialog
      title="Permanent Deletion"
      description="This will permanently delete your data and cannot be recovered. Are you absolutely sure?"
      actionLabel="Yes, Delete"
      cancelLabel="No, Keep"
      variant="destructive"
      onAction={() => console.log("Destructive action clicked")}
      onCancel={() => console.log("Cancel action clicked")}
      {...args}
    >
      <DialogTrigger asChild>
        <Button variant="destructive">Permanently Delete</Button>
      </DialogTrigger>
    </AlertDialog>
  ),
}

export const AlertDialogSuccess: Story = {
  render: (args) => (
    <AlertDialog
      title="Success!"
      description="Your changes have been saved successfully."
      actionLabel="Continue"
      cancelLabel="Close"
      onAction={() => console.log("Continue action clicked")}
      onCancel={() => console.log("Close action clicked")}
      {...args}
    >
      <DialogTrigger asChild>
        <Button variant="outline">Show Success</Button>
      </DialogTrigger>
    </AlertDialog>
  ),
}

