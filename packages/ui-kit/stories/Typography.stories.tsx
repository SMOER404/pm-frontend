import type { Meta, StoryObj } from "@storybook/react"
import { CustomTypography, Heading, Paragraph, Code as CodeComponent, Blockquote, Link, List, Highlight } from "../components/custom-typography"

const meta: Meta<typeof CustomTypography> = {
  title: "Components/Typography V2",
  component: CustomTypography,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["h1", "h2", "h3", "h4", "h5", "h6", "body", "lead", "small", "caption", "code", "blockquote"],
    },
    style: {
      control: { type: "select" },
      options: ["default", "brand", "primary", "secondary", "muted", "success", "warning", "danger", "info"],
    },
    size: {
      control: { type: "select" },
      options: ["xs", "sm", "md", "lg", "xl"],
    },
    truncate: {
      control: { type: "boolean" },
    },
    ellipsis: {
      control: { type: "boolean" },
    },
  },
}

export default meta
type Story = StoryObj<typeof CustomTypography>

export const Default: Story = {
  args: {
    children: "Это базовый текст с типографикой V2",
  },
}

export const Variants: Story = {
  render: () => (
    <div className="space-y-4 w-full max-w-4xl">
      <div>
        <h3 className="text-lg font-semibold mb-4">Заголовки</h3>
        <div className="space-y-2">
          <CustomTypography variant="h1">Заголовок H1</CustomTypography>
          <CustomTypography variant="h2">Заголовок H2</CustomTypography>
          <CustomTypography variant="h3">Заголовок H3</CustomTypography>
          <CustomTypography variant="h4">Заголовок H4</CustomTypography>
          <CustomTypography variant="h5">Заголовок H5</CustomTypography>
          <CustomTypography variant="h6">Заголовок H6</CustomTypography>
        </div>
      </div>
      
      <div>
        <h3 className="text-lg font-semibold mb-4">Текстовые варианты</h3>
        <div className="space-y-2">
          <CustomTypography variant="lead">Ведущий текст - используется для вводных параграфов</CustomTypography>
          <CustomTypography variant="body">Обычный текст - основной контент</CustomTypography>
          <CustomTypography variant="small">Мелкий текст - дополнительная информация</CustomTypography>
          <CustomTypography variant="caption">Подпись - самая мелкая типографика</CustomTypography>
        </div>
      </div>
    </div>
  ),
}

export const Styles: Story = {
  render: () => (
    <div className="space-y-4 w-full max-w-4xl">
      <div>
        <h3 className="text-lg font-semibold mb-4">Цветовые стили</h3>
        <div className="space-y-2">
          <CustomTypography style="default">Default - основной цвет текста</CustomTypography>
          <CustomTypography style="brand">Brand - брендовый цвет</CustomTypography>
          <CustomTypography style="primary">Primary - основной цвет</CustomTypography>
          <CustomTypography style="secondary">Secondary - вторичный цвет</CustomTypography>
          <CustomTypography style="muted">Muted - приглушенный цвет</CustomTypography>
          <CustomTypography style="success">Success - цвет успеха</CustomTypography>
          <CustomTypography style="warning">Warning - цвет предупреждения</CustomTypography>
          <CustomTypography style="danger">Danger - цвет ошибки</CustomTypography>
          <CustomTypography style="info">Info - информационный цвет</CustomTypography>
        </div>
      </div>
    </div>
  ),
}

export const Sizes: Story = {
  render: () => (
    <div className="space-y-4 w-full max-w-4xl">
      <div>
        <h3 className="text-lg font-semibold mb-4">Размеры текста</h3>
        <div className="space-y-2">
          <CustomTypography size="xs">Extra Small - очень мелкий текст</CustomTypography>
          <CustomTypography size="sm">Small - мелкий текст</CustomTypography>
          <CustomTypography size="md">Medium - средний текст (по умолчанию)</CustomTypography>
          <CustomTypography size="lg">Large - крупный текст</CustomTypography>
          <CustomTypography size="xl">Extra Large - очень крупный текст</CustomTypography>
        </div>
      </div>
    </div>
  ),
}

