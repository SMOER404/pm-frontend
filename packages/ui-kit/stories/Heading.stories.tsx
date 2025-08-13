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
    size: {
      control: { type: 'select' },
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
    },
    color: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'error'],
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

export const AllSizes: Story = {
  render: () => (
    <div className="space-y-4">
      <Heading size="h1">Заголовок H1 (32px)</Heading>
      <Heading size="h2">Заголовок H2 (28px)</Heading>
      <Heading size="h3">Заголовок H3 (24px)</Heading>
      <Heading size="h4">Заголовок H4 (20px)</Heading>
      <Heading size="h5">Заголовок H5 (18px)</Heading>
      <Heading size="h6">Заголовок H6 (16px)</Heading>
    </div>
  ),
}

export const Colors: Story = {
  render: () => (
    <div className="space-y-4">
      <Heading color="primary">Основной цвет</Heading>
      <Heading color="secondary">Вторичный цвет</Heading>
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
        size="h2" 
        color="secondary" 
        align="center"
        iconLeft={<Star className="h-6 w-6" />}
      >
        Интерактивный заголовок
      </Heading>
    </div>
  ),
}
