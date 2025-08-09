# 📚 Storybook Guide - POIZON UI Kit

## 🚀 Запуск Storybook

### Разработка
```bash
npm run storybook
```
Storybook запустится на `http://localhost:6006`

### Сборка для продакшена
```bash
npm run build-storybook
```
Собранные файлы будут в папке `storybook-static/`

## 📖 Структура Stories

### Introduction
- **Главная страница** с описанием UI Kit
- Цветовая схема и дизайн-токены
- Быстрый старт и примеры использования

### UI Components
- **Button** - Кнопки с вариантами и размерами
- **Input** - Поля ввода с различными типами и состояниями
- **Card** - Карточки с заголовком, содержимым и футером

## 🎨 Использование Storybook

### Просмотр компонентов
1. Откройте Storybook в браузере
2. Выберите компонент в левом меню
3. Изучите различные варианты и состояния
4. Используйте Controls для интерактивного изменения пропсов

### Документация
- Каждый компонент имеет автоматически генерируемую документацию
- Пропсы и их типы отображаются автоматически
- Примеры кода доступны для копирования

### Интерактивность
- Используйте Controls для изменения пропсов в реальном времени
- Actions показывают события компонентов
- Backgrounds позволяют менять фон для тестирования

## 🔧 Добавление новых Stories

### Создание Story для компонента
```tsx
// stories/MyComponent.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import { MyComponent } from '../components/MyComponent';

const meta: Meta<typeof MyComponent> = {
  title: 'UI/MyComponent',
  component: MyComponent,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'secondary', 'outline'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'My Component',
  },
};
```

### Структура Story файла
1. **Meta** - конфигурация компонента
2. **Stories** - различные варианты компонента
3. **ArgTypes** - типы пропсов для Controls
4. **Parameters** - настройки отображения

## 🎯 Лучшие практики

### Именование
- Используйте понятные названия для stories
- Группируйте связанные stories
- Следуйте конвенции именования

### Документация
- Добавляйте описания для сложных компонентов
- Используйте JSDoc комментарии
- Включайте примеры использования

### Тестирование
- Создавайте stories для всех состояний компонента
- Тестируйте edge cases
- Проверяйте адаптивность

## 🚀 Развертывание

### GitHub Pages
```bash
npm run build-storybook
# Загрузите содержимое storybook-static/ в GitHub Pages
```

### Netlify
```bash
npm run build-storybook
# Настройте деплой из папки storybook-static/
```

## 📄 Лицензия

MIT License