export const Headings: Story = {
  render: () => (
    <div className="space-y-6 w-full max-w-4xl">
      <div>
        <h3 className="text-lg font-semibold mb-4">Заголовки с разными стилями</h3>
        <div className="space-y-4">
          <Heading level={1} style="brand">Главный заголовок (H1)</Heading>
          <Heading level={2} style="primary">Подзаголовок (H2)</Heading>
          <Heading level={3} style="secondary">Секция (H3)</Heading>
          <Heading level={4} style="muted">Подсекция (H4)</Heading>
        </div>
      </div>
      
      <div>
        <h3 className="text-lg font-semibold mb-4">Заголовки с разными цветами</h3>
        <div className="space-y-2">
          <Heading level={2} style="success">Успешный заголовок</Heading>
          <Heading level={2} style="warning">Предупреждающий заголовок</Heading>
          <Heading level={2} style="danger">Опасный заголовок</Heading>
          <Heading level={2} style="info">Информационный заголовок</Heading>
        </div>
      </div>
    </div>
  ),
}

export const Paragraphs: Story = {
  render: () => (
    <div className="space-y-6 w-full max-w-4xl">
      <div>
        <h3 className="text-lg font-semibold mb-4">Параграфы разных размеров</h3>
        <div className="space-y-4">
          <Paragraph size="lg" style="brand">
            Это крупный параграф с брендовым цветом. Он используется для важного контента, 
            который должен привлекать внимание читателя.
          </Paragraph>
          <Paragraph size="md" style="default">
            Это стандартный параграф среднего размера. Он используется для основного контента 
            и обеспечивает хорошую читаемость.
          </Paragraph>
          <Paragraph size="sm" style="secondary">
            Это мелкий параграф с вторичным цветом. Он подходит для дополнительной информации 
            или пояснений.
          </Paragraph>
        </div>
      </div>
      
      <div>
        <h3 className="text-lg font-semibold mb-4">Параграфы с разными стилями</h3>
        <div className="space-y-4">
          <Paragraph style="success">
            Это параграф с цветом успеха. Он может использоваться для положительных сообщений 
            или подтверждений.
          </Paragraph>
          <Paragraph style="warning">
            Это параграф с цветом предупреждения. Он подходит для важных уведомлений, 
            которые требуют внимания.
          </Paragraph>
          <Paragraph style="danger">
            Это параграф с цветом ошибки. Он используется для критических сообщений 
            или предупреждений об ошибках.
          </Paragraph>
        </div>
      </div>
    </div>
  ),
}

export const CodeExample: Story = {
  render: () => (
    <div className="space-y-6 w-full max-w-4xl">
      <div>
        <h3 className="text-lg font-semibold mb-4">Инлайн код</h3>
        <div className="space-y-2">
          <Paragraph>
            Используйте <CodeComponent inline>console.log()</CodeComponent> для отладки в JavaScript.
          </Paragraph>
          <Paragraph>
            В React компоненты начинаются с заглавной буквы: <CodeComponent inline>MyComponent</CodeComponent>.
          </Paragraph>
          <Paragraph>
            CSS классы в Tailwind: <CodeComponent inline>bg-blue-500 text-white</CodeComponent>.
          </Paragraph>
        </div>
      </div>
      
      <div>
        <h3 className="text-lg font-semibold mb-4">Блоки кода</h3>
        <div className="space-y-4">
          <CodeComponent>
{`function greet(name) {
  return \`Hello, \${name}!\`;
}

console.log(greet('World'));`}
          </CodeComponent>
          
          <CodeComponent style="brand">
{`import React from 'react';

function MyComponent() {
  return (
    <div className="bg-brand text-primary">
      Hello World!
    </div>
  );
}`}
          </CodeComponent>
        </div>
      </div>
    </div>
  ),
}

