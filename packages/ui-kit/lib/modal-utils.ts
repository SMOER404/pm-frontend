"use client"

// Утилиты для работы с Modal компонентами
import { useState, useCallback, useEffect } from "react"

export interface ModalState {
  isOpen: boolean
  isAnimating: boolean
  isDragging: boolean
  isResizing: boolean
  position: { x: number; y: number }
  size: { width: number; height: number }
  dragOffset: { x: number; y: number }
}

export interface ModalActions {
  open: () => void
  close: () => void
  toggle: () => void
  startDrag: (e: React.MouseEvent) => void
  stopDrag: () => void
  startResize: (e: React.MouseEvent, direction: string) => void
  stopResize: () => void
  resetPosition: () => void
  resetSize: () => void
}

export interface ModalConfig {
  initialPosition?: { x: number; y: number }
  initialSize?: { width: number; height: number }
  minSize?: { width: number; height: number }
  maxSize?: { width: number; height: number }
  draggable?: boolean
  resizable?: boolean
  closeOnOverlayClick?: boolean
  closeOnEscape?: boolean
  preventScroll?: boolean
  animationDuration?: number
}

export type ModalSize = "xs" | "sm" | "md" | "lg" | "xl" | "full"

export const modalSizes = {
  xs: { width: 320, height: 200 },
  sm: { width: 480, height: 300 },
  md: { width: 640, height: 400 },
  lg: { width: 800, height: 600 },
  xl: { width: 1024, height: 768 },
  full: { width: "100vw", height: "100vh" },
} as const

/**
 * Хук для управления состоянием модального окна
 * @param config - конфигурация модального окна
 * @returns объект с состоянием и действиями
 */
export function useModalState(config: ModalConfig = {}): [ModalState, ModalActions, React.Dispatch<React.SetStateAction<ModalState>>] {
  const {
    initialPosition = { x: 0, y: 0 },
    initialSize = modalSizes.md,
    minSize = { width: 200, height: 100 },
    maxSize = { width: window.innerWidth - 100, height: window.innerHeight - 100 },
    draggable = true,
    resizable = true,
    closeOnOverlayClick = true,
    closeOnEscape = true,
    preventScroll = true,
    animationDuration = 200,
  } = config

  const [state, setState] = useState<ModalState>({
    isOpen: false,
    isAnimating: false,
    isDragging: false,
    isResizing: false,
    position: initialPosition,
    size: initialSize,
    dragOffset: { x: 0, y: 0 },
  })

  // Предотвращение скролла при открытом модальном окне
  useEffect(() => {
    if (state.isOpen && preventScroll) {
      document.body.style.overflow = "hidden"
      return () => {
        document.body.style.overflow = "unset"
      }
    }
  }, [state.isOpen, preventScroll])

  // Обработка клавиши Escape
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && state.isOpen && closeOnEscape) {
        setState(prev => ({ ...prev, isAnimating: true }))
        setTimeout(() => {
          setState(prev => ({ ...prev, isOpen: false, isAnimating: false }))
        }, animationDuration)
      }
    }

    if (state.isOpen) {
      document.addEventListener("keydown", handleEscape)
      return () => document.removeEventListener("keydown", handleEscape)
    }
  }, [state.isOpen, closeOnEscape, animationDuration])

  const actions: ModalActions = {
    open: () => {
      setState(prev => ({ ...prev, isOpen: true, isAnimating: true }))
      setTimeout(() => {
        setState(prev => ({ ...prev, isAnimating: false }))
      }, animationDuration)
    },

    close: () => {
      setState(prev => ({ ...prev, isAnimating: true }))
      setTimeout(() => {
        setState(prev => ({ ...prev, isOpen: false, isAnimating: false }))
      }, animationDuration)
    },

    toggle: () => {
      if (state.isOpen) {
        actions.close()
      } else {
        actions.open()
      }
    },

    startDrag: useCallback((e: React.MouseEvent) => {
      if (!draggable) return
      e.preventDefault()
      const rect = (e.currentTarget as HTMLElement).getBoundingClientRect()
      setState(prev => ({
        ...prev,
        isDragging: true,
        dragOffset: {
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        },
      }))
    }, [draggable]),

    stopDrag: useCallback(() => {
      setState(prev => ({ ...prev, isDragging: false }))
    }, []),

    startResize: useCallback((e: React.MouseEvent, direction: string) => {
      if (!resizable) return
      e.preventDefault()
      setState(prev => ({ ...prev, isResizing: true }))
    }, [resizable]),

    stopResize: useCallback(() => {
      setState(prev => ({ ...prev, isResizing: false }))
    }, []),

    resetPosition: useCallback(() => {
      setState(prev => ({ ...prev, position: initialPosition }))
    }, [initialPosition]),

    resetSize: useCallback(() => {
      setState(prev => ({ ...prev, size: initialSize }))
    }, [initialSize]),
  }

  return [state, actions, setState]
}

