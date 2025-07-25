import Link from 'next/link'
import { Metadata } from 'next'
import { CustomTypography, CustomButton } from "@poizon/ui-kit";

export const metadata: Metadata = {
  title: 'Страница не найдена | POIZON MARKET',
  description: 'Запрашиваемая страница не найдена',
}

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center px-4">
      <CustomTypography variant="h1" className="font-bold mb-4">404</CustomTypography>
      <CustomTypography variant="h2" className="mb-6">Страница не найдена</CustomTypography>
      <CustomTypography variant="body1" className="text-gray-600 mb-8 text-center">
        К сожалению, запрашиваемая страница не существует или была удалена
      </CustomTypography>
      <Link href="/">
        <CustomButton variant="primary">
          Вернуться на главную
        </CustomButton>
      </Link>
    </div>
  )
} 