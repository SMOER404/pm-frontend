import type { Meta, StoryObj } from "@storybook/react"
import CustomAccordion, { CustomAccordionItem } from "../components/custom-accordion"

const meta = {
  title: "Components/CustomAccordion",
  component: CustomAccordion,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "Аккордеон с скошенными углами для группировки контента.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "outlined"],
      description: "Вариант стиля аккордеона",
    },
    allowMultiple: {
      control: "boolean",
      description: "Разрешить открытие нескольких секций одновременно",
    },
  },
} satisfies Meta<typeof CustomAccordion>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: (
      <>
        <CustomAccordionItem title="Что такое UI Kit?" defaultExpanded>
          UI Kit - это библиотека кастомных компонентов с дизайн-системой в стиле Material UI со скошенными углами.
        </CustomAccordionItem>
        <CustomAccordionItem title="Какие компоненты включены?">
          В библиотеку включены: кнопки, поля ввода, карточки, бейджи, типографика, модальные окна и многие другие.
        </CustomAccordionItem>
        <CustomAccordionItem title="Как использовать компоненты?">
          Импортируйте нужный компонент и используйте его в своем коде. Все компоненты поддерживают различные варианты и размеры.
        </CustomAccordionItem>
      </>
    ),
  },
  render: (args) => (
    <div className="w-96">
      <CustomAccordion {...args} />
    </div>
  ),
}

export const Outlined: Story = {
  args: {
    variant: "outlined",
    children: (
      <>
        <CustomAccordionItem title="Секция 1" icon="📁">
          Содержимое первой секции с иконкой.
        </CustomAccordionItem>
        <CustomAccordionItem title="Секция 2" icon="⚙️">
          Содержимое второй секции с иконкой.
        </CustomAccordionItem>
        <CustomAccordionItem title="Секция 3" icon="📊">
          Содержимое третьей секции с иконкой.
        </CustomAccordionItem>
      </>
    ),
  },
  render: (args) => (
    <div className="w-96">
      <CustomAccordion {...args} />
    </div>
  ),
}

export const WithIcons: Story = {
  args: {
    children: (
      <>
        <CustomAccordionItem title="Настройки" icon="⚙️">
          Различные настройки приложения и пользовательские предпочтения.
        </CustomAccordionItem>
        <CustomAccordionItem title="Документация" icon="📚">
          Подробная документация по использованию компонентов.
        </CustomAccordionItem>
        <CustomAccordionItem title="Поддержка" icon="💬">
          Информация о поддержке и контакты.
        </CustomAccordionItem>
      </>
    ),
  },
  render: (args) => (
    <div className="w-96">
      <CustomAccordion {...args} />
    </div>
  ),
}

export const Disabled: Story = {
  args: {
    children: (
      <>
        <CustomAccordionItem title="Активная секция">
          Эта секция активна и может быть открыта.
        </CustomAccordionItem>
        <CustomAccordionItem title="Отключенная секция" disabled>
          Эта секция отключена и не может быть открыта.
        </CustomAccordionItem>
        <CustomAccordionItem title="Еще одна активная секция">
          Эта секция также активна.
        </CustomAccordionItem>
      </>
    ),
  },
  render: (args) => (
    <div className="w-96">
      <CustomAccordion {...args} />
    </div>
  ),
} 