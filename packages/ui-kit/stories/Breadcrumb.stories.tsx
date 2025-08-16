import type { Meta, StoryObj } from '@storybook/react'
import { Breadcrumb } from '../components/ui/breadcrumb'
import { ChevronRight, Home, Folder, FileText, Settings, Users, ShoppingCart } from 'lucide-react'

const meta: Meta<typeof Breadcrumb> = {
  title: 'Navigation/Breadcrumb',
  component: Breadcrumb,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'minimal'],
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'default', 'lg'],
    },
    showIcons: {
      control: { type: 'boolean' },
    },
    maxItems: {
      control: { type: 'number', min: 3, max: 10 },
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

const defaultItems = [
  { label: 'Home', href: '/' },
  { label: 'Products', href: '/products' },
  { label: 'Electronics', href: '/products/electronics' },
  { label: 'Smartphones', href: '/products/electronics/smartphones' },
  { label: 'iPhone 15 Pro', href: '/products/electronics/smartphones/iphone-15-pro' },
]

const itemsWithIcons = [
  { label: 'Home', href: '/', icon: <Home className="h-4 w-4" /> },
  { label: 'Products', href: '/products', icon: <ShoppingCart className="h-4 w-4" /> },
  { label: 'Electronics', href: '/products/electronics', icon: <Folder className="h-4 w-4" /> },
  { label: 'Smartphones', href: '/products/electronics/smartphones', icon: <FileText className="h-4 w-4" /> },
  { label: 'iPhone 15 Pro', href: '/products/electronics/smartphones/iphone-15-pro', icon: <Settings className="h-4 w-4" /> },
]

const longItems = [
  { label: 'Home', href: '/' },
  { label: 'Dashboard', href: '/dashboard' },
  { label: 'Analytics', href: '/dashboard/analytics' },
  { label: 'Reports', href: '/dashboard/analytics/reports' },
  { label: 'Sales', href: '/dashboard/analytics/reports/sales' },
  { label: 'Monthly', href: '/dashboard/analytics/reports/sales/monthly' },
  { label: 'Q1 2024', href: '/dashboard/analytics/reports/sales/monthly/q1-2024' },
  { label: 'Detailed Report', href: '/dashboard/analytics/reports/sales/monthly/q1-2024/detailed' },
]

export const Default: Story = {
  args: {
    items: defaultItems,
  },
}

export const WithIcons: Story = {
  args: {
    items: itemsWithIcons,
    showIcons: true,
  },
}

export const Minimal: Story = {
  args: {
    items: defaultItems,
    variant: 'minimal',
  },
}

export const Small: Story = {
  args: {
    items: defaultItems,
    size: 'sm',
  },
}

export const Large: Story = {
  args: {
    items: defaultItems,
    size: 'lg',
  },
}

export const WithMaxItems: Story = {
  args: {
    items: longItems,
    maxItems: 5,
  },
}

export const CustomSeparator: Story = {
  args: {
    items: defaultItems,
    separator: <span className="text-muted-foreground">/</span>,
  },
}

export const WithClickHandler: Story = {
  args: {
    items: defaultItems,
    onItemClick: (item, index) => {
      console.log('Clicked item:', item, 'at index:', index)
    },
  },
}

export const EcommerceExample: Story = {
  args: {
    items: [
      { label: 'Home', href: '/', icon: <Home className="h-4 w-4" /> },
      { label: 'Fashion', href: '/fashion', icon: <Users className="h-4 w-4" /> },
      { label: 'Men', href: '/fashion/men', icon: <Folder className="h-4 w-4" /> },
      { label: 'Clothing', href: '/fashion/men/clothing', icon: <FileText className="h-4 w-4" /> },
      { label: 'T-Shirts', href: '/fashion/men/clothing/t-shirts', icon: <ShoppingCart className="h-4 w-4" /> },
    ],
    showIcons: true,
    size: 'lg',
  },
}

export const AdminPanelExample: Story = {
  args: {
    items: [
      { label: 'Admin', href: '/admin' },
      { label: 'Users', href: '/admin/users' },
      { label: 'User Management', href: '/admin/users/management' },
      { label: 'Edit User', href: '/admin/users/management/edit' },
    ],
    variant: 'minimal',
    separator: <ChevronRight className="h-3 w-3" />,
  },
}

