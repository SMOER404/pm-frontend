import type { Meta, StoryObj } from '@storybook/react'
import { Checkbox, CheckboxGroup } from '../components/ui/checkbox'

const meta: Meta<typeof Checkbox> = {
  title: 'Inputs/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'outlined'],
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'default', 'lg'],
    },
    checked: {
      control: { type: 'select' },
      options: [true, false, 'indeterminate'],
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    label: "Accept terms and conditions",
  },
}

export const Checked: Story = {
  args: {
    label: "Accept terms and conditions",
    checked: true,
  },
}

export const Indeterminate: Story = {
  args: {
    label: "Select all items",
    checked: 'indeterminate',
  },
}

export const WithDescription: Story = {
  args: {
    label: "Subscribe to newsletter",
    description: "Receive updates about new features and releases",
  },
}

export const Small: Story = {
  args: {
    size: "sm",
    label: "Small checkbox",
  },
}

export const Large: Story = {
  args: {
    size: "lg",
    label: "Large checkbox",
  },
}

export const Outlined: Story = {
  args: {
    variant: "outlined",
    label: "Outlined checkbox",
  },
}

export const Disabled: Story = {
  args: {
    label: "Disabled checkbox",
    disabled: true,
  },
}

export const DisabledChecked: Story = {
  args: {
    label: "Disabled checked checkbox",
    checked: true,
    disabled: true,
  },
}

export const WithError: Story = {
  args: {
    label: "Required field",
    error: true,
    errorMessage: "This field is required",
  },
}

export const NoLabel: Story = {
  args: {},
}

// CheckboxGroup stories
export const GroupVertical: Story = {
  render: (args) => (
    <CheckboxGroup
      options={[
        { value: "option1", label: "Option 1" },
        { value: "option2", label: "Option 2" },
        { value: "option3", label: "Option 3" },
      ]}
      {...args}
    />
  ),
}

export const GroupHorizontal: Story = {
  render: (args) => (
    <CheckboxGroup
      orientation="horizontal"
      options={[
        { value: "option1", label: "Option 1" },
        { value: "option2", label: "Option 2" },
        { value: "option3", label: "Option 3" },
      ]}
      {...args}
    />
  ),
}

export const GroupWithDescriptions: Story = {
  render: (args) => (
    <CheckboxGroup
      options={[
        { 
          value: "email", 
          label: "Email notifications",
          description: "Receive updates via email"
        },
        { 
          value: "sms", 
          label: "SMS notifications",
          description: "Receive updates via SMS"
        },
        { 
          value: "push", 
          label: "Push notifications",
          description: "Receive updates via push notifications"
        },
      ]}
      {...args}
    />
  ),
}

export const GroupWithDisabled: Story = {
  render: (args) => (
    <CheckboxGroup
      options={[
        { value: "option1", label: "Option 1" },
        { value: "option2", label: "Option 2", disabled: true },
        { value: "option3", label: "Option 3" },
      ]}
      {...args}
    />
  ),
}

export const GroupWithError: Story = {
  render: (args) => (
    <CheckboxGroup
      error={true}
      errorMessage="Please select at least one option"
      options={[
        { value: "option1", label: "Option 1" },
        { value: "option2", label: "Option 2" },
        { value: "option3", label: "Option 3" },
      ]}
      {...args}
    />
  ),
}

export const GroupWithDefaultValue: Story = {
  render: (args) => (
    <CheckboxGroup
      defaultValue={["option1", "option3"]}
      options={[
        { value: "option1", label: "Option 1" },
        { value: "option2", label: "Option 2" },
        { value: "option3", label: "Option 3" },
      ]}
      {...args}
    />
  ),
}

