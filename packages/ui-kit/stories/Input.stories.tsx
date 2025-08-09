import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Input } from '../components/ui/input';
import { Search, Mail, Lock, User, Phone, DollarSign, Hash } from 'lucide-react';

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
      options: ['default', 'filled', 'outlined', 'ghost', 'bevel'],
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
    loading: {
      control: { type: 'boolean' },
    },
    bevelBox: {
      control: { type: 'boolean' },
    },
    bevelSize: {
      control: { type: 'select' },
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
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

export const WithValidation: Story = {
  args: {
    label: 'Username',
    placeholder: 'Enter username',
    validation: {
      required: true,
      minLength: 3,
      maxLength: 20,
      pattern: /^[a-zA-Z0-9_]+$/,
    },
  },
};

export const Variants: Story = {
  render: () => (
    <div className="grid w-full max-w-sm gap-4">
      <Input variant="default" placeholder="Default variant" />
      <Input variant="filled" placeholder="Filled variant" />
      <Input variant="outlined" placeholder="Outlined variant" />
      <Input variant="ghost" placeholder="Ghost variant" />
      <Input variant="bevel" bevelBox={true} placeholder="Bevel variant" />
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

export const WithPrefixAndSuffix: Story = {
  render: () => (
    <div className="grid w-full max-w-sm gap-4">
      <Input
        prefix="$"
        placeholder="0.00"
        type="number"
      />
      <Input
        suffix="kg"
        placeholder="0"
        type="number"
      />
      <Input
        prefix="@"
        suffix=".com"
        placeholder="username"
      />
      <Input
        prefix={<Hash size={14} />}
        placeholder="Enter tag"
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

export const WithLoading: Story = {
  args: {
    label: 'Searching...',
    placeholder: 'Search in progress',
    loading: true,
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

export const WithMask: Story = {
  render: () => (
    <div className="grid w-full max-w-sm gap-4">
      <Input
        label="Phone Number"
        placeholder="(555) 123-4567"
        mask="(000) 000-0000"
        type="tel"
      />
      <Input
        label="Credit Card"
        placeholder="1234 5678 9012 3456"
        mask="0000 0000 0000 0000"
        type="text"
      />
      <Input
        label="Date"
        placeholder="MM/DD/YYYY"
        mask="00/00/0000"
        type="text"
      />
    </div>
  ),
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

export const BevelBoxVariants: Story = {
  render: () => (
    <div className="grid w-full max-w-sm gap-4">
      <Input
        label="Small Bevel"
        bevelBox={true}
        bevelSize="sm"
        placeholder="Small bevel input"
      />
      <Input
        label="Medium Bevel"
        bevelBox={true}
        bevelSize="md"
        placeholder="Medium bevel input"
      />
      <Input
        label="Large Bevel"
        bevelBox={true}
        bevelSize="lg"
        placeholder="Large bevel input"
      />
      <Input
        label="Extra Large Bevel"
        bevelBox={true}
        bevelSize="xl"
        placeholder="Extra large bevel input"
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
            validation={{ required: true, minLength: 2 }}
          />
          <Input
            label="Email"
            type="email"
            leftIcon={<Mail size={16} />}
            placeholder="Enter your email"
            helperText="We'll never share your email"
            validation={{ required: true, pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ }}
          />
          <Input
            label="Password"
            type="password"
            leftIcon={<Lock size={16} />}
            placeholder="Enter your password"
            validation={{ required: true, minLength: 8 }}
          />
          <Input
            label="Phone Number"
            type="tel"
            leftIcon={<Phone size={16} />}
            placeholder="(555) 123-4567"
            mask="(000) 000-0000"
          />
          <Input
            label="Salary"
            type="number"
            prefix={<DollarSign size={14} />}
            placeholder="0"
            helperText="Annual salary in USD"
          />
        </div>
      </div>
    </div>
  ),
};

export const AccessibleExample: Story = {
  render: () => (
    <div className="grid w-full max-w-sm gap-4">
      <Input
        id="accessible-input"
        label="Accessible Input"
        placeholder="This input has proper ARIA attributes"
        aria-describedby="accessible-input-help"
        helperText="This input demonstrates proper accessibility features"
      />
      <Input
        id="error-input"
        label="Input with Error"
        placeholder="This will show an error"
        error={true}
        errorMessage="This is an error message with proper ARIA attributes"
        aria-invalid={true}
      />
    </div>
  ),
};
