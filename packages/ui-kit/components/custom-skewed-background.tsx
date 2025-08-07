"use client"

import React from "react"
import { cn } from "../lib/utils"
import CustomBox from "./custom-box"

export interface CustomSkewedBackgroundProps {
  children?: React.ReactNode
  className?: string
  width?: string | number
  height?: string | number
  fillColor?: string
  hoverFillColor?: string
  contentClassName?: string
  skewAngle?: number
  variant?: "default" | "chamfer" | "diagonal"
}

export default function CustomSkewedBackground({
  children,
  className = "",
  width = "100%",
  height = "auto",
  fillColor = "bg-gray-900",
  hoverFillColor = "group-hover:bg-brand",
  contentClassName = "",
  skewAngle = 0,
  variant = "default",
}: CustomSkewedBackgroundProps) {
  const getVariantClasses = () => {
    switch (variant) {
      case "chamfer":
        return "chamfer-clip"
      case "diagonal":
        return "skew-y-1"
      case "default":
      default:
        return ""
    }
  }

  const getSkewStyle = () => {
    if (variant === "diagonal" && skewAngle !== 0) {
      return { transform: `skewY(${skewAngle}deg)` }
    }
    return {}
  }

  return (
    <CustomBox
      className={cn(
        "relative group",
        getVariantClasses(),
        className
      )}
      style={{
        width,
        height,
        backgroundColor: fillColor.startsWith("#") ? fillColor : undefined,
        ...getSkewStyle(),
      }}
    >
      <div className={cn("relative z-10 h-full", contentClassName)}>
        {children}
      </div>
    </CustomBox>
  )
} 