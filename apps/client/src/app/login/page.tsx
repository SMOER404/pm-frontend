import { observer } from 'mobx-react-lite'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { LoginForm } from '@/features/login-form/LoginForm'
import { SITE_NAME } from '@/shared/config/env'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: `Вход | ${SITE_NAME}`,
  description: 'Войдите в свой аккаунт для доступа к личному кабинету',
}

export default observer(function LoginPage() {
  const cookieStore = cookies()
  const token = cookieStore.get('token')

  if (token) {
    redirect('/')
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <LoginForm />
    </div>
  )
}) 