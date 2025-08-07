"use client"

import type React from "react"
import { useState, useRef, useEffect } from "react"
import { createPortal } from "react-dom"
import { cn } from "../lib/utils"
import { tokens, type SizeToken } from "../lib/design-tokens"
import { createChamferStyles, getChamferSizeFromComponentSize } from "../lib/chamfer-utils"
import { 
  useModalState, 
  useDragHandlers, 
  useResizeHandlers,
  getModalSize,
  centerModal,
  type ModalConfig,
  type ModalSize,
  type ModalState,
  type ModalActions
} from "../lib/modal-utils"
import { X, Move, Maximize2, Minimize2 } from "lucide-react"

interface CustomModalProps {
  isOpen: boolean
  onClose: () => void
  title?: string
  children: React.ReactNode
  footer?: React.ReactNode
  size?: ModalSize | SizeToken
  config?: ModalConfig
  className?: string
  overlayClassName?: string
  contentClassName?: string
  headerClassName?: string
  bodyClassName?: string
  footerClassName?: string
}

export default function CustomModal({
  isOpen,
  onClose,
  title,
  children,
  footer,
  size = "md",
  config = {},
  className,
  overlayClassName,
  contentClassName,
  headerClassName,
  bodyClassName,
  footerClassName,
}: CustomModalProps) {
  const modalRef = useRef<HTMLDivElement>(null)
  const [mounted, setMounted] = useState(false)

  // Определяем размеры модального окна
  const getInitialSize = () => {
    if (typeof size === "string" && size in getModalSize(size as ModalSize)) {
      // Обрабатываем случай с full размером
      if (size === "full") {
        return {
          width: window.innerWidth,
          height: window.innerHeight,
        }
      }
      // Для остальных размеров получаем из getModalSize
      const modalSize = getModalSize(size as ModalSize)
      if (typeof modalSize.width === "number" && typeof modalSize.height === "number") {
        return modalSize
      }
    }
    // Если это SizeToken, используем размеры из токенов
    const sizeConfig = tokens.sizes[size as SizeToken]
    return {
      width: parseInt(sizeConfig.height) * 2, // Примерная ширина
      height: parseInt(sizeConfig.height) * 1.5, // Примерная высота
    }
  }

  const initialSize = getInitialSize()
  const initialPosition = size === "full" ? { x: 0, y: 0 } : centerModal(initialSize)

  // Инициализируем состояние модального окна
  const [modalState, modalActions, setModalState] = useModalState({
    initialPosition,
    initialSize,
    ...config,
  })

  // Синхронизируем с внешним isOpen
  useEffect(() => {
    if (isOpen && !modalState.isOpen) {
      modalActions.open()
    }
  }, [isOpen, modalState.isOpen, modalActions])

  // Вызываем onClose при закрытии
  useEffect(() => {
    if (!modalState.isOpen && !modalState.isAnimating && isOpen) {
      onClose()
    }
  }, [modalState.isOpen, modalState.isAnimating, isOpen, onClose])

  // Монтируем компонент только на клиенте
  useEffect(() => {
    setMounted(true)
  }, [])

  // Обработчики drag & resize
  useDragHandlers(modalState, modalActions, setModalState)
  useResizeHandlers(modalState, modalActions, config, setModalState)

  // Обработчик клика по оверлею
  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget && config.closeOnOverlayClick !== false) {
      modalActions.close()
    }
  }

  // Получаем размеры из токенов для скосов
  const chamferSize = getChamferSizeFromComponentSize("md")
  const chamferStyles = createChamferStyles(
    chamferSize,
    tokens.colors.primary.DEFAULT
  )

  if (!mounted) return null

  return createPortal(
    <div
      className={cn(
        "fixed inset-0 z-50 flex items-center justify-center",
        modalState.isOpen ? "opacity-100" : "opacity-0 pointer-events-none",
        "transition-opacity duration-300 ease-out",
        overlayClassName
      )}
      onClick={handleOverlayClick}
    >
      {/* Backdrop */}
      <div 
        className={cn(
          "absolute inset-0 bg-black/50 backdrop-blur-sm",
          modalState.isAnimating && "animate-pulse"
        )}
      />

      {/* Modal Container */}
      <div
        ref={modalRef}
        className={cn(
          "relative z-10",
          modalState.isOpen ? "scale-100 opacity-100" : "scale-95 opacity-0",
          "transition-all duration-300 ease-out",
          className
        )}
        style={{
          transform: config.draggable 
            ? `translate(${modalState.position.x}px, ${modalState.position.y}px)`
            : 'translate(-50%, -50%)',
          width: typeof modalState.size.width === "string" 
            ? modalState.size.width 
            : `${modalState.size.width}px`,
          height: typeof modalState.size.height === "string" 
            ? modalState.size.height 
            : `${modalState.size.height}px`,
          position: config.draggable ? 'absolute' : 'relative',
          top: config.draggable ? '0' : 'auto',
          left: config.draggable ? '0' : 'auto',
        }}
      >
        {/* Внешняя рамка со скосами */}
        <div
          className="absolute inset-0 transition-all duration-200"
          style={{
            ...chamferStyles.outer,
            backgroundColor: tokens.colors.primary.DEFAULT,
          }}
        />

        {/* Внутренний контент */}
        <div
          className={cn(
            "relative h-full flex flex-col bg-white",
            contentClassName
          )}
          style={chamferStyles.inner}
        >
          {/* Header */}
          <div
            className={cn(
              "flex items-center justify-between p-4 border-b border-gray-200 bg-gray-50",
              config.draggable && "cursor-move",
              headerClassName
            )}
            onMouseDown={config.draggable ? modalActions.startDrag : undefined}
          >
            <div className="flex items-center gap-2">
              {config.draggable && (
                <Move className="w-4 h-4 text-gray-400" />
              )}
              {title && (
                <h2 className="text-lg font-semibold text-gray-900">
                  {title}
                </h2>
              )}
            </div>

            <div className="flex items-center gap-2">
              {/* Кнопки управления */}
              {config.resizable && (
                <button
                  type="button"
                  onClick={modalActions.resetSize}
                  className="p-1 hover:bg-gray-100 rounded transition-colors"
                  title="Сбросить размер"
                >
                  <Minimize2 className="w-4 h-4 text-gray-400" />
                </button>
              )}
              
              {config.draggable && (
                <button
                  type="button"
                  onClick={modalActions.resetPosition}
                  className="p-1 hover:bg-gray-100 rounded transition-colors"
                  title="Центрировать"
                >
                  <Maximize2 className="w-4 h-4 text-gray-400" />
                </button>
              )}

              <button
                type="button"
                onClick={modalActions.close}
                className="p-1 hover:bg-gray-100 rounded transition-colors"
                title="Закрыть"
              >
                <X className="w-4 h-4 text-gray-400" />
              </button>
            </div>
          </div>

          {/* Content */}
          <div className={cn(
            "flex-1 overflow-auto p-4",
            bodyClassName
          )}>
            {children}
          </div>

          {/* Footer */}
          {footer && (
            <div className={cn(
              "p-4 border-t border-gray-200 bg-gray-50",
              footerClassName
            )}>
              {footer}
            </div>
          )}

          {/* Resize handles */}
          {config.resizable && (
            <>
              {/* Top-left */}
              <div
                className="absolute top-0 left-0 w-3 h-3 cursor-nw-resize"
                onMouseDown={(e) => modalActions.startResize(e, "top-left")}
              />
              {/* Top-right */}
              <div
                className="absolute top-0 right-0 w-3 h-3 cursor-ne-resize"
                onMouseDown={(e) => modalActions.startResize(e, "top-right")}
              />
              {/* Bottom-left */}
              <div
                className="absolute bottom-0 left-0 w-3 h-3 cursor-sw-resize"
                onMouseDown={(e) => modalActions.startResize(e, "bottom-left")}
              />
              {/* Bottom-right */}
              <div
                className="absolute bottom-0 right-0 w-3 h-3 cursor-se-resize"
                onMouseDown={(e) => modalActions.startResize(e, "bottom-right")}
              />
              {/* Top */}
              <div
                className="absolute top-0 left-3 right-3 h-1 cursor-n-resize"
                onMouseDown={(e) => modalActions.startResize(e, "top")}
              />
              {/* Bottom */}
              <div
                className="absolute bottom-0 left-3 right-3 h-1 cursor-s-resize"
                onMouseDown={(e) => modalActions.startResize(e, "bottom")}
              />
              {/* Left */}
              <div
                className="absolute left-0 top-3 bottom-3 w-1 cursor-w-resize"
                onMouseDown={(e) => modalActions.startResize(e, "left")}
              />
              {/* Right */}
              <div
                className="absolute right-0 top-3 bottom-3 w-1 cursor-e-resize"
                onMouseDown={(e) => modalActions.startResize(e, "right")}
              />
            </>
          )}
        </div>
      </div>
    </div>,
    document.body
  )
} 