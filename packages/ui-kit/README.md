# UI Kit

A modern React UI component library built with TypeScript, Tailwind CSS, and shadcn/ui.

## Components

### BevelShape

A reusable SVG component that creates beveled shapes with customizable sizes and colors. This is the core branding component used across the UI kit.

#### Features

- **Bevel Sizes**: `xs`, `sm`, `md`, `lg`, `xl`
- **Customizable**: Fill, stroke, stroke width
- **Responsive**: Scales with container
- **Accessible**: Proper SVG attributes

#### Usage

```tsx
import { BevelShape } from '@/components/ui/bevel-shape'

// Basic usage
<BevelShape fill="#AFEB0F" stroke="#AFEB0F" />

// With different bevel sizes
<BevelShape bevelSize="sm" fill="#AFEB0F" stroke="#AFEB0F" />
<BevelShape bevelSize="lg" fill="#292D30" stroke="#292D30" />

// Outlined style
<BevelShape fill="transparent" stroke="#AFEB0F" strokeWidth={2} />

// With custom styling
<BevelShape 
  fill="#AFEB0F" 
  stroke="#AFEB0F" 
  pathClassName="hover:fill-[#292D30] transition-colors"
/>
```

### Button

A versatile button component with multiple variants, sizes, and states.

#### Features

- **Variants**: `default`, `secondary`, `outlined`, `ghost`
- **Sizes**: `sm`, `default`, `lg`, `xl`, `icon`, `icon-sm`, `icon-lg`
- **States**: Loading, disabled, hover, focus
- **Icons**: Support for left/right icons and start/end icons
- **Layout**: Full width support
- **Accessibility**: Full ARIA support and keyboard navigation
- **Beveled Design**: Uses BevelShape component for consistent branding

#### Usage

```tsx
import { Button } from '@/components/ui/button'

// Basic usage
<Button>Click me</Button>

// With variants
<Button variant="default">Default</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="outlined">Outlined</Button>
<Button variant="ghost">Ghost</Button>

// With sizes
<Button size="sm">Small</Button>
<Button size="default">Default</Button>
<Button size="lg">Large</Button>
<Button size="xl">Extra Large</Button>

// With icons (legacy)
<Button leftIcon={<HeartIcon />}>Like</Button>
<Button rightIcon={<ArrowRightIcon />}>Continue</Button>

// With start/end icons (recommended)
<Button startIcon={<DownloadIcon />}>Download</Button>
<Button endIcon={<UploadIcon />}>Upload</Button>
<Button startIcon={<HeartIcon />} endIcon={<ArrowRightIcon />}>
  Like & Continue
</Button>

// Full width
<Button fullWidth>Full Width Button</Button>

// Loading state
<Button loading>Loading...</Button>
<Button loading loadingText="Saving...">Save</Button>

// Disabled state
<Button disabled>Disabled</Button>
```

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'default' \| 'secondary' \| 'outlined' \| 'ghost'` | `'default'` | Button variant |
| `size` | `'sm' \| 'default' \| 'lg' \| 'xl' \| 'icon' \| 'icon-sm' \| 'icon-lg'` | `'default'` | Button size |
| `fullWidth` | `boolean` | `false` | If true, button takes full width of container |
| `startIcon` | `ReactNode` | - | Icon placed before the children |
| `endIcon` | `ReactNode` | - | Icon placed after the children |
| `leftIcon` | `ReactNode` | - | Legacy prop for left icon (use `startIcon` instead) |
| `rightIcon` | `ReactNode` | - | Legacy prop for right icon (use `endIcon` instead) |
| `loading` | `boolean` | `false` | Shows loading spinner |
| `loadingText` | `string` | - | Text to show when loading |
| `disabled` | `boolean` | `false` | Disables the button |
| `asChild` | `boolean` | `false` | Renders as child component |

#### Design System

The button component follows the project's design system:

- **Brand Color**: `#AFEB0F` (lime green)
- **Primary Color**: `#292D30` (dark gray)
- **Typography**: Azorath font family
- **Bevel Effect**: Uses BevelShape component for consistent branding
- **Transitions**: 200ms ease-in-out for all interactions

#### Accessibility

- Full keyboard navigation support (Enter, Space)
- ARIA attributes for screen readers
- Focus indicators for keyboard users
- Proper semantic HTML structure

## Development

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
npm install
```

### Running Storybook

```bash
npm run storybook
```

### Building

```bash
npm run build
```

### Testing

```bash
npm test
```

## Contributing

1. Create a new branch for your feature
2. Make your changes
3. Add tests if applicable
4. Update documentation
5. Submit a pull request

## License

MIT
