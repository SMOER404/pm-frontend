"use client"

import CustomTypography from "./custom-typography"
import CustomCard from "./custom-card"

export default function TypographyDemo() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-[#292D30] mb-4">Типографика</h1>
          <p className="text-gray-600">Стили текста для всех случаев</p>
        </div>

        {/* Заголовки */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-[#292D30]">Заголовки</h2>
          <div className="space-y-4">
            <CustomTypography variant="h1">H1 - Главный заголовок</CustomTypography>
            <CustomTypography variant="h2">H2 - Заголовок второго уровня</CustomTypography>
            <CustomTypography variant="h3">H3 - Заголовок третьего уровня</CustomTypography>
            <CustomTypography variant="h4">H4 - Заголовок четвертого уровня</CustomTypography>
            <CustomTypography variant="h5">H5 - Заголовок пятого уровня</CustomTypography>
            <CustomTypography variant="h6">H6 - Заголовок шестого уровня</CustomTypography>
          </div>
        </section>

        {/* Подзаголовки */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-[#292D30]">Подзаголовки</h2>
          <div className="space-y-4">
            <CustomTypography variant="subtitle1">
              Subtitle 1 - Основной подзаголовок для важной дополнительной информации
            </CustomTypography>
            <CustomTypography variant="subtitle2">
              Subtitle 2 - Вторичный подзаголовок для менее важной информации
            </CustomTypography>
          </div>
        </section>

        {/* Основной текст */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-[#292D30]">Основной текст</h2>
          <div className="space-y-4">
            <CustomTypography variant="body1">
              Body 1 - Основной текст для большинства контента. Используется для параграфов, описаний и основной
              информации. Этот размер обеспечивает хорошую читаемость на всех устройствах.
            </CustomTypography>
            <CustomTypography variant="body2">
              Body 2 - Вторичный текст меньшего размера. Подходит для дополнительной информации, подписей и менее
              важного контента. Часто используется в карточках и боковых панелях.
            </CustomTypography>
          </div>
        </section>

        {/* Дополнительные стили */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-[#292D30]">Дополнительные стили</h2>
          <div className="space-y-4">
            <CustomTypography variant="caption">
              Caption - Мелкий текст для подписей, меток времени и вспомогательной информации
            </CustomTypography>
            <CustomTypography variant="overline">Overline - Текст для заголовков секций и категорий</CustomTypography>
          </div>
        </section>

        {/* Цвета */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-[#292D30]">Цвета</h2>
          <div className="space-y-4">
            <CustomTypography variant="h4" color="primary">
              Primary - Основной брендовый цвет
            </CustomTypography>
            <CustomTypography variant="h4" color="secondary">
              Secondary - Вторичный цвет
            </CustomTypography>
            <CustomTypography variant="h4" color="text">
              Text - Основной цвет текста
            </CustomTypography>
            <CustomTypography variant="h4" color="disabled">
              Disabled - Отключенный текст
            </CustomTypography>
            <CustomTypography variant="h4" color="error">
              Error - Цвет ошибки
            </CustomTypography>
            <CustomTypography variant="h4" color="warning">
              Warning - Цвет предупреждения
            </CustomTypography>
            <CustomTypography variant="h4" color="success">
              Success - Цвет успеха
            </CustomTypography>
          </div>
        </section>

        {/* Выравнивание */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-[#292D30]">Выравнивание</h2>
          <div className="space-y-4">
            <CustomTypography variant="body1" align="left">
              Выравнивание по левому краю - стандартное выравнивание для большинства текста
            </CustomTypography>
            <CustomTypography variant="body1" align="center">
              Выравнивание по центру - используется для заголовков и акцентного текста
            </CustomTypography>
            <CustomTypography variant="body1" align="right">
              Выравнивание по правому краю - редко используется, подходит для специальных случаев
            </CustomTypography>
            <CustomTypography variant="body1" align="justify">
              Выравнивание по ширине - используется для длинных текстов и статей, где важна равномерность строк. Текст
              растягивается по всей ширине контейнера, создавая ровные края с обеих сторон.
            </CustomTypography>
          </div>
        </section>

        {/* Дополнительные свойства */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-[#292D30]">Дополнительные свойства</h2>
          <div className="space-y-4">
            <CustomTypography variant="h4" gutterBottom>
              Заголовок с отступом снизу
            </CustomTypography>
            <CustomTypography variant="body1">
              Этот параграф идет после заголовка с gutterBottom, что создает правильные отступы между элементами.
            </CustomTypography>

            <div className="w-64">
              <CustomTypography variant="body1" noWrap>
                Очень длинный текст который будет обрезан если не помещается в контейнер
              </CustomTypography>
            </div>
          </div>
        </section>

        {/* Кастомные цвета */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-[#292D30]">Кастомные цвета</h2>
          <div className="space-y-4">
            <CustomTypography variant="h4" customColor="#AFEB0F">
              Брендовый зеленый цвет
            </CustomTypography>
            <CustomTypography variant="h4" customColor="#8B5CF6">
              Фиолетовый цвет
            </CustomTypography>
            <CustomTypography variant="h4" customColor="#F59E0B">
              Оранжевый цвет
            </CustomTypography>
            <CustomTypography variant="h4" customColor="#EC4899">
              Розовый цвет
            </CustomTypography>
          </div>
        </section>

        {/* Практические примеры */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-[#292D30]">Практические примеры</h2>

          {/* Статья */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-[#292D30]">Статья</h3>
            <CustomCard>
              <div className="space-y-4">
                <CustomTypography variant="h3" gutterBottom>
                  Заголовок статьи
                </CustomTypography>
                <CustomTypography variant="subtitle1" color="secondary" gutterBottom>
                  Подзаголовок с дополнительной информацией
                </CustomTypography>
                <CustomTypography variant="caption" color="disabled">
                  Опубликовано 15 января 2024 • 5 минут чтения
                </CustomTypography>
                <CustomTypography variant="body1" align="justify">
                  Это пример статьи с правильной типографикой. Основной текст использует variant="body1" для обеспечения
                  хорошей читаемости. Параграфы имеют достаточные отступы между собой, что делает текст легким для
                  восприятия.
                </CustomTypography>
                <CustomTypography variant="body1" align="justify">
                  Второй параграф продолжает повествование. Выравнивание по ширине создает аккуратный внешний вид
                  текста, особенно важный для длинных статей и документов.
                </CustomTypography>
              </div>
            </CustomCard>
          </div>

          {/* Карточка профиля */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-[#292D30]">Карточка профиля</h3>
            <CustomCard>
              <div className="text-center space-y-3">
                <div className="w-20 h-20 bg-[#AFEB0F] bg-opacity-20 rounded-full mx-auto flex items-center justify-center">
                  <span className="text-2xl font-bold text-[#AFEB0F]">ИП</span>
                </div>
                <CustomTypography variant="h5" gutterBottom>
                  Иван Петров
                </CustomTypography>
                <CustomTypography variant="subtitle2" color="secondary">
                  Frontend Developer
                </CustomTypography>
                <CustomTypography variant="body2" align="center">
                  Опытный разработчик с 5+ годами опыта в создании современных веб-приложений
                </CustomTypography>
                <CustomTypography variant="caption" color="disabled">
                  Последний вход: 2 часа назад
                </CustomTypography>
              </div>
            </CustomCard>
          </div>

          {/* Уведомление */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-[#292D30]">Уведомления</h3>
            <div className="space-y-3">
              <CustomCard borderColor="#10b981" backgroundColor="#f0fdf4">
                <div className="space-y-2">
                  <CustomTypography variant="subtitle2" color="success">
                    Успешно сохранено
                  </CustomTypography>
                  <CustomTypography variant="body2">Ваши изменения были успешно сохранены в системе</CustomTypography>
                </div>
              </CustomCard>

              <CustomCard borderColor="#f59e0b" backgroundColor="#fffbeb">
                <div className="space-y-2">
                  <CustomTypography variant="subtitle2" color="warning">
                    Требуется внимание
                  </CustomTypography>
                  <CustomTypography variant="body2">
                    Пожалуйста, проверьте настройки безопасности вашего аккаунта
                  </CustomTypography>
                </div>
              </CustomCard>

              <CustomCard borderColor="#ef4444" backgroundColor="#fef2f2">
                <div className="space-y-2">
                  <CustomTypography variant="subtitle2" color="error">
                    Ошибка подключения
                  </CustomTypography>
                  <CustomTypography variant="body2">
                    Не удалось подключиться к серверу. Проверьте интернет-соединение
                  </CustomTypography>
                </div>
              </CustomCard>
            </div>
          </div>

          {/* Список с типографикой */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-[#292D30]">Информационный список</h3>
            <CustomCard>
              <div className="space-y-4">
                <CustomTypography variant="h6" gutterBottom>
                  Технические характеристики
                </CustomTypography>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <CustomTypography variant="body2" color="secondary">
                      Процессор:
                    </CustomTypography>
                    <CustomTypography variant="body2">Intel Core i7-12700K</CustomTypography>
                  </div>
                  <div className="flex justify-between items-center">
                    <CustomTypography variant="body2" color="secondary">
                      Память:
                    </CustomTypography>
                    <CustomTypography variant="body2">32 GB DDR4</CustomTypography>
                  </div>
                  <div className="flex justify-between items-center">
                    <CustomTypography variant="body2" color="secondary">
                      Накопитель:
                    </CustomTypography>
                    <CustomTypography variant="body2">1 TB NVMe SSD</CustomTypography>
                  </div>
                  <div className="flex justify-between items-center">
                    <CustomTypography variant="body2" color="secondary">
                      Видеокарта:
                    </CustomTypography>
                    <CustomTypography variant="body2">NVIDIA RTX 4080</CustomTypography>
                  </div>
                </div>
              </div>
            </CustomCard>
          </div>
        </section>

        {/* Адаптивная типографика */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-[#292D30]">Адаптивная типографика</h2>

          {/* Мобильная версия */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-[#292D30]">Мобильная версия</h3>
            <div className="max-w-sm mx-auto">
              <CustomCard>
                <div className="space-y-3">
                  <CustomTypography variant="h5" align="center" gutterBottom>
                    Мобильный заголовок
                  </CustomTypography>
                  <CustomTypography variant="body2" align="center">
                    Компактный текст для мобильных устройств с оптимальным размером для чтения на маленьких экранах
                  </CustomTypography>
                  <CustomTypography variant="caption" align="center" color="disabled">
                    Дополнительная информация
                  </CustomTypography>
                </div>
              </CustomCard>
            </div>
          </div>

          {/* Планшетная версия */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-[#292D30]">Планшетная версия</h3>
            <div className="max-w-2xl mx-auto">
              <CustomCard>
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <CustomTypography variant="h4" gutterBottom>
                      Левая колонка
                    </CustomTypography>
                    <CustomTypography variant="body1">
                      Текст для планшетов использует стандартные размеры с учетом увеличенного пространства
                    </CustomTypography>
                  </div>
                  <div className="space-y-3">
                    <CustomTypography variant="h4" gutterBottom>
                      Правая колонка
                    </CustomTypography>
                    <CustomTypography variant="body1">
                      Двухколоночная раскладка позволяет эффективно использовать пространство планшета
                    </CustomTypography>
                  </div>
                </div>
              </CustomCard>
            </div>
          </div>

          {/* Десктопная версия */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-[#292D30]">Десктопная версия</h3>
            <CustomCard>
              <div className="space-y-6">
                <CustomTypography variant="h2" align="center" gutterBottom>
                  Большой заголовок для десктопа
                </CustomTypography>
                <div className="grid grid-cols-3 gap-8">
                  <div className="space-y-3">
                    <CustomTypography variant="h5" gutterBottom>
                      Первая секция
                    </CustomTypography>
                    <CustomTypography variant="body1">
                      На десктопе можно использовать более крупные заголовки и сложные раскладки с несколькими колонками
                    </CustomTypography>
                  </div>
                  <div className="space-y-3">
                    <CustomTypography variant="h5" gutterBottom>
                      Вторая секция
                    </CustomTypography>
                    <CustomTypography variant="body1">
                      Больше пространства позволяет размещать больше контента и использовать различные размеры текста
                    </CustomTypography>
                  </div>
                  <div className="space-y-3">
                    <CustomTypography variant="h5" gutterBottom>
                      Третья секция
                    </CustomTypography>
                    <CustomTypography variant="body1">
                      Трехколоночная раскладка эффективно использует широкие экраны современных мониторов
                    </CustomTypography>
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
            <h3 className="text-lg font-semibold mb-4 text-[#292D30]">CustomTypography Props</h3>
            <div className="space-y-4 text-sm">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <code className="bg-gray-100 px-2 py-1 rounded text-[#292D30]">variant</code>
                  <span className="ml-2 text-gray-600">
                    "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "subtitle1" | "subtitle2" | "body1" | "body2" | "caption"
                    | "overline"
                  </span>
                  <p className="text-gray-500 mt-1">Стиль текста. По умолчанию "body1"</p>
                </div>
                <div>
                  <code className="bg-gray-100 px-2 py-1 rounded text-[#292D30]">component</code>
                  <span className="ml-2 text-gray-600">HTML элемент</span>
                  <p className="text-gray-500 mt-1">HTML тег для рендера. Автоматически определяется по variant</p>
                </div>
                <div>
                  <code className="bg-gray-100 px-2 py-1 rounded text-[#292D30]">color</code>
                  <span className="ml-2 text-gray-600">
                    "primary" | "secondary" | "text" | "disabled" | "error" | "warning" | "success"
                  </span>
                  <p className="text-gray-500 mt-1">Цвет текста. По умолчанию "text"</p>
                </div>
                <div>
                  <code className="bg-gray-100 px-2 py-1 rounded text-[#292D30]">align</code>
                  <span className="ml-2 text-gray-600">"left" | "center" | "right" | "justify"</span>
                  <p className="text-gray-500 mt-1">Выравнивание текста. По умолчанию "left"</p>
                </div>
                <div>
                  <code className="bg-gray-100 px-2 py-1 rounded text-[#292D30]">gutterBottom</code>
                  <span className="ml-2 text-gray-600">boolean</span>
                  <p className="text-gray-500 mt-1">Добавить отступ снизу. По умолчанию false</p>
                </div>
                <div>
                  <code className="bg-gray-100 px-2 py-1 rounded text-[#292D30]">noWrap</code>
                  <span className="ml-2 text-gray-600">boolean</span>
                  <p className="text-gray-500 mt-1">Обрезать длинный текст. По умолчанию false</p>
                </div>
                <div>
                  <code className="bg-gray-100 px-2 py-1 rounded text-[#292D30]">customColor</code>
                  <span className="ml-2 text-gray-600">string</span>
                  <p className="text-gray-500 mt-1">Кастомный цвет текста</p>
                </div>
              </div>
            </div>
          </CustomCard>
        </section>
      </div>
    </div>
  )
}
