import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { ResponsiveImage } from '../components/ui/responsive-image'
import { Box } from '../components/ui/box'
import { Text } from '../components/ui/text'

const meta: Meta<typeof ResponsiveImage> = {
  title: 'Layout/ResponsiveImage',
  component: ResponsiveImage,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    aspectRatio: {
      control: { type: 'select' },
      options: ['16:9', '4:3', '1:1', '3:2', '21:9', 'auto'],
    },
    objectFit: {
      control: { type: 'select' },
      options: ['cover', 'contain', 'fill', 'none', 'scale-down'],
    },
    lazy: {
      control: { type: 'boolean' },
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    src: '/image/poizonmarket-image.png',
    alt: 'Poizon Market Image',
  },
}

export const Square: Story = {
  args: {
    src: '/image/poizonmarket-image.png',
    alt: 'Square image',
    aspectRatio: '1:1',
  },
}

export const Wide: Story = {
  args: {
    src: '/image/poizonmarket-image.png',
    alt: 'Wide image',
    aspectRatio: '21:9',
  },
}

export const Portrait: Story = {
  args: {
    src: '/image/poizonmarket-image.png',
    alt: 'Portrait image',
    aspectRatio: '3:2',
  },
}

export const WithObjectFit: Story = {
  args: {
    src: '/image/poizonmarket-image.png',
    alt: 'Image with object-fit cover',
    aspectRatio: '1:1',
    objectFit: 'cover',
  },
}

export const ResponsiveSizes: Story = {
  args: {
    src: '/image/poizonmarket-image.png',
    alt: 'Image with responsive sizes',
    aspectRatio: '16:9',
    responsiveSizes: { xs: 'full', md: '1/2' },
  },
}

export const WithFallback: Story = {
  args: {
    src: 'https://invalid-url-that-will-fail.com/image.jpg',
    alt: 'Image with fallback',
    fallback: 'https://via.placeholder.com/400x300/84cc16/ffffff?text=Fallback+Image',
    aspectRatio: '4:3',
  },
}

export const WithPlaceholder: Story = {
  args: {
    src: '/image/poizonmarket-image.png',
    alt: 'Image with placeholder',
    placeholder: '/image/poizonmarket-image.png',
    aspectRatio: '16:9',
  },
}

export const NotLazy: Story = {
  args: {
    src: '/image/poizonmarket-image.png',
    alt: 'Non-lazy image',
    lazy: false,
    aspectRatio: '16:9',
  },
}

export const AllAspectRatios: Story = {
  render: () => (
    <div className="space-y-4">
      {[
        { ratio: '16:9', src: 'https://via.placeholder.com/800x450/3b82f6/ffffff?text=16:9' },
        { ratio: '4:3', src: 'https://via.placeholder.com/800x600/10b981/ffffff?text=4:3' },
        { ratio: '1:1', src: 'https://via.placeholder.com/600x600/f59e0b/ffffff?text=1:1' },
        { ratio: '3:2', src: 'https://via.placeholder.com/900x600/ef4444/ffffff?text=3:2' },
        { ratio: '21:9', src: 'https://via.placeholder.com/1050x450/8b5cf6/ffffff?text=21:9' },
      ].map(({ ratio, src }) => (
        <Box key={ratio} padding={4} backgroundColor="muted">
          <Text className="font-medium mb-2">Aspect Ratio: {ratio}</Text>
          <ResponsiveImage
            src={src}
            alt={`Image with ${ratio} aspect ratio`}
            aspectRatio={ratio as any}
            className="w-full max-w-md"
          />
        </Box>
      ))}
    </div>
  ),
}

export const AllObjectFits: Story = {
  render: () => (
    <div className="space-y-4">
      {[
        { fit: 'cover', src: 'https://via.placeholder.com/800x600/3b82f6/ffffff?text=Cover' },
        { fit: 'contain', src: 'https://via.placeholder.com/800x600/10b981/ffffff?text=Contain' },
        { fit: 'fill', src: 'https://via.placeholder.com/800x600/f59e0b/ffffff?text=Fill' },
        { fit: 'none', src: 'https://via.placeholder.com/800x600/ef4444/ffffff?text=None' },
        { fit: 'scale-down', src: 'https://via.placeholder.com/800x600/8b5cf6/ffffff?text=Scale-Down' },
      ].map(({ fit, src }) => (
        <Box key={fit} padding={4} backgroundColor="muted">
          <Text className="font-medium mb-2">Object Fit: {fit}</Text>
          <div className="w-64 h-32 border border-border">
            <ResponsiveImage
              src={src}
              alt={`Image with ${fit} object-fit`}
              objectFit={fit as any}
              className="w-full h-full"
            />
          </div>
        </Box>
      ))}
    </div>
  ),
}

export const ErrorHandling: Story = {
  args: {
    src: 'https://invalid-url-that-will-fail.com/image.jpg',
    alt: 'Image that will fail to load',
    aspectRatio: '16:9',
  },
}

export const WithCallbacks: Story = {
  args: {
    src: '/image/poizonmarket-image.png',
    alt: 'Image with callbacks',
    aspectRatio: '16:9',
    onLoad: () => console.log('Image loaded successfully'),
    onError: () => console.log('Image failed to load'),
  },
}

export const ResponsiveGrid: Story = {
  render: () => (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {Array.from({ length: 6 }, (_, i) => (
        <Box key={i} padding={2} backgroundColor="muted">
          <ResponsiveImage
            src={`https://via.placeholder.com/400x300/${['3b82f6', '10b981', 'f59e0b', 'ef4444', '8b5cf6', '06b6d4'][i]}/ffffff?text=Grid+${i + 1}`}
            alt={`Grid image ${i + 1}`}
            aspectRatio="4:3"
            objectFit="cover"
            className="w-full"
          />
        </Box>
      ))}
    </div>
  ),
}
