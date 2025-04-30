import { observer } from 'mobx-react-lite'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { Metadata } from 'next'
import { SITE_NAME } from '@/shared/config/env'
import { authStore } from '@/shared/stores/auth.store'
import { ProfileEdit } from './ProfileEdit'

export const metadata: Metadata = {
  title: `Профиль | ${SITE_NAME}`,
  description: 'Управление личным кабинетом',
}

async function getInitialUser() {
  const cookieStore = cookies()
  const token = cookieStore.get('token')

  if (!token) {
    redirect('/login')
  }

  try {
    await authStore.checkAuth()
    if (!authStore.user) {
      redirect('/login')
    }
    return authStore.user
  } catch (error) {
    redirect('/login')
  }
}

export default observer(async function ProfilePage() {
  const initialUser = await getInitialUser()

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Профиль</h1>
      <div className="bg-white rounded-lg shadow p-6">
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Имя</label>
            <p className="mt-1 text-lg">{initialUser.name}</p>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <p className="mt-1 text-lg">{initialUser.email}</p>
          </div>
          <div className="mt-6">
            <ProfileEdit initialUser={initialUser} />
          </div>
        </div>
      </div>
    </div>
  )
}) 