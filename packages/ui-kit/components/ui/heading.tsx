import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const headingVariants = cva(
  "font-druktext font-bold tracking-tight",
  {
    variants: {
      level: {
        h1: "text-h1 leading-[40px]",
        h2: "text-h2 leading-[36px]", 
        h3: "text-h3 leading-[32px]",
        h4: "text-h4 leading-[28px]",
        h5: "text-h5 leading-[24px]",
        h6: "text-h6 leading-[20px]",
      },
      color: {
        primary: "text-text-primary",
        secondary: "text-primary", 
        error: "text-destructive",
      },
      align: {
        left: "text-left",
        center: "text-center",
        right: "text-right",
      },
    },
    defaultVariants: {
      level: "h1",
      color: "primary",
      align: "left",
    },
  }
)

export interface HeadingProps
  extends React.HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof headingVariants> {
  level?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
  color?: "primary" | "secondary" | "error"
  align?: "left" | "center" | "right"
  iconLeft?: React.ReactNode
  iconRight?: React.ReactNode
}

const Heading = React.forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ className, level = "h1", color, align, iconLeft, iconRight, children, ...props }, ref) => {
    const baseProps = {
      className: cn(headingVariants({ level, color, align }), className),
      ref,
      ...props,
    }
    
    const content = (
      <span className="flex items-center gap-3">
        {iconLeft && (
          <span className="flex-shrink-0" aria-hidden="true">
            {iconLeft}
          </span>
        )}
        <span>{children}</span>
        {iconRight && (
          <span className="flex-shrink-0" aria-hidden="true">
            {iconRight}
          </span>
        )}
      </span>
    )
    
    switch (level) {
      case 'h1':
        return <h1 {...baseProps}>{content}</h1>
      case 'h2':
        return <h2 {...baseProps}>{content}</h2>
      case 'h3':
        return <h3 {...baseProps}>{content}</h3>
      case 'h4':
        return <h4 {...baseProps}>{content}</h4>
      case 'h5':
        return <h5 {...baseProps}>{content}</h5>
      case 'h6':
        return <h6 {...baseProps}>{content}</h6>
      default:
        return <h1 {...baseProps}>{content}</h1>
    }
  }
)
Heading.displayName = "Heading"

export { Heading, headingVariants }
