'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { BrandDto } from '@poizon/api'

interface CategoryBrandsProps {
  categorySlug: string
  brands: BrandDto[]
}

export const CategoryBrands = ({ categorySlug, brands }: CategoryBrandsProps) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
      {brands.map((brand) => (
        <motion.div
          key={brand.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Link
            href={`/catalog/${categorySlug}/${brand.slug}`}
            className="block bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow"
          >
            <div className="relative w-full aspect-square mb-4">
              {brand.logoUrl ? (
                <Image
                  src={brand.logoUrl}
                  alt={brand.name}
                  fill
                  className="object-contain"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-gray-100 rounded-lg">
                  <span className="text-gray-400 text-lg font-medium">
                    {brand.name}
                  </span>
                </div>
              )}
            </div>
            <h3 className="text-lg font-medium text-center">{brand.name}</h3>
          </Link>
        </motion.div>
      ))}
    </div>
  )
} 