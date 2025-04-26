import '@/styles/globals.css' // ← абсолютный путь через tsconfig.base.json
import type { AppProps } from 'next/app'
import { useEffect } from 'react'
import { authStore } from '@/shared/stores/auth.store'
import { Providers } from '@/shared/providers'
import { CacheProvider } from '@emotion/react'
import createCache from '@emotion/cache'
import { prefixer } from 'stylis'
import rtlPlugin from 'stylis-plugin-rtl'
import { StyledEngineProvider } from '@mui/material'

// Создаем кэш для стилей
const cache = createCache({
  key: 'mui',
  stylisPlugins: [prefixer, rtlPlugin],
})

export default function App({ Component, pageProps }: AppProps) {
    useEffect(() => {
        // Проверяем состояние аутентификации при загрузке приложения
        authStore.checkAuth()
    }, [])

    return (
        <CacheProvider value={cache}>
            <StyledEngineProvider injectFirst>
                <Providers>
                    <Component {...pageProps} />
                </Providers>
            </StyledEngineProvider>
        </CacheProvider>
    )
}