import type { Meta, StoryObj } from "@storybook/react"
import React, { useState } from "react"
import CustomButton from "../components/custom-button"
import CustomInput from "../components/custom-input"
import CustomBadge from "../components/custom-badge"
import CustomCard from "../components/custom-card"
import CustomTypography from "../components/custom-typography"
import CustomSelect from "../components/custom-select"
import CustomTabs, { CustomTab, CustomTabPanel } from "../components/custom-tabs"
import CustomAccordion from "../components/custom-accordion"
import CustomDrawer from "../components/custom-drawer"
import CustomModal from "../components/custom-modal"
import CustomBox from "../components/custom-box"
import CustomPaper from "../components/custom-paper"
import CustomList, { CustomListItem } from "../components/custom-list"
import CustomMenu, { CustomMenuItem } from "../components/custom-menu"
import CustomRadio from "../components/custom-radio"
import CustomCheckbox from "../components/custom-checkbox"
import CustomSkeleton from "../components/custom-skeleton"
import { Home, Download, Settings, Star, Heart } from "lucide-react"

const meta: Meta = {
  title: "UI Kit/All Components",
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof meta>

export const AllComponents: Story = {
  render: () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false)
    const [isModalOpen, setIsModalOpen] = useState(false)

    return (
      <div className="min-h-screen bg-gray-50 p-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <CustomTypography variant="h1" gutterBottom>
              UI Kit Components
            </CustomTypography>
            <CustomTypography variant="h3" color="secondary">
              Демонстрация всех компонентов UI библиотеки
            </CustomTypography>
          </div>

          <CustomTabs
            tabs={[
              {
                id: "basic",
                label: "Базовые компоненты",
                content: (
                  <div className="space-y-8">
                    {/* Buttons */}
                    <div className="space-y-4">
                      <CustomTypography variant="h4">Buttons</CustomTypography>
                      <div className="flex items-center flex-wrap gap-4">
                        <CustomButton variant="primary">Primary</CustomButton>
                        <CustomButton variant="secondary">Secondary</CustomButton>
                        <CustomButton variant="outlined">Outlined</CustomButton>
                        <CustomButton variant="ghost">Ghost</CustomButton>
                        <CustomButton variant="text">Text</CustomButton>
                        <CustomButton variant="danger">Danger</CustomButton>
                        <CustomButton variant="success">Success</CustomButton>
                        <CustomButton variant="warning">Warning</CustomButton>
                      </div>
                      <div className="flex items-center flex-wrap gap-4">
                        <CustomButton size="sm">Small</CustomButton>
                        <CustomButton size="md">Medium</CustomButton>
                        <CustomButton size="lg">Large</CustomButton>
                        <CustomButton size="xl">Extra Large</CustomButton>
                      </div>
                    </div>

                    {/* Badges */}
                    <div className="space-y-4">
                      <CustomTypography variant="h4">Badges</CustomTypography>
                      <div className="flex flex-wrap gap-4">
                        <CustomBadge variant="default">Default</CustomBadge>
                        <CustomBadge variant="primary">Primary</CustomBadge>
                        <CustomBadge variant="secondary">Secondary</CustomBadge>
                        <CustomBadge variant="success">Success</CustomBadge>
                        <CustomBadge variant="warning">Warning</CustomBadge>
                        <CustomBadge variant="danger">Danger</CustomBadge>
                      </div>
                      <div className="flex flex-wrap gap-4">
                        <CustomBadge size="sm">Small</CustomBadge>
                        <CustomBadge size="md">Medium</CustomBadge>
                        <CustomBadge size="lg">Large</CustomBadge>
                      </div>
                    </div>

                    {/* Inputs */}
                    <div className="space-y-4">
                      <CustomTypography variant="h4">Inputs</CustomTypography>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <CustomInput label="Default Input" placeholder="Введите текст" />
                        <CustomInput label="Email" type="email" placeholder="email@example.com" />
                        <CustomInput label="Password" type="password" placeholder="••••••••" />
                        <CustomInput label="Number" type="number" placeholder="123" />
                        <CustomInput label="Outlined" variant="outlined" placeholder="Outlined input" />
                        <CustomInput label="Filled" variant="filled" placeholder="Filled input" />
                      </div>
                    </div>

                    {/* Typography */}
                    <div className="space-y-4">
                      <CustomTypography variant="h4">Typography</CustomTypography>
                      <div className="space-y-2">
                        <CustomTypography variant="h1">Heading 1</CustomTypography>
                        <CustomTypography variant="h2">Heading 2</CustomTypography>
                        <CustomTypography variant="h3">Heading 3</CustomTypography>
                        <CustomTypography variant="h4">Heading 4</CustomTypography>
                        <CustomTypography variant="h5">Heading 5</CustomTypography>
                        <CustomTypography variant="h6">Heading 6</CustomTypography>
                        <CustomTypography variant="body">Body text - Основной текст для чтения</CustomTypography>
                        <CustomTypography variant="small">Small text - Мелкий текст</CustomTypography>
                        <CustomTypography variant="caption">Caption text - Подпись</CustomTypography>
                      </div>
                    </div>
                  </div>
                ),
              },
              {
                id: "layout",
                label: "Компоненты макета",
                content: (
                  <div className="space-y-8">
                    {/* Cards */}
                    <div className="space-y-4">
                      <CustomTypography variant="h4">Cards</CustomTypography>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <CustomCard variant="default" style="outlined">
                          <CustomTypography variant="h5" gutterBottom>
                            Default Card
                          </CustomTypography>
                          <CustomTypography variant="body">
                            This is a default card with some content.
                          </CustomTypography>
                        </CustomCard>
                        <CustomCard variant="brand" style="outlined">
                          <CustomTypography variant="h5" gutterBottom>
                            Brand Card
                          </CustomTypography>
                          <CustomTypography variant="body">
                            This is a brand card with elevated style.
                          </CustomTypography>
                        </CustomCard>
                        <CustomCard variant="primary" style="outlined">
                          <CustomTypography variant="h5" gutterBottom>
                            Primary Card
                          </CustomTypography>
                          <CustomTypography variant="body">
                            This is a primary card with filled style.
                          </CustomTypography>
                        </CustomCard>
                      </div>
                    </div>

                    {/* Paper */}
                    <div className="space-y-4">
                      <CustomTypography variant="h4">Paper</CustomTypography>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <CustomPaper variant="outlined">
                          <CustomTypography variant="h5" gutterBottom>
                            Outlined Paper
                          </CustomTypography>
                          <CustomTypography variant="body">
                            This is an outlined paper component.
                          </CustomTypography>
                        </CustomPaper>
                        <CustomPaper variant="elevation">
                          <CustomTypography variant="h5" gutterBottom>
                            Elevated Paper
                          </CustomTypography>
                          <CustomTypography variant="body">
                            This is an elevated paper component.
                          </CustomTypography>
                        </CustomPaper>
                        <CustomPaper variant="outlined">
                          <CustomTypography variant="h5" gutterBottom>
                            Filled Paper
                          </CustomTypography>
                          <CustomTypography variant="body">
                            This is a filled paper component.
                          </CustomTypography>
                        </CustomPaper>
                      </div>
                    </div>

                    {/* Box */}
                    <div className="space-y-4">
                      <CustomTypography variant="h4">Box</CustomTypography>
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
                  </div>
                ),
              },
              {
                id: "navigation",
                label: "Навигация",
                content: (
                  <div className="space-y-8">
                    {/* Tabs */}
                    <div className="space-y-4">
                      <CustomTypography variant="h4">Tabs</CustomTypography>
                      <CustomTabs
                        tabs={[
                          {
                            id: "tab1",
                            label: "Первая вкладка",
                            content: (
                              <div className="p-4">
                                <CustomTypography variant="h5" gutterBottom>
                                  Содержимое первой вкладки
                                </CustomTypography>
                                <CustomTypography variant="body">
                                  Здесь может быть любой контент для первой вкладки.
                                </CustomTypography>
                              </div>
                            ),
                          },
                          {
                            id: "tab2",
                            label: "Вторая вкладка",
                            content: (
                              <div className="p-4">
                                <CustomTypography variant="h5" gutterBottom>
                                  Содержимое второй вкладки
                                </CustomTypography>
                                <CustomTypography variant="body">
                                  Здесь может быть любой контент для второй вкладки.
                                </CustomTypography>
                              </div>
                            ),
                          },
                          {
                            id: "tab3",
                            label: "Третья вкладка",
                            content: (
                              <div className="p-4">
                                <CustomTypography variant="h5" gutterBottom>
                                  Содержимое третьей вкладки
                                </CustomTypography>
                                <CustomTypography variant="body">
                                  Здесь может быть любой контент для третьей вкладки.
                                </CustomTypography>
                              </div>
                            ),
                          },
                        ]}
                      />
                    </div>

                    {/* Accordion */}
                    <div className="space-y-4">
                      <CustomTypography variant="h4">Accordion</CustomTypography>
                      <div className="w-full max-w-2xl">
                        <CustomAccordion
                          items={[
                            {
                              id: "1",
                              title: "Что такое UI Kit?",
                              content: "UI Kit - это библиотека кастомных компонентов с дизайн-системой в стиле Material UI со скошенными углами.",
                            },
                            {
                              id: "2",
                              title: "Какие компоненты включены?",
                              content: "В библиотеку включены: кнопки, поля ввода, карточки, бейджи, типографика, модальные окна и многие другие.",
                            },
                            {
                              id: "3",
                              title: "Как использовать компоненты?",
                              content: "Импортируйте нужный компонент и используйте его в своем коде. Все компоненты поддерживают различные варианты и размеры.",
                            },
                          ]}
                        />
                      </div>
                    </div>

                    {/* Menu */}
                    <div className="space-y-4">
                      <CustomTypography variant="h4">Menu</CustomTypography>
                      <div className="flex flex-wrap gap-4">
                        <CustomMenu
                          trigger={<CustomButton variant="outlined">Открыть меню</CustomButton>}
                        >
                          <CustomMenuItem onClick={() => console.log("Пункт 1")}>
                            Пункт меню 1
                          </CustomMenuItem>
                          <CustomMenuItem onClick={() => console.log("Пункт 2")}>
                            Пункт меню 2
                          </CustomMenuItem>
                          <CustomMenuItem divider>Разделитель</CustomMenuItem>
                          <CustomMenuItem disabled>
                            Отключенный пункт
                          </CustomMenuItem>
                        </CustomMenu>
                      </div>
                    </div>
                  </div>
                ),
              },
              {
                id: "data",
                label: "Компоненты данных",
                content: (
                  <div className="space-y-8">
                    {/* Select */}
                    <div className="space-y-4">
                      <CustomTypography variant="h4">Select</CustomTypography>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <CustomSelect
                          data={[
                            { value: "option1", label: "Опция 1" },
                            { value: "option2", label: "Опция 2" },
                            { value: "option3", label: "Опция 3" },
                          ]}
                          label="Простой селект"
                          placeholder="Выберите опцию"
                        />
                        <CustomSelect
                          data={[
                            { value: "ru", label: "Россия" },
                            { value: "us", label: "США" },
                            { value: "de", label: "Германия" },
                          ]}
                          label="Страны"
                          placeholder="Выберите страну"
                        />
                      </div>
                    </div>

                                         {/* Radio */}
                     <div className="space-y-4">
                       <CustomTypography variant="h4">Radio</CustomTypography>
                       <div className="space-y-2">
                         <CustomRadio name="example" value="option1" label="Опция 1" />
                         <CustomRadio name="example" value="option2" label="Опция 2" />
                         <CustomRadio name="example" value="option3" label="Опция 3" />
                       </div>
                     </div>

                     {/* Checkbox */}
                     <div className="space-y-4">
                       <CustomTypography variant="h4">Checkbox</CustomTypography>
                       <div className="space-y-2">
                         <CustomCheckbox label="Обычный чекбокс" />
                         <CustomCheckbox label="Отмеченный чекбокс" checked />
                         <CustomCheckbox label="Неопределенный чекбокс" indeterminate />
                         <CustomCheckbox label="Чекбокс с ошибкой" error helperText="Обязательное поле" />
                         <CustomCheckbox label="Отключенный чекбокс" disabled />
                       </div>
                       <div className="space-y-2">
                         <CustomCheckbox label="Маленький" size="sm" />
                         <CustomCheckbox label="Средний" size="md" />
                         <CustomCheckbox label="Большой" size="lg" />
                       </div>
                     </div>

                    {/* List */}
                    <div className="space-y-4">
                      <CustomTypography variant="h4">List</CustomTypography>
                      <div className="w-full max-w-md">
                                                 <CustomList>
                           <CustomListItem>
                             <div className="flex items-center gap-3">
                               <Star className="w-4 h-4" />
                               <div>
                                 <div className="font-medium">Элемент списка 1</div>
                                 <div className="text-sm text-gray-500">Дополнительное описание</div>
                               </div>
                             </div>
                           </CustomListItem>
                           <CustomListItem>
                             <div className="flex items-center gap-3">
                               <Heart className="w-4 h-4" />
                               <div>
                                 <div className="font-medium">Элемент списка 2</div>
                                 <div className="text-sm text-gray-500">Дополнительное описание</div>
                               </div>
                             </div>
                           </CustomListItem>
                           <CustomListItem>
                             <div className="flex items-center gap-3">
                               <Home className="w-4 h-4" />
                               <div>
                                 <div className="font-medium">Элемент списка 3</div>
                                 <div className="text-sm text-gray-500">Дополнительное описание</div>
                               </div>
                             </div>
                           </CustomListItem>
                         </CustomList>
                      </div>
                    </div>
                  </div>
                ),
              },
              {
                id: "feedback",
                label: "Обратная связь",
                content: (
                  <div className="space-y-8">
                    {/* Modal */}
                    <div className="space-y-4">
                      <CustomTypography variant="h4">Modal</CustomTypography>
                      <CustomButton variant="primary" onClick={() => setIsModalOpen(true)}>
                        Открыть Modal
                      </CustomButton>
                    </div>

                    {/* Drawer */}
                    <div className="space-y-4">
                      <CustomTypography variant="h4">Drawer</CustomTypography>
                      <CustomButton variant="primary" onClick={() => setIsDrawerOpen(true)}>
                        Открыть Drawer
                      </CustomButton>
                    </div>

                    {/* Skeleton */}
                    <div className="space-y-4">
                      <CustomTypography variant="h4">Skeleton</CustomTypography>
                      <div className="space-y-4">
                        <div className="flex gap-4">
                          <CustomSkeleton variant="circular" width={40} height={40} />
                          <div className="space-y-2 flex-1">
                            <CustomSkeleton variant="text" width="100%" />
                            <CustomSkeleton variant="text" width="80%" />
                          </div>
                        </div>
                        <CustomSkeleton variant="rectangular" width="100%" height={200} />
                      </div>
                    </div>
                  </div>
                ),
              },
            ]}
          />

          {/* Модальные окна */}
          <CustomDrawer
            open={isDrawerOpen}
            onClose={() => setIsDrawerOpen(false)}
          >
            <div className="p-6">
              <CustomTypography variant="h5" gutterBottom>
                Пример Drawer
              </CustomTypography>
              <CustomTypography variant="body">
                Это пример выдвижной панели с кастомным содержимым.
              </CustomTypography>
            </div>
          </CustomDrawer>
        </div>
      </div>
    )
  },
} 