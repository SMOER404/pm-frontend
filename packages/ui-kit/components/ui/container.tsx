import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
import { ResponsiveSpacing, getResponsiveSpacingClasses } from "./layout-types"

const containerVariants = cva(
  "w-full",
  {
    variants: {
      maxWidth: {
        xs: "max-w-xs",
        sm: "max-w-sm", 
        md: "max-w-md",
        lg: "max-w-lg",
        xl: "max-w-xl",
        "2xl": "max-w-2xl",
        "3xl": "max-w-3xl",
        "4xl": "max-w-4xl",
        "5xl": "max-w-5xl",
        "6xl": "max-w-6xl",
        "7xl": "max-w-7xl",
        full: "max-w-full",
      },
      centered: {
        true: "mx-auto",
        false: "",
      },
      fluid: {
        true: "max-w-none",
        false: "",
      },
    },
    defaultVariants: {
      maxWidth: "7xl",
      centered: true,
      fluid: false,
    },
  }
)

export interface ContainerProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof containerVariants> {
  padding?: ResponsiveSpacing
  margin?: ResponsiveSpacing
}

const Container = React.forwardRef<HTMLDivElement, ContainerProps>(
  ({ 
    className, 
    maxWidth, 
    centered, 
    fluid, 
    padding, 
    margin, 
    ...props 
  }, ref) => {
    const paddingClasses = getResponsiveSpacingClasses(padding, 'p')
    const marginClasses = getResponsiveSpacingClasses(margin, 'm')
    
    return (
      <div
        ref={ref}
        className={cn(
          containerVariants({ maxWidth, centered, fluid }),
          paddingClasses,
          marginClasses,
          className
        )}
        {...props}
      />
    )
  }
)

Container.displayName = "Container"

export { Container, containerVariants }
