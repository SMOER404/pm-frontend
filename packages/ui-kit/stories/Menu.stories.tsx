import type { Meta, StoryObj } from "@storybook/react"
import { Button } from "@/components/ui/button"
import {
  Menu,
  MenuItem,
  MenuCheckboxItem,
  MenuRadioItem,
  MenuSub,
  MenuSubTrigger,
  MenuSubContent,
  MenuSeparator,
  MenuLabel,
  MenuGroup,
  MenuRadioGroup,
} from "@/components/ui/menu"
import {
  Settings,
  User,
  CreditCard,
  LogOut,
  Plus,
  FileText,
  Download,
  Share,
  Edit,
  Trash2,
  MoreHorizontal,
  ChevronDown,
  Sun,
  Moon,
  Monitor,
  Bell,
  Mail,
  Heart,
  Star,
  Bookmark,
} from "lucide-react"

const meta: Meta<typeof Menu> = {
  title: "UI/Menu",
  component: Menu,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["default", "compact", "bordered"],
    },
    size: {
      control: { type: "select" },
      options: ["sm", "default", "lg"],
    },
    align: {
      control: { type: "select" },
      options: ["start", "center", "end"],
    },
    side: {
      control: { type: "select" },
      options: ["top", "right", "bottom", "left"],
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    trigger: <Button variant="outline">Open Menu</Button>,
    children: (
      <>
        <MenuItem>Profile</MenuItem>
        <MenuItem>Settings</MenuItem>
        <MenuItem>Help</MenuItem>
        <MenuSeparator />
        <MenuItem>Logout</MenuItem>
      </>
    ),
  },
}

export const WithIcons: Story = {
  args: {
    trigger: <Button variant="outline">Actions</Button>,
    children: (
      <>
        <MenuItem icon={<User className="h-4 w-4" />}>Profile</MenuItem>
        <MenuItem icon={<Settings className="h-4 w-4" />}>Settings</MenuItem>
        <MenuItem icon={<CreditCard className="h-4 w-4" />}>Billing</MenuItem>
        <MenuSeparator />
        <MenuItem icon={<LogOut className="h-4 w-4" />}>Logout</MenuItem>
      </>
    ),
  },
}

export const WithRightIcons: Story = {
  args: {
    trigger: <Button variant="outline">More Options</Button>,
    children: (
      <>
        <MenuItem rightIcon={<Edit className="h-4 w-4" />}>Edit</MenuItem>
        <MenuItem rightIcon={<Share className="h-4 w-4" />}>Share</MenuItem>
        <MenuItem rightIcon={<Download className="h-4 w-4" />}>Download</MenuItem>
        <MenuSeparator />
        <MenuItem rightIcon={<Trash2 className="h-4 w-4" />} variant="destructive">
          Delete
        </MenuItem>
      </>
    ),
  },
}

export const WithNestedMenus: Story = {
  args: {
    trigger: <Button variant="outline">File Menu</Button>,
    children: (
      <>
        <MenuItem icon={<Plus className="h-4 w-4" />}>New</MenuItem>
        <MenuItem icon={<FileText className="h-4 w-4" />}>Open</MenuItem>
        <MenuSub>
          <MenuSubTrigger icon={<Download className="h-4 w-4" />}>
            Export
          </MenuSubTrigger>
          <MenuSubContent>
            <MenuItem>PDF</MenuItem>
            <MenuItem>Word</MenuItem>
            <MenuItem>Excel</MenuItem>
          </MenuSubContent>
        </MenuSub>
        <MenuSeparator />
        <MenuItem>Save</MenuItem>
        <MenuItem>Save As...</MenuItem>
      </>
    ),
  },
}

export const WithCheckboxItems: Story = {
  args: {
    trigger: <Button variant="outline">View Options</Button>,
    children: (
      <>
        <MenuLabel>Display Options</MenuLabel>
        <MenuCheckboxItem checked>Show Sidebar</MenuCheckboxItem>
        <MenuCheckboxItem checked>Show Toolbar</MenuCheckboxItem>
        <MenuCheckboxItem>Show Status Bar</MenuCheckboxItem>
        <MenuSeparator />
        <MenuLabel>Notifications</MenuLabel>
        <MenuCheckboxItem checked icon={<Bell className="h-4 w-4" />}>
          Push Notifications
        </MenuCheckboxItem>
        <MenuCheckboxItem icon={<Mail className="h-4 w-4" />}>
          Email Notifications
        </MenuCheckboxItem>
      </>
    ),
  },
}

