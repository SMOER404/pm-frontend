# Компоненты типографии

Набор компонентов типографии на базе shadcn/ui для создания единообразного отображения текста во всём приложении.

## Особенности

- ✅ Использование кастомных шрифтов (Azorath, DrukTextCyr)
- ✅ Без RTL-поддержки
- ✅ Стилизация только через пропсы (без className)
- ✅ Обязательная доступность (ARIA, семантические теги)
- ✅ TypeScript поддержка
- ✅ Storybook документация
- ✅ Полное покрытие тестами

## Компоненты

### Heading

Компонент для отображения заголовков всех уровней (h1-h6).

#### Пропсы

| Проп | Тип | По умолчанию | Описание |
|------|-----|--------------|----------|
| `level` | `'h1' \| 'h2' \| 'h3' \| 'h4' \| 'h5' \| 'h6'` | `'h1'` | Уровень заголовка |
| `color` | `'primary' \| 'secondary' \| 'brand' \| 'error'` | `'primary'` | Цвет текста |
| `align` | `'left' \| 'center' \| 'right'` | `'left'` | Выравнивание текста |
| `iconLeft` | `React.ReactNode` | - | Иконка слева от текста |
| `iconRight` | `React.ReactNode` | - | Иконка справа от текста |

#### Размеры

- **h1**: 32px (40px line-height)
- **h2**: 28px (36px line-height)
- **h3**: 24px (32px line-height)
- **h4**: 20px (28px line-height)
- **h5**: 18px (24px line-height)
- **h6**: 16px (20px line-height)

#### Примеры

```tsx
import { Heading } from '@poizon/ui-kit'
import { Star } from 'lucide-react'

// Базовый заголовок
<Heading>Главный заголовок</Heading>

// Заголовок с иконкой
<Heading level="h2" iconLeft={<Star />}>
  Заголовок с иконкой
</Heading>

// Заголовок с выравниванием и цветом
<Heading level="h3" color="brand" align="center">
  Брендовый заголовок по центру
</Heading>
```

### Text

Компонент для отображения текстового контента с различными стилями.

#### Пропсы

| Проп | Тип | По умолчанию | Описание |
|------|-----|--------------|----------|
| `type` | `'body' \| 'caption' \| 'secondary'` | `'body'` | Тип текста |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Размер текста |
| `weight` | `'normal' \| 'bold'` | `'normal'` | Вес шрифта |
| `color` | `'primary' \| 'secondary' \| 'muted'` | `'primary'` | Цвет текста |
| `as` | `'p' \| 'span' \| 'div'` | `'p'` | HTML элемент |

#### Размеры

- **sm**: 14px (20px line-height)
- **md**: 16px (24px line-height)
- **lg**: 18px (28px line-height)

#### Примеры

```tsx
import { Text } from '@poizon/ui-kit'

// Основной текст
<Text>Обычный текст</Text>

// Текст с параметрами
<Text type="body" size="lg" weight="bold" color="primary">
  Большой жирный текст
</Text>

// Текст как span
<Text as="span" type="caption" color="muted">
  Подпись
</Text>
```

### Link

Компонент для отображения ссылок с автоматической иконкой для внешних ссылок.

#### Пропсы

| Проп | Тип | По умолчанию | Описание |
|------|-----|--------------|----------|
| `underline` | `'none' \| 'always' \| 'hover'` | `'hover'` | Вариант подчёркивания |
| `color` | `'primary' \| 'secondary' \| 'muted'` | `'primary'` | Цвет ссылки |
| `showExternalIcon` | `boolean` | `true` | Показывать иконку для внешних ссылок |

#### Особенности

- Автоматически добавляет иконку ↗ для ссылок с `target="_blank"` или начинающихся с `http`
- Автоматически добавляет `rel="noopener noreferrer"` для внешних ссылок
- Поддерживает все стандартные пропы `<a>` элемента

#### Примеры

