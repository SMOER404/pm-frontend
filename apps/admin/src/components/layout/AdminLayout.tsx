import { observer } from 'mobx-react-lite'
import { useRouter } from 'next/router'
import Link from 'next/link'
import styles from './AdminLayout.module.css'

interface AdminLayoutProps {
  children: React.ReactNode
}

const AdminLayout = observer(({ children }: AdminLayoutProps) => {
  const router = useRouter()

  const menuItems = [
    { path: '/', label: 'Главная' },
    { path: '/products', label: 'Товары' },
    { path: '/orders', label: 'Заказы' },
    { path: '/users', label: 'Пользователи' },
    { path: '/reviews', label: 'Отзывы' },
    { path: '/statistics', label: 'Статистика' },
  ]

  return (
    <div className={styles.layout}>
      <aside className={styles.sidebar}>
        <div className={styles.logo}>
          <h1>POIZON MARKET</h1>
          <p>Админ-панель</p>
        </div>
        
        <nav className={styles.nav}>
          {menuItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className={`${styles.navItem} ${router.pathname === item.path ? styles.active : ''}`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </aside>

      <main className={styles.main}>
        <header className={styles.header}>
          <div className={styles.userInfo}>
            <span>Администратор</span>
            <button className={styles.logoutButton}>Выйти</button>
          </div>
        </header>

        <div className={styles.content}>
          {children}
        </div>
      </main>
    </div>
  )
})

export default AdminLayout 