export const WithRadioItems: Story = {
  args: {
    trigger: <Button variant="outline">Theme</Button>,
    children: (
      <>
        <MenuLabel>Choose Theme</MenuLabel>
        <MenuRadioGroup value="light">
          <MenuRadioItem value="light" icon={<Sun className="h-4 w-4" />}>
            Light
          </MenuRadioItem>
          <MenuRadioItem value="dark" icon={<Moon className="h-4 w-4" />}>
            Dark
          </MenuRadioItem>
          <MenuRadioItem value="system" icon={<Monitor className="h-4 w-4" />}>
            System
          </MenuRadioItem>
        </MenuRadioGroup>
      </>
    ),
  },
}

export const Compact: Story = {
  args: {
    variant: "compact",
    trigger: <Button variant="outline" size="sm">Compact Menu</Button>,
    children: (
      <>
        <MenuItem size="sm">Option 1</MenuItem>
        <MenuItem size="sm">Option 2</MenuItem>
        <MenuItem size="sm">Option 3</MenuItem>
      </>
    ),
  },
}

export const Bordered: Story = {
  args: {
    variant: "bordered",
    trigger: <Button variant="outline">Bordered Menu</Button>,
    children: (
      <>
        <MenuItem>Profile</MenuItem>
        <MenuItem>Settings</MenuItem>
        <MenuItem>Help</MenuItem>
      </>
    ),
  },
}

export const DifferentSizes: Story = {
  render: (args) => (
    <div className="flex gap-4">
      <Menu {...args} size="sm" trigger={<Button size="sm">Small</Button>}>
        <MenuItem size="sm">Small Item 1</MenuItem>
        <MenuItem size="sm">Small Item 2</MenuItem>
      </Menu>
      <Menu {...args} size="default" trigger={<Button>Default</Button>}>
        <MenuItem>Default Item 1</MenuItem>
        <MenuItem>Default Item 2</MenuItem>
      </Menu>
      <Menu {...args} size="lg" trigger={<Button size="lg">Large</Button>}>
        <MenuItem size="lg">Large Item 1</MenuItem>
        <MenuItem size="lg">Large Item 2</MenuItem>
      </Menu>
    </div>
  ),
}

export const WithGroups: Story = {
  args: {
    trigger: <Button variant="outline">Grouped Menu</Button>,
    children: (
      <>
        <MenuGroup>
          <MenuLabel>Account</MenuLabel>
          <MenuItem icon={<User className="h-4 w-4" />}>Profile</MenuItem>
          <MenuItem icon={<Settings className="h-4 w-4" />}>Settings</MenuItem>
        </MenuGroup>
        <MenuSeparator />
        <MenuGroup>
          <MenuLabel>Actions</MenuLabel>
          <MenuItem icon={<Edit className="h-4 w-4" />}>Edit</MenuItem>
          <MenuItem icon={<Share className="h-4 w-4" />}>Share</MenuItem>
          <MenuItem icon={<Trash2 className="h-4 w-4" />} variant="destructive">
            Delete
          </MenuItem>
        </MenuGroup>
      </>
    ),
  },
}

export const ComplexExample: Story = {
  args: {
    trigger: <Button variant="outline">Complex Menu</Button>,
    children: (
      <>
        <MenuGroup>
          <MenuLabel>File</MenuLabel>
          <MenuItem icon={<Plus className="h-4 w-4" />}>New</MenuItem>
          <MenuItem icon={<FileText className="h-4 w-4" />}>Open</MenuItem>
          <MenuItem>Save</MenuItem>
          <MenuSub>
            <MenuSubTrigger icon={<Download className="h-4 w-4" />}>
              Export
            </MenuSubTrigger>
            <MenuSubContent>
              <MenuItem>PDF</MenuItem>
              <MenuItem>Word</MenuItem>
              <MenuItem>Excel</MenuItem>
            </MenuSubContent>
          </MenuSub>
        </MenuGroup>
        <MenuSeparator />
        <MenuGroup>
          <MenuLabel>View</MenuLabel>
          <MenuCheckboxItem checked>Show Sidebar</MenuCheckboxItem>
          <MenuCheckboxItem checked>Show Toolbar</MenuCheckboxItem>
          <MenuRadioGroup value="light">
            <MenuRadioItem value="light" icon={<Sun className="h-4 w-4" />}>
              Light Theme
            </MenuRadioItem>
            <MenuRadioItem value="dark" icon={<Moon className="h-4 w-4" />}>
              Dark Theme
            </MenuRadioItem>
          </MenuRadioGroup>
        </MenuGroup>
        <MenuSeparator />
        <MenuItem icon={<LogOut className="h-4 w-4" />}>Logout</MenuItem>
      </>
    ),
  },
}

