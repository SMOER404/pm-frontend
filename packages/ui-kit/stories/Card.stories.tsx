import type { Meta, StoryObj } from "@storybook/react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../components/ui/card"

const meta: Meta<typeof Card> = {
  title: "UI/Card",
  component: Card,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    hover: {
      control: { type: "boolean" },
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    hover: false,
    className: "w-[350px]",
    children: (
      <>
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
          <CardDescription>Card Description</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Card content goes here. This is a sample card with some content.</p>
        </CardContent>
        <CardFooter>
          <p>Card footer</p>
        </CardFooter>
      </>
    ),
  },
}

export const WithHover: Story = {
  args: {
    hover: true,
    className: "w-[350px]",
    children: (
      <>
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
          <CardDescription>Card Description</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Card content goes here. This is a sample card with some content.</p>
        </CardContent>
        <CardFooter>
          <p>Card footer</p>
        </CardFooter>
      </>
    ),
  },
}

export const Simple: Story = {
  args: {
    hover: false,
    className: "w-[350px]",
    children: (
      <CardContent>
        <p>Simple card with just content.</p>
      </CardContent>
    ),
  },
}

export const SimpleWithHover: Story = {
  args: {
    hover: true,
    className: "w-[350px]",
    children: (
      <CardContent>
        <p>Simple card with hover effect.</p>
      </CardContent>
    ),
  },
}

export const WithImage: Story = {
  args: {
    hover: false,
    className: "w-[350px]",
    children: (
      <>
        <CardHeader>
          <CardTitle>Card with Image</CardTitle>
          <CardDescription>Card description</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="w-full h-48 bg-gray-200 rounded-md flex items-center justify-center">
            <span className="text-gray-500">Image placeholder</span>
          </div>
          <p className="mt-4">Card content with an image placeholder.</p>
        </CardContent>
      </>
    ),
  },
}

export const WithImageAndHover: Story = {
  args: {
    hover: true,
    className: "w-[350px]",
    children: (
      <>
        <CardHeader>
          <CardTitle>Card with Image</CardTitle>
          <CardDescription>Card description</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="w-full h-48 bg-gray-200 rounded-md flex items-center justify-center">
            <span className="text-gray-500">Image placeholder</span>
          </div>
          <p className="mt-4">Card content with an image placeholder and hover effect.</p>
        </CardContent>
      </>
    ),
  },
}

export const AllCards: Story = {
  render: () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <Card hover={false} className="w-[300px]">
        <CardHeader>
          <CardTitle>Card 1</CardTitle>
          <CardDescription>No hover effect</CardDescription>
        </CardHeader>
        <CardContent>
          <p>This card doesn't have hover effects enabled.</p>
        </CardContent>
      </Card>
      
      <Card hover={true} className="w-[300px]">
        <CardHeader>
          <CardTitle>Card 2</CardTitle>
          <CardDescription>With hover effect</CardDescription>
        </CardHeader>
        <CardContent>
          <p>This card has hover effects enabled.</p>
        </CardContent>
      </Card>
      
      <Card hover={false} className="w-[300px]">
        <CardHeader>
          <CardTitle>Card 3</CardTitle>
          <CardDescription>No hover effect</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Another card without hover effects.</p>
        </CardContent>
      </Card>
    </div>
  ),
}

export const AllCardsWithHover: Story = {
  render: () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <Card hover={true} className="w-[300px]">
        <CardHeader>
          <CardTitle>Card 1</CardTitle>
          <CardDescription>With hover effect</CardDescription>
        </CardHeader>
        <CardContent>
          <p>This card has hover effects enabled.</p>
        </CardContent>
      </Card>
      
      <Card hover={true} className="w-[300px]">
        <CardHeader>
          <CardTitle>Card 2</CardTitle>
          <CardDescription>With hover effect</CardDescription>
        </CardHeader>
        <CardContent>
          <p>This card also has hover effects enabled.</p>
        </CardContent>
      </Card>
      
      <Card hover={true} className="w-[300px]">
        <CardHeader>
          <CardTitle>Card 3</CardTitle>
          <CardDescription>With hover effect</CardDescription>
        </CardHeader>
        <CardContent>
          <p>This card has hover effects enabled too.</p>
        </CardContent>
      </Card>
    </div>
  ),
} 