import { categoriesApi } from '@/shared/api'
import Link from 'next/link'
import type { CategoryDto } from '@poizon-market/api'

export default async function CatalogLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <div className="flex gap-8">
      <div className="flex-1">
        {children}
      </div>
    </div>
  )
} 