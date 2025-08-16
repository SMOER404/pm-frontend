import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
import { ResponsiveSpacing, ResponsiveNumber, getResponsiveSpacingClasses, getResponsiveNumberClasses } from "./layout-types"

const gridVariants = cva(
  "grid",
  {
    variants: {
      alignItems: {
        start: "items-start",
        center: "items-center", 
        end: "items-end",
        stretch: "items-stretch",
        baseline: "items-baseline",
      },
      justifyContent: {
        start: "justify-start",
        center: "justify-center",
        end: "justify-end", 
        between: "justify-between",
        around: "justify-around",
        evenly: "justify-evenly",
      },
    },
    defaultVariants: {
      alignItems: "stretch",
      justifyContent: "start",
    },
  }
)

export interface GridProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof gridVariants> {
  columns?: ResponsiveNumber
  gap?: ResponsiveSpacing
  autoFit?: boolean
  autoFill?: boolean
  minColumnWidth?: string
}

const Grid = React.forwardRef<HTMLDivElement, GridProps>(
  ({ 
    className, 
    columns, 
    gap, 
    alignItems, 
    justifyContent,
    autoFit = false,
    autoFill = false,
    minColumnWidth = "250px",
    ...props 
  }, ref) => {
    const gapClasses = getResponsiveSpacingClasses(gap, 'gap')
    
    // Generate grid template columns classes
    const getGridTemplateColumns = () => {
      if (autoFit) {
        return `grid-cols-1 sm:grid-cols-[repeat(auto-fit,minmax(${minColumnWidth},1fr))]`
      }
      if (autoFill) {
        return `grid-cols-1 sm:grid-cols-[repeat(auto-fill,minmax(${minColumnWidth},1fr))]`
      }
      if (columns) {
        return getResponsiveNumberClasses(columns, 'grid-cols')
      }
      return 'grid-cols-1'
    }
    
    return (
      <div
        ref={ref}
        className={cn(
          gridVariants({ alignItems, justifyContent }),
          getGridTemplateColumns(),
          gapClasses,
          className
        )}
        {...props}
      />
    )
  }
)

Grid.displayName = "Grid"

export { Grid, gridVariants }
