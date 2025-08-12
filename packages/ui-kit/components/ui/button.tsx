import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { Loader2 } from "lucide-react"

import { cn } from "@/lib/utils"
import { BevelShape } from "./bevel-shape"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-all duration-200 ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 relative overflow-hidden group font-azorath",
  {
    variants: {
      variant: {
        default: "text-[#292D30] hover:text-[#AFEB0F]",
        secondary: "text-[#AFEB0F] hover:text-[#292D30]", 
        outlined: "text-[#292D30] hover:text-[#AFEB0F]",
        ghost: "text-[#292D30] hover:text-[#292D30]",
      },
      size: {
        sm: "h-8 px-3 text-xs",
        default: "h-10 px-4 py-2",
        lg: "h-12 px-8 text-base",
        xl: "h-14 px-10 text-lg",
        icon: "h-10 w-10 p-0",
        "icon-sm": "h-8 w-8 p-0",
        "icon-lg": "h-12 w-12 p-0",
      },
      fullWidth: {
        true: "w-full",
        false: "",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      fullWidth: false,
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
  startIcon?: React.ReactNode
  endIcon?: React.ReactNode
  loading?: boolean
  loadingText?: string
  fullWidth?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ 
    className, 
    variant, 
    size, 
    asChild = false, 
    leftIcon, 
    rightIcon,
    startIcon,
    endIcon,
    loading = false,
    loadingText,
    children, 
    disabled,
    fullWidth = false,
    ...props 
  }, ref) => {
    const Comp = asChild ? Slot : "button"
    const isDisabled = disabled || loading
    
    // Use startIcon/endIcon if provided, otherwise fall back to leftIcon/rightIcon for backward compatibility
    const iconStart = startIcon || leftIcon
    const iconEnd = endIcon || rightIcon

    // Get colors based on variant
    const getColors = () => {
      const colors = {
        brand: "#AFEB0F",
        primary: "#292D30",
      }
      
      switch (variant) {
        case "default":
          return {
            fill: colors.brand,
            stroke: colors.brand,
            hoverFill: colors.primary,
            hoverStroke: colors.primary,
          }
        case "secondary":
          return {
            fill: colors.primary,
            stroke: colors.primary,
            hoverFill: colors.brand,
            hoverStroke: colors.brand,
          }
        case "outlined":
          return {
            fill: "transparent",
            stroke: colors.brand,
            hoverFill: "transparent",
            hoverStroke: colors.brand,
          }
        case "ghost":
          return {
            fill: `${colors.primary}33`, // 20% opacity
            stroke: "transparent",
            hoverFill: `${colors.primary}33`,
            hoverStroke: `${colors.primary}CC`, // 80% opacity
          }
        default:
          return {
            fill: colors.brand,
            stroke: colors.brand,
            hoverFill: colors.primary,
            hoverStroke: colors.primary,
          }
      }
    }

    const colors = getColors()
    
    return (
      <Comp
        className={cn(
          buttonVariants({ variant, size, fullWidth, className }),
          loading && "cursor-wait"
        )}
        ref={ref}
        disabled={isDisabled}
        {...props}
      >
        {/* Beveled background using BevelShape component */}
        <BevelShape
          bevelSize="md"
          fill={colors.fill}
          stroke={colors.stroke}
          pathClassName="group-hover:fill-[var(--hover-fill)] group-hover:stroke-[var(--hover-stroke)]"
          style={{
            '--hover-fill': colors.hoverFill,
            '--hover-stroke': colors.hoverStroke,
          } as React.CSSProperties}
        />
        
        {/* Content - positioned like in BevelBox */}
        <div className="relative z-10 h-full flex items-center justify-center">
          {loading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              {loadingText || children}
            </>
          ) : (
            <>
              {iconStart && (
                <span className="mr-2" aria-hidden="true">
                  {iconStart}
                </span>
              )}
              {children}
              {iconEnd && (
                <span className="ml-2" aria-hidden="true">
                  {iconEnd}
                </span>
              )}
            </>
          )}
        </div>
      </Comp>
    )
  }
)

Button.displayName = "Button"

export { Button, buttonVariants }
