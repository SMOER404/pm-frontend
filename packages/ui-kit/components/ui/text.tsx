import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const textVariants = cva(
  "font-azorath",
  {
    variants: {
      type: {
        body: "leading-relaxed",
        caption: "leading-tight",
        secondary: "leading-normal",
      },
      size: {
        sm: "text-sm",
        md: "text-md",
        lg: "text-lg",
      },
      weight: {
        normal: "font-normal",
        bold: "font-bold",
      },
      color: {
        primary: "text-text-primary",
        secondary: "text-text-secondary",
        muted: "text-text-muted",
      },
    },
    defaultVariants: {
      type: "body",
      size: "md",
      weight: "normal",
      color: "primary",
    },
  }
)

export interface TextProps
  extends React.HTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof textVariants> {
  type?: "body" | "caption" | "secondary"
  size?: "sm" | "md" | "lg"
  weight?: "normal" | "bold"
  color?: "primary" | "secondary" | "muted"
  as?: "p" | "span" | "div"
}

const Text = React.forwardRef<HTMLParagraphElement, TextProps>(
  ({ className, type, size, weight, color, as: Component = "p", children, ...props }, ref) => {
    return (
      <Component
        className={cn(textVariants({ type, size, weight, color }), className)}
        ref={ref}
        {...props}
      >
        {children}
      </Component>
    )
  }
)
Text.displayName = "Text"

export { Text, textVariants }
