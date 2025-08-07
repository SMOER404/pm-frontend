/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    fontFamily: {
      sans: ['Azorath', 'sans-serif'],
      heading: ['DrukTextCyr', 'sans-serif'],
    },
    screens: {
      'xs': '375px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: '#292D30', // Основной цвет
          light: '#4D5256',
          dark: '#1A1D20',
        },
        brand: {
          DEFAULT: '#AFEB0F', // Брендовый акцентный цвет
          light: '#C9F45D',
          dark: '#8FBC0B',
        },
        secondary: {
          DEFAULT: '#6B7280',
          light: '#9CA3AF',
          dark: '#4B5563',
        },
        accent: {
          DEFAULT: '#F59E0B',
          light: '#FCD34D',
          dark: '#B45309',
        },
        danger: {
          DEFAULT: '#EF4444',
          light: '#FCA5A5',
          dark: '#B91C1C',
        },
        success: {
          DEFAULT: '#10B981',
          light: '#6EE7B7',
          dark: '#047857',
        },
        gray: {
          lightest: '#F9FAFB',
          lighter: '#F3F4F6',
          light: '#E5E7EB',
          DEFAULT: '#D1D5DB',
          dark: '#9CA3AF',
          darker: '#6B7280',
          darkest: '#374151',
        },
        background: '#FFFFFF',
        surface: '#F9FAFB',
        onPrimary: '#FFFFFF',
        onBrand: '#292D30',
        onBackground: '#292D30',
        onSurface: '#292D30',
      },
      fontSize: {
        // Шкала типографики
        'xs': ['0.75rem', { lineHeight: '1.2' }],      // 12px
        'sm': ['0.875rem', { lineHeight: '1.25' }],     // 14px
        'base': ['1rem', { lineHeight: '1.5' }],        // 16px (основной текст)
        'lg': ['1.125rem', { lineHeight: '1.5' }],      // 18px
        'xl': ['1.25rem', { lineHeight: '1.4' }],       // 20px
        '2xl': ['1.5rem', { lineHeight: '1.33' }],      // 24px
        '3xl': ['1.875rem', { lineHeight: '1.2' }],     // 30px
        '4xl': ['2.25rem', { lineHeight: '1.1' }],      // 36px
        '5xl': ['3rem', { lineHeight: '1' }],           // 48px
        '6xl': ['3.75rem', { lineHeight: '1' }],        // 60px
        '7xl': ['4.5rem', { lineHeight: '1' }],         // 72px
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.primary'),
            h1: {
              fontFamily: theme('fontFamily.heading').join(', '),
              fontSize: theme('fontSize.4xl'),
              fontWeight: '700',
              color: theme('colors.primary'),
              marginBottom: theme('spacing.4'),
              marginTop: 0,
            },
            h2: {
              fontFamily: theme('fontFamily.heading').join(', '),
              fontSize: theme('fontSize.3xl'),
              fontWeight: '400',
              color: theme('colors.primary'),
              marginBottom: theme('spacing.3'),
              marginTop: 0,
            },
            h3: {
              fontFamily: theme('fontFamily.heading').join(', '),
              fontSize: theme('fontSize.2xl'),
              fontWeight: '400',
              color: theme('colors.primary'),
              marginBottom: theme('spacing.2'),
              marginTop: 0,
            },
            h4: {
              fontFamily: theme('fontFamily.heading').join(', '),
              fontSize: theme('fontSize.xl'),
              fontWeight: '400',
              color: theme('colors.primary'),
              marginBottom: theme('spacing.2'),
              marginTop: 0,
            },
            p: {
              fontFamily: theme('fontFamily.sans').join(', '),
              fontSize: theme('fontSize.base'),
              lineHeight: theme('lineHeight.normal'),
              color: theme('colors.primary'),
              marginBottom: theme('spacing.4'),
              marginTop: 0,
            },
            a: {
              color: theme('colors.brand'),
              '&:hover': {
                color: theme('colors.brand'),
                textDecoration: 'underline',
              },
            },
            strong: {
              color: theme('colors.primary'),
              fontWeight: '700',
            },
          },
        },
      }),
      spacing: {
        '7.5': '1.875rem',
        '15': '3.75rem',
        '18': '4.5rem',
        '22': '5.5rem',
        '30': '7.5rem',
        '34': '8.5rem',
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      boxShadow: {
        'card': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'card-hover': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        'navbar': '0 4px 6px -1px rgba(41, 45, 48, 0.1), 0 2px 4px -1px rgba(41, 45, 48, 0.06)',
        'dropdown': '0 10px 15px -3px rgba(41, 45, 48, 0.1), 0 4px 6px -2px rgba(41, 45, 48, 0.05)',
      },
      zIndex: {
        '60': '60',
        '70': '70',
        '80': '80',
        '90': '90',
        '100': '100',
      },
      transitionDuration: {
        '250': '250ms',
        '400': '400ms',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography')({
      className: 'prose', // это значение по умолчанию
      rtl: false, // для RTL-языков
      modifiers: [], // дополнительные модификаторы
    }),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/line-clamp'),
    function({ addComponents }) {
      addComponents({
        '.container': {
          maxWidth: '100%',
          '@screen xs': {
            maxWidth: '375px',
          },
          '@screen sm': {
            maxWidth: '640px',
          },
          '@screen md': {
            maxWidth: '768px',
          },
          '@screen lg': {
            maxWidth: '1024px',
          },
          '@screen xl': {
            maxWidth: '1280px',
          },
          '@screen 2xl': {
            maxWidth: '1536px',
          },
        },
        '.btn': {
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '0.5rem 1rem',
          borderRadius: '0.375rem',
          fontWeight: '500',
          transition: 'all 0.2s ease-in-out',
          '&:focus': {
            outline: 'none',
            ring: '2px',
            ringOffset: '2px',
            ringColor: 'brand.DEFAULT',
          },
        },
        '.btn-primary': {
          backgroundColor: 'primary.DEFAULT',
          color: 'onPrimary',
          '&:hover': {
            backgroundColor: 'red',
          },
        },
        '.btn-brand': {
          backgroundColor: 'brand.DEFAULT',
          color: 'onBrand',
          '&:hover': {
            backgroundColor: 'brand.dark',
          },
        },
        '.btn-outline-brand': {
          backgroundColor: 'transparent',
          border: '1px solid',
          borderColor: 'brand.DEFAULT',
          color: 'brand.DEFAULT',
          '&:hover': {
            backgroundColor: 'brand.DEFAULT',
            color: 'onBrand',
          },
        },
        '.product-card': {
          backgroundColor: 'background',
          overflow: 'hidden',
          'img': {
            transition: 'all 0.6s ease 0s',
            '&:hover': {
              transform: 'scale3d(1.05, 1.05, 1.05)'
            }
          },
        },
        '.navbar': {
          backgroundColor: 'background',
          boxShadow: 'navbar',
          position: 'sticky',
          top: '0',
          zIndex: '50',
        },
        '.dropdown': {
          position: 'absolute',
          backgroundColor: 'background',
          borderRadius: '0.375rem',
          boxShadow: 'dropdown',
          zIndex: '50',
          minWidth: '12rem',
        },
      });
    },
  ],
};