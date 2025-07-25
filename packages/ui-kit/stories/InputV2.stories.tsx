import type { Meta, StoryObj } from "@storybook/react"
import { useState } from "react"
import CustomInput from "../components/custom-input-v2"
import { masks } from "../lib/input-masks"
import { validationSchemas } from "../lib/validation"
import { User, Search, Calendar, Phone, Mail, Lock, CreditCard } from "lucide-react"

const meta: Meta<typeof CustomInput> = {
  title: "Components/Input V2",
  component: CustomInput,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: { type: "select" },
      options: ["xs", "sm", "md", "lg", "xl"],
    },
    variant: {
      control: { type: "select" },
      options: ["outlined", "filled"],
    },
    type: {
      control: { type: "select" },
      options: ["text", "email", "password", "tel", "search", "date", "number"],
    },
    iconPosition: {
      control: { type: "select" },
      options: ["left", "right"],
    },
    disabled: {
      control: { type: "boolean" },
    },
    showPasswordToggle: {
      control: { type: "boolean" },
    },
  },
}

export default meta
type Story = StoryObj<typeof CustomInput>

export const Default: Story = {
  args: {
    label: "Input Label",
    placeholder: "Enter text...",
  },
}

export const Sizes: Story = {
  render: () => (
    <div className="space-y-4 w-80">
      <CustomInput label="Extra Small" size="xs" placeholder="xs size" />
      <CustomInput label="Small" size="sm" placeholder="sm size" />
      <CustomInput label="Medium" size="md" placeholder="md size" />
      <CustomInput label="Large" size="lg" placeholder="lg size" />
      <CustomInput label="Extra Large" size="xl" placeholder="xl size" />
    </div>
  ),
}

export const Variants: Story = {
  render: () => (
    <div className="space-y-4 w-80">
      <CustomInput label="Outlined" variant="outlined" placeholder="Outlined variant" />
      <CustomInput label="Filled" variant="filled" placeholder="Filled variant" />
    </div>
  ),
}

export const WithIcons: Story = {
  render: () => (
    <div className="space-y-4 w-80">
      <CustomInput 
        label="User Name" 
        icon={<User className="w-4 h-4" />}
        placeholder="Enter your name"
      />
      <CustomInput 
        label="Search" 
        type="search"
        placeholder="Search..."
      />
      <CustomInput 
        label="Email" 
        type="email"
        placeholder="Enter your email"
      />
      <CustomInput 
        label="Phone" 
        type="tel"
        placeholder="Enter your phone"
      />
      <CustomInput 
        label="Date" 
        type="date"
        placeholder="Select date"
      />
    </div>
  ),
}

export const WithValidation: Story = {
  render: () => {
    const [email, setEmail] = useState("")
    const [emailError, setEmailError] = useState("")
    const [password, setPassword] = useState("")
    const [passwordError, setPasswordError] = useState("")

    return (
      <div className="space-y-4 w-80">
        <CustomInput
          label="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          validation={validationSchemas.email}
          onValidationChange={(isValid, error) => setEmailError(error || "")}
          error={emailError}
          placeholder="Enter your email"
        />
        <CustomInput
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          validation={validationSchemas.password}
          onValidationChange={(isValid, error) => setPasswordError(error || "")}
          error={passwordError}
          showPasswordToggle
          placeholder="Enter your password"
        />
      </div>
    )
  },
}

export const WithMasks: Story = {
  render: () => {
    const [phone, setPhone] = useState("")
    const [card, setCard] = useState("")
    const [date, setDate] = useState("")

    return (
      <div className="space-y-4 w-80">
        <CustomInput
          label="Phone Number"
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          mask={masks.phone}
          placeholder="Enter phone number"
        />
        <CustomInput
          label="Card Number"
          value={card}
          onChange={(e) => setCard(e.target.value)}
          mask={masks.card}
          icon={<CreditCard className="w-4 h-4" />}
          placeholder="Enter card number"
        />
        <CustomInput
          label="Date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          mask={masks.date}
          placeholder="DD.MM.YYYY"
        />
      </div>
    )
  },
}

export const PasswordToggle: Story = {
  render: () => {
    const [password, setPassword] = useState("")

    return (
      <div className="space-y-4 w-80">
        <CustomInput
          label="Password with Toggle"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          showPasswordToggle
          placeholder="Enter password"
        />
        <CustomInput
          label="Password without Toggle"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter password"
        />
      </div>
    )
  },
}

export const States: Story = {
  render: () => (
    <div className="space-y-4 w-80">
      <CustomInput label="Normal" placeholder="Normal state" />
      <CustomInput label="Disabled" disabled placeholder="Disabled state" />
      <CustomInput label="With Error" error="This field has an error" placeholder="Error state" />
      <CustomInput label="With Helper" helperText="This is helper text" placeholder="Helper text" />
    </div>
  ),
}

export const InteractiveValidation: Story = {
  render: () => {
    const [username, setUsername] = useState("")
    const [usernameError, setUsernameError] = useState("")
    const [url, setUrl] = useState("")
    const [urlError, setUrlError] = useState("")

    return (
      <div className="space-y-4 w-80">
        <CustomInput
          label="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          validation={validationSchemas.username}
          onValidationChange={(isValid, error) => setUsernameError(error || "")}
          error={usernameError}
          placeholder="3-20 characters, letters, numbers, underscores"
        />
        <CustomInput
          label="Website URL"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          validation={validationSchemas.url}
          onValidationChange={(isValid, error) => setUrlError(error || "")}
          error={urlError}
          placeholder="https://example.com"
        />
      </div>
    )
  },
}

export const CustomValidation: Story = {
  render: () => {
    const [customValue, setCustomValue] = useState("")
    const [customError, setCustomError] = useState("")

    const customValidation = {
      required: true,
      minLength: 5,
      custom: (value: string) => {
        if (value.includes("admin")) {
          return "Username cannot contain 'admin'"
        }
        if (value.includes("test")) {
          return "Username cannot contain 'test'"
        }
        return null
      }
    }

    return (
      <div className="space-y-4 w-80">
        <CustomInput
          label="Custom Validation"
          value={customValue}
          onChange={(e) => setCustomValue(e.target.value)}
          validation={customValidation}
          onValidationChange={(isValid, error) => setCustomError(error || "")}
          error={customError}
          placeholder="Cannot contain 'admin' or 'test'"
        />
      </div>
    )
  },
}

export const ControlledInput: Story = {
  render: () => {
    const [value, setValue] = useState("")

    return (
      <div className="space-y-4 w-80">
        <CustomInput
          label="Controlled Input"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="This is controlled"
        />
        <p className="text-sm text-gray-600">
          Current value: <span className="font-mono">{value || "(empty)"}</span>
        </p>
      </div>
    )
  },
} 