"use client"

import { useState } from "react"
import CustomDrawer from "../components/custom-drawer"
import CustomButton from "../components/custom-button"
import { X, User, Settings, Bell } from "lucide-react"

export default function DrawerDemo() {
  const [leftOpen, setLeftOpen] = useState(false)
  const [rightOpen, setRightOpen] = useState(false)
  const [topOpen, setTopOpen] = useState(false)
  const [bottomOpen, setBottomOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-[#292D30] mb-4">Drawer со скосами</h1>
          <p className="text-gray-600">Боковые панели с уникальным дизайном</p>
        </div>

        {/* Основные варианты */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-[#292D30]">Направления</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <CustomButton variant="outlined" onClick={() => setLeftOpen(true)}>
              Слева
            </CustomButton>
            <CustomButton variant="outlined" onClick={() => setRightOpen(true)}>
              Справа
            </CustomButton>
            <CustomButton variant="outlined" onClick={() => setTopOpen(true)}>
              Сверху
            </CustomButton>
            <CustomButton variant="outlined" onClick={() => setBottomOpen(true)}>
              Снизу
            </CustomButton>
          </div>
        </section>

        {/* Drawers */}
        <CustomDrawer open={leftOpen} onClose={() => setLeftOpen(false)} anchor="left">
          <div className="p-6 space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-[#292D30]">Меню</h3>
              <CustomButton
                variant="ghost"
                size="sm"
                icon={<X className="w-4 h-4" />}
                iconOnly
                onClick={() => setLeftOpen(false)}
              >
                Закрыть
              </CustomButton>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-3 p-2 hover:bg-gray-100 rounded">
                <User className="w-5 h-5" />
                <span>Профиль</span>
              </div>
              <div className="flex items-center gap-3 p-2 hover:bg-gray-100 rounded">
                <Settings className="w-5 h-5" />
                <span>Настройки</span>
              </div>
              <div className="flex items-center gap-3 p-2 hover:bg-gray-100 rounded">
                <Bell className="w-5 h-5" />
                <span>Уведомления</span>
              </div>
            </div>
          </div>
        </CustomDrawer>

        <CustomDrawer open={rightOpen} onClose={() => setRightOpen(false)} anchor="right">
          <div className="p-6">
            <h3 className="text-lg font-semibold text-[#292D30] mb-4">Правая панель</h3>
            <p className="text-gray-600">Содержимое правой панели</p>
          </div>
        </CustomDrawer>

        <CustomDrawer open={topOpen} onClose={() => setTopOpen(false)} anchor="top">
          <div className="p-6">
            <h3 className="text-lg font-semibold text-[#292D30] mb-4">Верхняя панель</h3>
            <p className="text-gray-600">Содержимое верхней панели</p>
          </div>
        </CustomDrawer>

        <CustomDrawer open={bottomOpen} onClose={() => setBottomOpen(false)} anchor="bottom">
          <div className="p-6">
            <h3 className="text-lg font-semibold text-[#292D30] mb-4">Нижняя панель</h3>
            <p className="text-gray-600">Содержимое нижней панели</p>
          </div>
        </CustomDrawer>
      </div>
    </div>
  )
}
