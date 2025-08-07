import type { Meta, StoryObj } from "@storybook/react"
import CustomMenu, { CustomMenuItem } from "../components/custom-menu"
import { useState } from "react"
import CustomButton from "../components/custom-button"
import { ChevronDown, Settings, User, FileText, Image, LogOut } from "lucide-react"

const meta: Meta<typeof CustomMenu> = {
  title: "Components/Menu",
  component: CustomMenu,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    placement: {
      control: { type: "select" },
      options: ["bottom-start", "bottom-end", "top-start", "top-end"],
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => {
    const [open, setOpen] = useState(false)

    return (
      <CustomMenu
        trigger={
          <CustomButton onClick={() => setOpen(!open)}>
            Открыть меню
            <ChevronDown className={open ? "rotate-180" : ""} />
          </CustomButton>
        }
        open={open}
        onOpenChange={setOpen}
      >
        <CustomMenuItem icon={<User className="w-4 h-4" />} onClick={() => alert("Профиль")}>
          Профиль
        </CustomMenuItem>
        <CustomMenuItem icon={<Settings className="w-4 h-4" />} onClick={() => alert("Настройки")}>
          Настройки
        </CustomMenuItem>
        <CustomMenuItem icon={<FileText className="w-4 h-4" />} onClick={() => alert("Документы")}>
          Документы
        </CustomMenuItem>
        <CustomMenuItem icon={<Image className="w-4 h-4" />} onClick={() => alert("Изображения")}>
          Изображения
        </CustomMenuItem>
        <CustomMenuItem divider>Разделитель</CustomMenuItem>
        <CustomMenuItem icon={<LogOut className="w-4 h-4" />} onClick={() => alert("Выход")}>
          Выйти
        </CustomMenuItem>
      </CustomMenu>
    )
  },
}

export const DifferentPlacements: Story = {
  render: () => {
    const [open1, setOpen1] = useState(false)
    const [open2, setOpen2] = useState(false)
    const [open3, setOpen3] = useState(false)
    const [open4, setOpen4] = useState(false)

    return (
      <div className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold mb-2">Bottom Start</h3>
          <CustomMenu
            trigger={
              <CustomButton onClick={() => setOpen1(!open1)}>
                Bottom Start
                <ChevronDown className={open1 ? "rotate-180" : ""} />
              </CustomButton>
            }
            open={open1}
            onOpenChange={setOpen1}
            placement="bottom-start"
          >
            <CustomMenuItem onClick={() => alert("1")}>Элемент 1</CustomMenuItem>
            <CustomMenuItem onClick={() => alert("2")}>Элемент 2</CustomMenuItem>
            <CustomMenuItem onClick={() => alert("3")}>Элемент 3</CustomMenuItem>
          </CustomMenu>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-2">Bottom End</h3>
          <CustomMenu
            trigger={
              <CustomButton onClick={() => setOpen2(!open2)}>
                Bottom End
                <ChevronDown className={open2 ? "rotate-180" : ""} />
              </CustomButton>
            }
            open={open2}
            onOpenChange={setOpen2}
            placement="bottom-end"
          >
            <CustomMenuItem onClick={() => alert("1")}>Элемент 1</CustomMenuItem>
            <CustomMenuItem onClick={() => alert("2")}>Элемент 2</CustomMenuItem>
            <CustomMenuItem onClick={() => alert("3")}>Элемент 3</CustomMenuItem>
          </CustomMenu>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-2">Top Start</h3>
          <CustomMenu
            trigger={
              <CustomButton onClick={() => setOpen3(!open3)}>
                Top Start
                <ChevronDown className={open3 ? "rotate-180" : ""} />
              </CustomButton>
            }
            open={open3}
            onOpenChange={setOpen3}
            placement="top-start"
          >
            <CustomMenuItem onClick={() => alert("1")}>Элемент 1</CustomMenuItem>
            <CustomMenuItem onClick={() => alert("2")}>Элемент 2</CustomMenuItem>
            <CustomMenuItem onClick={() => alert("3")}>Элемент 3</CustomMenuItem>
          </CustomMenu>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-2">Top End</h3>
          <CustomMenu
            trigger={
              <CustomButton onClick={() => setOpen4(!open4)}>
                Top End
                <ChevronDown className={open4 ? "rotate-180" : ""} />
              </CustomButton>
            }
            open={open4}
            onOpenChange={setOpen4}
            placement="top-end"
          >
            <CustomMenuItem onClick={() => alert("1")}>Элемент 1</CustomMenuItem>
            <CustomMenuItem onClick={() => alert("2")}>Элемент 2</CustomMenuItem>
            <CustomMenuItem onClick={() => alert("3")}>Элемент 3</CustomMenuItem>
          </CustomMenu>
        </div>
      </div>
    )
  },
}

export const WithDisabledItems: Story = {
  render: () => {
    const [open, setOpen] = useState(false)

    return (
      <CustomMenu
        trigger={
          <CustomButton onClick={() => setOpen(!open)}>
            Меню с отключенными элементами
            <ChevronDown className={open ? "rotate-180" : ""} />
          </CustomButton>
        }
        open={open}
        onOpenChange={setOpen}
      >
        <CustomMenuItem onClick={() => alert("Активный")}>
          Активный элемент
        </CustomMenuItem>
        <CustomMenuItem disabled onClick={() => alert("Не должно сработать")}>
          Отключенный элемент
        </CustomMenuItem>
        <CustomMenuItem onClick={() => alert("Активный 2")}>
          Еще один активный
        </CustomMenuItem>
      </CustomMenu>
    )
  },
}

export const WithDividers: Story = {
  render: () => {
    const [open, setOpen] = useState(false)

    return (
      <CustomMenu
        trigger={
          <CustomButton onClick={() => setOpen(!open)}>
            Меню с разделителями
            <ChevronDown className={open ? "rotate-180" : ""} />
          </CustomButton>
        }
        open={open}
        onOpenChange={setOpen}
      >
        <CustomMenuItem onClick={() => alert("1-1")}>
          Группа 1 - Элемент 1
        </CustomMenuItem>
        <CustomMenuItem onClick={() => alert("1-2")}>
          Группа 1 - Элемент 2
        </CustomMenuItem>
        <CustomMenuItem onClick={() => alert("1-3")}>
          Группа 1 - Элемент 3
        </CustomMenuItem>
        <CustomMenuItem divider>Разделитель 1</CustomMenuItem>
        <CustomMenuItem onClick={() => alert("2-1")}>
          Группа 2 - Элемент 1
        </CustomMenuItem>
        <CustomMenuItem onClick={() => alert("2-2")}>
          Группа 2 - Элемент 2
        </CustomMenuItem>
        <CustomMenuItem divider>Разделитель 2</CustomMenuItem>
        <CustomMenuItem onClick={() => alert("Отдельный")}>
          Отдельный элемент
        </CustomMenuItem>
      </CustomMenu>
    )
  },
}

export const CustomColors: Story = {
  render: () => {
    const [open, setOpen] = useState(false)

    return (
      <CustomMenu
        trigger={
          <CustomButton onClick={() => setOpen(!open)}>
            Меню с кастомными цветами
            <ChevronDown className={open ? "rotate-180" : ""} />
          </CustomButton>
        }
        open={open}
        onOpenChange={setOpen}
        borderColor="#3b82f6"
        backgroundColor="#f0f9ff"
      >
        <CustomMenuItem onClick={() => alert("1")}>Элемент 1</CustomMenuItem>
        <CustomMenuItem onClick={() => alert("2")}>Элемент 2</CustomMenuItem>
        <CustomMenuItem onClick={() => alert("3")}>Элемент 3</CustomMenuItem>
      </CustomMenu>
    )
  },
}

export const ComplexMenu: Story = {
  render: () => {
    const [open, setOpen] = useState(false)

    return (
      <CustomMenu
        trigger={
          <CustomButton onClick={() => setOpen(!open)}>
            Сложное меню
            <ChevronDown className={open ? "rotate-180" : ""} />
          </CustomButton>
        }
        open={open}
        onOpenChange={setOpen}
      >
        <CustomMenuItem 
          icon={<User className="w-4 h-4" />}
          onClick={() => alert("Профиль")}
        >
          Профиль пользователя
        </CustomMenuItem>
        <CustomMenuItem 
          icon={<Settings className="w-4 h-4" />}
          onClick={() => alert("Настройки")}
        >
          Настройки приложения
        </CustomMenuItem>
        <CustomMenuItem 
          icon={<FileText className="w-4 h-4" />}
          onClick={() => alert("Документы")}
        >
          Документы
        </CustomMenuItem>
        <CustomMenuItem divider>Разделитель</CustomMenuItem>
        <CustomMenuItem 
          icon={<LogOut className="w-4 h-4" />}
          onClick={() => alert("Выход")}
        >
          Выйти из системы
        </CustomMenuItem>
      </CustomMenu>
    )
  },
} 