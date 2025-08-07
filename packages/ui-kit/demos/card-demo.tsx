"use client"

import CustomCard from "../components/custom-card"
import CustomButton from "../components/custom-button"
import { User, Heart, Share, Star } from "lucide-react"

export default function CardDemo() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-[#292D30] mb-4">Карточки со скосами</h1>
          <p className="text-gray-600">Универсальные контейнеры для контента</p>
        </div>

        {/* Основные варианты */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-[#292D30]">Основные варианты</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <CustomCard variant="outlined">
              <h3 className="text-lg font-semibold mb-2 text-[#292D30]">Outlined Card</h3>
              <p className="text-gray-600">Карточка с контуром. Подходит для основного контента.</p>
            </CustomCard>

            <CustomCard variant="filled">
              <h3 className="text-lg font-semibold mb-2 text-[#292D30]">Filled Card</h3>
              <p className="text-gray-600">Карточка с заливкой. Для второстепенного контента.</p>
            </CustomCard>

            <CustomCard variant="elevated">
              <h3 className="text-lg font-semibold mb-2 text-[#292D30]">Elevated Card</h3>
              <p className="text-gray-600">Карточка с тенью. Для важного контента.</p>
            </CustomCard>
          </div>
        </section>

        {/* Размеры */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-[#292D30]">Размеры скосов</h2>
          <div className="space-y-4">
            <CustomCard size="sm">
              <p className="text-[#292D30]">Small card - маленькие скосы (8px)</p>
            </CustomCard>
            <CustomCard size="md">
              <p className="text-[#292D30]">Medium card - средние скосы (12px)</p>
            </CustomCard>
            <CustomCard size="lg">
              <p className="text-[#292D30]">Large card - большие скосы (16px)</p>
            </CustomCard>
          </div>
        </section>

        {/* Примеры использования */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-[#292D30]">Примеры использования</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Product Card */}
            <CustomCard variant="elevated">
              <div className="space-y-4">
                <div className="w-full h-32 bg-gray-200 rounded flex items-center justify-center">
                  <span className="text-gray-500">Изображение товара</span>
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-[#292D30]">Название товара</h3>
                  <p className="text-gray-600 text-sm">Описание товара в несколько строк</p>
                  <p className="text-xl font-bold text-[#AFEB0F] mt-2">$99.99</p>
                </div>
                <div className="flex gap-2">
                  <CustomButton variant="primary" size="sm" className="flex-1">
                    Купить
                  </CustomButton>
                  <CustomButton variant="outlined" size="sm" icon={<Heart className="w-4 h-4" />} iconOnly>
                    Лайк
                  </CustomButton>
                </div>
              </div>
            </CustomCard>

            {/* Profile Card */}
            <CustomCard variant="outlined">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-[#AFEB0F] bg-opacity-20 rounded-full mx-auto flex items-center justify-center">
                  <User className="w-8 h-8 text-[#AFEB0F]" />
                </div>
                <div>
                  <h3 className="font-semibold text-[#292D30]">Иван Петров</h3>
                  <p className="text-gray-600 text-sm">Frontend Developer</p>
                </div>
                <div className="flex gap-2 justify-center">
                  <CustomButton variant="outlined" size="sm">
                    Профиль
                  </CustomButton>
                  <CustomButton variant="ghost" size="sm" icon={<Share className="w-4 h-4" />} iconOnly>
                    Поделиться
                  </CustomButton>
                </div>
              </div>
            </CustomCard>

            {/* Stats Card */}
            <CustomCard variant="filled">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-[#292D30]">Статистика</h3>
                  <Star className="w-5 h-5 text-[#AFEB0F]" />
                </div>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <p className="text-2xl font-bold text-[#AFEB0F]">1,234</p>
                    <p className="text-sm text-gray-600">Просмотры</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-[#292D30]">567</p>
                    <p className="text-sm text-gray-600">Лайки</p>
                  </div>
                </div>
              </div>
            </CustomCard>
          </div>
        </section>

        {/* Документация API */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-[#292D30]">Документация API</h2>
          <CustomCard>
            <h3 className="text-lg font-semibold mb-4 text-[#292D30]">CustomCard Props</h3>
            <div className="space-y-4 text-sm">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <code className="bg-gray-100 px-2 py-1 rounded text-[#292D30]">variant</code>
                  <span className="ml-2 text-gray-600">"outlined" | "filled" | "elevated"</span>
                  <p className="text-gray-500 mt-1">Стиль карточки. По умолчанию "outlined"</p>
                </div>
                <div>
                  <code className="bg-gray-100 px-2 py-1 rounded text-[#292D30]">size</code>
                  <span className="ml-2 text-gray-600">"sm" | "md" | "lg"</span>
                  <p className="text-gray-500 mt-1">Размер скосов. По умолчанию "md"</p>
                </div>
              </div>
            </div>
          </CustomCard>
        </section>
      </div>
    </div>
  )
}
