# POIZON UI Kit

Современная библиотека компонентов для создания адаптивных и доступных пользовательских интерфейсов.

## 📚 Документация

### Основные гайды

- **[Гайд по позиционированию и адаптивности](./LAYOUT_GUIDE.md)** - Подробное руководство по созданию адаптивных макетов
- **[Архитектурные улучшения](./ARCHITECTURE_IMPROVEMENTS.md)** - Планы по улучшению архитектуры
- **[Улучшения дизайн-токенов](./DESIGN_TOKENS_IMPROVEMENTS.md)** - Система дизайн-токенов
- **[Отсутствующие компоненты](./MISSING_COMPONENTS.md)** - Список компонентов для разработки
- **[Дорожная карта](./ROADMAP.md)** - Планы развития библиотеки

## 🚀 Быстрый старт

### Установка

```bash
npm install @poizon/ui-kit
```

### Использование

```tsx
import { 
  CustomContainer, 
  CustomGrid, 
  CustomBox, 
  CustomTypography,
  CustomButton 
} from "@poizon/ui-kit"

function App() {
  return (
    <CustomContainer maxWidth="lg">
      <CustomTypography variant="h1">Добро пожаловать</CustomTypography>
      
      <CustomGrid container spacing={2}>
        <CustomGrid item xs={12} sm={6} md={4}>
          <CustomBox padding={16} backgroundColor="#f5f5f5">
            <CustomTypography variant="h3">Карточка 1</CustomTypography>
            <CustomTypography variant="body">Описание карточки</CustomTypography>
          </CustomBox>
        </CustomGrid>
      </CustomGrid>
      
      <CustomButton variant="primary">Нажми меня</CustomButton>
    </CustomContainer>
  )
}
```

## 🎨 Компоненты

### Layout компоненты

- **CustomContainer** - Адаптивные контейнеры с автоматическими отступами
- **CustomGrid** - Система сеток для создания макетов
- **CustomBox** - Универсальный компонент для создания блоков

### Typography

- **CustomTypography** - Система типографики с различными вариантами и размерами

### Form компоненты

- **CustomButton** - Кнопки с различными вариантами и размерами
- **CustomInput** - Поля ввода
- **CustomSelect** - Выпадающие списки
- **CustomCheckbox** - Чекбоксы
- **CustomRadio** - Радио кнопки
- **CustomTextarea** - Многострочные поля ввода

### Navigation

- **CustomBreadcrumbs** - Хлебные крошки
- **CustomMenu** - Меню навигации
- **CustomTabs** - Вкладки

### Feedback

- **CustomModal** - Модальные окна
- **CustomDialog** - Диалоговые окна
- **CustomDrawer** - Боковые панели
- **CustomAlert** - Уведомления

### Data Display

- **CustomCard** - Карточки
- **CustomList** - Списки
- **CustomTable** - Таблицы
- **CustomBadge** - Бейджи
- **CustomSkeleton** - Скелетоны загрузки

### Overlay

- **CustomAccordion** - Аккордеоны
- **CustomTooltip** - Подсказки
- **CustomPopover** - Всплывающие панели

## 📱 Адаптивность

Все компоненты следуют принципу **Mobile-First** и поддерживают адаптивность:

```tsx
// Адаптивная сетка
<CustomGrid container spacing={2}>
  <CustomGrid item xs={12} sm={6} md={4} lg={3}>
    <ProductCard />
  </CustomGrid>
</CustomGrid>

// Адаптивные контейнеры
<CustomContainer maxWidth="lg">
  <Content />
</CustomContainer>
```

## 🎯 Breakpoints

| Breakpoint | Размер | Описание |
|------------|--------|----------|
| `xs` | < 640px | Мобильные телефоны |
| `sm` | 640px - 768px | Планшеты (портрет) |
| `md` | 768px - 1024px | Планшеты (ландшафт) |
| `lg` | 1024px - 1280px | Десктопы |
| `xl` | ≥ 1280px | Большие экраны |
| `2xl` | ≥ 1536px | Очень большие экраны |

## 🛠 Разработка

### Запуск Storybook

```bash
npm run storybook
```

### Сборка

```bash
npm run build
```

### Тестирование

```bash
npm run test
```

## 📖 Примеры

### Адаптивная галерея

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

### Адаптивная форма

```tsx
const ContactForm = () => (
  <CustomContainer maxWidth="md">
    <CustomBox padding={24} backgroundColor="#fff" borderRadius={12}>
      <CustomTypography variant="h3" className="mb-6">
        Связаться с нами
      </CustomTypography>
      
      <CustomGrid container spacing={3}>
        <CustomGrid item xs={12} sm={6}>
          <CustomInput label="Имя" fullWidth />
        </CustomGrid>
        <CustomGrid item xs={12} sm={6}>
          <CustomInput label="Фамилия" fullWidth />
        </CustomGrid>
        <CustomGrid item xs={12}>
          <CustomInput label="Email" fullWidth />
        </CustomGrid>
        <CustomGrid item xs={12}>
          <CustomTextarea label="Сообщение" rows={4} fullWidth />
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

## 🤝 Вклад в проект

1. Форкните репозиторий
2. Создайте ветку для новой функции (`git checkout -b feature/amazing-feature`)
3. Зафиксируйте изменения (`git commit -m 'Add amazing feature'`)
4. Отправьте в ветку (`git push origin feature/amazing-feature`)
5. Откройте Pull Request

## 📄 Лицензия

Этот проект лицензирован под MIT License - см. файл [LICENSE](LICENSE) для деталей.

## 🆘 Поддержка

Если у вас есть вопросы или проблемы, создайте issue в репозитории или обратитесь к команде разработки.

---

**POIZON UI Kit** - Создавайте современные интерфейсы с легкостью! 🚀 