"use client"

import CustomButton from "../components/custom-button"
import { Download, Heart, Plus, Settings, Share, Star, Trash2, Edit, Save, Send } from "lucide-react"
import { useState } from "react"

export default function ButtonDemo() {
  const [liked, setLiked] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleAsyncAction = async () => {
    setLoading(true)
    await new Promise((resolve) => setTimeout(resolve, 2000))
    setLoading(false)
  }

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-[#292D30] mb-4">Кнопки со скосами</h1>
          <p className="text-gray-600">Полный набор кнопок в едином стиле с настраиваемыми скосами</p>
        </div>

        {/* Основные варианты */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-[#292D30]">Основные варианты</h2>
          <div className="flex flex-wrap gap-4">
            <CustomButton variant="primary">Primary</CustomButton>
            <CustomButton variant="secondary">Secondary</CustomButton>
            <CustomButton variant="outline">Outline</CustomButton>
            <CustomButton variant="ghost">Ghost</CustomButton>
            <CustomButton variant="link">Link</CustomButton>
          </div>
        </section>

        {/* Размеры */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-[#292D30]">Размеры</h2>
          <div className="flex flex-wrap items-center gap-4">
            <CustomButton size="sm">Small</CustomButton>
            <CustomButton size="md">Medium</CustomButton>
            <CustomButton size="lg">Large</CustomButton>
          </div>
        </section>

        {/* С иконками */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-[#292D30]">С иконками</h2>
          <div className="flex flex-wrap gap-4">
            <CustomButton leftIcon={<Download />}>Скачать</CustomButton>
            <CustomButton rightIcon={<Share />}>Поделиться</CustomButton>
            <CustomButton leftIcon={<Plus />} variant="outline">
              Добавить
            </CustomButton>
            <CustomButton leftIcon={<Settings />} variant="ghost">
              Настройки
            </CustomButton>
          </div>
        </section>

        {/* Состояния */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-[#292D30]">Состояния</h2>
          <div className="flex flex-wrap gap-4">
            <CustomButton>Обычная</CustomButton>
            <CustomButton disabled>Отключенная</CustomButton>
            <CustomButton loading={loading} onClick={handleAsyncAction}>
              {loading ? "Загрузка..." : "Загрузить"}
            </CustomButton>
            <CustomButton
              variant={liked ? "primary" : "outline"}
              leftIcon={<Heart className={liked ? "fill-current" : ""} />}
              onClick={() => setLiked(!liked)}
            >
              {liked ? "Нравится" : "Лайк"}
            </CustomButton>
          </div>
        </section>

        {/* Кастомные скосы */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-[#292D30]">Кастомные скосы</h2>
          <div className="flex flex-wrap gap-4">
            <CustomButton chamferSize={0}>Без скосов</CustomButton>
            <CustomButton chamferSize={4}>Маленькие скосы</CustomButton>
            <CustomButton chamferSize={8}>Средние скосы</CustomButton>
            <CustomButton chamferSize={16}>Большие скосы</CustomButton>
          </div>
        </section>

        {/* Цветовые схемы */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-[#292D30]">Цветовые схемы</h2>
          <div className="space-y-4">
            <div className="flex flex-wrap gap-4">
              <CustomButton>По умолчанию</CustomButton>
              <CustomButton className="bg-red-500 hover:bg-red-600 text-white">Красная</CustomButton>
              <CustomButton className="bg-green-500 hover:bg-green-600 text-white">Зеленая</CustomButton>
              <CustomButton className="bg-blue-500 hover:bg-blue-600 text-white">Синяя</CustomButton>
              <CustomButton className="bg-purple-500 hover:bg-purple-600 text-white">Фиолетовая</CustomButton>
            </div>
            <div className="flex flex-wrap gap-4">
              <CustomButton variant="outline" className="border-red-500 text-red-500 hover:bg-red-50">
                Красный контур
              </CustomButton>
              <CustomButton variant="outline" className="border-green-500 text-green-500 hover:bg-green-50">
                Зеленый контур
              </CustomButton>
              <CustomButton variant="outline" className="border-blue-500 text-blue-500 hover:bg-blue-50">
                Синий контур
              </CustomButton>
            </div>
          </div>
        </section>

        {/* Группы кнопок */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-[#292D30]">Группы кнопок</h2>
          <div className="space-y-4">
            <div className="flex">
              <CustomButton className="rounded-r-none border-r-0">Первая</CustomButton>
              <CustomButton variant="outline" className="rounded-none border-r-0">
                Вторая
              </CustomButton>
              <CustomButton variant="outline" className="rounded-l-none">
                Третья
              </CustomButton>
            </div>
            <div className="flex gap-2">
              <CustomButton leftIcon={<Edit />} size="sm">
                Редактировать
              </CustomButton>
              <CustomButton leftIcon={<Save />} size="sm" variant="outline">
                Сохранить
              </CustomButton>
              <CustomButton leftIcon={<Trash2 />} size="sm" variant="ghost" className="text-red-500 hover:bg-red-50">
                Удалить
              </CustomButton>
            </div>
          </div>
        </section>

        {/* Адаптивные кнопки */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-[#292D30]">Адаптивные кнопки</h2>
          <div className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <CustomButton className="w-full">Полная ширина</CustomButton>
              <CustomButton className="w-full" variant="outline">
                Полная ширина
              </CustomButton>
              <CustomButton className="w-full" variant="ghost">
                Полная ширина
              </CustomButton>
              <CustomButton className="w-full" variant="link">
                Полная ширина
              </CustomButton>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <CustomButton leftIcon={<Send />} className="flex-1">
                Отправить сообщение
              </CustomButton>
              <CustomButton variant="outline" className="flex-1">
                Отменить
              </CustomButton>
            </div>
          </div>
        </section>

        {/* Специальные кнопки */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-[#292D30]">Специальные кнопки</h2>
          <div className="space-y-4">
            <div className="flex flex-wrap gap-4">
              <CustomButton
                leftIcon={<Star />}
                className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-white"
              >
                Премиум
              </CustomButton>
              <CustomButton className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white">
                Градиент
              </CustomButton>
              <CustomButton className="bg-black text-white hover:bg-gray-800 shadow-lg">Темная</CustomButton>
            </div>

            {/* Кнопки-иконки */}
            <div className="flex gap-4">
              <CustomButton className="w-10 h-10 p-0" aria-label="Настройки">
                <Settings className="w-4 h-4" />
              </CustomButton>
              <CustomButton variant="outline" className="w-10 h-10 p-0" aria-label="Поделиться">
                <Share className="w-4 h-4" />
              </CustomButton>
              <CustomButton variant="ghost" className="w-10 h-10 p-0" aria-label="Удалить">
                <Trash2 className="w-4 h-4" />
              </CustomButton>
            </div>
          </div>
        </section>

        {/* На темном фоне */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-[#292D30]">На темном фоне</h2>
          <div className="bg-[#292D30] p-6 rounded-lg space-y-4">
            <div className="flex flex-wrap gap-4">
              <CustomButton>Обычная</CustomButton>
              <CustomButton variant="outline" className="border-white text-white hover:bg-white hover:text-[#292D30]">
                Белый контур
              </CustomButton>
              <CustomButton variant="ghost" className="text-white hover:bg-white/10">
                Призрачная
              </CustomButton>
              <CustomButton className="bg-[#AFEB0F] text-[#292D30] hover:bg-[#9DD60E]">Брендовая</CustomButton>
            </div>
          </div>
        </section>

        {/* Документация API */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-[#292D30]">Документация API</h2>
          <div className="bg-white p-6 rounded-lg border">
            <h3 className="text-lg font-semibold mb-4 text-[#292D30]">CustomButton Props</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3 text-sm">
                <div>
                  <code className="bg-gray-100 px-2 py-1 rounded text-[#292D30]">variant</code>
                  <span className="ml-2 text-gray-600">"primary" | "secondary" | "outline" | "ghost" | "link"</span>
                  <p className="text-gray-500 mt-1">Стиль кнопки. По умолчанию "primary"</p>
                </div>
                <div>
                  <code className="bg-gray-100 px-2 py-1 rounded text-[#292D30]">size</code>
                  <span className="ml-2 text-gray-600">"sm" | "md" | "lg"</span>
                  <p className="text-gray-500 mt-1">Размер кнопки. По умолчанию "md"</p>
                </div>
                <div>
                  <code className="bg-gray-100 px-2 py-1 rounded text-[#292D30]">leftIcon</code>
                  <span className="ml-2 text-gray-600">React.ReactNode</span>
                  <p className="text-gray-500 mt-1">Иконка слева от текста</p>
                </div>
                <div>
                  <code className="bg-gray-100 px-2 py-1 rounded text-[#292D30]">rightIcon</code>
                  <span className="ml-2 text-gray-600">React.ReactNode</span>
                  <p className="text-gray-500 mt-1">Иконка справа от текста</p>
                </div>
              </div>
              <div className="space-y-3 text-sm">
                <div>
                  <code className="bg-gray-100 px-2 py-1 rounded text-[#292D30]">loading</code>
                  <span className="ml-2 text-gray-600">boolean</span>
                  <p className="text-gray-500 mt-1">Состояние загрузки</p>
                </div>
                <div>
                  <code className="bg-gray-100 px-2 py-1 rounded text-[#292D30]">disabled</code>
                  <span className="ml-2 text-gray-600">boolean</span>
                  <p className="text-gray-500 mt-1">Отключенное состояние</p>
                </div>
                <div>
                  <code className="bg-gray-100 px-2 py-1 rounded text-[#292D30]">chamferSize</code>
                  <span className="ml-2 text-gray-600">number</span>
                  <p className="text-gray-500 mt-1">Размер скоса в пикселях. По умолчанию 8</p>
                </div>
                <div>
                  <code className="bg-gray-100 px-2 py-1 rounded text-[#292D30]">fullWidth</code>
                  <span className="ml-2 text-gray-600">boolean</span>
                  <p className="text-gray-500 mt-1">Кнопка на всю ширину контейнера</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
