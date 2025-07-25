"use client"

import type { Meta, StoryObj } from "@storybook/react"
import { fn } from "@storybook/test"
import CustomModal from "../components/custom-modal"
import CustomButton from "../components/custom-button"
import { useState } from "react"

const meta = {
  title: "Components/CustomModal",
  component: CustomModal,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "Модальное окно со скошенными углами с поддержкой различных размеров и позиций.",
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof CustomModal>

export default meta
type Story = StoryObj<typeof meta>

const ModalWithButton = (args: any) => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <CustomButton onClick={() => setOpen(true)}>Открыть модальное окно</CustomButton>
      <CustomModal {...args} open={open} onClose={() => setOpen(false)}>
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-4">Заголовок модального окна</h3>
          <p className="text-gray-600 mb-6">Это содержимое модального окна. Здесь может быть любой контент.</p>
          <div className="flex gap-4">
            <CustomButton onClick={() => setOpen(false)}>Закрыть</CustomButton>
            <CustomButton variant="outlined" onClick={() => setOpen(false)}>
              Отмена
            </CustomButton>
          </div>
        </div>
      </CustomModal>
    </>
  )
}

export const Default: Story = {
  render: () => <ModalWithButton />,
}

export const Small: Story = {
  render: () => <ModalWithButton size="sm" position="center" />,
}

export const Large: Story = {
  render: () => <ModalWithButton size="lg" position="center" />,
}

export const TopPosition: Story = {
  render: () => <ModalWithButton size="md" position="top" />,
}

export const WithoutCloseButton: Story = {
  render: () => <ModalWithButton size="md" position="center" showCloseButton={false} />,
}
