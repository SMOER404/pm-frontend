import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import { Button } from '../components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card'
import { Input } from '../components/ui/input'
import { Label } from '../components/ui/label'
import { Textarea } from '../components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select'
import { RadioGroup } from '../components/ui/radio-group'
import { Checkbox } from '../components/ui/checkbox'
import { Separator } from '../components/ui/separator'
import { Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from '../components/ui/drawer'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../components/ui/accordion'
import { Badge } from '../components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs'
import { 
  Heart, 
  ShoppingCart, 
  Star, 
  Share2, 
  Truck, 
  Shield, 
  RotateCcw, 
  MessageCircle,
  Star as StarIcon,
  Minus,
  Plus,
  Eye,
  Package,
  CreditCard,
  MapPin,
  Calendar,
  Users,
  Settings,
  HelpCircle,
  Mail,
  Phone
} from 'lucide-react'

const meta: Meta = {
  title: 'Pages/ProductPage',
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => {
    const [quantity, setQuantity] = React.useState(1)
    const [selectedSize, setSelectedSize] = React.useState('')
    const [selectedColor, setSelectedColor] = React.useState('')
    const [isWishlisted, setIsWishlisted] = React.useState(false)
    const [isDrawerOpen, setIsDrawerOpen] = React.useState(false)

    const sizes = [
      { value: 'xs', label: 'XS' },
      { value: 's', label: 'S' },
      { value: 'm', label: 'M' },
      { value: 'l', label: 'L' },
      { value: 'xl', label: 'XL' },
    ]

    const colors = [
      { value: 'black', label: 'Black', color: 'bg-black' },
      { value: 'white', label: 'White', color: 'bg-white border' },
      { value: 'blue', label: 'Blue', color: 'bg-blue-500' },
      { value: 'red', label: 'Red', color: 'bg-red-500' },
    ]

    const reviews = [
      {
        id: 1,
        name: 'John Doe',
        rating: 5,
        date: '2024-01-15',
        comment: 'Excellent quality! The fabric is soft and comfortable. Perfect fit.',
        verified: true
      },
      {
        id: 2,
        name: 'Jane Smith',
        rating: 4,
        date: '2024-01-10',
        comment: 'Great product, fast delivery. Would recommend!',
        verified: true
      },
      {
        id: 3,
        name: 'Mike Johnson',
        rating: 5,
        date: '2024-01-05',
        comment: 'Amazing quality for the price. Very satisfied with my purchase.',
        verified: false
      }
    ]

    return (
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <header className="bg-white border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center space-x-8">
                <h1 className="text-xl font-bold">Fashion Store</h1>
                <nav className="hidden md:flex space-x-6">
                  <a href="#" className="text-gray-600 hover:text-gray-900">Home</a>
                  <a href="#" className="text-gray-600 hover:text-gray-900">Shop</a>
                  <a href="#" className="text-gray-600 hover:text-gray-900">About</a>
                  <a href="#" className="text-gray-600 hover:text-gray-900">Contact</a>
                </nav>
              </div>
              <div className="flex items-center space-x-4">
                <Button variant="ghost" size="icon">
                  <Heart className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon">
                  <ShoppingCart className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon">
                  <Users className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Product Images */}
            <div className="space-y-4">
              <div className="aspect-square bg-gray-200 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <Package className="h-24 w-24 mx-auto text-gray-400 mb-4" />
                  <p className="text-gray-500">Product Image</p>
                </div>
              </div>
              <div className="grid grid-cols-4 gap-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="aspect-square bg-gray-200 rounded-md flex items-center justify-center">
                    <Eye className="h-6 w-6 text-gray-400" />
                  </div>
                ))}
              </div>
            </div>

            {/* Product Details */}
            <div className="space-y-6">
              {/* Product Title and Rating */}
              <div>
                <div className="flex items-center justify-between">
                  <h1 className="text-3xl font-bold text-gray-900">Premium Cotton T-Shirt</h1>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setIsWishlisted(!isWishlisted)}
                    className={isWishlisted ? 'text-red-500' : ''}
                  >
                    <Heart className={`h-6 w-6 ${isWishlisted ? 'fill-current' : ''}`} />
                  </Button>
                </div>
                <div className="flex items-center mt-2 space-x-2">
                  <div className="flex items-center">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <StarIcon key={star} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600">(128 reviews)</span>
                  <Badge variant="secondary">4.8/5</Badge>
                </div>
              </div>

              {/* Price */}
              <div className="flex items-center space-x-4">
                <span className="text-3xl font-bold text-gray-900">$49.99</span>
                <span className="text-lg text-gray-500 line-through">$79.99</span>
                <Badge variant="destructive">Save 37%</Badge>
              </div>

              {/* Product Options */}
              <div className="space-y-4">
                {/* Size Selection */}
                <div>
                  <Label className="text-sm font-medium">Size</Label>
                  <div className="flex space-x-2 mt-2">
                    {sizes.map((size) => (
                      <Button
                        key={size.value}
                        variant={selectedSize === size.value ? 'default' : 'outline'}
                        size="sm"
                        onClick={() => setSelectedSize(size.value)}
                        className="w-12 h-12"
                      >
                        {size.label}
                      </Button>
                    ))}
                  </div>
                </div>

                {/* Color Selection */}
                <div>
                  <Label className="text-sm font-medium">Color</Label>
                  <div className="flex space-x-2 mt-2">
                    {colors.map((color) => (
                      <button
                        key={color.value}
                        onClick={() => setSelectedColor(color.value)}
                        className={`w-8 h-8 rounded-full border-2 ${
                          selectedColor === color.value ? 'border-gray-900' : 'border-gray-300'
                        } ${color.color}`}
                        title={color.label}
                      />
                    ))}
                  </div>
                </div>

                {/* Quantity */}
                <div>
                  <Label className="text-sm font-medium">Quantity</Label>
                  <div className="flex items-center space-x-2 mt-2">
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    >
                      <Minus className="h-4 w-4" />
                    </Button>
                    <Input
                      type="number"
                      value={quantity}
                      onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                      className="w-20 text-center"
                      min="1"
                    />
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => setQuantity(quantity + 1)}
                    >
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex space-x-4">
                <Button size="lg" className="flex-1">
                  <ShoppingCart className="h-5 w-5 mr-2" />
                  Add to Cart
                </Button>
                <Button variant="outline" size="lg">
                  <Share2 className="h-5 w-5" />
                </Button>
              </div>

              {/* Shipping Info */}
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <Truck className="h-4 w-4" />
                    <span>Free shipping on orders over $50</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-600 mt-2">
                    <Shield className="h-4 w-4" />
                    <span>2-year warranty included</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-600 mt-2">
                    <RotateCcw className="h-4 w-4" />
                    <span>30-day return policy</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Product Tabs */}
          <div className="mt-16">
            <Tabs defaultValue="description" className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="description">Description</TabsTrigger>
                <TabsTrigger value="specifications">Specifications</TabsTrigger>
                <TabsTrigger value="reviews">Reviews</TabsTrigger>
                <TabsTrigger value="shipping">Shipping</TabsTrigger>
              </TabsList>
              
              <TabsContent value="description" className="mt-6">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-4">Product Description</h3>
                    <p className="text-gray-600 leading-relaxed">
                      This premium cotton t-shirt is crafted from 100% organic cotton, providing exceptional comfort and breathability. 
                      The fabric is soft to the touch and gets even softer with each wash. Perfect for everyday wear, this t-shirt 
                      features a classic fit that flatters all body types.
                    </p>
                    <div className="mt-6 space-y-4">
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="text-sm text-gray-600">100% Organic Cotton</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="text-sm text-gray-600">Machine washable</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="text-sm text-gray-600">Pre-shrunk fabric</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="specifications" className="mt-6">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-4">Product Specifications</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-sm text-gray-600">Material</span>
                          <span className="text-sm font-medium">100% Organic Cotton</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm text-gray-600">Weight</span>
                          <span className="text-sm font-medium">180 g/m²</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm text-gray-600">Fit</span>
                          <span className="text-sm font-medium">Regular</span>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-sm text-gray-600">Care</span>
                          <span className="text-sm font-medium">Machine wash cold</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm text-gray-600">Origin</span>
                          <span className="text-sm font-medium">Made in USA</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm text-gray-600">Certification</span>
                          <span className="text-sm font-medium">GOTS Certified</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="reviews" className="mt-6">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="text-lg font-semibold">Customer Reviews</h3>
                      <Button variant="outline" size="sm">
                        <MessageCircle className="h-4 w-4 mr-2" />
                        Write a Review
                      </Button>
                    </div>
                    
                    <div className="space-y-6">
                      {reviews.map((review) => (
                        <div key={review.id} className="border-b pb-6 last:border-b-0">
                          <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center space-x-2">
                              <span className="font-medium">{review.name}</span>
                              {review.verified && (
                                <Badge variant="secondary" className="text-xs">Verified</Badge>
                              )}
                            </div>
                            <div className="flex items-center">
                              {[1, 2, 3, 4, 5].map((star) => (
                                <StarIcon
                                  key={star}
                                  className={`h-4 w-4 ${
                                    star <= review.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
                                  }`}
                                />
                              ))}
                            </div>
                          </div>
                          <p className="text-sm text-gray-600 mb-2">{review.comment}</p>
                          <span className="text-xs text-gray-500">{review.date}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="shipping" className="mt-6">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-4">Shipping Information</h3>
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <Truck className="h-5 w-5 text-gray-400" />
                        <div>
                          <p className="font-medium">Standard Shipping</p>
                          <p className="text-sm text-gray-600">5-7 business days - Free on orders over $50</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Truck className="h-5 w-5 text-gray-400" />
                        <div>
                          <p className="font-medium">Express Shipping</p>
                          <p className="text-sm text-gray-600">2-3 business days - $9.99</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Truck className="h-5 w-5 text-gray-400" />
                        <div>
                          <p className="font-medium">Overnight Shipping</p>
                          <p className="text-sm text-gray-600">Next business day - $19.99</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          {/* Related Products */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold mb-6">Related Products</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[1, 2, 3, 4].map((i) => (
                <Card key={i} className="cursor-pointer hover:shadow-lg transition-shadow">
                  <CardContent className="p-4">
                    <div className="aspect-square bg-gray-200 rounded-md mb-4 flex items-center justify-center">
                      <Package className="h-12 w-12 text-gray-400" />
                    </div>
                    <h3 className="font-medium mb-2">Related Product {i}</h3>
                    <p className="text-sm text-gray-600 mb-2">$39.99</p>
                    <div className="flex items-center space-x-1 mb-3">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <StarIcon key={star} className="h-3 w-3 text-yellow-400 fill-current" />
                      ))}
                      <span className="text-xs text-gray-600 ml-1">(24)</span>
                    </div>
                    <Button size="sm" className="w-full">
                      Add to Cart
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="bg-gray-900 text-white mt-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4">Fashion Store</h3>
                <p className="text-gray-400 text-sm">
                  Premium clothing and accessories for the modern lifestyle.
                </p>
              </div>
              <div>
                <h4 className="font-medium mb-4">Customer Service</h4>
                <div className="space-y-2 text-sm text-gray-400">
                  <p>Contact Us</p>
                  <p>Shipping Info</p>
                  <p>Returns</p>
                  <p>Size Guide</p>
                </div>
              </div>
              <div>
                <h4 className="font-medium mb-4">Company</h4>
                <div className="space-y-2 text-sm text-gray-400">
                  <p>About Us</p>
                  <p>Careers</p>
                  <p>Press</p>
                  <p>Blog</p>
                </div>
              </div>
              <div>
                <h4 className="font-medium mb-4">Connect</h4>
                <div className="space-y-2 text-sm text-gray-400">
                  <p>Newsletter</p>
                  <p>Instagram</p>
                  <p>Facebook</p>
                  <p>Twitter</p>
                </div>
              </div>
            </div>
            <Separator className="my-8" />
            <div className="flex justify-between items-center text-sm text-gray-400">
              <p>&copy; 2024 Fashion Store. All rights reserved.</p>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-white">Privacy Policy</a>
                <a href="#" className="hover:text-white">Terms of Service</a>
              </div>
            </div>
          </div>
        </footer>

        {/* Quick Actions Drawer */}
        <Drawer open={isDrawerOpen} onOpenChange={setIsDrawerOpen}>
          <DrawerTrigger asChild>
            <Button variant="outline" className="fixed bottom-4 right-4 z-50">
              <Settings className="h-4 w-4 mr-2" />
              Quick Actions
            </Button>
          </DrawerTrigger>
          <DrawerContent>
            <DrawerHeader>
              <DrawerTitle>Quick Actions</DrawerTitle>
              <DrawerDescription>
                Access frequently used features and settings.
              </DrawerDescription>
            </DrawerHeader>
            <div className="p-4 space-y-4">
              <Button className="w-full justify-start">
                <HelpCircle className="h-4 w-4 mr-2" />
                Customer Support
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Mail className="h-4 w-4 mr-2" />
                Contact Us
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Phone className="h-4 w-4 mr-2" />
                Call Support
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <MapPin className="h-4 w-4 mr-2" />
                Find Store
              </Button>
            </div>
            <DrawerFooter>
              <DrawerClose asChild>
                <Button variant="outline">Close</Button>
              </DrawerClose>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </div>
    )
  }
}

