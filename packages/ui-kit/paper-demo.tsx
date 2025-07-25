"use client"

import CustomPaper from "./custom-paper"
import CustomButton from "./custom-button"
import CustomTypography from "./custom-typography"
import { Star, Heart, Settings, User } from "lucide-react"

export default function PaperDemo() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-[#292D30] mb-4">Paper контейнеры</h1>
          <p className="text-gray-600">Подложки и контейнеры для контента</p>
        </div>

        {/* Основные варианты */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-[#292D30]">Основные варианты</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <h3 className="text-lg font-medium text-[#292D30]">Outlined</h3>
              <CustomPaper variant="outlined">
                <div className="p-6">
                  <CustomTypography variant="h6" gutterBottom>
                    Outlined Paper
                  </CustomTypography>
                  <CustomTypography variant="body2">
                    Контейнер с рамкой и скосами. Подходит для выделения контента на странице.
                  </CustomTypography>
                </div>
              </CustomPaper>
            </div>

            <div className="space-y-2">
              <h3 className="text-lg font-medium text-[#292D30]">Elevation</h3>
              <CustomPaper variant="elevation" elevation={2}>
                <div className="p-6">
                  <CustomTypography variant="h6" gutterBottom>
                    Elevation Paper
                  </CustomTypography>
                  <CustomTypography variant="body2">
                    Контейнер с тенью. Создает эффект поднятия над поверхностью страницы.
                  </CustomTypography>
                </div>
              </CustomPaper>
            </div>
          </div>
        </section>

        {/* Уровни elevation */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-[#292D30]">Уровни elevation</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[0, 1, 2, 3, 4, 5].map((level) => (
              <div key={level} className="text-center space-y-2">
                <CustomPaper variant="elevation" elevation={level as 0 | 1 | 2 | 3 | 4 | 5}>
                  <div className="p-4">
                    <CustomTypography variant="h6">{level}</CustomTypography>
                  </div>
                </CustomPaper>
                <CustomTypography variant="caption">Elevation {level}</CustomTypography>
              </div>
            ))}
          </div>
        </section>

        {/* Размеры скосов */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-[#292D30]">Размеры скосов</h2>
          <div className="space-y-4">
            <div className="space-y-2">
              <h3 className="text-lg font-medium text-[#292D30]">Small</h3>
              <CustomPaper size="sm" variant="outlined">
                <div className="p-4">
                  <CustomTypography variant="body2">Маленькие скосы (8px)</CustomTypography>
                </div>
              </CustomPaper>
            </div>

            <div className="space-y-2">
              <h3 className="text-lg font-medium text-[#292D30]">Medium</h3>
              <CustomPaper size="md" variant="outlined">
                <div className="p-6">
                  <CustomTypography variant="body2">Средние скосы (12px)</CustomTypography>
                </div>
              </CustomPaper>
            </div>

            <div className="space-y-2">
              <h3 className="text-lg font-medium text-[#292D30]">Large</h3>
              <CustomPaper size="lg" variant="outlined">
                <div className="p-8">
                  <CustomTypography variant="body2">Большие скосы (16px)</CustomTypography>
                </div>
              </CustomPaper>
            </div>
          </div>
        </section>

        {/* Квадратные контейнеры */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-[#292D30]">Квадратные контейнеры</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <h3 className="text-lg font-medium text-[#292D30]">Со скосами</h3>
              <CustomPaper variant="outlined">
                <div className="p-6">
                  <CustomTypography variant="body2">Обычный контейнер со скосами</CustomTypography>
                </div>
              </CustomPaper>
            </div>

            <div className="space-y-2">
              <h3 className="text-lg font-medium text-[#292D30]">Квадратный</h3>
              <CustomPaper variant="outlined" square>
                <div className="p-6">
                  <CustomTypography variant="body2">Квадратный контейнер без скосов</CustomTypography>
                </div>
              </CustomPaper>
            </div>
          </div>
        </section>

        {/* Практические примеры */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-[#292D30]">Практические примеры</h2>

          {/* Карточка профиля */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-[#292D30]">Карточка профиля</h3>
            <div className="max-w-md mx-auto">
              <CustomPaper variant="elevation" elevation={3}>
                <div className="p-6 text-center space-y-4">
                  <div className="w-20 h-20 bg-[#AFEB0F] bg-opacity-20 rounded-full mx-auto flex items-center justify-center">
                    <User className="w-10 h-10 text-[#AFEB0F]" />
                  </div>
                  <div>
                    <CustomTypography variant="h5" gutterBottom>
                      Анна Петрова
                    </CustomTypography>
                    <CustomTypography variant="subtitle2" color="secondary">
                      UX/UI Designer
                    </CustomTypography>
                  </div>
                  <CustomTypography variant="body2" align="center">
                    Создаю интуитивные и красивые пользовательские интерфейсы для веб и мобильных приложений
                  </CustomTypography>
                  <div className="flex gap-2 justify-center">
                    <CustomButton variant="primary" size="sm">
                      Связаться
                    </CustomButton>
                    <CustomButton variant="outlined" size="sm">
                      Портфолио
                    </CustomButton>
                  </div>
                </div>
              </CustomPaper>
            </div>
          </div>

          {/* Панель статистики */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-[#292D30]">Панель статистики</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <CustomPaper variant="elevation" elevation={1}>
                <div className="p-4 text-center space-y-2">
                  <Star className="w-8 h-8 text-[#AFEB0F] mx-auto" />
                  <CustomTypography variant="h4" color="primary">
                    4.8
                  </CustomTypography>
                  <CustomTypography variant="caption" color="secondary">
                    Рейтинг
                  </CustomTypography>
                </div>
              </CustomPaper>

              <CustomPaper variant="elevation" elevation={1}>
                <div className="p-4 text-center space-y-2">
                  <Heart className="w-8 h-8 text-red-500 mx-auto" />
                  <CustomTypography variant="h4" color="error">
                    1,234
                  </CustomTypography>
                  <CustomTypography variant="caption" color="secondary">
                    Лайки
                  </CustomTypography>
                </div>
              </CustomPaper>

              <CustomPaper variant="elevation" elevation={1}>
                <div className="p-4 text-center space-y-2">
                  <User className="w-8 h-8 text-blue-500 mx-auto" />
                  <CustomTypography variant="h4" color="primary">
                    567
                  </CustomTypography>
                  <CustomTypography variant="caption" color="secondary">
                    Подписчики
                  </CustomTypography>
                </div>
              </CustomPaper>

              <CustomPaper variant="elevation" elevation={1}>
                <div className="p-4 text-center space-y-2">
                  <Settings className="w-8 h-8 text-gray-500 mx-auto" />
                  <CustomTypography variant="h4">89</CustomTypography>
                  <CustomTypography variant="caption" color="secondary">
                    Проекты
                  </CustomTypography>
                </div>
              </CustomPaper>
            </div>
          </div>

          {/* Форма в контейнере */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-[#292D30]">Форма обратной связи</h3>
            <div className="max-w-lg mx-auto">
              <CustomPaper variant="outlined">
                <div className="p-6 space-y-4">
                  <CustomTypography variant="h5" gutterBottom>
                    Свяжитесь с нами
                  </CustomTypography>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-[#292D30] mb-1">Имя</label>
                      <input
                        type="text"
                        className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-[#AFEB0F]"
                        placeholder="Ваше имя"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#292D30] mb-1">Email</label>
                      <input
                        type="email"
                        className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-[#AFEB0F]"
                        placeholder="email@example.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#292D30] mb-1">Сообщение</label>
                      <textarea
                        className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-[#AFEB0F] resize-none"
                        rows={4}
                        placeholder="Ваше сообщение..."
                      />
                    </div>
                    <CustomButton variant="primary" className="w-full">
                      Отправить сообщение
                    </CustomButton>
                  </div>
                </div>
              </CustomPaper>
            </div>
          </div>

          {/* Галерея изображений */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-[#292D30]">Галерея</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[1, 2, 3, 4].map((item) => (
                <CustomPaper key={item} variant="elevation" elevation={2}>
                  <div className="aspect-square bg-gray-200 flex items-center justify-center">
                    <span className="text-gray-500">Фото {item}</span>
                  </div>
                </CustomPaper>
              ))}
            </div>
          </div>
        </section>

        {/* Кастомные цвета */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-[#292D30]">Кастомные цвета</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <CustomPaper variant="outlined" borderColor="#AFEB0F" backgroundColor="#AFEB0F" className="bg-opacity-10">
              <div className="p-6">
                <CustomTypography variant="h6" gutterBottom>
                  Брендовый контейнер
                </CustomTypography>
                <CustomTypography variant="body2">Контейнер с брендовыми цветами</CustomTypography>
              </div>
            </CustomPaper>

            <CustomPaper variant="outlined" borderColor="#ef4444" backgroundColor="#fef2f2">
              <div className="p-6">
                <CustomTypography variant="h6" gutterBottom color="error">
                  Контейнер ошибки
                </CustomTypography>
                <CustomTypography variant="body2">Для отображения ошибок</CustomTypography>
              </div>
            </CustomPaper>

            <CustomPaper variant="outlined" borderColor="#10b981" backgroundColor="#f0fdf4">
              <div className="p-6">
                <CustomTypography variant="h6" gutterBottom color="success">
                  Контейнер успеха
                </CustomTypography>
                <CustomTypography variant="body2">Для успешных операций</CustomTypography>
              </div>
            </CustomPaper>
          </div>
        </section>

        {/* Адаптивные примеры */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-[#292D30]">Адаптивные примеры</h2>

          {/* Мобильная версия */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-[#292D30]">Мобильная версия</h3>
            <div className="max-w-sm mx-auto space-y-4">
              <CustomPaper variant="elevation" elevation={1} size="sm">
                <div className="p-4 text-center">
                  <CustomTypography variant="h6" gutterBottom>
                    Мобильная карточка
                  </CustomTypography>
                  <CustomTypography variant="body2">Компактный дизайн для мобильных устройств</CustomTypography>
                </div>
              </CustomPaper>
            </div>
          </div>

          {/* Планшетная версия */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-[#292D30]">Планшетная версия</h3>
            <div className="max-w-2xl mx-auto">
              <CustomPaper variant="elevation" elevation={2}>
                <div className="p-6">
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <CustomTypography variant="h5" gutterBottom>
                        Левая секция
                      </CustomTypography>
                      <CustomTypography variant="body1">
                        Контент для планшетов с двухколоночной раскладкой
                      </CustomTypography>
                    </div>
                    <div>
                      <CustomTypography variant="h5" gutterBottom>
                        Правая секция
                      </CustomTypography>
                      <CustomTypography variant="body1">
                        Эффективное использование пространства планшета
                      </CustomTypography>
                    </div>
                  </div>
                </div>
              </CustomPaper>
            </div>
          </div>

          {/* Десктопная версия */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-[#292D30]">Десктопная версия</h3>
            <CustomPaper variant="elevation" elevation={3} size="lg">
              <div className="p-8">
                <CustomTypography variant="h3" align="center" gutterBottom>
                  Большой контейнер для десктопа
                </CustomTypography>
                <div className="grid grid-cols-3 gap-8 mt-6">
                  <div className="text-center">
                    <CustomTypography variant="h5" gutterBottom>
                      Секция 1
                    </CustomTypography>
                    <CustomTypography variant="body1">Просторная раскладка для больших экранов</CustomTypography>
                  </div>
                  <div className="text-center">
                    <CustomTypography variant="h5" gutterBottom>
                      Секция 2
                    </CustomTypography>
                    <CustomTypography variant="body1">Максимальное использование пространства</CustomTypography>
                  </div>
                  <div className="text-center">
                    <CustomTypography variant="h5" gutterBottom>
                      Секция 3
                    </CustomTypography>
                    <CustomTypography variant="body1">Сложные многоколоночные раскладки</CustomTypography>
                  </div>
                </div>
              </div>
            </CustomPaper>
          </div>
        </section>

        {/* Документация API */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-[#292D30]">Документация API</h2>
          <CustomPaper variant="outlined">
            <div className="p-6">
              <h3 className="text-lg font-semibold mb-4 text-[#292D30]">CustomPaper Props</h3>
              <div className="space-y-4 text-sm">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <code className="bg-gray-100 px-2 py-1 rounded text-[#292D30]">variant</code>
                    <span className="ml-2 text-gray-600">"outlined" | "elevation"</span>
                    <p className="text-gray-500 mt-1">Стиль контейнера. По умолчанию "elevation"</p>
                  </div>
                  <div>
                    <code className="bg-gray-100 px-2 py-1 rounded text-[#292D30]">elevation</code>
                    <span className="ml-2 text-gray-600">0 | 1 | 2 | 3 | 4 | 5</span>
                    <p className="text-gray-500 mt-1">Уровень тени. По умолчанию 1</p>
                  </div>
                  <div>
                    <code className="bg-gray-100 px-2 py-1 rounded text-[#292D30]">size</code>
                    <span className="ml-2 text-gray-600">"sm" | "md" | "lg"</span>
                    <p className="text-gray-500 mt-1">Размер скосов. По умолчанию "md"</p>
                  </div>
                  <div>
                    <code className="bg-gray-100 px-2 py-1 rounded text-[#292D30]">square</code>
                    <span className="ml-2 text-gray-600">boolean</span>
                    <p className="text-gray-500 mt-1">Убрать скосы. По умолчанию false</p>
                  </div>
                  <div>
                    <code className="bg-gray-100 px-2 py-1 rounded text-[#292D30]">borderColor</code>
                    <span className="ml-2 text-gray-600">string</span>
                    <p className="text-gray-500 mt-1">Кастомный цвет рамки</p>
                  </div>
                  <div>
                    <code className="bg-gray-100 px-2 py-1 rounded text-[#292D30]">backgroundColor</code>
                    <span className="ml-2 text-gray-600">string</span>
                    <p className="text-gray-500 mt-1">Кастомный цвет фона</p>
                  </div>
                </div>
              </div>
            </div>
          </CustomPaper>
        </section>
      </div>
    </div>
  )
}
