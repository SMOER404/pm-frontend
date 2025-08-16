import type { Meta, StoryObj } from '@storybook/react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select'
import { Globe, MapPin, User, Settings } from 'lucide-react'

const meta: Meta<typeof Select> = {
  title: 'Inputs/Select',
  component: Select,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'outlined', 'filled', 'ghost'],
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'default', 'lg', 'xl'],
    },
    disabled: {
      control: { type: 'boolean' },
    },
    error: {
      control: { type: 'boolean' },
    },
    required: {
      control: { type: 'boolean' },
    },
    searchable: {
      control: { type: 'boolean' },
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

const countries = [
  { value: "us", label: "United States", icon: <Globe className="h-4 w-4" /> },
  { value: "ca", label: "Canada", icon: <Globe className="h-4 w-4" /> },
  { value: "uk", label: "United Kingdom", icon: <Globe className="h-4 w-4" /> },
  { value: "de", label: "Germany", icon: <Globe className="h-4 w-4" /> },
  { value: "fr", label: "France", icon: <Globe className="h-4 w-4" /> },
  { value: "jp", label: "Japan", icon: <Globe className="h-4 w-4" /> },
]

const cities = [
  { value: "nyc", label: "New York City" },
  { value: "la", label: "Los Angeles" },
  { value: "chicago", label: "Chicago" },
  { value: "houston", label: "Houston" },
  { value: "phoenix", label: "Phoenix" },
  { value: "philadelphia", label: "Philadelphia" },
]

export const Default: Story = {
  args: {
    placeholder: "Select a country",
    children: (
      <SelectContent>
        {countries.map((country) => (
          <SelectItem key={country.value} value={country.value}>
            {country.label}
          </SelectItem>
        ))}
      </SelectContent>
    ),
  },
}

export const WithLabel: Story = {
  args: {
    label: "Country",
    placeholder: "Select a country",
    children: (
      <SelectContent>
        {countries.map((country) => (
          <SelectItem key={country.value} value={country.value}>
            {country.label}
          </SelectItem>
        ))}
      </SelectContent>
    ),
  },
}

export const WithHelperText: Story = {
  args: {
    label: "Country",
    helperText: "Select your country of residence",
    placeholder: "Select a country",
    children: (
      <SelectContent>
        {countries.map((country) => (
          <SelectItem key={country.value} value={country.value}>
            {country.label}
          </SelectItem>
        ))}
      </SelectContent>
    ),
  },
}

export const Required: Story = {
  args: {
    label: "Country",
    required: true,
    placeholder: "Select a country",
    children: (
      <SelectContent>
        {countries.map((country) => (
          <SelectItem key={country.value} value={country.value}>
            {country.label}
          </SelectItem>
        ))}
      </SelectContent>
    ),
  },
}

export const WithError: Story = {
  args: {
    label: "Country",
    error: true,
    errorMessage: "Please select a country",
    placeholder: "Select a country",
    children: (
      <SelectContent>
        {countries.map((country) => (
          <SelectItem key={country.value} value={country.value}>
            {country.label}
          </SelectItem>
        ))}
      </SelectContent>
    ),
  },
}

export const Disabled: Story = {
  args: {
    label: "Country",
    disabled: true,
    placeholder: "Select a country",
    children: (
      <SelectContent>
        {countries.map((country) => (
          <SelectItem key={country.value} value={country.value}>
            {country.label}
          </SelectItem>
        ))}
      </SelectContent>
    ),
  },
}

export const Small: Story = {
  args: {
    size: 'sm',
    placeholder: "Select a country",
    children: (
      <SelectContent>
        {countries.map((country) => (
          <SelectItem key={country.value} value={country.value}>
            {country.label}
          </SelectItem>
        ))}
      </SelectContent>
    ),
  },
}

export const Large: Story = {
  args: {
    size: 'lg',
    placeholder: "Select a country",
    children: (
      <SelectContent>
        {countries.map((country) => (
          <SelectItem key={country.value} value={country.value}>
            {country.label}
          </SelectItem>
        ))}
      </SelectContent>
    ),
  },
}

export const Outlined: Story = {
  args: {
    variant: 'outlined',
    placeholder: "Select a country",
    children: (
      <SelectContent>
        {countries.map((country) => (
          <SelectItem key={country.value} value={country.value}>
            {country.label}
          </SelectItem>
        ))}
      </SelectContent>
    ),
  },
}

export const Filled: Story = {
  args: {
    variant: 'filled',
    placeholder: "Select a country",
    children: (
      <SelectContent>
        {countries.map((country) => (
          <SelectItem key={country.value} value={country.value}>
            {country.label}
          </SelectItem>
        ))}
      </SelectContent>
    ),
  },
}

export const Ghost: Story = {
  args: {
    variant: 'ghost',
    placeholder: "Select a country",
    children: (
      <SelectContent>
        {countries.map((country) => (
          <SelectItem key={country.value} value={country.value}>
            {country.label}
          </SelectItem>
        ))}
      </SelectContent>
    ),
  },
}

export const WithIcons: Story = {
  args: {
    placeholder: "Select a country",
    children: (
      <SelectContent>
        {countries.map((country) => (
          <SelectItem key={country.value} value={country.value} icon={country.icon}>
            {country.label}
          </SelectItem>
        ))}
      </SelectContent>
    ),
  },
}

export const Searchable: Story = {
  args: {
    searchable: true,
    placeholder: "Search and select a country",
    children: (
      <SelectContent>
        {countries.map((country) => (
          <SelectItem key={country.value} value={country.value}>
            {country.label}
          </SelectItem>
        ))}
      </SelectContent>
    ),
  },
}

export const WithGroups: Story = {
  args: {
    placeholder: "Select a location",
    children: (
      <SelectContent>
        <SelectGroup label="Countries">
          {countries.slice(0, 3).map((country) => (
            <SelectItem key={country.value} value={country.value}>
              {country.label}
            </SelectItem>
          ))}
        </SelectGroup>
        <SelectGroup label="Cities">
          {cities.slice(0, 3).map((city) => (
            <SelectItem key={city.value} value={city.value}>
              {city.label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    ),
  },
}

export const WithDisabledItems: Story = {
  args: {
    placeholder: "Select a country",
    children: (
      <SelectContent>
        {countries.map((country, index) => (
          <SelectItem 
            key={country.value} 
            value={country.value}
            disabled={index === 1}
          >
            {country.label}
          </SelectItem>
        ))}
      </SelectContent>
    ),
  },
}

export const Controlled: Story = {
  render: () => {
    const [value, setValue] = React.useState("")
    
    return (
      <div className="space-y-4">
        <Select value={value} onValueChange={setValue}>
          <SelectTrigger>
            <SelectValue placeholder="Select a country" />
          </SelectTrigger>
          <SelectContent>
            {countries.map((country) => (
              <SelectItem key={country.value} value={country.value}>
                {country.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <p className="text-sm text-muted-foreground">
          Selected value: {value || 'None'}
        </p>
      </div>
    )
  },
}

export const FormExample: Story = {
  render: () => (
    <div className="space-y-4 w-80">
      <Select>
        <SelectTrigger>
          <SelectValue placeholder="Select your country" />
        </SelectTrigger>
        <SelectContent>
          {countries.map((country) => (
            <SelectItem key={country.value} value={country.value}>
              {country.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      
      <Select>
        <SelectTrigger>
          <SelectValue placeholder="Select your city" />
        </SelectTrigger>
        <SelectContent>
          {cities.map((city) => (
            <SelectItem key={city.value} value={city.value}>
              {city.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      
      <Select>
        <SelectTrigger>
          <SelectValue placeholder="Select your role" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="admin">Administrator</SelectItem>
          <SelectItem value="user">User</SelectItem>
          <SelectItem value="guest">Guest</SelectItem>
        </SelectContent>
      </Select>
    </div>
  ),
}

export const AllVariants: Story = {
  render: () => (
    <div className="space-y-4">
      <Select variant="default">
        <SelectTrigger>
          <SelectValue placeholder="Default variant" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="option1">Option 1</SelectItem>
          <SelectItem value="option2">Option 2</SelectItem>
        </SelectContent>
      </Select>
      
      <Select variant="outlined">
        <SelectTrigger>
          <SelectValue placeholder="Outlined variant" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="option1">Option 1</SelectItem>
          <SelectItem value="option2">Option 2</SelectItem>
        </SelectContent>
      </Select>
      
      <Select variant="filled">
        <SelectTrigger>
          <SelectValue placeholder="Filled variant" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="option1">Option 1</SelectItem>
          <SelectItem value="option2">Option 2</SelectItem>
        </SelectContent>
      </Select>
      
      <Select variant="ghost">
        <SelectTrigger>
          <SelectValue placeholder="Ghost variant" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="option1">Option 1</SelectItem>
          <SelectItem value="option2">Option 2</SelectItem>
        </SelectContent>
      </Select>
    </div>
  ),
}

export const AllSizes: Story = {
  render: () => (
    <div className="space-y-4">
      <Select size="sm">
        <SelectTrigger>
          <SelectValue placeholder="Small size" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="option1">Option 1</SelectItem>
          <SelectItem value="option2">Option 2</SelectItem>
        </SelectContent>
      </Select>
      
      <Select size="default">
        <SelectTrigger>
          <SelectValue placeholder="Default size" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="option1">Option 1</SelectItem>
          <SelectItem value="option2">Option 2</SelectItem>
        </SelectContent>
      </Select>
      
      <Select size="lg">
        <SelectTrigger>
          <SelectValue placeholder="Large size" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="option1">Option 1</SelectItem>
          <SelectItem value="option2">Option 2</SelectItem>
        </SelectContent>
      </Select>
      
      <Select size="xl">
        <SelectTrigger>
          <SelectValue placeholder="Extra large size" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="option1">Option 1</SelectItem>
          <SelectItem value="option2">Option 2</SelectItem>
        </SelectContent>
      </Select>
    </div>
  ),
}
