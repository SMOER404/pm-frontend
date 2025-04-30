'use client'

import { BrandDto } from '@poizon/api'
import Image from 'next/image'

interface BrandInfoProps {
  brand: BrandDto
}

export const BrandInfo = ({ brand }: BrandInfoProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-8">
      <div className="flex flex-col md:flex-row items-center gap-6">
        <div className="relative w-32 h-32 flex-shrink-0">
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
        <div className="flex-1">
          <h1 className="text-3xl font-bold mb-4">{brand.name}</h1>
          {brand.description && (
            <p className="text-gray-600 mb-4">{brand.description}</p>
          )}
        </div>
      </div>
    </div>
  )
} 