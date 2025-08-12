import React from 'react'
import { Heading } from './components/ui/heading'
import { Text } from './components/ui/text'
import { Link } from './components/ui/link'
import { List, ListItem } from './components/ui/list'
import { Star, ArrowRight, Check } from 'lucide-react'

export default function TypographyDemo() {
  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-4xl mx-auto space-y-12">
        
        {/* Заголовки */}
        <section className="space-y-6">
          <Heading level="h1" color="secondary" align="center" iconLeft={<Star className="h-8 w-8" />}>
            Компоненты типографии
          </Heading>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <Heading level="h2" color="primary">Заголовки (Heading)</Heading>
              <div className="space-y-2">
                <Heading level="h1">H1 - Главный заголовок</Heading>
                <Heading level="h2">H2 - Подзаголовок</Heading>
                <Heading level="h3">H3 - Секция</Heading>
                <Heading level="h4">H4 - Подсекция</Heading>
                <Heading level="h5">H5 - Мелкий заголовок</Heading>
                <Heading level="h6">H6 - Самый мелкий</Heading>
              </div>
            </div>
            
            <div className="space-y-4">
              <Heading level="h2" color="primary">Варианты стилизации</Heading>
              <div className="space-y-2">
                <Heading level="h3" color="primary">Основной цвет</Heading>
                <Heading level="h3" color="secondary">Вторичный цвет</Heading>
                <Heading level="h3" color="error">Цвет ошибки</Heading>
                <Heading level="h3" align="center">По центру</Heading>
                <Heading level="h3" align="right">По правому краю</Heading>
              </div>
            </div>
          </div>
        </section>

        {/* Текст */}
        <section className="space-y-6">
          <Heading level="h2" color="primary">Текст (Text)</Heading>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <Heading level="h3">Типы текста</Heading>
              <div className="space-y-2">
                <Text type="body" size="md">
                  Основной текст (body) - используется для основного контента страницы. 
                  Имеет расслабленную высоту строки для лучшей читаемости.
                </Text>
                <Text type="caption" size="sm">
                  Подпись (caption) - используется для небольших подписей и комментариев.
                </Text>
                <Text type="secondary" size="md">
                  Вторичный текст (secondary) - используется для дополнительной информации.
                </Text>
              </div>
            </div>
            
            <div className="space-y-4">
              <Heading level="h3">Размеры и веса</Heading>
              <div className="space-y-2">
                <Text size="sm" weight="normal">Маленький обычный (14px)</Text>
                <Text size="md" weight="normal">Средний обычный (16px)</Text>
                <Text size="lg" weight="bold">Большой жирный (18px)</Text>
                <Text size="md" weight="bold" color="primary">Жирный основной цвет</Text>
                <Text size="md" color="secondary">Вторичный цвет</Text>
                <Text size="md" color="muted">Приглушенный цвет</Text>
              </div>
            </div>
          </div>
        </section>

        {/* Ссылки */}
        <section className="space-y-6">
          <Heading level="h2" color="primary">Ссылки (Link)</Heading>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <Heading level="h3">Варианты подчёркивания</Heading>
              <div className="space-y-2">
                <Link href="#" underline="none">Без подчёркивания</Link>
                <br />
                <Link href="#" underline="always">Всегда подчёркнутая</Link>
                <br />
                <Link href="#" underline="hover">Подчёркивание при наведении</Link>
              </div>
            </div>
            
            <div className="space-y-4">
              <Heading level="h3">Цвета и внешние ссылки</Heading>
              <div className="space-y-2">
                <Link href="#" color="primary">Основной цвет</Link>
                <br />
                <Link href="#" color="secondary">Вторичный цвет</Link>
                <br />
                <Link href="#" color="muted">Приглушенный цвет</Link>
                <br />
                <Link href="https://example.com" target="_blank">
                  Внешняя ссылка с иконкой
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Списки */}
        <section className="space-y-6">
          <Heading level="h2" color="primary">Списки (List)</Heading>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <Heading level="h3">Маркированные списки</Heading>
              <div className="space-y-4">
                <div>
                  <Text weight="bold" size="sm">С точками:</Text>
                  <List type="unordered" marker="dot" spacing="md">
                    <ListItem>Первый элемент списка</ListItem>
                    <ListItem>Второй элемент списка</ListItem>
                    <ListItem>Третий элемент списка</ListItem>
                  </List>
                </div>
                
                <div>
                  <Text weight="bold" size="sm">С галочками:</Text>
                  <List type="unordered" marker="check" spacing="md">
                    <ListItem>Выполненная задача</ListItem>
                    <ListItem>Ещё одна выполненная задача</ListItem>
                    <ListItem>И ещё одна выполненная задача</ListItem>
                  </List>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <Heading level="h3">Нумерованные списки</Heading>
              <div className="space-y-4">
                <div>
                  <Text weight="bold" size="sm">Обычный нумерованный:</Text>
                  <List type="ordered" spacing="md">
                    <ListItem>Первый пронумерованный элемент</ListItem>
                    <ListItem>Второй пронумерованный элемент</ListItem>
                    <ListItem>Третий пронумерованный элемент</ListItem>
                  </List>
                </div>
                
                <div>
                  <Text weight="bold" size="sm">Без маркеров:</Text>
                  <List type="unordered" marker="none" spacing="md">
                    <ListItem>Элемент без маркера</ListItem>
                    <ListItem>Ещё один элемент без маркера</ListItem>
                    <ListItem>И ещё один элемент без маркера</ListItem>
                  </List>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Комплексный пример */}
        <section className="space-y-6">
          <Heading level="h2" color="primary" align="center">
            Комплексный пример использования
          </Heading>
          
          <div className="bg-card border rounded-lg p-6 space-y-6">
            <Heading level="h3" color="secondary" iconLeft={<Check className="h-5 w-5" />}>
              Статья о компонентах типографии
            </Heading>
            
            <Text type="body" size="md">
              В этой статье мы рассмотрим создание компонентов типографии на базе shadcn/ui. 
              Компоненты обеспечивают единообразное отображение текста во всём приложении.
            </Text>
            
            <div className="space-y-4">
              <Heading level="h4">Основные возможности:</Heading>
              <List type="unordered" marker="check" spacing="md">
                <ListItem>Поддержка всех уровней заголовков (h1-h6)</ListItem>
                <ListItem>Различные варианты подчёркивания ссылок</ListItem>
                <ListItem>Автоматическая иконка для внешних ссылок</ListItem>
                <ListItem>Множественные типы маркеров списков</ListItem>
                <ListItem>Настраиваемые отступы и интервалы</ListItem>
              </List>
            </div>
            
            <div className="space-y-4">
              <Heading level="h4">Порядок внедрения:</Heading>
              <List type="ordered" spacing="md">
                <ListItem>Создать базовые компоненты</ListItem>
                <ListItem>Добавить варианты стилизации</ListItem>
                <ListItem>Написать Storybook истории</ListItem>
                <ListItem>Протестировать доступность</ListItem>
              </List>
            </div>
            
            <Text type="secondary" size="sm">
              Для получения дополнительной информации посетите{' '}
              <Link href="https://example.com" target="_blank">
                нашу документацию
              </Link>
              {' '}или свяжитесь с командой разработки.
            </Text>
          </div>
        </section>

        {/* Футер */}
        <footer className="border-t pt-8">
          <div className="flex items-center justify-between">
            <Text type="caption" color="muted">
              © 2024 UI Kit. Все права защищены.
            </Text>
            <div className="flex items-center gap-4">
              <Link href="#" color="secondary">Политика конфиденциальности</Link>
              <Link href="#" color="secondary">Условия использования</Link>
              <Link href="https://github.com" target="_blank" color="primary">
                GitHub
              </Link>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}
