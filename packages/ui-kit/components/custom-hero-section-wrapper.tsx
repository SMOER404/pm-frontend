"use client"

import React from "react"
import CustomHeroSection, { type HeroBlock } from "./custom-hero-section"

export interface CustomHeroSectionWrapperProps {
  title: string
  subtitle?: string
  description?: string
  backgroundVideo?: string
  backgroundImage?: string
  height?: string
  showOverlay?: boolean
  overlayOpacity?: number
  textColor?: "light" | "dark"
  align?: "left" | "center" | "right"
  showBlocks?: boolean
  blockDelay?: number
  blocks?: HeroBlock[]
  onBlockClick?: (block: HeroBlock) => void
  primaryButton?: {
    text: string
    onClick: () => void
    variant?: "primary" | "secondary" | "outlined"
    size?: "sm" | "md" | "lg"
    icon?: React.ReactNode
  }
  secondaryButton?: {
    text: string
    onClick: () => void
    variant?: "primary" | "secondary" | "outlined"
    size?: "sm" | "md" | "lg"
    icon?: React.ReactNode
  }
  showScrollIndicator?: boolean
  onScrollIndicatorClick?: () => void
  backgroundBlur?: boolean
  className?: string
}

export default function CustomHeroSectionWrapper({
  title,
  subtitle,
  description,
  backgroundVideo,
  backgroundImage,
  height = "100vh",
  showOverlay = true,
  overlayOpacity = 0.3,
  textColor = "light",
  align = "center",
  showBlocks = false,
  blockDelay = 300,
  blocks = [],
  onBlockClick,
  primaryButton,
  secondaryButton,
  showScrollIndicator = false,
  onScrollIndicatorClick,
  backgroundBlur = false,
  className,
}: CustomHeroSectionWrapperProps) {
  return (
    <CustomHeroSection
      title={title}
      subtitle={subtitle}
      description={description}
      backgroundVideo={backgroundVideo}
      backgroundImage={backgroundImage}
      height={height}
      showOverlay={showOverlay}
      overlayOpacity={overlayOpacity}
      textColor={textColor}
      align={align}
      showBlocks={showBlocks}
      blockDelay={blockDelay}
      blocks={blocks}
      onBlockClick={onBlockClick}
      primaryButton={primaryButton}
      secondaryButton={secondaryButton}
      showScrollIndicator={showScrollIndicator}
      onScrollIndicatorClick={onScrollIndicatorClick}
      backgroundBlur={backgroundBlur}
      className={className}
    />
  )
} 