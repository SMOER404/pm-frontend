import type { Meta, StoryObj } from "@storybook/react"
import CustomGrid from "../components/custom-grid"

const meta: Meta<typeof CustomGrid> = {
  title: "Components/Grid",
  component: CustomGrid,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    spacing: {
      control: { type: "select" },
      options: [0, 1, 2, 3, 4, 5, 6, 8, 10, 12],
    },
    direction: {
      control: { type: "select" },
      options: ["row", "column", "row-reverse", "column-reverse"],
    },
    justifyContent: {
      control: { type: "select" },
      options: ["flex-start", "center", "flex-end", "space-between", "space-around", "space-evenly"],
    },
    alignItems: {
      control: { type: "select" },
      options: ["flex-start", "center", "flex-end", "stretch", "baseline"],
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

const GridItem = ({ children, className = "", xs = 12, sm, md, lg, xl, style }: { 
  children: React.ReactNode; 
  className?: string;
  xs?: number;
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
  style?: React.CSSProperties;
}) => (
  <CustomGrid item xs={xs} sm={sm} md={md} lg={lg} xl={xl}>
    <div className={`p-4 bg-gray-100 border rounded text-center ${className}`} style={style}>
      {children}
    </div>
  </CustomGrid>
)

export const Default: Story = {
  args: {
    container: true,
    spacing: 2,
    children: (
      <>
        <GridItem xs={12} sm={6} md={4}>Элемент 1</GridItem>
        <GridItem xs={12} sm={6} md={4}>Элемент 2</GridItem>
        <GridItem xs={12} sm={6} md={4}>Элемент 3</GridItem>
        <GridItem xs={12} sm={6} md={4}>Элемент 4</GridItem>
        <GridItem xs={12} sm={6} md={4}>Элемент 5</GridItem>
        <GridItem xs={12} sm={6} md={4}>Элемент 6</GridItem>
      </>
    ),
  },
}

export const DifferentSpacing: Story = {
  render: () => (
    <div className="space-y-8">
      <div>
        <h3 className="text-lg font-semibold mb-4">Spacing 1</h3>
        <CustomGrid container spacing={1}>
          <GridItem xs={6} md={3}>Элемент 1</GridItem>
          <GridItem xs={6} md={3}>Элемент 2</GridItem>
          <GridItem xs={6} md={3}>Элемент 3</GridItem>
          <GridItem xs={6} md={3}>Элемент 4</GridItem>
        </CustomGrid>
      </div>
      
      <div>
        <h3 className="text-lg font-semibold mb-4">Spacing 4</h3>
        <CustomGrid container spacing={4}>
          <GridItem xs={6} md={3}>Элемент 1</GridItem>
          <GridItem xs={6} md={3}>Элемент 2</GridItem>
          <GridItem xs={6} md={3}>Элемент 3</GridItem>
          <GridItem xs={6} md={3}>Элемент 4</GridItem>
        </CustomGrid>
      </div>
      
      <div>
        <h3 className="text-lg font-semibold mb-4">Spacing 8</h3>
        <CustomGrid container spacing={8}>
          <GridItem xs={6} md={3}>Элемент 1</GridItem>
          <GridItem xs={6} md={3}>Элемент 2</GridItem>
          <GridItem xs={6} md={3}>Элемент 3</GridItem>
          <GridItem xs={6} md={3}>Элемент 4</GridItem>
        </CustomGrid>
      </div>
    </div>
  ),
}

export const ResponsiveGrid: Story = {
  render: () => (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Responsive Grid (1-2-3-4 columns)</h3>
      <CustomGrid container spacing={2}>
        <GridItem xs={12} sm={6} lg={4} xl={3}>Элемент 1</GridItem>
        <GridItem xs={12} sm={6} lg={4} xl={3}>Элемент 2</GridItem>
        <GridItem xs={12} sm={6} lg={4} xl={3}>Элемент 3</GridItem>
        <GridItem xs={12} sm={6} lg={4} xl={3}>Элемент 4</GridItem>
        <GridItem xs={12} sm={6} lg={4} xl={3}>Элемент 5</GridItem>
        <GridItem xs={12} sm={6} lg={4} xl={3}>Элемент 6</GridItem>
        <GridItem xs={12} sm={6} lg={4} xl={3}>Элемент 7</GridItem>
        <GridItem xs={12} sm={6} lg={4} xl={3}>Элемент 8</GridItem>
      </CustomGrid>
    </div>
  ),
}

export const Justification: Story = {
  render: () => (
    <div className="space-y-8">
      <div>
        <h3 className="text-lg font-semibold mb-4">Center</h3>
        <CustomGrid container spacing={2} justifyContent="center">
          <GridItem xs={4}>Элемент 1</GridItem>
          <GridItem xs={4}>Элемент 2</GridItem>
          <GridItem xs={4}>Элемент 3</GridItem>
        </CustomGrid>
      </div>
      
      <div>
        <h3 className="text-lg font-semibold mb-4">Space Between</h3>
        <CustomGrid container spacing={2} justifyContent="space-between">
          <GridItem xs={3}>Элемент 1</GridItem>
          <GridItem xs={3}>Элемент 2</GridItem>
          <GridItem xs={3}>Элемент 3</GridItem>
        </CustomGrid>
      </div>
      
      <div>
        <h3 className="text-lg font-semibold mb-4">Space Around</h3>
        <CustomGrid container spacing={2} justifyContent="space-around">
          <GridItem xs={3}>Элемент 1</GridItem>
          <GridItem xs={3}>Элемент 2</GridItem>
          <GridItem xs={3}>Элемент 3</GridItem>
        </CustomGrid>
      </div>
    </div>
  ),
}

export const Alignment: Story = {
  render: () => (
    <div className="space-y-8">
      <div>
        <h3 className="text-lg font-semibold mb-4">Center Alignment</h3>
        <CustomGrid container spacing={2} alignItems="center" style={{ minHeight: "200px" }}>
          <GridItem xs={4} style={{ height: "100px" }}>Короткий</GridItem>
          <GridItem xs={4} style={{ height: "150px" }}>Средний</GridItem>
          <GridItem xs={4} style={{ height: "200px" }}>Длинный</GridItem>
        </CustomGrid>
      </div>
      
      <div>
        <h3 className="text-lg font-semibold mb-4">Stretch Alignment</h3>
        <CustomGrid container spacing={2} alignItems="stretch" style={{ minHeight: "200px" }}>
          <GridItem xs={4}>Короткий</GridItem>
          <GridItem xs={4}>Средний</GridItem>
          <GridItem xs={4}>Длинный</GridItem>
        </CustomGrid>
      </div>
    </div>
  ),
}

export const ComplexContent: Story = {
  render: () => (
    <CustomGrid container spacing={3}>
      <GridItem xs={12} md={6}>
        <div className="p-6 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-lg border">
          <h3 className="text-lg font-semibold mb-2">Карточка 1</h3>
          <p className="text-gray-600 mb-4">Описание первой карточки с дополнительным контентом.</p>
          <div className="flex gap-2">
            <span className="px-2 py-1 bg-blue-200 text-blue-800 rounded text-sm">Тег 1</span>
            <span className="px-2 py-1 bg-blue-200 text-blue-800 rounded text-sm">Тег 2</span>
          </div>
        </div>
      </GridItem>
      
      <GridItem xs={12} md={6}>
        <div className="p-6 bg-gradient-to-br from-green-50 to-emerald-100 rounded-lg border">
          <h3 className="text-lg font-semibold mb-2">Карточка 2</h3>
          <p className="text-gray-600 mb-4">Описание второй карточки с дополнительным контентом.</p>
          <div className="flex gap-2">
            <span className="px-2 py-1 bg-green-200 text-green-800 rounded text-sm">Тег 3</span>
            <span className="px-2 py-1 bg-green-200 text-green-800 rounded text-sm">Тег 4</span>
          </div>
        </div>
      </GridItem>
      
      <GridItem xs={12} md={6}>
        <div className="p-6 bg-gradient-to-br from-purple-50 to-violet-100 rounded-lg border">
          <h3 className="text-lg font-semibold mb-2">Карточка 3</h3>
          <p className="text-gray-600 mb-4">Описание третьей карточки с дополнительным контентом.</p>
          <div className="flex gap-2">
            <span className="px-2 py-1 bg-purple-200 text-purple-800 rounded text-sm">Тег 5</span>
            <span className="px-2 py-1 bg-purple-200 text-purple-800 rounded text-sm">Тег 6</span>
          </div>
        </div>
      </GridItem>
      
      <GridItem xs={12} md={6}>
        <div className="p-6 bg-gradient-to-br from-orange-50 to-amber-100 rounded-lg border">
          <h3 className="text-lg font-semibold mb-2">Карточка 4</h3>
          <p className="text-gray-600 mb-4">Описание четвертой карточки с дополнительным контентом.</p>
          <div className="flex gap-2">
            <span className="px-2 py-1 bg-orange-200 text-orange-800 rounded text-sm">Тег 7</span>
            <span className="px-2 py-1 bg-orange-200 text-orange-800 rounded text-sm">Тег 8</span>
          </div>
        </div>
      </GridItem>
    </CustomGrid>
  ),
} 