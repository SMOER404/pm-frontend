import React from 'react'
import { Heading } from './components/ui/heading'
import { Link } from './components/ui/link'
import { List, ListItem } from './components/ui/list'
import { Text } from './components/ui/text'
import { Star, ArrowRight } from 'lucide-react'

export default function Demo() {
  return (
    <div className="p-8 max-w-4xl mx-auto space-y-8">
      <h1 className="text-2xl font-bold mb-6">Демонстрация исправлений типографии</h1>
      
      {/* Heading - исправленный align */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Heading компонент - исправленный align</h2>
        <div className="space-y-2 border p-4">
          <Heading size="h3" align="left">Выравнивание по левому краю</Heading>
          <Heading size="h3" align="center">Выравнивание по центру</Heading>
          <Heading size="h3" align="right">Выравнивание по правому краю</Heading>
        </div>
        
        <div className="space-y-2">
          <Heading size="h1">Заголовок H1 (32px)</Heading>
          <Heading size="h2">Заголовок H2 (28px)</Heading>
          <Heading size="h3">Заголовок H3 (24px)</Heading>
          <Heading size="h4">Заголовок H4 (20px)</Heading>
          <Heading size="h5">Заголовок H5 (18px)</Heading>
          <Heading size="h6">Заголовок H6 (16px)</Heading>
        </div>
        
        <div className="space-y-2">
          <Heading size="h2" color="primary">Primary цвет</Heading>
          <Heading size="h2" color="secondary">Secondary цвет (брендовый)</Heading>
          <Heading size="h2" color="error">Error цвет</Heading>
        </div>
        
        <div className="space-y-2">
          <Heading size="h3" iconLeft={<Star className="h-6 w-6" />}>
            С иконкой слева
          </Heading>
          <Heading size="h3" iconRight={<ArrowRight className="h-6 w-6" />}>
            С иконкой справа
          </Heading>
        </div>
      </section>
      
      {/* Link - исправленный showExternalIcon */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Link компонент - исправленный showExternalIcon</h2>
        <div className="space-y-2">
          <Link href="#" color="primary">Primary ссылка</Link>
          <br />
          <Link href="#" color="secondary">Secondary ссылка (брендовый цвет)</Link>
          <br />
          <Link href="#" color="muted">Muted ссылка</Link>
        </div>
        
        <div className="space-y-2">
          <Link href="https://example.com" target="_blank" showExternalIcon={true}>
            Внешняя ссылка с иконкой (showExternalIcon=true)
          </Link>
          <br />
          <Link href="https://example.com" target="_blank" showExternalIcon={false}>
            Внешняя ссылка без иконки (showExternalIcon=false)
          </Link>
          <br />
          <Link href="https://example.com" showExternalIcon={true}>
            Внешняя ссылка без target="_blank" (showExternalIcon=true)
          </Link>
          <br />
          <Link href="/internal-page">
            Внутренняя ссылка
          </Link>
        </div>
      </section>
      
      {/* List - исправленные ordered списки */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">List компонент - исправленные ordered списки</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="mb-2">Unordered списки</h3>
            <div className="space-y-4">
              <List type="unordered" marker="dot">
                <ListItem>Элемент с точкой</ListItem>
                <ListItem>Ещё один элемент</ListItem>
              </List>
              
              <List type="unordered" marker="check">
                <ListItem>Элемент с галочкой</ListItem>
                <ListItem>Ещё один элемент</ListItem>
              </List>
              
              <List type="unordered" marker="none">
                <ListItem>Элемент без маркера</ListItem>
                <ListItem>Ещё один элемент</ListItem>
              </List>
            </div>
          </div>
          
          <div>
            <h3 className="mb-2">Ordered списки (исправленные)</h3>
            <div className="space-y-4">
              <List type="ordered" marker="dot">
                <ListItem>Элемент с точкой (но показывается номер)</ListItem>
                <ListItem>Ещё один элемент</ListItem>
              </List>
              
              <List type="ordered" marker="check">
                <ListItem>Элемент с галочкой (но показывается номер)</ListItem>
                <ListItem>Ещё один элемент</ListItem>
              </List>
              
              <List type="ordered" marker="none">
                <ListItem>Элемент без маркера (но показывается номер)</ListItem>
                <ListItem>Ещё один элемент</ListItem>
              </List>
            </div>
          </div>
        </div>
      </section>
      
      {/* Text - исправленные типы */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Text компонент - исправленные типы</h2>
        
        <div className="space-y-4">
          <div>
            <h3 className="mb-2">Типы текста (теперь работают с size)</h3>
            <div className="space-y-2">
              <Text type="body" size="md">Body текст (16px, leading-relaxed)</Text>
              <Text type="caption" size="sm">Caption текст (14px, leading-tight)</Text>
              <Text type="secondary" size="sm">Secondary текст (14px, leading-normal)</Text>
            </div>
          </div>
          
          <div>
            <h3 className="mb-2">Разные размеры с одним типом</h3>
            <div className="space-y-2">
              <Text type="body" size="sm">Body текст маленький (14px)</Text>
              <Text type="body" size="md">Body текст средний (16px)</Text>
              <Text type="body" size="lg">Body текст большой (18px)</Text>
            </div>
          </div>
          
          <div>
            <h3 className="mb-2">Цвета текста</h3>
            <div className="space-y-2">
              <Text color="primary">Primary цвет</Text>
              <Text color="secondary">Secondary цвет (брендовый)</Text>
              <Text color="muted">Muted цвет</Text>
            </div>
          </div>
          
          <div>
            <h3 className="mb-2">Комбинации</h3>
            <div className="space-y-2">
              <Text type="body" size="lg" weight="bold" color="primary">
                Большой жирный body текст
              </Text>
              <Text type="caption" size="sm" color="muted">
                Маленькая caption подпись
              </Text>
              <Text type="secondary" size="md" weight="normal" color="secondary">
                Средний secondary текст
              </Text>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
