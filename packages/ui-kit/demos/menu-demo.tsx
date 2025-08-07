"use client"

import CustomMenu from "../components/custom-menu"
import CustomButton from "../components/custom-button"
import { MoreVertical, User, Settings, LogOut, Edit, Trash2, Share } from "lucide-react"

export default function MenuDemo() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-[#292D30] mb-4">Меню со скосами</h1>
          <p className="text-gray-600">Выпадающие меню с уникальным дизайном</p>
        </div>

        {/* Основные варианты */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-[#292D30]">Основные варианты</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <h3 className="text-lg font-semibold mb-4 text-[#292D30]">Простое меню</h3>
              <CustomMenu
                trigger={<CustomButton variant="outlined">Открыть меню</CustomButton>}
                items={[
                  { label: "Профиль", icon: <User className="w-4 h-4" /> },
                  { label: "Настройки", icon: <Settings className="w-4 h-4" /> },
                  { type: "divider" },
                  { label: "Выйти", icon: <LogOut className="w-4 h-4" /> },
                ]}
              />
            </div>

            <div className="text-center">
              <h3 className="text-lg font-semibold mb-4 text-[#292D30]">Меню с действиями</h3>
              <CustomMenu
                trigger={
                  <CustomButton variant="ghost" icon={<MoreVertical className="w-4 h-4" />} iconOnly>
                    Действия
                  </CustomButton>
                }
                items={[
                  { label: "Редактировать", icon: <Edit className="w-4 h-4" /> },
                  { label: "Поделиться", icon: <Share className="w-4 h-4" /> },
                  { type: "divider" },
                  { label: "Удалить", icon: <Trash2 className="w-4 h-4" />, danger: true },
                ]}
              />
            </div>

            <div className="text-center">
              <h3 className="text-lg font-semibold mb-4 text-[#292D30]">Меню без иконок</h3>
              <CustomMenu
                trigger={<CustomButton variant="primary">Выбрать опцию</CustomButton>}
                items={[
                  { label: "Опция 1" },
                  { label: "Опция 2" },
                  { label: "Опция 3" },
                  { type: "divider" },
                  { label: "Другая опция" },
                ]}
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
