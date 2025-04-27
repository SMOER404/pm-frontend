import { observer } from 'mobx-react-lite'
import { GetServerSideProps } from 'next'
import Layout from '@/components/layout/Layout'
import { SeoHead } from '@/shared/ui/SeoHead'
import { SITE_NAME } from '@/shared/config/env'
import { LoginForm } from '@/features/login-form/LoginForm'

const LoginPage = observer(() => {
  return (
    <Layout>
      <SeoHead
        title={`Вход | ${SITE_NAME}`}
        description="Войдите в свой аккаунт для доступа к личному кабинету"
        url="/login"
      />
      <div className="container mx-auto px-4 py-8">
        <LoginForm />
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