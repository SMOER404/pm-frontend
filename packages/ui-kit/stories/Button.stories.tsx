<<<<<<< HEAD
import type { Meta, StoryObj } from "@storybook/react"
import { Button } from "../components/ui/button"

const meta: Meta<typeof Button> = {
  title: "UI/Button",
=======
import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '../components/ui/button';
import { Loader2, ArrowRight, Heart, Star, Download, Upload } from 'lucide-react';

const meta: Meta<typeof Button> = {
  title: 'UI/Button',
>>>>>>> c99be3de29bedc1661ddfd712aa17d608983b191
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
<<<<<<< HEAD
      control: { type: "select" },
      options: ["default", "destructive", "outline", "secondary", "ghost", "link"],
    },
    size: {
      control: { type: "select" },
      options: ["default", "sm", "lg", "icon"],
    },
    hover: {
      control: { type: "boolean" },
=======
      control: { type: 'select' },
      options: ['default', 'secondary', 'outlined', 'ghost'],
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'default', 'lg', 'xl', 'icon', 'icon-sm', 'icon-lg'],
    },
    loading: {
      control: { type: 'boolean' },
>>>>>>> c99be3de29bedc1661ddfd712aa17d608983b191
    },
    disabled: {
      control: { type: 'boolean' },
    },
    fullWidth: {
      control: { type: 'boolean' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
<<<<<<< HEAD
    children: "Button",
    variant: "default",
    size: "default",
    hover: false,
=======
    children: 'Button',
    variant: 'default',
    size: 'default',
>>>>>>> c99be3de29bedc1661ddfd712aa17d608983b191
  },
};

<<<<<<< HEAD
export const Secondary: Story = {
  args: {
    children: "Secondary",
    variant: "secondary",
    size: "default",
    hover: false,
  },
}

export const Outline: Story = {
  args: {
    children: "Outline",
    variant: "outline",
    size: "default",
    hover: false,
  },
}

export const Ghost: Story = {
  args: {
    children: "Ghost",
    variant: "ghost",
    size: "default",
    hover: false,
  },
}

export const Link: Story = {
  args: {
    children: "Link",
    variant: "link",
    size: "default",
    hover: false,
  },
}

export const Destructive: Story = {
  args: {
    children: "Destructive",
    variant: "destructive",
    size: "default",
    hover: false,
  },
}

export const WithHover: Story = {
  args: {
    children: "Hover Enabled",
    variant: "outline",
    size: "default",
    hover: true,
  },
}

export const Small: Story = {
  args: {
    children: "Small",
    variant: "default",
    size: "sm",
    hover: false,
  },
}

export const Large: Story = {
  args: {
    children: "Large",
    variant: "default",
    size: "lg",
    hover: false,
  },
}

export const Disabled: Story = {
  args: {
    children: "Disabled",
    variant: "default",
    size: "default",
    hover: false,
    disabled: true,
  },
}

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Button variant="default" hover={false}>Default</Button>
      <Button variant="secondary" hover={false}>Secondary</Button>
      <Button variant="outline" hover={false}>Outline</Button>
      <Button variant="ghost" hover={false}>Ghost</Button>
      <Button variant="link" hover={false}>Link</Button>
      <Button variant="destructive" hover={false}>Destructive</Button>
    </div>
  ),
}

export const AllVariantsWithHover: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Button variant="default" hover={true}>Default</Button>
      <Button variant="secondary" hover={true}>Secondary</Button>
      <Button variant="outline" hover={true}>Outline</Button>
      <Button variant="ghost" hover={true}>Ghost</Button>
      <Button variant="link" hover={true}>Link</Button>
      <Button variant="destructive" hover={true}>Destructive</Button>
=======
export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Button variant="default">Default</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="outlined">Outlined</Button>
      <Button variant="ghost">Ghost</Button>
>>>>>>> c99be3de29bedc1661ddfd712aa17d608983b191
    </div>
  ),
};

export const AllSizes: Story = {
  render: () => (
<<<<<<< HEAD
    <div className="flex flex-wrap gap-4 items-center">
      <Button size="sm" hover={false}>Small</Button>
      <Button size="default" hover={false}>Default</Button>
      <Button size="lg" hover={false}>Large</Button>
    </div>
  ),
}

export const AllSizesWithHover: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4 items-center">
      <Button size="sm" hover={true}>Small</Button>
      <Button size="default" hover={true}>Default</Button>
      <Button size="lg" hover={true}>Large</Button>
=======
    <div className="flex flex-wrap items-center gap-4">
      <Button size="sm">Small</Button>
      <Button size="default">Default</Button>
      <Button size="lg">Large</Button>
      <Button size="xl">Extra Large</Button>
>>>>>>> c99be3de29bedc1661ddfd712aa17d608983b191
    </div>
  ),
};

export const WithIcons: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Button leftIcon={<Heart className="h-4 w-4" />}>
        Like
      </Button>
      <Button rightIcon={<ArrowRight className="h-4 w-4" />}>
        Continue
      </Button>
      <Button leftIcon={<Star className="h-4 w-4" />} rightIcon={<ArrowRight className="h-4 w-4" />}>
        Rate & Continue
      </Button>
    </div>
  ),
};

export const WithStartEndIcons: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Button startIcon={<Download className="h-4 w-4" />}>
        Download
      </Button>
      <Button endIcon={<Upload className="h-4 w-4" />}>
        Upload
      </Button>
      <Button startIcon={<Heart className="h-4 w-4" />} endIcon={<ArrowRight className="h-4 w-4" />}>
        Like & Continue
      </Button>
    </div>
  ),
};

export const FullWidth: Story = {
  render: () => (
    <div className="w-full max-w-md space-y-4">
      <Button fullWidth>Full Width Button</Button>
      <Button fullWidth variant="secondary">
        Full Width Secondary
      </Button>
      <Button fullWidth variant="outlined">
        Full Width Outlined
      </Button>
      <Button fullWidth variant="ghost">
        Full Width Ghost
      </Button>
    </div>
  ),
};

export const IconButtons: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-4">
      <Button size="icon-sm" variant="default">
        <Heart className="h-4 w-4" />
      </Button>
      <Button size="icon" variant="secondary">
        <Star className="h-4 w-4" />
      </Button>
      <Button size="icon-lg" variant="outlined">
        <ArrowRight className="h-6 w-6" />
      </Button>
    </div>
  ),
};

export const LoadingStates: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Button loading>Loading...</Button>
      <Button loading loadingText="Saving...">
        Save
      </Button>
      <Button loading variant="secondary">
        Processing
      </Button>
      <Button loading variant="outlined">
        Submitting
      </Button>
    </div>
  ),
};

export const Disabled: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Button disabled>Disabled Default</Button>
      <Button disabled variant="secondary">
        Disabled Secondary
      </Button>
      <Button disabled variant="outlined">
        Disabled Outlined
      </Button>
      <Button disabled variant="ghost">
        Disabled Ghost
      </Button>
    </div>
  ),
};

export const Interactive: Story = {
  args: {
    children: 'Click me!',
    variant: 'default',
    size: 'default',
    onClick: () => alert('Button clicked!'),
  },
};

export const Accessibility: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Button aria-label="Add to favorites">
        <Heart className="h-4 w-4" />
      </Button>
      <Button aria-label="Submit form" variant="secondary">
        Submit
      </Button>
      <Button aria-label="Cancel operation" variant="outlined">
        Cancel
      </Button>
    </div>
  ),
};
