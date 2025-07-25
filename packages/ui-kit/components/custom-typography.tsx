"use client"

import type React from "react"
import { cn } from "../lib/utils"
import type { JSX } from "react/jsx-runtime"

interface CustomTypographyProps {
  children: React.ReactNode
  variant?:
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "subtitle1"
    | "subtitle2"
    | "body1"
    | "body2"
    | "caption"
    | "overline"
  color?: "primary" | "secondary" | "disabled" | "inherit"
  align?: "left" | "center" | "right" | "justify"
  gutterBottom?: boolean
  noWrap?: boolean
  component?: keyof JSX.IntrinsicElements
  className?: string
  style?: React.CSSProperties
}

export default function CustomTypography({
  children,
  variant = "body1",
  color = "inherit",
  align = "left",
  gutterBottom = false,
  noWrap = false,
  component,
  className,
  style,
}: CustomTypographyProps) {
  // Варианты типографики
  const variants = {
    h1: "text-4xl font-bold leading-tight",
    h2: "text-3xl font-bold leading-tight",
    h3: "text-2xl font-semibold leading-tight",
    h4: "text-xl font-semibold leading-tight",
    h5: "text-lg font-medium leading-tight",
    h6: "text-base font-medium leading-tight",
    subtitle1: "text-base font-medium leading-relaxed",
    subtitle2: "text-sm font-medium leading-relaxed",
    body1: "text-base leading-relaxed",
    body2: "text-sm leading-relaxed",
    caption: "text-xs leading-normal",
    overline: "text-xs uppercase tracking-wider leading-normal",
  }

  // Цвета
  const colors = {
    primary: "text-[#292D30]",
    secondary: "text-gray-600",
    disabled: "text-gray-400",
    inherit: "",
  }

  // Выравнивание
  const alignments = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
    justify: "text-justify",
  }

  // Определение компонента по умолчанию
  const defaultComponents = {
    h1: "h1",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    h5: "h5",
    h6: "h6",
    subtitle1: "h6",
    subtitle2: "h6",
    body1: "p",
    body2: "p",
    caption: "span",
    overline: "span",
  } as const

  const Component = component || defaultComponents[variant]

  return (
    <Component
      className={cn(
        variants[variant],
        colors[color],
        alignments[align],
        gutterBottom && "mb-4",
        noWrap && "truncate",
        className,
      )}
      style={style}
    >
      {children}
    </Component>
  )
}
