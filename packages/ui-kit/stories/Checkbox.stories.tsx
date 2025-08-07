import type { Meta, StoryObj } from "@storybook/react"
import React, { useState } from "react"
import CustomCheckbox from "../components/custom-checkbox"

const meta: Meta<typeof CustomCheckbox> = {
  title: "Components/Checkbox",
  component: CustomCheckbox,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: { type: "select" },
      options: ["xs", "sm", "md", "lg", "xl"],
    },
    disabled: {
      control: { type: "boolean" },
    },
    error: {
      control: { type: "boolean" },
    },
    indeterminate: {
      control: { type: "boolean" },
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    label: "Default checkbox",
  },
}

export const Checked: Story = {
  args: {
    label: "Checked checkbox",
    checked: true,
  },
}

export const Indeterminate: Story = {
  args: {
    label: "Indeterminate checkbox",
    indeterminate: true,
  },
}

export const WithHelperText: Story = {
  args: {
    label: "Checkbox with helper text",
    helperText: "This is a helpful description",
  },
}

export const Error: Story = {
  args: {
    label: "Error checkbox",
    error: true,
    helperText: "This field is required",
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

export const States: Story = {
  render: () => (
    <div className="space-y-4">
      <CustomCheckbox label="Default state" />
      <CustomCheckbox label="Checked state" checked />
      <CustomCheckbox label="Indeterminate state" indeterminate />
      <CustomCheckbox label="Error state" error helperText="This field is required" />
    </div>
  ),
}

export const Sizes: Story = {
  render: () => (
    <div className="space-y-4">
      <CustomCheckbox label="Extra Small" size="xs" />
      <CustomCheckbox label="Small" size="sm" />
      <CustomCheckbox label="Medium" size="md" />
      <CustomCheckbox label="Large" size="lg" />
      <CustomCheckbox label="Extra Large" size="xl" />
    </div>
  ),
}

export const Interactive: Story = {
  render: () => {
    const [checked, setChecked] = useState(false)
    const [indeterminate, setIndeterminate] = useState(false)
    
    return (
      <div className="space-y-4">
        <CustomCheckbox
          label="Interactive checkbox"
          checked={checked}
          onChange={(e) => setChecked(e.target.checked)}
        />
        <CustomCheckbox
          label="Indeterminate checkbox"
          indeterminate={indeterminate}
          onChange={(e) => setIndeterminate(e.target.checked)}
        />
        <div className="text-sm text-gray-600">
          Checked: {checked.toString()}, Indeterminate: {indeterminate.toString()}
        </div>
      </div>
    )
  },
}

export const AllStates: Story = {
  render: () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold mb-3">Default States</h3>
        <div className="space-y-2">
          <CustomCheckbox label="Unchecked" />
          <CustomCheckbox label="Checked" checked />
          <CustomCheckbox label="Indeterminate" indeterminate />
        </div>
      </div>
      
      <div>
        <h3 className="text-lg font-semibold mb-3">Error States</h3>
        <div className="space-y-2">
          <CustomCheckbox label="Error unchecked" error />
          <CustomCheckbox label="Error checked" checked error />
          <CustomCheckbox label="Error indeterminate" indeterminate error />
        </div>
      </div>
      
      <div>
        <h3 className="text-lg font-semibold mb-3">Disabled States</h3>
        <div className="space-y-2">
          <CustomCheckbox label="Disabled unchecked" disabled />
          <CustomCheckbox label="Disabled checked" checked disabled />
          <CustomCheckbox label="Disabled indeterminate" indeterminate disabled />
        </div>
      </div>
    </div>
  ),
} 