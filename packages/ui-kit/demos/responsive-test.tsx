"use client"

import CustomButton from "../components/custom-button"
import CustomCard from "../components/custom-card"
import CustomInput from "../components/custom-input"
import { Smartphone, Tablet, Monitor } from "lucide-react"

export default function ResponsiveTest() {
  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="text-center">
          <h1 className="text-2xl md:text-3xl font-bold text-[#292D30] mb-4">Адаптивность компонентов</h1>
          <p className="text-gray-600">Тестирование на разных размерах экрана</p>
        </div>

        {/* Индикаторы размеров экрана */}
        <section className="space-y-4">
          <h2 className="text-xl md:text-2xl font-semibold text-[#292D30]">Текущий размер экрана</h2>
          <div className="flex gap-4 justify-center">
            <div className="flex items-center gap-2 md:hidden">
              <Smartphone className="w-5 h-5 text-[#AFEB0F]" />
              <span className="text-[#AFEB0F] font-medium">Mobile</span>
            </div>
            <div className="hidden md:flex lg:hidden items-center gap-2">
              <Tablet className="w-5 h-5 text-[#AFEB0F]" />
              <span className="text-[#AFEB0F] font-medium">Tablet</span>
            </div>
            <div className="hidden lg:flex items-center gap-2">
              <Monitor className="w-5 h-5 text-[#AFEB0F]" />
              <span className="text-[#AFEB0F] font-medium">Desktop</span>
            </div>
          </div>
        </section>

        {/* Адаптивная сетка кнопок */}
        <section className="space-y-6">
          <h2 className="text-xl md:text-2xl font-semibold text-[#292D30]">Адаптивная сетка кнопок</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <CustomButton variant="primary" className="w-full">
              Кнопка 1
            </CustomButton>
            <CustomButton variant="outlined" className="w-full">
              Кнопка 2
            </CustomButton>
            <CustomButton variant="ghost" className="w-full">
              Кнопка 3
            </CustomButton>
            <CustomButton variant="primary" className="w-full">
              Кнопка 4
            </CustomButton>
          </div>
        </section>

        {/* Адаптивные карточки */}
        <section className="space-y-6">
          <h2 className="text-xl md:text-2xl font-semibold text-[#292D30]">Адаптивные карточки</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            <CustomCard size="sm" className="md:size-md lg:size-lg">
              <h3 className="text-lg font-semibold mb-2 text-[#292D30]">Карточка 1</h3>
              <p className="text-gray-600 text-sm md:text-base">
                Размер скосов адаптируется: sm на мобильных, md на планшетах, lg на десктопе.
              </p>
            </CustomCard>

            <CustomCard size="sm" className="md:size-md lg:size-lg">
              <h3 className="text-lg font-semibold mb-2 text-[#292D30]">Карточка 2</h3>
              <p className="text-gray-600 text-sm md:text-base">Контент также адаптируется под размер экрана.</p>
            </CustomCard>

            <CustomCard size="sm" className="md:size-md lg:size-lg md:col-span-2 lg:col-span-1">
              <h3 className="text-lg font-semibold mb-2 text-[#292D30]">Карточка 3</h3>
              <p className="text-gray-600 text-sm md:text-base">На планшете занимает 2 колонки, на десктопе - 1.</p>
            </CustomCard>
          </div>
        </section>

        {/* Адаптивная форма */}
        <section className="space-y-6">
          <h2 className="text-xl md:text-2xl font-semibold text-[#292D30]">Адаптивная форма</h2>
          <CustomCard>
            <h3 className="text-lg font-semibold mb-6 text-[#292D30]">Контактная форма</h3>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <CustomInput size="sm" className="md:size-md" label="Имя" placeholder="Введите имя" />
                <CustomInput size="sm" className="md:size-md" label="Email" type="email" placeholder="Введите email" />
              </div>
              <CustomInput size="sm" className="md:size-md" label="Тема" placeholder="Тема сообщения" />
              <textarea
                className="w-full p-3 border border-gray-300 rounded text-sm md:text-base resize-none"
                rows={4}
                placeholder="Ваше сообщение..."
              />
              <div className="flex flex-col sm:flex-row gap-4">
                <CustomButton variant="primary" size="sm" className="md:size-md flex-1 sm:flex-none">
                  Отправить
                </CustomButton>
                <CustomButton variant="outlined" size="sm" className="md:size-md flex-1 sm:flex-none">
                  Очистить
                </CustomButton>
              </div>
            </form>
          </CustomCard>
        </section>

        {/* Адаптивная типографика */}
        <section className="space-y-6">
          <h2 className="text-xl md:text-2xl font-semibold text-[#292D30]">Адаптивная типографика</h2>
          <CustomCard>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#292D30] mb-4">Адаптивный заголовок</h1>
            <p className="text-sm md:text-base lg:text-lg text-gray-600 mb-4">
              Этот текст изменяет размер в зависимости от размера экрана. На мобильных устройствах он меньше, на
              планшетах - средний, на десктопе - большой.
            </p>
            <div className="text-xs md:text-sm text-gray-500">Мелкий текст также адаптируется</div>
          </CustomCard>
        </section>

        {/* Адаптивные отступы и размеры */}
        <section className="space-y-6">
          <h2 className="text-xl md:text-2xl font-semibold text-[#292D30]">Адаптивные отступы</h2>
          <div className="space-y-4">
            <CustomCard className="p-4 md:p-6 lg:p-8">
              <h3 className="text-lg font-semibold mb-2 text-[#292D30]">Адаптивные внутренние отступы</h3>
              <p className="text-gray-600">Отступы: 16px на мобильных, 24px на планшетах, 32px на десктопе</p>
            </CustomCard>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-8">
              <CustomCard>
                <h3 className="text-lg font-semibold mb-2 text-[#292D30]">Адаптивные промежутки</h3>
                <p className="text-gray-600">Промежутки между элементами тоже адаптируются</p>
              </CustomCard>

              <CustomCard>
                <h3 className="text-lg font-semibold mb-2 text-[#292D30]">В сетке</h3>
                <p className="text-gray-600">16px на мобильных, 24px на планшетах, 32px на десктопе</p>
              </CustomCard>
            </div>
          </div>
        </section>

        {/* Тест скрытия элементов */}
        <section className="space-y-6">
          <h2 className="text-xl md:text-2xl font-semibold text-[#292D30]">Адаптивное скрытие</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <CustomCard className="md:hidden">
              <h3 className="text-lg font-semibold mb-2 text-[#292D30]">Только на мобильных</h3>
              <p className="text-gray-600">Эта карточка видна только на мобильных устройствах</p>
            </CustomCard>

            <CustomCard className="hidden md:block lg:hidden">
              <h3 className="text-lg font-semibold mb-2 text-[#292D30]">Только на планшетах</h3>
              <p className="text-gray-600">Эта карточка видна только на планшетах</p>
            </CustomCard>

            <CustomCard className="hidden lg:block">
              <h3 className="text-lg font-semibold mb-2 text-[#292D30]">Только на десктопе</h3>
              <p className="text-gray-600">Эта карточка видна только на десктопных устройствах</p>
            </CustomCard>

            <CustomCard className="md:col-span-3">
              <h3 className="text-lg font-semibold mb-2 text-[#292D30]">Всегда видимая</h3>
              <p className="text-gray-600">
                Эта карточка видна на всех устройствах и занимает всю ширину на планшетах и десктопе.
              </p>
            </CustomCard>
          </div>
        </section>

        {/* Инструкции по тестированию */}
        <section className="space-y-6">
          <h2 className="text-xl md:text-2xl font-semibold text-[#292D30]">Как тестировать</h2>
          <CustomCard>
            <h3 className="text-lg font-semibold mb-4 text-[#292D30]">Инструкции</h3>
            <div className="space-y-3 text-gray-600">
              <p>1. Измените размер окна браузера или используйте инструменты разработчика</p>
              <p>2. Обратите внимание на изменения в:</p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>Размерах скосов компонентов</li>
                <li>Количестве колонок в сетке</li>
                <li>Размерах шрифтов</li>
                <li>Отступах между элементами</li>
                <li>Видимости определенных элементов</li>
              </ul>
              <p>3. Брейкпоинты:</p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>Mobile: до 768px</li>
                <li>Tablet: 768px - 1024px</li>
                <li>Desktop: от 1024px</li>
              </ul>
            </div>
          </CustomCard>
        </section>
      </div>
    </div>
  )
}
