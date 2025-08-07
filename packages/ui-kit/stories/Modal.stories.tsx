import type { Meta, StoryObj } from "@storybook/react"
import { useState } from "react"
import CustomModal from "../components/custom-modal"
import CustomButton from "../components/custom-button"
import CustomInput from "../components/custom-input"
import CustomSelect from "../components/custom-select"
import { demoSelectData } from "../lib/select-utils"

const meta: Meta<typeof CustomModal> = {
  title: "Components/Modal V2",
  component: CustomModal,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: { type: "select" },
      options: ["xs", "sm", "md", "lg", "xl", "full"],
    },
  },
}

export default meta
type Story = StoryObj<typeof CustomModal>

// Компонент-триггер для демонстрации
function ModalTrigger({ children, onOpen }: { children: React.ReactNode; onOpen: () => void }) {
  return (
    <CustomButton onClick={onOpen}>
      {children}
    </CustomButton>
  )
}

export const Default: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false)

    return (
      <div>
        <ModalTrigger onOpen={() => setIsOpen(true)}>
          Открыть модальное окно
        </ModalTrigger>

        <CustomModal
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          title="Заголовок модального окна"
        >
          <p>Это содержимое модального окна. Здесь может быть любой контент.</p>
        </CustomModal>
      </div>
    )
  },
}

export const Sizes: Story = {
  render: () => {
    const [openSize, setOpenSize] = useState<string | null>(null)

    const sizes = ["xs", "sm", "md", "lg", "xl"] as const

    return (
      <div className="space-y-4">
        <div className="flex flex-wrap gap-2">
          {sizes.map((size) => (
            <CustomButton
              key={size}
              onClick={() => setOpenSize(size)}
              variant="outlined"
            >
              {size.toUpperCase()}
            </CustomButton>
          ))}
        </div>

        {sizes.map((size) => (
          <CustomModal
            key={size}
            isOpen={openSize === size}
            onClose={() => setOpenSize(null)}
            title={`Модальное окно ${size.toUpperCase()}`}
            size={size}
          >
            <p>Это модальное окно размера {size.toUpperCase()}.</p>
            <p>Размер: {size}</p>
          </CustomModal>
        ))}
      </div>
    )
  },
}

export const WithFooter: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false)

    return (
      <div>
        <ModalTrigger onOpen={() => setIsOpen(true)}>
          Модальное окно с футером
        </ModalTrigger>

        <CustomModal
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          title="Форма регистрации"
          footer={
            <div className="flex justify-end gap-2">
              <CustomButton
                variant="outlined"
                onClick={() => setIsOpen(false)}
              >
                Отмена
              </CustomButton>
              <CustomButton onClick={() => setIsOpen(false)}>
                Сохранить
              </CustomButton>
            </div>
          }
        >
          <div className="space-y-4">
            <CustomInput
              label="Имя"
              placeholder="Введите ваше имя"
            />
            <CustomInput
              label="Email"
              type="email"
              placeholder="Введите email"
            />
            <CustomSelect
              label="Страна"
              data={demoSelectData.countries}
              placeholder="Выберите страну"
            />
          </div>
        </CustomModal>
      </div>
    )
  },
}

export const Draggable: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false)

    return (
      <div>
        <ModalTrigger onOpen={() => setIsOpen(true)}>
          Перетаскиваемое модальное окно
        </ModalTrigger>

        <CustomModal
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          title="Перетаскиваемое окно"
          config={{
            draggable: true,
            resizable: true,
            closeOnOverlayClick: true,
            closeOnEscape: true,
          }}
        >
          <p>Это модальное окно можно перетаскивать и изменять размер.</p>
          <p>Попробуйте перетащить за заголовок или изменить размер за углы.</p>
        </CustomModal>
      </div>
    )
  },
}

export const NonDraggable: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false)

    return (
      <div>
        <ModalTrigger onOpen={() => setIsOpen(true)}>
          Статичное модальное окно
        </ModalTrigger>

        <CustomModal
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          title="Статичное окно"
          config={{
            draggable: false,
            resizable: false,
            closeOnOverlayClick: true,
            closeOnEscape: true,
          }}
        >
          <p>Это модальное окно нельзя перетаскивать или изменять размер.</p>
          <p>Оно всегда остается в центре экрана.</p>
        </CustomModal>
      </div>
    )
  },
}

export const FullScreen: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false)

    return (
      <div>
        <ModalTrigger onOpen={() => setIsOpen(true)}>
          Полноэкранное модальное окно
        </ModalTrigger>

        <CustomModal
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          title="Полноэкранное окно"
          size="full"
          config={{
            draggable: false,
            resizable: false,
          }}
        >
          <div className="h-full flex flex-col">
            <div className="flex-1">
              <h3 className="text-xl font-semibold mb-4">Полноэкранное содержимое</h3>
              <p>Это модальное окно занимает весь экран.</p>
              <p>Полезно для форм, галерей или сложных интерфейсов.</p>
            </div>
          </div>
        </CustomModal>
      </div>
    )
  },
}

