import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
import { ResponsiveSpacing, ResponsiveNumber, getResponsiveSpacingClasses, getResponsiveNumberClasses, ImageItem } from "./layout-types"
import { ResponsiveImage } from "./responsive-image"

const imageListVariants = cva(
  "w-full",
  {
    variants: {
      variant: {
        grid: "grid",
        masonry: "columns-1 sm:columns-2 md:columns-3 lg:columns-4",
        carousel: "flex overflow-x-auto snap-x snap-mandatory",
        gallery: "grid",
      },
      overlay: {
        true: "group",
        false: "",
      },
    },
    defaultVariants: {
      variant: "grid",
      overlay: false,
    },
  }
)

const imageItemVariants = cva(
  "relative",
  {
    variants: {
      variant: {
        grid: "w-full",
        masonry: "break-inside-avoid mb-4",
        carousel: "flex-shrink-0 snap-start",
        gallery: "w-full cursor-pointer",
      },
      overlay: {
        true: "overflow-hidden",
        false: "",
      },
    },
    defaultVariants: {
      variant: "grid",
      overlay: false,
    },
  }
)

const overlayVariants = cva(
  "absolute inset-0 bg-black/50 opacity-0 transition-opacity duration-200 flex items-center justify-center",
  {
    variants: {
      overlay: {
        true: "group-hover:opacity-100",
        false: "",
      },
    },
    defaultVariants: {
      overlay: false,
    },
  }
)

export interface ImageListProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof imageListVariants> {
  images: ImageItem[]
  columns?: ResponsiveNumber
  gap?: ResponsiveSpacing
  aspectRatio?: "16:9" | "4:3" | "1:1" | "3:2" | "auto"
  lazy?: boolean
  overlay?: boolean
  overlayContent?: React.ReactNode
  onImageClick?: (index: number, image: ImageItem) => void
  carouselItemWidth?: string
}

const ImageList = React.forwardRef<HTMLDivElement, ImageListProps>(
  ({ 
    className, 
    images, 
    columns, 
    gap, 
    aspectRatio = "1:1",
    variant = "grid",
    lazy = true,
    overlay = false,
    overlayContent,
    onImageClick,
    carouselItemWidth = "300px",
    ...props 
  }, ref) => {
    const gapClasses = getResponsiveSpacingClasses(gap, 'gap')
    
    // Generate grid template columns for grid variant
    const getGridTemplateColumns = () => {
      if (variant !== "grid" && variant !== "gallery") return ""
      
      if (columns) {
        return getResponsiveNumberClasses(columns, 'grid-cols')
      }
      
      // Default responsive columns
      return "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
    }
    
    const handleImageClick = (index: number, image: ImageItem) => {
      onImageClick?.(index, image)
    }
    
    const renderImageItem = (image: ImageItem, index: number) => {
      const itemClasses = cn(
        imageItemVariants({ variant, overlay }),
        variant === "carousel" && `w-[${carouselItemWidth}]`
      )
      
      return (
        <div
          key={index}
          className={itemClasses}
          onClick={() => handleImageClick(index, image)}
        >
          <ResponsiveImage
            src={image.src}
            alt={image.alt}
            aspectRatio={aspectRatio}
            lazy={lazy}
            className="w-full h-full"
          />
          
          {overlay && (
            <div className={overlayVariants({ overlay: true })}>
              {overlayContent || (
                <div className="text-white text-center p-4">
                  {image.title && <h3 className="font-semibold mb-2">{image.title}</h3>}
                  {image.description && <p className="text-sm">{image.description}</p>}
                </div>
              )}
            </div>
          )}
          
          {/* Image info for non-overlay mode */}
          {!overlay && (image.title || image.description) && (
            <div className="p-2 bg-background border-t">
              {image.title && <h3 className="font-semibold text-sm">{image.title}</h3>}
              {image.description && <p className="text-xs text-muted-foreground">{image.description}</p>}
            </div>
          )}
        </div>
      )
    }
    
    return (
      <div
        ref={ref}
        className={cn(
          imageListVariants({ variant, overlay }),
          getGridTemplateColumns(),
          gapClasses,
          className
        )}
        {...props}
      >
        {images.map((image, index) => renderImageItem(image, index))}
      </div>
    )
  }
)

ImageList.displayName = "ImageList"

export { ImageList, imageListVariants }
