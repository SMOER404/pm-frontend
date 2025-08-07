import type { Meta, StoryObj } from "@storybook/react"
import CustomCard from "../components/custom-card"
import CustomButton from "../components/custom-button"
import { Heart, Star, Share, Eye } from "lucide-react"

const meta: Meta<typeof CustomCard> = {
  title: "Components/Card V2",
  component: CustomCard,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["default", "brand", "primary"],
    },
    style: {
      control: { type: "select" },
      options: ["outlined", "filled", "elevated", "flat"],
    },
    size: {
      control: { type: "select" },
      options: ["xs", "sm", "md", "lg", "xl"],
    },
    interactive: {
      control: { type: "boolean" },
    },
    disabled: {
      control: { type: "boolean" },
    },
    hoverable: {
      control: { type: "boolean" },
    },
    chamfered: {
      control: { type: "boolean" },
    },
  },
}

export default meta
type Story = StoryObj<typeof CustomCard>

export const Default: Story = {
  args: {
    children: (
      <div>
        <h3 className="text-lg font-semibold mb-2">Заголовок карточки</h3>
        <p className="text-gray-600">
          Это содержимое карточки. Здесь может быть любой контент.
        </p>
      </div>
    ),
  },
}

export const Variants: Story = {
  render: () => (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-4xl">
      <CustomCard variant="default" style="outlined">
        <h3 className="text-lg font-semibold mb-2">Default Outlined</h3>
        <p className="text-gray-600">Карточка с рамкой по умолчанию.</p>
      </CustomCard>

      <CustomCard variant="brand" style="filled">
        <h3 className="text-lg font-semibold mb-2">Brand Filled</h3>
        <p className="text-gray-600">Карточка с брендовыми цветами.</p>
      </CustomCard>

      <CustomCard variant="primary" style="elevated">
        <h3 className="text-lg font-semibold mb-2">Primary Elevated</h3>
        <p className="text-gray-600">Карточка с тенью и основными цветами.</p>
      </CustomCard>
    </div>
  ),
}

export const Styles: Story = {
  render: () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full max-w-6xl">
      <CustomCard style="outlined">
        <h3 className="text-lg font-semibold mb-2">Outlined</h3>
        <p className="text-gray-600">Карточка с рамкой.</p>
      </CustomCard>

      <CustomCard style="filled">
        <h3 className="text-lg font-semibold mb-2">Filled</h3>
        <p className="text-gray-600">Карточка с заливкой.</p>
      </CustomCard>

      <CustomCard style="elevated">
        <h3 className="text-lg font-semibold mb-2">Elevated</h3>
        <p className="text-gray-600">Карточка с тенью.</p>
      </CustomCard>

      <CustomCard style="flat">
        <h3 className="text-lg font-semibold mb-2">Flat</h3>
        <p className="text-gray-600">Плоская карточка.</p>
      </CustomCard>
    </div>
  ),
}

export const Sizes: Story = {
  render: () => (
    <div className="space-y-4 w-full max-w-2xl">
      <CustomCard size="xs">
        <h3 className="text-lg font-semibold mb-2">Extra Small</h3>
        <p className="text-gray-600">Самая маленькая карточка.</p>
      </CustomCard>

      <CustomCard size="sm">
        <h3 className="text-lg font-semibold mb-2">Small</h3>
        <p className="text-gray-600">Маленькая карточка.</p>
      </CustomCard>

      <CustomCard size="md">
        <h3 className="text-lg font-semibold mb-2">Medium</h3>
        <p className="text-gray-600">Средняя карточка (по умолчанию).</p>
      </CustomCard>

      <CustomCard size="lg">
        <h3 className="text-lg font-semibold mb-2">Large</h3>
        <p className="text-gray-600">Большая карточка.</p>
      </CustomCard>

      <CustomCard size="xl">
        <h3 className="text-lg font-semibold mb-2">Extra Large</h3>
        <p className="text-gray-600">Самая большая карточка.</p>
      </CustomCard>
    </div>
  ),
}

export const WithHeaderAndFooter: Story = {
  render: () => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-4xl">
      <CustomCard
        header={
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold">Карточка с заголовком</h3>
            <span className="text-sm text-gray-500">ID: 123</span>
          </div>
        }
        footer={
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-500">Создано: 2024</span>
            <CustomButton size="sm">Действие</CustomButton>
          </div>
        }
      >
        <p className="text-gray-600">
          Эта карточка имеет заголовок и футер с дополнительной информацией и действиями.
        </p>
      </CustomCard>

      <CustomCard
        header={
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-brand rounded-full flex items-center justify-center">
              <Star className="w-4 h-4 text-white" />
            </div>
            <h3 className="text-lg font-semibold">Карточка с иконкой</h3>
          </div>
        }
        footer={
          <div className="flex gap-2">
            <CustomButton variant="outlined" size="sm" icon={<Heart className="w-4 h-4" />}>
              Нравится
            </CustomButton>
            <CustomButton variant="outlined" size="sm" icon={<Share className="w-4 h-4" />}>
              Поделиться
            </CustomButton>
          </div>
        }
      >
        <p className="text-gray-600">
          Карточка с иконкой в заголовке и кнопками действий в футере.
        </p>
      </CustomCard>
    </div>
  ),
}

