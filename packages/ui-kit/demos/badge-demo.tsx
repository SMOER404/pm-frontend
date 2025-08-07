"use client"

import CustomBadge from "../components/custom-badge"
import CustomCard from "../components/custom-card"
import { Bell, Mail, ShoppingCart } from "lucide-react"

export default function BadgeDemo() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-[#292D30] mb-4">Бейджи со скосами</h1>
          <p className="text-gray-600">Индикаторы и метки с уникальным дизайном</p>
        </div>

        {/* Основные варианты */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-[#292D30]">Основные варианты</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <CustomCard>
              <h3 className="text-lg font-semibold mb-4 text-[#292D30]">Primary</h3>
              <div className="space-y-2">
                <CustomBadge variant="primary">Новое</CustomBadge>
                <br />
                <CustomBadge variant="primary" size="sm">
                  Маленький
                </CustomBadge>
              </div>
            </CustomCard>

            <CustomCard>
              <h3 className="text-lg font-semibold mb-4 text-[#292D30]">Secondary</h3>
              <div className="space-y-2">
                <CustomBadge variant="secondary">Обычный</CustomBadge>
                <br />
                <CustomBadge variant="secondary" size="lg">
                  Большой
                </CustomBadge>
              </div>
            </CustomCard>

            <CustomCard>
              <h3 className="text-lg font-semibold mb-4 text-[#292D30]">Success</h3>
              <div className="space-y-2">
                <CustomBadge variant="success">Успех</CustomBadge>
                <br />
                <CustomBadge variant="success" dot>
                  Точка
                </CustomBadge>
              </div>
            </CustomCard>

            <CustomCard>
              <h3 className="text-lg font-semibold mb-4 text-[#292D30]">Error</h3>
              <div className="space-y-2">
                <CustomBadge variant="error">Ошибка</CustomBadge>
                <br />
                <CustomBadge variant="error" count={5} />
              </div>
            </CustomCard>
          </div>
        </section>

        {/* Примеры с иконками */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-[#292D30]">С иконками</h2>
          <div className="flex gap-8 justify-center">
            <CustomBadge count={3}>
              <Bell className="w-6 h-6 text-[#292D30]" />
            </CustomBadge>

            <CustomBadge count={12}>
              <Mail className="w-6 h-6 text-[#292D30]" />
            </CustomBadge>

            <CustomBadge count={99} max={99}>
              <ShoppingCart className="w-6 h-6 text-[#292D30]" />
            </CustomBadge>
          </div>
        </section>
      </div>
    </div>
  )
}
