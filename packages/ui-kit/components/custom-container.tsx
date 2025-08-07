"use client"

import React from "react"
import { cn } from "../lib/utils"
import type { JSX } from "react/jsx-runtime"

export interface CustomContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  maxWidth?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | false
  fixed?: boolean
  disableGutters?: boolean
  component?: keyof JSX.IntrinsicElements
  children?: React.ReactNode
}

const maxWidthClasses = {
  xs: "max-w-xs", // 320px
  sm: "max-w-sm", // 384px
  md: "max-w-md", // 448px
  lg: "max-w-4xl", // 896px
  xl: "max-w-6xl", // 1152px
  "2xl": "max-w-7xl", // 1280px
}

const CustomContainer = React.forwardRef<HTMLDivElement, CustomContainerProps>(
  (
    { maxWidth = "lg", fixed = false, disableGutters = false, component = "div", className, children, ...props },
    ref,
  ) => {
    const Component = component as any

    const containerClasses = cn(
      "w-full mx-auto",
      {
        [maxWidthClasses[maxWidth as keyof typeof maxWidthClasses]]: maxWidth !== false,
        "px-4 sm:px-6 lg:px-8": !disableGutters,
        relative: !fixed,
        "fixed inset-x-0": fixed,
      },
      className,
    )

    return (
      <Component ref={ref} className={containerClasses} {...props}>
        {children}
      </Component>
    )
  },
)

CustomContainer.displayName = "CustomContainer"

export default CustomContainer
