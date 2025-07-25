import type { Meta, StoryObj } from "@storybook/react"
import CustomTypography from "../components/custom-typography"

const meta = {
  title: "Components/CustomTypography",
  component: CustomTypography,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "Компонент для типографики с различными вариантами стилей текста.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["h1", "h2", "h3", "h4", "h5", "h6", "subtitle1", "subtitle2", "body1", "body2", "caption", "overline"],
      description: "Вариант типографики",
    },
    color: {
      control: "select",
      options: ["primary", "secondary", "disabled", "inherit"],
      description: "Цвет текста",
    },
    align: {
      control: "select",
      options: ["left", "center", "right", "justify"],
      description: "Выравнивание текста",
    },
    gutterBottom: {
      control: "boolean",
      description: "Добавить отступ снизу",
    },
    noWrap: {
      control: "boolean",
      description: "Запретить перенос строк",
    },
  },
} satisfies Meta<typeof CustomTypography>

export default meta
type Story = StoryObj<typeof meta>

export const Headings: Story = {
  render: () => (
    <div className="space-y-4">
      <CustomTypography variant="h1">Заголовок H1</CustomTypography>
      <CustomTypography variant="h2">Заголовок H2</CustomTypography>
      <CustomTypography variant="h3">Заголовок H3</CustomTypography>
      <CustomTypography variant="h4">Заголовок H4</CustomTypography>
      <CustomTypography variant="h5">Заголовок H5</CustomTypography>
      <CustomTypography variant="h6">Заголовок H6</CustomTypography>
    </div>
  ),
}

export const Body: Story = {
  render: () => (
    <div className="space-y-4 max-w-md">
      <CustomTypography variant="subtitle1">Subtitle 1 - Подзаголовок для важной информации</CustomTypography>
      <CustomTypography variant="subtitle2">Subtitle 2 - Меньший подзаголовок</CustomTypography>
      <CustomTypography variant="body1">
        Body 1 - Основной текст для чтения. Используется для большинства текстового контента на странице.
      </CustomTypography>
      <CustomTypography variant="body2">
        Body 2 - Меньший основной текст. Подходит для дополнительной информации.
      </CustomTypography>
      <CustomTypography variant="caption">
        Caption - Подписи к изображениям и дополнительная информация
      </CustomTypography>
      <CustomTypography variant="overline">Overline - Текст для категорий и меток</CustomTypography>
    </div>
  ),
}

export const Colors: Story = {
  render: () => (
    <div className="space-y-2">
      <CustomTypography variant="body1" color="primary">
        Primary color text
      </CustomTypography>
      <CustomTypography variant="body1" color="secondary">
        Secondary color text
      </CustomTypography>
      <CustomTypography variant="body1" color="disabled">
        Disabled color text
      </CustomTypography>
      <CustomTypography variant="body1" color="inherit">
        Inherit color text
      </CustomTypography>
    </div>
  ),
}

export const Alignment: Story = {
  render: () => (
    <div className="space-y-4 w-80">
      <CustomTypography variant="body1" align="left">
        Выравнивание по левому краю
      </CustomTypography>
      <CustomTypography variant="body1" align="center">
        Выравнивание по центру
      </CustomTypography>
      <CustomTypography variant="body1" align="right">
        Выравнивание по правому краю
      </CustomTypography>
      <CustomTypography variant="body1" align="justify">
        Выравнивание по ширине. Этот текст будет растянут по всей ширине контейнера для создания ровных краев с обеих
        сторон.
      </CustomTypography>
    </div>
  ),
}

export const WithGutterBottom: Story = {
  args: {
    variant: "h4",
    gutterBottom: true,
    children: "Заголовок с отступом снизу",
  },
}

export const NoWrap: Story = {
  args: {
    variant: "body1",
    noWrap: true,
    children: "Очень длинный текст который не будет переноситься на новую строку и будет обрезан",
  },
}
