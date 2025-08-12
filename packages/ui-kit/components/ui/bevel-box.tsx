import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
import { BevelShape } from "./bevel-shape"

const bevelBoxVariants = cva(
  "relative w-full h-full transition-all duration-200 ease-in-out",
  {
    variants: {
      variant: {
        default: "text-foreground",
        secondary: "text-primary",
        outlined: "text-foreground",
        ghost: "text-foreground",
      },
      bevelSize: {
        xs: "[--bevel-size:0.1]",
        sm: "[--bevel-size:0.15]",
        md: "[--bevel-size:0.2]",
        lg: "[--bevel-size:0.25]",
        xl: "[--bevel-size:0.3]",
      },
    },
    defaultVariants: {
      variant: "default",
      bevelSize: "md",
    },
  }
)

export interface BevelBoxProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof bevelBoxVariants> {
  hover?: boolean
  children?: React.ReactNode
}

const BevelBox = React.forwardRef<HTMLDivElement, BevelBoxProps>(
  ({ className, variant = "default", bevelSize = "md", hover = false, children, ...props }, ref) => {
    // Color definitions
    const colors = {
      brand: "#AFEB0F",
      primary: "#292D30",
    }

    // Variant styles
    const variants = {
      default: {
        fill: colors.brand,
        stroke: colors.brand,
        textColor: colors.primary,
      },
      secondary: {
        fill: colors.primary,
        stroke: colors.primary,
        textColor: colors.brand,
      },
      outlined: {
        fill: "transparent",
        stroke: colors.brand,
        textColor: colors.primary,
      },
      ghost: {
        fill: `${colors.primary}33`, // 20% opacity
        stroke: "transparent",
        textColor: colors.primary,
      },
    }

    const currentVariant = variants[variant || "default"]

    // Get hover classes based on variant
    const getHoverClasses = () => {
      if (!hover) return { pathClasses: "", textClasses: "" }
      
      switch (variant) {
        case "default":
          return {
            pathClasses: "group-hover:fill-[#292D30] group-hover:stroke-[#292D30]",
            textClasses: "group-hover:text-[#AFEB0F]"
          }
        case "secondary":
          return {
            pathClasses: "group-hover:fill-[#AFEB0F] group-hover:stroke-[#AFEB0F]",
            textClasses: "group-hover:text-[#292D30]"
          }
        case "outlined":
          return {
            pathClasses: "group-hover:fill-transparent group-hover:stroke-[#AFEB0F]",
            textClasses: "group-hover:text-[#AFEB0F]"
          }
        case "ghost":
          return {
            pathClasses: "group-hover:fill-[rgba(41,45,48,0.2)] group-hover:stroke-[rgba(41,45,48,0.8)]",
            textClasses: "group-hover:text-[#292D30]"
          }
        default:
          return { pathClasses: "", textClasses: "" }
      }
    }

    const { pathClasses, textClasses } = getHoverClasses()

    return (
      <div
        ref={ref}
        className={cn(
          bevelBoxVariants({ variant, bevelSize, className }),
          hover && "group"
        )}
        style={{ color: currentVariant.textColor }}
        {...props}
      >
        <BevelShape
          bevelSize={bevelSize}
          fill={currentVariant.fill}
          stroke={currentVariant.stroke}
          pathClassName={pathClasses}
        />
        <div className={cn(
          "relative z-10 h-full p-4",
          textClasses
        )}>
          {children}
        </div>
      </div>
    )
  }
)

BevelBox.displayName = "BevelBox"

export { BevelBox, bevelBoxVariants }
