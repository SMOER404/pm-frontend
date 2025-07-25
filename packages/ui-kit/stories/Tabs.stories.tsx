import type { Meta, StoryObj } from "@storybook/react"
import CustomTabs, { CustomTab, CustomTabPanel } from "../components/custom-tabs"
import CustomTypography from "../components/custom-typography"

const meta = {
  title: "Components/CustomTabs",
  component: CustomTabs,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "Компонент вкладок с скошенными углами для организации контента.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "outlined", "pills"],
      description: "Вариант стиля вкладок",
    },
    orientation: {
      control: "select",
      options: ["horizontal", "vertical"],
      description: "Ориентация вкладок",
    },
  },
} satisfies Meta<typeof CustomTabs>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    defaultValue: "tab1",
    children: (
      <>
        <CustomTab label="Вкладка 1" value="tab1" />
        <CustomTab label="Вкладка 2" value="tab2" />
        <CustomTab label="Вкладка 3" value="tab3" />
        <CustomTabPanel value="tab1">
          <CustomTypography variant="body1">
            Содержимое первой вкладки. Здесь может быть любой контент.
          </CustomTypography>
        </CustomTabPanel>
        <CustomTabPanel value="tab2">
          <CustomTypography variant="body1">
            Содержимое второй вкладки. Здесь может быть любой контент.
          </CustomTypography>
        </CustomTabPanel>
        <CustomTabPanel value="tab3">
          <CustomTypography variant="body1">
            Содержимое третьей вкладки. Здесь может быть любой контент.
          </CustomTypography>
        </CustomTabPanel>
      </>
    ),
  },
}

export const Outlined: Story = {
  args: {
    variant: "outlined",
    defaultValue: "tab1",
    children: (
      <>
        <CustomTab label="Вкладка 1" value="tab1" />
        <CustomTab label="Вкладка 2" value="tab2" />
        <CustomTab label="Вкладка 3" value="tab3" />
        <CustomTabPanel value="tab1">
          <CustomTypography variant="body1">
            Содержимое первой вкладки с outlined стилем.
          </CustomTypography>
        </CustomTabPanel>
        <CustomTabPanel value="tab2">
          <CustomTypography variant="body1">
            Содержимое второй вкладки с outlined стилем.
          </CustomTypography>
        </CustomTabPanel>
        <CustomTabPanel value="tab3">
          <CustomTypography variant="body1">
            Содержимое третьей вкладки с outlined стилем.
          </CustomTypography>
        </CustomTabPanel>
      </>
    ),
  },
}

export const Pills: Story = {
  args: {
    variant: "pills",
    defaultValue: "tab1",
    children: (
      <>
        <CustomTab label="Вкладка 1" value="tab1" />
        <CustomTab label="Вкладка 2" value="tab2" />
        <CustomTab label="Вкладка 3" value="tab3" />
        <CustomTabPanel value="tab1">
          <CustomTypography variant="body1">
            Содержимое первой вкладки с pills стилем.
          </CustomTypography>
        </CustomTabPanel>
        <CustomTabPanel value="tab2">
          <CustomTypography variant="body1">
            Содержимое второй вкладки с pills стилем.
          </CustomTypography>
        </CustomTabPanel>
        <CustomTabPanel value="tab3">
          <CustomTypography variant="body1">
            Содержимое третьей вкладки с pills стилем.
          </CustomTypography>
        </CustomTabPanel>
      </>
    ),
  },
}

export const WithIcons: Story = {
  args: {
    defaultValue: "tab1",
    children: (
      <>
        <CustomTab label="Настройки" value="tab1" icon="⚙️" />
        <CustomTab label="Документация" value="tab2" icon="📚" />
        <CustomTab label="Поддержка" value="tab3" icon="💬" />
        <CustomTabPanel value="tab1">
          <CustomTypography variant="body1">
            Настройки приложения и пользовательские предпочтения.
          </CustomTypography>
        </CustomTabPanel>
        <CustomTabPanel value="tab2">
          <CustomTypography variant="body1">
            Подробная документация по использованию компонентов.
          </CustomTypography>
        </CustomTabPanel>
        <CustomTabPanel value="tab3">
          <CustomTypography variant="body1">
            Информация о поддержке и контакты.
          </CustomTypography>
        </CustomTabPanel>
      </>
    ),
  },
}

export const Vertical: Story = {
  args: {
    orientation: "vertical",
    defaultValue: "tab1",
    children: (
      <>
        <CustomTab label="Вкладка 1" value="tab1" />
        <CustomTab label="Вкладка 2" value="tab2" />
        <CustomTab label="Вкладка 3" value="tab3" />
        <CustomTabPanel value="tab1">
          <CustomTypography variant="body1">
            Содержимое первой вертикальной вкладки.
          </CustomTypography>
        </CustomTabPanel>
        <CustomTabPanel value="tab2">
          <CustomTypography variant="body1">
            Содержимое второй вертикальной вкладки.
          </CustomTypography>
        </CustomTabPanel>
        <CustomTabPanel value="tab3">
          <CustomTypography variant="body1">
            Содержимое третьей вертикальной вкладки.
          </CustomTypography>
        </CustomTabPanel>
      </>
    ),
  },
}

export const WithDisabledTab: Story = {
  args: {
    defaultValue: "tab1",
    children: (
      <>
        <CustomTab label="Вкладка 1" value="tab1" />
        <CustomTab label="Отключенная вкладка" value="tab2" disabled />
        <CustomTab label="Вкладка 3" value="tab3" />
        <CustomTabPanel value="tab1">
          <CustomTypography variant="body1">
            Содержимое первой вкладки.
          </CustomTypography>
        </CustomTabPanel>
        <CustomTabPanel value="tab2">
          <CustomTypography variant="body1">
            Эта вкладка отключена.
          </CustomTypography>
        </CustomTabPanel>
        <CustomTabPanel value="tab3">
          <CustomTypography variant="body1">
            Содержимое третьей вкладки.
          </CustomTypography>
        </CustomTabPanel>
      </>
    ),
  },
}

export const ComplexContent: Story = {
  args: {
    defaultValue: "tab1",
    children: (
      <>
        <CustomTab label="Форма" value="tab1" />
        <CustomTab label="Таблица" value="tab2" />
        <CustomTab label="График" value="tab3" />
        <CustomTabPanel value="tab1">
          <div className="space-y-4">
            <CustomTypography variant="h6">Форма регистрации</CustomTypography>
            <div className="space-y-2">
              <input
                type="text"
                placeholder="Имя"
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
              />
            </div>
          </div>
        </CustomTabPanel>
        <CustomTabPanel value="tab2">
          <div className="space-y-4">
            <CustomTypography variant="h6">Таблица данных</CustomTypography>
            <table className="w-full border-collapse border border-gray-300">
              <thead>
                <tr>
                  <th className="border border-gray-300 px-4 py-2">Имя</th>
                  <th className="border border-gray-300 px-4 py-2">Email</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Иван</td>
                  <td className="border border-gray-300 px-4 py-2">ivan@example.com</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Мария</td>
                  <td className="border border-gray-300 px-4 py-2">maria@example.com</td>
                </tr>
              </tbody>
            </table>
          </div>
        </CustomTabPanel>
        <CustomTabPanel value="tab3">
          <div className="space-y-4">
            <CustomTypography variant="h6">График</CustomTypography>
            <div className="h-32 bg-gray-100 flex items-center justify-center rounded">
              <CustomTypography variant="body2" color="secondary">
                Здесь будет график
              </CustomTypography>
            </div>
          </div>
        </CustomTabPanel>
      </>
    ),
  },
} 