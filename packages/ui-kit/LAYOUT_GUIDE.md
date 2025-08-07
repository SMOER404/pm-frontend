# Гайд по позиционированию и адаптивности

## Содержание

1. [Основы адаптивного дизайна](#основы-адаптивного-дизайна)
2. [Компоненты для позиционирования](#компоненты-для-позиционирования)
3. [Breakpoints и медиа-запросы](#breakpoints-и-медиа-запросы)
4. [Система сеток](#система-сеток)
5. [Контейнеры и отступы](#контейнеры-и-отступы)
6. [Практические примеры](#практические-примеры)
7. [Лучшие практики](#лучшие-практики)

## Основы адаптивного дизайна

### Mobile-First подход

Все компоненты в UI Kit следуют принципу **Mobile-First**:

```tsx
// ❌ Плохо - Desktop-First
<div className="grid grid-cols-4 md:grid-cols-2 sm:grid-cols-1">

// ✅ Хорошо - Mobile-First  
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
```

### Основные принципы

1. **Прогрессивное улучшение** - начинаем с базовой функциональности
2. **Гибкость** - контент адаптируется под размер экрана
3. **Производительность** - оптимизируем для мобильных устройств

## Компоненты для позиционирования

### CustomContainer

Основной компонент для создания адаптивных контейнеров:

```tsx
import { CustomContainer } from "@poizon/ui-kit"

// Базовое использование
<CustomContainer>
  <h1>Контент</h1>
</CustomContainer>

// С ограничением ширины
<CustomContainer maxWidth="lg">
  <h1>Контент с максимальной шириной 896px</h1>
</CustomContainer>

// Без отступов
<CustomContainer disableGutters>
  <h1>Контент без боковых отступов</h1>
</CustomContainer>
```

#### Размеры maxWidth

| Размер | Ширина | Применение |
|--------|--------|------------|
| `xs` | 320px | Мобильные формы |
| `sm` | 384px | Небольшие карточки |
| `md` | 448px | Средние компоненты |
| `lg` | 896px | Основной контент |
| `xl` | 1152px | Широкий контент |
| `2xl` | 1280px | Максимальная ширина |
| `false` | 100% | Полная ширина |

### CustomGrid

Система сеток для создания адаптивных макетов:

```tsx
import { CustomGrid } from "@poizon/ui-kit"

// Базовая сетка
<CustomGrid container spacing={2}>
  <CustomGrid item xs={12} sm={6} lg={4}>
    <div>Элемент 1</div>
  </CustomGrid>
  <CustomGrid item xs={12} sm={6} lg={4}>
    <div>Элемент 2</div>
  </CustomGrid>
  <CustomGrid item xs={12} sm={6} lg={4}>
    <div>Элемент 3</div>
  </CustomGrid>
</CustomGrid>
```

#### Размеры элементов

Система использует 12-колоночную сетку:

```tsx
// 1 колонка на всех экранах
<CustomGrid item xs={12}>

// 2 колонки на планшетах и больше
<CustomGrid item xs={12} sm={6}>

// 3 колонки на десктопах
<CustomGrid item xs={12} sm={6} md={4}>

// 4 колонки на больших экранах
<CustomGrid item xs={12} sm={6} md={4} lg={3}>
```

### CustomBox

Универсальный компонент для создания блоков:

```tsx
import { CustomBox } from "@poizon/ui-kit"

// Базовый блок
<CustomBox padding={16} backgroundColor="#f5f5f5">
  <h2>Заголовок</h2>
  <p>Контент</p>
</CustomBox>

// С flexbox
<CustomBox display="flex" justifyContent="space-between" alignItems="center">
  <span>Левая часть</span>
  <span>Правая часть</span>
</CustomBox>
```

## Breakpoints и медиа-запросы

### Стандартные breakpoints

| Breakpoint | Размер | Описание |
|------------|--------|----------|
| `xs` | < 640px | Мобильные телефоны |
| `sm` | 640px - 768px | Планшеты (портрет) |
| `md` | 768px - 1024px | Планшеты (ландшафт) |
| `lg` | 1024px - 1280px | Десктопы |
| `xl` | ≥ 1280px | Большие экраны |
| `2xl` | ≥ 1536px | Очень большие экраны |

### Использование в Tailwind CSS

```tsx
// Responsive классы
<div className="
  text-sm          // Базовый размер
  sm:text-base     // На планшетах и больше
  md:text-lg       // На десктопах и больше
  lg:text-xl       // На больших экранах
">

// Responsive отступы
<div className="
  p-4              // 16px на всех экранах
  sm:p-6           // 24px на планшетах и больше
  md:p-8           // 32px на десктопах и больше
">
```

## Система сеток

### Основные паттерны

#### 1. Карточки товаров

```tsx
<CustomGrid container spacing={3}>
  {products.map(product => (
    <CustomGrid key={product.id} item xs={12} sm={6} md={4} lg={3}>
      <ProductCard product={product} />
    </CustomGrid>
  ))}
</CustomGrid>
```

#### 2. Формы

```tsx
<CustomGrid container spacing={2}>
  <CustomGrid item xs={12} sm={6}>
    <TextField label="Имя" />
  </CustomGrid>
  <CustomGrid item xs={12} sm={6}>
    <TextField label="Фамилия" />
  </CustomGrid>
  <CustomGrid item xs={12}>
    <TextField label="Email" />
  </CustomGrid>
</CustomGrid>
```

#### 3. Навигация

```tsx
<CustomGrid container spacing={2} alignItems="center">
  <CustomGrid item xs={12} sm="auto">
    <Logo />
  </CustomGrid>
  <CustomGrid item xs={12} sm>
    <Navigation />
  </CustomGrid>
  <CustomGrid item xs={12} sm="auto">
    <UserMenu />
  </CustomGrid>
</CustomGrid>
```

### Сложные макеты

#### Макет с сайдбаром

```tsx
<CustomGrid container spacing={3}>
  {/* Сайдбар */}
  <CustomGrid item xs={12} md={3}>
    <Sidebar />
  </CustomGrid>
  
  {/* Основной контент */}
  <CustomGrid item xs={12} md={9}>
    <CustomGrid container spacing={2}>
      <CustomGrid item xs={12} lg={8}>
        <MainContent />
      </CustomGrid>
      <CustomGrid item xs={12} lg={4}>
        <Sidebar />
      </CustomGrid>
    </CustomGrid>
  </CustomGrid>
</CustomGrid>
```

## Контейнеры и отступы

### Автоматические отступы

`CustomContainer` автоматически добавляет отступы:

```css
/* На мобильных */
padding-left: 1rem;   /* 16px */
padding-right: 1rem;  /* 16px */

/* На планшетах */
@media (min-width: 640px) {
  padding-left: 1.5rem;  /* 24px */
  padding-right: 1.5rem; /* 24px */
}

/* На десктопах */
@media (min-width: 1024px) {
  padding-left: 2rem;    /* 32px */
  padding-right: 2rem;   /* 32px */
}
```

### Отключение отступов

```tsx
// Для фоновых секций
<CustomContainer disableGutters>
  <HeroSection />
</CustomContainer>

// Для полноэкранных компонентов
<CustomContainer maxWidth={false} disableGutters>
  <FullWidthBanner />
</CustomContainer>
```

## Практические примеры

### 1. Адаптивная галерея

```tsx
const ImageGallery = ({ images }) => (
  <CustomContainer>
    <CustomGrid container spacing={2}>
      {images.map((image, index) => (
        <CustomGrid 
          key={index} 
          item 
          xs={12} 
          sm={6} 
          md={4} 
          lg={3}
        >
          <CustomBox 
            padding={8} 
            backgroundColor="#f5f5f5" 
            borderRadius={8}
          >
            <img 
              src={image.url} 
              alt={image.alt}
              className="w-full h-48 object-cover rounded"
            />
          </CustomBox>
        </CustomGrid>
      ))}
    </CustomGrid>
  </CustomContainer>
)
```

### 2. Адаптивная форма

```tsx
const ContactForm = () => (
  <CustomContainer maxWidth="md">
    <CustomBox padding={24} backgroundColor="#fff" borderRadius={12}>
      <CustomTypography variant="h3" className="mb-6">
        Связаться с нами
      </CustomTypography>
      
      <CustomGrid container spacing={3}>
        <CustomGrid item xs={12} sm={6}>
          <TextField label="Имя" fullWidth />
        </CustomGrid>
        <CustomGrid item xs={12} sm={6}>
          <TextField label="Фамилия" fullWidth />
        </CustomGrid>
        <CustomGrid item xs={12}>
          <TextField label="Email" fullWidth />
        </CustomGrid>
        <CustomGrid item xs={12}>
          <TextField label="Сообщение" multiline rows={4} fullWidth />
        </CustomGrid>
        <CustomGrid item xs={12}>
          <CustomButton variant="primary" fullWidth>
            Отправить
          </CustomButton>
        </CustomGrid>
      </CustomGrid>
    </CustomBox>
  </CustomContainer>
)
```

### 3. Адаптивная навигация

```tsx
const Header = () => (
  <CustomBox 
    position="fixed" 
    top={0} 
    left={0} 
    right={0} 
    zIndex={50}
    backgroundColor="#fff"
    borderBottom="1px solid #e5e7eb"
  >
    <CustomContainer>
      <CustomGrid container alignItems="center" spacing={2}>
        {/* Логотип */}
        <CustomGrid item xs={12} sm="auto">
          <Logo />
        </CustomGrid>
        
        {/* Навигация - скрыта на мобильных */}
        <CustomGrid item xs={0} sm>
          <nav className="hidden sm:flex space-x-6">
            <Link href="/catalog">Каталог</Link>
            <Link href="/about">О нас</Link>
            <Link href="/contact">Контакты</Link>
          </nav>
        </CustomGrid>
        
        {/* Действия пользователя */}
        <CustomGrid item xs={12} sm="auto">
          <div className="flex justify-end space-x-4">
            <IconButton icon="search" />
            <IconButton icon="cart" />
            <IconButton icon="user" />
          </div>
        </CustomGrid>
        
        {/* Мобильное меню */}
        <CustomGrid item xs={12} sm={0}>
          <MobileMenu />
        </CustomGrid>
      </CustomGrid>
    </CustomContainer>
  </CustomBox>
)
```

## Лучшие практики

### 1. Используйте семантические HTML элементы

```tsx
// ✅ Хорошо
<CustomContainer component="main">
  <CustomTypography variant="h1">Заголовок страницы</CustomTypography>
</CustomContainer>

// ❌ Плохо
<div>
  <div>Заголовок страницы</div>
</div>
```

### 2. Оптимизируйте для производительности

```tsx
// ✅ Хорошо - используйте CSS Grid для сложных макетов
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  {items.map(item => <Item key={item.id} {...item} />)}
</div>

// ❌ Плохо - избегайте избыточных оберток
{items.map(item => (
  <CustomGrid key={item.id} item xs={12} md={6} lg={4}>
    <CustomBox>
      <Item {...item} />
    </CustomBox>
  </CustomGrid>
))}
```

### 3. Тестируйте на реальных устройствах

```tsx
// Добавьте отладочные стили для разработки
const DebugGrid = ({ children }) => (
  <div className="debug-grid">
    {children}
  </div>
)

// CSS для отладки
.debug-grid {
  outline: 1px solid red;
}

.debug-grid > * {
  outline: 1px solid blue;
}
```

### 4. Используйте консистентные отступы

```tsx
// ✅ Хорошо - используйте систему отступов
const spacing = {
  xs: 4,   // 16px
  sm: 8,   // 32px
  md: 12,  // 48px
  lg: 16,  // 64px
  xl: 24,  // 96px
}

// ❌ Плохо - случайные значения
const randomSpacing = {
  small: 5,
  medium: 13,
  large: 27,
}
```

### 5. Планируйте контент

```tsx
// ✅ Хорошо - думайте о контенте
<CustomGrid container spacing={2}>
  <CustomGrid item xs={12} sm={6} md={4}>
    <ProductCard 
      title="Короткий заголовок"
      description="Краткое описание"
    />
  </CustomGrid>
</CustomGrid>

// ❌ Плохо - не учитываете контент
<CustomGrid item xs={12} sm={6} md={4}>
  <ProductCard 
    title="Очень длинный заголовок товара который может не поместиться"
    description="Очень длинное описание товара которое может создать проблемы с макетом на мобильных устройствах"
  />
</CustomGrid>
```

## Заключение

Следуя этим принципам и используя компоненты UI Kit, вы сможете создавать адаптивные и удобные интерфейсы, которые будут хорошо работать на всех устройствах.

### Полезные ресурсы

- [Tailwind CSS Responsive Design](https://tailwindcss.com/docs/responsive-design)
- [CSS Grid Layout](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout)
- [Flexbox Layout](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout)
- [Mobile-First Design](https://www.lukew.com/ff/entry.asp?933) 