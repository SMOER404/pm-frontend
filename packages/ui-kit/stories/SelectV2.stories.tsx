import type { Meta, StoryObj } from "@storybook/react"
import { useState } from "react"
import CustomSelect from "../components/custom-select-v2"
import { demoSelectData } from "../lib/select-utils"

const meta: Meta<typeof CustomSelect> = {
  title: "Components/Select V2",
  component: CustomSelect,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: { type: "select" },
      options: ["xs", "sm", "md", "lg", "xl"],
    },
    variant: {
      control: { type: "select" },
      options: ["outlined", "filled"],
    },
    multiSelect: {
      control: { type: "boolean" },
    },
    searchable: {
      control: { type: "boolean" },
    },
    disabled: {
      control: { type: "boolean" },
    },
  },
}

export default meta
type Story = StoryObj<typeof CustomSelect>

export const Default: Story = {
  args: {
    label: "Select Country",
    data: demoSelectData.countries,
    placeholder: "Выберите страну...",
  },
}

export const Sizes: Story = {
  render: () => (
    <div className="space-y-4 w-80">
      <CustomSelect 
        label="Extra Small" 
        size="xs" 
        data={demoSelectData.countries.slice(0, 3)}
        placeholder="xs size"
      />
      <CustomSelect 
        label="Small" 
        size="sm" 
        data={demoSelectData.countries.slice(0, 3)}
        placeholder="sm size"
      />
      <CustomSelect 
        label="Medium" 
        size="md" 
        data={demoSelectData.countries.slice(0, 3)}
        placeholder="md size"
      />
      <CustomSelect 
        label="Large" 
        size="lg" 
        data={demoSelectData.countries.slice(0, 3)}
        placeholder="lg size"
      />
      <CustomSelect 
        label="Extra Large" 
        size="xl" 
        data={demoSelectData.countries.slice(0, 3)}
        placeholder="xl size"
      />
    </div>
  ),
}

export const Variants: Story = {
  render: () => (
    <div className="space-y-4 w-80">
      <CustomSelect 
        label="Outlined" 
        variant="outlined" 
        data={demoSelectData.countries.slice(0, 3)}
        placeholder="Outlined variant"
      />
      <CustomSelect 
        label="Filled" 
        variant="filled" 
        data={demoSelectData.countries.slice(0, 3)}
        placeholder="Filled variant"
      />
    </div>
  ),
}

export const WithSearch: Story = {
  render: () => (
    <div className="space-y-4 w-80">
      <CustomSelect 
        label="Searchable Select" 
        data={demoSelectData.countries}
        searchable
        placeholder="Поиск страны..."
      />
      <CustomSelect 
        label="Searchable Grouped" 
        data={demoSelectData.groupedCategories}
        searchable
        placeholder="Поиск категории..."
      />
    </div>
  ),
}

export const MultiSelect: Story = {
  render: () => {
    const [selectedCountries, setSelectedCountries] = useState<string[]>([])
    const [selectedCategories, setSelectedCategories] = useState<string[]>([])

    const handleCountriesChange = (value: string | string[]) => {
      setSelectedCountries(Array.isArray(value) ? value : [])
    }

    const handleCategoriesChange = (value: string | string[]) => {
      setSelectedCategories(Array.isArray(value) ? value : [])
    }

    return (
      <div className="space-y-4 w-80">
        <CustomSelect 
          label="Multi Select Countries" 
          data={demoSelectData.countries}
          value={selectedCountries}
          onChange={handleCountriesChange}
          multiSelect
          placeholder="Выберите страны..."
        />
        <p className="text-sm text-gray-600">
          Выбрано: {selectedCountries.length} стран
        </p>
        
        <CustomSelect 
          label="Multi Select Categories" 
          data={demoSelectData.groupedCategories}
          value={selectedCategories}
          onChange={handleCategoriesChange}
          multiSelect
          searchable
          placeholder="Выберите категории..."
        />
        <p className="text-sm text-gray-600">
          Выбрано: {selectedCategories.length} категорий
        </p>
      </div>
    )
  },
}

export const GroupedOptions: Story = {
  render: () => (
    <div className="space-y-4 w-80">
      <CustomSelect 
        label="Grouped Categories" 
        data={demoSelectData.groupedCategories}
        placeholder="Выберите категорию..."
      />
      <CustomSelect 
        label="Grouped with Search" 
        data={demoSelectData.groupedCategories}
        searchable
        placeholder="Поиск категории..."
      />
    </div>
  ),
}

