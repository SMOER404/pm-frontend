import type { Meta, StoryObj } from '@storybook/react'
import { Accordion } from '../components/ui/accordion'
import { ChevronDown, Plus, Minus, Star, Heart } from 'lucide-react'
import React from 'react'

const meta: Meta<typeof Accordion> = {
  title: 'Data Display/Accordion',
  component: Accordion,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'ghost'],
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
    },
    allowMultiple: {
      control: { type: 'boolean' },
    },
    isDisabled: {
      control: { type: 'boolean' },
    },
    isLoading: {
      control: { type: 'boolean' },
    },
    transitionDuration: {
      control: { type: 'number', min: 100, max: 1000, step: 50 },
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

const sampleItems = [
  {
    id: 'item-1',
    title: 'What is React?',
    content: 'React is a JavaScript library for building user interfaces, particularly single-page applications. It\'s used for handling the view layer and can be used for developing both web and mobile applications.',
  },
  {
    id: 'item-2',
    title: 'How does React work?',
    content: 'React works by creating a virtual DOM that represents the UI. When the state changes, React efficiently updates the actual DOM by comparing it with the virtual DOM and making only the necessary changes.',
  },
  {
    id: 'item-3',
    title: 'What are React hooks?',
    content: 'React hooks are functions that allow you to use state and other React features in functional components. They were introduced in React 16.8 and include useState, useEffect, useContext, and more.',
  },
  {
    id: 'item-4',
    title: 'Disabled Item',
    content: 'This item is disabled and cannot be opened.',
    isDisabled: true,
  },
]

export const Default: Story = {
  args: {
    items: sampleItems,
  },
}

export const SingleMode: Story = {
  args: {
    items: sampleItems,
    allowMultiple: false,
    defaultOpenId: 'item-1',
  },
}

export const MultipleMode: Story = {
  args: {
    items: sampleItems,
    allowMultiple: true,
    defaultOpenId: 'item-1',
  },
}

export const Primary: Story = {
  args: {
    items: sampleItems,
    variant: 'primary',
  },
}

export const Secondary: Story = {
  args: {
    items: sampleItems,
    variant: 'secondary',
  },
}

export const Ghost: Story = {
  args: {
    items: sampleItems,
    variant: 'ghost',
  },
}

export const Small: Story = {
  args: {
    items: sampleItems,
    size: 'sm',
  },
}

export const Large: Story = {
  args: {
    items: sampleItems,
    size: 'lg',
  },
}

export const WithCustomIcons: Story = {
  args: {
    items: sampleItems,
    expandIcon: <Plus className="h-4 w-4" />,
    collapseIcon: <Minus className="h-4 w-4" />,
  },
}

export const WithStarIcons: Story = {
  args: {
    items: sampleItems,
    expandIcon: <Star className="h-4 w-4" />,
  },
}

export const WithHeartIcons: Story = {
  args: {
    items: sampleItems,
    expandIcon: <Heart className="h-4 w-4" />,
  },
}

export const FastAnimation: Story = {
  args: {
    items: sampleItems,
    transitionDuration: 100,
  },
}

export const SlowAnimation: Story = {
  args: {
    items: sampleItems,
    transitionDuration: 500,
  },
}

export const Disabled: Story = {
  args: {
    items: sampleItems,
    isDisabled: true,
  },
}

export const Loading: Story = {
  args: {
    items: sampleItems,
    isLoading: true,
  },
}

export const WithDisabledItems: Story = {
  args: {
    items: [
      {
        id: 'item-1',
        title: 'Enabled Item',
        content: 'This item can be opened and closed.',
      },
      {
        id: 'item-2',
        title: 'Disabled Item',
        content: 'This item is disabled and cannot be opened.',
        isDisabled: true,
      },
      {
        id: 'item-3',
        title: 'Another Enabled Item',
        content: 'This item can also be opened and closed.',
      },
    ],
  },
}

export const FAQ: Story = {
  args: {
    items: [
      {
        id: 'faq-1',
        title: 'How do I get started?',
        content: 'To get started, simply sign up for an account and follow the onboarding process. We\'ll guide you through each step.',
      },
      {
        id: 'faq-2',
        title: 'What payment methods do you accept?',
        content: 'We accept all major credit cards, PayPal, and bank transfers. All payments are processed securely.',
      },
      {
        id: 'faq-3',
        title: 'Can I cancel my subscription?',
        content: 'Yes, you can cancel your subscription at any time. There are no cancellation fees or penalties.',
      },
      {
        id: 'faq-4',
        title: 'Is my data secure?',
        content: 'Absolutely. We use industry-standard encryption and security measures to protect your data.',
      },
    ],
    variant: 'secondary',
    allowMultiple: true,
  },
}

export const ProductFeatures: Story = {
  args: {
    items: [
      {
        id: 'feature-1',
        title: 'Advanced Analytics',
        content: 'Get detailed insights into your performance with our advanced analytics dashboard.',
      },
      {
        id: 'feature-2',
        title: 'Real-time Collaboration',
        content: 'Work together with your team in real-time with our collaboration features.',
      },
      {
        id: 'feature-3',
        title: 'Mobile App',
        content: 'Access all features on the go with our mobile app available for iOS and Android.',
      },
    ],
    variant: 'ghost',
    expandIcon: <ChevronDown className="h-4 w-4" />,
  },
}

export const Interactive: Story = {
  render: () => {
    const [openItems, setOpenItems] = React.useState<string[]>(['item-1'])
    
    const handleValueChange = (value: string | string[]) => {
      setOpenItems(Array.isArray(value) ? value : [value])
    }
    
    return (
      <div className="space-y-4">
        <Accordion
          items={sampleItems}
          allowMultiple={true}
          value={openItems}
          onValueChange={handleValueChange}
          variant="secondary"
        />
        <div className="text-sm text-muted-foreground">
          Open items: {openItems.join(', ') || 'none'}
        </div>
      </div>
    )
  },
}

export const CustomStyling: Story = {
  args: {
    items: sampleItems,
    sx: {
      maxWidth: '600px',
      backgroundColor: '#f8f9fa',
      borderRadius: '12px',
      padding: '16px',
    },
  },
}

export const AllVariants: Story = {
  render: () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold mb-2">Primary Variant</h3>
        <Accordion items={sampleItems.slice(0, 2)} variant="primary" />
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-2">Secondary Variant</h3>
        <Accordion items={sampleItems.slice(0, 2)} variant="secondary" />
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-2">Ghost Variant</h3>
        <Accordion items={sampleItems.slice(0, 2)} variant="ghost" />
      </div>
    </div>
  ),
}

