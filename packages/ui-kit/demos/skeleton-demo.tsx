"use client"

import CustomSkeleton from "../components/custom-skeleton"
import CustomCard from "../components/custom-card"

export default function SkeletonDemo() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-[#292D30] mb-4">Скелетоны со скосами</h1>
          <p className="text-gray-600">Индикаторы загрузки с уникальным дизайном</p>
        </div>

        {/* Основные варианты */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-[#292D30]">Основные варианты</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <CustomCard>
              <h3 className="text-lg font-semibold mb-4 text-[#292D30]">Text Skeleton</h3>
              <div className="space-y-2">
                <CustomSkeleton variant="text" width="100%" />
                <CustomSkeleton variant="text" width="80%" />
                <CustomSkeleton variant="text" width="60%" />
              </div>
            </CustomCard>

            <CustomCard>
              <h3 className="text-lg font-semibold mb-4 text-[#292D30]">Rectangular Skeleton</h3>
              <CustomSkeleton variant="rectangular" width="100%" height="120px" />
            </CustomCard>

            <CustomCard>
              <h3 className="text-lg font-semibold mb-4 text-[#292D30]">Circular Skeleton</h3>
              <div className="flex justify-center">
                <CustomSkeleton variant="circular" width="80px" height="80px" />
              </div>
            </CustomCard>
          </div>
        </section>

        {/* Размеры */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-[#292D30]">Размеры скосов</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <CustomCard>
              <h3 className="text-lg font-semibold mb-4 text-[#292D30]">Small (8px)</h3>
              <CustomSkeleton variant="rectangular" width="100%" height="60px" size="sm" />
            </CustomCard>

            <CustomCard>
              <h3 className="text-lg font-semibold mb-4 text-[#292D30]">Medium (12px)</h3>
              <CustomSkeleton variant="rectangular" width="100%" height="60px" size="md" />
            </CustomCard>

            <CustomCard>
              <h3 className="text-lg font-semibold mb-4 text-[#292D30]">Large (16px)</h3>
              <CustomSkeleton variant="rectangular" width="100%" height="60px" size="lg" />
            </CustomCard>
          </div>
        </section>

        {/* Примеры использования */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-[#292D30]">Примеры использования</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Profile Card Skeleton */}
            <CustomCard>
              <h3 className="text-lg font-semibold mb-4 text-[#292D30]">Profile Card Loading</h3>
              <div className="flex items-center space-x-4">
                <CustomSkeleton variant="circular" width="60px" height="60px" />
                <div className="flex-1 space-y-2">
                  <CustomSkeleton variant="text" width="70%" />
                  <CustomSkeleton variant="text" width="50%" />
                </div>
              </div>
            </CustomCard>

            {/* Article Card Skeleton */}
            <CustomCard>
              <h3 className="text-lg font-semibold mb-4 text-[#292D30]">Article Card Loading</h3>
              <div className="space-y-4">
                <CustomSkeleton variant="rectangular" width="100%" height="120px" />
                <div className="space-y-2">
                  <CustomSkeleton variant="text" width="90%" />
                  <CustomSkeleton variant="text" width="75%" />
                  <CustomSkeleton variant="text" width="60%" />
                </div>
              </div>
            </CustomCard>
          </div>
        </section>
      </div>
    </div>
  )
}
