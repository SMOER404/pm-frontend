import type { AppProps } from 'next/app'
import AdminLayout from '@/components/layout/AdminLayout'
import '@/styles/globals.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AdminLayout>
      <Component {...pageProps} />
    </AdminLayout>
  )
} 