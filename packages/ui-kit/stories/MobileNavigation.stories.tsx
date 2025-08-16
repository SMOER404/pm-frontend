import type { Meta, StoryObj } from "@storybook/react"
import { useState } from "react"
import { MobileNavigation, type MobileNavigationItem } from "@/components/ui/mobile-navigation"
import {
  Home,
  Search,
  Plus,
  Heart,
  User,
  Settings,
  Bell,
  Mail,
  ShoppingCart,
  Bookmark,
  Camera,
  Map,
  Music,
  Video,
  Gamepad2,
} from "lucide-react"

const meta: Meta<typeof MobileNavigation> = {
  title: "UI/MobileNavigation",
  component: MobileNavigation,
  parameters: {
    layout: "fullscreen",
    viewport: {
      defaultViewport: "mobile1",
    },
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["default", "elevated", "bordered"],
    },
    size: {
      control: { type: "select" },
      options: ["sm", "default", "lg"],
    },
    showLabels: {
      control: { type: "boolean" },
    },
    maxItems: {
      control: { type: "number", min: 1, max: 10 },
    },
  },
  decorators: [
    (Story) => (
      <div className="h-screen bg-background">
        <div className="h-full flex flex-col">
          <div className="flex-1 p-4">
            <h1 className="text-2xl font-bold mb-4">Mobile Navigation Demo</h1>
            <p className="text-muted-foreground">
              This is a demo of the mobile navigation component. Scroll down to see the navigation bar at the bottom.
            </p>
            <div className="mt-8 space-y-4">
              <div className="h-32 bg-muted rounded-lg flex items-center justify-center">
                <p className="text-muted-foreground">Content Area 1</p>
              </div>
              <div className="h-32 bg-muted rounded-lg flex items-center justify-center">
                <p className="text-muted-foreground">Content Area 2</p>
              </div>
              <div className="h-32 bg-muted rounded-lg flex items-center justify-center">
                <p className="text-muted-foreground">Content Area 3</p>
              </div>
            </div>
          </div>
          <Story />
        </div>
      </div>
    ),
  ],
}

export default meta
type Story = StoryObj<typeof meta>

const defaultItems: MobileNavigationItem[] = [
  {
    id: "home",
    label: "Home",
    icon: <Home className="h-5 w-5" />,
  },
  {
    id: "search",
    label: "Search",
    icon: <Search className="h-5 w-5" />,
  },
  {
    id: "create",
    label: "Create",
    icon: <Plus className="h-5 w-5" />,
  },
  {
    id: "favorites",
    label: "Favorites",
    icon: <Heart className="h-5 w-5" />,
  },
  {
    id: "profile",
    label: "Profile",
    icon: <User className="h-5 w-5" />,
  },
]

const socialItems: MobileNavigationItem[] = [
  {
    id: "home",
    label: "Home",
    icon: <Home className="h-5 w-5" />,
  },
  {
    id: "search",
    label: "Search",
    icon: <Search className="h-5 w-5" />,
  },
  {
    id: "notifications",
    label: "Notifications",
    icon: <Bell className="h-5 w-5" />,
    badge: 3,
  },
  {
    id: "messages",
    label: "Messages",
    icon: <Mail className="h-5 w-5" />,
    badge: 12,
    badgeVariant: "destructive",
  },
  {
    id: "profile",
    label: "Profile",
    icon: <User className="h-5 w-5" />,
  },
]

const ecommerceItems: MobileNavigationItem[] = [
  {
    id: "home",
    label: "Home",
    icon: <Home className="h-5 w-5" />,
  },
  {
    id: "search",
    label: "Search",
    icon: <Search className="h-5 w-5" />,
  },
  {
    id: "cart",
    label: "Cart",
    icon: <ShoppingCart className="h-5 w-5" />,
    badge: 2,
  },
  {
    id: "wishlist",
    label: "Wishlist",
    icon: <Heart className="h-5 w-5" />,
  },
  {
    id: "profile",
    label: "Profile",
    icon: <User className="h-5 w-5" />,
  },
]

const entertainmentItems: MobileNavigationItem[] = [
  {
    id: "home",
    label: "Home",
    icon: <Home className="h-5 w-5" />,
  },
  {
    id: "music",
    label: "Music",
    icon: <Music className="h-5 w-5" />,
  },
  {
    id: "video",
    label: "Video",
    icon: <Video className="h-5 w-5" />,
  },
  {
    id: "games",
    label: "Games",
    icon: <Gamepad2 className="h-5 w-5" />,
  },
  {
    id: "profile",
    label: "Profile",
    icon: <User className="h-5 w-5" />,
  },
]

