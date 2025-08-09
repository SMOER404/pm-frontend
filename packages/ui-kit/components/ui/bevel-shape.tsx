import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const bevelShapeVariants = cva(
  "absolute inset-0 w-full h-full pointer-events-none",
  {
    variants: {
      bevelSize: {
        xs: "[--bevel-size:0.1]",
        sm: "[--bevel-size:0.15]",
        md: "[--bevel-size:0.2]",
        lg: "[--bevel-size:0.25]",
        xl: "[--bevel-size:0.3]",
      },
    },
    defaultVariants: {
      bevelSize: "md",
    },
  }
)

export interface BevelShapeProps
  extends React.SVGAttributes<SVGSVGElement>,
    VariantProps<typeof bevelShapeVariants> {
  fill?: string
  stroke?: string
  strokeWidth?: number
  className?: string
  pathClassName?: string
}

const BevelShape = React.forwardRef<SVGSVGElement, BevelShapeProps>(
  ({ 
    className, 
    bevelSize = "md", 
    fill = "currentColor",
    stroke = "currentColor", 
    strokeWidth = 1,
    pathClassName,
    ...props 
  }, ref) => {
    // Bevel size ratios
    const bevelSizes = {
      xs: 0.1,
      sm: 0.15,
      md: 0.2,
      lg: 0.25,
      xl: 0.3,
    }

    const sizeRatio = bevelSizes[bevelSize || "md"]

    // Generate SVG path with bevels
    const getPathData = () => {
      // Calculate bevel size - for 45-degree angles, bevel should be equal in both directions
      // Default (md) should be 20% of height, which means bevelSize = 0.2
      // For a 45-degree angle, both X and Y offsets should be equal
      const bevelSize = sizeRatio * 100
      
      // Create beveled path with 45-degree angles
      // Top-left corner: beveled from (bevelSize, 0) to (0, bevelSize) - 45 degrees down-left
      // Bottom-right corner: beveled from (100-bevelSize, 100) to (100, 100-bevelSize) - 45 degrees up-right
      // Path should go: start -> top edge -> right edge -> bottom-right bevel -> bottom edge -> left edge -> top-left bevel -> close
      return `
        M ${bevelSize},0 
        L 100,0 
        L 100,${100 - bevelSize} 
        L ${100 - bevelSize},100 
        L 0,100 
        L 0,${bevelSize} 
        Z
      `.trim()
    }

    return (
      <svg
        ref={ref}
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        className={cn(bevelShapeVariants({ bevelSize, className }))}
        {...props}
      >
        <path
          d={getPathData()}
          fill={fill}
          stroke={stroke}
          strokeWidth={strokeWidth}
          vectorEffect="non-scaling-stroke"
          strokeLinejoin="bevel"
          strokeLinecap="butt"
          strokeMiterlimit="1"
          className={cn(
            "transition-all duration-200 ease-in-out",
            pathClassName
          )}
        />
      </svg>
    )
  }
)

BevelShape.displayName = "BevelShape"

export { BevelShape, bevelShapeVariants }
