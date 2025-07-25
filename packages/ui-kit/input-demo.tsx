"use client"

import CustomInput from "./custom-input"
import CustomRadio from "./custom-radio"
import CustomTextarea from "./custom-textarea"
import CustomSelect from "./custom-select"
import { Search, Mail, User, Lock, Phone, MapPin, Calendar, DollarSign } from "lucide-react"
import { useState } from "react"

export default function InputDemo() {
  const [searchValue, setSearchValue] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [name, setName] = useState("")
  const [radioValue, setRadioValue] = useState("")
  const [textareaValue, setTextareaValue] = useState("")
  const [selectValue, setSelectValue] = useState("")
  const [multiSelectValue, setMultiSelectValue] = useState<string[]>([])

  const radioOptions = [
    { value: "option1", label: "Первый вариант" },
    { value: "option2", label: "Второй вариант" },
    { value: "option3", label: "Третий вариант" },
    { value: "option4", label: "Отключенный вариант", disabled: true },
  ]

  const selectOptions = [
    { value: "moscow", label: "Москва" },
    { value: "spb", label: "Санкт-Петербург" },
    { value: "ekb", label: "Екатеринбург" },
    { value: "nsk", label: "Новосибирск" },
    { value: "kzn", label: "Казань" },
    { value: "nn", label: "Нижний Новгород" },
    { value: "disabled", label: "Отключенный город", disabled: true },
  ]

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-[#292D30] mb-4">Поля ввода со скосами</h1>
          <p className="text-gray-600">Полный набор элементов форм в едином стиле</p>
        </div>

        {/* Основные инпуты */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-[#292D30]">Текстовые поля</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <CustomInput variant="outlined" placeholder="Outlined input" label="Outlined" />
            <CustomInput variant="filled" placeholder="Filled input" label="Filled" />
            <CustomInput variant="ghost" placeholder="Ghost input" label="Ghost" />
          </div>
        </section>

        {/* Размеры */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-[#292D30]">Размеры</h2>
          <div className="space-y-4">
            <CustomInput size="sm" placeholder="Small input" label="Small" />
            <CustomInput size="md" placeholder="Medium input" label="Medium" />
            <CustomInput size="lg" placeholder="Large input" label="Large" />
          </div>
        </section>

        {/* С иконками */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-[#292D30]">С иконками</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <CustomInput
              leftIcon={<Search />}
              placeholder="Поиск..."
              label="Поиск"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              clearable
              onClear={() => setSearchValue("")}
            />
            <CustomInput
              leftIcon={<Mail />}
              placeholder="email@example.com"
              label="Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <CustomInput
              leftIcon={<User />}
              placeholder="Ваше имя"
              label="Имя"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <CustomInput
              leftIcon={<Lock />}
              placeholder="Пароль"
              label="Пароль"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </section>

        {/* Radio кнопки */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-[#292D30]">Radio кнопки</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-[#292D30]">Вертикальное расположение</h3>
              <CustomRadio
                options={radioOptions}
                value={radioValue}
                onChange={setRadioValue}
                name="vertical-radio"
                label="Выберите вариант"
                orientation="vertical"
              />
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-[#292D30]">Горизонтальное расположение</h3>
              <CustomRadio
                options={radioOptions.slice(0, 3)}
                value={radioValue}
                onChange={setRadioValue}
                name="horizontal-radio"
                label="Выберите вариант"
                orientation="horizontal"
              />
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-medium text-[#292D30]">Размеры</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <CustomRadio options={radioOptions.slice(0, 2)} name="small-radio" label="Small" size="sm" />
              <CustomRadio options={radioOptions.slice(0, 2)} name="medium-radio" label="Medium" size="md" />
              <CustomRadio options={radioOptions.slice(0, 2)} name="large-radio" label="Large" size="lg" />
            </div>
          </div>
        </section>

        {/* Textarea */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-[#292D30]">Многострочные поля</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <CustomTextarea
              label="Обычная textarea"
              placeholder="Введите ваш текст..."
              value={textareaValue}
              onChange={(e) => setTextareaValue(e.target.value)}
              minRows={3}
            />
            <CustomTextarea
              label="Автоматическое изменение размера"
              placeholder="Текст будет расширяться автоматически..."
              autoResize
              minRows={2}
              maxRows={6}
            />
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-medium text-[#292D30]">Варианты и размеры</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <CustomTextarea variant="outlined" label="Outlined" placeholder="Outlined textarea" size="sm" />
              <CustomTextarea variant="filled" label="Filled" placeholder="Filled textarea" size="md" />
              <CustomTextarea variant="ghost" label="Ghost" placeholder="Ghost textarea" size="lg" />
            </div>
          </div>
        </section>

        {/* Select */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-[#292D30]">Выпадающие списки</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <CustomSelect
              options={selectOptions}
              value={selectValue}
              onChange={(value) => setSelectValue(value as string)}
              label="Обычный select"
              placeholder="Выберите город"
            />
            <CustomSelect
              options={selectOptions}
              value={multiSelectValue}
              onChange={(value) => setMultiSelectValue(value as string[])}
              label="Множественный выбор"
              placeholder="Выберите города"
              multiple
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <CustomSelect
              options={selectOptions}
              label="С поиском"
              placeholder="Поиск города..."
              searchable
              clearable
            />
            <CustomSelect
              options={selectOptions}
              label="Все возможности"
              placeholder="Выберите города"
              multiple
              searchable
              clearable
            />
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-medium text-[#292D30]">Варианты и размеры</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <CustomSelect
                options={selectOptions.slice(0, 3)}
                variant="outlined"
                size="sm"
                label="Small Outlined"
                placeholder="Выберите..."
              />
              <CustomSelect
                options={selectOptions.slice(0, 3)}
                variant="filled"
                size="md"
                label="Medium Filled"
                placeholder="Выберите..."
              />
              <CustomSelect
                options={selectOptions.slice(0, 3)}
                variant="ghost"
                size="lg"
                label="Large Ghost"
                placeholder="Выберите..."
              />
            </div>
          </div>
        </section>

        {/* Состояния */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-[#292D30]">Состояния полей</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <CustomInput placeholder="Обычное состояние" label="Normal" />
            <CustomInput placeholder="Отключенный инпут" label="Disabled" disabled />
            <CustomInput placeholder="С ошибкой" label="Error" error="Это поле обязательно для заполнения" />
            <CustomInput placeholder="С подсказкой" label="Helper Text" helperText="Введите ваш номер телефона" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <CustomRadio options={radioOptions} name="disabled-radio" label="Отключенные radio" disabled />
            <CustomRadio
              options={radioOptions}
              name="error-radio"
              label="Radio с ошибкой"
              error="Выберите один из вариантов"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <CustomTextarea placeholder="Отключенная textarea" label="Disabled Textarea" disabled />
            <CustomTextarea placeholder="Textarea с ошибкой" label="Error Textarea" error="Поле не может быть пустым" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <CustomSelect options={selectOptions} label="Отключенный select" placeholder="Недоступно" disabled />
            <CustomSelect
              options={selectOptions}
              label="Select с ошибкой"
              placeholder="Выберите город"
              error="Обязательное поле"
            />
          </div>
        </section>

        {/* Специальные типы */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-[#292D30]">Специальные типы</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <CustomInput leftIcon={<Phone />} placeholder="+7 (999) 123-45-67" label="Телефон" type="tel" />
            <CustomInput leftIcon={<MapPin />} placeholder="Москва, Россия" label="Адрес" />
            <CustomInput leftIcon={<Calendar />} label="Дата рождения" type="date" />
            <CustomInput leftIcon={<DollarSign />} placeholder="0.00" label="Сумма" type="number" />
          </div>
        </section>

        {/* Кастомные цвета */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-[#292D30]">Кастомные цвета</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <CustomInput variant="outlined" borderColor="#AFEB0F" placeholder="Брендовый цвет" label="Brand" />
            <CustomInput variant="outlined" borderColor="#ef4444" placeholder="Красный цвет" label="Error" />
            <CustomInput variant="outlined" borderColor="#10b981" placeholder="Зеленый цвет" label="Success" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <CustomRadio options={radioOptions.slice(0, 2)} name="brand-radio" label="Брендовые radio" />
            <CustomTextarea borderColor="#AFEB0F" placeholder="Брендовая textarea" label="Brand Textarea" />
            <CustomSelect
              options={selectOptions.slice(0, 3)}
              borderColor="#AFEB0F"
              placeholder="Брендовый select"
              label="Brand Select"
            />
          </div>
        </section>

        {/* Адаптивные примеры */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-[#292D30]">Адаптивные формы</h2>

          {/* Мобильная форма */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-[#292D30]">Мобильная форма</h3>
            <div className="max-w-sm mx-auto space-y-4">
              <CustomInput size="sm" leftIcon={<User />} placeholder="Имя" label="Имя" />
              <CustomInput size="sm" leftIcon={<Mail />} placeholder="Email" label="Email" type="email" />
              <CustomRadio
                options={[
                  { value: "male", label: "Мужской" },
                  { value: "female", label: "Женский" },
                ]}
                name="mobile-gender"
                label="Пол"
                orientation="horizontal"
                size="sm"
              />
              <CustomTextarea size="sm" placeholder="Комментарий" label="Комментарий" minRows={2} />
            </div>
          </div>

          {/* Планшетная форма */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-[#292D30]">Планшетная форма</h3>
            <div className="max-w-2xl mx-auto">
              <div className="grid grid-cols-2 gap-4">
                <CustomInput leftIcon={<User />} placeholder="Имя" label="Имя" />
                <CustomInput leftIcon={<User />} placeholder="Фамилия" label="Фамилия" />
                <CustomInput leftIcon={<Mail />} placeholder="Email" label="Email" type="email" />
                <CustomInput leftIcon={<Phone />} placeholder="Телефон" label="Телефон" type="tel" />
              </div>
              <div className="mt-4 grid grid-cols-2 gap-4">
                <CustomSelect options={selectOptions} placeholder="Выберите город" label="Город" />
                <CustomRadio
                  options={[
                    { value: "yes", label: "Да" },
                    { value: "no", label: "Нет" },
                  ]}
                  name="tablet-subscribe"
                  label="Подписка на новости"
                  orientation="horizontal"
                />
              </div>
            </div>
          </div>

          {/* Десктопная форма */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-[#292D30]">Десктопная форма</h3>
            <div className="grid grid-cols-3 gap-6">
              <CustomInput leftIcon={<User />} placeholder="Имя" label="Имя" />
              <CustomInput leftIcon={<User />} placeholder="Фамилия" label="Фамилия" />
              <CustomInput leftIcon={<User />} placeholder="Отчество" label="Отчество" />
              <CustomInput leftIcon={<Mail />} placeholder="Email" label="Email" type="email" />
              <CustomInput leftIcon={<Phone />} placeholder="Телефон" label="Телефон" type="tel" />
              <CustomInput leftIcon={<Calendar />} label="Дата рождения" type="date" />
            </div>
            <div className="grid grid-cols-2 gap-6">
              <CustomSelect options={selectOptions} placeholder="Выберите город" label="Город проживания" searchable />
              <CustomRadio
                options={[
                  { value: "male", label: "Мужской" },
                  { value: "female", label: "Женский" },
                  { value: "other", label: "Другой" },
                ]}
                name="desktop-gender"
                label="Пол"
                orientation="horizontal"
              />
            </div>
            <CustomTextarea placeholder="Расскажите о себе..." label="О себе" autoResize minRows={3} maxRows={6} />
          </div>
        </section>

        {/* Форма входа */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-[#292D30]">Пример формы входа</h2>
          <div className="bg-white p-6 rounded-lg border max-w-md mx-auto">
            <h3 className="text-lg font-medium mb-4 text-[#292D30]">Вход в систему</h3>
            <div className="space-y-4">
              <CustomInput leftIcon={<Mail />} placeholder="email@example.com" label="Email" type="email" required />
              <CustomInput leftIcon={<Lock />} placeholder="Введите пароль" label="Пароль" type="password" required />
              <CustomRadio options={[{ value: "remember", label: "Запомнить меня" }]} name="remember-me" size="sm" />
              <div className="pt-2">
                <button className="w-full bg-[#AFEB0F] text-[#292D30] py-2 px-4 rounded hover:bg-[#9DD60E] transition-colors font-semibold">
                  Войти
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* На темном фоне */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-[#292D30]">На темном фоне</h2>
          <div className="bg-[#292D30] p-6 rounded-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <CustomInput
                variant="outlined"
                borderColor="#ffffff"
                textColor="#ffffff"
                placeholder="Белая рамка"
                label="White Border"
                className="placeholder:text-gray-300"
              />
              <CustomInput
                variant="filled"
                borderColor="#AFEB0F"
                backgroundColor="#AFEB0F"
                textColor="#292D30"
                placeholder="Брендовый цвет"
                label="Brand Color"
                className="placeholder:text-gray-600"
              />
            </div>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
              <CustomTextarea
                variant="outlined"
                borderColor="#ffffff"
                textColor="#ffffff"
                placeholder="Белая textarea"
                label="White Textarea"
                className="placeholder:text-gray-300"
              />
              <CustomSelect
                options={selectOptions.slice(0, 3)}
                borderColor="#AFEB0F"
                textColor="#ffffff"
                placeholder="Брендовый select"
                label="Brand Select"
              />
            </div>
          </div>
        </section>

        {/* Документация API */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-[#292D30]">Документация API</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Input Props */}
            <div className="bg-white p-6 rounded-lg border">
              <h3 className="text-lg font-semibold mb-4 text-[#292D30]">CustomInput Props</h3>
              <div className="space-y-3 text-sm">
                <div>
                  <code className="bg-gray-100 px-2 py-1 rounded text-[#292D30]">variant</code>
                  <span className="ml-2 text-gray-600">"outlined" | "filled" | "ghost"</span>
                  <p className="text-gray-500 mt-1">Стиль поля. По умолчанию "outlined"</p>
                </div>
                <div>
                  <code className="bg-gray-100 px-2 py-1 rounded text-[#292D30]">size</code>
                  <span className="ml-2 text-gray-600">"sm" | "md" | "lg"</span>
                  <p className="text-gray-500 mt-1">Размер поля. По умолчанию "md"</p>
                </div>
                <div>
                  <code className="bg-gray-100 px-2 py-1 rounded text-[#292D30]">leftIcon</code>
                  <span className="ml-2 text-gray-600">React.ReactNode</span>
                  <p className="text-gray-500 mt-1">Иконка слева</p>
                </div>
                <div>
                  <code className="bg-gray-100 px-2 py-1 rounded text-[#292D30]">clearable</code>
                  <span className="ml-2 text-gray-600">boolean</span>
                  <p className="text-gray-500 mt-1">Кнопка очистки</p>
                </div>
              </div>
            </div>

            {/* Radio Props */}
            <div className="bg-white p-6 rounded-lg border">
              <h3 className="text-lg font-semibold mb-4 text-[#292D30]">CustomRadio Props</h3>
              <div className="space-y-3 text-sm">
                <div>
                  <code className="bg-gray-100 px-2 py-1 rounded text-[#292D30]">options</code>
                  <span className="ml-2 text-gray-600">RadioOption[]</span>
                  <p className="text-gray-500 mt-1">Массив опций</p>
                </div>
                <div>
                  <code className="bg-gray-100 px-2 py-1 rounded text-[#292D30]">orientation</code>
                  <span className="ml-2 text-gray-600">"horizontal" | "vertical"</span>
                  <p className="text-gray-500 mt-1">Расположение. По умолчанию "vertical"</p>
                </div>
                <div>
                  <code className="bg-gray-100 px-2 py-1 rounded text-[#292D30]">name</code>
                  <span className="ml-2 text-gray-600">string</span>
                  <p className="text-gray-500 mt-1">Имя группы (обязательно)</p>
                </div>
              </div>
            </div>

            {/* Textarea Props */}
            <div className="bg-white p-6 rounded-lg border">
              <h3 className="text-lg font-semibold mb-4 text-[#292D30]">CustomTextarea Props</h3>
              <div className="space-y-3 text-sm">
                <div>
                  <code className="bg-gray-100 px-2 py-1 rounded text-[#292D30]">autoResize</code>
                  <span className="ml-2 text-gray-600">boolean</span>
                  <p className="text-gray-500 mt-1">Автоматическое изменение размера</p>
                </div>
                <div>
                  <code className="bg-gray-100 px-2 py-1 rounded text-[#292D30]">minRows</code>
                  <span className="ml-2 text-gray-600">number</span>
                  <p className="text-gray-500 mt-1">Минимальное количество строк</p>
                </div>
                <div>
                  <code className="bg-gray-100 px-2 py-1 rounded text-[#292D30]">maxRows</code>
                  <span className="ml-2 text-gray-600">number</span>
                  <p className="text-gray-500 mt-1">Максимальное количество строк</p>
                </div>
              </div>
            </div>

            {/* Select Props */}
            <div className="bg-white p-6 rounded-lg border">
              <h3 className="text-lg font-semibold mb-4 text-[#292D30]">CustomSelect Props</h3>
              <div className="space-y-3 text-sm">
                <div>
                  <code className="bg-gray-100 px-2 py-1 rounded text-[#292D30]">multiple</code>
                  <span className="ml-2 text-gray-600">boolean</span>
                  <p className="text-gray-500 mt-1">Множественный выбор</p>
                </div>
                <div>
                  <code className="bg-gray-100 px-2 py-1 rounded text-[#292D30]">searchable</code>
                  <span className="ml-2 text-gray-600">boolean</span>
                  <p className="text-gray-500 mt-1">Поиск по опциям</p>
                </div>
                <div>
                  <code className="bg-gray-100 px-2 py-1 rounded text-[#292D30]">clearable</code>
                  <span className="ml-2 text-gray-600">boolean</span>
                  <p className="text-gray-500 mt-1">Кнопка очистки</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
