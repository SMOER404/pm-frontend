import React, { useState, useCallback } from 'react'

export interface ComponentStates {
  isFocused: boolean
  isHovered: boolean
  isPressed: boolean
  isDisabled: boolean
}

export interface StateHandlers {
  onFocus: () => void
  onBlur: () => void
  onMouseEnter: () => void
  onMouseLeave: () => void
  onMouseDown: () => void
  onMouseUp: () => void
  onKeyDown: (event: React.KeyboardEvent) => void
  onKeyUp: (event: React.KeyboardEvent) => void
}

export interface WithStatesProps extends ComponentStates, StateHandlers {
  disabled?: boolean
}

/**
 * HOC для добавления стандартных состояний к компонентам
 * @param Component - компонент для обертывания
 * @returns компонент с добавленными состояниями
 */
export function withStates<P extends object>(
  Component: React.ComponentType<P & WithStatesProps>
) {
  return React.forwardRef<any, P & { disabled?: boolean }>((props, ref) => {
    const { disabled = false, ...restProps } = props
    
    const [isFocused, setIsFocused] = useState(false)
    const [isHovered, setIsHovered] = useState(false)
    const [isPressed, setIsPressed] = useState(false)

    const handleFocus = useCallback(() => {
      if (!disabled) setIsFocused(true)
    }, [disabled])

    const handleBlur = useCallback(() => {
      setIsFocused(false)
    }, [])

    const handleMouseEnter = useCallback(() => {
      if (!disabled) setIsHovered(true)
    }, [disabled])

    const handleMouseLeave = useCallback(() => {
      setIsHovered(false)
      setIsPressed(false)
    }, [])

    const handleMouseDown = useCallback(() => {
      if (!disabled) setIsPressed(true)
    }, [disabled])

    const handleMouseUp = useCallback(() => {
      setIsPressed(false)
    }, [])

    const handleKeyDown = useCallback((event: React.KeyboardEvent) => {
      if (disabled) return
      
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault()
        setIsPressed(true)
      }
    }, [disabled])

    const handleKeyUp = useCallback((event: React.KeyboardEvent) => {
      if (disabled) return
      
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault()
        setIsPressed(false)
      }
    }, [disabled])

    const stateProps: WithStatesProps = {
      isFocused,
      isHovered,
      isPressed,
      isDisabled: disabled,
      onFocus: handleFocus,
      onBlur: handleBlur,
      onMouseEnter: handleMouseEnter,
      onMouseLeave: handleMouseLeave,
      onMouseDown: handleMouseDown,
      onMouseUp: handleMouseUp,
      onKeyDown: handleKeyDown,
      onKeyUp: handleKeyUp,
    }

    return (
      <Component
        {...(restProps as P)}
        {...stateProps}
        disabled={disabled}
      />
    )
  })
}

/**
 * Хук для управления состояниями компонента
 * @param disabled - флаг отключения
 * @returns объект с состояниями и обработчиками
 */
export function useComponentStates(disabled: boolean = false) {
  const [isFocused, setIsFocused] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const [isPressed, setIsPressed] = useState(false)

  const handleFocus = useCallback(() => {
    if (!disabled) setIsFocused(true)
  }, [disabled])

  const handleBlur = useCallback(() => {
    setIsFocused(false)
  }, [])

  const handleMouseEnter = useCallback(() => {
    if (!disabled) setIsHovered(true)
  }, [disabled])

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false)
    setIsPressed(false)
  }, [])

  const handleMouseDown = useCallback(() => {
    if (!disabled) setIsPressed(true)
  }, [disabled])

  const handleMouseUp = useCallback(() => {
    setIsPressed(false)
  }, [])

  const handleKeyDown = useCallback((event: React.KeyboardEvent) => {
    if (disabled) return
    
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault()
      setIsPressed(true)
    }
  }, [disabled])

  const handleKeyUp = useCallback((event: React.KeyboardEvent) => {
    if (disabled) return
    
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault()
      setIsPressed(false)
    }
  }, [disabled])

  return {
    states: {
      isFocused,
      isHovered,
      isPressed,
      isDisabled: disabled,
    },
    handlers: {
      onFocus: handleFocus,
      onBlur: handleBlur,
      onMouseEnter: handleMouseEnter,
      onMouseLeave: handleMouseLeave,
      onMouseDown: handleMouseDown,
      onMouseUp: handleMouseUp,
      onKeyDown: handleKeyDown,
      onKeyUp: handleKeyUp,
    },
  }
} 