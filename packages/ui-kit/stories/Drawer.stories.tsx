import type { Meta, StoryObj } from "@storybook/react"
import { Button } from "@/components/ui/button"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { TextArea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Separator } from "@/components/ui/separator"
import {
  Settings,
  User,
  CreditCard,
  Bell,
  Shield,
  HelpCircle,
  LogOut,
  Mail,
  Phone,
  MapPin,
  Calendar,
  FileText,
  Download,
  Upload,
  Trash2,
  Edit,
  Plus,
} from "lucide-react"

const meta: Meta<typeof Drawer> = {
  title: "UI/Drawer",
  component: Drawer,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    side: {
      control: { type: "select" },
      options: ["top", "right", "bottom", "left"],
    },
    size: {
      control: { type: "select" },
      options: ["sm", "default", "lg", "xl", "full"],
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="outline">Open Drawer</Button>
      </DrawerTrigger>
      <DrawerContent {...args}>
        <DrawerHeader>
          <DrawerTitle>Edit profile</DrawerTitle>
          <DrawerDescription>
            Make changes to your profile here. Click save when you're done.
          </DrawerDescription>
        </DrawerHeader>
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
        <DrawerFooter>
          <Button>Save changes</Button>
          <DrawerClose asChild>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  ),
}

export const RightSide: Story = {
  render: (args) => (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="outline">Open Right Drawer</Button>
      </DrawerTrigger>
      <DrawerContent side="right" {...args}>
        <DrawerHeader>
          <DrawerTitle>Settings</DrawerTitle>
          <DrawerDescription>
            Configure your application settings here.
          </DrawerDescription>
        </DrawerHeader>
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <Checkbox id="notifications" />
            <Label htmlFor="notifications">Enable notifications</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="dark-mode" />
            <Label htmlFor="dark-mode">Dark mode</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="auto-save" />
            <Label htmlFor="auto-save">Auto save</Label>
          </div>
        </div>
        <DrawerFooter>
          <Button>Save settings</Button>
          <DrawerClose asChild>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  ),
}

export const LeftSide: Story = {
  render: (args) => (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="outline">Open Left Drawer</Button>
      </DrawerTrigger>
      <DrawerContent side="left" {...args}>
        <DrawerHeader>
          <DrawerTitle>Navigation</DrawerTitle>
          <DrawerDescription>
            Quick access to your favorite sections.
          </DrawerDescription>
        </DrawerHeader>
        <nav className="space-y-2">
          <Button variant="ghost" className="w-full justify-start">
            <User className="mr-2 h-4 w-4" />
            Profile
          </Button>
          <Button variant="ghost" className="w-full justify-start">
            <Settings className="mr-2 h-4 w-4" />
            Settings
          </Button>
          <Button variant="ghost" className="w-full justify-start">
            <CreditCard className="mr-2 h-4 w-4" />
            Billing
          </Button>
          <Button variant="ghost" className="w-full justify-start">
            <Bell className="mr-2 h-4 w-4" />
            Notifications
          </Button>
        </nav>
        <DrawerFooter>
          <DrawerClose asChild>
            <Button variant="outline">Close</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  ),
}

export const TopSide: Story = {
  render: (args) => (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="outline">Open Top Drawer</Button>
      </DrawerTrigger>
      <DrawerContent side="top" {...args}>
        <DrawerHeader>
          <DrawerTitle>Quick Actions</DrawerTitle>
          <DrawerDescription>
            Access frequently used features.
          </DrawerDescription>
        </DrawerHeader>
        <div className="grid grid-cols-3 gap-4">
          <Button variant="outline" className="flex flex-col items-center gap-2 h-20">
            <Plus className="h-6 w-6" />
            <span>New Item</span>
          </Button>
          <Button variant="outline" className="flex flex-col items-center gap-2 h-20">
            <Upload className="h-6 w-6" />
            <span>Upload</span>
          </Button>
          <Button variant="outline" className="flex flex-col items-center gap-2 h-20">
            <Download className="h-6 w-6" />
            <span>Download</span>
          </Button>
        </div>
        <DrawerFooter>
          <DrawerClose asChild>
            <Button variant="outline">Close</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  ),
}

export const BottomSide: Story = {
  render: (args) => (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="outline">Open Bottom Drawer</Button>
      </DrawerTrigger>
      <DrawerContent side="bottom" {...args}>
        <DrawerHeader>
          <DrawerTitle>Share</DrawerTitle>
          <DrawerDescription>
            Share this content with others.
          </DrawerDescription>
        </DrawerHeader>
        <div className="grid grid-cols-4 gap-4">
          <Button variant="outline" className="flex flex-col items-center gap-2 h-20">
            <Mail className="h-6 w-6" />
            <span>Email</span>
          </Button>
          <Button variant="outline" className="flex flex-col items-center gap-2 h-20">
            <Phone className="h-6 w-6" />
            <span>SMS</span>
          </Button>
          <Button variant="outline" className="flex flex-col items-center gap-2 h-20">
            <MapPin className="h-6 w-6" />
            <span>Location</span>
          </Button>
          <Button variant="outline" className="flex flex-col items-center gap-2 h-20">
            <Calendar className="h-6 w-6" />
            <span>Calendar</span>
          </Button>
        </div>
        <DrawerFooter>
          <DrawerClose asChild>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  ),
}

