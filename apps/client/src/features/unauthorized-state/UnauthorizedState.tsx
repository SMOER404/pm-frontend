import Link from 'next/link'
import { CustomCard, CustomTypography, CustomButton } from "@poizon/ui-kit";

export const UnauthorizedState = () => {
  return (
    <CustomCard className="p-6 text-center">
      <CustomTypography variant="h4" className="mb-4">Доступ запрещен</CustomTypography>
      <CustomTypography variant="body1" className="text-gray-500 mb-6">
        Для просмотра этой страницы необходимо авторизоваться
      </CustomTypography>
      <Link href="/auth/login">
        <CustomButton variant="primary">
          Войти
        </CustomButton>
      </Link>
    </CustomCard>
  )
} 