export const CustomStyling: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false)

    return (
      <div>
        <ModalTrigger onOpen={() => setIsOpen(true)}>
          Кастомное оформление
        </ModalTrigger>

        <CustomModal
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          title="Кастомное модальное окно"
          className="max-w-2xl"
          overlayClassName="bg-black/70"
          headerClassName="bg-gradient-to-r from-blue-500 to-purple-500 text-white border-none"
          bodyClassName="bg-gray-50"
          footerClassName="bg-white border-t-2 border-blue-500"
          footer={
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-500">Кастомный футер</span>
              <CustomButton onClick={() => setIsOpen(false)}>
                Закрыть
              </CustomButton>
            </div>
          }
        >
          <div className="space-y-4">
            <p>Это модальное окно с кастомным оформлением.</p>
            <div className="bg-white p-4 rounded-lg border">
              <h4 className="font-semibold mb-2">Кастомный блок</h4>
              <p>Здесь может быть любой контент с кастомными стилями.</p>
            </div>
          </div>
        </CustomModal>
      </div>
    )
  },
}

export const FormExample: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false)
    const [formData, setFormData] = useState({
      name: "",
      email: "",
      country: "",
    })

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault()
      console.log("Form data:", formData)
      setIsOpen(false)
    }

    return (
      <div>
        <ModalTrigger onOpen={() => setIsOpen(true)}>
          Форма в модальном окне
        </ModalTrigger>

        <CustomModal
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          title="Регистрация пользователя"
          size="lg"
          footer={
            <div className="flex justify-end gap-2">
              <CustomButton
                variant="outlined"
                onClick={() => setIsOpen(false)}
              >
                Отмена
              </CustomButton>
              <CustomButton onClick={handleSubmit}>
                Зарегистрировать
              </CustomButton>
            </div>
          }
        >
          <form onSubmit={handleSubmit} className="space-y-4">
            <CustomInput
              label="Полное имя"
              value={formData.name}
              onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
              placeholder="Введите ваше полное имя"
              validation={{ required: true, minLength: 2 }}
            />
            
            <CustomInput
              label="Email"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
              placeholder="Введите ваш email"
              validation={{ required: true, email: true }}
            />
            
            <CustomSelect
              label="Страна"
              data={demoSelectData.countries}
              value={formData.country}
              onChange={(value) => setFormData(prev => ({ ...prev, country: value as string }))}
              placeholder="Выберите страну"
            />
            
            <div className="bg-blue-50 p-3 rounded-lg">
              <p className="text-sm text-blue-700">
                Все поля обязательны для заполнения. Данные будут отправлены на сервер.
              </p>
            </div>
          </form>
        </CustomModal>
      </div>
    )
  },
}

export const MultipleModals: Story = {
  render: () => {
    const [modals, setModals] = useState({
      first: false,
      second: false,
      third: false,
    })

    const openModal = (name: keyof typeof modals) => {
      setModals(prev => ({ ...prev, [name]: true }))
    }

    const closeModal = (name: keyof typeof modals) => {
      setModals(prev => ({ ...prev, [name]: false }))
    }

    return (
      <div className="space-y-4">
        <div className="flex flex-wrap gap-2">
          <CustomButton onClick={() => openModal("first")}>
            Первое модальное окно
          </CustomButton>
          <CustomButton onClick={() => openModal("second")}>
            Второе модальное окно
          </CustomButton>
          <CustomButton onClick={() => openModal("third")}>
            Третье модальное окно
          </CustomButton>
        </div>

        <CustomModal
          isOpen={modals.first}
          onClose={() => closeModal("first")}
          title="Первое модальное окно"
          size="sm"
        >
          <p>Это первое модальное окно.</p>
          <CustomButton onClick={() => openModal("second")}>
            Открыть второе
          </CustomButton>
        </CustomModal>

        <CustomModal
          isOpen={modals.second}
          onClose={() => closeModal("second")}
          title="Второе модальное окно"
          size="md"
        >
          <p>Это второе модальное окно.</p>
          <CustomButton onClick={() => openModal("third")}>
            Открыть третье
          </CustomButton>
        </CustomModal>

        <CustomModal
          isOpen={modals.third}
          onClose={() => closeModal("third")}
          title="Третье модальное окно"
          size="lg"
        >
          <p>Это третье модальное окно.</p>
          <p>Можно открывать несколько модальных окон одновременно.</p>
        </CustomModal>
      </div>
    )
  },
} 