'use client'

import { MobileNavigation } from '@poizon/ui-kit'
import { Home, Search, ShoppingCart, Heart, User } from 'lucide-react'
import { usePathname, useRouter } from 'next/navigation'
import { useMemo } from 'react'
import { useRootStore } from '@/shared/hooks/use-root-store'

export function MobileNav() {
  const pathname = usePathname()
  const router = useRouter()
  const { cartStore } = useRootStore()

  const activeItem = useMemo(() => {
    if (pathname === '/') return 'home'
    if (pathname.startsWith('/catalog')) return 'catalog'
    if (pathname.startsWith('/cart')) return 'cart'
    if (pathname.startsWith('/wishlist')) return 'wishlist'
    if (pathname.startsWith('/profile')) return 'profile'
    return undefined
  }, [pathname])

  const cartItemCount = cartStore.getItemCount()

  const mobileNavItems = useMemo(() => [
    {
      id: "home",
      label: "Главная",
      icon: <Home className="h-5 w-5" />,
      href: "/",
    },
    {
      id: "catalog",
      label: "Каталог",
      icon: <Search className="h-5 w-5" />,
      href: "/catalog",
    },
    {
      id: "cart",
      label: "Корзина",
      icon: <ShoppingCart className="h-5 w-5" />,
      href: "/cart",
      badge: cartItemCount > 0 ? cartItemCount : undefined,
    },
    {
      id: "wishlist",
      label: "Избранное",
      icon: <Heart className="h-5 w-5" />,
      href: "/wishlist",
    },
    {
      id: "profile",
      label: "Профиль",
      icon: <User className="h-5 w-5" />,
      href: "/profile",
    },
  ], [cartItemCount])

  const handleItemClick = (item: any) => {
    if (item.href) {
      router.push(item.href)
    }
  }

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-[200] w-full" style={{position: 'fixed'}}>
      <MobileNavigation 
        items={mobileNavItems}
        activeItem={activeItem}
        onItemClick={handleItemClick}
        variant="default"
        className="bg-white border-t border-gray-200"
        style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}
      />
    </div>
  )
}
