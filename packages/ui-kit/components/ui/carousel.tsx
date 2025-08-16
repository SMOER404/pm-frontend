import * as React from "react"
import { ChevronLeft, ChevronRight, Circle } from "lucide-react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const carouselVariants = cva(
  "relative w-full overflow-hidden",
  {
    variants: {
      variant: {
        default: "",
        card: "rounded-lg",
        fullscreen: "h-screen",
      },
      size: {
        sm: "h-48",
        default: "h-64",
        lg: "h-80",
        xl: "h-96",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

const carouselSlideVariants = cva(
  "absolute inset-0 transition-all duration-300 ease-in-out",
  {
    variants: {
      variant: {
        default: "",
        fade: "opacity-0 data-[active=true]:opacity-100",
        slide: "translate-x-full data-[active=true]:translate-x-0 data-[prev=true]:-translate-x-full",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

const carouselControlVariants = cva(
  "absolute top-1/2 -translate-y-1/2 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-background/80 text-foreground shadow-sm transition-all hover:bg-background/90 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "",
        minimal: "bg-transparent text-foreground/80 hover:text-foreground",
        outlined: "border border-border bg-background",
      },
      size: {
        sm: "h-6 w-6",
        default: "h-8 w-8",
        lg: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

const carouselIndicatorVariants = cva(
  "flex h-2 w-2 rounded-full transition-all",
  {
    variants: {
      variant: {
        default: "bg-muted-foreground/50 data-[active=true]:bg-foreground",
        dots: "bg-muted-foreground/30 data-[active=true]:bg-foreground",
        lines: "h-1 bg-muted-foreground/30 data-[active=true]:bg-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface CarouselProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof carouselVariants> {
  children: React.ReactNode
  autoPlay?: boolean
  interval?: number
  showControls?: boolean
  showIndicators?: boolean
  infinite?: boolean
  onSlideChange?: (index: number) => void
}

export interface CarouselSlideProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof carouselSlideVariants> {
  index: number
  active?: boolean
  prev?: boolean
}

export interface CarouselControlProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof carouselControlVariants> {
  direction: "prev" | "next"
  icon?: React.ReactNode
}

export interface CarouselIndicatorProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof carouselIndicatorVariants> {
  index: number
  active?: boolean
}

const CarouselContext = React.createContext<{
  currentSlide: number
  totalSlides: number
  goToSlide: (index: number) => void
  nextSlide: () => void
  prevSlide: () => void
  autoPlay: boolean
  interval: number
  infinite: boolean
} | null>(null)

const useCarousel = () => {
  const context = React.useContext(CarouselContext)
  if (!context) {
    throw new Error("useCarousel must be used within a Carousel")
  }
  return context
}

const Carousel = React.forwardRef<HTMLDivElement, CarouselProps>(
  ({ 
    className, 
    variant, 
    size,
    children,
    autoPlay = false,
    interval = 5000,
    showControls = true,
    showIndicators = true,
    infinite = true,
    onSlideChange,
    ...props 
  }, ref) => {
    const [currentSlide, setCurrentSlide] = React.useState(0)
    const [isPlaying, setIsPlaying] = React.useState(autoPlay)
    const slides = React.Children.toArray(children).filter(
      (child) => React.isValidElement(child) && child.type === CarouselSlide
    )
    const totalSlides = slides.length

    const goToSlide = React.useCallback((index: number) => {
      if (index >= 0 && index < totalSlides) {
        setCurrentSlide(index)
        onSlideChange?.(index)
      }
    }, [totalSlides, onSlideChange])

    const nextSlide = React.useCallback(() => {
      if (infinite || currentSlide < totalSlides - 1) {
        const next = (currentSlide + 1) % totalSlides
        goToSlide(next)
      }
    }, [currentSlide, totalSlides, infinite, goToSlide])

    const prevSlide = React.useCallback(() => {
      if (infinite || currentSlide > 0) {
        const prev = currentSlide === 0 ? totalSlides - 1 : currentSlide - 1
        goToSlide(prev)
      }
    }, [currentSlide, totalSlides, infinite, goToSlide])

    // Auto-play functionality
    React.useEffect(() => {
      if (!autoPlay || !isPlaying) return

      const timer = setInterval(() => {
        nextSlide()
      }, interval)

      return () => clearInterval(timer)
    }, [autoPlay, isPlaying, interval, nextSlide])

    // Pause auto-play on hover
    const handleMouseEnter = () => setIsPlaying(false)
    const handleMouseLeave = () => setIsPlaying(autoPlay)

    const contextValue = React.useMemo(() => ({
      currentSlide,
      totalSlides,
      goToSlide,
      nextSlide,
      prevSlide,
      autoPlay,
      interval,
      infinite,
    }), [currentSlide, totalSlides, goToSlide, nextSlide, prevSlide, autoPlay, interval, infinite])

    return (
      <CarouselContext.Provider value={contextValue}>
        <div
          ref={ref}
          className={cn(carouselVariants({ variant, size }), className)}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          {...props}
        >
          {children}
          
          {showControls && (
            <>
              <CarouselControl direction="prev" />
              <CarouselControl direction="next" />
            </>
          )}
          
          {showIndicators && totalSlides > 1 && (
            <div className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 gap-2">
              {Array.from({ length: totalSlides }).map((_, index) => (
                <CarouselIndicator key={index} index={index} active={index === currentSlide} />
              ))}
            </div>
          )}
        </div>
      </CarouselContext.Provider>
    )
  }
)
Carousel.displayName = "Carousel"

const CarouselSlide = React.forwardRef<HTMLDivElement, CarouselSlideProps>(
  ({ 
    className, 
    variant, 
    index, 
    active = false, 
    prev = false,
    children, 
    ...props 
  }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(carouselSlideVariants({ variant }), className)}
        data-active={active}
        data-prev={prev}
        {...props}
      >
        {children}
      </div>
    )
  }
)
CarouselSlide.displayName = "CarouselSlide"

const CarouselControl = React.forwardRef<HTMLButtonElement, CarouselControlProps>(
  ({ 
    className, 
    variant, 
    size,
    direction, 
    icon,
    ...props 
  }, ref) => {
    const { nextSlide, prevSlide, currentSlide, totalSlides, infinite } = useCarousel()
    
    const isDisabled = !infinite && (
      (direction === "prev" && currentSlide === 0) ||
      (direction === "next" && currentSlide === totalSlides - 1)
    )

    const handleClick = () => {
      if (direction === "prev") {
        prevSlide()
      } else {
        nextSlide()
      }
    }

    const defaultIcon = direction === "prev" ? (
      <ChevronLeft className="h-4 w-4" />
    ) : (
      <ChevronRight className="h-4 w-4" />
    )

    return (
      <button
        ref={ref}
        type="button"
        className={cn(
          carouselControlVariants({ variant, size }),
          direction === "prev" ? "left-2" : "right-2",
          className
        )}
        onClick={handleClick}
        disabled={isDisabled}
        aria-label={`Go to ${direction} slide`}
        {...props}
      >
        {icon || defaultIcon}
      </button>
    )
  }
)
CarouselControl.displayName = "CarouselControl"

const CarouselIndicator = React.forwardRef<HTMLButtonElement, CarouselIndicatorProps>(
  ({ 
    className, 
    variant,
    index, 
    active = false,
    ...props 
  }, ref) => {
    const { goToSlide } = useCarousel()

    return (
      <button
        ref={ref}
        type="button"
        className={cn(carouselIndicatorVariants({ variant }), className)}
        onClick={() => goToSlide(index)}
        data-active={active}
        aria-label={`Go to slide ${index + 1}`}
        {...props}
      >
        <span className="sr-only">Slide {index + 1}</span>
      </button>
    )
  }
)
CarouselIndicator.displayName = "CarouselIndicator"

export {
  Carousel,
  CarouselSlide,
  CarouselControl,
  CarouselIndicator,
  useCarousel,
  carouselVariants,
  carouselSlideVariants,
  carouselControlVariants,
  carouselIndicatorVariants,
}
