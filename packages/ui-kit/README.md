# UI Kit

Кастомная UI библиотека компонентов с скошенными углами в стиле Material UI.

## Компоненты

### CustomButton
Кнопка со скошенными углами с поддержкой различных вариантов, размеров и состояний.

**Варианты:** `primary`, `secondary`, `outlined`, `ghost`, `danger`
**Размеры:** `xs`, `sm`, `md`, `lg`, `xl`

```tsx
import CustomButton from "./components/custom-button"

<CustomButton variant="primary" size="md">
  Click me
</CustomButton>
```

### CustomBadge
Бейдж для отображения статуса, количества или меток.

**Варианты:** `default`, `primary`, `secondary`, `success`, `warning`, `error`
**Размеры:** `sm`, `md`, `lg`

```tsx
import CustomBadge from "./components/custom-badge"

<CustomBadge variant="primary">New</CustomBadge>
```

### CustomInput
Кастомное поле ввода с поддержкой различных типов и состояний.

**Варианты:** `outlined`, `filled`
**Размеры:** `sm`, `md`, `lg`

```tsx
import CustomInput from "./components/custom-input"

<CustomInput 
  label="Email" 
  type="email" 
  placeholder="example@email.com" 
/>
```

### CustomCard
Кастомная карточка с скошенными углами для группировки контента.

**Варианты:** `default`, `outlined`, `elevated`
**Отступы:** `none`, `sm`, `md`, `lg`

```tsx
import CustomCard from "./components/custom-card"

<CustomCard variant="outlined" padding="md">
  <h3>Card Title</h3>
  <p>Card content</p>
</CustomCard>
```

### CustomTypography
Компонент для типографики с различными вариантами стилей текста.

**Варианты:** `h1`, `h2`, `h3`, `h4`, `h5`, `h6`, `subtitle1`, `subtitle2`, `body1`, `body2`, `caption`, `overline`
**Цвета:** `primary`, `secondary`, `disabled`, `inherit`

```tsx
import CustomTypography from "./components/custom-typography"

<CustomTypography variant="h1" color="primary">
  Heading
</CustomTypography>
```

### CustomModal
Модальное окно со скошенными углами с поддержкой различных размеров и позиций.

**Размеры:** `sm`, `md`, `lg`, `xl`, `full`
**Позиции:** `center`, `top`, `bottom`

```tsx
import CustomModal from "./components/custom-modal"

<CustomModal open={isOpen} onClose={() => setIsOpen(false)}>
  <div>Modal content</div>
</CustomModal>
```

### CustomAccordion
Аккордеон с скошенными углами для группировки контента.

**Варианты:** `default`, `outlined`

```tsx
import CustomAccordion, { CustomAccordionItem } from "./components/custom-accordion"

<CustomAccordion>
  <CustomAccordionItem title="Заголовок" defaultExpanded>
    Содержимое секции
  </CustomAccordionItem>
</CustomAccordion>
```

### CustomBox
Универсальный компонент Box для создания контейнеров с кастомными стилями.

```tsx
import CustomBox from "./components/custom-box"

<CustomBox 
  padding={16} 
  backgroundColor="#f0f0f0" 
  borderRadius={8}
>
  Содержимое
</CustomBox>
```

### CustomSelect
Кастомный селект с скошенными углами для выбора опций.

**Варианты:** `outlined`, `filled`
**Размеры:** `sm`, `md`, `lg`

```tsx
import CustomSelect from "./components/custom-select"

<CustomSelect
  options={[
    { value: "option1", label: "Опция 1" },
    { value: "option2", label: "Опция 2" },
  ]}
  placeholder="Выберите опцию"
/>
```

### CustomTabs
Компонент вкладок с скошенными углами для организации контента.

**Варианты:** `default`, `outlined`, `pills`
**Ориентация:** `horizontal`, `vertical`

```tsx
import CustomTabs, { CustomTab, CustomTabPanel } from "./components/custom-tabs"

<CustomTabs defaultValue="tab1">
  <CustomTab label="Вкладка 1" value="tab1" />
  <CustomTab label="Вкладка 2" value="tab2" />
  <CustomTabPanel value="tab1">Содержимое 1</CustomTabPanel>
  <CustomTabPanel value="tab2">Содержимое 2</CustomTabPanel>
</CustomTabs>
```

## Установка и запуск

### Зависимости
```bash
npm install
```

### Запуск Storybook
```bash
npm run storybook
```

Storybook будет доступен по адресу: http://localhost:6006

### Сборка Storybook
```bash
npm run build-storybook
```

## Цветовая схема

Библиотека использует следующие основные цвета:

- **Brand (Primary):** `#AFEB0F` - основной брендовый цвет
- **Primary (Dark):** `#292D30` - темный цвет для текста и фона
- **Secondary:** `#8FBC0B` - темный вариант брендового цвета
- **Background:** `#FFFFFF` - белый фон

## Особенности дизайна

Все компоненты имеют скошенные углы (chamfered corners) для создания современного и уникального внешнего вида. Скосы реализованы с помощью CSS `clip-path`.

## Утилиты

Библиотека использует утилиту `cn` для объединения CSS классов:

```tsx
import { cn } from "./lib/utils"

const className = cn("base-class", conditional && "conditional-class")
```

## Структура проекта

```
packages/ui-kit/
├── components/          # React компоненты
├── stories/            # Storybook истории
├── lib/               # Утилиты
├── .storybook/        # Конфигурация Storybook
└── README.md          # Документация
``` 