export const Blockquotes: Story = {
  render: () => (
    <div className="space-y-6 w-full max-w-4xl">
      <div>
        <h3 className="text-lg font-semibold mb-4">Цитаты</h3>
        <div className="space-y-4">
          <Blockquote style="default">
            "Дизайн - это не то, как это выглядит и ощущается. Дизайн - это то, как это работает."
            <br />
            <span className="text-sm text-gray-500">— Стив Джобс</span>
          </Blockquote>
          
          <Blockquote style="brand">
            "Лучший способ предсказать будущее - это создать его."
            <br />
            <span className="text-sm text-gray-500">— Алан Кей</span>
          </Blockquote>
          
          <Blockquote style="primary">
            "Простота - это высшая форма изощренности."
            <br />
            <span className="text-sm text-gray-500">— Леонардо да Винчи</span>
          </Blockquote>
        </div>
      </div>
    </div>
  ),
}

export const Links: Story = {
  render: () => (
    <div className="space-y-6 w-full max-w-4xl">
      <div>
        <h3 className="text-lg font-semibold mb-4">Ссылки</h3>
        <div className="space-y-4">
          <Paragraph>
            Это <Link href="#" style="brand">ссылка с брендовым цветом</Link> в тексте.
          </Paragraph>
          
          <Paragraph>
            Это <Link href="#" style="primary" underline={false}>ссылка без подчеркивания</Link> в тексте.
          </Paragraph>
          
          <Paragraph>
            Это <Link href="#" style="success">ссылка с цветом успеха</Link> в тексте.
          </Paragraph>
          
          <div className="space-y-2">
            <Link href="#" style="brand" className="block">Ссылка на главную страницу</Link>
            <Link href="#" style="primary" className="block">Ссылка на документацию</Link>
            <Link href="#" style="info" className="block">Ссылка на поддержку</Link>
          </div>
        </div>
      </div>
    </div>
  ),
}

export const Lists: Story = {
  render: () => (
    <div className="space-y-6 w-full max-w-4xl">
      <div>
        <h3 className="text-lg font-semibold mb-4">Маркированные списки</h3>
        <div className="space-y-4">
          <List style="default">
            <li>Первый элемент списка</li>
            <li>Второй элемент списка</li>
            <li>Третий элемент списка</li>
            <li>Четвертый элемент списка</li>
          </List>
          
          <List style="brand">
            <li>Брендовый список</li>
            <li>С брендовым цветом</li>
            <li>Для выделения</li>
          </List>
        </div>
      </div>
      
      <div>
        <h3 className="text-lg font-semibold mb-4">Нумерованные списки</h3>
        <div className="space-y-4">
          <List ordered style="default">
            <li>Первый шаг</li>
            <li>Второй шаг</li>
            <li>Третий шаг</li>
            <li>Четвертый шаг</li>
          </List>
          
          <List ordered style="primary">
            <li>Основной процесс</li>
            <li>С основным цветом</li>
            <li>Для последовательности</li>
          </List>
        </div>
      </div>
    </div>
  ),
}

export const Highlights: Story = {
  render: () => (
    <div className="space-y-6 w-full max-w-4xl">
      <div>
        <h3 className="text-lg font-semibold mb-4">Выделение текста</h3>
        <div className="space-y-4">
          <Paragraph>
            Это текст с <Highlight highlight="yellow">желтым выделением</Highlight> важных моментов.
          </Paragraph>
          
          <Paragraph>
            Это текст с <Highlight highlight="green" style="success">зеленым выделением</Highlight> успешных результатов.
          </Paragraph>
          
          <Paragraph>
            Это текст с <Highlight highlight="blue" style="info">синим выделением</Highlight> информационных блоков.
          </Paragraph>
          
          <Paragraph>
            Это текст с <Highlight highlight="pink" style="brand">розовым выделением</Highlight> брендовых элементов.
          </Paragraph>
        </div>
      </div>
    </div>
  ),
}

