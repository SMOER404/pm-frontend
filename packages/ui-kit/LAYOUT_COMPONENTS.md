# Layout Components

Набор адаптивных Layout компонентов для создания современных веб-интерфейсов. Все компоненты поддерживают responsive дизайн и интегрируются с существующей дизайн-системой.

## 📦 Компоненты

### Container
Основной контейнер с адаптивными максимальными ширинами и отступами.

```tsx
import { Container } from '@poizon/ui-kit'

// Базовое использование
<Container maxWidth="lg" padding={6}>
  <p>Контент</p>
</Container>

// Адаптивные отступы
<Container 
  maxWidth="xl" 
  padding={{ xs: 2, sm: 4, md: 6, lg: 8 }}
  centered
>
  <p>Контент с адаптивными отступами</p>
</Container>

// Fluid контейнер
<Container fluid padding={4}>
  <p>Контейнер на всю ширину</p>
</Container>
```

**Пропсы:**
- `maxWidth`: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl' | '7xl' | 'full'
- `centered`: boolean - центрирование контента
- `fluid`: boolean - убрать максимальную ширину
- `padding`: ResponsiveSpacing - адаптивные отступы
- `margin`: ResponsiveSpacing - адаптивные внешние отступы

### Grid
Адаптивная CSS Grid система с настраиваемыми колонками.

```tsx
import { Grid } from '@poizon/ui-kit'

// Адаптивные колонки
<Grid columns={{ xs: 1, sm: 2, md: 3, lg: 4 }} gap={4}>
  <div>Элемент 1</div>
  <div>Элемент 2</div>
  <div>Элемент 3</div>
</Grid>

// Auto-fit grid
<Grid autoFit gap={4} minColumnWidth="250px">
  <div>Автоматически подстраивающиеся элементы</div>
  <div>Элемент 2</div>
  <div>Элемент 3</div>
</Grid>

// Выравнивание
<Grid 
  columns={3} 
  gap={6} 
  alignItems="center" 
  justifyContent="between"
>
  <div>Выровненный элемент</div>
  <div>Элемент 2</div>
  <div>Элемент 3</div>
</Grid>
```

**Пропсы:**
- `columns`: ResponsiveNumber - количество колонок
- `gap`: ResponsiveSpacing - отступы между элементами
- `autoFit`: boolean - автоматическое подстраивание
- `autoFill`: boolean - автоматическое заполнение
- `minColumnWidth`: string - минимальная ширина колонки
- `alignItems`: 'start' | 'center' | 'end' | 'stretch' | 'baseline'
- `justifyContent`: 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly'

### Box
Базовый блок с фоном, границами и интеграцией с BevelBox.

```tsx
import { Box } from '@poizon/ui-kit'

// Простой блок
<Box padding={4} backgroundColor="primary">
  <p>Блок с фоном</p>
</Box>

// С границами и скруглением
<Box 
  padding={6} 
  border 
  borderRadius="xl"
  backgroundColor="muted"
>
  <p>Блок с границами</p>
</Box>

// С Bevel эффектом
<Box 
  padding={4} 
  bevel 
  bevelVariant="secondary"
  bevelSize="lg"
>
  <p>Блок с фасками</p>
</Box>
```

**Пропсы:**
- `padding`: ResponsiveSpacing - внутренние отступы
- `margin`: ResponsiveSpacing - внешние отступы
- `backgroundColor`: 'default' | 'primary' | 'secondary' | 'muted' | 'accent' | 'card' | 'transparent'
- `border`: boolean - показать границы
- `borderRadius`: 'none' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | 'full'
- `bevel`: boolean - использовать BevelBox
- `bevelVariant`: 'default' | 'secondary' | 'outlined' | 'ghost'
- `bevelSize`: 'xs' | 'sm' | 'md' | 'lg' | 'xl'

### Section
Семантическая секция страницы с интеграцией Container.

