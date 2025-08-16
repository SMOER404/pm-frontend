import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
import { ResponsiveSpacing, getResponsiveSpacingClasses } from "./layout-types"
import { BevelBox } from "./bevel-box"

const boxVariants = cva(
  "w-full",
  {
    variants: {
      backgroundColor: {
        default: "bg-background",
        primary: "bg-primary",
        secondary: "bg-secondary",
        muted: "bg-muted",
        accent: "bg-accent",
        card: "bg-card",
        transparent: "bg-transparent",
      },
      border: {
        true: "border border-border",
        false: "",
      },
      borderRadius: {
        none: "rounded-none",
        sm: "rounded-sm",
        md: "rounded-md",
        lg: "rounded-lg",
        xl: "rounded-xl",
        "2xl": "rounded-2xl",
        "3xl": "rounded-3xl",
        full: "rounded-full",
      },
    },
    defaultVariants: {
      backgroundColor: "default",
      border: false,
      borderRadius: "md",
    },
  }
)

export interface BoxProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof boxVariants> {
  padding?: ResponsiveSpacing
  margin?: ResponsiveSpacing
  bevel?: boolean
  bevelVariant?: "default" | "secondary" | "outlined" | "ghost"
  bevelSize?: "xs" | "sm" | "md" | "lg" | "xl"
}

const Box = React.forwardRef<HTMLDivElement, BoxProps>(
  ({ 
    className, 
    padding, 
    margin, 
    backgroundColor, 
    border, 
    borderRadius,
    bevel = false,
    bevelVariant = "default",
    bevelSize = "md",
    children,
    ...props 
  }, ref) => {
    const paddingClasses = getResponsiveSpacingClasses(padding, 'p')
    const marginClasses = getResponsiveSpacingClasses(margin, 'm')
    
    if (bevel) {
      return (
        <div
          ref={ref}
          className={cn(marginClasses, className)}
          {...props}
        >
          <BevelBox
            variant={bevelVariant}
            bevelSize={bevelSize}
            className={cn(
              paddingClasses,
              boxVariants({ backgroundColor, border, borderRadius })
            )}
          >
            {children}
          </BevelBox>
        </div>
      )
    }
    
    return (
      <div
        ref={ref}
        className={cn(
          boxVariants({ backgroundColor, border, borderRadius }),
          paddingClasses,
          marginClasses,
          className
        )}
        {...props}
      >
        {children}
      </div>
    )
  }
)

Box.displayName = "Box"

export { Box, boxVariants }
