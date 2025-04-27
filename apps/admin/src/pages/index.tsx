import { observer } from 'mobx-react-lite'
import { GetServerSideProps } from 'next'
import { useRouter } from 'next/router'
import styles from './Admin.module.css'

const AdminPage = observer(() => {
  const router = useRouter()

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Панель управления</h1>
        
        <div className={styles.grid}>
          <div className={styles.card} onClick={() => router.push('/products')}>
            <h2>Товары</h2>
            <p>Управление товарами, категориями и брендами</p>
          </div>
          
          <div className={styles.card} onClick={() => router.push('/orders')}>
            <h2>Заказы</h2>
            <p>Управление заказами и их статусами</p>
          </div>
          
          <div className={styles.card} onClick={() => router.push('/users')}>
            <h2>Пользователи</h2>
            <p>Управление пользователями и их правами</p>
          </div>
          
          <div className={styles.card} onClick={() => router.push('/reviews')}>
            <h2>Отзывы</h2>
            <p>Модерация отзывов</p>
          </div>
          
          <div className={styles.card} onClick={() => router.push('/statistics')}>
            <h2>Статистика</h2>
            <p>Аналитика и отчеты</p>
          </div>
        </div>
      </div>
    </div>
  )
})

export const getServerSideProps: GetServerSideProps = async (context) => {
  // TODO: Добавить проверку прав администратора
  return {
    props: {}
  }
}

export default AdminPage 