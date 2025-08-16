import type { Meta, StoryObj } from '@storybook/react'
import { ToggleButton } from '../components/ui/toggle-button'
import { Bold, Italic, Underline, Star, Heart, ThumbsUp, Settings, Bell } from 'lucide-react'

const meta: Meta<typeof ToggleButton> = {
  title: 'Inputs/ToggleButton',
  component: ToggleButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'secondary', 'outline', 'ghost', 'destructive', 'success', 'warning', 'info'],
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'default', 'lg', 'xl', 'icon', 'icon-sm', 'icon-lg'],
    },
    pressed: {
      control: { type: 'boolean' },
    },
    loading: {
      control: { type: 'boolean' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
    fullWidth: {
      control: { type: 'boolean' },
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: "Toggle Button",
  },
}

export const Pressed: Story = {
  args: {
    children: "Pressed Button",
    pressed: true,
  },
}

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: "Secondary",
  },
}

export const Outline: Story = {
  args: {
    variant: 'outline',
    children: "Outline",
  },
}

export const Ghost: Story = {
  args: {
    variant: 'ghost',
    children: "Ghost",
  },
}

export const Destructive: Story = {
  args: {
    variant: 'destructive',
    children: "Destructive",
  },
}

export const Success: Story = {
  args: {
    variant: 'success',
    children: "Success",
  },
}

export const Warning: Story = {
  args: {
    variant: 'warning',
    children: "Warning",
  },
}

export const Info: Story = {
  args: {
    variant: 'info',
    children: "Info",
  },
}

export const Small: Story = {
  args: {
    size: 'sm',
    children: "Small",
  },
}

export const Large: Story = {
  args: {
    size: 'lg',
    children: "Large",
  },
}

export const ExtraLarge: Story = {
  args: {
    size: 'xl',
    children: "Extra Large",
  },
}

export const IconOnly: Story = {
  args: {
    size: 'icon',
    icon: <Star className="h-4 w-4" />,
  },
}

export const IconOnlySmall: Story = {
  args: {
    size: 'icon-sm',
    icon: <Heart className="h-3 w-3" />,
  },
}

export const IconOnlyLarge: Story = {
  args: {
    size: 'icon-lg',
    icon: <Settings className="h-6 w-6" />,
  },
}

export const WithIconLeft: Story = {
  args: {
    icon: <Bell className="h-4 w-4" />,
    iconPosition: 'left',
    children: "Notifications",
  },
}

export const WithIconRight: Story = {
  args: {
    icon: <Settings className="h-4 w-4" />,
    iconPosition: 'right',
    children: "Settings",
  },
}

export const Loading: Story = {
  args: {
    loading: true,
    children: "Loading",
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
    children: "Disabled",
  },
}

export const FullWidth: Story = {
  args: {
    fullWidth: true,
    children: "Full Width Button",
  },
}

export const TextFormatting: Story = {
  render: () => {
    const [bold, setBold] = React.useState(false)
    const [italic, setItalic] = React.useState(false)
    const [underline, setUnderline] = React.useState(false)
    
    return (
      <div className="flex gap-2">
        <ToggleButton
          pressed={bold}
          onPressedChange={setBold}
          icon={<Bold className="h-4 w-4" />}
          size="icon"
          aria-label="Bold"
        />
        <ToggleButton
          pressed={italic}
          onPressedChange={setItalic}
          icon={<Italic className="h-4 w-4" />}
          size="icon"
          aria-label="Italic"
        />
        <ToggleButton
          pressed={underline}
          onPressedChange={setUnderline}
          icon={<Underline className="h-4 w-4" />}
          size="icon"
          aria-label="Underline"
        />
      </div>
    )
  },
}

export const InteractiveExample: Story = {
  render: () => {
    const [pressed, setPressed] = React.useState(false)
    
    return (
      <div className="space-y-4">
        <ToggleButton
          pressed={pressed}
          onPressedChange={setPressed}
          icon={<Star className="h-4 w-4" />}
          iconPosition="left"
        >
          {pressed ? "Favorited" : "Add to Favorites"}
        </ToggleButton>
        <p className="text-sm text-muted-foreground">
          State: {pressed ? "Pressed" : "Unpressed"}
        </p>
      </div>
    )
  },
}

