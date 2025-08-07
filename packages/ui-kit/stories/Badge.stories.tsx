import type { Meta, StoryObj } from "@storybook/react"
import { useState } from "react"
import CustomBadge from "../components/custom-badge"
import { Check, AlertTriangle, Info, Star, Heart, X, Bell } from "lucide-react"

const meta: Meta<typeof CustomBadge> = {
  title: "Components/Badge V2",
  component: CustomBadge,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["default", "success", "warning", "danger", "info", "brand", "primary", "secondary"],
    },
    style: {
      control: { type: "select" },
      options: ["solid", "outlined", "soft", "ghost"],
    },
    size: {
      control: { type: "select" },
      options: ["xs", "sm", "md", "lg", "xl"],
    },
    interactive: {
      control: { type: "boolean" },
    },
    disabled: {
      control: { type: "boolean" },
    },
    hoverable: {
      control: { type: "boolean" },
    },
    removable: {
      control: { type: "boolean" },
    },
    animated: {
      control: { type: "boolean" },
    },
  },
}

export default meta
type Story = StoryObj<typeof CustomBadge>

export const Default: Story = {
  args: {
    children: "Бейдж",
  },
}

export const Variants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <CustomBadge variant="default">Default</CustomBadge>
      <CustomBadge variant="success">Success</CustomBadge>
      <CustomBadge variant="warning">Warning</CustomBadge>
      <CustomBadge variant="danger">Danger</CustomBadge>
      <CustomBadge variant="info">Info</CustomBadge>
      <CustomBadge variant="brand">Brand</CustomBadge>
      <CustomBadge variant="primary">Primary</CustomBadge>
      <CustomBadge variant="secondary">Secondary</CustomBadge>
    </div>
  ),
}

export const Styles: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-2">
        <CustomBadge style="solid" variant="brand">Solid</CustomBadge>
        <CustomBadge style="outlined" variant="brand">Outlined</CustomBadge>
        <CustomBadge style="soft" variant="brand">Soft</CustomBadge>
        <CustomBadge style="ghost" variant="brand">Ghost</CustomBadge>
      </div>
      
      <div className="flex flex-wrap gap-2">
        <CustomBadge style="solid" variant="success">Solid</CustomBadge>
        <CustomBadge style="outlined" variant="success">Outlined</CustomBadge>
        <CustomBadge style="soft" variant="success">Soft</CustomBadge>
        <CustomBadge style="ghost" variant="success">Ghost</CustomBadge>
      </div>
    </div>
  ),
}

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-2">
      <CustomBadge size="xs">Extra Small</CustomBadge>
      <CustomBadge size="sm">Small</CustomBadge>
      <CustomBadge size="md">Medium</CustomBadge>
      <CustomBadge size="lg">Large</CustomBadge>
      <CustomBadge size="xl">Extra Large</CustomBadge>
    </div>
  ),
}

export const WithIcons: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-2">
        <CustomBadge icon={<Check className="w-3 h-3" />}>Успешно</CustomBadge>
        <CustomBadge icon={<AlertTriangle className="w-3 h-3" />} variant="warning">
          Внимание
        </CustomBadge>
        <CustomBadge icon={<Info className="w-3 h-3" />} variant="info">
          Информация
        </CustomBadge>
        <CustomBadge icon={<Star className="w-3 h-3" />} variant="brand">
          Избранное
        </CustomBadge>
      </div>
      
      <div className="flex flex-wrap gap-2">
        <CustomBadge icon={<Heart className="w-3 h-3" />} iconPosition="right">
          Нравится
        </CustomBadge>
        <CustomBadge icon={<Bell className="w-3 h-3" />} iconPosition="right" variant="info">
          Уведомления
        </CustomBadge>
      </div>
    </div>
  ),
}

export const WithDots: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-2">
        <CustomBadge dot>Онлайн</CustomBadge>
        <CustomBadge dot variant="success">Активен</CustomBadge>
        <CustomBadge dot variant="warning">Занят</CustomBadge>
        <CustomBadge dot variant="danger">Офлайн</CustomBadge>
      </div>
      
      <div className="flex flex-wrap gap-2">
        <CustomBadge dot dotPosition="right">Статус</CustomBadge>
        <CustomBadge dot dotPosition="right" variant="info">Новый</CustomBadge>
      </div>
      
      <div className="flex flex-wrap gap-2">
        <CustomBadge dot>Только точка</CustomBadge>
        <CustomBadge icon={<Bell className="w-3 h-3" />}>Только иконка</CustomBadge>
      </div>
    </div>
  ),
}

export const Interactive: Story = {
  render: () => {
    const [selectedBadge, setSelectedBadge] = useState<string | null>(null)

    return (
      <div className="space-y-4">
        <div className="flex flex-wrap gap-2">
          <CustomBadge
            interactive
            hoverable
            onClick={() => setSelectedBadge("badge1")}
            className={selectedBadge === "badge1" ? "ring-2 ring-brand" : ""}
          >
            Кликабельный бейдж
          </CustomBadge>
          
          <CustomBadge
            interactive
            disabled
            hoverable
            onClick={() => alert("Этот бейдж отключен")}
          >
            Отключенный бейдж
          </CustomBadge>
        </div>
        
        <p className="text-sm text-gray-600">
          Выбранный бейдж: {selectedBadge || "нет"}
        </p>
      </div>
    )
  },
}

