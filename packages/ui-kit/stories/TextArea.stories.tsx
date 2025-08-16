import type { Meta, StoryObj } from '@storybook/react'
import { Textarea } from '../components/ui/textarea'

const meta: Meta<typeof Textarea> = {
  title: 'Inputs/TextArea',
  component: Textarea,
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
    error: {
      control: { type: 'boolean' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
    readOnly: {
      control: { type: 'boolean' },
    },
    autoResize: {
      control: { type: 'boolean' },
    },
    showCharacterCount: {
      control: { type: 'boolean' },
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    placeholder: "Enter your message here...",
  },
}

export const WithLabel: Story = {
  args: {
    label: "Message",
    placeholder: "Enter your message here...",
  },
}

export const WithHelperText: Story = {
  args: {
    label: "Description",
    helperText: "Provide a brief description of your project",
    placeholder: "Enter description...",
  },
}

export const WithError: Story = {
  args: {
    label: "Message",
    error: true,
    errorMessage: "Message is required",
    placeholder: "Enter your message here...",
  },
}

export const Required: Story = {
  args: {
    label: "Message",
    required: true,
    placeholder: "Enter your message here...",
  },
}

export const Disabled: Story = {
  args: {
    label: "Message",
    disabled: true,
    value: "This textarea is disabled",
  },
}

export const ReadOnly: Story = {
  args: {
    label: "Message",
    readOnly: true,
    value: "This textarea is read-only",
  },
}

export const Small: Story = {
  args: {
    size: "sm",
    label: "Small TextArea",
    placeholder: "Enter text...",
  },
}

export const Large: Story = {
  args: {
    size: "lg",
    label: "Large TextArea",
    placeholder: "Enter text...",
  },
}

export const Outlined: Story = {
  args: {
    variant: "outlined",
    label: "Outlined TextArea",
    placeholder: "Enter text...",
  },
}

export const WithMaxLength: Story = {
  args: {
    label: "Message",
    maxLength: 100,
    placeholder: "Enter your message (max 100 characters)...",
  },
}

export const WithCharacterCount: Story = {
  args: {
    label: "Message",
    maxLength: 200,
    showCharacterCount: true,
    placeholder: "Enter your message (max 200 characters)...",
  },
}

export const AutoResize: Story = {
  args: {
    label: "Auto-resizing TextArea",
    autoResize: true,
    minRows: 3,
    maxRows: 8,
    placeholder: "This textarea will automatically resize as you type...",
  },
}

export const CustomRows: Story = {
  args: {
    label: "Custom Rows",
    rows: 5,
    placeholder: "This textarea has 5 rows...",
  },
}

export const WithValue: Story = {
  args: {
    label: "Message",
    value: "This is a pre-filled message that demonstrates how the textarea looks with content.",
  },
}

export const LongContent: Story = {
  args: {
    label: "Long Content",
    value: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
}

// Complex examples
export const ContactForm: Story = {
  render: (args) => (
    <div className="space-y-4 w-[400px]">
      <TextArea
        label="Message"
        placeholder="Tell us about your inquiry..."
        helperText="Please provide as much detail as possible"
        required
        rows={4}
        {...args}
      />
    </div>
  ),
}

export const BioForm: Story = {
  render: (args) => (
    <div className="space-y-4 w-[400px]">
      <TextArea
        label="Bio"
        placeholder="Tell us about yourself..."
        helperText="Share your background, interests, or what you're working on"
        maxLength={500}
        showCharacterCount={true}
        rows={4}
        {...args}
      />
    </div>
  ),
}

export const ReviewForm: Story = {
  render: (args) => (
    <div className="space-y-4 w-[400px]">
      <TextArea
        label="Review"
        placeholder="Share your experience with this product..."
        helperText="Your honest feedback helps others make informed decisions"
        maxLength={1000}
        showCharacterCount={true}
        rows={6}
        {...args}
      />
    </div>
  ),
}

export const CodeEditor: Story = {
  render: (args) => (
    <div className="space-y-4 w-[400px]">
      <TextArea
        label="Code"
        placeholder="Enter your code here..."
        helperText="Use this area to write or paste your code"
        rows={10}
        className="font-mono text-sm"
        {...args}
      />
    </div>
  ),
}

export const NotesEditor: Story = {
  render: (args) => (
    <div className="space-y-4 w-[400px]">
      <TextArea
        label="Notes"
        placeholder="Write your notes here..."
        autoResize={true}
        minRows={3}
        maxRows={10}
        {...args}
      />
    </div>
  ),
}

export const FeedbackForm: Story = {
  render: (args) => (
    <div className="space-y-4 w-[400px]">
      <TextArea
        label="Feedback"
        placeholder="We'd love to hear your thoughts..."
        helperText="Your feedback helps us improve our service"
        maxLength={300}
        showCharacterCount={true}
        rows={4}
        {...args}
      />
    </div>
  ),
}

export const SizeComparison: Story = {
  render: (args) => (
    <div className="space-y-4 w-[400px]">
      <TextArea
        size="sm"
        label="Small"
        placeholder="Small textarea..."
        {...args}
      />
      <TextArea
        size="default"
        label="Default"
        placeholder="Default textarea..."
        {...args}
      />
      <TextArea
        size="lg"
        label="Large"
        placeholder="Large textarea..."
        {...args}
      />
    </div>
  ),
}

export const VariantComparison: Story = {
  render: (args) => (
    <div className="space-y-4 w-[400px]">
      <TextArea
        variant="default"
        label="Default Variant"
        placeholder="Default variant..."
        {...args}
      />
      <TextArea
        variant="outlined"
        label="Outlined Variant"
        placeholder="Outlined variant..."
        {...args}
      />
    </div>
  ),
}

export const StateComparison: Story = {
  render: (args) => (
    <div className="space-y-4 w-[400px]">
      <TextArea
        label="Normal"
        placeholder="Normal state..."
        {...args}
      />
      <TextArea
        label="Disabled"
        value="Disabled textarea"
        disabled
        {...args}
      />
      <TextArea
        label="Read Only"
        value="Read-only textarea"
        readOnly
        {...args}
      />
      <TextArea
        label="Error"
        error
        errorMessage="This field has an error"
        placeholder="Error state..."
        {...args}
      />
    </div>
  ),
}

export const CharacterCountExample: Story = {
  render: (args) => (
    <div className="space-y-4 w-[400px]">
      <TextArea
        label="Tweet"
        placeholder="What's happening?"
        maxLength={280}
        showCharacterCount={true}
        rows={3}
        {...args}
      />
    </div>
  ),
}

export const AutoResizeExample: Story = {
  render: (args) => (
    <div className="space-y-4 w-[400px]">
      <TextArea
        label="Dynamic Height"
        placeholder="Start typing and watch the textarea grow..."
        autoResize={true}
        minRows={2}
        maxRows={8}
        {...args}
      />
    </div>
  ),
}
