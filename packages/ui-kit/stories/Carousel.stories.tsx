import type { Meta, StoryObj } from '@storybook/react'
import { Carousel, CarouselSlide } from '../components/ui/carousel'
import { Card, CardContent } from '../components/ui/card'

const meta: Meta<typeof Carousel> = {
  title: 'Data Display/Carousel',
  component: Carousel,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    autoPlay: {
      control: { type: 'boolean' },
    },
    interval: {
      control: { type: 'number' },
    },
    showControls: {
      control: { type: 'boolean' },
    },
    showIndicators: {
      control: { type: 'boolean' },
    },
    infinite: {
      control: { type: 'boolean' },
    },
    variant: {
      control: { type: 'select' },
      options: ['default', 'card', 'fullscreen'],
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'default', 'lg', 'xl'],
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

const sampleSlides = [
  {
    id: 1,
    title: "Slide 1",
    content: "This is the first slide content",
    color: "bg-blue-500",
  },
  {
    id: 2,
    title: "Slide 2", 
    content: "This is the second slide content",
    color: "bg-green-500",
  },
  {
    id: 3,
    title: "Slide 3",
    content: "This is the third slide content", 
    color: "bg-purple-500",
  },
  {
    id: 4,
    title: "Slide 4",
    content: "This is the fourth slide content",
    color: "bg-orange-500",
  },
]

export const Default: Story = {
  args: {
    children: sampleSlides.map((slide, index) => (
      <CarouselSlide key={slide.id} index={index} active={index === 0}>
        <div className={`flex h-full w-full items-center justify-center ${slide.color} text-white`}>
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-2">{slide.title}</h3>
            <p className="text-lg">{slide.content}</p>
          </div>
        </div>
      </CarouselSlide>
    )),
  },
}

export const AutoPlay: Story = {
  args: {
    autoPlay: true,
    interval: 3000,
    children: sampleSlides.map((slide, index) => (
      <CarouselSlide key={slide.id} index={index} active={index === 0}>
        <div className={`flex h-full w-full items-center justify-center ${slide.color} text-white`}>
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-2">{slide.title}</h3>
            <p className="text-lg">{slide.content}</p>
          </div>
        </div>
      </CarouselSlide>
    )),
  },
}

export const CardVariant: Story = {
  args: {
    variant: 'card',
    children: sampleSlides.map((slide, index) => (
      <CarouselSlide key={slide.id} index={index} active={index === 0}>
        <Card className="h-full">
          <CardContent className="flex h-full items-center justify-center p-6">
            <div className="text-center">
              <h3 className="text-xl font-bold mb-2">{slide.title}</h3>
              <p className="text-muted-foreground">{slide.content}</p>
            </div>
          </CardContent>
        </Card>
      </CarouselSlide>
    )),
  },
}

export const Small: Story = {
  args: {
    size: 'sm',
    children: sampleSlides.map((slide, index) => (
      <CarouselSlide key={slide.id} index={index} active={index === 0}>
        <div className={`flex h-full w-full items-center justify-center ${slide.color} text-white`}>
          <div className="text-center">
            <h3 className="text-lg font-bold mb-1">{slide.title}</h3>
            <p className="text-sm">{slide.content}</p>
          </div>
        </div>
      </CarouselSlide>
    )),
  },
}

export const Large: Story = {
  args: {
    size: 'lg',
    children: sampleSlides.map((slide, index) => (
      <CarouselSlide key={slide.id} index={index} active={index === 0}>
        <div className={`flex h-full w-full items-center justify-center ${slide.color} text-white`}>
          <div className="text-center">
            <h3 className="text-3xl font-bold mb-4">{slide.title}</h3>
            <p className="text-xl">{slide.content}</p>
          </div>
        </div>
      </CarouselSlide>
    )),
  },
}

export const NoControls: Story = {
  args: {
    showControls: false,
    children: sampleSlides.map((slide, index) => (
      <CarouselSlide key={slide.id} index={index} active={index === 0}>
        <div className={`flex h-full w-full items-center justify-center ${slide.color} text-white`}>
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-2">{slide.title}</h3>
            <p className="text-lg">{slide.content}</p>
          </div>
        </div>
      </CarouselSlide>
    )),
  },
}

export const NoIndicators: Story = {
  args: {
    showIndicators: false,
    children: sampleSlides.map((slide, index) => (
      <CarouselSlide key={slide.id} index={index} active={index === 0}>
        <div className={`flex h-full w-full items-center justify-center ${slide.color} text-white`}>
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-2">{slide.title}</h3>
            <p className="text-lg">{slide.content}</p>
          </div>
        </div>
      </CarouselSlide>
    )),
  },
}

export const Finite: Story = {
  args: {
    infinite: false,
    children: sampleSlides.map((slide, index) => (
      <CarouselSlide key={slide.id} index={index} active={index === 0}>
        <div className={`flex h-full w-full items-center justify-center ${slide.color} text-white`}>
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-2">{slide.title}</h3>
            <p className="text-lg">{slide.content}</p>
          </div>
        </div>
      </CarouselSlide>
    )),
  },
}

export const ImageCarousel: Story = {
  args: {
    children: [
      <CarouselSlide key="1" index={0} active={true}>
        <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-blue-400 to-purple-500">
          <div className="text-center text-white">
            <h3 className="text-2xl font-bold mb-2">Beautiful Landscape</h3>
            <p className="text-lg">Mountain view at sunset</p>
          </div>
        </div>
      </CarouselSlide>,
      <CarouselSlide key="2" index={1} active={false}>
        <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-green-400 to-blue-500">
          <div className="text-center text-white">
            <h3 className="text-2xl font-bold mb-2">Ocean Waves</h3>
            <p className="text-lg">Peaceful beach scene</p>
          </div>
        </div>
      </CarouselSlide>,
      <CarouselSlide key="3" index={2} active={false}>
        <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-orange-400 to-red-500">
          <div className="text-center text-white">
            <h3 className="text-2xl font-bold mb-2">City Lights</h3>
            <p className="text-lg">Urban nightscape</p>
          </div>
        </div>
      </CarouselSlide>,
    ],
  },
}

export const ProductShowcase: Story = {
  args: {
    variant: 'card',
    children: [
      <CarouselSlide key="1" index={0} active={true}>
        <Card className="h-full">
          <CardContent className="flex h-full flex-col items-center justify-center p-6">
            <div className="mb-4 h-32 w-32 rounded-full bg-blue-100 flex items-center justify-center">
              <span className="text-4xl">📱</span>
            </div>
            <h3 className="text-xl font-bold mb-2">Smartphone</h3>
            <p className="text-muted-foreground text-center">Latest model with advanced features</p>
            <p className="text-2xl font-bold text-blue-600 mt-2">$999</p>
          </CardContent>
        </Card>
      </CarouselSlide>,
      <CarouselSlide key="2" index={1} active={false}>
        <Card className="h-full">
          <CardContent className="flex h-full flex-col items-center justify-center p-6">
            <div className="mb-4 h-32 w-32 rounded-full bg-green-100 flex items-center justify-center">
              <span className="text-4xl">💻</span>
            </div>
            <h3 className="text-xl font-bold mb-2">Laptop</h3>
            <p className="text-muted-foreground text-center">High-performance computing</p>
            <p className="text-2xl font-bold text-green-600 mt-2">$1,299</p>
          </CardContent>
        </Card>
      </CarouselSlide>,
      <CarouselSlide key="3" index={2} active={false}>
        <Card className="h-full">
          <CardContent className="flex h-full flex-col items-center justify-center p-6">
            <div className="mb-4 h-32 w-32 rounded-full bg-purple-100 flex items-center justify-center">
              <span className="text-4xl">🎧</span>
            </div>
            <h3 className="text-xl font-bold mb-2">Headphones</h3>
            <p className="text-muted-foreground text-center">Premium audio experience</p>
            <p className="text-2xl font-bold text-purple-600 mt-2">$299</p>
          </CardContent>
        </Card>
      </CarouselSlide>,
    ],
  },
}
