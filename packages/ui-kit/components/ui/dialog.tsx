import * as React from "react"
import * as DialogPrimitive from "@radix-ui/react-dialog"
import * as AlertDialogPrimitive from "@radix-ui/react-alert-dialog"
import { X } from "lucide-react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
import { Button } from "./button"

const dialogVariants = cva(
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
      fullScreen: {
        true: "max-w-[100vw] max-h-[100vh] w-full h-full rounded-none",
        false: "",
      },
    },
    defaultVariants: {
      size: "default",
      fullScreen: false,
    },
  }
)

const dialogOverlayVariants = cva(
  "fixed inset-0 z-50 bg-background/80 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
  {
    variants: {},
    defaultVariants: {},
  }
)

export interface DialogProps
  extends React.ComponentPropsWithoutRef<typeof DialogPrimitive.Root>,
    VariantProps<typeof dialogVariants> {
  type?: 'alert' | 'confirm' | 'custom'
  title?: string
  description?: string
  actions?: Array<{
    label: string
    variant?: 'default' | 'secondary' | 'destructive'
    onClick?: () => void
    disabled?: boolean
  }>
  fullScreen?: boolean
}

const Dialog = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Root>,
  DialogProps
>(({ 
  className, 
  size, 
  fullScreen = false,
  type = 'custom',
  title,
  description,
  actions,
  children,
  ...props 
}, ref) => {
  if (type === 'alert' || type === 'confirm') {
    return (
      <AlertDialogPrimitive.Root {...props}>
        <AlertDialogPrimitive.Portal>
          <AlertDialogPrimitive.Overlay className={cn(dialogOverlayVariants())} />
          <AlertDialogPrimitive.Content
            ref={ref}
            className={cn(dialogVariants({ size, fullScreen, className }))}
          >
            <div className="grid gap-4 py-4">
              <AlertDialogPrimitive.Title className="text-lg font-semibold">
                {title}
              </AlertDialogPrimitive.Title>
              {description && (
                <AlertDialogPrimitive.Description className="text-sm text-muted-foreground">
                  {description}
                </AlertDialogPrimitive.Description>
              )}
            </div>
            {actions && actions.length > 0 && (
              <div className="flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2">
                {actions.map((action, index) => (
                  <AlertDialogPrimitive.Action asChild key={index}>
                    <Button
                      variant={action.variant || 'default'}
                      onClick={action.onClick}
                      disabled={action.disabled}
                    >
                      {action.label}
                    </Button>
                  </AlertDialogPrimitive.Action>
                ))}
              </div>
            )}
            {children}
          </AlertDialogPrimitive.Content>
        </AlertDialogPrimitive.Portal>
      </AlertDialogPrimitive.Root>
    )
  }

  return (
    <DialogPrimitive.Root {...props}>
      <DialogPrimitive.Portal>
        <DialogPrimitive.Overlay className={cn(dialogOverlayVariants())} />
        <DialogPrimitive.Content
          ref={ref}
          className={cn(dialogVariants({ size, fullScreen, className }))}
        >
          {title && (
            <DialogPrimitive.Title className="text-lg font-semibold">
              {title}
            </DialogPrimitive.Title>
          )}
          {description && (
            <DialogPrimitive.Description className="text-sm text-muted-foreground">
              {description}
            </DialogPrimitive.Description>
          )}
          {actions && actions.length > 0 && (
            <div className="flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2">
              {actions.map((action, index) => (
                <Button
                  key={index}
                  variant={action.variant || 'default'}
                  onClick={action.onClick}
                  disabled={action.disabled}
                >
                  {action.label}
                </Button>
              ))}
            </div>
          )}
          {children}
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  )
})
Dialog.displayName = DialogPrimitive.Root.displayName

export interface DialogTriggerProps
  extends React.ComponentPropsWithoutRef<typeof DialogPrimitive.Trigger> {}

