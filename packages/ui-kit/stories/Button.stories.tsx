import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '../components/ui/button';
import { Loader2, ArrowRight, Heart, Star, Download, Upload } from 'lucide-react';

const meta: Meta<typeof Button> = {
  title: 'UI/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'secondary', 'outlined', 'ghost'],
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'default', 'lg', 'xl', 'icon', 'icon-sm', 'icon-lg'],
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
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Button',
    variant: 'default',
    size: 'default',
  },
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Button variant="default">Default</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="outlined">Outlined</Button>
      <Button variant="ghost">Ghost</Button>
    </div>
  ),
};

export const AllSizes: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-4">
      <Button size="sm">Small</Button>
      <Button size="default">Default</Button>
      <Button size="lg">Large</Button>
      <Button size="xl">Extra Large</Button>
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