// Complex examples
export const PreferencesForm: Story = {
  render: (args) => (
    <div className="space-y-6 w-[400px]">
      <div>
        <h3 className="text-lg font-medium mb-4">Notification Preferences</h3>
        <CheckboxGroup
          options={[
            { 
              value: "email", 
              label: "Email notifications",
              description: "Receive updates about your account and orders"
            },
            { 
              value: "sms", 
              label: "SMS notifications",
              description: "Receive important alerts via text message"
            },
            { 
              value: "push", 
              label: "Push notifications",
              description: "Get instant notifications on your device"
            },
            { 
              value: "marketing", 
              label: "Marketing communications",
              description: "Receive promotional offers and newsletters"
            },
          ]}
          {...args}
        />
      </div>
    </div>
  ),
}

export const TermsAndConditions: Story = {
  render: (args) => (
    <div className="space-y-4 w-[400px]">
      <Checkbox
        label="I agree to the Terms of Service"
        description="By checking this box, you agree to our terms and conditions"
        required
        {...args}
      />
      
      <Checkbox
        label="I agree to the Privacy Policy"
        description="You consent to our collection and use of your information"
        required
        {...args}
      />
      
      <Checkbox
        label="Subscribe to newsletter"
        description="Receive updates about new features and releases (optional)"
        {...args}
      />
    </div>
  ),
}

export const FileSelection: Story = {
  render: (args) => (
    <div className="space-y-4 w-[400px]">
      <Checkbox
        label="Select all files"
        checked="indeterminate"
        {...args}
      />
      
      <div className="ml-6 space-y-2">
        <Checkbox
          label="document.pdf"
          size="sm"
          {...args}
        />
        <Checkbox
          label="image.jpg"
          size="sm"
          {...args}
        />
        <Checkbox
          label="video.mp4"
          size="sm"
          {...args}
        />
      </div>
    </div>
  ),
}

export const SettingsPanel: Story = {
  render: (args) => (
    <div className="space-y-6 w-[400px]">
      <div>
        <h3 className="text-lg font-medium mb-4">Account Settings</h3>
        <CheckboxGroup
          options={[
            { 
              value: "twoFactor", 
              label: "Two-factor authentication",
              description: "Add an extra layer of security to your account"
            },
            { 
              value: "publicProfile", 
              label: "Public profile",
              description: "Allow others to see your profile information"
            },
            { 
              value: "emailVerified", 
              label: "Email verified",
              description: "Your email address has been verified",
              disabled: true
            },
          ]}
          {...args}
        />
      </div>
      
      <div>
        <h3 className="text-lg font-medium mb-4">Privacy Settings</h3>
        <CheckboxGroup
          options={[
            { 
              value: "showOnline", 
              label: "Show online status",
              description: "Let others know when you're online"
            },
            { 
              value: "allowMessages", 
              label: "Allow direct messages",
              description: "Receive messages from other users"
            },
            { 
              value: "showActivity", 
              label: "Show activity status",
              description: "Display your recent activity to others"
            },
          ]}
          {...args}
        />
      </div>
    </div>
  ),
}

export const SizeComparison: Story = {
  render: (args) => (
    <div className="space-y-4">
      <Checkbox size="sm" label="Small checkbox" {...args} />
      <Checkbox size="default" label="Default checkbox" {...args} />
      <Checkbox size="lg" label="Large checkbox" {...args} />
    </div>
  ),
}

export const VariantComparison: Story = {
  render: (args) => (
    <div className="space-y-4">
      <Checkbox variant="default" label="Default variant" {...args} />
      <Checkbox variant="outlined" label="Outlined variant" {...args} />
    </div>
  ),
}

export const StateComparison: Story = {
  render: (args) => (
    <div className="space-y-4">
      <Checkbox label="Unchecked" {...args} />
      <Checkbox label="Checked" checked={true} {...args} />
      <Checkbox label="Indeterminate" checked="indeterminate" {...args} />
      <Checkbox label="Disabled" disabled={true} {...args} />
      <Checkbox label="Disabled checked" checked={true} disabled={true} {...args} />
    </div>
  ),
}

