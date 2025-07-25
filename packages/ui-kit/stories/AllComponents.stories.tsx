import type { Meta, StoryObj } from "@storybook/react"
import CustomButton from "../components/custom-button"
import CustomBadge from "../components/custom-badge"
import CustomInput from "../components/custom-input"
import CustomTextarea from "../components/custom-textarea"
import CustomCard from "../components/custom-card"
import CustomPaper from "../components/custom-paper"
import CustomTypography from "../components/custom-typography"
import CustomAccordion, { CustomAccordionItem } from "../components/custom-accordion"
import CustomBox from "../components/custom-box"
import CustomContainer from "../components/custom-container"
import CustomSelect from "../components/custom-select"
import CustomRadio from "../components/custom-radio"
import CustomSkeleton from "../components/custom-skeleton"
import CustomGrid from "../components/custom-grid"
import CustomList, { CustomListItem } from "../components/custom-list"
import CustomMenu, { CustomMenuItem } from "../components/custom-menu"
import CustomDialog from "../components/custom-dialog"
import CustomModal from "../components/custom-modal"
import CustomDrawer from "../components/custom-drawer"
import CustomTabs, { CustomTab, CustomTabPanel } from "../components/custom-tabs"
import { useState } from "react"

const meta = {
  title: "Showcase/All Components",
  parameters: {
    layout: "padded",
  },
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

export const AllComponents: Story = {
  render: () => {
    const [radioValue, setRadioValue] = useState("option1")
    const [isDialogOpen, setIsDialogOpen] = useState(false)
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [isDrawerOpen, setIsDrawerOpen] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)

    return (
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

        {/* Textarea */}
        <div>
          <CustomTypography variant="h2" gutterBottom>
            Textarea
          </CustomTypography>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl">
            <CustomTextarea label="Default Textarea" placeholder="Enter text..." />
            <CustomTextarea label="Large Textarea" size="lg" placeholder="Large textarea..." />
            <CustomTextarea label="Resizable" resize="both" placeholder="Resizable textarea..." />
            <CustomTextarea label="Disabled" disabled placeholder="Disabled textarea" />
          </div>
        </div>

        {/* Radio */}
        <div>
          <CustomTypography variant="h2" gutterBottom>
            Radio Buttons
          </CustomTypography>
          <div className="space-y-2">
            <CustomRadio
              name="demo"
              value="option1"
              checked={radioValue === "option1"}
              onChange={setRadioValue}
              label="Опция 1"
            />
            <CustomRadio
              name="demo"
              value="option2"
              checked={radioValue === "option2"}
              onChange={setRadioValue}
              label="Опция 2"
            />
            <CustomRadio
              name="demo"
              value="option3"
              checked={radioValue === "option3"}
              onChange={setRadioValue}
              label="Опция 3"
            />
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

        {/* Paper */}
        <div>
          <CustomTypography variant="h2" gutterBottom>
            Paper
          </CustomTypography>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <CustomPaper>
              <CustomTypography variant="h5" gutterBottom>
                Default Paper
              </CustomTypography>
              <CustomTypography variant="body2">
                This is a default paper component.
              </CustomTypography>
            </CustomPaper>
            
            <CustomPaper variant="outlined">
              <CustomTypography variant="h5" gutterBottom>
                Outlined Paper
              </CustomTypography>
              <CustomTypography variant="body2">
                This paper has a visible border.
              </CustomTypography>
            </CustomPaper>
            
            <CustomPaper variant="elevation">
              <CustomTypography variant="h5" gutterBottom>
                Elevated Paper
              </CustomTypography>
              <CustomTypography variant="body2">
                This paper has a shadow effect.
              </CustomTypography>
            </CustomPaper>
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

        {/* Skeleton */}
        <div>
          <CustomTypography variant="h2" gutterBottom>
            Skeleton
          </CustomTypography>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <CustomSkeleton variant="text" width="100%" />
              <CustomSkeleton variant="text" width="80%" />
              <CustomSkeleton variant="text" width="60%" />
            </div>
            <div className="flex items-center gap-4">
              <CustomSkeleton variant="circular" width="40px" height="40px" />
              <div className="space-y-2 flex-1">
                <CustomSkeleton variant="text" width="70%" />
                <CustomSkeleton variant="text" width="50%" />
              </div>
            </div>
            <CustomSkeleton variant="rectangular" width="100%" height="100px" />
          </div>
        </div>

        {/* Grid */}
        <div>
          <CustomTypography variant="h2" gutterBottom>
            Grid
          </CustomTypography>
          <CustomGrid container spacing={2}>
            <CustomGrid item xs={12} sm={6} md={4}>
              <div className="p-4 bg-gray-100 border rounded text-center">Grid Item 1</div>
            </CustomGrid>
            <CustomGrid item xs={12} sm={6} md={4}>
              <div className="p-4 bg-gray-100 border rounded text-center">Grid Item 2</div>
            </CustomGrid>
            <CustomGrid item xs={12} sm={6} md={4}>
              <div className="p-4 bg-gray-100 border rounded text-center">Grid Item 3</div>
            </CustomGrid>
            <CustomGrid item xs={12} sm={6} md={4}>
              <div className="p-4 bg-gray-100 border rounded text-center">Grid Item 4</div>
            </CustomGrid>
            <CustomGrid item xs={12} sm={6} md={4}>
              <div className="p-4 bg-gray-100 border rounded text-center">Grid Item 5</div>
            </CustomGrid>
            <CustomGrid item xs={12} sm={6} md={4}>
              <div className="p-4 bg-gray-100 border rounded text-center">Grid Item 6</div>
            </CustomGrid>
          </CustomGrid>
        </div>

        {/* List */}
        <div>
          <CustomTypography variant="h2" gutterBottom>
            List
          </CustomTypography>
          <div className="max-w-md">
            <CustomList>
              <CustomListItem>Элемент списка 1</CustomListItem>
              <CustomListItem>Элемент списка 2</CustomListItem>
              <CustomListItem>Элемент списка 3</CustomListItem>
              <CustomListItem>Элемент списка 4</CustomListItem>
            </CustomList>
          </div>
        </div>

        {/* Menu */}
        <div>
          <CustomTypography variant="h2" gutterBottom>
            Menu
          </CustomTypography>
          <CustomMenu
            trigger={<CustomButton variant="outlined">Открыть меню</CustomButton>}
            open={menuOpen}
            onOpenChange={setMenuOpen}
          >
            <CustomMenuItem>Пункт меню 1</CustomMenuItem>
            <CustomMenuItem>Пункт меню 2</CustomMenuItem>
            <CustomMenuItem>Пункт меню 3</CustomMenuItem>
          </CustomMenu>
        </div>

        {/* Dialog */}
        <div>
          <CustomTypography variant="h2" gutterBottom>
            Dialog
          </CustomTypography>
          <CustomButton variant="primary" onClick={() => setIsDialogOpen(true)}>
            Открыть Dialog
          </CustomButton>
          <CustomDialog
            open={isDialogOpen}
            onClose={() => setIsDialogOpen(false)}
            title="Пример Dialog"
          >
            <CustomTypography variant="body1">
              Это пример диалогового окна с кастомным содержимым.
            </CustomTypography>
          </CustomDialog>
        </div>

        {/* Modal */}
        <div>
          <CustomTypography variant="h2" gutterBottom>
            Modal
          </CustomTypography>
          <CustomButton variant="primary" onClick={() => setIsModalOpen(true)}>
            Открыть Modal
          </CustomButton>
          <CustomModal
            open={isModalOpen}
            onClose={() => setIsModalOpen(false)}
          >
            <div className="p-6">
              <CustomTypography variant="h5" gutterBottom>
                Пример Modal
              </CustomTypography>
              <CustomTypography variant="body1">
                Это пример модального окна с кастомным содержимым.
              </CustomTypography>
            </div>
          </CustomModal>
        </div>

        {/* Drawer */}
        <div>
          <CustomTypography variant="h2" gutterBottom>
            Drawer
          </CustomTypography>
          <CustomButton variant="primary" onClick={() => setIsDrawerOpen(true)}>
            Открыть Drawer
          </CustomButton>
          <CustomDrawer
            open={isDrawerOpen}
            onClose={() => setIsDrawerOpen(false)}
          >
            <div className="p-6">
              <CustomTypography variant="h5" gutterBottom>
                Пример Drawer
              </CustomTypography>
              <CustomTypography variant="body1">
                Это пример выдвижной панели с кастомным содержимым.
              </CustomTypography>
            </div>
          </CustomDrawer>
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

        {/* Container */}
        <div>
          <CustomTypography variant="h2" gutterBottom>
            Container
          </CustomTypography>
          <CustomContainer maxWidth="md">
            <CustomTypography variant="body1">
              Это контейнер с максимальной шириной. Он центрирует содержимое и ограничивает ширину для лучшей читаемости.
            </CustomTypography>
          </CustomContainer>
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
    )
  },
} 