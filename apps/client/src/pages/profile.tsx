import { observer } from 'mobx-react-lite'
import { GetServerSideProps } from 'next'
import { useRouter } from 'next/router'
import { useState } from 'react'
import Layout from '@/components/layout/Layout'
import { SeoHead } from '@/shared/ui/SeoHead'
import { authStore } from '@/shared/stores/auth.store'
import { api } from '@poizon/api'
import { API_URL, SITE_NAME } from '@/shared/config/env'

interface ProfilePageProps {
  initialUser: any // TODO: Добавить правильный тип после генерации API
}

const ProfilePage = observer(({ initialUser }: ProfilePageProps) => {
  const router = useRouter()
  const [isEditing, setIsEditing] = useState(false)
  const [formData, setFormData] = useState({
    name: initialUser?.name || '',
    email: initialUser?.email || '',
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  })
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState<string | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    setSuccess(null)

    if (formData.newPassword !== formData.confirmPassword) {
      setError('Пароли не совпадают')
      return
    }

    try {
      const updateData = {
        name: formData.name,
        email: formData.email,
        currentPassword: formData.currentPassword || undefined,
        newPassword: formData.newPassword || undefined,
      }

      const response = await api.auth.updateProfile(updateData)
      authStore.setAuth(response.user, response.token)
      setSuccess('Профиль успешно обновлен')
      setIsEditing(false)
    } catch (error) {
      setError('Ошибка при обновлении профиля')
    }
  }

  if (!authStore.isAuthenticated) {
    return (
      <Layout>
        <SeoHead
          title={`Профиль | ${SITE_NAME}`}
          description="Управление профилем пользователя"
          url="/profile"
        />
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">
            <h1 className="text-2xl font-medium mb-4">Требуется авторизация</h1>
            <p className="mb-4">Для доступа к профилю необходимо войти в систему</p>
            <button
              onClick={() => router.push('/login')}
              className="btn btn-primary"
            >
              Войти
            </button>
          </div>
        </div>
      </Layout>
    )
  }

  return (
    <Layout>
      <SeoHead
        title={`Профиль | ${SITE_NAME}`}
        description="Управление профилем пользователя"
        url="/profile"
      />
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-2xl font-medium">Профиль</h1>
              {!isEditing && (
                <button
                  onClick={() => setIsEditing(true)}
                  className="btn btn-secondary"
                >
                  Редактировать
                </button>
              )}
            </div>

            {error && (
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
                {error}
              </div>
            )}

            {success && (
              <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
                {success}
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-medium mb-2">
                  Имя
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  disabled={!isEditing}
                  className="input"
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  disabled={!isEditing}
                  className="input"
                />
              </div>

              {isEditing && (
                <>
                  <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-medium mb-2">
                      Текущий пароль
                    </label>
                    <input
                      type="password"
                      name="currentPassword"
                      value={formData.currentPassword}
                      onChange={handleChange}
                      className="input"
                    />
                  </div>

                  <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-medium mb-2">
                      Новый пароль
                    </label>
                    <input
                      type="password"
                      name="newPassword"
                      value={formData.newPassword}
                      onChange={handleChange}
                      className="input"
                    />
                  </div>

                  <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-medium mb-2">
                      Подтверждение пароля
                    </label>
                    <input
                      type="password"
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      className="input"
                    />
                  </div>
                </>
              )}

              {isEditing && (
                <div className="flex gap-4">
                  <button type="submit" className="btn btn-primary">
                    Сохранить
                  </button>
                  <button
                    type="button"
                    onClick={() => setIsEditing(false)}
                    className="btn btn-secondary"
                  >
                    Отмена
                  </button>
                </div>
              )}
            </form>
          </div>

          {/* История заказов */}
          <div className="mt-8 bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-medium mb-4">История заказов</h2>
            <p className="text-gray-600">У вас пока нет заказов</p>
          </div>
        </div>
      </div>
    </Layout>
  )
})

export const getServerSideProps: GetServerSideProps = async (context) => {
  try {
    const token = context.req.cookies.token

    if (!token) {
      return {
        props: {
          initialUser: null,
        },
      }
    }

    // TODO: Заменить на реальный API клиент после генерации
    const response = await fetch(`${API_URL}/auth/me`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })

    if (!response.ok) {
      return {
        props: {
          initialUser: null,
        },
      }
    }

    const user = await response.json()

    return {
      props: {
        initialUser: user,
      },
    }
  } catch (error) {
    console.error('Ошибка при загрузке данных пользователя:', error)
    return {
      props: {
        initialUser: null,
      },
    }
  }
}

export default ProfilePage 