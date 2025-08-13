import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Link } from '../components/ui/link'

const meta: Meta<typeof Link> = {
  title: 'Typography/Link',
  component: Link,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    underline: {
      control: { type: 'select' },
      options: ['none', 'always', 'hover'],
    },
    color: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'muted'],
    },
    showExternalIcon: {
      control: { type: 'boolean' },
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    href: '#',
    children: 'Ссылка по умолчанию',
  },
}

export const UnderlineVariants: Story = {
  render: () => (
    <div className="space-y-4">
      <Link href="#" underline="none">
        Без подчёркивания
      </Link>
      <Link href="#" underline="always">
        Всегда подчёркнутая
      </Link>
      <Link href="#" underline="hover">
        Подчёркивание при наведении
      </Link>
    </div>
  ),
}

export const Colors: Story = {
  render: () => (
    <div className="space-y-4">
      <Link href="#" color="primary">
        Основной цвет
      </Link>
      <Link href="#" color="secondary">
        Вторичный цвет
      </Link>
      <Link href="#" color="muted">
        Приглушенный цвет
      </Link>
    </div>
  ),
}

export const ExternalLinks: Story = {
  render: () => (
    <div className="space-y-4">
      <Link href="https://example.com" target="_blank" showExternalIcon={true}>
        Внешняя ссылка с иконкой (showExternalIcon=true)
      </Link>
      <Link href="https://example.com" target="_blank" showExternalIcon={false}>
        Внешняя ссылка без иконки (showExternalIcon=false)
      </Link>
      <Link href="/internal-page">
        Внутренняя ссылка
      </Link>
    </div>
  ),
}

export const WithText: Story = {
  render: () => (
    <div className="max-w-md space-y-4">
      <p>
        Это абзац с <Link href="#">встроенной ссылкой</Link> в тексте.
      </p>
      <p>
        И ещё один абзац с <Link href="https://example.com" target="_blank">внешней ссылкой</Link>.
      </p>
    </div>
  ),
}

export const Interactive: Story = {
  render: () => (
    <div className="space-y-4">
      <Link 
        href="#" 
        underline="hover" 
        color="primary"
        onClick={(e) => {
          e.preventDefault()
          alert('Ссылка нажата!')
        }}
      >
        Интерактивная ссылка
      </Link>
    </div>
  ),
}

export const Accessibility: Story = {
  render: () => (
    <div className="space-y-4">
      <Link href="#" aria-label="Подробнее о продукте">
        Подробнее
      </Link>
      <Link 
        href="https://example.com" 
        target="_blank"
        aria-label="Открыть в новой вкладке"
      >
        Открыть в новой вкладке
      </Link>
    </div>
  ),
}
