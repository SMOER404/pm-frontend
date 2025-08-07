"use client"

import React, { useState, useEffect } from "react"
import { cn } from "../lib/utils"
import { tokens } from "../lib/design-tokens"
import { CustomTypography, Heading } from "./custom-typography"

export interface HeroBlock {
  id: string
  title: string
  description?: string
  icon?: React.ReactNode
  position: "top-left" | "top-right" | "bottom-left" | "bottom-right" | "center"
  delay: number
  animation: "fade-in" | "slide-up" | "slide-down" | "slide-left" | "slide-right" | "scale-in" | "bounce"
  variant?: "primary" | "secondary" | "success" | "warning" | "danger" | "info"
  size?: "sm" | "md" | "lg"
}

export interface CustomHeroSectionProps {
  title: string
  subtitle?: string
  description?: string
  backgroundVideo?: string
  backgroundImage?: string
  blocks?: HeroBlock[]
  height?: string
  className?: string
  contentClassName?: string
  overlayClassName?: string
  showOverlay?: boolean
  overlayOpacity?: number
  textColor?: "light" | "dark"
  align?: "left" | "center" | "right"
  showBlocks?: boolean
  blockDelay?: number
  onBlockClick?: (block: HeroBlock) => void
  // Новые пропсы
  primaryButton?: {
    text: string
    onClick?: () => void
    variant?: "primary" | "secondary" | "outlined" | "ghost"
    size?: "sm" | "md" | "lg"
    icon?: React.ReactNode
  }
  secondaryButton?: {
    text: string
    onClick?: () => void
    variant?: "primary" | "secondary" | "outlined" | "ghost"
    size?: "sm" | "md" | "lg"
    icon?: React.ReactNode
  }
  additionalContent?: React.ReactNode
  showScrollIndicator?: boolean
  onScrollIndicatorClick?: () => void
  customBackground?: React.ReactNode
  backgroundBlur?: boolean
  backgroundBlurAmount?: number
}

const getAnimationClasses = (animation: HeroBlock["animation"], isVisible: boolean) => {
  const baseClasses = "transition-all duration-700 ease-out"
  
  if (!isVisible) {
    switch (animation) {
      case "fade-in":
        return `${baseClasses} opacity-0`
      case "slide-up":
        return `${baseClasses} opacity-0 translate-y-8`
      case "slide-down":
        return `${baseClasses} opacity-0 -translate-y-8`
      case "slide-left":
        return `${baseClasses} opacity-0 translate-x-8`
      case "slide-right":
        return `${baseClasses} opacity-0 -translate-x-8`
      case "scale-in":
        return `${baseClasses} opacity-0 scale-95`
      case "bounce":
        return `${baseClasses} opacity-0 scale-95`
      default:
        return `${baseClasses} opacity-0`
    }
  }
  
  switch (animation) {
    case "fade-in":
      return `${baseClasses} opacity-100`
    case "slide-up":
      return `${baseClasses} opacity-100 translate-y-0`
    case "slide-down":
      return `${baseClasses} opacity-100 translate-y-0`
    case "slide-left":
      return `${baseClasses} opacity-100 translate-x-0`
    case "slide-right":
      return `${baseClasses} opacity-100 translate-x-0`
    case "scale-in":
      return `${baseClasses} opacity-100 scale-100`
    case "bounce":
      return `${baseClasses} opacity-100 scale-100 animate-bounce`
    default:
      return `${baseClasses} opacity-100`
  }
}

const getPositionClasses = (position: HeroBlock["position"]) => {
  switch (position) {
    case "top-left":
      return "top-4 left-4 sm:top-8 sm:left-8"
    case "top-right":
      return "top-4 right-4 sm:top-8 sm:right-8"
    case "bottom-left":
      return "bottom-4 left-4 sm:bottom-8 sm:left-8"
    case "bottom-right":
      return "bottom-4 right-4 sm:bottom-8 sm:right-8"
    case "center":
      return "top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
    default:
      return "top-4 left-4 sm:top-8 sm:left-8"
  }
}

const getVariantClasses = (variant: HeroBlock["variant"] = "primary") => {
  switch (variant) {
    case "primary":
      return "bg-brand text-white border-brand-dark"
    case "secondary":
      return "bg-gray-800 text-white border-gray-700"
    case "success":
      return "bg-green-600 text-white border-green-700"
    case "warning":
      return "bg-yellow-500 text-white border-yellow-600"
    case "danger":
      return "bg-red-600 text-white border-red-700"
    case "info":
      return "bg-blue-600 text-white border-blue-700"
    default:
      return "bg-brand text-white border-brand-dark"
  }
}

