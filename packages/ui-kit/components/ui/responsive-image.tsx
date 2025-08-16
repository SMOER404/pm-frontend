import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
import { ResponsiveSpacing, getResponsiveSpacingClasses } from "./layout-types"

const responsiveImageVariants = cva(
  "w-full h-auto",
  {
    variants: {
      objectFit: {
        cover: "object-cover",
        contain: "object-contain",
        fill: "object-fill",
        none: "object-none",
        "scale-down": "object-scale-down",
      },
      aspectRatio: {
        "16:9": "aspect-video",
        "4:3": "aspect-[4/3]",
        "1:1": "aspect-square",
        "3:2": "aspect-[3/2]",
        "21:9": "aspect-[21/9]",
        auto: "",
      },
    },
    defaultVariants: {
      objectFit: "cover",
      aspectRatio: "auto",
    },
  }
)

export interface ResponsiveImageProps
  extends Omit<React.ImgHTMLAttributes<HTMLImageElement>, 'width' | 'height' | 'sizes'>,
    VariantProps<typeof responsiveImageVariants> {
  src: string
  alt: string
  responsiveSizes?: ResponsiveSpacing
  lazy?: boolean
  placeholder?: string
  fallback?: string
  onLoad?: () => void
  onError?: () => void
}

const ResponsiveImage = React.forwardRef<HTMLImageElement, ResponsiveImageProps>(
  ({ 
    className, 
    src, 
    alt, 
    responsiveSizes,
    objectFit, 
    aspectRatio,
    lazy = true,
    placeholder,
    fallback,
    onLoad,
    onError,
    ...props 
  }, ref) => {
    const [imageSrc, setImageSrc] = React.useState(src)
    const [isLoading, setIsLoading] = React.useState(true)
    const [hasError, setHasError] = React.useState(false)
    
    const sizesClasses = getResponsiveSpacingClasses(responsiveSizes, 'w')
    
    React.useEffect(() => {
      setImageSrc(src)
      setIsLoading(true)
      setHasError(false)
    }, [src])
    
    const handleLoad = () => {
      setIsLoading(false)
      onLoad?.()
    }
    
    const handleError = () => {
      setIsLoading(false)
      setHasError(true)
      if (fallback && imageSrc !== fallback) {
        setImageSrc(fallback)
      }
      onError?.()
    }
    
    const aspectRatioClasses = aspectRatio === 'auto' ? '' : responsiveImageVariants({ aspectRatio })
    
    return (
      <div className={cn("relative", sizesClasses)}>
        {isLoading && placeholder && (
          <div className="absolute inset-0 bg-muted animate-pulse" />
        )}
        
        <img
          ref={ref}
          src={imageSrc}
          alt={alt}
          loading={lazy ? "lazy" : "eager"}
          className={cn(
            responsiveImageVariants({ objectFit }),
            aspectRatioClasses,
            isLoading && "opacity-0",
            hasError && "opacity-50",
            className
          )}
          onLoad={handleLoad}
          onError={handleError}
          {...props}
        />
        
        {hasError && !fallback && (
          <div className="absolute inset-0 flex items-center justify-center bg-muted text-muted-foreground">
            <span className="text-sm">Image not available</span>
          </div>
        )}
      </div>
    )
  }
)

ResponsiveImage.displayName = "ResponsiveImage"

export { ResponsiveImage, responsiveImageVariants }
