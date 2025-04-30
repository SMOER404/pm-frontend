import { observer } from 'mobx-react-lite'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { RegistrationForm } from '@/features/registration-form/RegistrationForm'
import { SITE_NAME } from '@/shared/config/env'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: `Регистрация | ${SITE_NAME}`,
  description: 'Создайте новый аккаунт для доступа к личному кабинету',
}

export default observer(function RegisterPage() {
  const cookieStore = cookies()
  const token = cookieStore.get('token')

  if (token) {
    redirect('/')
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <RegistrationForm />
    </div>
  )
}) 