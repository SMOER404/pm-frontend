import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { InputError } from '../components/ui/input-error';

const meta: Meta<typeof InputError> = {
  title: 'UI/InputError',
  component: InputError,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    error: {
      control: { type: 'text' },
    },
    helperText: {
      control: { type: 'text' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    error: 'This field is required',
  },
};

export const HelperText: Story = {
  args: {
    helperText: 'This is a helpful message',
  },
};

export const LongError: Story = {
  args: {
    error: 'This is a very long error message that might wrap to multiple lines to demonstrate how the component handles longer text content.',
  },
};

export const NoContent: Story = {
  args: {},
};

export const WithCustomStyling: Story = {
  args: {
    error: 'Custom styled error',
    className: 'text-sm font-medium',
  },
};