export const AllSizes: Story = {
  render: () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold mb-2">Small Size</h3>
        <Accordion items={sampleItems.slice(0, 2)} size="sm" />
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-2">Medium Size (Default)</h3>
        <Accordion items={sampleItems.slice(0, 2)} size="md" />
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-2">Large Size</h3>
        <Accordion items={sampleItems.slice(0, 2)} size="lg" />
      </div>
    </div>
  ),
}

export const ComplexContent: Story = {
  args: {
    items: [
      {
        id: 'complex-1',
        title: 'User Profile',
        content: (
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gray-200 rounded-full"></div>
              <div>
                <h4 className="font-semibold">John Doe</h4>
                <p className="text-sm text-muted-foreground">john.doe@example.com</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium">Role</label>
                <p className="text-sm">Administrator</p>
              </div>
              <div>
                <label className="text-sm font-medium">Status</label>
                <p className="text-sm text-green-600">Active</p>
              </div>
            </div>
          </div>
        ),
      },
      {
        id: 'complex-2',
        title: 'Settings',
        content: (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm">Email Notifications</span>
              <input type="checkbox" defaultChecked className="rounded" />
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm">Push Notifications</span>
              <input type="checkbox" className="rounded" />
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm">Dark Mode</span>
              <input type="checkbox" className="rounded" />
            </div>
          </div>
        ),
      },
    ],
    variant: 'secondary',
  },
}