export const MultipleToggleButtons: Story = {
  render: () => {
    const [states, setStates] = React.useState({
      like: false,
      share: false,
      bookmark: false,
    })
    
    const handleToggle = (key: keyof typeof states) => {
      setStates(prev => ({ ...prev, [key]: !prev[key] }))
    }
    
    return (
      <div className="space-y-4">
        <div className="flex gap-2">
          <ToggleButton
            pressed={states.like}
            onPressedChange={() => handleToggle('like')}
            icon={<ThumbsUp className="h-4 w-4" />}
            iconPosition="left"
            variant={states.like ? 'success' : 'default'}
          >
            {states.like ? "Liked" : "Like"}
          </ToggleButton>
          
          <ToggleButton
            pressed={states.share}
            onPressedChange={() => handleToggle('share')}
            icon={<Heart className="h-4 w-4" />}
            iconPosition="left"
            variant={states.share ? 'destructive' : 'default'}
          >
            {states.share ? "Shared" : "Share"}
          </ToggleButton>
          
          <ToggleButton
            pressed={states.bookmark}
            onPressedChange={() => handleToggle('bookmark')}
            icon={<Star className="h-4 w-4" />}
            iconPosition="left"
            variant={states.bookmark ? 'warning' : 'default'}
          >
            {states.bookmark ? "Bookmarked" : "Bookmark"}
          </ToggleButton>
        </div>
        
        <div className="text-sm text-muted-foreground">
          <p>Like: {states.like ? "Yes" : "No"}</p>
          <p>Share: {states.share ? "Yes" : "No"}</p>
          <p>Bookmark: {states.bookmark ? "Yes" : "No"}</p>
        </div>
      </div>
    )
  },
}

export const AllVariants: Story = {
  render: () => (
    <div className="grid grid-cols-2 gap-4">
      <ToggleButton variant="default">Default</ToggleButton>
      <ToggleButton variant="secondary">Secondary</ToggleButton>
      <ToggleButton variant="outline">Outline</ToggleButton>
      <ToggleButton variant="ghost">Ghost</ToggleButton>
      <ToggleButton variant="destructive">Destructive</ToggleButton>
      <ToggleButton variant="success">Success</ToggleButton>
      <ToggleButton variant="warning">Warning</ToggleButton>
      <ToggleButton variant="info">Info</ToggleButton>
    </div>
  ),
}

export const AllSizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <ToggleButton size="sm">Small</ToggleButton>
      <ToggleButton size="default">Default</ToggleButton>
      <ToggleButton size="lg">Large</ToggleButton>
      <ToggleButton size="xl">Extra Large</ToggleButton>
    </div>
  ),
}

export const IconSizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <ToggleButton size="icon-sm" icon={<Star className="h-3 w-3" />} />
      <ToggleButton size="icon" icon={<Star className="h-4 w-4" />} />
      <ToggleButton size="icon-lg" icon={<Star className="h-6 w-6" />} />
    </div>
  ),
}

export const LoadingStates: Story = {
  render: () => (
    <div className="space-y-4">
      <ToggleButton loading>Loading Button</ToggleButton>
      <ToggleButton loading size="icon" icon={<Settings className="h-4 w-4" />} />
      <ToggleButton loading variant="outline">Loading Outline</ToggleButton>
    </div>
  ),
}

export const DisabledStates: Story = {
  render: () => (
    <div className="space-y-4">
      <ToggleButton disabled>Disabled Button</ToggleButton>
      <ToggleButton disabled size="icon" icon={<Settings className="h-4 w-4" />} />
      <ToggleButton disabled variant="outline">Disabled Outline</ToggleButton>
      <ToggleButton disabled pressed>Disabled Pressed</ToggleButton>
    </div>
  ),
}

export const FormExample: Story = {
  render: () => {
    const [preferences, setPreferences] = React.useState({
      email: false,
      sms: false,
      push: false,
    })
    
    const handleToggle = (key: keyof typeof preferences) => {
      setPreferences(prev => ({ ...prev, [key]: !prev[key] }))
    }
    
    return (
      <div className="space-y-4 w-80">
        <h3 className="text-lg font-semibold">Notification Preferences</h3>
        
        <div className="space-y-2">
          <ToggleButton
            pressed={preferences.email}
            onPressedChange={() => handleToggle('email')}
            fullWidth
            icon={<Bell className="h-4 w-4" />}
            iconPosition="left"
          >
            Email Notifications
          </ToggleButton>
          
          <ToggleButton
            pressed={preferences.sms}
            onPressedChange={() => handleToggle('sms')}
            fullWidth
            icon={<Bell className="h-4 w-4" />}
            iconPosition="left"
          >
            SMS Notifications
          </ToggleButton>
          
          <ToggleButton
            pressed={preferences.push}
            onPressedChange={() => handleToggle('push')}
            fullWidth
            icon={<Bell className="h-4 w-4" />}
            iconPosition="left"
          >
            Push Notifications
          </ToggleButton>
        </div>
        
        <div className="text-sm text-muted-foreground">
          <p>Email: {preferences.email ? "Enabled" : "Disabled"}</p>
          <p>SMS: {preferences.sms ? "Enabled" : "Disabled"}</p>
          <p>Push: {preferences.push ? "Enabled" : "Disabled"}</p>
        </div>
      </div>
    )
  },
}