export const WithDisabledItems: Story = {
  args: {
    trigger: <Button variant="outline">Actions</Button>,
    children: (
      <>
        <MenuItem icon={<Edit className="h-4 w-4" />}>Edit</MenuItem>
        <MenuItem icon={<Share className="h-4 w-4" />} disabled>
          Share (Disabled)
        </MenuItem>
        <MenuItem icon={<Download className="h-4 w-4" />}>Download</MenuItem>
        <MenuSeparator />
        <MenuItem icon={<Trash2 className="h-4 w-4" />} variant="destructive">
          Delete
        </MenuItem>
      </>
    ),
  },
}

export const DifferentAlignments: Story = {
  render: (args) => (
    <div className="flex gap-4">
      <Menu {...args} align="start" trigger={<Button>Start</Button>}>
        <MenuItem>Start aligned</MenuItem>
        <MenuItem>Menu item</MenuItem>
      </Menu>
      <Menu {...args} align="center" trigger={<Button>Center</Button>}>
        <MenuItem>Center aligned</MenuItem>
        <MenuItem>Menu item</MenuItem>
      </Menu>
      <Menu {...args} align="end" trigger={<Button>End</Button>}>
        <MenuItem>End aligned</MenuItem>
        <MenuItem>Menu item</MenuItem>
      </Menu>
    </div>
  ),
}

export const DifferentSides: Story = {
  render: (args) => (
    <div className="flex gap-4">
      <Menu {...args} side="top" trigger={<Button>Top</Button>}>
        <MenuItem>Top side</MenuItem>
        <MenuItem>Menu item</MenuItem>
      </Menu>
      <Menu {...args} side="right" trigger={<Button>Right</Button>}>
        <MenuItem>Right side</MenuItem>
        <MenuItem>Menu item</MenuItem>
      </Menu>
      <Menu {...args} side="bottom" trigger={<Button>Bottom</Button>}>
        <MenuItem>Bottom side</MenuItem>
        <MenuItem>Menu item</MenuItem>
      </Menu>
      <Menu {...args} side="left" trigger={<Button>Left</Button>}>
        <MenuItem>Left side</MenuItem>
        <MenuItem>Menu item</MenuItem>
      </Menu>
    </div>
  ),
}

export const SocialMediaMenu: Story = {
  args: {
    trigger: <Button variant="outline">Social Actions</Button>,
    children: (
      <>
        <MenuItem icon={<Heart className="h-4 w-4" />}>Like</MenuItem>
        <MenuItem icon={<Star className="h-4 w-4" />}>Favorite</MenuItem>
        <MenuItem icon={<Bookmark className="h-4 w-4" />}>Save</MenuItem>
        <MenuItem icon={<Share className="h-4 w-4" />}>Share</MenuItem>
        <MenuSeparator />
        <MenuItem icon={<Edit className="h-4 w-4" />}>Edit Post</MenuItem>
        <MenuItem icon={<Trash2 className="h-4 w-4" />} variant="destructive">
          Delete Post
        </MenuItem>
      </>
    ),
  },
}

export const UserProfileMenu: Story = {
  args: {
    trigger: (
      <Button variant="ghost" className="flex items-center gap-2">
        <div className="h-8 w-8 rounded-full bg-primary" />
        <span>John Doe</span>
        <ChevronDown className="h-4 w-4" />
      </Button>
    ),
    children: (
      <>
        <MenuGroup>
          <MenuLabel>Account</MenuLabel>
          <MenuItem icon={<User className="h-4 w-4" />}>Profile</MenuItem>
          <MenuItem icon={<Settings className="h-4 w-4" />}>Settings</MenuItem>
          <MenuItem icon={<CreditCard className="h-4 w-4" />}>Billing</MenuItem>
        </MenuGroup>
        <MenuSeparator />
        <MenuGroup>
          <MenuLabel>Preferences</MenuLabel>
          <MenuRadioGroup value="light">
            <MenuRadioItem value="light" icon={<Sun className="h-4 w-4" />}>
              Light Mode
            </MenuRadioItem>
            <MenuRadioItem value="dark" icon={<Moon className="h-4 w-4" />}>
              Dark Mode
            </MenuRadioItem>
          </MenuRadioGroup>
        </MenuGroup>
        <MenuSeparator />
        <MenuItem icon={<LogOut className="h-4 w-4" />}>Logout</MenuItem>
      </>
    ),
  },
}