const getSizeClasses = (size: HeroBlock["size"] = "md") => {
  switch (size) {
    case "sm":
      return "p-2 sm:p-3 text-xs sm:text-sm"
    case "md":
      return "p-3 sm:p-4 text-sm sm:text-base"
    case "lg":
      return "p-4 sm:p-6 text-base sm:text-lg"
    default:
      return "p-3 sm:p-4 text-sm sm:text-base"
  }
}

export default function CustomHeroSection({
  title,
  subtitle,
  description,
  backgroundVideo,
  backgroundImage,
  blocks = [],
  height = "100vh",
  className,
  contentClassName,
  overlayClassName,
  showOverlay = true,
  overlayOpacity = 0.4,
  textColor = "light",
  align = "center",
  showBlocks = true,
  blockDelay = 200,
  onBlockClick,
  // Новые пропсы
  primaryButton,
  secondaryButton,
  additionalContent,
  showScrollIndicator = false,
  onScrollIndicatorClick,
  customBackground,
  backgroundBlur = false,
  backgroundBlurAmount = 10,
}: CustomHeroSectionProps) {
  const [visibleBlocks, setVisibleBlocks] = useState<Set<string>>(new Set())

  useEffect(() => {
    if (!showBlocks) return

    const timer = setTimeout(() => {
      blocks.forEach((block, index) => {
        setTimeout(() => {
          setVisibleBlocks(prev => new Set([...prev, block.id]))
        }, block.delay + (index * blockDelay))
      })
    }, 500)

    return () => clearTimeout(timer)
  }, [blocks, showBlocks, blockDelay])

  const getTextColorClasses = () => {
    return textColor === "light" ? "text-white" : "text-gray-900"
  }

  const getAlignClasses = () => {
    switch (align) {
      case "left":
        return "text-left items-start"
      case "right":
        return "text-right items-end"
      case "center":
      default:
        return "text-center items-center"
    }
  }

  return (
    <section
      className={cn(
        "overflow-hidden",
        className
      )}
      style={{ height, position: 'static', top: '-80px', left: 0, right: 0, bottom: 0 }}
    >
      {/* Background Video */}
      {backgroundVideo && (
        <video
          autoPlay
          muted
          playsInline
          className={cn(
            "absolute inset-0 w-full h-full object-cover",
            backgroundBlur && "blur-sm"
          )}
          style={backgroundBlur ? { filter: `blur(${backgroundBlurAmount}px)` } : undefined}
        >
          <source src={backgroundVideo} type="video/mp4" />
        </video>
      )}

      {/* Background Image */}
      {backgroundImage && !backgroundVideo && (
        <div
          className={cn(
            "absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat",
            backgroundBlur && "blur-sm"
          )}
          style={{
            backgroundImage: `url(${backgroundImage})`,
            filter: backgroundBlur ? `blur(${backgroundBlurAmount}px)` : undefined
          }}
        />
      )}

      {/* Custom Background */}
      {customBackground && (
        <div className="absolute inset-0 w-full h-full">
          {customBackground}
        </div>
      )}

      {/* Overlay */}
      {showOverlay && (
        <div
          className={cn(
            "absolute inset-0 bg-black",
            overlayClassName
          )}
          style={{ opacity: overlayOpacity }}
        />
      )}

      {/* Content */}
      <div
        className={cn(
          "relative z-10 flex justify-center h-full px-4 sm:px-6 lg:px-8",
          getAlignClasses(),
          contentClassName
        )}
      >
        <div className="max-w-4xl mx-auto w-full">
          {/* Title */}
          <Heading 
            level={1} 
            className={cn(
              "mb-4",
              getTextColorClasses(),
              // Адаптивные размеры для hero заголовка
              "text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl",
              "font-bold leading-tight tracking-tight"
            )}
          >
            {title}
          </Heading>

          {/* Subtitle */}
          {subtitle && (
            <Heading 
              level={2} 
              className={cn(
                "mb-6 opacity-90",
                getTextColorClasses(),
                // Адаптивные размеры для подзаголовка
                "text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl",
                "font-semibold leading-tight tracking-tight"
              )}
            >
              {subtitle}
            </Heading>
          )}

          {/* Description */}
          {description && (
            <CustomTypography 
              variant="lead" 
              className={cn(
                "mb-8 opacity-80 max-w-3xl",
                getTextColorClasses(),
                align === "center" && "mx-auto",
                align === "right" && "ml-auto",
                // Адаптивные размеры для описания
                "text-base sm:text-lg md:text-xl lg:text-2xl",
                "leading-relaxed"
              )}
            >
              {description}
            </CustomTypography>
          )}

          {/* Buttons */}
          {(primaryButton || secondaryButton) && (
            <div
              className={cn(
                "flex flex-col sm:flex-row gap-4 mb-8",
                align === "center" && "justify-center",
                align === "right" && "justify-end",
                align === "left" && "justify-start"
              )}
            >
              {primaryButton && (
                <button
                  onClick={primaryButton.onClick}
                  className={cn(
                    "px-4 py-2 sm:px-6 sm:py-3 rounded-lg font-semibold transition-all duration-300",
                    "text-sm sm:text-base md:text-lg",
                    primaryButton.variant === "primary" && "bg-brand text-white hover:bg-brand-dark",
                    primaryButton.variant === "secondary" && "bg-gray-800 text-white hover:bg-gray-900",
                    primaryButton.variant === "outlined" && "border-2 border-brand text-brand hover:bg-brand hover:text-white",
                    primaryButton.variant === "ghost" && "text-brand hover:bg-brand/10",
                    primaryButton.size === "sm" && "px-3 py-1.5 text-xs sm:text-sm",
                    primaryButton.size === "lg" && "px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg md:text-xl",
                    "flex items-center gap-2 w-full sm:w-auto justify-center"
                  )}
                >
                  {primaryButton.icon && primaryButton.icon}
                  {primaryButton.text}
                </button>
              )}

              {secondaryButton && (
                <button
                  onClick={secondaryButton.onClick}
                  className={cn(
                    "px-4 py-2 sm:px-6 sm:py-3 rounded-lg font-semibold transition-all duration-300",
                    "text-sm sm:text-base md:text-lg",
                    secondaryButton.variant === "primary" && "bg-brand text-white hover:bg-brand-dark",
                    secondaryButton.variant === "secondary" && "bg-gray-800 text-white hover:bg-gray-900",
                    secondaryButton.variant === "outlined" && "border-2 border-white text-white hover:bg-white hover:text-gray-900",
                    secondaryButton.variant === "ghost" && "text-white hover:bg-white/10",
                    secondaryButton.size === "sm" && "px-3 py-1.5 text-xs sm:text-sm",
                    secondaryButton.size === "lg" && "px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg md:text-xl",
                    "flex items-center gap-2 w-full sm:w-auto justify-center"
                  )}
                >
                  {secondaryButton.icon && secondaryButton.icon}
                  {secondaryButton.text}
                </button>
              )}
            </div>
          )}

          {/* Additional Content */}
          {additionalContent && (
            <div className="mt-8">
              {additionalContent}
            </div>
          )}
        </div>
      </div>

      {/* Scroll Indicator */}
      {showScrollIndicator && (
        <div
          className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 z-20 cursor-pointer"
          onClick={onScrollIndicatorClick}
        >
          <div className="flex flex-col items-center text-white animate-bounce">
            <span className="text-xs sm:text-sm mb-1 sm:mb-2">Прокрутите вниз</span>
            <svg
              className="w-4 h-4 sm:w-6 sm:h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </div>
      )}

      {/* Animated Blocks */}
      {showBlocks && blocks.map((block) => (
        <div
          key={block.id}
          className={cn(
            "fixed z-20 cursor-pointer",
            getPositionClasses(block.position),
            getAnimationClasses(block.animation, visibleBlocks.has(block.id)),
            getVariantClasses(block.variant),
            getSizeClasses(block.size),
            "rounded-lg border-2 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-primary text-brand"
          )}
          onClick={() => onBlockClick?.(block)}
        >
          <div className="flex items-center space-x-2">
            {block.icon && (
              <div className="flex-shrink-0">
                {block.icon}
              </div>
            )}
            <div>
              <div className="font-semibold">{block.title}</div>
              {block.description && (
                <div className="text-sm opacity-90">{block.description}</div>
              )}
            </div>
          </div>
        </div>
      ))}
    </section>
  )
} 