```tsx
import { Section } from '@poizon/ui-kit'

// Простая секция
<Section padding={{ xs: 4, md: 8 }}>
  <h2>Заголовок секции</h2>
  <p>Содержимое секции</p>
</Section>

// С Container
<Section 
  padding={{ xs: 4, md: 8 }} 
  container 
  containerProps={{ maxWidth: "lg" }}
>
  <h2>Секция с контейнером</h2>
  <p>Содержимое</p>
</Section>

// С фоном
<Section 
  backgroundColor="muted" 
  padding={8} 
  fullWidth
>
  <h2>Полноширинная секция</h2>
</Section>
```

**Пропсы:**
- `padding`: ResponsiveSpacing - внутренние отступы
- `margin`: ResponsiveSpacing - внешние отступы
- `backgroundColor`: 'default' | 'primary' | 'secondary' | 'muted' | 'accent' | 'card' | 'transparent'
- `fullWidth`: boolean - полная ширина
- `container`: boolean - использовать Container внутри
- `containerProps`: ContainerProps - пропсы для Container

### Layout
Композитный layout с header, sidebar, main и footer областями.

```tsx
import { Layout } from '@poizon/ui-kit'

// Базовый layout
<Layout
  header={<header>Header</header>}
  footer={<footer>Footer</footer>}
>
  <main>Main content</main>
</Layout>

// С sidebar
<Layout
  header={<header>Header</header>}
  sidebar={<aside>Sidebar</aside>}
  sidebarPosition="left"
  gap={6}
>
  <main>Main content</main>
</Layout>

// Sticky header и footer
<Layout
  header={<header>Sticky Header</header>}
  footer={<footer>Sticky Footer</footer>}
  stickyHeader
  stickyFooter
>
  <main>Content</main>
</Layout>
```

**Пропсы:**
- `header`: ReactNode - содержимое header
- `sidebar`: ReactNode - содержимое sidebar
- `footer`: ReactNode - содержимое footer
- `sidebarPosition`: 'left' | 'right' - позиция sidebar
- `sidebarWidth`: ResponsiveSpacing - ширина sidebar
- `headerHeight`: string - высота header
- `footerHeight`: string - высота footer
- `gap`: ResponsiveSpacing - отступы между областями
- `stickyHeader`: boolean - закрепленный header
- `stickyFooter`: boolean - закрепленный footer

### ResponsiveImage
Адаптивное изображение с lazy loading и aspect ratio.

```tsx
import { ResponsiveImage } from '@poizon/ui-kit'

// Базовое изображение
<ResponsiveImage
  src="/image.jpg"
  alt="Описание изображения"
  aspectRatio="16:9"
/>

// С адаптивными размерами
<ResponsiveImage
  src="/image.jpg"
  alt="Описание"
  aspectRatio="1:1"
  responsiveSizes={{ xs: "full", md: "1/2" }}
  objectFit="cover"
/>

// С fallback
<ResponsiveImage
  src="/image.jpg"
  alt="Описание"
  fallback="/fallback.jpg"
  lazy={false}
/>
```

**Пропсы:**
- `src`: string - URL изображения
- `alt`: string - альтернативный текст
- `responsiveSizes`: ResponsiveSpacing - адаптивные размеры
- `aspectRatio`: '16:9' | '4:3' | '1:1' | '3:2' | '21:9' | 'auto'
- `objectFit`: 'cover' | 'contain' | 'fill' | 'none' | 'scale-down'
- `lazy`: boolean - lazy loading
- `placeholder`: string - URL placeholder
- `fallback`: string - URL fallback изображения
- `onLoad`: () => void - callback при загрузке
- `onError`: () => void - callback при ошибке

### Stack
Вертикальный или горизонтальный стек с разделителями.