export const DifferentSizes: Story = {
  render: (args) => (
    <div className="flex gap-4">
      <Drawer>
        <DrawerTrigger asChild>
          <Button size="sm">Small</Button>
        </DrawerTrigger>
        <DrawerContent size="sm" {...args}>
          <DrawerHeader>
            <DrawerTitle>Small Drawer</DrawerTitle>
          </DrawerHeader>
          <div className="p-4">
            <p>This is a small drawer with limited content.</p>
          </div>
          <DrawerFooter>
            <DrawerClose asChild>
              <Button variant="outline">Close</Button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
      
      <Drawer>
        <DrawerTrigger asChild>
          <Button>Default</Button>
        </DrawerTrigger>
        <DrawerContent size="default" {...args}>
          <DrawerHeader>
            <DrawerTitle>Default Drawer</DrawerTitle>
          </DrawerHeader>
          <div className="p-4">
            <p>This is a default sized drawer.</p>
          </div>
          <DrawerFooter>
            <DrawerClose asChild>
              <Button variant="outline">Close</Button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
      
      <Drawer>
        <DrawerTrigger asChild>
          <Button size="lg">Large</Button>
        </DrawerTrigger>
        <DrawerContent size="lg" {...args}>
          <DrawerHeader>
            <DrawerTitle>Large Drawer</DrawerTitle>
          </DrawerHeader>
          <div className="p-4">
            <p>This is a large drawer with more space for content.</p>
          </div>
          <DrawerFooter>
            <DrawerClose asChild>
              <Button variant="outline">Close</Button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  ),
}

export const WithoutCloseButton: Story = {
  render: (args) => (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="outline">Open Drawer (No Close Button)</Button>
      </DrawerTrigger>
      <DrawerContent showCloseButton={false} {...args}>
        <DrawerHeader>
          <DrawerTitle>Important Notice</DrawerTitle>
          <DrawerDescription>
            This drawer cannot be closed with the X button. You must use the action buttons below.
          </DrawerDescription>
        </DrawerHeader>
        <div className="p-4">
          <p>This is important content that requires user action to dismiss.</p>
        </div>
        <DrawerFooter>
          <Button>Accept</Button>
          <DrawerClose asChild>
            <Button variant="outline">Decline</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  ),
}

export const CustomCloseButtonPosition: Story = {
  render: (args) => (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="outline">Open Drawer (Custom Close Position)</Button>
      </DrawerTrigger>
      <DrawerContent closeButtonPosition="bottom-left" {...args}>
        <DrawerHeader>
          <DrawerTitle>Custom Close Button</DrawerTitle>
          <DrawerDescription>
            The close button is positioned at the bottom-left corner.
          </DrawerDescription>
        </DrawerHeader>
        <div className="p-4">
          <p>This drawer has a custom close button position.</p>
        </div>
        <DrawerFooter>
          <Button>Save</Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  ),
}

export const WithoutOverlay: Story = {
  render: (args) => (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="outline">Open Drawer (No Overlay)</Button>
      </DrawerTrigger>
      <DrawerContent overlay={false} {...args}>
        <DrawerHeader>
          <DrawerTitle>No Overlay</DrawerTitle>
          <DrawerDescription>
            This drawer doesn't have a background overlay.
          </DrawerDescription>
        </DrawerHeader>
        <div className="p-4">
          <p>You can still see the background content.</p>
        </div>
        <DrawerFooter>
          <DrawerClose asChild>
            <Button variant="outline">Close</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  ),
}

export const ComplexForm: Story = {
  render: (args) => (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="outline">Open Complex Form</Button>
      </DrawerTrigger>
      <DrawerContent size="lg" {...args}>
        <DrawerHeader>
          <DrawerTitle>Create New Project</DrawerTitle>
          <DrawerDescription>
            Fill out the form below to create a new project.
          </DrawerDescription>
        </DrawerHeader>
        <div className="space-y-4 p-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Project Name</Label>
              <Input id="name" placeholder="Enter project name" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="category">Category</Label>
              <Input id="category" placeholder="Select category" />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <TextArea
              id="description"
              placeholder="Enter project description"
              rows={4}
            />
          </div>
          <Separator />
          <div className="space-y-2">
            <Label>Settings</Label>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Checkbox id="public" />
                <Label htmlFor="public">Public project</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="notifications" />
                <Label htmlFor="notifications">Enable notifications</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="auto-save" />
                <Label htmlFor="auto-save">Auto save</Label>
              </div>
            </div>
          </div>
        </div>
        <DrawerFooter>
          <Button>Create Project</Button>
          <DrawerClose asChild>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  ),
}

export const UserProfile: Story = {
  render: (args) => (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="outline">Open User Profile</Button>
      </DrawerTrigger>
      <DrawerContent size="lg" {...args}>
        <DrawerHeader>
          <div className="flex items-center space-x-4">
            <div className="h-16 w-16 rounded-full bg-primary flex items-center justify-center">
              <User className="h-8 w-8 text-primary-foreground" />
            </div>
            <div>
              <DrawerTitle>John Doe</DrawerTitle>
              <DrawerDescription>john.doe@example.com</DrawerDescription>
            </div>
          </div>
        </DrawerHeader>
        <div className="space-y-4 p-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="firstName">First Name</Label>
              <Input id="firstName" defaultValue="John" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName">Last Name</Label>
              <Input id="lastName" defaultValue="Doe" />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" defaultValue="john.doe@example.com" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone">Phone</Label>
            <Input id="phone" type="tel" defaultValue="+1 (555) 123-4567" />
          </div>
          <Separator />
          <div className="space-y-2">
            <Label>Preferences</Label>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Checkbox id="email-notifications" defaultChecked />
                <Label htmlFor="email-notifications">Email notifications</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="sms-notifications" />
                <Label htmlFor="sms-notifications">SMS notifications</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="two-factor" defaultChecked />
                <Label htmlFor="two-factor">Two-factor authentication</Label>
              </div>
            </div>
          </div>
        </div>
        <DrawerFooter>
          <Button>Save Changes</Button>
          <DrawerClose asChild>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  ),
}

