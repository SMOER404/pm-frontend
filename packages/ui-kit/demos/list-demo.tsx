"use client"

import CustomList from "../components/custom-list"
import CustomCard from "../components/custom-card"
import { User, Mail, Phone, MapPin, Star, Heart } from "lucide-react"

export default function ListDemo() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-[#292D30] mb-4">Списки со скосами</h1>
          <p className="text-gray-600">Структурированные списки с уникальным дизайном</p>
        </div>

        {/* Основные варианты */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-[#292D30]">Основные варианты</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <CustomCard>
              <h3 className="text-lg font-semibold mb-4 text-[#292D30]">Простой список</h3>
              <CustomList
                items={[{ primary: "Первый элемент" }, { primary: "Второй элемент" }, { primary: "Третий элемент" }]}
              />
            </CustomCard>

            <CustomCard>
              <h3 className="text-lg font-semibold mb-4 text-[#292D30]">Список с иконками</h3>
              <CustomList
                items={[
                  { primary: "Профиль", icon: <User className="w-5 h-5" /> },
                  { primary: "Почта", icon: <Mail className="w-5 h-5" /> },
                  { primary: "Телефон", icon: <Phone className="w-5 h-5" /> },
                ]}
              />
            </CustomCard>
          </div>
        </section>

        {/* Сложные списки */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-[#292D30]">Сложные списки</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <CustomCard>
              <h3 className="text-lg font-semibold mb-4 text-[#292D30]">Список контактов</h3>
              <CustomList
                items={[
                  {
                    primary: "Иван Петров",
                    secondary: "Frontend Developer",
                    icon: <User className="w-5 h-5" />,
                    action: <Heart className="w-4 h-4 text-gray-400" />,
                  },
                  {
                    primary: "Мария Сидорова",
                    secondary: "UI/UX Designer",
                    icon: <User className="w-5 h-5" />,
                    action: <Heart className="w-4 h-4 text-red-500" />,
                  },
                  {
                    primary: "Алексей Иванов",
                    secondary: "Backend Developer",
                    icon: <User className="w-5 h-5" />,
                    action: <Heart className="w-4 h-4 text-gray-400" />,
                  },
                ]}
              />
            </CustomCard>

            <CustomCard>
              <h3 className="text-lg font-semibold mb-4 text-[#292D30]">Список с рейтингом</h3>
              <CustomList
                items={[
                  {
                    primary: "Ресторан 'Вкусно'",
                    secondary: "Итальянская кухня",
                    icon: <MapPin className="w-5 h-5" />,
                    action: (
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-yellow-500" />
                        <span className="text-sm">4.8</span>
                      </div>
                    ),
                  },
                  {
                    primary: "Кафе 'Уют'",
                    secondary: "Домашняя кухня",
                    icon: <MapPin className="w-5 h-5" />,
                    action: (
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-yellow-500" />
                        <span className="text-sm">4.5</span>
                      </div>
                    ),
                  },
                ]}
              />
            </CustomCard>
          </div>
        </section>
      </div>
    </div>
  )
}
