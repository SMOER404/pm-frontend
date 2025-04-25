import { observer } from 'mobx-react-lite'
import { GetServerSideProps } from 'next'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import Link from 'next/link'
import Layout from '@/components/layout/Layout'
import { SeoHead } from '@/shared/ui/SeoHead'
import { authStore } from '@/shared/stores/auth.store'
import { SITE_NAME } from '@/shared/config/env'

const LoginPage = observer(() => {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)

    try {
      const success = await authStore.login(email, password)
      if (success) {
        router.push('/')
      }
    } catch (error) {
      setError('Ошибка при входе в систему')
    }
  }

  return (
    <Layout>
      <SeoHead
        title={`Вход | ${SITE_NAME}`}
        description="Войдите в свой аккаунт для доступа к личному кабинету"
        url="/login"
      />
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-md mx-auto">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h1 className="text-2xl font-bold mb-6">Вход</h1>

            {error && (
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Email
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="input"
                  required
                />
              </div>

              <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Пароль
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="input"
                  required
                />
              </div>

              <div className="flex items-center justify-between mb-6">
                <label className="flex items-center">
                  <input type="checkbox" className="form-checkbox" />
                  <span className="ml-2 text-sm text-gray-600">
                    Запомнить меня
                  </span>
                </label>
                <Link
                  href="/forgot-password"
                  className="text-sm text-primary-600 hover:text-primary-700"
                >
                  Забыли пароль?
                </Link>
              </div>

              <button
                type="submit"
                className="btn btn-primary w-full"
                disabled={authStore.isLoading}
              >
                {authStore.isLoading ? 'Вход...' : 'Войти'}
              </button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600">
                Нет аккаунта?{' '}
                <Link
                  href="/register"
                  className="text-primary-600 hover:text-primary-700"
                >
                  Зарегистрироваться
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
})

export const getServerSideProps: GetServerSideProps = async (context) => {
  const token = context.req.cookies.token

  if (token) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }

  return {
    props: {},
  }
}

export default LoginPage 