"use client"

import CustomCard from "./custom-card"
import CustomDialog from "./custom-dialog"
import CustomAccordion, { AccordionItem } from "./custom-accordion"
import CustomTabs, { Tab } from "./custom-tabs"
import CustomButton from "./custom-button"
import CustomInput from "./custom-input"
import { useState } from "react"
import { User, Settings, Bell, Star, Heart, Share } from "lucide-react"

export default function ComponentsDemo() {
  const [dialogOpen, setDialogOpen] = useState(false)
  const [confirmDialogOpen, setConfirmDialogOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Библиотека компонентов</h1>
          <p className="text-gray-600">Все компоненты в едином стиле со скосами</p>
        </div>

        {/* Cards */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-gray-800">Cards (Карточки)</h2>

          <div className="space-y-4">
            <h3 className="text-lg font-medium">Варианты</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <CustomCard variant="outlined">
                <h3 className="text-lg font-semibold mb-2">Outlined Card</h3>
                <p className="text-gray-600">Карточка с контуром. Подходит для основного контента.</p>
              </CustomCard>

              <CustomCard variant="filled">
                <h3 className="text-lg font-semibold mb-2">Filled Card</h3>
                <p className="text-gray-600">Карточка с заливкой. Для второстепенного контента.</p>
              </CustomCard>

              <CustomCard variant="elevated">
                <h3 className="text-lg font-semibold mb-2">Elevated Card</h3>
                <p className="text-gray-600">Карточка с тенью. Для важного контента.</p>
              </CustomCard>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-medium">Размеры</h3>
            <div className="space-y-4">
              <CustomCard size="sm">
                <p>Small card - компактная карточка для списков</p>
              </CustomCard>
              <CustomCard size="md">
                <p>Medium card - стандартная карточка для основного контента</p>
              </CustomCard>
              <CustomCard size="lg">
                <p>Large card - большая карточка для важного контента</p>
              </CustomCard>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-medium">Примеры использования</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Product Card */}
              <CustomCard variant="elevated">
                <div className="space-y-4">
                  <div className="w-full h-32 bg-gray-200 rounded flex items-center justify-center">
                    <span className="text-gray-500">Изображение товара</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Название товара</h3>
                    <p className="text-gray-600 text-sm">Описание товара в несколько строк</p>
                    <p className="text-xl font-bold text-blue-600 mt-2">$99.99</p>
                  </div>
                  <div className="flex gap-2">
                    <CustomButton variant="primary" size="sm" className="flex-1">
                      Купить
                    </CustomButton>
                    <CustomButton variant="outlined" size="sm" icon={<Heart className="w-4 h-4" />} iconOnly>
                      Лайк
                    </CustomButton>
                  </div>
                </div>
              </CustomCard>

              {/* Profile Card */}
              <CustomCard variant="outlined">
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-blue-100 rounded-full mx-auto flex items-center justify-center">
                    <User className="w-8 h-8 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Иван Петров</h3>
                    <p className="text-gray-600 text-sm">Frontend Developer</p>
                  </div>
                  <div className="flex gap-2 justify-center">
                    <CustomButton variant="outlined" size="sm">
                      Профиль
                    </CustomButton>
                    <CustomButton variant="ghost" size="sm" icon={<Share className="w-4 h-4" />} iconOnly>
                      Поделиться
                    </CustomButton>
                  </div>
                </div>
              </CustomCard>

              {/* Stats Card */}
              <CustomCard variant="filled">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold">Статистика</h3>
                    <Star className="w-5 h-5 text-yellow-500" />
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <p className="text-2xl font-bold text-blue-600">1,234</p>
                      <p className="text-sm text-gray-600">Просмотры</p>
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-green-600">567</p>
                      <p className="text-sm text-gray-600">Лайки</p>
                    </div>
                  </div>
                </div>
              </CustomCard>
            </div>
          </div>
        </section>

        {/* Dialogs */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-gray-800">Dialog (Диалоги)</h2>

          <div className="space-y-4">
            <h3 className="text-lg font-medium">Примеры</h3>
            <div className="flex flex-wrap gap-4">
              <CustomButton variant="primary" onClick={() => setDialogOpen(true)}>
                Открыть диалог
              </CustomButton>
              <CustomButton variant="outlined" onClick={() => setConfirmDialogOpen(true)}>
                Диалог подтверждения
              </CustomButton>
            </div>
          </div>

          {/* Basic Dialog */}
          <CustomDialog open={dialogOpen} onClose={() => setDialogOpen(false)} title="Настройки профиля" size="md">
            <div className="space-y-4">
              <CustomInput label="Имя" placeholder="Введите ваше имя" />
              <CustomInput label="Email" type="email" placeholder="email@example.com" />
              <CustomInput label="Телефон" type="tel" placeholder="+7 (999) 123-45-67" />

              <div className="flex gap-3 justify-end pt-4">
                <CustomButton variant="ghost" onClick={() => setDialogOpen(false)}>
                  Отмена
                </CustomButton>
                <CustomButton variant="primary" onClick={() => setDialogOpen(false)}>
                  Сохранить
                </CustomButton>
              </div>
            </div>
          </CustomDialog>

          {/* Confirmation Dialog */}
          <CustomDialog
            open={confirmDialogOpen}
            onClose={() => setConfirmDialogOpen(false)}
            title="Подтверждение удаления"
            size="sm"
          >
            <div className="space-y-4">
              <p className="text-gray-600">
                Вы уверены, что хотите удалить этот элемент? Это действие нельзя отменить.
              </p>

              <div className="flex gap-3 justify-end">
                <CustomButton variant="secondary" onClick={() => setConfirmDialogOpen(false)}>
                  Отмена
                </CustomButton>
                <CustomButton
                  variant="primary"
                  borderColor="#ef4444"
                  backgroundColor="#ef4444"
                  onClick={() => setConfirmDialogOpen(false)}
                >
                  Удалить
                </CustomButton>
              </div>
            </div>
          </CustomDialog>
        </section>

        {/* Accordion */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-gray-800">Accordion (Аккордеон)</h2>

          <div className="space-y-4">
            <h3 className="text-lg font-medium">Базовый пример</h3>
            <CustomAccordion>
              <AccordionItem title="Что такое React?" defaultOpen>
                <p>
                  React — это JavaScript-библиотека для создания пользовательских интерфейсов. Она позволяет создавать
                  интерактивные UI из небольших изолированных кусочков кода, называемых «компонентами».
                </p>
              </AccordionItem>

              <AccordionItem title="Как работают хуки?">
                <p>
                  Хуки — это функции, которые позволяют «подцепиться» к возможностям React (например, к состоянию) из
                  функциональных компонентов. Хуки позволяют использовать состояние и другие возможности React без
                  написания классов.
                </p>
              </AccordionItem>

              <AccordionItem title="Что такое JSX?">
                <p>
                  JSX — это расширение синтаксиса JavaScript. Мы рекомендуем использовать его с React для описания того,
                  как должен выглядеть UI. JSX может напомнить вам язык шаблонов, но он обладает всей мощью JavaScript.
                </p>
              </AccordionItem>

              <AccordionItem title="Отключенный элемент" disabled>
                <p>Этот контент недоступен.</p>
              </AccordionItem>
            </CustomAccordion>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-medium">Множественное раскрытие</h3>
            <CustomAccordion allowMultiple>
              <AccordionItem title="Настройки аккаунта">
                <div className="space-y-3">
                  <CustomInput label="Имя пользователя" placeholder="username" />
                  <CustomInput label="Email" type="email" placeholder="email@example.com" />
                  <CustomButton variant="primary" size="sm">
                    Сохранить
                  </CustomButton>
                </div>
              </AccordionItem>

              <AccordionItem title="Уведомления">
                <div className="space-y-2">
                  <label className="flex items-center gap-2">
                    <input type="checkbox" defaultChecked />
                    <span>Email уведомления</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="checkbox" />
                    <span>Push уведомления</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="checkbox" defaultChecked />
                    <span>SMS уведомления</span>
                  </label>
                </div>
              </AccordionItem>

              <AccordionItem title="Безопасность">
                <div className="space-y-3">
                  <CustomInput label="Текущий пароль" type="password" />
                  <CustomInput label="Новый пароль" type="password" />
                  <CustomInput label="Подтвердите пароль" type="password" />
                  <CustomButton variant="primary" size="sm">
                    Изменить пароль
                  </CustomButton>
                </div>
              </AccordionItem>
            </CustomAccordion>
          </div>
        </section>

        {/* Tabs */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-gray-800">Tabs (Вкладки)</h2>

          <div className="space-y-4">
            <h3 className="text-lg font-medium">Базовый пример</h3>
            <CustomTabs>
              <Tab label="Профиль" icon={<User className="w-4 h-4" />}>
                <CustomCard>
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Информация профиля</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <CustomInput label="Имя" defaultValue="Иван" />
                      <CustomInput label="Фамилия" defaultValue="Петров" />
                      <CustomInput label="Email" type="email" defaultValue="ivan@example.com" />
                      <CustomInput label="Телефон" type="tel" defaultValue="+7 (999) 123-45-67" />
                    </div>
                    <CustomButton variant="primary">Сохранить изменения</CustomButton>
                  </div>
                </CustomCard>
              </Tab>

              <Tab label="Настройки" icon={<Settings className="w-4 h-4" />}>
                <CustomCard>
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Настройки приложения</h3>
                    <div className="space-y-3">
                      <label className="flex items-center justify-between">
                        <span>Темная тема</span>
                        <input type="checkbox" />
                      </label>
                      <label className="flex items-center justify-between">
                        <span>Автосохранение</span>
                        <input type="checkbox" defaultChecked />
                      </label>
                      <label className="flex items-center justify-between">
                        <span>Показывать подсказки</span>
                        <input type="checkbox" defaultChecked />
                      </label>
                    </div>
                  </div>
                </CustomCard>
              </Tab>

              <Tab label="Уведомления" icon={<Bell className="w-4 h-4" />}>
                <CustomCard>
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Настройки уведомлений</h3>
                    <CustomAccordion>
                      <AccordionItem title="Email уведомления">
                        <div className="space-y-2">
                          <label className="flex items-center gap-2">
                            <input type="checkbox" defaultChecked />
                            <span>Новые сообщения</span>
                          </label>
                          <label className="flex items-center gap-2">
                            <input type="checkbox" />
                            <span>Обновления системы</span>
                          </label>
                        </div>
                      </AccordionItem>
                      <AccordionItem title="Push уведомления">
                        <div className="space-y-2">
                          <label className="flex items-center gap-2">
                            <input type="checkbox" defaultChecked />
                            <span>Важные уведомления</span>
                          </label>
                          <label className="flex items-center gap-2">
                            <input type="checkbox" defaultChecked />
                            <span>Напоминания</span>
                          </label>
                        </div>
                      </AccordionItem>
                    </CustomAccordion>
                  </div>
                </CustomCard>
              </Tab>

              <Tab label="Отключено" disabled>
                <div>Этот контент недоступен</div>
              </Tab>
            </CustomTabs>
          </div>
        </section>

        {/* Props Documentation */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-gray-800">Документация API</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Card Props */}
            <CustomCard>
              <h3 className="text-lg font-semibold mb-4">CustomCard Props</h3>
              <div className="space-y-3 text-sm">
                <div>
                  <code className="bg-gray-100 px-2 py-1 rounded">variant</code>
                  <span className="ml-2 text-gray-600">"outlined" | "filled" | "elevated"</span>
                  <p className="text-gray-500 mt-1">Стиль карточки. По умолчанию "outlined"</p>
                </div>
                <div>
                  <code className="bg-gray-100 px-2 py-1 rounded">size</code>
                  <span className="ml-2 text-gray-600">"sm" | "md" | "lg"</span>
                  <p className="text-gray-500 mt-1">Размер скосов. По умолчанию "md"</p>
                </div>
                <div>
                  <code className="bg-gray-100 px-2 py-1 rounded">padding</code>
                  <span className="ml-2 text-gray-600">boolean</span>
                  <p className="text-gray-500 mt-1">Добавлять внутренние отступы. По умолчанию true</p>
                </div>
                <div>
                  <code className="bg-gray-100 px-2 py-1 rounded">borderColor</code>
                  <span className="ml-2 text-gray-600">string</span>
                  <p className="text-gray-500 mt-1">Кастомный цвет рамки</p>
                </div>
                <div>
                  <code className="bg-gray-100 px-2 py-1 rounded">backgroundColor</code>
                  <span className="ml-2 text-gray-600">string</span>
                  <p className="text-gray-500 mt-1">Кастомный цвет фона</p>
                </div>
              </div>
            </CustomCard>

            {/* Dialog Props */}
            <CustomCard>
              <h3 className="text-lg font-semibold mb-4">CustomDialog Props</h3>
              <div className="space-y-3 text-sm">
                <div>
                  <code className="bg-gray-100 px-2 py-1 rounded">open</code>
                  <span className="ml-2 text-gray-600">boolean</span>
                  <p className="text-gray-500 mt-1">Состояние открытия диалога</p>
                </div>
                <div>
                  <code className="bg-gray-100 px-2 py-1 rounded">onClose</code>
                  <span className="ml-2 text-gray-600">() =&gt; void</span>
                  <p className="text-gray-500 mt-1">Функция закрытия диалога</p>
                </div>
                <div>
                  <code className="bg-gray-100 px-2 py-1 rounded">title</code>
                  <span className="ml-2 text-gray-600">string</span>
                  <p className="text-gray-500 mt-1">Заголовок диалога</p>
                </div>
                <div>
                  <code className="bg-gray-100 px-2 py-1 rounded">size</code>
                  <span className="ml-2 text-gray-600">"sm" | "md" | "lg" | "xl"</span>
                  <p className="text-gray-500 mt-1">Размер диалога. По умолчанию "md"</p>
                </div>
                <div>
                  <code className="bg-gray-100 px-2 py-1 rounded">closeOnOverlayClick</code>
                  <span className="ml-2 text-gray-600">boolean</span>
                  <p className="text-gray-500 mt-1">Закрывать при клике на overlay. По умолчанию true</p>
                </div>
              </div>
            </CustomCard>

            {/* Accordion Props */}
            <CustomCard>
              <h3 className="text-lg font-semibold mb-4">CustomAccordion Props</h3>
              <div className="space-y-3 text-sm">
                <div>
                  <code className="bg-gray-100 px-2 py-1 rounded">allowMultiple</code>
                  <span className="ml-2 text-gray-600">boolean</span>
                  <p className="text-gray-500 mt-1">Разрешить открытие нескольких элементов. По умолчанию false</p>
                </div>
                <div>
                  <code className="bg-gray-100 px-2 py-1 rounded">size</code>
                  <span className="ml-2 text-gray-600">"sm" | "md" | "lg"</span>
                  <p className="text-gray-500 mt-1">Размер скосов. По умолчанию "md"</p>
                </div>
              </div>
              <h4 className="text-md font-semibold mt-4 mb-2">AccordionItem Props</h4>
              <div className="space-y-3 text-sm">
                <div>
                  <code className="bg-gray-100 px-2 py-1 rounded">title</code>
                  <span className="ml-2 text-gray-600">string</span>
                  <p className="text-gray-500 mt-1">Заголовок элемента</p>
                </div>
                <div>
                  <code className="bg-gray-100 px-2 py-1 rounded">defaultOpen</code>
                  <span className="ml-2 text-gray-600">boolean</span>
                  <p className="text-gray-500 mt-1">Открыт по умолчанию. По умолчанию false</p>
                </div>
                <div>
                  <code className="bg-gray-100 px-2 py-1 rounded">disabled</code>
                  <span className="ml-2 text-gray-600">boolean</span>
                  <p className="text-gray-500 mt-1">Отключить элемент. По умолчанию false</p>
                </div>
              </div>
            </CustomCard>

            {/* Tabs Props */}
            <CustomCard>
              <h3 className="text-lg font-semibold mb-4">CustomTabs Props</h3>
              <div className="space-y-3 text-sm">
                <div>
                  <code className="bg-gray-100 px-2 py-1 rounded">defaultValue</code>
                  <span className="ml-2 text-gray-600">number</span>
                  <p className="text-gray-500 mt-1">Индекс активной вкладки по умолчанию. По умолчанию 0</p>
                </div>
                <div>
                  <code className="bg-gray-100 px-2 py-1 rounded">size</code>
                  <span className="ml-2 text-gray-600">"sm" | "md" | "lg"</span>
                  <p className="text-gray-500 mt-1">Размер вкладок. По умолчанию "md"</p>
                </div>
                <div>
                  <code className="bg-gray-100 px-2 py-1 rounded">variant</code>
                  <span className="ml-2 text-gray-600">"outlined" | "filled"</span>
                  <p className="text-gray-500 mt-1">Стиль активной вкладки. По умолчанию "outlined"</p>
                </div>
                <div>
                  <code className="bg-gray-100 px-2 py-1 rounded">onChange</code>
                  <span className="ml-2 text-gray-600">(index: number) =&gt; void</span>
                  <p className="text-gray-500 mt-1">Callback при смене вкладки</p>
                </div>
              </div>
              <h4 className="text-md font-semibold mt-4 mb-2">Tab Props</h4>
              <div className="space-y-3 text-sm">
                <div>
                  <code className="bg-gray-100 px-2 py-1 rounded">label</code>
                  <span className="ml-2 text-gray-600">string</span>
                  <p className="text-gray-500 mt-1">Текст вкладки</p>
                </div>
                <div>
                  <code className="bg-gray-100 px-2 py-1 rounded">icon</code>
                  <span className="ml-2 text-gray-600">React.ReactNode</span>
                  <p className="text-gray-500 mt-1">Иконка вкладки</p>
                </div>
                <div>
                  <code className="bg-gray-100 px-2 py-1 rounded">disabled</code>
                  <span className="ml-2 text-gray-600">boolean</span>
                  <p className="text-gray-500 mt-1">Отключить вкладку. По умолчанию false</p>
                </div>
              </div>
            </CustomCard>
          </div>
        </section>
      </div>
    </div>
  )
}
