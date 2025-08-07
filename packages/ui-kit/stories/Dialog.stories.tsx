import type { Meta, StoryObj } from "@storybook/react"
import { useState } from "react"
import CustomDialog from "../components/custom-dialog"
import CustomButton from "../components/custom-button"
import CustomTypography from "../components/custom-typography"

const meta = {
  title: "Components/CustomDialog",
  component: CustomDialog,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "Диалоговое окно с скошенными углами для отображения модального контента.",
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof CustomDialog>

export default meta
type Story = StoryObj<typeof meta>

const DialogWithButton = (args: any) => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <CustomButton onClick={() => setOpen(true)}>Открыть диалог</CustomButton>
      <CustomDialog {...args} open={open} onClose={() => setOpen(false)}>
        <CustomTypography variant="body1" gutterBottom>
          Это содержимое диалогового окна. Здесь может быть любой контент.
        </CustomTypography>
        <div className="flex gap-2 mt-4">
          <CustomButton onClick={() => setOpen(false)}>Закрыть</CustomButton>
          <CustomButton variant="outlined" onClick={() => setOpen(false)}>
            Отмена
          </CustomButton>
        </div>
      </CustomDialog>
    </>
  )
}

export const Default: Story = {
  render: () => <DialogWithButton />,
}

export const Small: Story = {
  render: () => <DialogWithButton size="sm" />,
}

export const Large: Story = {
  render: () => <DialogWithButton size="lg" />,
}

export const ExtraLarge: Story = {
  render: () => <DialogWithButton size="xl" />,
}

export const WithTitle: Story = {
  render: () => <DialogWithButton title="Заголовок диалога" />,
}

export const WithoutCloseButton: Story = {
  render: () => <DialogWithButton showCloseButton={false} />,
}

export const ComplexContent: Story = {
  render: () => {
    const [open, setOpen] = useState(false)

    return (
      <>
        <CustomButton onClick={() => setOpen(true)}>Открыть сложный диалог</CustomButton>
        <CustomDialog open={open} onClose={() => setOpen(false)} title="Форма регистрации" size="lg">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Имя</label>
              <input
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand"
                placeholder="Введите ваше имя"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input
                type="email"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand"
                placeholder="Введите ваш email"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Сообщение</label>
              <textarea
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand"
                rows={4}
                placeholder="Введите ваше сообщение"
              />
            </div>
            <div className="flex gap-2 pt-4">
              <CustomButton onClick={() => setOpen(false)}>Отправить</CustomButton>
              <CustomButton variant="outlined" onClick={() => setOpen(false)}>
                Отмена
              </CustomButton>
            </div>
          </div>
        </CustomDialog>
      </>
    )
  },
} 