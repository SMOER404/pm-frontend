import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import { Button } from '../components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card'
import { Input } from '../components/ui/input'
import { Label } from '../components/ui/label'
import { Badge } from '../components/ui/badge'
import { Separator } from '../components/ui/separator'
import { Checkbox } from '../components/ui/checkbox'
import { Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from '../components/ui/drawer'
import { 
  Heart, 
  ShoppingCart, 
  Star, 
  X,
  Plus,
  Minus,
  Trash2,
  Package,
  Star as StarIcon,
  Truck,
  Shield,
  CreditCard,
  Lock,
  ArrowRight,
  Gift,
  Tag,
  Clock,
  MapPin,
  Mail,
  Phone
} from 'lucide-react'

const meta: Meta = {
  title: 'Pages/CartDrawer',
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => {
    const [isOpen, setIsOpen] = React.useState(false)
    const [cartItems, setCartItems] = React.useState([
      {
        id: 1,
        name: "Premium Cotton T-Shirt",
        price: 49.99,
        originalPrice: 79.99,
        quantity: 2,
        size: "M",
        color: "Black",
        image: "bg-gray-200",
        badge: "Bestseller"
      },
      {
        id: 2,
        name: "Denim Jacket",
        price: 89.99,
        originalPrice: 129.99,
        quantity: 1,
        size: "L",
        color: "Blue",
        image: "bg-gray-200",
        badge: "Sale"
      },
      {
        id: 3,
        name: "Sneakers",
        price: 129.99,
        originalPrice: 159.99,
        quantity: 1,
        size: "9",
        color: "White",
        image: "bg-gray-200",
        badge: "New"
      }
    ])

    const [couponCode, setCouponCode] = React.useState('')
    const [selectedShipping, setSelectedShipping] = React.useState('standard')
    const [isWishlisted, setIsWishlisted] = React.useState<Record<number, boolean>>({})

    const relatedProducts = [
      {
        id: 4,
        name: "Hoodie",
        price: 69.99,
        originalPrice: 99.99,
        image: "bg-gray-200",
        badge: "Popular"
      },
      {
        id: 5,
        name: "Jeans",
        price: 79.99,
        originalPrice: 119.99,
        image: "bg-gray-200",
        badge: "Trending"
      }
    ]

    const shippingOptions = [
      {
        id: 'standard',
        name: 'Standard Shipping',
        price: 0,
        time: '5-7 business days',
        description: 'Free on orders over $100'
      },
      {
        id: 'express',
        name: 'Express Shipping',
        price: 9.99,
        time: '2-3 business days',
        description: 'Fast delivery'
      },
      {
        id: 'overnight',
        name: 'Overnight Shipping',
        price: 19.99,
        time: 'Next business day',
        description: 'Ultra fast delivery'
      }
    ]

    const updateQuantity = (itemId: number, newQuantity: number) => {
      if (newQuantity <= 0) {
        setCartItems(prev => prev.filter(item => item.id !== itemId))
      } else {
        setCartItems(prev => prev.map(item => 
          item.id === itemId ? { ...item, quantity: newQuantity } : item
        ))
      }
    }

    const removeItem = (itemId: number) => {
      setCartItems(prev => prev.filter(item => item.id !== itemId))
    }

    const toggleWishlist = (productId: number) => {
      setIsWishlisted(prev => ({
        ...prev,
        [productId]: !prev[productId]
      }))
    }

    const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0)
    const discount = subtotal * 0.1 // 10% discount
    const shipping = selectedShipping === 'standard' ? 0 : shippingOptions.find(opt => opt.id === selectedShipping)?.price || 0
    const total = subtotal - discount + shipping

    const itemCount = cartItems.reduce((sum, item) => sum + item.quantity, 0)

    return (
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <header className="bg-white border-b sticky top-0 z-50">
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
                <Drawer open={isOpen} onOpenChange={setIsOpen}>
                  <DrawerTrigger asChild>
                    <Button variant="ghost" size="icon" className="relative">
                      <ShoppingCart className="h-5 w-5" />
                      {itemCount > 0 && (
                        <Badge className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs">
                          {itemCount}
                        </Badge>
                      )}
                    </Button>
                  </DrawerTrigger>
                  <DrawerContent>
                    <DrawerHeader>
                      <DrawerTitle className="flex items-center justify-between">
                        <span>Shopping Cart ({itemCount} items)</span>
                        <DrawerClose asChild>
                          <Button variant="ghost" size="icon">
                            <X className="h-4 w-4" />
                          </Button>
                        </DrawerClose>
                      </DrawerTitle>
                      <DrawerDescription>
                        Review your items and proceed to checkout
                      </DrawerDescription>
                    </DrawerHeader>
                    
                    <div className="flex-1 overflow-y-auto p-6">
                      {cartItems.length === 0 ? (
                        <div className="text-center py-12">
                          <ShoppingCart className="h-16 w-16 mx-auto text-gray-400 mb-4" />
                          <h3 className="text-lg font-semibold mb-2">Your cart is empty</h3>
                          <p className="text-gray-600 mb-6">Add some products to get started</p>
                          <Button onClick={() => setIsOpen(false)}>
                            Continue Shopping
                          </Button>
                        </div>
                      ) : (
                        <div className="space-y-6">
                          {/* Cart Items */}
                          <div className="space-y-4">
                            {cartItems.map((item) => (
                              <Card key={item.id}>
                                <CardContent className="p-4">
                                  <div className="flex space-x-4">
                                    <div className="relative w-20 h-20 flex-shrink-0">
                                      <div className={`w-full h-full ${item.image} rounded-md flex items-center justify-center`}>
                                        <Package className="h-8 w-8 text-gray-400" />
                                      </div>
                                      <Badge className="absolute -top-1 -left-1 text-xs">
                                        {item.badge}
                                      </Badge>
                                    </div>
                                    
                                    <div className="flex-1 min-w-0">
                                      <div className="flex items-start justify-between">
                                        <div className="flex-1">
                                          <h3 className="font-medium text-sm mb-1">{item.name}</h3>
                                          <div className="flex items-center space-x-2 text-xs text-gray-600 mb-2">
                                            <span>Size: {item.size}</span>
                                            <span>•</span>
                                            <span>Color: {item.color}</span>
                                          </div>
                                          <div className="flex items-center space-x-2 mb-3">
                                            <span className="font-bold">${item.price}</span>
                                            <span className="text-sm text-gray-500 line-through">${item.originalPrice}</span>
                                          </div>
                                        </div>
                                        
                                        <Button
                                          variant="ghost"
                                          size="icon"
                                          onClick={() => removeItem(item.id)}
                                          className="text-gray-400 hover:text-red-500"
                                        >
                                          <Trash2 className="h-4 w-4" />
                                        </Button>
                                      </div>
                                      
                                      <div className="flex items-center justify-between">
                                        <div className="flex items-center space-x-2">
                                          <Button
                                            variant="outline"
                                            size="icon"
                                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                            className="h-8 w-8"
                                          >
                                            <Minus className="h-3 w-3" />
                                          </Button>
                                          <span className="w-8 text-center text-sm">{item.quantity}</span>
                                          <Button
                                            variant="outline"
                                            size="icon"
                                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                            className="h-8 w-8"
                                          >
                                            <Plus className="h-3 w-3" />
                                          </Button>
                                        </div>
                                        
                                        <div className="text-right">
                                          <p className="font-semibold">${(item.price * item.quantity).toFixed(2)}</p>
                                          <p className="text-xs text-gray-500">
                                            ${item.price} each
                                          </p>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </CardContent>
                              </Card>
                            ))}
                          </div>

                          <Separator />

                          {/* Coupon Code */}
                          <div>
                            <Label className="text-sm font-medium mb-2 block">Coupon Code</Label>
                            <div className="flex space-x-2">
                              <Input
                                placeholder="Enter coupon code"
                                value={couponCode}
                                onChange={(e) => setCouponCode(e.target.value)}
                                className="flex-1"
                              />
                              <Button variant="outline">
                                <Tag className="h-4 w-4 mr-2" />
                                Apply
                              </Button>
                            </div>
                          </div>

                          <Separator />

                          {/* Shipping Options */}
                          <div>
                            <Label className="text-sm font-medium mb-3 block">Shipping Method</Label>
                            <div className="space-y-2">
                              {shippingOptions.map((option) => (
                                <div key={option.id} className="flex items-center space-x-3">
                                  <input
                                    type="radio"
                                    id={option.id}
                                    name="shipping"
                                    value={option.id}
                                    checked={selectedShipping === option.id}
                                    onChange={(e) => setSelectedShipping(e.target.value)}
                                    className="text-blue-600"
                                  />
                                  <Label htmlFor={option.id} className="flex-1 cursor-pointer">
                                    <div className="flex items-center justify-between">
                                      <div>
                                        <p className="font-medium">{option.name}</p>
                                        <p className="text-sm text-gray-600">{option.description}</p>
                                      </div>
                                      <div className="text-right">
                                        <p className="font-medium">
                                          {option.price === 0 ? 'Free' : `$${option.price}`}
                                        </p>
                                        <p className="text-sm text-gray-600">{option.time}</p>
                                      </div>
                                    </div>
                                  </Label>
                                </div>
                              ))}
                            </div>
                          </div>

                          <Separator />

                          {/* Order Summary */}
                          <div>
                            <h3 className="font-semibold mb-3">Order Summary</h3>
                            <div className="space-y-2 text-sm">
                              <div className="flex justify-between">
                                <span>Subtotal ({itemCount} items)</span>
                                <span>${subtotal.toFixed(2)}</span>
                              </div>
                              <div className="flex justify-between text-green-600">
                                <span>Discount (10%)</span>
                                <span>-${discount.toFixed(2)}</span>
                              </div>
                              <div className="flex justify-between">
                                <span>Shipping</span>
                                <span>{shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}</span>
                              </div>
                              <Separator />
                              <div className="flex justify-between font-semibold text-lg">
                                <span>Total</span>
                                <span>${total.toFixed(2)}</span>
                              </div>
                            </div>
                          </div>

                          <Separator />

                          {/* Related Products */}
                          <div>
                            <h3 className="font-semibold mb-3">You might also like</h3>
                            <div className="grid grid-cols-2 gap-3">
                              {relatedProducts.map((product) => (
                                <Card key={product.id} className="cursor-pointer hover:shadow-md transition-shadow">
                                  <CardContent className="p-3">
                                    <div className="relative mb-2">
                                      <div className={`aspect-square ${product.image} rounded-md flex items-center justify-center`}>
                                        <Package className="h-6 w-6 text-gray-400" />
                                      </div>
                                      <Badge className="absolute top-1 left-1 text-xs">
                                        {product.badge}
                                      </Badge>
                                      <Button
                                        variant="ghost"
                                        size="icon"
                                        className="absolute top-1 right-1 h-6 w-6 opacity-0 group-hover:opacity-100 transition-opacity"
                                        onClick={() => toggleWishlist(product.id)}
                                      >
                                        <Heart className={`h-3 w-3 ${isWishlisted[product.id] ? 'fill-current text-red-500' : ''}`} />
                                      </Button>
                                    </div>
                                    <h4 className="font-medium text-sm mb-1 line-clamp-2">{product.name}</h4>
                                    <div className="flex items-center space-x-2">
                                      <span className="font-bold text-sm">${product.price}</span>
                                      <span className="text-xs text-gray-500 line-through">${product.originalPrice}</span>
                                    </div>
                                  </CardContent>
                                </Card>
                              ))}
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                    
                    {cartItems.length > 0 && (
                      <DrawerFooter>
                        <div className="space-y-4">
                          <div className="flex items-center space-x-2 text-sm text-gray-600">
                            <Shield className="h-4 w-4" />
                            <span>Secure checkout with SSL encryption</span>
                          </div>
                          <div className="flex space-x-3">
                            <Button variant="outline" className="flex-1" onClick={() => setIsOpen(false)}>
                              Continue Shopping
                            </Button>
                            <Button className="flex-1">
                              <CreditCard className="h-4 w-4 mr-2" />
                              Checkout
                              <ArrowRight className="h-4 w-4 ml-2" />
                            </Button>
                          </div>
                        </div>
                      </DrawerFooter>
                    )}
                  </DrawerContent>
                </Drawer>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-4">Shopping Cart Demo</h1>
            <p className="text-gray-600 mb-8">
              Click the cart icon in the header to open the shopping cart drawer
            </p>
            
            <div className="bg-white rounded-lg border p-8 max-w-md mx-auto">
              <ShoppingCart className="h-16 w-16 mx-auto text-gray-400 mb-4" />
              <h2 className="text-xl font-semibold mb-2">Cart Features</h2>
              <ul className="text-left space-y-2 text-gray-600">
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span>Product management with quantity controls</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span>Coupon code application</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span>Shipping method selection</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span>Order summary with discounts</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span>Related products suggestions</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span>Secure checkout process</span>
                </li>
              </ul>
            </div>
          </div>
        </main>
      </div>
    )
  }
}

