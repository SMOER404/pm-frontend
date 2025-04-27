import Image from 'next/image'
import { motion } from 'framer-motion'
import { ProductResponseDto } from '@poizon/api'

interface ProductGalleryProps {
  product: ProductResponseDto
}

export const ProductGallery = ({ product }: ProductGalleryProps) => {
  return (
    <div className="relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="aspect-square relative rounded-lg overflow-hidden"
      >
        <Image
          src={`https://dummyimage.com/800x800/CCCCCC/000000&text=${encodeURIComponent(product.name)}`}
          alt={product.name}
          fill
          className="object-cover"
        />
      </motion.div>
      
      {/* Миниатюры */}
      <div className="grid grid-cols-4 gap-2 mt-4">
        {[1, 2, 3, 4].map((_, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="aspect-square relative rounded-lg overflow-hidden cursor-pointer"
          >
            <Image
              src={`https://dummyimage.com/200x200/CCCCCC/000000&text=${encodeURIComponent(product.name)}`}
              alt={`${product.name} - фото ${index + 1}`}
              fill
              className="object-cover"
            />
          </motion.div>
        ))}
      </div>
    </div>
  )
} 