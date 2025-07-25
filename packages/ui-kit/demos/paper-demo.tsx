"use client"

import CustomPaper from "../components/custom-paper"

export default function PaperDemo() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-[#292D30] mb-4">Paper со скосами</h1>
          <p className="text-gray-600">Базовые поверхности с уникальным дизайном</p>
        </div>

        {/* Основные варианты */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-[#292D30]">Уровни elevation</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <CustomPaper elevation={0} className="p-6 text-center">
              <h3 className="font-semibold text-[#292D30]">Elevation 0</h3>
              <p className="text-gray-600 text-sm mt-2">Без тени</p>
            </CustomPaper>

            <CustomPaper elevation={1} className="p-6 text-center">
              <h3 className="font-semibold text-[#292D30]">Elevation 1</h3>
              <p className="text-gray-600 text-sm mt-2">Легкая тень</p>
            </CustomPaper>

            <CustomPaper elevation={2} className="p-6 text-center">
              <h3 className="font-semibold text-[#292D30]">Elevation 2</h3>
              <p className="text-gray-600 text-sm mt-2">Средняя тень</p>
            </CustomPaper>

            <CustomPaper elevation={3} className="p-6 text-center">
              <h3 className="font-semibold text-[#292D30]">Elevation 3</h3>
              <p className="text-gray-600 text-sm mt-2">Сильная тень</p>
            </CustomPaper>
          </div>
        </section>

        {/* Размеры скосов */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-[#292D30]">Размеры скосов</h2>
          <div className="space-y-4">
            <CustomPaper size="sm" className="p-4">
              <p className="text-[#292D30]">Small paper - маленькие скосы (8px)</p>
            </CustomPaper>
            <CustomPaper size="md" className="p-4">
              <p className="text-[#292D30]">Medium paper - средние скосы (12px)</p>
            </CustomPaper>
            <CustomPaper size="lg" className="p-4">
              <p className="text-[#292D30]">Large paper - большие скосы (16px)</p>
            </CustomPaper>
          </div>
        </section>
      </div>
    </div>
  )
}
