import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
import { ResponsiveSpacing, getResponsiveSpacingClasses } from "./layout-types"
import { Container } from "./container"

const sectionVariants = cva(
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
      fullWidth: {
        true: "w-full",
        false: "",
      },
    },
    defaultVariants: {
      backgroundColor: "default",
      fullWidth: false,
    },
  }
)

export interface SectionProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof sectionVariants> {
  padding?: ResponsiveSpacing
  margin?: ResponsiveSpacing
  container?: boolean
  containerProps?: React.ComponentProps<typeof Container>
}

const Section = React.forwardRef<HTMLElement, SectionProps>(
  ({ 
    className, 
    padding, 
    margin, 
    backgroundColor, 
    fullWidth,
    container = false,
    containerProps,
    children,
    ...props 
  }, ref) => {
    const paddingClasses = getResponsiveSpacingClasses(padding, 'p')
    const marginClasses = getResponsiveSpacingClasses(margin, 'm')
    
    const content = container ? (
      <Container {...containerProps}>
        {children}
      </Container>
    ) : children
    
    return (
      <section
        ref={ref}
        className={cn(
          sectionVariants({ backgroundColor, fullWidth }),
          paddingClasses,
          marginClasses,
          className
        )}
        {...props}
      >
        {content}
      </section>
    )
  }
)

Section.displayName = "Section"

export { Section, sectionVariants }
