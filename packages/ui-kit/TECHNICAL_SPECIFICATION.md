# Техническое задание: UI библиотека на основе shadcn/ui

## Общие требования
- **Базовый фундамент**: [shadcn/ui](https://ui.shadcn.com/docs/)
- **Дополнительные референсы**: Material UI (только для исследования пропсов)
- **Стилизация**: Tailwind CSS + CSS-переменные
- **Типизация**: TypeScript
- **Доступность**: Полная поддержка WAI-ARIA
- **Архитектура**: Использование Radix UI примитивов + кастомная стилизация

## Структура компонентов

### 1. Навигация

#### 1.1 Breadcrumb (Хлебные крошки)
```typescript
interface BreadcrumbProps {
  items: Array<{
    label: string
    href?: string
    icon?: React.ReactNode
  }>
  separator?: React.ReactNode
  maxItems?: number
  showIcons?: boolean
  variant?: 'default' | 'minimal'
  size?: 'sm' | 'default' | 'lg'
}
```
**Функциональность:**
- Поддержка иерархии с автоматическим разделителем
- Адаптивность с ограничением количества элементов
- Кастомный разделитель (иконка или текст)
- Поддержка иконок для каждого элемента
- Автоматическое скрытие промежуточных элементов при переполнении

#### 1.2 Menu (Меню)
```typescript
interface MenuProps {
  trigger: React.ReactNode
  items: Array<{
    label: string
    icon?: React.ReactNode
    href?: string
    onClick?: () => void
    disabled?: boolean
    children?: MenuItem[]
  }>
  align?: 'start' | 'center' | 'end'
  side?: 'top' | 'right' | 'bottom' | 'left'
  sideOffset?: number
  alignOffset?: number
  open?: boolean
  onOpenChange?: (open: boolean) => void
}
```
**Функциональность:**
- Выпадающие списки с поддержкой вложенности
- Позиционирование относительно триггера
- Поддержка иконок и разделителей
- Контролируемое состояние открытия/закрытия

#### 1.3 Tabs (Табы)
```typescript
interface TabsProps {
  defaultValue?: string
  value?: string
  onValueChange?: (value: string) => void
  orientation?: 'horizontal' | 'vertical'
  variant?: 'default' | 'outlined' | 'pills'
  size?: 'sm' | 'default' | 'lg'
  fullWidth?: boolean
  children: React.ReactNode
}

interface TabTriggerProps {
  value: string
  disabled?: boolean
  icon?: React.ReactNode
  children: React.ReactNode
}

interface TabContentProps {
  value: string
  children: React.ReactNode
}
```
**Функциональность:**
- Горизонтальные и вертикальные табы
- Анимация переключения с использованием Framer Motion
- Контролируемое и неконтролируемое состояние
- Поддержка иконок в табах
- Автоматическая активация при фокусе

#### 1.4 MobileNavigation (Мобильная навигация)
```typescript
interface MobileNavigationProps {
  items: Array<{
    label: string
    icon: React.ReactNode
    href?: string
    onClick?: () => void
    badge?: string | number
    active?: boolean
  }>
  position?: 'bottom' | 'top'
  variant?: 'default' | 'floating'
  showLabels?: boolean
  activeIndex?: number
  onItemClick?: (index: number) => void
}
```
**Функциональность:**
- Fixed-позиционирование внизу или вверху экрана
- Иконки + текст с возможностью скрытия текста
- Активное состояние с анимацией
- Поддержка бейджей для уведомлений
- Floating вариант с тенью

#### 1.5 Drawer
```typescript
interface DrawerProps {
  open?: boolean
  onOpenChange?: (open: boolean) => void
  side?: 'left' | 'right' | 'top' | 'bottom'
  variant?: 'temporary' | 'persistent'
  overlay?: boolean
  overlayOpacity?: number
  width?: string | number
  height?: string | number
  children: React.ReactNode
}

interface DrawerTriggerProps {
  children: React.ReactNode
}

interface DrawerContentProps {
  children: React.ReactNode
  className?: string
}

interface DrawerHeaderProps {
  children: React.ReactNode
  showClose?: boolean
}

interface DrawerBodyProps {
  children: React.ReactNode
  scrollable?: boolean
}

interface DrawerFooterProps {
  children: React.ReactNode
}
```
**Функциональность:**
- Варианты: временный (с оверлеем) и постоянный
- Позиционирование: left/right/top/bottom
- Настраиваемый оверлей с контролем прозрачности
- Кастомные размеры
- Поддержка скролла в контенте

#### 1.6 Accordion
```typescript
interface AccordionProps {
  type?: 'single' | 'multiple'
  defaultValue?: string | string[]
  value?: string | string[]
  onValueChange?: (value: string | string[]) => void
  collapsible?: boolean
  children: React.ReactNode
}

interface AccordionItemProps {
  value: string
  disabled?: boolean
  children: React.ReactNode
}

interface AccordionTriggerProps {
  children: React.ReactNode
  icon?: React.ReactNode
  iconPosition?: 'left' | 'right'
  className?: string
}

interface AccordionContentProps {
  children: React.ReactNode
  className?: string
}
```
**Функциональность:**
- Одиночный и множественный выбор
- Кастомные иконки с позиционированием
- Плавная анимация с использованием Radix UI
- Поддержка отключенных элементов

#### 1.7 Modal
```typescript
interface ModalProps {
  open?: boolean
  onOpenChange?: (open: boolean) => void
  size?: 'sm' | 'default' | 'lg' | 'xl' | 'full'
  centered?: boolean
  closeOnOverlayClick?: boolean
  closeOnEscape?: boolean
  children: React.ReactNode
}

interface ModalTriggerProps {
  children: React.ReactNode
}

interface ModalContentProps {
  children: React.ReactNode
  className?: string
}

interface ModalHeaderProps {
  children: React.ReactNode
  showClose?: boolean
}

interface ModalBodyProps {
  children: React.ReactNode
  scrollable?: boolean
}

interface ModalFooterProps {
  children: React.ReactNode
  align?: 'start' | 'center' | 'end'
}
```
**Функциональность:**
- Контролируемое открытие/закрытие
- Кастомные размеры с предустановленными вариантами
- Доступное закрытие (Escape, оверлей, кнопка)
- Центрирование по вертикали
- Поддержка скролла в контенте

#### 1.8 Carousel
```typescript
interface CarouselProps {
  items: Array<{
    id: string
    content: React.ReactNode
  }>
  autoPlay?: boolean
  autoPlayInterval?: number
  showArrows?: boolean
  showDots?: boolean
  showIndicators?: boolean
  infinite?: boolean
  slidesToShow?: number
  slidesToScroll?: number
  responsive?: Array<{
    breakpoint: number
    settings: Partial<CarouselProps>
  }>
  onSlideChange?: (index: number) => void
}

interface CarouselArrowProps {
  direction: 'prev' | 'next'
  onClick?: () => void
  disabled?: boolean
  className?: string
}

interface CarouselIndicatorProps {
  total: number
  current: number
  onClick?: (index: number) => void
  variant?: 'dots' | 'numbers' | 'progress'
}
```
**Функциональность:**
- Автопрокрутка с настраиваемым интервалом
- Кастомные стрелки навигации
- Индикаторы прогресса (точки, номера, полоса)
- Адаптивность с настройками для разных экранов
- Бесконечная прокрутка
- Поддержка множественных слайдов

### 2. Feedback

#### 2.1 Dialog
```typescript
interface DialogProps {
  open?: boolean
  onOpenChange?: (open: boolean) => void
  type?: 'alert' | 'confirm' | 'custom'
  title?: string
  description?: string
  actions?: Array<{
    label: string
    variant?: 'default' | 'secondary' | 'destructive'
    onClick?: () => void
    disabled?: boolean
  }>
  size?: 'sm' | 'default' | 'lg' | 'xl'
  fullScreen?: boolean
  children?: React.ReactNode
}

interface AlertDialogProps {
  open?: boolean
  onOpenChange?: (open: boolean) => void
  title: string
  description?: string
  actionLabel: string
  cancelLabel?: string
  onAction?: () => void
  onCancel?: () => void
  variant?: 'default' | 'destructive'
}
```
**Функциональность:**
- Варианты: alert/confirm/custom
- Кастомные действия с различными вариантами кнопок
- Полноэкранный режим для мобильных устройств
- Предустановленные диалоги для подтверждения и предупреждений

#### 2.2 Skeleton
```typescript
interface SkeletonProps {
  variant?: 'text' | 'circular' | 'rectangular'
  width?: string | number
  height?: string | number
  animation?: 'pulse' | 'wave' | 'none'
  speed?: 'slow' | 'normal' | 'fast'
  className?: string
}

interface SkeletonTextProps {
  lines?: number
  lineHeight?: string | number
  spacing?: string | number
  variant?: 'heading' | 'body' | 'caption'
}

interface SkeletonAvatarProps {
  size?: 'sm' | 'default' | 'lg' | 'xl'
  variant?: 'circular' | 'square'
}
```
**Функциональность:**
- Варианты: text/circle/rect с предустановленными размерами
- Анимация пульсации с настраиваемой скоростью
- Специализированные компоненты для текста и аватаров
- Поддержка множественных строк текста

#### 2.3 Progress
```typescript
interface ProgressProps {
  value?: number
  max?: number
  variant?: 'linear' | 'circular'
  size?: 'sm' | 'default' | 'lg'
  color?: 'default' | 'success' | 'warning' | 'error'
  showValue?: boolean
  animated?: boolean
  indeterminate?: boolean
  className?: string
}

interface CircularProgressProps extends ProgressProps {
  strokeWidth?: number
  strokeLinecap?: 'round' | 'square' | 'butt'
  trackColor?: string
  progressColor?: string
}
```
**Функциональность:**
- Линейный и круговой прогресс
- Определяемый и неопределяемый прогресс
- Цветовые варианты для разных состояний
- Анимация загрузки
- Отображение значения в процентах

### 3. Data Display

#### 3.1 Badge
```typescript
interface BadgeProps {
  children?: React.ReactNode
  variant?: 'default' | 'secondary' | 'destructive' | 'outline'
  size?: 'sm' | 'default' | 'lg'
  color?: 'default' | 'success' | 'warning' | 'error' | 'info'
  max?: number
  showZero?: boolean
  dot?: boolean
  className?: string
}

interface BadgeWithIconProps extends BadgeProps {
  icon?: React.ReactNode
  iconPosition?: 'left' | 'right'
}
```
**Функциональность:**
- Числовые и точечные бейджи
- Кастомное позиционирование
- Цветовые варианты
- Ограничение максимального значения с "+"
- Поддержка иконок

#### 3.2 Chip
```typescript
interface ChipProps {
  label: string
  variant?: 'filled' | 'outlined' | 'soft'
  size?: 'sm' | 'default' | 'lg'
  color?: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'error'
  avatar?: React.ReactNode
  icon?: React.ReactNode
  onDelete?: () => void
  onClick?: () => void
  disabled?: boolean
  className?: string
}
```
**Функциональность:**
- Варианты: filled/outlined/soft
- Кликабельные чипы с обработчиками событий
- Кастомные аватары и иконки
- Возможность удаления с иконкой
- Цветовые варианты

#### 3.3 Tooltip
```typescript
interface TooltipProps {
  content: React.ReactNode
  children: React.ReactNode
  side?: 'top' | 'right' | 'bottom' | 'left'
  align?: 'start' | 'center' | 'end'
  sideOffset?: number
  alignOffset?: number
  delayDuration?: number
  skipDelayDuration?: number
  open?: boolean
  onOpenChange?: (open: boolean) => void
  variant?: 'default' | 'light' | 'dark'
  size?: 'sm' | 'default' | 'lg'
  arrow?: boolean
  className?: string
}
```
**Функциональность:**
- Контролируемое появление с задержкой
- Кастомные задержки для показа и скрытия
- Различные позиции и выравнивание
- Стрелка-указатель
- Варианты стилизации

### 4. Inputs

#### 4.1 Checkbox
```typescript
interface CheckboxProps {
  checked?: boolean
  defaultChecked?: boolean
  onCheckedChange?: (checked: boolean) => void
  disabled?: boolean
  required?: boolean
  indeterminate?: boolean
  size?: 'sm' | 'default' | 'lg'
  variant?: 'default' | 'outlined'
  label?: string
  description?: string
  error?: boolean
  errorMessage?: string
  className?: string
}

interface CheckboxGroupProps {
  value?: string[]
  defaultValue?: string[]
  onValueChange?: (value: string[]) => void
  options: Array<{
    value: string
    label: string
    description?: string
    disabled?: boolean
  }>
  orientation?: 'horizontal' | 'vertical'
  error?: boolean
  errorMessage?: string
}
```
**Функциональность:**
- Группы элементов с контролируемым состоянием
- Неопределенное состояние для частичного выбора
- Кастомные иконки
- Поддержка описаний и ошибок
- Горизонтальное и вертикальное расположение

#### 4.2 RadioGroup
```typescript
interface RadioGroupProps {
  value?: string
  defaultValue?: string
  onValueChange?: (value: string) => void
  options: Array<{
    value: string
    label: string
    description?: string
    disabled?: boolean
  }>
  orientation?: 'horizontal' | 'vertical'
  size?: 'sm' | 'default' | 'lg'
  variant?: 'default' | 'outlined'
  error?: boolean
  errorMessage?: string
  required?: boolean
}

interface RadioProps {
  value: string
  disabled?: boolean
  required?: boolean
  size?: 'sm' | 'default' | 'lg'
  variant?: 'default' | 'outlined'
  label?: string
  description?: string
}
```
**Функциональность:**
- Контролируемое состояние
- Горизонтальное и вертикальное расположение
- Кастомные стили с вариантами
- Поддержка описаний и ошибок
- Обязательные поля

#### 4.3 Select
```typescript
interface SelectProps {
  value?: string
  defaultValue?: string
  onValueChange?: (value: string) => void
  options: Array<{
    value: string
    label: string
    icon?: React.ReactNode
    disabled?: boolean
    group?: string
  }>
  placeholder?: string
  searchable?: boolean
  multiple?: boolean
  clearable?: boolean
  disabled?: boolean
  error?: boolean
  errorMessage?: string
  size?: 'sm' | 'default' | 'lg'
  variant?: 'default' | 'outlined'
  maxHeight?: string | number
  loading?: boolean
  noOptionsMessage?: string
  className?: string
}

interface SelectOptionProps {
  value: string
  label: string
  icon?: React.ReactNode
  disabled?: boolean
  selected?: boolean
  highlighted?: boolean
}

interface SelectGroupProps {
  label: string
  children: React.ReactNode
}
```
**Функциональность:**
- Одиночный и множественный выбор
- Поиск по вариантам с фильтрацией
- Кастомные option-элементы с иконками
- Группировка опций
- Загрузка с индикатором
- Очистка выбранных значений

#### 4.4 ToggleButton
```typescript
interface ToggleButtonProps {
  value?: string
  pressed?: boolean
  defaultPressed?: boolean
  onPressedChange?: (pressed: boolean) => void
  disabled?: boolean
  size?: 'sm' | 'default' | 'lg'
  variant?: 'default' | 'outlined' | 'ghost'
  icon?: React.ReactNode
  label?: string
  className?: string
}

interface ToggleButtonGroupProps {
  value?: string | string[]
  defaultValue?: string | string[]
  onValueChange?: (value: string | string[]) => void
  type?: 'single' | 'multiple'
  orientation?: 'horizontal' | 'vertical'
  disabled?: boolean
  size?: 'sm' | 'default' | 'lg'
  variant?: 'default' | 'outlined' | 'ghost'
  children: React.ReactNode
}
```
**Функциональность:**
- Одиночный и групповой режим
- Контролируемое состояние
- Различные размеры и варианты
- Поддержка иконок и текста
- Горизонтальное и вертикальное расположение

#### 4.5 Rating
```typescript
interface RatingProps {
  value?: number
  defaultValue?: number
  onValueChange?: (value: number) => void
  max?: number
  precision?: 0.5 | 1
  readOnly?: boolean
  disabled?: boolean
  size?: 'sm' | 'default' | 'lg'
  icon?: React.ReactNode
  emptyIcon?: React.ReactNode
  halfIcon?: React.ReactNode
  color?: 'default' | 'primary' | 'warning'
  showValue?: boolean
  className?: string
}
```
**Функциональность:**
- Кастомные иконки для заполненных, пустых и половинных состояний
- Половинные значения (0.5)
- Read-only режим
- Отображение числового значения
- Цветовые варианты

#### 4.6 TextArea
```typescript
interface TextAreaProps {
  value?: string
  defaultValue?: string
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
  placeholder?: string
  disabled?: boolean
  readOnly?: boolean
  error?: boolean
  errorMessage?: string
  size?: 'sm' | 'default' | 'lg'
  variant?: 'default' | 'outlined'
  rows?: number
  minRows?: number
  maxRows?: number
  autoResize?: boolean
  maxLength?: number
  showCharacterCount?: boolean
  label?: string
  helperText?: string
  required?: boolean
  className?: string
}
```
**Функциональность:**
- Авторазмер с минимальным и максимальным количеством строк
- Максимальная длина с кастомным счетчиком символов
- Валидация с отображением ошибок
- Поддержка меток и вспомогательного текста
- Контролируемое и неконтролируемое состояние

## Требования к реализации

### 1. Архитектурные принципы
- **На основе shadcn/ui**: Использование существующих примитивов Radix UI
- **Сохранение подхода к стилизации**: Использование `class-variance-authority` для вариантов
- **Композиция**: Разделение на логические части (Trigger, Content, Header, Body, Footer)
- **ForwardRef**: Все компоненты должны поддерживать ref forwarding

### 2. Стилизация
- **Tailwind CSS**: Использование утилитарных классов
- **CSS-переменные**: Для динамических значений (цвета, размеры)
- **BevelShape**: Использование существующего компонента для скошенных форм
- **Анимации**: Использование `tailwindcss-animate` и Framer Motion

### 3. Доступность
- **WAI-ARIA**: Полная поддержка атрибутов доступности
- **Клавиатурная навигация**: Поддержка Tab, Enter, Escape, стрелок
- **Screen readers**: Корректные aria-label, aria-describedby, role
- **Focus management**: Правильное управление фокусом

### 4. Документация
- **Storybook**: Демонстрации для каждого компонента
- **TypeScript**: Полная типизация всех пропсов
- **Примеры использования**: Базовые и продвинутые сценарии
- **API Reference**: Описание всех пропсов и их значений

### 5. Тестирование
- **Unit tests**: Тестирование основной функциональности
- **Integration tests**: Тестирование взаимодействия компонентов
- **Accessibility tests**: Проверка доступности
- **Visual regression tests**: Проверка визуальных изменений

### 6. Производительность
- **Lazy loading**: Для тяжелых компонентов
- **Memoization**: Использование React.memo где необходимо
- **Bundle size**: Минимизация размера бандла
- **Tree shaking**: Поддержка удаления неиспользуемого кода

## Приоритеты разработки

### Phase 1 (MVP)
1. Breadcrumb
2. Tabs
3. Modal
4. Dialog
5. Skeleton
6. Progress
7. Badge
8. Checkbox
9. RadioGroup
10. TextArea

### Phase 2 (Расширение)
1. Menu
2. MobileNavigation
3. Drawer
4. Accordion
5. Carousel
6. Chip
7. Tooltip
8. Select
9. ToggleButton
10. Rating

## Технический стек

### Зависимости
- **Radix UI**: Примитивы для доступности
- **class-variance-authority**: Управление вариантами компонентов
- **tailwindcss-animate**: Анимации
- **framer-motion**: Сложные анимации
- **lucide-react**: Иконки

### Инструменты разработки
- **TypeScript**: Типизация
- **Storybook**: Документация и демонстрации
- **Jest + Testing Library**: Тестирование
- **ESLint + Prettier**: Линтинг и форматирование
- **tsup**: Сборка библиотеки

