# POIZON UI Kit

Современная компонентная библиотека для создания пользовательского интерфейса.

## 🎨 Компоненты

### UI Components
- **Button** - Кнопки с различными вариантами и размерами
- **Card** - Карточки с заголовком, описанием и содержимым
- **Input** - Поля ввода с поддержкой различных типов

## 🚀 Быстрый старт

### Установка
```bash
npm install @poizon/ui-kit
```

### Использование
```tsx
import { Button, Card, CardHeader, CardTitle, CardContent, Input } from '@poizon/ui-kit'

// Кнопки
<Button variant="default">Primary Button</Button>
<Button variant="secondary">Secondary Button</Button>
<Button variant="outline">Outline Button</Button>

// Карточки
<Card>
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
  </CardHeader>
  <CardContent>
    <p>Card content goes here.</p>
  </CardContent>
</Card>

// Поля ввода
<Input placeholder="Enter your name" />
<Input type="email" placeholder="Enter your email" />
```

## 🎯 Примеры

### Кнопки
```tsx
import { Button } from '@poizon/ui-kit'

// Варианты
<Button variant="default">Default</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="destructive">Destructive</Button>
<Button variant="link">Link</Button>

// Размеры
<Button size="sm">Small</Button>
<Button size="default">Default</Button>
<Button size="lg">Large</Button>
```

### Карточки
```tsx
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@poizon/ui-kit'

<Card>
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>Card Description</CardDescription>
  </CardHeader>
  <CardContent>
    <p>This is the card content.</p>
  </CardContent>
</Card>
```

### Поля ввода
```tsx
import { Input } from '@poizon/ui-kit'

<Input placeholder="Enter your name" />
<Input type="email" placeholder="Enter your email" />
<Input type="password" placeholder="Enter your password" />
<Input disabled placeholder="Disabled input" />
```

## 🔧 Разработка

### Установка зависимостей
```bash
npm install
```

### Сборка
```bash
npm run build
```

### Storybook
```bash
npm run storybook
```

## 📄 Лицензия

MIT License
