import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
import { ExternalLink } from "lucide-react"

const linkVariants = cva(
  "font-azorath inline-flex items-center gap-1 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
  {
    variants: {
      underline: {
        none: "no-underline",
        always: "underline underline-offset-4",
        hover: "no-underline hover:underline hover:underline-offset-4",
      },
      color: {
        primary: "text-text-primary hover:text-primary",
        secondary: "text-primary hover:text-primary/80",
        muted: "text-text-muted hover:text-text-secondary",
      },
    },
    defaultVariants: {
      underline: "hover",
      color: "primary",
    },
  }
)

export interface LinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement>,
    VariantProps<typeof linkVariants> {
  underline?: "none" | "always" | "hover"
  color?: "primary" | "secondary" | "muted"
  showExternalIcon?: boolean
}

const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(
  ({ 
    className, 
    underline, 
    color, 
    showExternalIcon = false,
    href, 
    target, 
    rel, 
    children, 
    ...props 
  }, ref) => {
    // Улучшенная логика определения внешней ссылки
    const isExternal = React.useMemo(() => {
      if (!href) return false
      if (target === "_blank") return true
      if (href.startsWith("http://") || href.startsWith("https://")) return true
      if (href.startsWith("//")) return true
      return false
    }, [href, target])
    
    const shouldShowIcon = showExternalIcon && isExternal
    
    const finalRel = React.useMemo(() => {
      if (rel) return rel
      if (isExternal) return "noopener noreferrer"
      return undefined
    }, [rel, isExternal])

    return (
      <a
        className={cn(linkVariants({ underline, color }), className)}
        ref={ref}
        href={href}
        target={target}
        rel={finalRel}
        {...props}
      >
        {children}
        {shouldShowIcon && (
          <ExternalLink className="h-3 w-3 flex-shrink-0" aria-hidden="true" />
        )}
      </a>
    )
  }
)
Link.displayName = "Link"

export { Link, linkVariants }