```tsx
import { Stack } from '@poizon/ui-kit'

// Вертикальный стек
<Stack spacing={4}>
  <div>Элемент 1</div>
  <div>Элемент 2</div>
  <div>Элемент 3</div>
</Stack>

// Горизонтальный стек с переносом
<Stack direction="horizontal" spacing={3} wrap>
  <Button>Кнопка 1</Button>
  <Button>Кнопка 2</Button>
  <Button>Кнопка 3</Button>
</Stack>

// С разделителями
<Stack spacing={3} divider>
  <div>Элемент 1</div>
  <div>Элемент 2</div>
  <div>Элемент 3</div>
</Stack>

// Адаптивное направление
<Stack direction="responsive" spacing={{ xs: 2, lg: 4 }}>
  <div>Вертикально на мобильных, горизонтально на десктопе</div>
  <div>Элемент 2</div>
</Stack>
```

**Пропсы:**
- `direction`: 'vertical' | 'horizontal' | 'responsive'
- `spacing`: ResponsiveSpacing - отступы между элементами
- `alignItems`: 'start' | 'center' | 'end' | 'stretch' | 'baseline'
- `justifyContent`: 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly'
- `wrap`: boolean - перенос элементов
- `reverse`: boolean - обратный порядок
- `divider`: boolean | ReactNode - разделители
- `dividerColor`: string - цвет разделителей
- `dividerStyle`: 'solid' | 'dashed' | 'dotted' - стиль разделителей

### ImageList
Список изображений с разными вариантами отображения.

```tsx
import { ImageList } from '@poizon/ui-kit'

// Grid layout
<ImageList
  images={images}
  columns={{ xs: 1, sm: 2, md: 3, lg: 4 }}
  gap={4}
  aspectRatio="1:1"
/>

// Gallery с overlay
<ImageList
  images={images}
  variant="gallery"
  columns={{ xs: 1, sm: 2, md: 3 }}
  gap={3}
  overlay
  overlayContent={<Button>Просмотр</Button>}
  onImageClick={(index, image) => console.log(image.title)}
/>

// Carousel
<ImageList
  images={images}
  variant="carousel"
  carouselItemWidth="300px"
  gap={4}
/>
```

**Пропсы:**
- `images`: ImageItem[] - массив изображений
- `variant`: 'grid' | 'masonry' | 'carousel' | 'gallery'
- `columns`: ResponsiveNumber - количество колонок
- `gap`: ResponsiveSpacing - отступы между изображениями
- `aspectRatio`: '16:9' | '4:3' | '1:1' | '3:2' | 'auto'
- `lazy`: boolean - lazy loading
- `overlay`: boolean - показывать overlay при hover
- `overlayContent`: ReactNode - содержимое overlay
- `onImageClick`: (index: number, image: ImageItem) => void
- `carouselItemWidth`: string - ширина элементов в carousel

## 🎨 ResponsiveSpacing и ResponsiveNumber

### ResponsiveSpacing
```tsx
type ResponsiveSpacing = 
  | number 
  | string 
  | { xs?: number | string, sm?: number | string, md?: number | string, lg?: number | string, xl?: number | string }

// Примеры:
padding={4} // Одинаковые отступы на всех экранах
padding={{ xs: 2, sm: 4, md: 6, lg: 8 }} // Адаптивные отступы
padding="1rem" // CSS значение
```

### ResponsiveNumber
```tsx
type ResponsiveNumber = 
  | number 
  | { xs?: number, sm?: number, md?: number, lg?: number, xl?: number }

// Примеры:
columns={3} // 3 колонки на всех экранах
columns={{ xs: 1, sm: 2, md: 3, lg: 4 }} // Адаптивные колонки
```

## 🔧 Breakpoints

- `xs`: 320px
- `sm`: 640px  
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px
- `2xl`: 1536px

## 🎯 Особенности

- **Mobile-first подход**: Все компоненты начинаются с мобильной версии
- **Адаптивность**: Автоматическое изменение на разных экранах
- **Интеграция**: Совместимость с существующими компонентами (BevelBox, Card, etc.)
- **Типизация**: Полная поддержка TypeScript
- **Производительность**: Оптимизация для SSR и lazy loading
- **Accessibility**: Семантическая разметка и ARIA атрибуты

## 📱 Примеры использования

Смотрите `layout-demo.tsx` для полных примеров использования всех компонентов.
