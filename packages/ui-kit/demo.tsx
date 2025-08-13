import React from 'react'
import { Button } from './components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './components/ui/card'
import { Input } from './components/ui/input'
import { Heading } from './components/ui/heading'
import { Text } from './components/ui/text'
import { Link } from './components/ui/link'
import { List, ListItem } from './components/ui/list'
import { Star, ArrowRight } from 'lucide-react'

export default function Demo() {
  return (
    <div className="p-8 space-y-8">
      <div className="space-y-4">
        <h1 className="text-2xl font-bold text-red-500">Тест шрифтов - обычный h1</h1>
        <div className="font-druktext text-2xl text-blue-500">Тест DrukTextCyr шрифта</div>
        <div className="font-azorath text-2xl text-green-500">Тест Azorath шрифта</div>
      </div>

      <div className="space-y-4">
        <Heading level="h1" color="primary">Заголовок H1 - Основной</Heading>
        <Heading level="h2" color="secondary">Заголовок H2 - Вторичный</Heading>
        <Heading level="h3" color="error">Заголовок H3 - Ошибка</Heading>
        <Heading level="h4" align="center">Заголовок H4 - По центру</Heading>
        <Heading level="h5" align="right">Заголовок H5 - По правому краю</Heading>
        <Heading level="h6" iconLeft={<Star className="h-4 w-4" />}>Заголовок H6 с иконкой</Heading>
      </div>

      <div className="space-y-4">
        <Text type="body" size="lg" weight="bold" color="primary">
          Большой жирный текст основного цвета
        </Text>
        <Text type="body" size="md" weight="medium" color="secondary">
          Средний текст среднего веса вторичного цвета
        </Text>
        <Text type="body" size="sm" weight="normal" color="muted">
          Маленький обычный текст приглушенного цвета
        </Text>
        <Text as="span" type="caption" size="sm" color="muted">
          Текст как span элемент
        </Text>
      </div>

      <div className="space-y-4">
        <Link href="#" color="primary" underline="hover">
          Ссылка основного цвета с подчеркиванием при наведении
        </Link>
        <Link href="#" color="secondary" underline="always">
          Ссылка вторичного цвета с постоянным подчеркиванием
        </Link>
        <Link href="https://example.com" color="muted" showExternalIcon>
          Внешняя ссылка с иконкой
        </Link>
      </div>

      <div className="space-y-4">
        <List type="unordered" spacing="md">
          <ListItem>Первый элемент списка</ListItem>
          <ListItem marker="check">Второй элемент с галочкой</ListItem>
          <ListItem>Третий элемент списка</ListItem>
        </List>

        <List type="ordered" spacing="lg">
          <ListItem>Первый пронумерованный элемент</ListItem>
          <ListItem>Второй пронумерованный элемент</ListItem>
          <ListItem>Третий пронумерованный элемент</ListItem>
        </List>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Карточка с заголовком</CardTitle>
            <CardDescription>Описание карточки</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Содержимое карточки</p>
          </CardContent>
          <CardFooter>
            <Button>Действие</Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Еще одна карточка</CardTitle>
          </CardHeader>
          <CardContent>
            <Input placeholder="Введите текст" />
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