export const Default: Story = {
  args: {
    items: defaultItems,
    activeItem: "home",
  },
}

export const WithBadges: Story = {
  args: {
    items: socialItems,
    activeItem: "home",
  },
}

export const Ecommerce: Story = {
  args: {
    items: ecommerceItems,
    activeItem: "home",
  },
}

export const Entertainment: Story = {
  args: {
    items: entertainmentItems,
    activeItem: "home",
  },
}

export const WithoutLabels: Story = {
  args: {
    items: defaultItems,
    activeItem: "home",
    showLabels: false,
  },
}

export const Small: Story = {
  args: {
    items: defaultItems,
    activeItem: "home",
    size: "sm",
  },
}

export const Large: Story = {
  args: {
    items: defaultItems,
    activeItem: "home",
    size: "lg",
  },
}

export const Elevated: Story = {
  args: {
    items: defaultItems,
    activeItem: "home",
    variant: "elevated",
  },
}

export const Bordered: Story = {
  args: {
    items: defaultItems,
    activeItem: "home",
    variant: "bordered",
  },
}

export const WithDisabledItems: Story = {
  args: {
    items: [
      {
        id: "home",
        label: "Home",
        icon: <Home className="h-5 w-5" />,
      },
      {
        id: "search",
        label: "Search",
        icon: <Search className="h-5 w-5" />,
        disabled: true,
      },
      {
        id: "create",
        label: "Create",
        icon: <Plus className="h-5 w-5" />,
      },
      {
        id: "favorites",
        label: "Favorites",
        icon: <Heart className="h-5 w-5" />,
      },
      {
        id: "profile",
        label: "Profile",
        icon: <User className="h-5 w-5" />,
      },
    ],
    activeItem: "home",
  },
}

export const MaxItems: Story = {
  args: {
    items: [
      {
        id: "home",
        label: "Home",
        icon: <Home className="h-5 w-5" />,
      },
      {
        id: "search",
        label: "Search",
        icon: <Search className="h-5 w-5" />,
      },
      {
        id: "create",
        label: "Create",
        icon: <Plus className="h-5 w-5" />,
      },
      {
        id: "favorites",
        label: "Favorites",
        icon: <Heart className="h-5 w-5" />,
      },
      {
        id: "profile",
        label: "Profile",
        icon: <User className="h-5 w-5" />,
      },
      {
        id: "settings",
        label: "Settings",
        icon: <Settings className="h-5 w-5" />,
      },
      {
        id: "bookmark",
        label: "Bookmarks",
        icon: <Bookmark className="h-5 w-5" />,
      },
    ],
    activeItem: "home",
    maxItems: 4,
  },
}

export const Interactive: Story = {
  render: (args) => {
    const [activeItem, setActiveItem] = useState("home")
    
    const handleItemClick = (item: MobileNavigationItem) => {
      setActiveItem(item.id)
    }
    
    return (
      <MobileNavigation
        {...args}
        items={defaultItems}
        activeItem={activeItem}
        onItemClick={handleItemClick}
      />
    )
  },
}

export const DifferentBadgeVariants: Story = {
  args: {
    items: [
      {
        id: "home",
        label: "Home",
        icon: <Home className="h-5 w-5" />,
      },
      {
        id: "search",
        label: "Search",
        icon: <Search className="h-5 w-5" />,
        badge: 5,
        badgeVariant: "default",
      },
      {
        id: "notifications",
        label: "Notifications",
        icon: <Bell className="h-5 w-5" />,
        badge: 12,
        badgeVariant: "destructive",
      },
      {
        id: "messages",
        label: "Messages",
        icon: <Mail className="h-5 w-5" />,
        badge: "New",
        badgeVariant: "secondary",
      },
      {
        id: "profile",
        label: "Profile",
        icon: <User className="h-5 w-5" />,
        badge: 99,
        badgeVariant: "outline",
      },
    ],
    activeItem: "home",
  },
}

export const CameraApp: Story = {
  args: {
    items: [
      {
        id: "gallery",
        label: "Gallery",
        icon: <Home className="h-5 w-5" />,
      },
      {
        id: "camera",
        label: "Camera",
        icon: <Camera className="h-5 w-5" />,
      },
      {
        id: "favorites",
        label: "Favorites",
        icon: <Heart className="h-5 w-5" />,
        badge: 8,
      },
      {
        id: "map",
        label: "Map",
        icon: <Map className="h-5 w-5" />,
      },
      {
        id: "profile",
        label: "Profile",
        icon: <User className="h-5 w-5" />,
      },
    ],
    activeItem: "camera",
  },
}

