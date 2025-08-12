import type { Meta, StoryObj } from '@storybook/react'
import { Heading } from '../components/ui/heading'
import { Star, ArrowRight } from 'lucide-react'

const meta: Meta<typeof Heading> = {
  title: 'Typography/Heading',
  component: Heading,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    level: {
      control: { type: 'select' },
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
    },
    color: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'brand', 'error'],
    },
    align: {
      control: { type: 'select' },
      options: ['left', 'center', 'right'],
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: 'Заголовок по умолчанию',
  },
}

export const AllLevels: Story = {
  render: () => (
    <div className="space-y-4">
      <Heading level="h1">Заголовок H1 (32px)</Heading>
      <Heading level="h2">Заголовок H2 (28px)</Heading>
      <Heading level="h3">Заголовок H3 (24px)</Heading>
      <Heading level="h4">Заголовок H4 (20px)</Heading>
      <Heading level="h5">Заголовок H5 (18px)</Heading>
      <Heading level="h6">Заголовок H6 (16px)</Heading>
    </div>
  ),
}

export const Colors: Story = {
  render: () => (
    <div className="space-y-4">
      <Heading color="primary">Основной цвет</Heading>
      <Heading color="secondary">Вторичный цвет</Heading>
      <Heading color="brand">Брендовый цвет</Heading>
      <Heading color="error">Цвет ошибки</Heading>
    </div>
  ),
}

export const Alignment: Story = {
  render: () => (
    <div className="space-y-4 w-full">
      <Heading align="left">Выравнивание по левому краю</Heading>
      <Heading align="center">Выравнивание по центру</Heading>
      <Heading align="right">Выравнивание по правому краю</Heading>
    </div>
  ),
}

export const WithIcons: Story = {
  render: () => (
    <div className="space-y-4">
      <Heading iconLeft={<Star className="h-6 w-6" />}>
        Заголовок с иконкой слева
      </Heading>
      <Heading iconRight={<ArrowRight className="h-6 w-6" />}>
        Заголовок с иконкой справа
      </Heading>
      <Heading 
        iconLeft={<Star className="h-6 w-6" />}
        iconRight={<ArrowRight className="h-6 w-6" />}
      >
        Заголовок с иконками
      </Heading>
    </div>
  ),
}

export const Interactive: Story = {
  render: () => (
    <div className="space-y-4">
      <Heading 
        level="h2" 
        color="brand" 
        align="center"
        iconLeft={<Star className="h-6 w-6" />}
      >
        Интерактивный заголовок
      </Heading>
    </div>
  ),
}
