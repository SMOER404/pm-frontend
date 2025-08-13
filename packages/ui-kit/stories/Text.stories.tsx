import type { Meta, StoryObj } from '@storybook/react'
import { Text } from '../components/ui/text'

const meta: Meta<typeof Text> = {
  title: 'Typography/Text',
  component: Text,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['body', 'caption', 'secondary'],
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
    },
    weight: {
      control: { type: 'select' },
      options: ['normal', 'bold'],
    },
    color: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'muted'],
    },
    as: {
      control: { type: 'select' },
      options: ['p', 'span', 'div'],
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: 'Текст по умолчанию с основным стилем и размером.',
  },
}

export const Types: Story = {
  render: () => (
    <div className="space-y-4 max-w-md">
      <Text type="body" size="md">
        Основной текст (body) - используется для основного контента страницы. 
        Имеет расслабленную высоту строки для лучшей читаемости.
      </Text>
      <Text type="caption" size="sm">
        Подпись (caption) - используется для небольших подписей и комментариев. 
        Имеет плотную высоту строки.
      </Text>
      <Text type="secondary" size="sm">
        Вторичный текст (secondary) - используется для дополнительной информации. 
        Имеет нормальную высоту строки.
      </Text>
    </div>
  ),
}

export const Sizes: Story = {
  render: () => (
    <div className="space-y-4">
      <Text size="sm">Маленький размер (14px)</Text>
      <Text size="md">Средний размер (16px)</Text>
      <Text size="lg">Большой размер (18px)</Text>
    </div>
  ),
}

export const Weights: Story = {
  render: () => (
    <div className="space-y-4">
      <Text weight="normal">Обычный вес шрифта</Text>
      <Text weight="bold">Жирный вес шрифта</Text>
    </div>
  ),
}

export const Colors: Story = {
  render: () => (
    <div className="space-y-4">
      <Text color="primary">Основной цвет текста</Text>
      <Text color="secondary">Вторичный цвет текста</Text>
      <Text color="muted">Приглушенный цвет текста</Text>
    </div>
  ),
}

export const Elements: Story = {
  render: () => (
    <div className="space-y-4">
      <Text as="p">Параграф (p) - блочный элемент</Text>
      <Text as="span">Спан (span) - строчный элемент</Text>
      <Text as="div">Див (div) - блочный элемент</Text>
    </div>
  ),
}

export const Combinations: Story = {
  render: () => (
    <div className="space-y-4 max-w-md">
      <Text type="body" size="lg" weight="bold" color="primary">
        Большой жирный основной текст
      </Text>
      <Text type="caption" size="sm" color="muted">
        Маленькая приглушенная подпись
      </Text>
      <Text type="secondary" size="md" weight="normal" color="secondary">
        Средний вторичный текст обычного веса
      </Text>
    </div>
  ),
}

export const LongText: Story = {
  render: () => (
    <div className="max-w-lg">
      <Text type="body" size="md">
        Это длинный текст для демонстрации того, как компонент Text обрабатывает 
        многострочный контент. Текст автоматически переносится и сохраняет 
        правильную высоту строки для оптимальной читаемости.
      </Text>
    </div>
  ),
}
