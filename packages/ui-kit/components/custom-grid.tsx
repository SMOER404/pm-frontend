"use client"

import React from "react"
import { cn } from "../lib/utils"
import type { JSX } from "react/jsx-runtime"

export interface CustomGridProps extends React.HTMLAttributes<HTMLDivElement> {
  container?: boolean
  item?: boolean
  xs?: number | "auto"
  sm?: number | "auto"
  md?: number | "auto"
  lg?: number | "auto"
  xl?: number | "auto"
  spacing?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 8 | 10 | 12
  direction?: "row" | "column" | "row-reverse" | "column-reverse"
  justifyContent?: "flex-start" | "center" | "flex-end" | "space-between" | "space-around" | "space-evenly"
  alignItems?: "flex-start" | "center" | "flex-end" | "stretch" | "baseline"
  wrap?: "nowrap" | "wrap" | "wrap-reverse"
  component?: keyof JSX.IntrinsicElements
  children?: React.ReactNode
}

const getGridClasses = (size: number | "auto" | undefined, breakpoint: string) => {
  if (size === undefined) return ""
  if (size === "auto") return `${breakpoint}:flex-auto`
  if (size === 12) return `${breakpoint}:w-full`
  return `${breakpoint}:w-${size}/12`
}

const spacingClasses = {
  0: "gap-0",
  1: "gap-1",
  2: "gap-2",
  3: "gap-3",
  4: "gap-4",
  5: "gap-5",
  6: "gap-6",
  8: "gap-8",
  10: "gap-10",
  12: "gap-12",
}

const directionClasses = {
  row: "flex-row",
  column: "flex-col",
  "row-reverse": "flex-row-reverse",
  "column-reverse": "flex-col-reverse",
}

const justifyContentClasses = {
  "flex-start": "justify-start",
  center: "justify-center",
  "flex-end": "justify-end",
  "space-between": "justify-between",
  "space-around": "justify-around",
  "space-evenly": "justify-evenly",
}

const alignItemsClasses = {
  "flex-start": "items-start",
  center: "items-center",
  "flex-end": "items-end",
  stretch: "items-stretch",
  baseline: "items-baseline",
}

const wrapClasses = {
  nowrap: "flex-nowrap",
  wrap: "flex-wrap",
  "wrap-reverse": "flex-wrap-reverse",
}

const CustomGrid = React.forwardRef<HTMLDivElement, CustomGridProps>(
  (
    {
      container = false,
      item = false,
      xs,
      sm,
      md,
      lg,
      xl,
      spacing = 0,
      direction = "row",
      justifyContent = "flex-start",
      alignItems = "stretch",
      wrap = "wrap",
      component = "div",
      className,
      children,
      ...props
    },
    ref,
  ) => {
    const Component = component as any

    const gridClasses = cn(
      {
        // Container styles
        flex: container,
        [spacingClasses[spacing]]: container && spacing > 0,
        [directionClasses[direction]]: container,
        [justifyContentClasses[justifyContent]]: container,
        [alignItemsClasses[alignItems]]: container,
        [wrapClasses[wrap]]: container,

        // Item styles
        "flex-shrink-0": item,
        [getGridClasses(xs, "")]: item && xs !== undefined,
        [getGridClasses(sm, "sm")]: item && sm !== undefined,
        [getGridClasses(md, "md")]: item && md !== undefined,
        [getGridClasses(lg, "lg")]: item && lg !== undefined,
        [getGridClasses(xl, "xl")]: item && xl !== undefined,
      },
      className,
    )

    return (
      <Component ref={ref} className={gridClasses} {...props}>
        {children}
      </Component>
    )
  },
)

CustomGrid.displayName = "CustomGrid"

export default CustomGrid
