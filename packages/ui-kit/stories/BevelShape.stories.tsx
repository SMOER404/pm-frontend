import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { BevelShape } from '../components/ui/bevel-shape';

const meta: Meta<typeof BevelShape> = {
  title: 'UI/BevelShape',
  component: BevelShape,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    bevelSize: {
      control: { type: 'select' },
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
    },
    fill: {
      control: { type: 'color' },
    },
    stroke: {
      control: { type: 'color' },
    },
    strokeWidth: {
      control: { type: 'number', min: 0, max: 10, step: 0.5 },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    bevelSize: 'md',
    fill: '#AFEB0F',
    stroke: '#AFEB0F',
    strokeWidth: 1,
  },
  render: (args) => (
    <div className="w-64 h-32 relative">
      <BevelShape {...args} />
    </div>
  ),
};

export const AllBevelSizes: Story = {
  render: () => (
    <div className="grid grid-cols-2 gap-4">
      <div className="w-32 h-16 relative">
        <BevelShape bevelSize="xs" fill="#AFEB0F" stroke="#AFEB0F" />
        <div className="absolute inset-0 flex items-center justify-center text-xs text-black font-bold">
          XS
        </div>
      </div>
      <div className="w-32 h-16 relative">
        <BevelShape bevelSize="sm" fill="#AFEB0F" stroke="#AFEB0F" />
        <div className="absolute inset-0 flex items-center justify-center text-xs text-black font-bold">
          SM
        </div>
      </div>
      <div className="w-32 h-16 relative">
        <BevelShape bevelSize="md" fill="#AFEB0F" stroke="#AFEB0F" />
        <div className="absolute inset-0 flex items-center justify-center text-xs text-black font-bold">
          MD
        </div>
      </div>
      <div className="w-32 h-16 relative">
        <BevelShape bevelSize="lg" fill="#AFEB0F" stroke="#AFEB0F" />
        <div className="absolute inset-0 flex items-center justify-center text-xs text-black font-bold">
          LG
        </div>
      </div>
      <div className="w-32 h-16 relative">
        <BevelShape bevelSize="xl" fill="#AFEB0F" stroke="#AFEB0F" />
        <div className="absolute inset-0 flex items-center justify-center text-xs text-black font-bold">
          XL
        </div>
      </div>
    </div>
  ),
};

export const DifferentColors: Story = {
  render: () => (
    <div className="grid grid-cols-2 gap-4">
      <div className="w-32 h-16 relative">
        <BevelShape fill="#AFEB0F" stroke="#AFEB0F" />
        <div className="absolute inset-0 flex items-center justify-center text-xs text-black font-bold">
          Brand
        </div>
      </div>
      <div className="w-32 h-16 relative">
        <BevelShape fill="#292D30" stroke="#292D30" />
        <div className="absolute inset-0 flex items-center justify-center text-xs text-white font-bold">
          Primary
        </div>
      </div>
      <div className="w-32 h-16 relative">
        <BevelShape fill="transparent" stroke="#AFEB0F" strokeWidth={2} />
        <div className="absolute inset-0 flex items-center justify-center text-xs text-black font-bold">
          Outlined
        </div>
      </div>
      <div className="w-32 h-16 relative">
        <BevelShape fill="rgba(41, 45, 48, 0.2)" stroke="transparent" />
        <div className="absolute inset-0 flex items-center justify-center text-xs text-black font-bold">
          Ghost
        </div>
      </div>
    </div>
  ),
};

export const Interactive: Story = {
  render: () => (
    <div className="w-64 h-32 relative group">
      <BevelShape 
        fill="#AFEB0F" 
        stroke="#AFEB0F" 
        pathClassName="group-hover:fill-[#292D30] group-hover:stroke-[#292D30] transition-all duration-200"
      />
      <div className="absolute inset-0 flex items-center justify-center text-black font-bold group-hover:text-[#AFEB0F] transition-colors duration-200">
        Hover me!
      </div>
    </div>
  ),
};
