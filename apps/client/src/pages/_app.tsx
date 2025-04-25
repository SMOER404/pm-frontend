import '@/styles/globals.css' // ← абсолютный путь через tsconfig.base.json
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
    return <Component {...pageProps} />
}