export const Truncation: Story = {
  render: () => (
    <div className="space-y-6 w-full max-w-4xl">
      <div>
        <h3 className="text-lg font-semibold mb-4">Обрезанный текст</h3>
        <div className="space-y-4">
          <div className="w-64">
            <CustomTypography truncate>
              Это очень длинный текст, который будет обрезан с многоточием в конце, если он не помещается в контейнер
            </CustomTypography>
          </div>
          
          <div className="w-64">
            <CustomTypography ellipsis>
              Еще один длинный текст с явным указанием многоточия для лучшего контроля над отображением
            </CustomTypography>
          </div>
        </div>
      </div>
    </div>
  ),
}

export const CustomStyling: Story = {
  render: () => (
    <div className="space-y-6 w-full max-w-4xl">
      <div>
        <h3 className="text-lg font-semibold mb-4">Кастомные стили</h3>
        <div className="space-y-4">
          <CustomTypography 
            variant="h2" 
            style="brand"
            className="bg-gradient-to-r from-brand to-primary bg-clip-text text-transparent"
          >
            Градиентный заголовок
          </CustomTypography>
          
          <CustomTypography 
            variant="body"
            className="bg-gray-100 p-4 rounded-lg border-l-4 border-brand"
          >
            Параграф с кастомным фоном и рамкой
          </CustomTypography>
          
          <CustomTypography 
            variant="lead"
            className="text-center italic text-gray-600"
          >
            Центрированный курсивный текст
          </CustomTypography>
        </div>
      </div>
    </div>
  ),
}

export const ArticleExample: Story = {
  render: () => (
    <div className="space-y-6 w-full max-w-4xl">
      <article className="prose prose-lg max-w-none">
        <Heading level={1} style="brand" className="mb-6">
          Современная UI библиотека компонентов
        </Heading>
        
        <Paragraph style="default" size="lg" className="mb-6">
          Это современная библиотека компонентов, созданная с использованием React, TypeScript и Tailwind CSS. 
          Она предоставляет готовые к использованию компоненты с единой системой дизайн-токенов.
        </Paragraph>
        
        <Heading level={2} style="primary" className="mb-4">
          Основные особенности
        </Heading>
        
        <List style="default" className="mb-6">
          <li>Единая система дизайн-токенов</li>
          <li>Поддержка скошенных углов</li>
          <li>Полная типизация TypeScript</li>
          <li>Документация в Storybook</li>
          <li>Адаптивный дизайн</li>
        </List>
        
        <Heading level={2} style="primary" className="mb-4">
          Примеры использования
        </Heading>
        
        <Paragraph className="mb-4">
          Компоненты легко интегрируются в любой React проект. Просто импортируйте нужный компонент 
          и используйте его с необходимыми пропсами.
        </Paragraph>
        
        <CodeComponent className="mb-6">
{`import CustomButton from './components/custom-button'

function App() {
  return (
    <CustomButton variant="brand" size="md">
      Нажми меня
    </CustomButton>
  )
}`}
        </CodeComponent>
        
        <Blockquote style="brand" className="mb-6">
          "Хороший дизайн очевиден. Отличный дизайн прозрачен."
          <br />
          <span className="text-sm text-gray-500">— Джо Спарано</span>
        </Blockquote>
        
        <Paragraph className="mb-4">
          Для получения дополнительной информации посетите нашу 
          <Link href="#" style="brand" className="mx-1">документацию</Link> 
          или свяжитесь с 
          <Link href="#" style="primary" className="mx-1">поддержкой</Link>.
        </Paragraph>
        
        <Paragraph style="default" className="text-center text-gray-500">
          Последнее обновление: {new Date().toLocaleDateString('ru-RU')}
        </Paragraph>
      </article>
    </div>
  ),
} 