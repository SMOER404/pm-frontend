import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { ImageList } from '../components/ui/image-list'
import { Button } from '../components/ui/button'
import { Text } from '../components/ui/text'

const meta: Meta<typeof ImageList> = {
  title: 'Layout/ImageList',
  component: ImageList,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['grid', 'masonry', 'carousel', 'gallery'],
    },
    columns: {
      control: { type: 'object' },
    },
    gap: {
      control: { type: 'object' },
    },
    aspectRatio: {
      control: { type: 'select' },
      options: ['16:9', '4:3', '1:1', '3:2', 'auto'],
    },
    lazy: {
      control: { type: 'boolean' },
    },
    overlay: {
      control: { type: 'boolean' },
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

const sampleImages = [
  {
    src: "/image/poizonmarket-image.png",
    alt: "Poizon Market Image 1",
    title: "Poizon Market",
    description: "Beautiful Poizon Market image"
  },
  {
    src: "/image/poizonmarket-image.png", 
    alt: "Poizon Market Image 2",
    title: "Poizon Market",
    description: "Another view of Poizon Market"
  },
  {
    src: "/image/poizonmarket-image.png",
    alt: "Poizon Market Image 3", 
    title: "Poizon Market",
    description: "Third Poizon Market image"
  },
  {
    src: "/image/poizonmarket-image.png",
    alt: "Poizon Market Image 4", 
    title: "Poizon Market",
    description: "Fourth Poizon Market image"
  },
  {
    src: "/image/poizonmarket-image.png",
    alt: "Poizon Market Image 5",
    title: "Poizon Market", 
    description: "Fifth Poizon Market image"
  },
  {
    src: "/image/poizonmarket-image.png",
    alt: "Poizon Market Image 6",
    title: "Poizon Market",
    description: "Sixth Poizon Market image"
  }
]

export const Default: Story = {
  args: {
    images: sampleImages,
  },
}

export const Grid: Story = {
  args: {
    images: sampleImages,
    variant: 'grid',
    columns: { xs: 1, sm: 2, md: 3, lg: 4 },
    gap: 4,
    aspectRatio: '1:1',
  },
}

export const ResponsiveColumns: Story = {
  args: {
    images: sampleImages,
    variant: 'grid',
    columns: { xs: 1, sm: 2, md: 3, lg: 4 },
    gap: { xs: 2, sm: 4, md: 6 },
    aspectRatio: '16:9',
  },
}

export const Masonry: Story = {
  args: {
    images: [
      { src: "/image/poizonmarket-image.png", alt: "Poizon Market 1", title: "Poizon Market" },
      { src: "/image/poizonmarket-image.png", alt: "Poizon Market 2", title: "Poizon Market" },
      { src: "/image/poizonmarket-image.png", alt: "Poizon Market 3", title: "Poizon Market" },
      { src: "/image/poizonmarket-image.png", alt: "Poizon Market 4", title: "Poizon Market" },
      { src: "/image/poizonmarket-image.png", alt: "Poizon Market 5", title: "Poizon Market" },
      { src: "/image/poizonmarket-image.png", alt: "Poizon Market 6", title: "Poizon Market" },
    ],
    variant: 'masonry',
    gap: 4,
  },
}

export const Carousel: Story = {
  args: {
    images: sampleImages,
    variant: 'carousel',
    carouselItemWidth: '300px',
    gap: 4,
    aspectRatio: '16:9',
  },
}

export const Gallery: Story = {
  args: {
    images: sampleImages,
    variant: 'gallery',
    columns: { xs: 1, sm: 2, md: 3 },
    gap: 3,
    aspectRatio: '1:1',
  },
}

export const WithOverlay: Story = {
  args: {
    images: sampleImages,
    variant: 'gallery',
    columns: { xs: 1, sm: 2, md: 3 },
    gap: 3,
    overlay: true,
    aspectRatio: '1:1',
  },
}

export const WithCustomOverlay: Story = {
  args: {
    images: sampleImages,
    variant: 'gallery',
    columns: { xs: 1, sm: 2, md: 3 },
    gap: 3,
    overlay: true,
    overlayContent: <Button>View Details</Button>,
    aspectRatio: '1:1',
  },
}

export const WithClickHandler: Story = {
  args: {
    images: sampleImages,
    variant: 'gallery',
    columns: { xs: 1, sm: 2, md: 3 },
    gap: 3,
    overlay: true,
    onImageClick: (index, image) => {
      console.log('Clicked:', image.title, 'at index:', index)
      alert(`Clicked: ${image.title}`)
    },
    aspectRatio: '1:1',
  },
}

export const DifferentAspectRatios: Story = {
  render: () => (
    <div className="space-y-8">
      {[
        { ratio: '16:9', images: sampleImages.slice(0, 4) },
        { ratio: '4:3', images: sampleImages.slice(0, 4) },
        { ratio: '1:1', images: sampleImages.slice(0, 4) },
        { ratio: '3:2', images: sampleImages.slice(0, 4) },
      ].map(({ ratio, images }) => (
        <div key={ratio}>
          <Text className="font-medium mb-4">Aspect Ratio: {ratio}</Text>
          <ImageList
            images={images}
            variant="grid"
            columns={{ xs: 1, sm: 2, md: 4 }}
            gap={4}
            aspectRatio={ratio as any}
          />
        </div>
      ))}
    </div>
  ),
}

export const AllVariants: Story = {
  render: () => (
    <div className="space-y-8">
      {[
        { variant: 'grid', title: 'Grid Layout' },
        { variant: 'masonry', title: 'Masonry Layout' },
        { variant: 'carousel', title: 'Carousel Layout' },
        { variant: 'gallery', title: 'Gallery Layout' },
      ].map(({ variant, title }) => (
        <div key={variant}>
          <Text className="font-medium mb-4">{title}</Text>
          <ImageList
            images={sampleImages}
            variant={variant as any}
            columns={variant === 'grid' || variant === 'gallery' ? { xs: 1, sm: 2, md: 3 } : undefined}
            gap={4}
            aspectRatio="1:1"
            carouselItemWidth={variant === 'carousel' ? '300px' : undefined}
          />
        </div>
      ))}
    </div>
  ),
}

export const ResponsiveGap: Story = {
  args: {
    images: sampleImages,
    variant: 'grid',
    columns: { xs: 1, sm: 2, md: 3, lg: 4 },
    gap: { xs: 2, sm: 4, md: 6, lg: 8 },
    aspectRatio: '1:1',
  },
}

export const NotLazy: Story = {
  args: {
    images: sampleImages,
    variant: 'grid',
    columns: { xs: 1, sm: 2, md: 3 },
    gap: 4,
    lazy: false,
    aspectRatio: '1:1',
  },
}

export const LargeGrid: Story = {
  args: {
    images: Array.from({ length: 12 }, (_, i) => ({
      src: '/image/poizonmarket-image.png',
      alt: `Poizon Market Image ${i + 1}`,
      title: `Poizon Market ${i + 1}`,
      description: `Description for Poizon Market image ${i + 1}`
    })),
    variant: 'grid',
    columns: { xs: 1, sm: 2, md: 3, lg: 4 },
    gap: 4,
    aspectRatio: '1:1',
  },
}

export const InteractiveGallery: Story = {
  args: {
    images: sampleImages,
    variant: 'gallery',
    columns: { xs: 1, sm: 2, md: 3 },
    gap: 3,
    overlay: true,
    overlayContent: (
      <div className="text-center">
        <Button className="mb-2">View</Button>
        <Text className="text-xs">Click for details</Text>
      </div>
    ),
    onImageClick: (index, image) => {
      console.log('Gallery clicked:', image.title)
    },
    aspectRatio: '1:1',
  },
}
