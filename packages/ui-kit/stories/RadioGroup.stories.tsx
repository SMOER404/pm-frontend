import type { Meta, StoryObj } from '@storybook/react'
import { RadioGroup, Radio } from '../components/ui/radio-group'

const meta: Meta<typeof RadioGroup> = {
  title: 'Inputs/RadioGroup',
  component: RadioGroup,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    orientation: {
      control: { type: 'select' },
      options: ['horizontal', 'vertical'],
    },
    error: {
      control: { type: 'boolean' },
    },
    required: {
      control: { type: 'boolean' },
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    options: [
      { value: "option1", label: "Option 1" },
      { value: "option2", label: "Option 2" },
      { value: "option3", label: "Option 3" },
    ],
  },
}

export const WithDescriptions: Story = {
  args: {
    options: [
      { 
        value: "email", 
        label: "Email",
        description: "Receive updates via email"
      },
      { 
        value: "sms", 
        label: "SMS",
        description: "Receive updates via SMS"
      },
      { 
        value: "push", 
        label: "Push notifications",
        description: "Receive updates via push notifications"
      },
    ],
  },
}

export const Horizontal: Story = {
  args: {
    orientation: "horizontal",
    options: [
      { value: "option1", label: "Option 1" },
      { value: "option2", label: "Option 2" },
      { value: "option3", label: "Option 3" },
    ],
  },
}

export const WithDisabled: Story = {
  args: {
    options: [
      { value: "option1", label: "Option 1" },
      { value: "option2", label: "Option 2", disabled: true },
      { value: "option3", label: "Option 3" },
    ],
  },
}

export const WithError: Story = {
  args: {
    error: true,
    errorMessage: "Please select an option",
    options: [
      { value: "option1", label: "Option 1" },
      { value: "option2", label: "Option 2" },
      { value: "option3", label: "Option 3" },
    ],
  },
}

export const Required: Story = {
  args: {
    required: true,
    options: [
      { value: "option1", label: "Option 1" },
      { value: "option2", label: "Option 2" },
      { value: "option3", label: "Option 3" },
    ],
  },
}

export const WithDefaultValue: Story = {
  args: {
    defaultValue: "option2",
    options: [
      { value: "option1", label: "Option 1" },
      { value: "option2", label: "Option 2" },
      { value: "option3", label: "Option 3" },
    ],
  },
}

// Individual Radio stories
export const SingleRadio: Story = {
  args: {
    options: [
      { value: "option1", label: "Single radio button" }
    ],
  },
}

export const SingleRadioWithDescription: Story = {
  args: {
    options: [
      { 
        value: "option1", 
        label: "Single radio button",
        description: "This is a description for the radio button"
      }
    ],
  },
}

// Complex examples
export const PaymentMethod: Story = {
  render: (args) => (
    <div className="space-y-4 w-[400px]">
      <h3 className="text-lg font-medium">Select Payment Method</h3>
      <RadioGroup
        options={[
          { 
            value: "credit", 
            label: "Credit Card",
            description: "Pay with your credit or debit card"
          },
          { 
            value: "paypal", 
            label: "PayPal",
            description: "Pay with your PayPal account"
          },
          { 
            value: "bank", 
            label: "Bank Transfer",
            description: "Transfer money directly from your bank account"
          },
        ]}
        {...args}
      />
    </div>
  ),
}

export const ShippingOptions: Story = {
  render: (args) => (
    <div className="space-y-4 w-[400px]">
      <h3 className="text-lg font-medium">Shipping Options</h3>
      <RadioGroup
        options={[
          { 
            value: "standard", 
            label: "Standard Shipping",
            description: "5-7 business days - Free"
          },
          { 
            value: "express", 
            label: "Express Shipping",
            description: "2-3 business days - $9.99"
          },
          { 
            value: "overnight", 
            label: "Overnight Shipping",
            description: "Next business day - $19.99"
          },
        ]}
        {...args}
      />
    </div>
  ),
}

