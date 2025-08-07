import type { Meta, StoryObj } from "@storybook/react"
import CustomDrawer from "../components/custom-drawer"
import { useState } from "react"
import CustomButton from "../components/custom-button"

const meta: Meta<typeof CustomDrawer> = {
  title: "Components/Drawer",
  component: CustomDrawer,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  argTypes: {
    anchor: {
      control: { type: "select" },
      options: ["left", "right", "top", "bottom"],
    },
    variant: {
      control: { type: "select" },
      options: ["temporary", "persistent", "permanent"],
    },
    size: {
      control: { type: "select" },
      options: ["sm", "md", "lg", "xl"],
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

interface DrawerDemoProps {
  anchor?: "left" | "right" | "top" | "bottom"
  variant?: "temporary" | "persistent" | "permanent"
  size?: "sm" | "md" | "lg" | "xl"
}

// Компонент-обертка для демонстрации drawer
const DrawerDemo = ({ anchor = "left", variant = "temporary", size = "md" }: DrawerDemoProps) => {
  const [open, setOpen] = useState(false)

  return (
    <div className="p-4">
      <CustomButton onClick={() => setOpen(true)}>
        Открыть Drawer ({anchor})
      </CustomButton>
      
      <CustomDrawer
        open={open}
        onClose={() => setOpen(false)}
        anchor={anchor}
        variant={variant}
        size={size}
      >
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Drawer Content</h3>
          <p>Это содержимое drawer компонента.</p>
          <p>Вы можете разместить здесь любые элементы.</p>
          <div className="space-y-2">
            <div className="p-3 bg-gray-100 rounded">Элемент 1</div>
            <div className="p-3 bg-gray-100 rounded">Элемент 2</div>
            <div className="p-3 bg-gray-100 rounded">Элемент 3</div>
          </div>
          <CustomButton onClick={() => setOpen(false)}>
            Закрыть
          </CustomButton>
        </div>
      </CustomDrawer>
    </div>
  )
}

export const LeftDrawer: Story = {
  render: () => <DrawerDemo anchor="left" />,
}

export const RightDrawer: Story = {
  render: () => <DrawerDemo anchor="right" />,
}

export const TopDrawer: Story = {
  render: () => <DrawerDemo anchor="top" />,
}

export const BottomDrawer: Story = {
  render: () => <DrawerDemo anchor="bottom" />,
}

export const DifferentSizes: Story = {
  render: () => (
    <div className="space-y-4 p-4">
      <div>
        <h3 className="text-lg font-semibold mb-2">Small Drawer</h3>
        <DrawerDemo anchor="left" size="sm" />
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-2">Medium Drawer</h3>
        <DrawerDemo anchor="left" size="md" />
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-2">Large Drawer</h3>
        <DrawerDemo anchor="left" size="lg" />
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-2">Extra Large Drawer</h3>
        <DrawerDemo anchor="left" size="xl" />
      </div>
    </div>
  ),
}

export const PersistentDrawer: Story = {
  render: () => {
    const [open, setOpen] = useState(true)
    
    return (
      <div className="p-4">
        <CustomButton onClick={() => setOpen(!open)}>
          {open ? "Скрыть" : "Показать"} Persistent Drawer
        </CustomButton>
        
        <CustomDrawer
          open={open}
          onClose={() => setOpen(false)}
          anchor="left"
          variant="persistent"
          size="md"
        >
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Persistent Drawer</h3>
            <p>Этот drawer остается на месте при закрытии.</p>
            <div className="space-y-2">
              <div className="p-3 bg-gray-100 rounded">Навигация</div>
              <div className="p-3 bg-gray-100 rounded">Меню</div>
              <div className="p-3 bg-gray-100 rounded">Настройки</div>
            </div>
          </div>
        </CustomDrawer>
      </div>
    )
  },
}

export const CustomColors: Story = {
  render: () => {
    const [open, setOpen] = useState(false)
    
    return (
      <div className="p-4">
        <CustomButton onClick={() => setOpen(true)}>
          Открыть с кастомными цветами
        </CustomButton>
        
        <CustomDrawer
          open={open}
          onClose={() => setOpen(false)}
          anchor="left"
          size="md"
          borderColor="#3b82f6"
          backgroundColor="#f0f9ff"
        >
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Custom Colors</h3>
            <p>Drawer с кастомными цветами рамки и фона.</p>
            <div className="space-y-2">
              <div className="p-3 bg-blue-100 rounded">Элемент 1</div>
              <div className="p-3 bg-blue-100 rounded">Элемент 2</div>
              <div className="p-3 bg-blue-100 rounded">Элемент 3</div>
            </div>
            <CustomButton onClick={() => setOpen(false)}>
              Закрыть
            </CustomButton>
          </div>
        </CustomDrawer>
      </div>
    )
  },
}

export const WithoutCloseButton: Story = {
  render: () => {
    const [open, setOpen] = useState(false)
    
    return (
      <div className="p-4">
        <CustomButton onClick={() => setOpen(true)}>
          Открыть без кнопки закрытия
        </CustomButton>
        
        <CustomDrawer
          open={open}
          onClose={() => setOpen(false)}
          anchor="left"
          size="md"
          showCloseButton={false}
        >
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Без кнопки закрытия</h3>
            <p>Этот drawer не имеет встроенной кнопки закрытия.</p>
            <p>Закрыть можно кликнув вне drawer или нажав Escape.</p>
            <div className="space-y-2">
              <div className="p-3 bg-gray-100 rounded">Элемент 1</div>
              <div className="p-3 bg-gray-100 rounded">Элемент 2</div>
            </div>
            <CustomButton onClick={() => setOpen(false)}>
              Закрыть вручную
            </CustomButton>
          </div>
        </CustomDrawer>
      </div>
    )
  },
} 