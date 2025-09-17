"use client"

import Link from 'next/link'
import { Metadata } from 'next'
import { Heading, Text, Button } from "@poizon/ui-kit";

export const metadata: Metadata = {
  title: 'Страница не найдена | POIZON MARKET',
  description: 'Запрашиваемая страница не найдена',
}

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center px-4">
      <Heading size="h1" className="mb-4">404</Heading>
      <Heading size="h2" className="mb-6">Страница не найдена</Heading>
      <Text type="body" size="lg" color="muted" className="mb-8 text-center">
        К сожалению, запрашиваемая страница не существует или была удалена
      </Text>
      <Link href="/">
        <Button variant="default">
          Вернуться на главную
        </Button>
      </Link>
    </div>
  )
} 