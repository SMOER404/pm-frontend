import { observer } from 'mobx-react-lite'
import { GetServerSideProps } from 'next'
import Layout from '@/components/layout/Layout'
import { SeoHead } from '@/shared/ui/SeoHead'
import { SITE_NAME } from '@/shared/config/env'
import { RegistrationForm } from '@/features/registration-form/RegistrationForm'

const RegisterPage = observer(() => {
  return (
    <Layout>
      <SeoHead
        title={`Регистрация | ${SITE_NAME}`}
        description="Создайте новый аккаунт для доступа к личному кабинету"
        url="/register"
      />
      <div className="container mx-auto px-4 py-8">
        <RegistrationForm />
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

export default RegisterPage 