export const MobileView: Story = {
  render: () => {
    const [quantity, setQuantity] = React.useState(1)
    const [selectedSize, setSelectedSize] = React.useState('')
    const [selectedColor, setSelectedColor] = React.useState('')

    const sizes = [
      { value: 'xs', label: 'XS' },
      { value: 's', label: 'S' },
      { value: 'm', label: 'M' },
      { value: 'l', label: 'L' },
      { value: 'xl', label: 'XL' },
    ]

    const colors = [
      { value: 'black', label: 'Black', color: 'bg-black' },
      { value: 'white', label: 'White', color: 'bg-white border' },
      { value: 'blue', label: 'Blue', color: 'bg-blue-500' },
      { value: 'red', label: 'Red', color: 'bg-red-500' },
    ]

    return (
      <div className="max-w-md mx-auto bg-white min-h-screen">
        {/* Mobile Header */}
        <header className="bg-white border-b px-4 py-3">
          <div className="flex items-center justify-between">
            <Button variant="ghost" size="sm">
              ← Back
            </Button>
            <h1 className="text-lg font-semibold">Product</h1>
            <Button variant="ghost" size="sm">
              <Heart className="h-5 w-5" />
            </Button>
          </div>
        </header>

        {/* Product Image */}
        <div className="aspect-square bg-gray-200 flex items-center justify-center">
          <div className="text-center">
            <Package className="h-24 w-24 mx-auto text-gray-400 mb-4" />
            <p className="text-gray-500">Product Image</p>
          </div>
        </div>

        {/* Product Info */}
        <div className="p-4 space-y-4">
          <div>
            <h2 className="text-xl font-bold">Premium Cotton T-Shirt</h2>
            <div className="flex items-center mt-2 space-x-2">
              <div className="flex items-center">
                {[1, 2, 3, 4, 5].map((star) => (
                  <StarIcon key={star} className="h-4 w-4 text-yellow-400 fill-current" />
                ))}
              </div>
              <span className="text-sm text-gray-600">(128 reviews)</span>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <span className="text-2xl font-bold">$49.99</span>
            <span className="text-lg text-gray-500 line-through">$79.99</span>
            <Badge variant="destructive">Save 37%</Badge>
          </div>

          {/* Size Selection */}
          <div>
            <Label className="text-sm font-medium">Size</Label>
            <div className="flex space-x-2 mt-2">
              {sizes.map((size) => (
                <Button
                  key={size.value}
                  variant={selectedSize === size.value ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setSelectedSize(size.value)}
                  className="flex-1"
                >
                  {size.label}
                </Button>
              ))}
            </div>
          </div>

          {/* Color Selection */}
          <div>
            <Label className="text-sm font-medium">Color</Label>
            <div className="flex space-x-2 mt-2">
              {colors.map((color) => (
                <button
                  key={color.value}
                  onClick={() => setSelectedColor(color.value)}
                  className={`w-8 h-8 rounded-full border-2 ${
                    selectedColor === color.value ? 'border-gray-900' : 'border-gray-300'
                  } ${color.color}`}
                  title={color.label}
                />
              ))}
            </div>
          </div>

          {/* Quantity */}
          <div>
            <Label className="text-sm font-medium">Quantity</Label>
            <div className="flex items-center space-x-2 mt-2">
              <Button
                variant="outline"
                size="icon"
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
              >
                <Minus className="h-4 w-4" />
              </Button>
              <Input
                type="number"
                value={quantity}
                onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                className="flex-1 text-center"
                min="1"
              />
              <Button
                variant="outline"
                size="icon"
                onClick={() => setQuantity(quantity + 1)}
              >
                <Plus className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="space-y-3">
            <Button size="lg" className="w-full">
              <ShoppingCart className="h-5 w-5 mr-2" />
              Add to Cart
            </Button>
            <Button variant="outline" size="lg" className="w-full">
              <Share2 className="h-5 w-5 mr-2" />
              Share Product
            </Button>
          </div>

          {/* Product Details Accordion */}
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="description">
              <AccordionTrigger>Product Description</AccordionTrigger>
              <AccordionContent>
                <p className="text-sm text-gray-600">
                  This premium cotton t-shirt is crafted from 100% organic cotton, providing exceptional comfort and breathability. 
                  The fabric is soft to the touch and gets even softer with each wash.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="shipping">
              <AccordionTrigger>Shipping & Returns</AccordionTrigger>
              <AccordionContent>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center space-x-2">
                    <Truck className="h-4 w-4" />
                    <span>Free shipping on orders over $50</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RotateCcw className="h-4 w-4" />
                    <span>30-day return policy</span>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="reviews">
              <AccordionTrigger>Customer Reviews</AccordionTrigger>
              <AccordionContent>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <StarIcon key={star} className="h-4 w-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <span className="text-sm text-gray-600">4.8/5 (128 reviews)</span>
                  </div>
                  <Button variant="outline" size="sm" className="w-full">
                    <MessageCircle className="h-4 w-4 mr-2" />
                    Write a Review
                  </Button>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    )
  }
}

