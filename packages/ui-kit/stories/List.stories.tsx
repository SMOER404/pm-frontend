import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { List, ListItem } from '../components/ui/list'

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
      <ListItem>Первый элемент с точкой</ListItem>
      <ListItem>Второй элемент с точкой</ListItem>
      <ListItem>Третий элемент с точкой</ListItem>
    </List>
  ),
}

export const UnorderedWithChecks: Story = {
  render: () => (
    <List type="unordered" marker="check" spacing="md">
      <ListItem>Выполненная задача</ListItem>
      <ListItem>Ещё одна выполненная задача</ListItem>
      <ListItem>И ещё одна выполненная задача</ListItem>
    </List>
  ),
}

export const UnorderedWithoutMarkers: Story = {
  render: () => (
    <List type="unordered" marker="none" spacing="md">
      <ListItem>Элемент без маркера</ListItem>
      <ListItem>Ещё один элемент без маркера</ListItem>
      <ListItem>И ещё один элемент без маркера</ListItem>
    </List>
  ),
}

export const Ordered: Story = {
  render: () => (
    <List type="ordered" spacing="md">
      <ListItem>Первый пронумерованный элемент</ListItem>
      <ListItem>Второй пронумерованный элемент</ListItem>
      <ListItem>Третий пронумерованный элемент</ListItem>
    </List>
  ),
}

export const SpacingVariants: Story = {
  render: () => (
    <div className="space-y-8">
      <div>
        <h3 className="mb-2">Маленькие отступы (sm)</h3>
        <List type="unordered" marker="dot" spacing="sm">
          <ListItem>Элемент с маленьким отступом</ListItem>
          <ListItem>Ещё один элемент</ListItem>
          <ListItem>И ещё один элемент</ListItem>
        </List>
      </div>
      
      <div>
        <h3 className="mb-2">Средние отступы (md)</h3>
        <List type="unordered" marker="dot" spacing="md">
          <ListItem>Элемент со средним отступом</ListItem>
          <ListItem>Ещё один элемент</ListItem>
          <ListItem>И ещё один элемент</ListItem>
        </List>
      </div>
      
      <div>
        <h3 className="mb-2">Большие отступы (lg)</h3>
        <List type="unordered" marker="dot" spacing="lg">
          <ListItem>Элемент с большим отступом</ListItem>
          <ListItem>Ещё один элемент</ListItem>
          <ListItem>И ещё один элемент</ListItem>
        </List>
      </div>
    </div>
  ),
}

export const MixedContent: Story = {
  render: () => (
    <div className="space-y-6">
      <List type="unordered" marker="check" spacing="md">
        <ListItem>
          <strong>Важная задача:</strong> Создать компоненты типографии
        </ListItem>
        <ListItem>
          <em>Дополнительная задача:</em> Написать тесты
        </ListItem>
        <ListItem>
          <span className="text-[#9CA3AF]">Необязательная задача: Документация</span>
        </ListItem>
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
        <ListItem>Поддержка всех уровней заголовков (h1-h6)</ListItem>
        <ListItem>Различные варианты подчёркивания ссылок</ListItem>
        <ListItem>Автоматическая иконка для внешних ссылок</ListItem>
        <ListItem>Множественные типы маркеров списков</ListItem>
        <ListItem>Настраиваемые отступы и интервалы</ListItem>
      </List>
      
      <h3>Порядок выполнения</h3>
      <List type="ordered" spacing="md">
        <ListItem>Создать базовые компоненты</ListItem>
        <ListItem>Добавить варианты стилизации</ListItem>
        <ListItem>Написать Storybook истории</ListItem>
        <ListItem>Протестировать доступность</ListItem>
      </List>
    </div>
  ),
}
