import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
import { ResponsiveSpacing, getResponsiveSpacingClasses } from "./layout-types"

const stackVariants = cva(
  "flex",
  {
    variants: {
      direction: {
        vertical: "flex-col",
        horizontal: "flex-row",
        responsive: "flex-col lg:flex-row",
      },
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
      wrap: {
        true: "flex-wrap",
        false: "flex-nowrap",
      },
      reverse: {
        true: "flex-row-reverse flex-col-reverse",
        false: "",
      },
    },
    defaultVariants: {
      direction: "vertical",
      alignItems: "stretch",
      justifyContent: "start",
      wrap: false,
      reverse: false,
    },
  }
)

const dividerVariants = cva(
  "border-border",
  {
    variants: {
      direction: {
        vertical: "border-t",
        horizontal: "border-l",
        responsive: "border-t lg:border-l lg:border-t-0",
      },
    },
    defaultVariants: {
      direction: "vertical",
    },
  }
)

export interface StackProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof stackVariants> {
  spacing?: ResponsiveSpacing
  divider?: boolean | React.ReactNode
  dividerColor?: string
  dividerStyle?: "solid" | "dashed" | "dotted"
}

const Stack = React.forwardRef<HTMLDivElement, StackProps>(
  ({ 
    className, 
    direction = "vertical",
    spacing, 
    alignItems, 
    justifyContent,
    wrap = false,
    reverse = false,
    divider = false,
    dividerColor,
    dividerStyle = "solid",
    children,
    ...props 
  }, ref) => {
    const spacingClasses = getResponsiveSpacingClasses(spacing, 'gap')
    
    // Filter out null/undefined children
    const validChildren = React.Children.toArray(children).filter(Boolean)
    
    // Create divider element
    const createDivider = (index: number) => {
      if (!divider) return null
      
      const isLast = index === validChildren.length - 1
      if (isLast) return null
      
      const dividerDirection = direction === "responsive" ? "responsive" : direction
      
      const dividerClasses = cn(
        dividerVariants({ direction: dividerDirection }),
        dividerStyle === "dashed" && "border-dashed",
        dividerStyle === "dotted" && "border-dotted",
        dividerColor && `border-${dividerColor}`,
        direction === "vertical" ? "my-2" : "mx-2"
      )
      
      if (typeof divider === "boolean") {
        return <div className={dividerClasses} />
      }
      
      return React.cloneElement(divider as React.ReactElement, {
        className: cn(dividerClasses, (divider as React.ReactElement).props.className)
      })
    }
    
    // Render children with dividers
    const renderChildren = () => {
      return validChildren.map((child, index) => (
        <React.Fragment key={index}>
          {child}
          {createDivider(index)}
        </React.Fragment>
      ))
    }
    
    return (
      <div
        ref={ref}
        className={cn(
          stackVariants({ direction, alignItems, justifyContent, wrap, reverse }),
          spacingClasses,
          className
        )}
        {...props}
      >
        {renderChildren()}
      </div>
    )
  }
)

Stack.displayName = "Stack"

export { Stack, stackVariants }