export const States: Story = {
  render: () => (
    <div className="space-y-4 w-80">
      <CustomSelect 
        label="Normal" 
        data={demoSelectData.countries.slice(0, 3)}
        placeholder="Normal state"
      />
      <CustomSelect 
        label="Disabled" 
        data={demoSelectData.countries.slice(0, 3)}
        disabled
        placeholder="Disabled state"
      />
      <CustomSelect 
        label="With Error" 
        data={demoSelectData.countries.slice(0, 3)}
        error="This field has an error"
        placeholder="Error state"
      />
      <CustomSelect 
        label="With Helper" 
        data={demoSelectData.countries.slice(0, 3)}
        helperText="This is helper text"
        placeholder="Helper text"
      />
    </div>
  ),
}

export const ControlledSelect: Story = {
  render: () => {
    const [value, setValue] = useState<string>("")

    const handleChange = (newValue: string | string[]) => {
      setValue(Array.isArray(newValue) ? newValue[0] || "" : newValue)
    }

    return (
      <div className="space-y-4 w-80">
        <CustomSelect 
          label="Controlled Select" 
          data={demoSelectData.countries}
          value={value}
          onChange={handleChange}
          placeholder="This is controlled"
        />
        <p className="text-sm text-gray-600">
          Current value: <span className="font-mono">{value || "(empty)"}</span>
        </p>
        <button 
          onClick={() => setValue("us")}
          className="px-3 py-1 text-sm bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Set to USA
        </button>
        <button 
          onClick={() => setValue("")}
          className="px-3 py-1 text-sm bg-gray-500 text-white rounded hover:bg-gray-600 ml-2"
        >
          Clear
        </button>
      </div>
    )
  },
}

export const ControlledMultiSelect: Story = {
  render: () => {
    const [values, setValues] = useState<string[]>([])

    const handleChange = (newValue: string | string[]) => {
      setValues(Array.isArray(newValue) ? newValue : [])
    }

    return (
      <div className="space-y-4 w-80">
        <CustomSelect 
          label="Controlled Multi Select" 
          data={demoSelectData.countries}
          value={values}
          onChange={handleChange}
          multiSelect
          placeholder="This is controlled multi select"
        />
        <p className="text-sm text-gray-600">
          Current values: <span className="font-mono">{JSON.stringify(values)}</span>
        </p>
        <button 
          onClick={() => setValues(["us", "gb"])}
          className="px-3 py-1 text-sm bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Set to USA & UK
        </button>
        <button 
          onClick={() => setValues([])}
          className="px-3 py-1 text-sm bg-gray-500 text-white rounded hover:bg-gray-600 ml-2"
        >
          Clear
        </button>
      </div>
    )
  },
}

export const Interactive: Story = {
  render: () => {
    const [selectedCountry, setSelectedCountry] = useState<string>("")
    const [selectedCategories, setSelectedCategories] = useState<string[]>([])

    const handleCountryChange = (value: string | string[]) => {
      setSelectedCountry(Array.isArray(value) ? value[0] || "" : value)
    }

    const handleCategoriesChange = (value: string | string[]) => {
      setSelectedCategories(Array.isArray(value) ? value : [])
    }

    return (
      <div className="space-y-6 w-80">
        <CustomSelect 
          label="Country" 
          data={demoSelectData.countries}
          value={selectedCountry}
          onChange={handleCountryChange}
          searchable
          placeholder="Выберите страну..."
        />
        
        <CustomSelect 
          label="Categories" 
          data={demoSelectData.groupedCategories}
          value={selectedCategories}
          onChange={handleCategoriesChange}
          multiSelect
          searchable
          placeholder="Выберите категории..."
        />
        
        <div className="p-4 bg-gray-50 rounded-lg">
          <h4 className="font-medium mb-2">Selected Values:</h4>
          <p className="text-sm text-gray-600">
            Country: <span className="font-mono">{selectedCountry || "(none)"}</span>
          </p>
          <p className="text-sm text-gray-600">
            Categories: <span className="font-mono">{selectedCategories.length > 0 ? selectedCategories.join(", ") : "(none)"}</span>
          </p>
        </div>
      </div>
    )
  },
} 