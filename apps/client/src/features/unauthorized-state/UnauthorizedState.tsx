import Link from 'next/link'
import { Card, Text, Button } from "@poizon/ui-kit";

export const UnauthorizedState = () => {
  return (
    <Card className="p-6 text-center">
      <Text type="body" size="lg" weight="bold" className="mb-4">Доступ запрещен</Text>
      <Text type="body" size="md" color="muted" className="mb-6">
        Для просмотра этой страницы необходимо авторизоваться
      </Text>
      <Link href="/auth/login">
        <Button variant="default">
          Войти
        </Button>
      </Link>
    </Card>
  )
} 