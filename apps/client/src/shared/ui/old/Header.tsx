'use client'

import Link from 'next/link'
import { observer } from 'mobx-react-lite'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { authStore } from '@/shared/stores/auth.store'
import { cartStore } from '@/shared/stores/cart.store'
import Image from 'next/image'
import {CategoryStore} from "@/entities/category";
import {useRootStore} from "@/shared/hooks/use-root-store";

// Определяем интерфейс для пользователя
interface User {
  name: string;
  email: string;
  [key: string]: any;
}

const Header = observer(() => {
  const pathname = usePathname()

  const store = useRootStore()
  const {getAllCategories} = store.categoryStore;

  useEffect(() => {
    getAllCategories()
  }, [])

  return (
    <header className="bg-white shadow-md fixed top-0 left-0 right-0 z-50 h-[70px]">
      <div className="container mx-auto px-4 h-full">
        <div className="flex items-center justify-between h-full">
          <Link href="/" className="flex items-center">
            <Image
              src="/static/images/logo-black.svg"
              alt="POIZON MARKET"
              width={240}
              height={48}
              fetchPriority="high"
            />
          </Link>

          <nav className="hidden md:flex space-x-8">
            <Link href="/catalog" className="text-gray-600 uppercase text-sm hover:text-primary-600">
              SALE
            </Link>
            <Link href="/brands" className="text-gray-600 uppercase text-sm hover:text-primary-600">
              Бренды
            </Link>
            <Link href="/brands" className="text-gray-600 uppercase text-sm hover:text-primary-600">
              Одежда
            </Link>
            <Link href="/brands" className="text-gray-600 uppercase text-sm hover:text-primary-600">
              Обувь
            </Link>
            <Link href="/brands" className="text-gray-600 uppercase text-sm hover:text-primary-600">
              Аксессуары
            </Link>
          </nav>

          <div className="flex items-center">
            <Link href="/cart" className="relative mr-8 ml-0">
              <span className="text-gray-600 uppercase text-sm hover:text-primary-600">
                <Image
                    src={'/static/images/search-icon.svg'}
                    alt='Поиск'
                    width={21}
                    height={25}
                />
              </span>
            </Link>
            <Link href="/cart" className="relative mr-8 ml-0">
              <span className="text-gray-600 uppercase text-sm hover:text-primary-600">
                <Image
                    src={'/static/images/like-icon.svg'}
                    alt='Лайк'
                    width={21}
                    height={25}
                />
              </span>
            </Link>
            <Link href="/cart" className="relative mr-8 ml-0">
              <span className="text-gray-600 uppercase text-sm hover:text-primary-600">
                <Image
                    src={'/static/images/shopping-cart-icon.svg'}
                    alt='Корзина'
                    width={21}
                    height={25}
                />
              </span>
            </Link>
              <Link
                href="/login"
                className="text-gray-600 uppercase text-sm hover:text-primary-600"
              >
                <Image
                    src={'/static/images/user-icon.svg'}
                    alt='Аватар'
                    width={21}
                    height={25}
                />
              </Link>
          </div>
        </div>
      </div>
    </header>
  )
})

export default Header 