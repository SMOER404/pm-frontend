import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { useEffect } from 'react'
import { authStore } from '@/shared/stores/auth.store'
import { Providers } from '@/shared/providers'

export default function App({ Component, pageProps }: AppProps) {
    useEffect(() => {
        // Проверяем состояние аутентификации при загрузке приложения
        authStore.checkAuth()
    }, [])

    return (
        <Providers>
            <Component {...pageProps} />
        </Providers>
    )
}