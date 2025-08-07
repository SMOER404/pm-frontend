"use client"

import CustomTypography from "../components/custom-typography"
import CustomCard from "../components/custom-card"

export default function TypographyDemo() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-[#292D30] mb-4">Типографика</h1>
          <p className="text-gray-600">Текстовые элементы с единым стилем</p>
        </div>

        {/* Заголовки */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-[#292D30]">Заголовки</h2>
          <CustomCard>
            <div className="space-y-4">
              <CustomTypography variant="h1">Заголовок H1</CustomTypography>
              <CustomTypography variant="h2">Заголовок H2</CustomTypography>
              <CustomTypography variant="h3">Заголовок H3</CustomTypography>
              <CustomTypography variant="h4">Заголовок H4</CustomTypography>
              <CustomTypography variant="h5">Заголовок H5</CustomTypography>
              <CustomTypography variant="h6">Заголовок H6</CustomTypography>
            </div>
          </CustomCard>
        </section>

        {/* Текст */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-[#292D30]">Текстовые элементы</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <CustomCard>
              <h3 className="text-lg font-semibold mb-4 text-[#292D30]">Основной текст</h3>
              <div className="space-y-4">
                <CustomTypography variant="body1">
                  Это основной текст (body1). Используется для большинства текстового контента.
                </CustomTypography>
                <CustomTypography variant="body2">
                  Это вторичный текст (body2). Используется для менее важной информации.
                </CustomTypography>
                <CustomTypography variant="caption">
                  Это подпись (caption). Используется для мелкого текста и подписей.
                </CustomTypography>
              </div>
            </CustomCard>

            <CustomCard>
              <h3 className="text-lg font-semibold mb-4 text-[#292D30]">Специальные варианты</h3>
              <div className="space-y-4">
                <CustomTypography variant="subtitle1">Подзаголовок 1 - для важных подзаголовков</CustomTypography>
                <CustomTypography variant="subtitle2">Подзаголовок 2 - для менее важных подзаголовков</CustomTypography>
                <CustomTypography variant="overline">OVERLINE - ДЛЯ КАТЕГОРИЙ И МЕТОК</CustomTypography>
              </div>
            </CustomCard>
          </div>
        </section>

        {/* Цвета */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-[#292D30]">Цветовые варианты</h2>
          <CustomCard>
            <div className="space-y-4">
              <CustomTypography variant="h4" color="primary">
                Основной цвет
              </CustomTypography>
              <CustomTypography variant="h4" color="secondary">
                Вторичный цвет
              </CustomTypography>
              <CustomTypography variant="h4" color="success">
                Цвет успеха
              </CustomTypography>
              <CustomTypography variant="h4" color="error">
                Цвет ошибки
              </CustomTypography>
              <CustomTypography variant="h4" color="warning">
                Цвет предупреждения
              </CustomTypography>
            </div>
          </CustomCard>
        </section>
      </div>
    </div>
  )
}
