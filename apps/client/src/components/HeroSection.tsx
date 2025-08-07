"use client"

import { CustomHeroSection, type HeroBlock } from "@poizon/ui-kit"
import { Truck, Shield, Heart, Zap, ShoppingCart, Star, ArrowRight, ChevronDown } from "lucide-react"
import { CustomHeroSectionProps } from "../../../../packages/ui-kit/components/custom-hero-section"

const heroBlocks: HeroBlock[] = [
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
  {
    id: "cart",
    title: "Корзина",
    description: "Добавляйте товары",
    icon: <ShoppingCart className="w-5 h-5" />,
    position: "center",
    delay: 800,
    animation: "scale-in",
    variant: "info",
    size: "lg",
  },
]

export default function HeroSection(props: CustomHeroSectionProps) {
  const handleBlockClick = (block: HeroBlock) => {
    // Здесь можно добавить логику для обработки кликов по блокам
    console.log(`Нажат блок: ${block.title}`)
    
    // Пример навигации по блокам
    switch (block.id) {
      case "delivery":
        // Прокрутка к секции доставки
        document.getElementById("delivery-section")?.scrollIntoView({ behavior: "smooth" })
        break
      case "quality":
        // Прокрутка к секции качества
        document.getElementById("quality-section")?.scrollIntoView({ behavior: "smooth" })
        break
      case "favorites":
        // Переход к избранному
        window.location.href = "/favorites"
        break
      case "flash":
        // Переход к акциям
        window.location.href = "/promotions"
        break
      case "cart":
        // Переход к корзине
        window.location.href = "/cart"
        break
      default:
        break
    }
  }

  const handlePrimaryButtonClick = () => {
    // Переход к каталогу
    window.location.href = "/catalog"
  }

  const handleSecondaryButtonClick = () => {
    // Переход к акциям
    window.location.href = "/promotions"
  }

  const handleScrollIndicatorClick = () => {
    // Прокрутка к следующей секции
    document.querySelector(".container")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <CustomHeroSection
      title="POIZON MARKET"
      subtitle="Официальный маркетплейс в России"
      description="Стильная одежда и аксессуары от лучших брендов. Быстрая доставка и гарантия качества."
      backgroundVideo="/static/images/mascote-scene.mp4"
      height="100vh"
      showOverlay={true}
      overlayOpacity={0.3}
      textColor="light"
      align="center"
      showBlocks={true}
      blockDelay={300}
      blocks={heroBlocks}
      onBlockClick={handleBlockClick}
      className="chamfer-clip"
      // Новые пропсы
      primaryButton={{
        text: "Перейти в каталог",
        onClick: handlePrimaryButtonClick,
        variant: "primary",
        size: "lg",
        icon: <ArrowRight className="w-5 h-5" />
      }}
      secondaryButton={{
        text: "Смотреть акции",
        onClick: handleSecondaryButtonClick,
        variant: "outlined",
        size: "lg"
      }}
      showScrollIndicator={true}
      onScrollIndicatorClick={handleScrollIndicatorClick}
      backgroundBlur={false}
      {...props}
    />
  )
} 