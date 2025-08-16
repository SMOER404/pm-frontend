import type { Meta, StoryObj } from '@storybook/react'
import { Rating } from '../components/ui/rating'
import { Star, Heart, ThumbsUp, Circle } from 'lucide-react'

const meta: Meta<typeof Rating> = {
  title: 'Data Display/Rating',
  component: Rating,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'stars', 'hearts', 'thumbs'],
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'default', 'lg', 'xl'],
    },
    value: {
      control: { type: 'number', min: 0, max: 5, step: 0.5 },
    },
    maxValue: {
      control: { type: 'number', min: 1, max: 10 },
    },
    readOnly: {
      control: { type: 'boolean' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
    showValue: {
      control: { type: 'boolean' },
    },
    allowHalf: {
      control: { type: 'boolean' },
    },
    showLabel: {
      control: { type: 'boolean' },
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    value: 3,
  },
}

export const Stars: Story = {
  args: {
    variant: 'stars',
    value: 4,
  },
}

export const Hearts: Story = {
  args: {
    variant: 'hearts',
    value: 3,
  },
}

export const Thumbs: Story = {
  args: {
    variant: 'thumbs',
    value: 2,
    maxValue: 3,
  },
}

export const Small: Story = {
  args: {
    size: 'sm',
    value: 3,
  },
}

export const Large: Story = {
  args: {
    size: 'lg',
    value: 3,
  },
}

export const ExtraLarge: Story = {
  args: {
    size: 'xl',
    value: 3,
  },
}

export const WithValue: Story = {
  args: {
    value: 4,
    showValue: true,
  },
}

export const WithLabel: Story = {
  args: {
    value: 4,
    label: "Product Rating",
    showLabel: true,
  },
}

export const ReadOnly: Story = {
  args: {
    value: 4,
    readOnly: true,
  },
}

export const Disabled: Story = {
  args: {
    value: 3,
    disabled: true,
  },
}

export const HalfRating: Story = {
  args: {
    value: 3.5,
    allowHalf: true,
  },
}

export const CustomMaxValue: Story = {
  args: {
    value: 7,
    maxValue: 10,
    showValue: true,
  },
}

export const Interactive: Story = {
  render: () => {
    const [value, setValue] = React.useState(0)
    
    return (
      <div className="space-y-4">
        <Rating
          value={value}
          onValueChange={setValue}
          showValue={true}
          label="Rate this product"
          showLabel={true}
        />
        <p className="text-sm text-muted-foreground">
          Current rating: {value}
        </p>
      </div>
    )
  },
}

export const HalfRatingInteractive: Story = {
  render: () => {
    const [value, setValue] = React.useState(0)
    
    return (
      <div className="space-y-4">
        <Rating
          value={value}
          onValueChange={setValue}
          allowHalf={true}
          showValue={true}
          label="Rate with half stars"
          showLabel={true}
        />
        <p className="text-sm text-muted-foreground">
          Current rating: {value}
        </p>
      </div>
    )
  },
}

export const CustomIcons: Story = {
  args: {
    value: 3,
    icon: <Circle className="h-full w-full" />,
    showValue: true,
  },
}

export const DifferentVariants: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="flex items-center gap-4">
        <span className="text-sm font-medium w-16">Stars:</span>
        <Rating variant="stars" value={4} />
      </div>
      <div className="flex items-center gap-4">
        <span className="text-sm font-medium w-16">Hearts:</span>
        <Rating variant="hearts" value={3} />
      </div>
      <div className="flex items-center gap-4">
        <span className="text-sm font-medium w-16">Thumbs:</span>
        <Rating variant="thumbs" value={2} maxValue={3} />
      </div>
    </div>
  ),
}

export const AllSizes: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="flex items-center gap-4">
        <span className="text-sm font-medium w-16">Small:</span>
        <Rating size="sm" value={3} />
      </div>
      <div className="flex items-center gap-4">
        <span className="text-sm font-medium w-16">Default:</span>
        <Rating size="default" value={3} />
      </div>
      <div className="flex items-center gap-4">
        <span className="text-sm font-medium w-16">Large:</span>
        <Rating size="lg" value={3} />
      </div>
      <div className="flex items-center gap-4">
        <span className="text-sm font-medium w-16">Extra Large:</span>
        <Rating size="xl" value={3} />
      </div>
    </div>
  ),
}

