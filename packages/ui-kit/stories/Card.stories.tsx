import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';

const meta: Meta<typeof Card> = {
  title: 'UI/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card Description</CardDescription>
      </CardHeader>
      <CardContent>
        <p>This is the card content.</p>
      </CardContent>
    </Card>
  ),
};

export const WithButton: Story = {
  render: () => (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Card with Button</CardTitle>
        <CardDescription>Card with a button in the content</CardDescription>
      </CardHeader>
      <CardContent>
        <p>This card contains a button.</p>
        <Button className="mt-4">Click me</Button>
      </CardContent>
    </Card>
  ),
};
