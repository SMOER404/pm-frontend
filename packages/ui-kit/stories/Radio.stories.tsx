import type { Meta, StoryObj } from "@storybook/react"
import CustomRadio from "../components/custom-radio"
import { useState } from "react"

const meta: Meta<typeof CustomRadio> = {
  title: "Components/Radio",
  component: CustomRadio,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: { type: "select" },
      options: ["sm", "md", "lg"],
    },
    disabled: {
      control: { type: "boolean" },
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => {
    const [value, setValue] = useState("option1")
    
    return (
      <div className="space-y-4">
        <CustomRadio
          name="example"
          value="option1"
          checked={value === "option1"}
          onChange={setValue}
          label="Опция 1"
        />
        <CustomRadio
          name="example"
          value="option2"
          checked={value === "option2"}
          onChange={setValue}
          label="Опция 2"
        />
        <CustomRadio
          name="example"
          value="option3"
          checked={value === "option3"}
          onChange={setValue}
          label="Опция 3"
        />
      </div>
    )
  },
}

export const WithDescription: Story = {
  render: () => {
    const [value, setValue] = useState("option1")
    
    return (
      <div className="space-y-4">
        <CustomRadio
          name="example2"
          value="option1"
          checked={value === "option1"}
          onChange={setValue}
        >
          <div>
            <div className="font-medium">Базовый план</div>
            <div className="text-sm text-gray-600">Включает основные функции</div>
          </div>
        </CustomRadio>
        <CustomRadio
          name="example2"
          value="option2"
          checked={value === "option2"}
          onChange={setValue}
        >
          <div>
            <div className="font-medium">Продвинутый план</div>
            <div className="text-sm text-gray-600">Включает все функции + поддержка</div>
          </div>
        </CustomRadio>
        <CustomRadio
          name="example2"
          value="option3"
          checked={value === "option3"}
          onChange={setValue}
        >
          <div>
            <div className="font-medium">Премиум план</div>
            <div className="text-sm text-gray-600">Все функции + приоритетная поддержка</div>
          </div>
        </CustomRadio>
      </div>
    )
  },
}

export const DifferentSizes: Story = {
  render: () => {
    const [value1, setValue1] = useState("small")
    const [value2, setValue2] = useState("medium")
    const [value3, setValue3] = useState("large")
    
    return (
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-semibold mb-2">Small Size</h3>
          <div className="space-y-2">
            <CustomRadio
              name="small"
              value="small1"
              checked={value1 === "small1"}
              onChange={setValue1}
              label="Маленький размер"
              size="sm"
            />
            <CustomRadio
              name="small"
              value="small2"
              checked={value1 === "small2"}
              onChange={setValue1}
              label="Еще один маленький"
              size="sm"
            />
          </div>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold mb-2">Medium Size</h3>
          <div className="space-y-2">
            <CustomRadio
              name="medium"
              value="medium1"
              checked={value2 === "medium1"}
              onChange={setValue2}
              label="Средний размер"
              size="md"
            />
            <CustomRadio
              name="medium"
              value="medium2"
              checked={value2 === "medium2"}
              onChange={setValue2}
              label="Еще один средний"
              size="md"
            />
          </div>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold mb-2">Large Size</h3>
          <div className="space-y-2">
            <CustomRadio
              name="large"
              value="large1"
              checked={value3 === "large1"}
              onChange={setValue3}
              label="Большой размер"
              size="lg"
            />
            <CustomRadio
              name="large"
              value="large2"
              checked={value3 === "large2"}
              onChange={setValue3}
              label="Еще один большой"
              size="lg"
            />
          </div>
        </div>
      </div>
    )
  },
}

export const Disabled: Story = {
  render: () => {
    const [value, setValue] = useState("option1")
    
    return (
      <div className="space-y-4">
        <CustomRadio
          name="disabled"
          value="option1"
          checked={value === "option1"}
          onChange={setValue}
          label="Активная опция"
        />
        <CustomRadio
          name="disabled"
          value="option2"
          checked={value === "option2"}
          onChange={setValue}
          label="Отключенная опция"
          disabled
        />
        <CustomRadio
          name="disabled"
          value="option3"
          checked={value === "option3"}
          onChange={setValue}
          label="Еще одна активная"
        />
      </div>
    )
  },
}

export const CustomColors: Story = {
  render: () => {
    const [value, setValue] = useState("option1")
    
    return (
      <div className="space-y-4">
        <CustomRadio
          name="custom"
          value="option1"
          checked={value === "option1"}
          onChange={setValue}
          label="Кастомные цвета"
          borderColor="#3b82f6"
          backgroundColor="#f0f9ff"
        />
        <CustomRadio
          name="custom"
          value="option2"
          checked={value === "option2"}
          onChange={setValue}
          label="Еще один с кастомными цветами"
          borderColor="#3b82f6"
          backgroundColor="#f0f9ff"
        />
      </div>
    )
  },
}

export const ComplexContent: Story = {
  render: () => {
    const [value, setValue] = useState("option1")
    
    return (
      <div className="space-y-4">
        <CustomRadio
          name="complex"
          value="option1"
          checked={value === "option1"}
          onChange={setValue}
        >
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
              <span className="text-blue-600 font-bold">A</span>
            </div>
            <div>
              <div className="font-medium">План A</div>
              <div className="text-sm text-gray-600">Базовый функционал</div>
            </div>
          </div>
        </CustomRadio>
        <CustomRadio
          name="complex"
          value="option2"
          checked={value === "option2"}
          onChange={setValue}
        >
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
              <span className="text-green-600 font-bold">B</span>
            </div>
            <div>
              <div className="font-medium">План B</div>
              <div className="text-sm text-gray-600">Расширенный функционал</div>
            </div>
          </div>
        </CustomRadio>
      </div>
    )
  },
} 