export const ProductReview: Story = {
  render: () => {
    const [ratings, setRatings] = React.useState({
      overall: 0,
      quality: 0,
      value: 0,
      ease: 0,
    })
    
    const handleRatingChange = (key: keyof typeof ratings) => (value: number) => {
      setRatings(prev => ({ ...prev, [key]: value }))
    }
    
    const averageRating = Object.values(ratings).reduce((a, b) => a + b, 0) / Object.keys(ratings).length
    
    return (
      <div className="space-y-4 w-80">
        <h3 className="text-lg font-semibold">Product Review</h3>
        
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-sm">Overall Rating</span>
            <Rating
              value={ratings.overall}
              onValueChange={handleRatingChange('overall')}
              showValue={true}
            />
          </div>
          
          <div className="flex items-center justify-between">
            <span className="text-sm">Quality</span>
            <Rating
              value={ratings.quality}
              onValueChange={handleRatingChange('quality')}
              showValue={true}
            />
          </div>
          
          <div className="flex items-center justify-between">
            <span className="text-sm">Value for Money</span>
            <Rating
              value={ratings.value}
              onValueChange={handleRatingChange('value')}
              showValue={true}
            />
          </div>
          
          <div className="flex items-center justify-between">
            <span className="text-sm">Ease of Use</span>
            <Rating
              value={ratings.ease}
              onValueChange={handleRatingChange('ease')}
              showValue={true}
            />
          </div>
        </div>
        
        <div className="pt-4 border-t">
          <div className="flex items-center justify-between">
            <span className="font-medium">Average Rating</span>
            <Rating
              value={averageRating}
              readOnly={true}
              showValue={true}
            />
          </div>
        </div>
      </div>
    )
  },
}

export const RestaurantRating: Story = {
  render: () => {
    const [foodRating, setFoodRating] = React.useState(0)
    const [serviceRating, setServiceRating] = React.useState(0)
    const [ambianceRating, setAmbianceRating] = React.useState(0)
    
    return (
      <div className="space-y-4 w-80">
        <h3 className="text-lg font-semibold">Restaurant Experience</h3>
        
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-sm">Food Quality</span>
            <Rating
              variant="stars"
              value={foodRating}
              onValueChange={setFoodRating}
              allowHalf={true}
              showValue={true}
            />
          </div>
          
          <div className="flex items-center justify-between">
            <span className="text-sm">Service</span>
            <Rating
              variant="stars"
              value={serviceRating}
              onValueChange={setServiceRating}
              allowHalf={true}
              showValue={true}
            />
          </div>
          
          <div className="flex items-center justify-between">
            <span className="text-sm">Ambiance</span>
            <Rating
              variant="stars"
              value={ambianceRating}
              onValueChange={setAmbianceRating}
              allowHalf={true}
              showValue={true}
            />
          </div>
        </div>
        
        <div className="pt-4 border-t">
          <div className="flex items-center justify-between">
            <span className="font-medium">Overall</span>
            <Rating
              variant="stars"
              value={(foodRating + serviceRating + ambianceRating) / 3}
              readOnly={true}
              showValue={true}
            />
          </div>
        </div>
      </div>
    )
  },
}

export const MovieRating: Story = {
  render: () => {
    const [rating, setRating] = React.useState(0)
    
    return (
      <div className="space-y-4">
        <div className="text-center">
          <h3 className="text-lg font-semibold mb-2">Rate this movie</h3>
          <Rating
            variant="stars"
            value={rating}
            onValueChange={setRating}
            size="lg"
            showValue={true}
            label="Movie Rating"
            showLabel={true}
          />
        </div>
        
        {rating > 0 && (
          <div className="text-center">
            <p className="text-sm text-muted-foreground">
              {rating >= 4 ? "Excellent!" : 
               rating >= 3 ? "Good!" : 
               rating >= 2 ? "Fair" : "Poor"}
            </p>
          </div>
        )}
      </div>
    )
  },
}

export const ReadOnlyExamples: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="flex items-center gap-4">
        <span className="text-sm font-medium w-20">5 Stars:</span>
        <Rating value={5} readOnly={true} />
      </div>
      <div className="flex items-center gap-4">
        <span className="text-sm font-medium w-20">3.5 Stars:</span>
        <Rating value={3.5} allowHalf={true} readOnly={true} />
      </div>
      <div className="flex items-center gap-4">
        <span className="text-sm font-medium w-20">2 Hearts:</span>
        <Rating variant="hearts" value={2} readOnly={true} />
      </div>
      <div className="flex items-center gap-4">
        <span className="text-sm font-medium w-20">3 Thumbs:</span>
        <Rating variant="thumbs" value={3} maxValue={3} readOnly={true} />
      </div>
    </div>
  ),
}

export const DisabledExamples: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="flex items-center gap-4">
        <span className="text-sm font-medium w-20">Disabled:</span>
        <Rating value={3} disabled={true} />
      </div>
      <div className="flex items-center gap-4">
        <span className="text-sm font-medium w-20">Disabled Half:</span>
        <Rating value={3.5} allowHalf={true} disabled={true} />
      </div>
      <div className="flex items-center gap-4">
        <span className="text-sm font-medium w-20">Disabled Hearts:</span>
        <Rating variant="hearts" value={4} disabled={true} />
      </div>
    </div>
  ),
}