export const WithImage: Story = {
  render: () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full max-w-6xl">
      <CustomCard
        image={{
          src: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=300&fit=crop",
          alt: "Кроссовки",
          position: "top",
          size: "md",
        }}
        header={<h3 className="text-lg font-semibold">Кроссовки Nike</h3>}
        footer={
          <div className="flex justify-between items-center">
            <span className="text-xl font-bold text-brand">₽12,999</span>
            <CustomButton size="sm">В корзину</CustomButton>
          </div>
        }
      >
        <p className="text-gray-600">
          Стильные кроссовки для активного образа жизни.
        </p>
      </CustomCard>

      <CustomCard
        image={{
          src: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=300&fit=crop",
          alt: "Часы",
          position: "left",
          size: "sm",
        }}
        header={<h3 className="text-lg font-semibold">Часы Rolex</h3>}
        footer={
          <div className="flex justify-between items-center">
            <span className="text-xl font-bold text-brand">₽450,000</span>
            <CustomButton size="sm">Подробнее</CustomButton>
          </div>
        }
      >
        <p className="text-gray-600">
          Элегантные часы премиум-класса.
        </p>
      </CustomCard>

      <CustomCard
        image={{
          src: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop",
          alt: "Наушники",
          position: "bottom",
          size: "lg",
        }}
        header={<h3 className="text-lg font-semibold">Наушники Sony</h3>}
        footer={
          <div className="flex justify-between items-center">
            <span className="text-xl font-bold text-brand">₽25,999</span>
            <CustomButton size="sm">Купить</CustomButton>
          </div>
        }
      >
        <p className="text-gray-600">
          Беспроводные наушники с шумоподавлением.
        </p>
      </CustomCard>
    </div>
  ),
}

export const Interactive: Story = {
  render: () => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-4xl">
      <CustomCard
        interactive
        hoverable
        onClick={() => alert("Карточка кликнута!")}
        onMouseEnter={() => console.log("Mouse enter")}
        onMouseLeave={() => console.log("Mouse leave")}
      >
        <h3 className="text-lg font-semibold mb-2">Интерактивная карточка</h3>
        <p className="text-gray-600">
          Кликните на эту карточку или наведите мышь для взаимодействия.
        </p>
      </CustomCard>

      <CustomCard
        interactive
        disabled
        hoverable
        onClick={() => alert("Эта карточка отключена")}
      >
        <h3 className="text-lg font-semibold mb-2">Отключенная карточка</h3>
        <p className="text-gray-600">
          Эта карточка отключена и не реагирует на клики.
        </p>
      </CustomCard>
    </div>
  ),
}

export const Chamfered: Story = {
  render: () => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-4xl">
      <CustomCard
        chamfered
        variant="brand"
        style="elevated"
        header={<h3 className="text-lg font-semibold">Скошенные углы</h3>}
      >
        <p className="text-gray-600">
          Эта карточка имеет скошенные углы в стиле бренда.
        </p>
      </CustomCard>

      <CustomCard
        chamfered
        interactive
        hoverable
        onClick={() => alert("Скошенная карточка!")}
        header={<h3 className="text-lg font-semibold">Интерактивная скошенная</h3>}
      >
        <p className="text-gray-600">
          Интерактивная карточка со скошенными углами.
        </p>
      </CustomCard>
    </div>
  ),
}

export const ProductCard: Story = {
  render: () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full max-w-6xl">
      {[
        {
          title: "Кроссовки Nike Air Max",
          price: "₽15,999",
          image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=300&fit=crop",
          rating: 4.8,
          reviews: 124,
        },
        {
          title: "Часы Apple Watch",
          price: "₽35,999",
          image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=300&fit=crop",
          rating: 4.9,
          reviews: 89,
        },
        {
          title: "Наушники AirPods Pro",
          price: "₽22,999",
          image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop",
          rating: 4.7,
          reviews: 156,
        },
      ].map((product, index) => (
        <CustomCard
          key={index}
          interactive
          hoverable
          image={{
            src: product.image,
            alt: product.title,
            position: "top",
            size: "md",
          }}
          header={
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold">{product.title}</h3>
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                <span className="text-sm font-medium">{product.rating}</span>
                <span className="text-sm text-gray-500">({product.reviews})</span>
              </div>
            </div>
          }
          footer={
            <div className="flex justify-between items-center">
              <span className="text-xl font-bold text-brand">{product.price}</span>
              <div className="flex gap-2">
                <CustomButton size="sm" variant="outlined" icon={<Heart className="w-4 h-4" />} />
                <CustomButton size="sm" icon={<Eye className="w-4 h-4" />}>
                  Подробнее
                </CustomButton>
              </div>
            </div>
          }
          onClick={() => alert(`Выбрано: ${product.title}`)}
        >
          <p className="text-gray-600">
            Качественный продукт с отличными отзывами покупателей.
          </p>
        </CustomCard>
      ))}
    </div>
  ),
}

export const CustomStyling: Story = {
  render: () => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-4xl">
      <CustomCard
        className="bg-gradient-to-br from-blue-500 to-purple-600 text-white"
        headerClassName="border-blue-400 text-white"
        footerClassName="border-blue-400 text-white"
        header={<h3 className="text-lg font-semibold">Градиентная карточка</h3>}
        footer={
          <div className="flex justify-end">
            <CustomButton variant="outlined" size="sm">
              Действие
            </CustomButton>
          </div>
        }
      >
        <p>Карточка с кастомным градиентным фоном.</p>
      </CustomCard>

      <CustomCard
        className="border-2 border-dashed border-brand bg-brand/5"
        headerClassName="border-brand/30 text-brand"
        footerClassName="border-brand/30 text-brand"
        header={<h3 className="text-lg font-semibold">Пунктирная карточка</h3>}
        footer={
          <div className="flex justify-end">
            <CustomButton size="sm">
              Добавить
            </CustomButton>
          </div>
        }
      >
        <p className="text-brand/80">
          Карточка с пунктирной рамкой в брендовых цветах.
        </p>
      </CustomCard>
    </div>
  ),
} 