export const NotificationPreferences: Story = {
  render: (args) => (
    <div className="space-y-4 w-[400px]">
      <h3 className="text-lg font-medium">Notification Frequency</h3>
      <RadioGroup
        options={[
          { 
            value: "immediate", 
            label: "Immediate",
            description: "Receive notifications as soon as they happen"
          },
          { 
            value: "daily", 
            label: "Daily Digest",
            description: "Receive a summary once per day"
          },
          { 
            value: "weekly", 
            label: "Weekly Digest",
            description: "Receive a summary once per week"
          },
          { 
            value: "never", 
            label: "Never",
            description: "Don't send me any notifications"
          },
        ]}
        {...args}
      />
    </div>
  ),
}

export const AccountType: Story = {
  render: (args) => (
    <div className="space-y-4 w-[400px]">
      <h3 className="text-lg font-medium">Account Type</h3>
      <RadioGroup
        required={true}
        options={[
          { 
            value: "personal", 
            label: "Personal Account",
            description: "For individual use and personal projects"
          },
          { 
            value: "business", 
            label: "Business Account",
            description: "For teams and business use"
          },
          { 
            value: "enterprise", 
            label: "Enterprise Account",
            description: "For large organizations with advanced needs"
          },
        ]}
        {...args}
      />
    </div>
  ),
}

export const ThemeSelection: Story = {
  render: (args) => (
    <div className="space-y-4 w-[400px]">
      <h3 className="text-lg font-medium">Choose Theme</h3>
      <RadioGroup
        orientation="horizontal"
        options={[
          { value: "light", label: "Light" },
          { value: "dark", label: "Dark" },
          { value: "auto", label: "Auto" },
        ]}
        {...args}
      />
    </div>
  ),
}

export const LanguageSelection: Story = {
  render: (args) => (
    <div className="space-y-4 w-[400px]">
      <h3 className="text-lg font-medium">Select Language</h3>
      <RadioGroup
        options={[
          { value: "en", label: "English" },
          { value: "es", label: "Español" },
          { value: "fr", label: "Français" },
          { value: "de", label: "Deutsch" },
          { value: "it", label: "Italiano" },
        ]}
        {...args}
      />
    </div>
  ),
}

export const PlanSelection: Story = {
  render: (args) => (
    <div className="space-y-4 w-[400px]">
      <h3 className="text-lg font-medium">Choose Your Plan</h3>
      <RadioGroup
        options={[
          { 
            value: "free", 
            label: "Free Plan",
            description: "Basic features for personal use"
          },
          { 
            value: "pro", 
            label: "Pro Plan",
            description: "Advanced features for professionals"
          },
          { 
            value: "enterprise", 
            label: "Enterprise Plan",
            description: "Full features for large teams"
          },
        ]}
        {...args}
      />
    </div>
  ),
}

export const FormExample: Story = {
  render: (args) => (
    <div className="space-y-6 w-[400px]">
      <div>
        <label className="text-sm font-medium">Gender</label>
        <RadioGroup
          options={[
            { value: "male", label: "Male" },
            { value: "female", label: "Female" },
            { value: "other", label: "Other" },
            { value: "prefer-not", label: "Prefer not to say" },
          ]}
          {...args}
        />
      </div>
      
      <div>
        <label className="text-sm font-medium">Experience Level</label>
        <RadioGroup
          options={[
            { value: "beginner", label: "Beginner" },
            { value: "intermediate", label: "Intermediate" },
            { value: "advanced", label: "Advanced" },
            { value: "expert", label: "Expert" },
          ]}
          {...args}
        />
      </div>
    </div>
  ),
}

export const ErrorState: Story = {
  render: (args) => (
    <div className="space-y-4 w-[400px]">
      <h3 className="text-lg font-medium">Required Selection</h3>
      <RadioGroup
        error={true}
        errorMessage="Please select one of the options above"
        options={[
          { value: "option1", label: "Option 1" },
          { value: "option2", label: "Option 2" },
          { value: "option3", label: "Option 3" },
        ]}
        {...args}
      />
    </div>
  ),
}

export const DisabledState: Story = {
  render: (args) => (
    <div className="space-y-4 w-[400px]">
      <h3 className="text-lg font-medium">Disabled Options</h3>
      <RadioGroup
        options={[
          { value: "option1", label: "Available Option" },
          { value: "option2", label: "Disabled Option", disabled: true },
          { value: "option3", label: "Another Available Option" },
        ]}
        {...args}
      />
    </div>
  ),
}

