"use client"

import CustomButton from "./custom-button"
import {
  Heart,
  Download,
  User,
  Settings,
  Star,
  Plus,
  Save,
  Edit,
  Trash2,
  ArrowRight,
  ShoppingCart,
  Eye,
  MoreHorizontal,
  X,
  Check,
} from "lucide-react"

export default function ButtonDemo() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Полная иерархия кнопок</h1>
          <p className="text-gray-600">Все варианты кнопок с правильным семантическим значением</p>
        </div>

        {/* Основные варианты */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-gray-800">Основные варианты</h2>
          <div className="flex flex-wrap gap-4">
            <CustomButton variant="primary">Primary</CustomButton>
            <CustomButton variant="secondary">Secondary</CustomButton>
            <CustomButton variant="outlined">Outlined</CustomButton>
            <CustomButton variant="ghost">Ghost</CustomButton>
            <CustomButton variant="text">Text</CustomButton>
          </div>
          <div className="text-sm text-gray-600 space-y-1">
            <p>
              <strong>Primary:</strong> Акцентная с заливкой - главное действие
            </p>
            <p>
              <strong>Secondary:</strong> Менее акцентная, светлая заливка - второстепенные действия
            </p>
            <p>
              <strong>Outlined:</strong> Прозрачный фон с рамкой - альтернативные действия
            </p>
            <p>
              <strong>Ghost:</strong> Минималистичная без рамки - дополнительные действия
            </p>
            <p>
              <strong>Text:</strong> Как ссылка - действия, не похожие на кнопки
            </p>
          </div>
        </section>

        {/* Состояния */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-gray-800">Состояния кнопок</h2>

          {/* Loading состояние */}
          <div className="space-y-3">
            <h3 className="text-lg font-medium">Loading состояние</h3>
            <div className="flex flex-wrap gap-4">
              <CustomButton variant="primary" loading>
                Загрузка...
              </CustomButton>
              <CustomButton variant="secondary" loading>
                Сохранение...
              </CustomButton>
              <CustomButton variant="outlined" loading>
                Отправка...
              </CustomButton>
              <CustomButton variant="ghost" loading>
                Обновление...
              </CustomButton>
            </div>
          </div>

          {/* Disabled состояние */}
          <div className="space-y-3">
            <h3 className="text-lg font-medium">Disabled состояние</h3>
            <div className="flex flex-wrap gap-4">
              <CustomButton variant="primary" disabled>
                Primary
              </CustomButton>
              <CustomButton variant="secondary" disabled>
                Secondary
              </CustomButton>
              <CustomButton variant="outlined" disabled>
                Outlined
              </CustomButton>
              <CustomButton variant="ghost" disabled>
                Ghost
              </CustomButton>
              <CustomButton variant="text" disabled>
                Text
              </CustomButton>
            </div>
          </div>
        </section>

        {/* Icon кнопки */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-gray-800">Icon кнопки</h2>

          {/* С текстом */}
          <div className="space-y-3">
            <h3 className="text-lg font-medium">С иконками и текстом</h3>
            <div className="flex flex-wrap gap-4">
              <CustomButton variant="primary" icon={<ShoppingCart className="w-4 h-4" />}>
                Купить
              </CustomButton>
              <CustomButton variant="secondary" icon={<Save className="w-4 h-4" />}>
                Сохранить
              </CustomButton>
              <CustomButton variant="outlined" icon={<Download className="w-4 h-4" />} iconPosition="right">
                Скачать
              </CustomButton>
              <CustomButton variant="ghost" icon={<Eye className="w-4 h-4" />}>
                Просмотр
              </CustomButton>
              <CustomButton variant="text" icon={<ArrowRight className="w-4 h-4" />} iconPosition="right">
                Подробнее
              </CustomButton>
            </div>
          </div>

          {/* Только иконки */}
          <div className="space-y-3">
            <h3 className="text-lg font-medium">Только иконки</h3>
            <div className="flex flex-wrap gap-4">
              <CustomButton variant="primary" icon={<Plus className="w-4 h-4" />} iconOnly>
                Добавить
              </CustomButton>
              <CustomButton variant="secondary" icon={<Settings className="w-4 h-4" />} iconOnly>
                Настройки
              </CustomButton>
              <CustomButton variant="outlined" icon={<Heart className="w-4 h-4" />} iconOnly>
                Лайк
              </CustomButton>
              <CustomButton variant="ghost" icon={<MoreHorizontal className="w-4 h-4" />} iconOnly>
                Меню
              </CustomButton>
            </div>
          </div>
        </section>

        {/* Размеры */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-gray-800">Размеры</h2>
          <div className="space-y-4">
            <div className="flex flex-wrap items-end gap-4">
              <CustomButton size="sm" variant="primary">
                Small
              </CustomButton>
              <CustomButton size="md" variant="primary">
                Medium
              </CustomButton>
              <CustomButton size="lg" variant="primary">
                Large
              </CustomButton>
            </div>
            <div className="flex flex-wrap items-end gap-4">
              <CustomButton size="sm" variant="outlined" icon={<Star className="w-3 h-3" />} iconOnly>
                Small
              </CustomButton>
              <CustomButton size="md" variant="outlined" icon={<Star className="w-4 h-4" />} iconOnly>
                Medium
              </CustomButton>
              <CustomButton size="lg" variant="outlined" icon={<Star className="w-5 h-5" />} iconOnly>
                Large
              </CustomButton>
            </div>
          </div>
        </section>

        {/* Практические сценарии */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-gray-800">Практические сценарии</h2>

          {/* Форма */}
          <div className="bg-white p-6 rounded-lg border">
            <h3 className="text-lg font-medium mb-4">Форма входа</h3>
            <div className="space-y-4">
              <div className="space-y-2">
                <input type="email" placeholder="Email" className="w-full px-3 py-2 border rounded" />
                <input type="password" placeholder="Пароль" className="w-full px-3 py-2 border rounded" />
              </div>
              <div className="flex flex-wrap gap-3 items-center">
                <CustomButton variant="primary" icon={<User className="w-4 h-4" />}>
                  Войти
                </CustomButton>
                <CustomButton variant="outlined">Регистрация</CustomButton>
                <CustomButton variant="text">Забыли пароль?</CustomButton>
              </div>
            </div>
          </div>

          {/* Карточка товара */}
          <div className="bg-white p-6 rounded-lg border">
            <h3 className="text-lg font-medium mb-4">Карточка товара</h3>
            <div className="flex flex-wrap gap-3 items-center">
              <CustomButton variant="primary" icon={<ShoppingCart className="w-4 h-4" />}>
                Купить сейчас
              </CustomButton>
              <CustomButton variant="secondary" icon={<Plus className="w-4 h-4" />}>
                В корзину
              </CustomButton>
              <CustomButton variant="outlined" icon={<Heart className="w-4 h-4" />}>
                В избранное
              </CustomButton>
              <CustomButton variant="ghost" icon={<Eye className="w-4 h-4" />}>
                Быстрый просмотр
              </CustomButton>
            </div>
          </div>

          {/* Модальное окно */}
          <div className="bg-white p-6 rounded-lg border">
            <h3 className="text-lg font-medium mb-4">Подтверждение удаления</h3>
            <p className="text-gray-600 mb-4">Вы уверены, что хотите удалить этот элемент?</p>
            <div className="flex flex-wrap gap-3">
              <CustomButton
                variant="primary"
                borderColor="#ef4444"
                fillColor="#ef4444"
                icon={<Trash2 className="w-4 h-4" />}
              >
                Удалить
              </CustomButton>
              <CustomButton variant="secondary">Отмена</CustomButton>
            </div>
          </div>

          {/* Панель инструментов */}
          <div className="bg-white p-6 rounded-lg border">
            <h3 className="text-lg font-medium mb-4">Панель инструментов</h3>
            <div className="flex flex-wrap gap-2">
              <CustomButton variant="ghost" size="sm" icon={<Plus className="w-3 h-3" />} iconOnly>
                Добавить
              </CustomButton>
              <CustomButton variant="ghost" size="sm" icon={<Edit className="w-3 h-3" />} iconOnly>
                Редактировать
              </CustomButton>
              <CustomButton variant="ghost" size="sm" icon={<Trash2 className="w-3 h-3" />} iconOnly>
                Удалить
              </CustomButton>
              <div className="w-px h-6 bg-gray-300 mx-1"></div>
              <CustomButton variant="ghost" size="sm" icon={<Settings className="w-3 h-3" />} iconOnly>
                Настройки
              </CustomButton>
              <CustomButton variant="ghost" size="sm" icon={<MoreHorizontal className="w-3 h-3" />} iconOnly>
                Еще
              </CustomButton>
            </div>
          </div>
        </section>

        {/* Кастомные цвета */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-gray-800">Кастомные цвета</h2>
          <div className="space-y-4">
            <div className="flex flex-wrap gap-4">
              <CustomButton variant="primary" fillColor="#10b981" icon={<Check className="w-4 h-4" />}>
                Success
              </CustomButton>
              <CustomButton variant="primary" fillColor="#f59e0b" icon={<Star className="w-4 h-4" />}>
                Warning
              </CustomButton>
              <CustomButton variant="primary" fillColor="#ef4444" icon={<X className="w-4 h-4" />}>
                Danger
              </CustomButton>
            </div>
            <div className="flex flex-wrap gap-4">
              <CustomButton variant="outlined" borderColor="#10b981" textColor="#10b981">
                Success Outlined
              </CustomButton>
              <CustomButton variant="outlined" borderColor="#f59e0b" textColor="#f59e0b">
                Warning Outlined
              </CustomButton>
              <CustomButton variant="outlined" borderColor="#ef4444" textColor="#ef4444">
                Danger Outlined
              </CustomButton>
            </div>
          </div>
        </section>

        {/* На темном фоне */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-gray-800">На темном фоне</h2>
          <div className="bg-gray-900 p-6 rounded-lg">
            <div className="flex flex-wrap gap-4">
              <CustomButton variant="primary" fillColor="#60a5fa">
                Primary
              </CustomButton>
              <CustomButton variant="secondary" borderColor="#374151" textColor="#d1d5db" fillColor="#374151">
                Secondary
              </CustomButton>
              <CustomButton variant="outlined" borderColor="#ffffff" textColor="#ffffff">
                Outlined
              </CustomButton>
              <CustomButton variant="ghost" textColor="#d1d5db">
                Ghost
              </CustomButton>
              <CustomButton variant="text" textColor="#60a5fa">
                Text Link
              </CustomButton>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
