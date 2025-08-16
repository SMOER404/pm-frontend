import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
import { ResponsiveSpacing, getResponsiveSpacingClasses } from "./layout-types"

const layoutVariants = cva(
  "min-h-screen flex flex-col",
  {
    variants: {
      sidebarPosition: {
        left: "lg:flex-row",
        right: "lg:flex-row-reverse",
      },
      stickyHeader: {
        true: "sticky top-0 z-50",
        false: "",
      },
      stickyFooter: {
        true: "sticky bottom-0 z-50",
        false: "",
      },
    },
    defaultVariants: {
      sidebarPosition: "left",
      stickyHeader: false,
      stickyFooter: false,
    },
  }
)

const mainVariants = cva(
  "flex-1",
  {
    variants: {
      hasSidebar: {
        true: "lg:flex-1",
        false: "w-full",
      },
    },
    defaultVariants: {
      hasSidebar: false,
    },
  }
)

const sidebarVariants = cva(
  "w-full lg:w-80",
  {
    variants: {
      position: {
        left: "lg:order-first",
        right: "lg:order-last",
      },
    },
    defaultVariants: {
      position: "left",
    },
  }
)

export interface LayoutProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof layoutVariants> {
  header?: React.ReactNode
  sidebar?: React.ReactNode
  footer?: React.ReactNode
  sidebarWidth?: ResponsiveSpacing
  headerHeight?: string
  footerHeight?: string
  gap?: ResponsiveSpacing
}

const Layout = React.forwardRef<HTMLDivElement, LayoutProps>(
  ({ 
    className, 
    header, 
    sidebar, 
    footer, 
    sidebarPosition = "left",
    sidebarWidth,
    headerHeight,
    footerHeight,
    gap,
    children,
    stickyHeader = false,
    stickyFooter = false,
    ...props 
  }, ref) => {
    const gapClasses = getResponsiveSpacingClasses(gap, 'gap')
    const sidebarWidthClasses = getResponsiveSpacingClasses(sidebarWidth, 'w')
    
    return (
      <div
        ref={ref}
        className={cn(
          layoutVariants({ sidebarPosition, stickyHeader, stickyFooter }),
          className
        )}
        {...props}
      >
        {/* Header */}
        {header && (
          <header
            className={cn(
              "w-full",
              stickyHeader && "sticky top-0 z-50",
              headerHeight && `h-[${headerHeight}]`
            )}
          >
            {header}
          </header>
        )}
        
        {/* Main content area with sidebar */}
        <div className={cn("flex flex-1 flex-col lg:flex-row", gapClasses)}>
          {/* Sidebar */}
          {sidebar && (
            <aside
              className={cn(
                sidebarVariants({ position: sidebarPosition }),
                sidebarWidthClasses || "w-full lg:w-80"
              )}
            >
              {sidebar}
            </aside>
          )}
          
          {/* Main content */}
          <main
            className={cn(
              mainVariants({ hasSidebar: !!sidebar }),
              "flex-1"
            )}
          >
            {children}
          </main>
        </div>
        
        {/* Footer */}
        {footer && (
          <footer
            className={cn(
              "w-full",
              stickyFooter && "sticky bottom-0 z-50",
              footerHeight && `h-[${footerHeight}]`
            )}
          >
            {footer}
          </footer>
        )}
      </div>
    )
  }
)

Layout.displayName = "Layout"

export { Layout, layoutVariants }
