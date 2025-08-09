import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Input } from '../components/ui/input';
import { Search, Mail, Lock, User, Phone } from 'lucide-react';

const meta: Meta<typeof Input> = {
  title: 'UI/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['text', 'email', 'password', 'number', 'tel', 'url', 'search'],
    },
    variant: {
      control: { type: 'select' },
      options: ['default', 'filled', 'outlined', 'ghost'],
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'default', 'lg', 'xl'],
    },
    error: {
      control: { type: 'boolean' },
    },
    clearable: {
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
    placeholder: 'Enter text...',
  },
};

export const WithLabel: Story = {
  args: {
    label: 'Email',
    type: 'email',
    placeholder: 'Enter your email',
  },
};

export const WithHelperText: Story = {
  args: {
    label: 'Password',
    type: 'password',
    placeholder: 'Enter your password',
    helperText: 'Password must be at least 8 characters long',
  },
};

export const WithError: Story = {
  args: {
    label: 'Email',
    type: 'email',
    placeholder: 'Enter your email',
    error: true,
    errorMessage: 'Please enter a valid email address',
  },
};

export const Variants: Story = {
  render: () => (
    <div className="grid w-full max-w-sm gap-4">
      <Input variant="default" placeholder="Default variant" />
      <Input variant="filled" placeholder="Filled variant" />
      <Input variant="outlined" placeholder="Outlined variant" />
      <Input variant="ghost" placeholder="Ghost variant" />
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="grid w-full max-w-sm gap-4">
      <Input size="sm" placeholder="Small size" />
      <Input size="default" placeholder="Default size" />
      <Input size="lg" placeholder="Large size" />
      <Input size="xl" placeholder="Extra large size" />
    </div>
  ),
};

export const WithIcons: Story = {
  render: () => (
    <div className="grid w-full max-w-sm gap-4">
      <Input
        leftIcon={<Search size={16} />}
        placeholder="Search..."
      />
      <Input
        leftIcon={<Mail size={16} />}
        placeholder="Enter email"
        type="email"
      />
      <Input
        leftIcon={<User size={16} />}
        rightIcon={<Phone size={16} />}
        placeholder="Enter phone number"
        type="tel"
      />
    </div>
  ),
};

export const PasswordWithToggle: Story = {
  args: {
    label: 'Password',
    type: 'password',
    placeholder: 'Enter your password',
  },
};

export const SearchWithClear: Story = {
  args: {
    type: 'search',
    placeholder: 'Search...',
    clearable: true,
  },
};

export const WithClearButton: Story = {
  args: {
    label: 'Search',
    placeholder: 'Enter search term...',
    clearable: true,
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled Input',
    placeholder: 'This input is disabled',
    disabled: true,
  },
};

export const NotFullWidth: Story = {
  args: {
    label: 'Not Full Width',
    placeholder: 'This input has custom width',
    fullWidth: false,
    style: { width: '200px' },
  },
};

export const DifferentTypes: Story = {
  render: () => (
    <div className="grid w-full max-w-sm gap-4">
      <Input
        label="Text"
        type="text"
        placeholder="Enter text"
      />
      <Input
        label="Email"
        type="email"
        placeholder="Enter email"
      />
      <Input
        label="Password"
        type="password"
        placeholder="Enter password"
      />
      <Input
        label="Number"
        type="number"
        placeholder="Enter number"
      />
      <Input
        label="Phone"
        type="tel"
        placeholder="Enter phone number"
      />
      <Input
        label="URL"
        type="url"
        placeholder="Enter URL"
      />
      <Input
        label="Search"
        type="search"
        placeholder="Search..."
      />
    </div>
  ),
};

export const ComplexExample: Story = {
  render: () => (
    <div className="grid w-full max-w-md gap-6 p-6 border rounded-lg">
      <div>
        <h3 className="text-lg font-semibold mb-4">Registration Form</h3>
        <div className="space-y-4">
          <Input
            label="Full Name"
            leftIcon={<User size={16} />}
            placeholder="Enter your full name"
          />
          <Input
            label="Email"
            type="email"
            leftIcon={<Mail size={16} />}
            placeholder="Enter your email"
            helperText="We'll never share your email"
          />
          <Input
            label="Password"
            type="password"
            leftIcon={<Lock size={16} />}
            placeholder="Enter your password"
            error={true}
            errorMessage="Password must be at least 8 characters"
          />
          <Input
            label="Phone Number"
            type="tel"
            leftIcon={<Phone size={16} />}
            placeholder="Enter your phone number"
          />
        </div>
      </div>
    </div>
  ),
};
