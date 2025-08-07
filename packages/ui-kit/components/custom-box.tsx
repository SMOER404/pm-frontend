"use client"

import React from "react"
import { cn } from "../lib/utils"

export interface CustomBoxProps extends React.HTMLAttributes<HTMLDivElement> {
  component?: keyof JSX.IntrinsicElements
  display?: "block" | "inline" | "inline-block" | "flex" | "inline-flex" | "grid" | "none"
  position?: "static" | "relative" | "absolute" | "fixed" | "sticky"
  top?: string | number
  right?: string | number
  bottom?: string | number
  left?: string | number
  width?: string | number
  height?: string | number
  minWidth?: string | number
  minHeight?: string | number
  maxWidth?: string | number
  maxHeight?: string | number
  margin?: string | number
  marginTop?: string | number
  marginRight?: string | number
  marginBottom?: string | number
  marginLeft?: string | number
  padding?: string | number
  paddingTop?: string | number
  paddingRight?: string | number
  paddingBottom?: string | number
  paddingLeft?: string | number
  backgroundColor?: string
  color?: string
  border?: string
  borderRadius?: string | number
  boxShadow?: string
  zIndex?: number
  overflow?: "visible" | "hidden" | "scroll" | "auto"
  textAlign?: "left" | "center" | "right" | "justify"
  children?: React.ReactNode
}

const CustomBox = React.forwardRef<HTMLDivElement, CustomBoxProps>(
  (
    {
      component = "div",
      display,
      position,
      top,
      right,
      bottom,
      left,
      width,
      height,
      minWidth,
      minHeight,
      maxWidth,
      maxHeight,
      margin,
      marginTop,
      marginRight,
      marginBottom,
      marginLeft,
      padding,
      paddingTop,
      paddingRight,
      paddingBottom,
      paddingLeft,
      backgroundColor,
      color,
      border,
      borderRadius,
      boxShadow,
      zIndex,
      overflow,
      textAlign,
      className,
      style,
      children,
      ...props
    },
    ref,
  ) => {
    const Component = component as any

    const boxStyle: React.CSSProperties = {
      display,
      position,
      top: typeof top === "number" ? `${top}px` : top,
      right: typeof right === "number" ? `${right}px` : right,
      bottom: typeof bottom === "number" ? `${bottom}px` : bottom,
      left: typeof left === "number" ? `${left}px` : left,
      width: typeof width === "number" ? `${width}px` : width,
      height: typeof height === "number" ? `${height}px` : height,
      minWidth: typeof minWidth === "number" ? `${minWidth}px` : minWidth,
      minHeight: typeof minHeight === "number" ? `${minHeight}px` : minHeight,
      maxWidth: typeof maxWidth === "number" ? `${maxWidth}px` : maxWidth,
      maxHeight: typeof maxHeight === "number" ? `${maxHeight}px` : maxHeight,
      margin: typeof margin === "number" ? `${margin}px` : margin,
      marginTop: typeof marginTop === "number" ? `${marginTop}px` : marginTop,
      marginRight: typeof marginRight === "number" ? `${marginRight}px` : marginRight,
      marginBottom: typeof marginBottom === "number" ? `${marginBottom}px` : marginBottom,
      marginLeft: typeof marginLeft === "number" ? `${marginLeft}px` : marginLeft,
      padding: typeof padding === "number" ? `${padding}px` : padding,
      paddingTop: typeof paddingTop === "number" ? `${paddingTop}px` : paddingTop,
      paddingRight: typeof paddingRight === "number" ? `${paddingRight}px` : paddingRight,
      paddingBottom: typeof paddingBottom === "number" ? `${paddingBottom}px` : paddingBottom,
      paddingLeft: typeof paddingLeft === "number" ? `${paddingLeft}px` : paddingLeft,
      backgroundColor,
      color,
      border,
      borderRadius: typeof borderRadius === "number" ? `${borderRadius}px` : borderRadius,
      boxShadow,
      zIndex,
      overflow,
      textAlign,
      ...style,
    }

    return (
      <Component ref={ref} className={cn(className)} style={boxStyle} {...props}>
        {children}
      </Component>
    )
  },
)

CustomBox.displayName = "CustomBox"

export default CustomBox
