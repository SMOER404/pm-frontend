"use client"

import React from "react"
import { cn } from "../lib/utils"

export interface CustomSvgProps {
  src: string
  className?: string
  loadingElement?: React.ReactNode
  filled?: boolean
  width?: number | string
  height?: number | string
  alt?: string
}

export default function CustomSvg({
  src,
  className,
  loadingElement = <div className="w-6 h-6 bg-gray-200 animate-pulse" />,
  filled = false,
  width,
  height,
  alt,
}: CustomSvgProps) {
  try {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const Svg = require(`@/public${src}`).default
    return (
      <Svg 
        className={cn(className, filled && "fill-current")}
        width={width}
        height={height}
        alt={alt}
        loadingElement={loadingElement}
      />
    )
  } catch {
    return loadingElement
  }
} 