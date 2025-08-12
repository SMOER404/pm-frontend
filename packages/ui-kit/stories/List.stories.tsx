import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { List } from '../components/ui/list'

const meta: Meta<typeof List> = {
  title: 'Typography/List',
  component: List,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['ordered', 'unordered'],
    },
    marker: {
      control: { type: 'select' },
      options: ['dot', 'check', 'none'],
    },
    spacing: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    items: [
      'Первый элемент списка',
      'Второй элемент списка',
      'Третий элемент списка',
    ],
  },
}

export const UnorderedWithDots: Story = {
  render: () => (
    <List type="unordered" marker="dot" spacing="md">
      <li>Первый элемент с точкой</li>
      <li>Второй элемент с точкой</li>
      <li>Третий элемент с точкой</li>
    </List>
  ),
}

export const UnorderedWithChecks: Story = {
  render: () => (
    <List type="unordered" marker="check" spacing="md">
      <li>Выполненная задача</li>
      <li>Ещё одна выполненная задача</li>
      <li>И ещё одна выполненная задача</li>
    </List>
  ),
}

export const UnorderedWithoutMarkers: Story = {
  render: () => (
    <List type="unordered" marker="none" spacing="md">
      <li>Элемент без маркера</li>
      <li>Ещё один элемент без маркера</li>
      <li>И ещё один элемент без маркера</li>
    </List>
  ),
}

export const Ordered: Story = {
  render: () => (
    <List type="ordered" spacing="md">
      <li>Первый пронумерованный элемент</li>
      <li>Второй пронумерованный элемент</li>
      <li>Третий пронумерованный элемент</li>
    </List>
  ),
}

export const SpacingVariants: Story = {
  render: () => (
    <div className="space-y-8">
      <div>
        <h3 className="mb-2">Маленькие отступы (sm)</h3>
        <List type="unordered" marker="dot" spacing="sm">
          <li>Элемент с маленьким отступом</li>
          <li>Ещё один элемент</li>
          <li>И ещё один элемент</li>
        </List>
      </div>
      
      <div>
        <h3 className="mb-2">Средние отступы (md)</h3>
        <List type="unordered" marker="dot" spacing="md">
          <li>Элемент со средним отступом</li>
          <li>Ещё один элемент</li>
          <li>И ещё один элемент</li>
        </List>
      </div>
      
      <div>
        <h3 className="mb-2">Большие отступы (lg)</h3>
        <List type="unordered" marker="dot" spacing="lg">
          <li>Элемент с большим отступом</li>
          <li>Ещё один элемент</li>
          <li>И ещё один элемент</li>
        </List>
      </div>
    </div>
  ),
}

export const MixedContent: Story = {
  render: () => (
    <div className="space-y-6">
      <List type="unordered" marker="check" spacing="md">
        <li>
          <strong>Важная задача:</strong> Создать компоненты типографии
        </li>
        <li>
          <em>Дополнительная задача:</em> Написать тесты
        </li>
        <li>
          <span className="text-text-muted">Необязательная задача: Документация</span>
        </li>
      </List>
    </div>
  ),
}

export const WithItemsProp: Story = {
  render: () => (
    <List 
      type="unordered" 
      marker="dot" 
      spacing="md"
      items={[
        'Элемент через проп items',
        'Ещё один элемент',
        'И ещё один элемент',
      ]}
    />
  ),
}

export const ComplexExample: Story = {
  render: () => (
    <div className="max-w-md space-y-6">
      <h3>Список функций</h3>
      <List type="unordered" marker="check" spacing="md">
        <li>Поддержка всех уровней заголовков (h1-h6)</li>
        <li>Различные варианты подчёркивания ссылок</li>
        <li>Автоматическая иконка для внешних ссылок</li>
        <li>Множественные типы маркеров списков</li>
        <li>Настраиваемые отступы и интервалы</li>
      </List>
      
      <h3>Порядок выполнения</h3>
      <List type="ordered" spacing="md">
        <li>Создать базовые компоненты</li>
        <li>Добавить варианты стилизации</li>
        <li>Написать Storybook истории</li>
        <li>Протестировать доступность</li>
      </List>
    </div>
  ),
}
