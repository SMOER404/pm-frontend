import type { Meta, StoryObj } from "@storybook/react"
import CustomHeroSection, { type HeroBlock } from "../components/custom-hero-section"
import { ShoppingCart, Star, Truck, Shield, Heart, Zap, ArrowRight, ChevronDown } from "lucide-react"

const meta: Meta<typeof CustomHeroSection> = {
  title: "Components/HeroSection",
  component: CustomHeroSection,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  argTypes: {
    title: {
      control: { type: "text" },
    },
    subtitle: {
      control: { type: "text" },
    },
    description: {
      control: { type: "text" },
    },
    backgroundVideo: {
      control: { type: "text" },
    },
    backgroundImage: {
      control: { type: "text" },
    },
    height: {
      control: { type: "text" },
    },
    showOverlay: {
      control: { type: "boolean" },
    },
    overlayOpacity: {
      control: { type: "range", min: 0, max: 1, step: 0.1 },
    },
    textColor: {
      control: { type: "select" },
      options: ["light", "dark"],
    },
    align: {
      control: { type: "select" },
      options: ["left", "center", "right"],
    },
    showBlocks: {
      control: { type: "boolean" },
    },
    blockDelay: {
      control: { type: "number" },
    },
    showScrollIndicator: {
      control: { type: "boolean" },
    },
    backgroundBlur: {
      control: { type: "boolean" },
    },
    backgroundBlurAmount: {
      control: { type: "range", min: 0, max: 20, step: 1 },
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

// Базовый пример с видео фоном и кнопками
export const WithVideoBackground: Story = {
  args: {
    title: "POIZON MARKET",
    subtitle: "Официальный маркетплейс в России",
    description: "Стильная одежда и аксессуары от лучших брендов. Быстрая доставка и гарантия качества.",
    backgroundVideo: "/static/images/mascote-scene.mp4",
    height: "100vh",
    showOverlay: true,
    overlayOpacity: 0.3,
    textColor: "light",
    align: "center",
    showBlocks: true,
    blockDelay: 300,
    primaryButton: {
      text: "Перейти в каталог",
      variant: "primary",
      size: "lg",
      icon: <ArrowRight className="w-5 h-5" />
    },
    secondaryButton: {
      text: "Смотреть акции",
      variant: "outlined",
      size: "lg"
    },
    showScrollIndicator: true,
    blocks: [
      {
        id: "delivery",
        title: "Быстрая доставка",
        description: "Доставка по всей России",
        icon: <Truck className="w-5 h-5" />,
        position: "top-left",
        delay: 0,
        animation: "slide-up",
        variant: "primary",
        size: "md",
      },
      {
        id: "quality",
        title: "Гарантия качества",
        description: "100% оригинальные товары",
        icon: <Shield className="w-5 h-5" />,
        position: "top-right",
        delay: 200,
        animation: "slide-down",
        variant: "success",
        size: "md",
      },
      {
        id: "favorites",
        title: "Избранное",
        description: "Сохраняйте любимые товары",
        icon: <Heart className="w-5 h-5" />,
        position: "bottom-left",
        delay: 400,
        animation: "slide-right",
        variant: "danger",
        size: "md",
      },
      {
        id: "flash",
        title: "Мгновенные скидки",
        description: "Специальные предложения",
        icon: <Zap className="w-5 h-5" />,
        position: "bottom-right",
        delay: 600,
        animation: "slide-left",
        variant: "warning",
        size: "md",
      },
    ],
  },
}

// Пример с изображением фоном и размытием
export const WithImageBackground: Story = {
  args: {
    title: "Стильная одежда",
    subtitle: "От лучших брендов",
    description: "Найдите свой уникальный стиль с нашей коллекцией одежды и аксессуаров.",
    backgroundImage: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    height: "80vh",
    showOverlay: true,
    overlayOpacity: 0.5,
    textColor: "light",
    align: "left",
    showBlocks: true,
    blockDelay: 200,
    backgroundBlur: true,
    backgroundBlurAmount: 5,
    primaryButton: {
      text: "Начать покупки",
      variant: "primary",
      size: "md",
      icon: <ShoppingCart className="w-4 h-4" />
    },
    blocks: [
      {
        id: "shopping",
        title: "Корзина",
        description: "Добавляйте товары",
        icon: <ShoppingCart className="w-5 h-5" />,
        position: "top-right",
        delay: 0,
        animation: "fade-in",
        variant: "primary",
        size: "sm",
      },
      {
        id: "rating",
        title: "Отзывы",
        description: "Читайте отзывы",
        icon: <Star className="w-5 h-5" />,
        position: "bottom-right",
        delay: 300,
        animation: "scale-in",
        variant: "warning",
        size: "sm",
      },
    ],
  },
}

// Пример с дополнительным контентом
export const WithAdditionalContent: Story = {
  args: {
    title: "Кастомный контент",
    subtitle: "Дополнительные элементы",
    description: "Добавляйте любой дополнительный контент в Hero секцию.",
    backgroundVideo: "/static/images/mascote-scene2.mp4",
    height: "90vh",
    showOverlay: true,
    overlayOpacity: 0.4,
    textColor: "light",
    align: "center",
    showBlocks: false,
    primaryButton: {
      text: "Основная кнопка",
      variant: "primary",
      size: "lg"
    },
    secondaryButton: {
      text: "Дополнительная кнопка",
      variant: "ghost",
      size: "lg"
    },
    additionalContent: (
      <div className="mt-8 p-6 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
        <h3 className="text-xl font-semibold mb-2">Дополнительная информация</h3>
        <p className="text-sm opacity-90">
          Здесь может быть любая дополнительная информация, статистика или другие элементы.
        </p>
        <div className="flex gap-4 mt-4">
          <div className="text-center">
            <div className="text-2xl font-bold">1000+</div>
            <div className="text-sm opacity-75">Товаров</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold">50+</div>
            <div className="text-sm opacity-75">Брендов</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold">24/7</div>
            <div className="text-sm opacity-75">Поддержка</div>
          </div>
        </div>
      </div>
    ),
  },
}

// Пример без блоков
export const WithoutBlocks: Story = {
  args: {
    title: "Минималистичный дизайн",
    subtitle: "Чистота и простота",
    description: "Иногда меньше значит больше. Фокус на контенте без отвлекающих элементов.",
    backgroundVideo: "/static/images/mascote-scene2.mp4",
    height: "70vh",
    showOverlay: true,
    overlayOpacity: 0.4,
    textColor: "light",
    align: "center",
    showBlocks: false,
    primaryButton: {
      text: "Узнать больше",
      variant: "outlined",
      size: "md"
    },
  },
}

// Пример с темным текстом
export const DarkText: Story = {
  args: {
    title: "Светлый фон",
    subtitle: "Темный текст",
    description: "Идеально для светлых фонов и изображений.",
    backgroundImage: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
    height: "90vh",
    showOverlay: false,
    textColor: "dark",
    align: "center",
    showBlocks: true,
    blockDelay: 400,
    primaryButton: {
      text: "Начать",
      variant: "primary",
      size: "lg"
    },
    secondaryButton: {
      text: "Подробнее",
      variant: "secondary",
      size: "lg"
    },
    blocks: [
      {
        id: "feature1",
        title: "Особенность 1",
        description: "Описание особенности",
        icon: <Star className="w-5 h-5" />,
        position: "top-left",
        delay: 0,
        animation: "bounce",
        variant: "info",
        size: "lg",
      },
      {
        id: "feature2",
        title: "Особенность 2",
        description: "Описание особенности",
        icon: <Heart className="w-5 h-5" />,
        position: "top-right",
        delay: 200,
        animation: "bounce",
        variant: "success",
        size: "lg",
      },
    ],
  },
}

// Интерактивный пример
export const Interactive: Story = {
  args: {
    title: "Интерактивные блоки",
    subtitle: "Нажмите на блоки",
    description: "Каждый блок можно настроить и сделать интерактивным.",
    backgroundVideo: "/static/images/mascote-scene.mp4",
    height: "100vh",
    showOverlay: true,
    overlayOpacity: 0.3,
    textColor: "light",
    align: "center",
    showBlocks: true,
    blockDelay: 500,
    primaryButton: {
      text: "Интерактивная кнопка",
      variant: "primary",
      size: "lg",
      icon: <ArrowRight className="w-5 h-5" />
    },
    showScrollIndicator: true,
    blocks: [
      {
        id: "interactive1",
        title: "Кликните меня",
        description: "Я интерактивный!",
        icon: <Zap className="w-5 h-5" />,
        position: "top-left",
        delay: 0,
        animation: "slide-up",
        variant: "primary",
        size: "md",
      },
      {
        id: "interactive2",
        title: "И меня тоже",
        description: "Я тоже интерактивный!",
        icon: <Shield className="w-5 h-5" />,
        position: "top-right",
        delay: 200,
        animation: "slide-down",
        variant: "success",
        size: "md",
      },
      {
        id: "interactive3",
        title: "И меня",
        description: "Все блоки интерактивные!",
        icon: <Heart className="w-5 h-5" />,
        position: "bottom-left",
        delay: 400,
        animation: "slide-right",
        variant: "danger",
        size: "md",
      },
      {
        id: "interactive4",
        title: "Последний",
        description: "Нажмите на любой блок!",
        icon: <Star className="w-5 h-5" />,
        position: "bottom-right",
        delay: 600,
        animation: "slide-left",
        variant: "warning",
        size: "md",
      },
    ],
    onBlockClick: (block: HeroBlock) => {
      alert(`Нажат блок: ${block.title}`)
    },
  },
} 