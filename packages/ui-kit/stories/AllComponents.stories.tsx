import type { Meta, StoryObj } from "@storybook/react"
import CustomButton from "../components/custom-button"
import CustomBadge from "../components/custom-badge"
import CustomInput from "../components/custom-input"
import CustomCard from "../components/custom-card"
import CustomTypography from "../components/custom-typography"
import CustomAccordion, { CustomAccordionItem } from "../components/custom-accordion"
import CustomBox from "../components/custom-box"
import CustomSelect from "../components/custom-select"
import CustomTabs, { CustomTab, CustomTabPanel } from "../components/custom-tabs"

const meta = {
  title: "Showcase/All Components",
  parameters: {
    layout: "padded",
  },
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

export const AllComponents: Story = {
  render: () => (
    <div className="space-y-8 p-8">
      <div>
        <CustomTypography variant="h1" gutterBottom>
          UI Kit Components
        </CustomTypography>
        <CustomTypography variant="body1" color="secondary">
          Демонстрация всех компонентов UI библиотеки
        </CustomTypography>
      </div>

      {/* Buttons */}
      <div>
        <CustomTypography variant="h2" gutterBottom>
          Buttons
        </CustomTypography>
        <div className="flex flex-wrap gap-4">
          <CustomButton variant="primary">Primary</CustomButton>
          <CustomButton variant="secondary">Secondary</CustomButton>
          <CustomButton variant="outlined">Outlined</CustomButton>
          <CustomButton variant="ghost">Ghost</CustomButton>
          <CustomButton variant="danger">Danger</CustomButton>
        </div>
        <div className="flex flex-wrap gap-4 mt-4">
          <CustomButton variant="primary" size="sm">Small</CustomButton>
          <CustomButton variant="primary" size="md">Medium</CustomButton>
          <CustomButton variant="primary" size="lg">Large</CustomButton>
          <CustomButton variant="primary" size="xl">Extra Large</CustomButton>
        </div>
      </div>

      {/* Badges */}
      <div>
        <CustomTypography variant="h2" gutterBottom>
          Badges
        </CustomTypography>
        <div className="flex flex-wrap gap-4">
          <CustomBadge variant="default">Default</CustomBadge>
          <CustomBadge variant="primary">Primary</CustomBadge>
          <CustomBadge variant="secondary">Secondary</CustomBadge>
          <CustomBadge variant="success">Success</CustomBadge>
          <CustomBadge variant="warning">Warning</CustomBadge>
          <CustomBadge variant="error">Error</CustomBadge>
        </div>
        <div className="flex flex-wrap gap-4 mt-4">
          <CustomBadge size="sm">Small</CustomBadge>
          <CustomBadge size="md">Medium</CustomBadge>
          <CustomBadge size="lg">Large</CustomBadge>
        </div>
      </div>

      {/* Inputs */}
      <div>
        <CustomTypography variant="h2" gutterBottom>
          Inputs
        </CustomTypography>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl">
          <CustomInput label="Default Input" placeholder="Enter text..." />
          <CustomInput label="Email" type="email" placeholder="example@email.com" />
          <CustomInput label="Password" type="password" placeholder="Enter password" />
          <CustomInput label="Number" type="number" placeholder="Enter number" />
          <CustomInput label="Outlined" variant="outlined" placeholder="Outlined input" />
          <CustomInput label="Filled" variant="filled" placeholder="Filled input" />
        </div>
      </div>

      {/* Cards */}
      <div>
        <CustomTypography variant="h2" gutterBottom>
          Cards
        </CustomTypography>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <CustomCard>
            <CustomTypography variant="h5" gutterBottom>
              Default Card
            </CustomTypography>
            <CustomTypography variant="body2">
              This is a default card with some content.
            </CustomTypography>
          </CustomCard>
          
          <CustomCard variant="outlined">
            <CustomTypography variant="h5" gutterBottom>
              Outlined Card
            </CustomTypography>
            <CustomTypography variant="body2">
              This card has a visible border.
            </CustomTypography>
          </CustomCard>
          
          <CustomCard variant="elevated">
            <CustomTypography variant="h5" gutterBottom>
              Elevated Card
            </CustomTypography>
            <CustomTypography variant="body2">
              This card has a shadow effect.
            </CustomTypography>
          </CustomCard>
        </div>
      </div>

      {/* Typography */}
      <div>
        <CustomTypography variant="h2" gutterBottom>
          Typography
        </CustomTypography>
        <div className="space-y-4">
          <CustomTypography variant="h1">Heading 1</CustomTypography>
          <CustomTypography variant="h2">Heading 2</CustomTypography>
          <CustomTypography variant="h3">Heading 3</CustomTypography>
          <CustomTypography variant="h4">Heading 4</CustomTypography>
          <CustomTypography variant="h5">Heading 5</CustomTypography>
          <CustomTypography variant="h6">Heading 6</CustomTypography>
          <CustomTypography variant="subtitle1">Subtitle 1</CustomTypography>
          <CustomTypography variant="subtitle2">Subtitle 2</CustomTypography>
          <CustomTypography variant="body1">Body 1 - Main text for reading</CustomTypography>
          <CustomTypography variant="body2">Body 2 - Smaller main text</CustomTypography>
          <CustomTypography variant="caption">Caption text</CustomTypography>
          <CustomTypography variant="overline">Overline text</CustomTypography>
        </div>
      </div>

      {/* Accordion */}
      <div>
        <CustomTypography variant="h2" gutterBottom>
          Accordion
        </CustomTypography>
        <div className="w-full max-w-2xl">
          <CustomAccordion>
            <CustomAccordionItem title="Что такое UI Kit?" defaultExpanded>
              UI Kit - это библиотека кастомных компонентов с дизайн-системой в стиле Material UI со скошенными углами.
            </CustomAccordionItem>
            <CustomAccordionItem title="Какие компоненты включены?">
              В библиотеку включены: кнопки, поля ввода, карточки, бейджи, типографика, модальные окна и многие другие.
            </CustomAccordionItem>
            <CustomAccordionItem title="Как использовать компоненты?">
              Импортируйте нужный компонент и используйте его в своем коде. Все компоненты поддерживают различные варианты и размеры.
            </CustomAccordionItem>
          </CustomAccordion>
        </div>
      </div>

      {/* Box */}
      <div>
        <CustomTypography variant="h2" gutterBottom>
          Box
        </CustomTypography>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <CustomBox
            padding={16}
            backgroundColor="#f0f0f0"
            border="1px solid #ccc"
            borderRadius={8}
            textAlign="center"
          >
            Простой Box
          </CustomBox>
          <CustomBox
            display="flex"
            padding={20}
            backgroundColor="#e3f2fd"
            border="2px solid #2196f3"
            borderRadius={12}
            style={{ gap: "16px" }}
          >
            <CustomBox padding={8} backgroundColor="#fff" borderRadius={4}>Элемент 1</CustomBox>
            <CustomBox padding={8} backgroundColor="#fff" borderRadius={4}>Элемент 2</CustomBox>
          </CustomBox>
          <CustomBox
            padding={24}
            backgroundColor="#fff"
            border="1px solid #e0e0e0"
            borderRadius={16}
            boxShadow="0 4px 6px -1px rgba(0, 0, 0, 0.1)"
          >
            Box с тенью
          </CustomBox>
        </div>
      </div>

      {/* Select */}
      <div>
        <CustomTypography variant="h2" gutterBottom>
          Select
        </CustomTypography>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl">
          <CustomSelect
            options={[
              { value: "option1", label: "Опция 1" },
              { value: "option2", label: "Опция 2" },
              { value: "option3", label: "Опция 3" },
            ]}
            label="Простой селект"
            placeholder="Выберите опцию"
          />
          <CustomSelect
            options={[
              { value: "ru", label: "Россия" },
              { value: "us", label: "США" },
              { value: "de", label: "Германия" },
            ]}
            label="Селект стран"
            placeholder="Выберите страну"
          />
        </div>
      </div>

      {/* Tabs */}
      <div>
        <CustomTypography variant="h2" gutterBottom>
          Tabs
        </CustomTypography>
        <div className="w-full max-w-4xl">
          <CustomTabs defaultValue="tab1">
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
          </CustomTabs>
        </div>
      </div>
    </div>
  ),
} 