const DialogTrigger = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Trigger>,
  DialogTriggerProps
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Trigger
    ref={ref}
    className={cn(className)}
    {...props}
  />
))
DialogTrigger.displayName = DialogPrimitive.Trigger.displayName

export interface DialogContentProps
  extends React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>,
    VariantProps<typeof dialogVariants> {}

const DialogContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  DialogContentProps
>(({ className, size, fullScreen, children, ...props }, ref) => (
  <DialogPrimitive.Portal>
    <DialogPrimitive.Overlay className={cn(dialogOverlayVariants())} />
    <DialogPrimitive.Content
      ref={ref}
      className={cn(dialogVariants({ size, fullScreen, className }))}
      {...props}
    >
      {children}
    </DialogPrimitive.Content>
  </DialogPrimitive.Portal>
))
DialogContent.displayName = DialogPrimitive.Content.displayName

export interface DialogHeaderProps
  extends React.HTMLAttributes<HTMLDivElement> {
  showClose?: boolean
  onClose?: () => void
}

const DialogHeader = React.forwardRef<HTMLDivElement, DialogHeaderProps>(
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
DialogHeader.displayName = "DialogHeader"

export interface DialogBodyProps
  extends React.HTMLAttributes<HTMLDivElement> {
  scrollable?: boolean
}

const DialogBody = React.forwardRef<HTMLDivElement, DialogBodyProps>(
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
DialogBody.displayName = "DialogBody"

export interface DialogFooterProps
  extends React.HTMLAttributes<HTMLDivElement> {
  align?: 'start' | 'center' | 'end'
}

const DialogFooter = React.forwardRef<HTMLDivElement, DialogFooterProps>(
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
DialogFooter.displayName = "DialogFooter"

const DialogTitle = React.forwardRef<
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
DialogTitle.displayName = DialogPrimitive.Title.displayName

const DialogDescription = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Description
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
))
DialogDescription.displayName = DialogPrimitive.Description.displayName

// Alert Dialog specific components
export interface AlertDialogProps {
  open?: boolean
  onOpenChange?: (open: boolean) => void
  title: string
  description?: string
  actionLabel: string
  cancelLabel?: string
  onAction?: () => void
  onCancel?: () => void
  variant?: 'default' | 'destructive'
}

const AlertDialog = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Root>,
  AlertDialogProps
>(({ 
  open, 
  onOpenChange, 
  title, 
  description, 
  actionLabel, 
  cancelLabel = "Cancel",
  onAction,
  onCancel,
  variant = 'default',
  ...props 
}, ref) => (
  <AlertDialogPrimitive.Root open={open} onOpenChange={onOpenChange} {...props}>
    <AlertDialogPrimitive.Portal>
      <AlertDialogPrimitive.Overlay className={cn(dialogOverlayVariants())} />
      <AlertDialogPrimitive.Content
        ref={ref}
        className={cn(dialogVariants({ size: "sm" }))}
      >
        <div className="grid gap-4 py-4">
          <AlertDialogPrimitive.Title className="text-lg font-semibold">
            {title}
          </AlertDialogPrimitive.Title>
          {description && (
            <AlertDialogPrimitive.Description className="text-sm text-muted-foreground">
              {description}
            </AlertDialogPrimitive.Description>
          )}
        </div>
        <div className="flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2">
          <AlertDialogPrimitive.Cancel asChild>
            <Button variant="outline" onClick={onCancel}>
              {cancelLabel}
            </Button>
          </AlertDialogPrimitive.Cancel>
          <AlertDialogPrimitive.Action asChild>
            <Button variant={variant} onClick={onAction}>
              {actionLabel}
            </Button>
          </AlertDialogPrimitive.Action>
        </div>
      </AlertDialogPrimitive.Content>
    </AlertDialogPrimitive.Portal>
  </AlertDialogPrimitive.Root>
))
AlertDialog.displayName = "AlertDialog"

export {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogBody,
  DialogFooter,
  DialogTitle,
  DialogDescription,
  AlertDialog,
  dialogVariants,
}

