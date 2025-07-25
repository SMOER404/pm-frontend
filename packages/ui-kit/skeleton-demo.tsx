"use client"

import CustomSkeleton from "./custom-skeleton"
import CustomCard from "./custom-card"
import CustomButton from "./custom-button"
import { useState } from "react"

export default function SkeletonDemo() {
  const [loading, setLoading] = useState(true)

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-[#292D30] mb-4">Скелетон загрузки</h1>
          <p className="text-gray-600">Индикаторы загрузки со скосами</p>
        </div>

        {/* Контрол загрузки */}
        <div className="text-center">
          <CustomButton variant="primary" onClick={() => setLoading(!loading)}>
            {loading ? "Показать контент" : "Показать загрузку"}
          </CustomButton>
        </div>

        {/* Основные варианты */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-[#292D30]">Основные варианты</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="space-y-2">
              <h3 className="text-lg font-medium text-[#292D30]">Text</h3>
              <CustomSkeleton variant="text" size="sm" />
              <CustomSkeleton variant="text" size="md" />
              <CustomSkeleton variant="text" size="lg" />
            </div>

            <div className="space-y-2">
              <h3 className="text-lg font-medium text-[#292D30]">Rectangular</h3>
              <CustomSkeleton variant="rectangular" size="sm" />
              <CustomSkeleton variant="rectangular" size="md" />
              <CustomSkeleton variant="rectangular" size="lg" />
            </div>

            <div className="space-y-2">
              <h3 className="text-lg font-medium text-[#292D30]">Circular</h3>
              <CustomSkeleton variant="circular" size="sm" />
              <CustomSkeleton variant="circular" size="md" />
              <CustomSkeleton variant="circular" size="lg" />
            </div>

            <div className="space-y-2">
              <h3 className="text-lg font-medium text-[#292D30]">Rounded</h3>
              <CustomSkeleton variant="rounded" size="sm" />
              <CustomSkeleton variant="rounded" size="md" />
              <CustomSkeleton variant="rounded" size="lg" />
            </div>
          </div>
        </section>

        {/* Многострочный текст */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-[#292D30]">Многострочный текст</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <h3 className="text-lg font-medium text-[#292D30]">2 строки</h3>
              <CustomSkeleton variant="text" lines={2} />
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-medium text-[#292D30]">3 строки</h3>
              <CustomSkeleton variant="text" lines={3} />
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-medium text-[#292D30]">5 строк</h3>
              <CustomSkeleton variant="text" lines={5} />
            </div>
          </div>
        </section>

        {/* Кастомные размеры */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-[#292D30]">Кастомные размеры</h2>
          <div className="space-y-4">
            <CustomSkeleton variant="rectangular" width="100%" height="200px" />
            <CustomSkeleton variant="rectangular" width="300px" height="100px" />
            <CustomSkeleton variant="circular" width="80px" height="80px" />
          </div>
        </section>

        {/* Примеры использования */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-[#292D30]">Примеры использования</h2>

          {/* Карточка профиля */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-[#292D30]">Карточка профиля</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <CustomCard>
                {loading ? (
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <CustomSkeleton variant="circular" size="lg" />
                      <div className="flex-1 space-y-2">
                        <CustomSkeleton variant="text" width="60%" />
                        <CustomSkeleton variant="text" width="40%" />
                      </div>
                    </div>
                    <CustomSkeleton variant="text" lines={3} />
                    <div className="flex gap-2">
                      <CustomSkeleton variant="rectangular" width="100px" height="32px" />
                      <CustomSkeleton variant="rectangular" width="80px" height="32px" />
                    </div>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 bg-[#AFEB0F] bg-opacity-20 rounded-full flex items-center justify-center">
                        <span className="text-[#AFEB0F] font-bold text-xl">ИП</span>
                      </div>
                      <div>
                        <h3 className="font-semibold text-[#292D30]">Иван Петров</h3>
                        <p className="text-gray-600 text-sm">Frontend Developer</p>
                      </div>
                    </div>
                    <p className="text-gray-600">
                      Опытный разработчик с 5+ годами опыта в создании современных веб-приложений. Специализируется на
                      React, TypeScript и современных фронтенд технологиях.
                    </p>
                    <div className="flex gap-2">
                      <CustomButton variant="primary" size="sm">
                        Связаться
                      </CustomButton>
                      <CustomButton variant="outlined" size="sm">
                        Портфолио
                      </CustomButton>
                    </div>
                  </div>
                )}
              </CustomCard>

              <CustomCard>
                {loading ? (
                  <div className="space-y-4">
                    <CustomSkeleton variant="text" width="50%" />
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center space-y-2">
                        <CustomSkeleton variant="text" width="60%" />
                        <CustomSkeleton variant="text" width="40%" />
                      </div>
                      <div className="text-center space-y-2">
                        <CustomSkeleton variant="text" width="60%" />
                        <CustomSkeleton variant="text" width="40%" />
                      </div>
                    </div>
                    <CustomSkeleton variant="rectangular" height="120px" />
                  </div>
                ) : (
                  <div className="space-y-4">
                    <h3 className="font-semibold text-[#292D30]">Статистика</h3>
                    <div className="grid grid-cols-2 gap-4 text-center">
                      <div>
                        <p className="text-2xl font-bold text-[#AFEB0F]">1,234</p>
                        <p className="text-sm text-gray-600">Проекты</p>
                      </div>
                      <div>
                        <p className="text-2xl font-bold text-[#292D30]">567</p>
                        <p className="text-sm text-gray-600">Клиенты</p>
                      </div>
                    </div>
                    <div className="w-full h-32 bg-gradient-to-r from-[#AFEB0F] to-[#292D30] rounded flex items-center justify-center">
                      <span className="text-white font-semibold">График активности</span>
                    </div>
                  </div>
                )}
              </CustomCard>
            </div>
          </div>

          {/* Список товаров */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-[#292D30]">Список товаров</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[1, 2, 3].map((item) => (
                <CustomCard key={item}>
                  {loading ? (
                    <div className="space-y-4">
                      <CustomSkeleton variant="rectangular" height="160px" />
                      <div className="space-y-2">
                        <CustomSkeleton variant="text" width="80%" />
                        <CustomSkeleton variant="text" width="60%" />
                        <CustomSkeleton variant="text" width="40%" />
                      </div>
                      <div className="flex gap-2">
                        <CustomSkeleton variant="rectangular" width="100px" height="32px" />
                        <CustomSkeleton variant="rectangular" width="40px" height="32px" />
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      <div className="w-full h-40 bg-gray-200 rounded flex items-center justify-center">
                        <span className="text-gray-500">Товар #{item}</span>
                      </div>
                      <div>
                        <h3 className="font-semibold text-[#292D30]">Название товара {item}</h3>
                        <p className="text-gray-600 text-sm">Описание товара в несколько строк</p>
                        <p className="text-xl font-bold text-[#AFEB0F] mt-2">${(item * 29.99).toFixed(2)}</p>
                      </div>
                      <div className="flex gap-2">
                        <CustomButton variant="primary" size="sm" className="flex-1">
                          Купить
                        </CustomButton>
                        <CustomButton variant="outlined" size="sm" iconOnly>
                          ♡
                        </CustomButton>
                      </div>
                    </div>
                  )}
                </CustomCard>
              ))}
            </div>
          </div>

          {/* Мобильный список */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-[#292D30]">Мобильный список</h3>
            <div className="max-w-sm mx-auto space-y-3">
              {[1, 2, 3, 4].map((item) => (
                <CustomCard key={item} size="sm">
                  {loading ? (
                    <div className="flex items-center gap-3">
                      <CustomSkeleton variant="circular" size="sm" />
                      <div className="flex-1 space-y-1">
                        <CustomSkeleton variant="text" width="70%" />
                        <CustomSkeleton variant="text" width="50%" />
                      </div>
                      <CustomSkeleton variant="rectangular" width="60px" height="24px" />
                    </div>
                  ) : (
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-[#AFEB0F] bg-opacity-20 rounded-full flex items-center justify-center">
                        <span className="text-[#AFEB0F] font-bold">{item}</span>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium text-[#292D30]">Элемент списка {item}</h4>
                        <p className="text-sm text-gray-600">Подзаголовок</p>
                      </div>
                      <CustomButton variant="ghost" size="sm">
                        Действие
                      </CustomButton>
                    </div>
                  )}
                </CustomCard>
              ))}
            </div>
          </div>
        </section>

        {/* Адаптивные примеры */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-[#292D30]">Адаптивные примеры</h2>

          {/* Десктоп */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-[#292D30]">Десктоп раскладка</h3>
            <div className="hidden lg:block">
              <CustomCard>
                {loading ? (
                  <div className="grid grid-cols-4 gap-6">
                    <div className="space-y-3">
                      <CustomSkeleton variant="circular" size="lg" />
                      <CustomSkeleton variant="text" lines={2} />
                    </div>
                    <div className="col-span-2 space-y-3">
                      <CustomSkeleton variant="text" width="60%" />
                      <CustomSkeleton variant="text" lines={4} />
                      <div className="flex gap-2">
                        <CustomSkeleton variant="rectangular" width="120px" height="40px" />
                        <CustomSkeleton variant="rectangular" width="100px" height="40px" />
                      </div>
                    </div>
                    <div className="space-y-3">
                      <CustomSkeleton variant="rectangular" height="200px" />
                    </div>
                  </div>
                ) : (
                  <div className="grid grid-cols-4 gap-6">
                    <div className="text-center space-y-3">
                      <div className="w-20 h-20 bg-[#AFEB0F] bg-opacity-20 rounded-full mx-auto flex items-center justify-center">
                        <span className="text-[#AFEB0F] font-bold text-2xl">Д</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-[#292D30]">Десктоп</h4>
                        <p className="text-sm text-gray-600">Полная версия</p>
                      </div>
                    </div>
                    <div className="col-span-2 space-y-3">
                      <h3 className="text-xl font-bold text-[#292D30]">Основной контент</h3>
                      <p className="text-gray-600">
                        На десктопе у нас достаточно места для отображения всей информации в удобном формате. Можно
                        использовать сложные раскладки и больше деталей.
                      </p>
                      <div className="flex gap-3">
                        <CustomButton variant="primary">Основное действие</CustomButton>
                        <CustomButton variant="outlined">Дополнительно</CustomButton>
                      </div>
                    </div>
                    <div>
                      <div className="w-full h-48 bg-gradient-to-br from-[#AFEB0F] to-[#292D30] rounded flex items-center justify-center">
                        <span className="text-white font-semibold">Боковая панель</span>
                      </div>
                    </div>
                  </div>
                )}
              </CustomCard>
            </div>
          </div>

          {/* Планшет */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-[#292D30]">Планшет раскладка</h3>
            <div className="max-w-2xl mx-auto">
              <CustomCard>
                {loading ? (
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-3">
                      <CustomSkeleton variant="rectangular" height="120px" />
                      <CustomSkeleton variant="text" lines={2} />
                      <CustomSkeleton variant="rectangular" width="100px" height="32px" />
                    </div>
                    <div className="space-y-3">
                      <CustomSkeleton variant="rectangular" height="120px" />
                      <CustomSkeleton variant="text" lines={2} />
                      <CustomSkeleton variant="rectangular" width="100px" height="32px" />
                    </div>
                  </div>
                ) : (
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-3">
                      <div className="w-full h-32 bg-[#AFEB0F] bg-opacity-20 rounded flex items-center justify-center">
                        <span className="text-[#AFEB0F] font-semibold">Планшет 1</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-[#292D30]">Первая колонка</h4>
                        <p className="text-sm text-gray-600">Контент для планшета</p>
                      </div>
                      <CustomButton variant="primary" size="sm">
                        Действие
                      </CustomButton>
                    </div>
                    <div className="space-y-3">
                      <div className="w-full h-32 bg-[#292D30] bg-opacity-10 rounded flex items-center justify-center">
                        <span className="text-[#292D30] font-semibold">Планшет 2</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-[#292D30]">Вторая колонка</h4>
                        <p className="text-sm text-gray-600">Дополнительный контент</p>
                      </div>
                      <CustomButton variant="outlined" size="sm">
                        Действие
                      </CustomButton>
                    </div>
                  </div>
                )}
              </CustomCard>
            </div>
          </div>
        </section>

        {/* Документация API */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-[#292D30]">Документация API</h2>
          <CustomCard>
            <h3 className="text-lg font-semibold mb-4 text-[#292D30]">CustomSkeleton Props</h3>
            <div className="space-y-4 text-sm">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <code className="bg-gray-100 px-2 py-1 rounded text-[#292D30]">variant</code>
                  <span className="ml-2 text-gray-600">"text" | "rectangular" | "circular" | "rounded"</span>
                  <p className="text-gray-500 mt-1">Тип скелетона. По умолчанию "rectangular"</p>
                </div>
                <div>
                  <code className="bg-gray-100 px-2 py-1 rounded text-[#292D30]">size</code>
                  <span className="ml-2 text-gray-600">"sm" | "md" | "lg"</span>
                  <p className="text-gray-500 mt-1">Размер скосов. По умолчанию "md"</p>
                </div>
                <div>
                  <code className="bg-gray-100 px-2 py-1 rounded text-[#292D30]">width</code>
                  <span className="ml-2 text-gray-600">string | number</span>
                  <p className="text-gray-500 mt-1">Ширина скелетона</p>
                </div>
                <div>
                  <code className="bg-gray-100 px-2 py-1 rounded text-[#292D30]">height</code>
                  <span className="ml-2 text-gray-600">string | number</span>
                  <p className="text-gray-500 mt-1">Высота скелетона</p>
                </div>
                <div>
                  <code className="bg-gray-100 px-2 py-1 rounded text-[#292D30]">animation</code>
                  <span className="ml-2 text-gray-600">"pulse" | "wave" | "none"</span>
                  <p className="text-gray-500 mt-1">Тип анимации. По умолчанию "pulse"</p>
                </div>
                <div>
                  <code className="bg-gray-100 px-2 py-1 rounded text-[#292D30]">lines</code>
                  <span className="ml-2 text-gray-600">number</span>
                  <p className="text-gray-500 mt-1">Количество строк для text варианта. По умолчанию 1</p>
                </div>
              </div>
            </div>
          </CustomCard>
        </section>
      </div>
    </div>
  )
}
