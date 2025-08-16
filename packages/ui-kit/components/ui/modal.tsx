import * as React from "react"
import * as DialogPrimitive from "@radix-ui/react-dialog"
import { X } from "lucide-react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const modalVariants = cva(
  "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
  {
    variants: {
      size: {
        sm: "max-w-sm",
        default: "max-w-lg",
        lg: "max-w-2xl",
        xl: "max-w-4xl",
        full: "max-w-[95vw] max-h-[95vh]",
      },
      centered: {
        true: "top-[50%] translate-y-[-50%]",
        false: "top-[10%] translate-y-0",
      },
    },
    defaultVariants: {
      size: "default",
      centered: true,
    },
  }
)

const modalOverlayVariants = cva(
  "fixed inset-0 z-50 bg-background/80 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
  {
    variants: {},
    defaultVariants: {},
  }
)

export interface ModalProps
  extends React.ComponentPropsWithoutRef<typeof DialogPrimitive.Root>,
    VariantProps<typeof modalVariants> {
  closeOnOverlayClick?: boolean
  closeOnEscape?: boolean
}

const Modal = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Root>,
  ModalProps
>(({ 
  className, 
  size, 
  centered = true, 
  closeOnOverlayClick = true,
  closeOnEscape = true,
  ...props 
}, ref) => (
  <DialogPrimitive.Root {...props}>
    <DialogPrimitive.Portal>
      <DialogPrimitive.Overlay
        className={cn(modalOverlayVariants(), className)}
        onClick={closeOnOverlayClick ? undefined : (e) => e.preventDefault()}
      />
    </DialogPrimitive.Portal>
  </DialogPrimitive.Root>
))
Modal.displayName = DialogPrimitive.Root.displayName

export interface ModalTriggerProps
  extends React.ComponentPropsWithoutRef<typeof DialogPrimitive.Trigger> {}

const ModalTrigger = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Trigger>,
  ModalTriggerProps
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Trigger
    ref={ref}
    className={cn(className)}
    {...props}
  />
))
ModalTrigger.displayName = DialogPrimitive.Trigger.displayName

export interface ModalContentProps
  extends React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>,
    VariantProps<typeof modalVariants> {}

const ModalContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  ModalContentProps
>(({ className, size, centered, children, ...props }, ref) => (
  <DialogPrimitive.Portal>
    <DialogPrimitive.Overlay className={cn(modalOverlayVariants())} />
    <DialogPrimitive.Content
      ref={ref}
      className={cn(modalVariants({ size, centered, className }))}
      onEscapeKeyDown={(e) => {
        // Prevent closing on escape if closeOnEscape is false
        if (!props.closeOnEscape) {
          e.preventDefault()
        }
      }}
      {...props}
    >
      {children}
    </DialogPrimitive.Content>
  </DialogPrimitive.Portal>
))
ModalContent.displayName = DialogPrimitive.Content.displayName

export interface ModalHeaderProps
  extends React.HTMLAttributes<HTMLDivElement> {
  showClose?: boolean
  onClose?: () => void
}

const ModalHeader = React.forwardRef<HTMLDivElement, ModalHeaderProps>(
  ({ className, showClose = true, onClose, children, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "flex flex-col space-y-1.5 text-center sm:text-left",
        className
      )}
      {...props}
    >
      <div className="flex items-center justify-between">
        <div className="flex-1">{children}</div>
        {showClose && (
          <DialogPrimitive.Close
            onClick={onClose}
            className="rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground"
          >
            <X className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </DialogPrimitive.Close>
        )}
      </div>
    </div>
  )
)
ModalHeader.displayName = "ModalHeader"

export interface ModalBodyProps
  extends React.HTMLAttributes<HTMLDivElement> {
  scrollable?: boolean
}

const ModalBody = React.forwardRef<HTMLDivElement, ModalBodyProps>(
  ({ className, scrollable = false, children, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "relative",
        scrollable && "max-h-[60vh] overflow-y-auto",
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
)
ModalBody.displayName = "ModalBody"

export interface ModalFooterProps
  extends React.HTMLAttributes<HTMLDivElement> {
  align?: 'start' | 'center' | 'end'
}

const ModalFooter = React.forwardRef<HTMLDivElement, ModalFooterProps>(
  ({ className, align = 'end', children, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
        align === 'start' && "sm:justify-start",
        align === 'center' && "sm:justify-center",
        align === 'end' && "sm:justify-end",
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
)
ModalFooter.displayName = "ModalFooter"

const ModalTitle = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Title
    ref={ref}
    className={cn(
      "text-lg font-semibold leading-none tracking-tight",
      className
    )}
    {...props}
  />
))
ModalTitle.displayName = DialogPrimitive.Title.displayName

const ModalDescription = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Description
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
))
ModalDescription.displayName = DialogPrimitive.Description.displayName

export {
  Modal,
  ModalTrigger,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ModalTitle,
  ModalDescription,
  modalVariants,
}

