// Design Token System для UI Kit
export const tokens = {
  // Цвета
  colors: {
    brand: {
      DEFAULT: '#AFEB0F',
      light: '#C4F03A',
      dark: '#8FBC0B',
    },
    primary: {
      DEFAULT: '#292D30',
      50: '#F8F9FA',
      100: '#F1F3F4',
      200: '#E8EAED',
      300: '#DADCE0',
      400: '#BDC1C6',
      500: '#9AA0A6',
      600: '#80868B',
      700: '#5F6368',
      800: '#3C4043',
      900: '#202124',
    },
    secondary: {
      DEFAULT: '#5F6368',
      light: '#80868B',
      dark: '#3C4043',
    },
    success: {
      DEFAULT: '#10B981',
      light: '#34D399',
      dark: '#047857',
    },
    warning: {
      DEFAULT: '#F59E0B',
      light: '#FBBF24',
      dark: '#B45309',
    },
    danger: {
      DEFAULT: '#EF4444',
      light: '#FCA5A5',
      dark: '#B91C1C',
    },
    blue: {
      DEFAULT: '#3B82F6',
      light: '#93C5FD',
      dark: '#1D4ED8',
    },
    neutral: {
      DEFAULT: '#FFFFFF',
      white: '#FFFFFF',
      black: '#000000',
      transparent: 'transparent',
    },
  },

  // Размеры скосов (chamfer)
  chamfer: {
    xs: '4px',    // 25% от 16px
    sm: '8px',    // 25% от 32px
    md: '12px',   // 25% от 48px
    lg: '16px',   // 25% от 64px
    xl: '20px',   // 25% от 80px
  },

  // Размеры компонентов
  sizes: {
    xs: {
      height: '24px',
      padding: '4px 8px',
      fontSize: '12px',
      chamfer: '6px',
    },
    sm: {
      height: '32px',
      padding: '6px 12px',
      fontSize: '14px',
      chamfer: '8px',
    },
    md: {
      height: '40px',
      padding: '8px 16px',
      fontSize: '14px',
      chamfer: '10px',
    },
    lg: {
      height: '48px',
      padding: '12px 20px',
      fontSize: '16px',
      chamfer: '12px',
    },
    xl: {
      height: '56px',
      padding: '16px 24px',
      fontSize: '18px',
      chamfer: '14px',
    },
  },

  // Типографика
  typography: {
    fontFamily: {
      sans: ['Azorath', 'sans-serif'],
      heading: ['DrukTextCyr', 'sans-serif'],
      mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'Liberation Mono', 'Courier New', 'monospace'],
    },
    fontSize: {
      xs: ['12px', { lineHeight: '16px' }],
      sm: ['14px', { lineHeight: '20px' }],
      base: ['16px', { lineHeight: '24px' }],
      lg: ['18px', { lineHeight: '28px' }],
      xl: ['20px', { lineHeight: '28px' }],
      '2xl': ['24px', { lineHeight: '32px' }],
      '3xl': ['30px', { lineHeight: '36px' }],
      '4xl': ['36px', { lineHeight: '40px' }],
      '5xl': ['48px', { lineHeight: '48px' }],
      '6xl': ['60px', { lineHeight: '60px' }],
    },
    fontWeight: {
      light: '300',
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
      extrabold: '800',
      black: '900',
    },
  },

  // Spacing
  spacing: {
    0: '0px',
    1: '4px',
    2: '8px',
    3: '12px',
    4: '16px',
    5: '20px',
    6: '24px',
    8: '32px',
    10: '40px',
    12: '48px',
    16: '64px',
    20: '80px',
    24: '96px',
    32: '128px',
    40: '160px',
    48: '192px',
    56: '224px',
    64: '256px',
  },

  // Border radius
  borderRadius: {
    none: '0px',
    sm: '2px',
    base: '4px',
    md: '6px',
    lg: '8px',
    xl: '12px',
    '2xl': '16px',
    '3xl': '24px',
    full: '9999px',
  },

  // Shadows
  shadows: {
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    base: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
    '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
    inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
    none: 'none',
  },

  // Transitions
  transitions: {
    fast: '150ms ease-in-out',
    base: '200ms ease-in-out',
    slow: '300ms ease-in-out',
    slower: '500ms ease-in-out',
  },

  // Z-index
  zIndex: {
    hide: -1,
    auto: 'auto',
    base: 0,
    docked: 10,
    dropdown: 1000,
    sticky: 1100,
    banner: 1200,
    overlay: 1300,
    modal: 1400,
    popover: 1500,
    skipLink: 1600,
    toast: 1700,
    tooltip: 1800,
  },
} as const

// Типы для TypeScript
export type ColorToken = keyof typeof tokens.colors
export type SizeToken = keyof typeof tokens.sizes
export type ChamferToken = keyof typeof tokens.chamfer
export type SpacingToken = keyof typeof tokens.spacing
export type BorderRadiusToken = keyof typeof tokens.borderRadius
export type ShadowToken = keyof typeof tokens.shadows
export type TransitionToken = keyof typeof tokens.transitions
export type ZIndexToken = keyof typeof tokens.zIndex

// Утилиты для работы с токенами
export const getToken = {
  color: (token: ColorToken, variant?: string) => {
    const color = tokens.colors[token]
    if (typeof color === 'string') return color
    if (variant && variant in color) return color[variant as keyof typeof color]
    return 'DEFAULT' in color ? color.DEFAULT : color
  },
  
  size: (token: SizeToken) => tokens.sizes[token],
  
  chamfer: (token: ChamferToken) => tokens.chamfer[token],
  
  spacing: (token: SpacingToken) => tokens.spacing[token],
  
  borderRadius: (token: BorderRadiusToken) => tokens.borderRadius[token],
  
  shadow: (token: ShadowToken) => tokens.shadows[token],
  
  transition: (token: TransitionToken) => tokens.transitions[token],
  
  zIndex: (token: ZIndexToken) => tokens.zIndex[token],
} 