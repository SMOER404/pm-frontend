import type { Meta, StoryObj } from "@storybook/react"
import CustomList, { CustomListItem } from "../components/custom-list"
import { ChevronRight, Settings, User, FileText, Image } from "lucide-react"

const meta: Meta<typeof CustomList> = {
  title: "Components/List",
  component: CustomList,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["default", "outlined"],
    },
    dense: {
      control: { type: "boolean" },
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: (
      <>
        <CustomListItem>Первый элемент</CustomListItem>
        <CustomListItem>Второй элемент</CustomListItem>
        <CustomListItem>Третий элемент</CustomListItem>
        <CustomListItem>Четвертый элемент</CustomListItem>
      </>
    ),
  },
}

export const WithIcons: Story = {
  args: {
    children: (
      <>
        <CustomListItem icon={<FileText className="w-5 h-5" />}>
          Документы
        </CustomListItem>
        <CustomListItem icon={<Image className="w-5 h-5" />}>
          Изображения
        </CustomListItem>
        <CustomListItem icon={<Settings className="w-5 h-5" />}>
          Настройки
        </CustomListItem>
        <CustomListItem icon={<User className="w-5 h-5" />}>
          Профиль
        </CustomListItem>
      </>
    ),
  },
}

export const WithSecondaryText: Story = {
  args: {
    children: (
      <>
        <CustomListItem secondaryText="Описание первого элемента">
          Первый элемент
        </CustomListItem>
        <CustomListItem secondaryText="Описание второго элемента">
          Второй элемент
        </CustomListItem>
        <CustomListItem secondaryText="Описание третьего элемента">
          Третий элемент
        </CustomListItem>
        <CustomListItem secondaryText="Описание четвертого элемента">
          Четвертый элемент
        </CustomListItem>
      </>
    ),
  },
}

export const WithActions: Story = {
  args: {
    children: (
      <>
        <CustomListItem action={<ChevronRight className="w-4 h-4" />}>
          Элемент с действием
        </CustomListItem>
        <CustomListItem action={<ChevronRight className="w-4 h-4" />}>
          Еще один элемент
        </CustomListItem>
        <CustomListItem action={<ChevronRight className="w-4 h-4" />}>
          И еще один
        </CustomListItem>
      </>
    ),
  },
}

export const Interactive: Story = {
  args: {
    children: (
      <>
        <CustomListItem onClick={() => alert("Клик по первому элементу")}>
          Кликабельный элемент 1
        </CustomListItem>
        <CustomListItem onClick={() => alert("Клик по второму элементу")}>
          Кликабельный элемент 2
        </CustomListItem>
        <CustomListItem onClick={() => alert("Клик по третьему элементу")}>
          Кликабельный элемент 3
        </CustomListItem>
      </>
    ),
  },
}

export const WithDividers: Story = {
  args: {
    children: (
      <>
        <CustomListItem divider>Первый элемент</CustomListItem>
        <CustomListItem divider>Второй элемент</CustomListItem>
        <CustomListItem divider>Третий элемент</CustomListItem>
        <CustomListItem>Четвертый элемент</CustomListItem>
      </>
    ),
  },
}

export const Selected: Story = {
  args: {
    children: (
      <>
        <CustomListItem>Обычный элемент</CustomListItem>
        <CustomListItem selected>Выбранный элемент</CustomListItem>
        <CustomListItem>Еще один обычный</CustomListItem>
      </>
    ),
  },
}

export const Disabled: Story = {
  args: {
    children: (
      <>
        <CustomListItem>Обычный элемент</CustomListItem>
        <CustomListItem disabled>Отключенный элемент</CustomListItem>
        <CustomListItem>Еще один обычный</CustomListItem>
      </>
    ),
  },
}

export const Outlined: Story = {
  args: {
    variant: "outlined",
    children: (
      <>
        <CustomListItem>Первый элемент</CustomListItem>
        <CustomListItem>Второй элемент</CustomListItem>
        <CustomListItem>Третий элемент</CustomListItem>
        <CustomListItem>Четвертый элемент</CustomListItem>
      </>
    ),
  },
}

export const Dense: Story = {
  args: {
    dense: true,
    children: (
      <>
        <CustomListItem>Плотный элемент 1</CustomListItem>
        <CustomListItem>Плотный элемент 2</CustomListItem>
        <CustomListItem>Плотный элемент 3</CustomListItem>
        <CustomListItem>Плотный элемент 4</CustomListItem>
      </>
    ),
  },
}

export const Complex: Story = {
  args: {
    variant: "outlined",
    children: (
      <>
        <CustomListItem 
          icon={<FileText className="w-5 h-5" />}
          secondaryText="Управление документами"
          action={<ChevronRight className="w-4 h-4" />}
          onClick={() => alert("Открыть документы")}
        >
          Документы
        </CustomListItem>
        <CustomListItem 
          icon={<Image className="w-5 h-5" />}
          secondaryText="Галерея изображений"
          action={<ChevronRight className="w-4 h-4" />}
          onClick={() => alert("Открыть галерею")}
        >
          Изображения
        </CustomListItem>
        <CustomListItem 
          icon={<Settings className="w-5 h-5" />}
          secondaryText="Настройки приложения"
          action={<ChevronRight className="w-4 h-4" />}
          onClick={() => alert("Открыть настройки")}
        >
          Настройки
        </CustomListItem>
        <CustomListItem 
          icon={<User className="w-5 h-5" />}
          secondaryText="Управление профилем"
          action={<ChevronRight className="w-4 h-4" />}
          onClick={() => alert("Открыть профиль")}
        >
          Профиль
        </CustomListItem>
      </>
    ),
  },
}

export const CustomColors: Story = {
  args: {
    variant: "outlined",
    borderColor: "#3b82f6",
    backgroundColor: "#f0f9ff",
    children: (
      <>
        <CustomListItem>Элемент с кастомными цветами</CustomListItem>
        <CustomListItem>Еще один элемент</CustomListItem>
        <CustomListItem>И еще один</CustomListItem>
      </>
    ),
  },
} 