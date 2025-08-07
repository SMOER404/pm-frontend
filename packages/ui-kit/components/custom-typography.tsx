"use client"

import React from "react"
import { cn } from "../lib/utils"
import { tokens, type SizeToken } from "../lib/design-tokens"
import {
  getTypographyStyles,
  createTypographyClasses,
  getHeadingStyles,
  getParagraphStyles,
  getCodeStyles,
  getBlockquoteStyles,
  getLinkStyles,
  getListStyles,
  getHighlightStyles,
  type TypographyVariant,
  type TypographyStyle,
} from "../lib/typography-utils"

interface CustomTypographyProps {
  children: React.ReactNode
  variant?: keyof TypographyVariant | "body1" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
  style?: keyof TypographyStyle
  size?: SizeToken
  as?: keyof JSX.IntrinsicElements
  truncate?: boolean
  ellipsis?: boolean
  color?: "primary" | "secondary" | "muted" | "success" | "warning" | "danger" | "info"
  gutterBottom?: boolean
  className?: string
  onClick?: () => void
}

function CustomTypography({
  children,
  variant = "body",
  style = "default",
  size = "md",
  as,
  truncate = false,
  ellipsis = false,
  color,
  gutterBottom = false,
  className,
  onClick,
}: CustomTypographyProps) {
  // Нормализуем вариант
  const normalizedVariant = variant === "body1" ? "body" : variant as keyof TypographyVariant
  
  // Проверяем, что функции существуют
  if (typeof getTypographyStyles !== 'function') {
    console.error('CustomTypography: getTypographyStyles is not a function')
    return <div>Error: getTypographyStyles not found</div>
  }
  
  if (typeof createTypographyClasses !== 'function') {
    console.error('CustomTypography: createTypographyClasses is not a function')
    return <div>Error: createTypographyClasses not found</div>
  }
  
  const typographyStyles = getTypographyStyles(normalizedVariant, style, size)
  const typographyClasses = createTypographyClasses(normalizedVariant, style, size, truncate, ellipsis)

  // Определяем HTML элемент на основе варианта
  const getElement = () => {
    if (as) return as
    
    const elementMap: Record<keyof TypographyVariant, keyof JSX.IntrinsicElements> = {
      h1: "h1",
      h2: "h2",
      h3: "h3",
      h4: "h4",
      h5: "h5",
      h6: "h6",
      body: "p",
      lead: "p",
      small: "small",
      caption: "span",
      code: "code",
      blockquote: "blockquote",
    }

    const element = elementMap[normalizedVariant]
    if (!element) {
      console.error('CustomTypography: No element found for variant:', normalizedVariant)
      return "div" // fallback
    }
    
    return element
  }

  const Element = getElement()

  // Проверяем, что Element определен
  if (!Element) {
    console.error('CustomTypography: Element is undefined for variant:', variant)
    return <div>Error: Invalid variant</div>
  }

  // Определяем цвет
  const getColorClass = () => {
    if (!color) return ""
    const colorMap = {
      primary: "text-primary",
      secondary: "text-gray-600",
      muted: "text-gray-500",
      success: "text-green-600",
      warning: "text-yellow-600",
      danger: "text-red-600",
      info: "text-blue-600",
    }
    return colorMap[color] || ""
  }

  // Проверяем, что стили определены
  if (!typographyStyles || !typographyClasses) {
    console.error('CustomTypography: Styles are undefined')
    return <div>Error: Styles not found</div>
  }

  return (
    <Element
      className={cn(
        typographyClasses, 
        getColorClass(),
        gutterBottom && "mb-4",
        className
      )}
      style={typographyStyles.style}
      onClick={onClick}
    >
      {children}
    </Element>
  )
}

export { CustomTypography }
export default CustomTypography

// Специализированные компоненты для удобства использования

interface HeadingProps {
  children: React.ReactNode
  level: 1 | 2 | 3 | 4 | 5 | 6
  style?: keyof TypographyStyle
  className?: string
  onClick?: () => void
}

export function Heading({ children, level, style = "default", className, onClick }: HeadingProps) {
  const headingStyles = getHeadingStyles(level, style)
  const Element = `h${level}` as keyof JSX.IntrinsicElements

  return (
    <Element
      className={cn(headingStyles.className, className)}
      style={headingStyles.style}
      onClick={onClick}
    >
      {children}
    </Element>
  )
}

interface ParagraphProps {
  children: React.ReactNode
  style?: keyof TypographyStyle
  size?: SizeToken
  className?: string
  onClick?: () => void
}

export function Paragraph({ children, style = "default", size = "md", className, onClick }: ParagraphProps) {
  const paragraphStyles = getParagraphStyles(style, size)

  return (
    <p
      className={cn(paragraphStyles.className, className)}
      style={paragraphStyles.style}
      onClick={onClick}
    >
      {children}
    </p>
  )
}

interface CodeProps {
  children: React.ReactNode
  style?: keyof TypographyStyle
  size?: SizeToken
  inline?: boolean
  className?: string
  onClick?: () => void
}

export function Code({ children, style = "default", size = "md", inline = false, className, onClick }: CodeProps) {
  const codeStyles = getCodeStyles(style, size, inline)
  const Element = inline ? "code" : "pre"

  return (
    <Element
      className={cn(codeStyles.className, className)}
      style={codeStyles.style}
      onClick={onClick}
    >
      {children}
    </Element>
  )
}

interface BlockquoteProps {
  children: React.ReactNode
  style?: keyof TypographyStyle
  size?: SizeToken
  className?: string
  onClick?: () => void
}

export function Blockquote({ children, style = "default", size = "md", className, onClick }: BlockquoteProps) {
  const blockquoteStyles = getBlockquoteStyles(style, size)

  return (
    <blockquote
      className={cn(blockquoteStyles.className, className)}
      style={blockquoteStyles.style}
      onClick={onClick}
    >
      {children}
    </blockquote>
  )
}

interface LinkProps {
  children: React.ReactNode
  href?: string
  style?: keyof TypographyStyle
  underline?: boolean
  className?: string
  onClick?: () => void
}

export function Link({ children, href, style = "default", underline = true, className, onClick }: LinkProps) {
  const linkStyles = getLinkStyles(style, underline)

  return (
    <a
      href={href}
      className={cn(linkStyles.className, className)}
      onClick={onClick}
    >
      {children}
    </a>
  )
}

interface ListProps {
  children: React.ReactNode
  style?: keyof TypographyStyle
  size?: SizeToken
  ordered?: boolean
  className?: string
  onClick?: () => void
}

export function List({ children, style = "default", size = "md", ordered = false, className, onClick }: ListProps) {
  const listStyles = getListStyles(style, size, ordered)
  const Element = ordered ? "ol" : "ul"

  return (
    <Element
      className={cn(listStyles.className, className)}
      style={listStyles.style}
      onClick={onClick}
    >
      {children}
    </Element>
  )
}

interface HighlightProps {
  children: React.ReactNode
  style?: keyof TypographyStyle
  highlight?: "yellow" | "green" | "blue" | "pink"
  className?: string
  onClick?: () => void
}

export function Highlight({ children, style = "default", highlight = "yellow", className, onClick }: HighlightProps) {
  const highlightStyles = getHighlightStyles(style, highlight)

  return (
    <mark
      className={cn(highlightStyles.className, className)}
      onClick={onClick}
    >
      {children}
    </mark>
  )
}

 