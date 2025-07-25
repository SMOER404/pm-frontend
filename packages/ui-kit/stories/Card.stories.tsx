import React from "react"
import type { Meta, StoryObj } from "@storybook/react"
import CustomCard from "../components/custom-card"
import CustomTypography from "../components/custom-typography"
import CustomButton from "../components/custom-button"

const meta = {
  title: "Components/CustomCard",
  component: CustomCard,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "Кастомная карточка с скошенными углами для группировки контента.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "outlined", "elevated"],
      description: "Вариант стиля карточки",
    },
    padding: {
      control: "select",
      options: ["none", "sm", "md", "lg"],
      description: "Внутренние отступы",
    },
    borderColor: {
      control: "color",
      description: "Кастомный цвет рамки",
    },
    backgroundColor: {
      control: "color",
      description: "Кастомный цвет фона",
    },
  },
} satisfies Meta<typeof CustomCard>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: (
      <div>
        <CustomTypography variant="h5" gutterBottom>
          Заголовок карточки
        </CustomTypography>
        <CustomTypography variant="body1">
          Это содержимое карточки с некоторым текстом для демонстрации.
        </CustomTypography>
      </div>
    ),
  },
}

export const Outlined: Story = {
  args: {
    variant: "outlined",
    children: (
      <div>
        <CustomTypography variant="h5" gutterBottom>
          Outlined Card
        </CustomTypography>
        <CustomTypography variant="body1">Карточка с видимой рамкой.</CustomTypography>
      </div>
    ),
  },
}

export const Elevated: Story = {
  args: {
    variant: "elevated",
    children: (
      <div>
        <CustomTypography variant="h5" gutterBottom>
          Elevated Card
        </CustomTypography>
        <CustomTypography variant="body1">Карточка с тенью для создания эффекта возвышения.</CustomTypography>
      </div>
    ),
  },
}

export const WithActions: Story = {
  args: {
    children: (
      <div>
        <CustomTypography variant="h5" gutterBottom>
          Карточка с действиями
        </CustomTypography>
        <CustomTypography variant="body1" gutterBottom>
          Пример карточки с кнопками действий внизу.
        </CustomTypography>
        <div className="flex gap-2 mt-4">
          <CustomButton variant="primary" size="sm">
            Действие
          </CustomButton>
          <CustomButton variant="outlined" size="sm">
            Отмена
          </CustomButton>
        </div>
      </div>
    ),
  },
}

export const NoPadding: Story = {
  args: {
    padding: "none",
    children: (
      <div className="p-4 bg-gray-50">
        <CustomTypography variant="h6">Карточка без внутренних отступов</CustomTypography>
        <CustomTypography variant="body2">Контент с кастомными отступами</CustomTypography>
      </div>
    ),
  },
}
