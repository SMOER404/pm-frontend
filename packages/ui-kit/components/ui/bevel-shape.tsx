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
    const [dimensions, setDimensions] = React.useState({ width: 0, height: 0 })
    const svgRef = React.useRef<SVGSVGElement>(null)

    // Expose the ref
    React.useImperativeHandle(ref, () => svgRef.current!)

    // Bevel size ratios - these represent the percentage of height/width
    const bevelSizes = {
      xs: 0.1,  // 10%
      sm: 0.15, // 15%
      md: 0.2,  // 20%
      lg: 0.25, // 25%
      xl: 0.3,  // 30%
    }

    const sizeRatio = bevelSizes[bevelSize || "md"]

    // Use ResizeObserver to get real dimensions
    React.useEffect(() => {
      if (!svgRef.current) return

      // Get initial dimensions
      const getInitialDimensions = () => {
        const rect = svgRef.current?.getBoundingClientRect()
        if (rect && rect.width > 0 && rect.height > 0) {
          setDimensions({ width: rect.width, height: rect.height })
        } else {
          // If dimensions are not available immediately, try again on next frame
          requestAnimationFrame(getInitialDimensions)
        }
      }

      // Get initial dimensions immediately
      getInitialDimensions()

      // Set up ResizeObserver for changes
      const resizeObserver = new ResizeObserver((entries) => {
        for (const entry of entries) {
          const { width, height } = entry.contentRect
          if (width > 0 && height > 0) {
            setDimensions({ width, height })
          }
        }
      })

      resizeObserver.observe(svgRef.current)

      return () => {
        resizeObserver.disconnect()
      }
    }, [])

    // Generate SVG path with bevels
    const getPathData = () => {
      const { width, height } = dimensions
      
      // Don't render if dimensions are not available
      if (width === 0 || height === 0) {
        return ""
      }
      
      // Calculate bevel size based on the height (as requested by user)
      // Default (md) should be 20% of height
      const bevelSize = height * sizeRatio
      
      // Create beveled path with 45-degree angles
      // Only top-left and bottom-right corners are beveled
      // Top-left corner: beveled from (bevelSize, 0) to (0, bevelSize)
      // Bottom-right corner: beveled from (width-bevelSize, height) to (width, height-bevelSize)
      return `
        M ${bevelSize},0 
        L ${width},0 
        L ${width},${height - bevelSize} 
        L ${width - bevelSize},${height} 
        L 0,${height} 
        L 0,${bevelSize} 
        Z
      `.trim()
    }

    return (
      <svg
        ref={svgRef}
        viewBox={dimensions.width > 0 && dimensions.height > 0 ? `0 0 ${dimensions.width} ${dimensions.height}` : "0 0 100 100"}
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
