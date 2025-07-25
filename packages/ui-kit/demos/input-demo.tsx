"use client"

import CustomInput from "../components/custom-input"
import CustomRadio from "../components/custom-radio"
import CustomTextarea from "../components/custom-textarea"
import CustomSelect from "../components/custom-select"
import CustomCard from "../components/custom-card"
import CustomButton from "../components/custom-button"
import { Search, User, Mail, Lock, Eye, EyeOff } from "lucide-react"
import { useState } from "react"

export default function InputDemo() {
  const [showPassword, setShowPassword] = useState(false)
  const [selectedRadio, setSelectedRadio] = useState("option1")
  const [selectedSelect, setSelectedSelect] = useState("")

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-[#292D30] mb-4">Инпуты со скосами</h1>
          <p className="text-gray-600">Поля ввода с уникальным дизайном</p>
        </div>

        {/* Основные варианты */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-[#292D30]">Основные варианты</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <CustomCard>
              <h3 className="text-lg font-semibold mb-4 text-[#292D30]">Outlined</h3>
              <div className="space-y-4">
                <CustomInput variant="outlined" placeholder="Обычный инпут" />
                <CustomInput variant="outlined" placeholder="С иконкой" icon={<User className="w-4 h-4" />} />
                <CustomInput variant="outlined" type="email" placeholder="Email" icon={<Mail className="w-4 h-4" />} />
              </div>
            </CustomCard>

            <CustomCard>
              <h3 className="text-lg font-semibold mb-4 text-[#292D30]">Filled</h3>
              <div className="space-y-4">
                <CustomInput variant="filled" placeholder="Заполненный инпут" />
                <CustomInput variant="filled" placeholder="Поиск" icon={<Search className="w-4 h-4" />} />
                <CustomInput
                  variant="filled"
                  type="password"
                  placeholder="Пароль"
                  icon={<Lock className="w-4 h-4" />}
                />
              </div>
            </CustomCard>

            <CustomCard>
              <h3 className="text-lg font-semibold mb-4 text-[#292D30]">Standard</h3>
              <div className="space-y-4">
                <CustomInput variant="standard" placeholder="Стандартный инпут" />
                <CustomInput variant="standard" placeholder="С лейблом" label="Имя пользователя" />
                <CustomInput variant="standard" placeholder="С помощью" helperText="Введите ваше имя" />
              </div>
            </CustomCard>
          </div>
        </section>

        {/* Размеры */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-[#292D30]">Размеры</h2>
          <CustomCard>
            <div className="space-y-4">
              <CustomInput size="sm" placeholder="Маленький инпут" />
              <CustomInput size="md" placeholder="Средний инпут" />
              <CustomInput size="lg" placeholder="Большой инпут" />
            </div>
          </CustomCard>
        </section>

        {/* Состояния */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-[#292D30]">Состояния</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <CustomCard>
              <h3 className="text-lg font-semibold mb-4 text-[#292D30]">Обычные состояния</h3>
              <div className="space-y-4">
                <CustomInput placeholder="Обычный инпут" />
                <CustomInput placeholder="Отключенный инпут" disabled />
                <CustomInput placeholder="Только чтение" readOnly value="Только для чтения" />
              </div>
            </CustomCard>

            <CustomCard>
              <h3 className="text-lg font-semibold mb-4 text-[#292D30]">Состояния валидации</h3>
              <div className="space-y-4">
                <CustomInput placeholder="Успешная валидация" error={false} helperText="Все хорошо!" />
                <CustomInput placeholder="Ошибка валидации" error={true} helperText="Поле обязательно для заполнения" />
              </div>
            </CustomCard>
          </div>
        </section>

        {/* Специальные инпуты */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-[#292D30]">Специальные инпуты</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <CustomCard>
              <h3 className="text-lg font-semibold mb-4 text-[#292D30]">Пароль с показом</h3>
              <div className="relative">
                <CustomInput
                  type={showPassword ? "text" : "password"}
                  placeholder="Введите пароль"
                  icon={<Lock className="w-4 h-4" />}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </CustomCard>

            <CustomCard>
              <h3 className="text-lg font-semibold mb-4 text-[#292D30]">Поиск с кнопкой</h3>
              <div className="flex gap-2">
                <CustomInput placeholder="Поиск..." icon={<Search className="w-4 h-4" />} className="flex-1" />
                <CustomButton variant="primary">Найти</CustomButton>
              </div>
            </CustomCard>
          </div>
        </section>

        {/* Radio buttons */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-[#292D30]">Radio кнопки</h2>
          <CustomCard>
            <h3 className="text-lg font-semibold mb-4 text-[#292D30]">Выберите опцию</h3>
            <div className="space-y-3">
              <CustomRadio
                name="demo-radio"
                value="option1"
                checked={selectedRadio === "option1"}
                onChange={(e) => setSelectedRadio(e.target.value)}
                label="Первая опция"
              />
              <CustomRadio
                name="demo-radio"
                value="option2"
                checked={selectedRadio === "option2"}
                onChange={(e) => setSelectedRadio(e.target.value)}
                label="Вторая опция"
              />
              <CustomRadio
                name="demo-radio"
                value="option3"
                checked={selectedRadio === "option3"}
                onChange={(e) => setSelectedRadio(e.target.value)}
                label="Третья опция"
                disabled
              />
            </div>
          </CustomCard>
        </section>

        {/* Textarea */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-[#292D30]">Текстовые области</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <CustomCard>
              <h3 className="text-lg font-semibold mb-4 text-[#292D30]">Обычная textarea</h3>
              <CustomTextarea placeholder="Введите ваш комментарий..." rows={4} />
            </CustomCard>

            <CustomCard>
              <h3 className="text-lg font-semibold mb-4 text-[#292D30]">С лейблом и подсказкой</h3>
              <CustomTextarea
                label="Сообщение"
                placeholder="Введите ваше сообщение..."
                helperText="Максимум 500 символов"
                rows={4}
              />
            </CustomCard>
          </div>
        </section>

        {/* Select */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-[#292D30]">Выпадающие списки</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <CustomCard>
              <h3 className="text-lg font-semibold mb-4 text-[#292D30]">Обычный select</h3>
              <CustomSelect
                value={selectedSelect}
                onChange={(e) => setSelectedSelect(e.target.value)}
                placeholder="Выберите опцию"
                options={[
                  { value: "option1", label: "Первая опция" },
                  { value: "option2", label: "Вторая опция" },
                  { value: "option3", label: "Третья опция" },
                ]}
              />
            </CustomCard>

            <CustomCard>
              <h3 className="text-lg font-semibold mb-4 text-[#292D30]">С лейблом</h3>
              <CustomSelect
                label="Категория"
                value={selectedSelect}
                onChange={(e) => setSelectedSelect(e.target.value)}
                placeholder="Выберите категорию"
                options={[
                  { value: "tech", label: "Технологии" },
                  { value: "design", label: "Дизайн" },
                  { value: "business", label: "Бизнес" },
                ]}
              />
            </CustomCard>
          </div>
        </section>

        {/* Форма */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-[#292D30]">Пример формы</h2>
          <CustomCard>
            <h3 className="text-lg font-semibold mb-6 text-[#292D30]">Регистрация</h3>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <CustomInput label="Имя" placeholder="Введите имя" icon={<User className="w-4 h-4" />} />
                <CustomInput
                  label="Email"
                  type="email"
                  placeholder="Введите email"
                  icon={<Mail className="w-4 h-4" />}
                />
              </div>
              <CustomInput
                label="Пароль"
                type="password"
                placeholder="Введите пароль"
                icon={<Lock className="w-4 h-4" />}
              />
              <CustomSelect
                label="Страна"
                placeholder="Выберите страну"
                options={[
                  { value: "ru", label: "Россия" },
                  { value: "us", label: "США" },
                  { value: "de", label: "Германия" },
                ]}
              />
              <CustomTextarea label="О себе" placeholder="Расскажите о себе..." rows={3} />
              <div className="flex gap-4">
                <CustomButton variant="primary" type="submit">
                  Зарегистрироваться
                </CustomButton>
                <CustomButton variant="outlined" type="button">
                  Отмена
                </CustomButton>
              </div>
            </form>
          </CustomCard>
        </section>
      </div>
    </div>
  )
}