```tsx
import { Link } from '@poizon/ui-kit'

// Внутренняя ссылка
<Link href="/about">О нас</Link>

// Внешняя ссылка с иконкой
<Link href="https://example.com" target="_blank">
  Внешняя ссылка
</Link>

// Ссылка без подчёркивания
<Link href="#" underline="none" color="secondary">
  Ссылка без подчёркивания
</Link>
```

### List

Компонент для отображения упорядоченных и неупорядоченных списков.

#### Пропсы

| Проп | Тип | По умолчанию | Описание |
|------|-----|--------------|----------|
| `type` | `'ordered' \| 'unordered'` | `'unordered'` | Тип списка |
| `marker` | `'dot' \| 'check' \| 'none'` | `'dot'` | Тип маркера (только для unordered) |
| `spacing` | `'sm' \| 'md' \| 'lg'` | `'md'` | Отступы между элементами |
| `items` | `React.ReactNode[]` | - | Массив элементов (альтернатива children) |

#### Примеры

```tsx
import { List } from '@poizon/ui-kit'

// Маркированный список с точками
<List type="unordered" marker="dot">
  <li>Первый элемент</li>
  <li>Второй элемент</li>
</List>

// Список с галочками
<List type="unordered" marker="check">
  <li>Выполненная задача</li>
  <li>Ещё одна задача</li>
</List>

// Нумерованный список
<List type="ordered">
  <li>Первый пункт</li>
  <li>Второй пункт</li>
</List>

// Список через проп items
<List 
  type="unordered" 
  marker="dot"
  items={['Элемент 1', 'Элемент 2', 'Элемент 3']}
/>
```

## Дизайн-токены

### Шрифты

```css
--font-family-main: "Azorath", system-ui, sans-serif;
--font-family-heading: "DrukTextCyr", system-ui, sans-serif;
```

### Размеры

```css
--font-size-sm: 14px;
--font-size-md: 16px;
--font-size-lg: 18px;
--font-size-h1: 32px;
--font-size-h2: 28px;
--font-size-h3: 24px;
--font-size-h4: 20px;
--font-size-h5: 18px;
--font-size-h6: 16px;
```

### Цвета

```css
--text-primary: #292D30;
--text-secondary: #6B7280;
--text-muted: #9CA3AF;
```

## Доступность

Все компоненты созданы с учётом принципов доступности:

- **Семантические теги**: Используются правильные HTML элементы (h1-h6, p, a, ul, ol, li)
- **ARIA атрибуты**: Поддержка aria-label, aria-hidden для декоративных элементов
- **Фокус**: Правильная обработка фокуса для интерактивных элементов
- **Контрастность**: Цвета соответствуют стандартам WCAG
- **Скринридеры**: Корректная работа с программами чтения с экрана

## Тестирование

Каждый компонент имеет полное покрытие тестами:

- Рендеринг с различными пропсами
- Применение CSS классов
- Работа с ref
- Доступность
- Интерактивность

Запуск тестов:

```bash
npm test
```

## Storybook

Для просмотра всех вариантов компонентов запустите Storybook:

```bash
npm run storybook
```

Доступные истории:
- **Heading**: Все уровни, цвета, выравнивания, иконки
- **Text**: Типы, размеры, веса, цвета
- **Link**: Варианты подчёркивания, внешние ссылки
- **List**: Упорядоченные/неупорядоченные списки, маркеры

## Ограничения

- ❌ Нет поддержки RTL
- ❌ Нет кастомных CSS классов (только через пропсы)
- ❌ Нет встроенных стилей (только Tailwind CSS)

## Установка и использование

```bash
# Установка
npm install @poizon/ui-kit

# Импорт стилей
import '@poizon/ui-kit/styles'

# Импорт компонентов
import { Heading, Text, Link, List } from '@poizon/ui-kit'
```

## Примеры использования

Смотрите файл `demo.tsx` для полного примера использования всех компонентов типографии в реальном приложении.