/**
 * Хук для обработки перетаскивания
 * @param state - состояние модального окна
 * @param actions - действия модального окна
 * @param setState - функция для обновления состояния
 * @returns обработчики событий мыши
 */
export function useDragHandlers(
  state: ModalState, 
  actions: ModalActions, 
  setState: React.Dispatch<React.SetStateAction<ModalState>>
) {
  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (state.isDragging) {
      const newX = e.clientX - state.dragOffset.x
      const newY = e.clientY - state.dragOffset.y
      
      // Ограничиваем позицию в пределах окна
      const maxX = window.innerWidth - (state.size.width || 640)
      const maxY = window.innerHeight - (state.size.height || 400)
      
      setState(prev => ({
        ...prev,
        position: {
          x: Math.max(0, Math.min(newX, maxX)),
          y: Math.max(0, Math.min(newY, maxY)),
        },
      }))
    }
  }, [state.isDragging, state.dragOffset, state.size, setState])

  const handleMouseUp = useCallback(() => {
    if (state.isDragging) {
      actions.stopDrag()
    }
    if (state.isResizing) {
      actions.stopResize()
    }
  }, [state.isDragging, state.isResizing, actions])

  useEffect(() => {
    if (state.isDragging || state.isResizing) {
      document.addEventListener("mousemove", handleMouseMove)
      document.addEventListener("mouseup", handleMouseUp)
      return () => {
        document.removeEventListener("mousemove", handleMouseMove)
        document.removeEventListener("mouseup", handleMouseUp)
      }
    }
  }, [state.isDragging, state.isResizing, handleMouseMove, handleMouseUp])

  return { handleMouseMove, handleMouseUp }
}

/**
 * Хук для обработки изменения размера
 * @param state - состояние модального окна
 * @param actions - действия модального окна
 * @param config - конфигурация
 * @param setState - функция для обновления состояния
 * @returns обработчики изменения размера
 */
export function useResizeHandlers(
  state: ModalState, 
  actions: ModalActions, 
  config: ModalConfig,
  setState: React.Dispatch<React.SetStateAction<ModalState>>
) {
  const { minSize = { width: 200, height: 100 }, maxSize } = config

  const handleResize = useCallback((e: MouseEvent, direction: string) => {
    if (!state.isResizing) return

    const deltaX = e.movementX
    const deltaY = e.movementY

    let newWidth = state.size.width
    let newHeight = state.size.height
    let newX = state.position.x
    let newY = state.position.y

    // Обработка изменения размера в зависимости от направления
    if (direction.includes("right")) {
      newWidth = Math.max(minSize.width, Math.min(newWidth + deltaX, maxSize?.width || window.innerWidth))
    }
    if (direction.includes("left")) {
      const widthChange = Math.min(deltaX, newWidth - minSize.width)
      newWidth -= widthChange
      newX += widthChange
    }
    if (direction.includes("bottom")) {
      newHeight = Math.max(minSize.height, Math.min(newHeight + deltaY, maxSize?.height || window.innerHeight))
    }
    if (direction.includes("top")) {
      const heightChange = Math.min(deltaY, newHeight - minSize.height)
      newHeight -= heightChange
      newY += heightChange
    }

    setState(prev => ({
      ...prev,
      size: { width: newWidth, height: newHeight },
      position: { x: newX, y: newY },
    }))
  }, [state.isResizing, state.size, state.position, minSize, maxSize, setState])

  return { handleResize }
}

/**
 * Получает размеры модального окна по размеру
 * @param size - размер модального окна
 * @returns размеры
 */
export function getModalSize(size: ModalSize) {
  return modalSizes[size]
}

/**
 * Центрирует модальное окно на экране
 * @param size - размеры модального окна
 * @returns позиция для центрирования
 */
export function centerModal(size: { width: number; height: number }) {
  return {
    x: (window.innerWidth - size.width) / 2,
    y: (window.innerHeight - size.height) / 2,
  }
} 