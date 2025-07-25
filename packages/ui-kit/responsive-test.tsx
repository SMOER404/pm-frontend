"use client"

import CustomButton from "./custom-button"
import { Smartphone, Tablet, Monitor, Heart, Download } from "lucide-react"

export default function ResponsiveTest() {
  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-6 lg:p-8">
      <div className="max-w-6xl mx-auto space-y-8">
        <div className="text-center">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Тест адаптивности кнопок</h1>
          <p className="text-gray-600 text-sm sm:text-base">Проверка корректной работы скосов на всех устройствах</p>
        </div>

        {/* Мобильная симуляция */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <Smartphone className="w-5 h-5 text-blue-600" />
            <h2 className="text-xl font-semibold text-gray-800">Мобильные устройства (320px-768px)</h2>
          </div>
          <div className="bg-white p-4 rounded-lg border-2 border-dashed border-gray-300">
            <div className="max-w-sm mx-auto space-y-4">
              <div className="grid grid-cols-1 gap-3">
                <CustomButton size="sm" className="w-full">
                  Маленькая кнопка
                </CustomButton>
                <CustomButton variant="primary" size="md" className="w-full">
                  Средняя кнопка
                </CustomButton>
                <CustomButton size="lg" className="w-full">
                  Большая кнопка
                </CustomButton>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <CustomButton size="sm" icon={<Heart className="w-4 h-4" />}>
                  Like
                </CustomButton>
                <CustomButton variant="primary" size="sm" icon={<Download className="w-4 h-4" />}>
                  Save
                </CustomButton>
              </div>
            </div>
          </div>
        </section>

        {/* Планшетная симуляция */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <Tablet className="w-5 h-5 text-green-600" />
            <h2 className="text-xl font-semibold text-gray-800">Планшеты (768px-1024px)</h2>
          </div>
          <div className="bg-white p-6 rounded-lg border-2 border-dashed border-gray-300">
            <div className="max-w-2xl mx-auto space-y-4">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                <CustomButton size="sm">Кнопка 1</CustomButton>
                <CustomButton variant="primary" size="md">
                  Кнопка 2
                </CustomButton>
                <CustomButton size="lg">Кнопка 3</CustomButton>
              </div>
              <div className="flex flex-wrap gap-3">
                <CustomButton className="flex-1 min-w-0">Гибкая ширина</CustomButton>
                <CustomButton variant="primary" className="flex-1 min-w-0">
                  Адаптивная
                </CustomButton>
              </div>
            </div>
          </div>
        </section>

        {/* Десктопная симуляция */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <Monitor className="w-5 h-5 text-purple-600" />
            <h2 className="text-xl font-semibold text-gray-800">Десктоп (1024px+)</h2>
          </div>
          <div className="bg-white p-8 rounded-lg border-2 border-dashed border-gray-300">
            <div className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <CustomButton size="sm">Small</CustomButton>
                <CustomButton variant="primary" size="md">
                  Medium
                </CustomButton>
                <CustomButton size="lg">Large</CustomButton>
                <CustomButton variant="secondary" size="md">
                  Ghost
                </CustomButton>
              </div>
              <div className="flex flex-wrap gap-4 justify-center">
                <CustomButton className="w-32">Узкая</CustomButton>
                <CustomButton variant="primary" className="w-48">
                  Средняя ширина
                </CustomButton>
                <CustomButton className="w-64">Широкая кнопка</CustomButton>
                <CustomButton variant="secondary" className="w-80">
                  Очень широкая кнопка для тестирования
                </CustomButton>
              </div>
            </div>
          </div>
        </section>

        {/* Экстремальные размеры */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-800">Экстремальные размеры</h2>
          <div className="bg-white p-6 rounded-lg border-2 border-dashed border-gray-300 space-y-4">
            <div className="space-y-3">
              <CustomButton size="sm" className="w-20">
                Мини
              </CustomButton>
              <CustomButton variant="primary" size="md" className="w-full max-w-xs">
                Обычная ширина
              </CustomButton>
              <CustomButton size="lg" className="w-full">
                Максимальная ширина на всю доступную область
              </CustomButton>
            </div>
          </div>
        </section>

        {/* Проверка скосов с дебагом */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-800">Проверка точности скосов (с дебагом)</h2>
          <div className="bg-white p-6 rounded-lg border-2 border-dashed border-gray-300">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="space-y-2">
                <p className="text-sm text-gray-600">Высота 32px → скос 8px</p>
                <CustomButton debug size="sm" className="w-40">
                  Small Button
                </CustomButton>
              </div>
              <div className="space-y-2">
                <p className="text-sm text-gray-600">Высота 40px → скос 10px</p>
                <CustomButton debug variant="primary" size="md" className="w-40">
                  Medium Button
                </CustomButton>
              </div>
              <div className="space-y-2">
                <p className="text-sm text-gray-600">Высота 48px → скос 12px</p>
                <CustomButton debug size="lg" className="w-40">
                  Large Button
                </CustomButton>
              </div>
            </div>
            <p className="text-sm text-gray-600 mt-4">☝️ Наведите курсор на кнопки с дебагом для проверки размеров</p>
          </div>
        </section>
      </div>
    </div>
  )
}