export const Removable: Story = {
  render: () => {
    const [badges, setBadges] = useState([
      "React", "TypeScript", "Tailwind CSS", "Next.js", "Storybook"
    ])

    const handleRemove = (badgeToRemove: string) => {
      setBadges(badges.filter(badge => badge !== badgeToRemove))
    }

    return (
      <div className="space-y-4">
        <div className="flex flex-wrap gap-2">
          {badges.map((badge) => (
            <CustomBadge
              key={badge}
              removable
              onRemove={() => handleRemove(badge)}
              variant="brand"
              style="soft"
            >
              {badge}
            </CustomBadge>
          ))}
        </div>
        
        <p className="text-sm text-gray-600">
          Осталось бейджей: {badges.length}
        </p>
        
        <button
          onClick={() => setBadges(["React", "TypeScript", "Tailwind CSS", "Next.js", "Storybook"])}
          className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-md transition-colors"
        >
          Сбросить
        </button>
      </div>
    )
  },
}

export const Animated: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-2">
        <CustomBadge animated animationType="pulse" variant="danger">
          Срочно
        </CustomBadge>
        <CustomBadge animated animationType="bounce" variant="warning">
          Новое
        </CustomBadge>
        <CustomBadge animated animationType="spin" icon={<Bell className="w-3 h-3" />}>
          Уведомления
        </CustomBadge>
      </div>
      
      <div className="flex flex-wrap gap-2">
        <CustomBadge animated animationType="pulse" dot>
          Живой статус
        </CustomBadge>
        <CustomBadge animated animationType="bounce" variant="success">
          Загрузка
        </CustomBadge>
      </div>
    </div>
  ),
}

export const StatusBadges: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-2">
        <CustomBadge dot variant="success">Онлайн</CustomBadge>
        <CustomBadge dot variant="warning">Занят</CustomBadge>
        <CustomBadge dot variant="danger">Офлайн</CustomBadge>
        <CustomBadge dot variant="info">Не беспокоить</CustomBadge>
      </div>
      
      <div className="flex flex-wrap gap-2">
        <CustomBadge icon={<Check className="w-3 h-3" />} variant="success">
          Выполнено
        </CustomBadge>
        <CustomBadge icon={<AlertTriangle className="w-3 h-3" />} variant="warning">
          В процессе
        </CustomBadge>
        <CustomBadge icon={<X className="w-3 h-3" />} variant="danger">
          Отменено
        </CustomBadge>
        <CustomBadge icon={<Info className="w-3 h-3" />} variant="info">
          Ожидает
        </CustomBadge>
      </div>
    </div>
  ),
}

export const NotificationBadges: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-2">
        <CustomBadge animated animationType="pulse" variant="danger">
          3 новых сообщения
        </CustomBadge>
        <CustomBadge animated animationType="bounce" variant="warning">
          1 непрочитанное
        </CustomBadge>
        <CustomBadge variant="info">
          5 уведомлений
        </CustomBadge>
      </div>
      
      <div className="flex flex-wrap gap-2">
        <CustomBadge icon={<Bell className="w-3 h-3" />} variant="brand">
          Уведомления
        </CustomBadge>
        <CustomBadge icon={<Heart className="w-3 h-3" />} variant="danger">
          Избранное
        </CustomBadge>
        <CustomBadge icon={<Star className="w-3 h-3" />} variant="warning">
          Рейтинг
        </CustomBadge>
      </div>
    </div>
  ),
}

export const TagBadges: Story = {
  render: () => {
    const [tags, setTags] = useState([
      { id: 1, name: "JavaScript", variant: "brand" as const },
      { id: 2, name: "React", variant: "info" as const },
      { id: 3, name: "TypeScript", variant: "primary" as const },
      { id: 4, name: "CSS", variant: "success" as const },
      { id: 5, name: "HTML", variant: "warning" as const },
    ])

    const handleRemove = (id: number) => {
      setTags(tags.filter(tag => tag.id !== id))
    }

    return (
      <div className="space-y-4">
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <CustomBadge
              key={tag.id}
              variant={tag.variant}
              style="soft"
              removable
              onRemove={() => handleRemove(tag.id)}
              interactive
              hoverable
            >
              {tag.name}
            </CustomBadge>
          ))}
        </div>
        
        <p className="text-sm text-gray-600">
          Выбрано тегов: {tags.length}
        </p>
      </div>
    )
  },
}

export const CustomStyling: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-2">
        <CustomBadge className="bg-gradient-to-r from-purple-500 to-pink-500 text-white border-none">
          Градиентный
        </CustomBadge>
        <CustomBadge className="bg-black text-white border-2 border-dashed border-gray-400">
          Пунктирный
        </CustomBadge>
        <CustomBadge className="bg-yellow-400 text-black font-bold shadow-lg">
          Выделенный
        </CustomBadge>
      </div>
      
      <div className="flex flex-wrap gap-2">
        <CustomBadge className="bg-transparent text-brand border-2 border-brand font-semibold">
          Кастомный бренд
        </CustomBadge>
        <CustomBadge className="bg-red-100 text-red-800 border-red-300 italic">
          Курсивный
        </CustomBadge>
      </div>
    </div>
  ),
} 