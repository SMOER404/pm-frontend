"use client"

import CustomBox from "../components/custom-box"
import CustomContainer from "../components/custom-container"
import CustomGrid from "../components/custom-grid"
import CustomModal from "../components/custom-modal"
import CustomButton from "../components/custom-button"
import { useState } from "react"

export default function LayoutDemo() {
  const [modalOpen, setModalOpen] = useState(false)
  const [modalSize, setModalSize] = useState<"sm" | "md" | "lg" | "xl" | "full">("md")

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-[#292D30] mb-4">Компоненты позиционирования</h1>
          <p className="text-gray-600">Box, Container, Grid и Modal для создания макетов</p>
        </div>

        {/* Container */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-[#292D30]">Container</h2>
          <div className="space-y-4">
            <CustomContainer maxWidth="sm" className="bg-blue-100 p-4 rounded">
              <p className="text-center">Container maxWidth="sm"</p>
            </CustomContainer>
            <CustomContainer maxWidth="md" className="bg-green-100 p-4 rounded">
              <p className="text-center">Container maxWidth="md"</p>
            </CustomContainer>
            <CustomContainer maxWidth="lg" className="bg-yellow-100 p-4 rounded">
              <p className="text-center">Container maxWidth="lg"</p>
            </CustomContainer>
            <CustomContainer maxWidth="xl" className="bg-purple-100 p-4 rounded">
              <p className="text-center">Container maxWidth="xl"</p>
            </CustomContainer>
          </div>
        </section>

        {/* Box */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-[#292D30]">Box</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium mb-4">Позиционирование</h3>
              <CustomBox position="relative" height={200} className="bg-gray-200 rounded">
                <CustomBox
                  position="absolute"
                  top={10}
                  left={10}
                  padding={16}
                  backgroundColor="#AFEB0F"
                  borderRadius={8}
                >
                  Абсолютное позиционирование
                </CustomBox>
                <CustomBox
                  position="absolute"
                  bottom={10}
                  right={10}
                  padding={16}
                  backgroundColor="#292D30"
                  color="white"
                  borderRadius={8}
                >
                  Правый нижний угол
                </CustomBox>
              </CustomBox>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-4">Flexbox</h3>
              <CustomBox
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                padding={16}
                backgroundColor="white"
                border="1px solid #e5e7eb"
                borderRadius={8}
              >
                <CustomBox padding={8} backgroundColor="#f3f4f6" borderRadius={4}>
                  Элемент 1
                </CustomBox>
                <CustomBox padding={8} backgroundColor="#f3f4f6" borderRadius={4}>
                  Элемент 2
                </CustomBox>
                <CustomBox padding={8} backgroundColor="#f3f4f6" borderRadius={4}>
                  Элемент 3
                </CustomBox>
              </CustomBox>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-4">Размеры и отступы</h3>
              <CustomBox
                width={300}
                height={150}
                margin={16}
                padding={24}
                backgroundColor="#fef3c7"
                border="2px solid #f59e0b"
                borderRadius={12}
                textAlign="center"
              >
                <p>Фиксированные размеры</p>
                <p>300x150px с отступами</p>
              </CustomBox>
            </div>
          </div>
        </section>

        {/* Grid */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-[#292D30]">Grid</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium mb-4">Базовая сетка</h3>
              <CustomGrid container spacing={4}>
                <CustomGrid item xs={12} md={6} lg={4}>
                  <div className="bg-blue-100 p-4 rounded text-center">xs=12 md=6 lg=4</div>
                </CustomGrid>
                <CustomGrid item xs={12} md={6} lg={4}>
                  <div className="bg-green-100 p-4 rounded text-center">xs=12 md=6 lg=4</div>
                </CustomGrid>
                <CustomGrid item xs={12} md={12} lg={4}>
                  <div className="bg-yellow-100 p-4 rounded text-center">xs=12 md=12 lg=4</div>
                </CustomGrid>
              </CustomGrid>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-4">Выравнивание</h3>
              <CustomGrid
                container
                spacing={2}
                justifyContent="center"
                alignItems="center"
                className="min-h-[200px] bg-gray-100 rounded"
              >
                <CustomGrid item xs="auto">
                  <div className="bg-red-200 p-4 rounded">Центрированный</div>
                </CustomGrid>
                <CustomGrid item xs="auto">
                  <div className="bg-blue-200 p-4 rounded">Контент</div>
                </CustomGrid>
              </CustomGrid>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-4">Направление</h3>
              <CustomGrid container spacing={2} direction="column" className="max-w-xs">
                <CustomGrid item>
                  <div className="bg-purple-100 p-4 rounded text-center">Первый</div>
                </CustomGrid>
                <CustomGrid item>
                  <div className="bg-pink-100 p-4 rounded text-center">Второй</div>
                </CustomGrid>
                <CustomGrid item>
                  <div className="bg-indigo-100 p-4 rounded text-center">Третий</div>
                </CustomGrid>
              </CustomGrid>
            </div>
          </div>
        </section>

        {/* Modal */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-[#292D30]">Modal</h2>
          <div className="space-y-4">
            <div className="flex flex-wrap gap-4">
              <CustomButton
                onClick={() => {
                  setModalSize("sm")
                  setModalOpen(true)
                }}
              >
                Маленькое модальное окно
              </CustomButton>
              <CustomButton
                onClick={() => {
                  setModalSize("md")
                  setModalOpen(true)
                }}
              >
                Среднее модальное окно
              </CustomButton>
              <CustomButton
                onClick={() => {
                  setModalSize("lg")
                  setModalOpen(true)
                }}
              >
                Большое модальное окно
              </CustomButton>
              <CustomButton
                onClick={() => {
                  setModalSize("xl")
                  setModalOpen(true)
                }}
              >
                Очень большое модальное окно
              </CustomButton>
            </div>

            <CustomModal
              open={modalOpen}
              onClose={() => setModalOpen(false)}
              size={modalSize}
              className="clip-path-[polygon(0_1px,calc(100%-1px)_0,100%_calc(100%-1px),1px_100%,0_calc(100%-1px))]"
            >
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-4">Модальное окно ({modalSize})</h3>
                <p className="text-gray-600 mb-6">
                  Это пример модального окна размера "{modalSize}". Модальное окно можно закрыть нажав на крестик,
                  клавишу Escape или кликнув вне области модального окна.
                </p>
                <div className="flex gap-4">
                  <CustomButton onClick={() => setModalOpen(false)}>Закрыть</CustomButton>
                  <CustomButton variant="outline" onClick={() => setModalOpen(false)}>
                    Отмена
                  </CustomButton>
                </div>
              </div>
            </CustomModal>
          </div>
        </section>

        {/* Комбинированный пример */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-[#292D30]">Комбинированный пример</h2>
          <CustomContainer maxWidth="lg">
            <CustomBox
              padding={24}
              backgroundColor="white"
              borderRadius={12}
              boxShadow="0 4px 6px -1px rgb(0 0 0 / 0.1)"
              className="clip-path-[polygon(0_1px,calc(100%-1px)_0,100%_calc(100%-1px),1px_100%,0_calc(100%-1px))]"
            >
              <CustomBox marginBottom={24}>
                <h3 className="text-xl font-semibold text-[#292D30]">Карточка продукта</h3>
                <p className="text-gray-600">Пример использования всех компонентов вместе</p>
              </CustomBox>

              <CustomGrid container spacing={6}>
                <CustomGrid item xs={12} md={4}>
                  <CustomBox
                    height={200}
                    backgroundColor="#f3f4f6"
                    borderRadius={8}
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    className="clip-path-[polygon(0_1px,calc(100%-1px)_0,100%_calc(100%-1px),1px_100%,0_calc(100%-1px))]"
                  >
                    <span className="text-gray-500">Изображение товара</span>
                  </CustomBox>
                </CustomGrid>

                <CustomGrid item xs={12} md={8}>
                  <CustomBox height="100%" display="flex" flexDirection="column" justifyContent="space-between">
                    <div>
                      <h4 className="text-lg font-medium mb-2">Название товара</h4>
                      <p className="text-gray-600 mb-4">
                        Описание товара с подробной информацией о его характеристиках и преимуществах.
                      </p>
                      <CustomBox display="flex" alignItems="center" marginBottom={16}>
                        <span className="text-2xl font-bold text-[#AFEB0F] mr-2">₽2,999</span>
                        <span className="text-gray-500 line-through">₽3,999</span>
                      </CustomBox>
                    </div>

                    <CustomBox display="flex" gap={12}>
                      <CustomButton className="flex-1">В корзину</CustomButton>
                      <CustomButton variant="outline">В избранное</CustomButton>
                    </CustomBox>
                  </CustomBox>
                </CustomGrid>
              </CustomGrid>
            </CustomBox>
          </CustomContainer>
        </section>

        {/* Документация API */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-[#292D30]">Документация API</h2>
          <CustomGrid container spacing={6}>
            <CustomGrid item xs={12} md={6}>
              <div className="bg-white p-6 rounded-lg border h-full">
                <h3 className="text-lg font-semibold mb-4">CustomBox Props</h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <code className="bg-gray-100 px-2 py-1 rounded">display</code>
                    <p className="text-gray-500 mt-1">CSS display свойство</p>
                  </div>
                  <div>
                    <code className="bg-gray-100 px-2 py-1 rounded">position</code>
                    <p className="text-gray-500 mt-1">CSS position свойство</p>
                  </div>
                  <div>
                    <code className="bg-gray-100 px-2 py-1 rounded">width, height</code>
                    <p className="text-gray-500 mt-1">Размеры в px или строке</p>
                  </div>
                </div>
              </div>
            </CustomGrid>

            <CustomGrid item xs={12} md={6}>
              <div className="bg-white p-6 rounded-lg border h-full">
                <h3 className="text-lg font-semibold mb-4">CustomGrid Props</h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <code className="bg-gray-100 px-2 py-1 rounded">container</code>
                    <p className="text-gray-500 mt-1">Контейнер сетки</p>
                  </div>
                  <div>
                    <code className="bg-gray-100 px-2 py-1 rounded">item</code>
                    <p className="text-gray-500 mt-1">Элемент сетки</p>
                  </div>
                  <div>
                    <code className="bg-gray-100 px-2 py-1 rounded">xs, sm, md, lg, xl</code>
                    <p className="text-gray-500 mt-1">Размеры для брейкпоинтов</p>
                  </div>
                </div>
              </div>
            </CustomGrid>
          </CustomGrid>
        </section>
      </div>
    </div>
  )
}
