import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import { Button } from '../components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card'
import { Badge } from '../components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs'
import { Separator } from '../components/ui/separator'
import { 
  Heart, 
  ShoppingCart, 
  Star, 
  ArrowRight,
  ArrowLeft,
  ChevronRight,
  ChevronLeft,
  Package,
  Truck,
  Shield,
  RotateCcw,
  Users,
  Search,
  Menu,
  Star as StarIcon,
  Clock,
  MapPin,
  Mail,
  Phone,
  Instagram,
  Facebook,
  Twitter,
  Youtube
} from 'lucide-react'

const meta: Meta = {
  title: 'Pages/HomePage',
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => {
    const [currentSlide, setCurrentSlide] = React.useState(0)
    const [isWishlisted, setIsWishlisted] = React.useState<Record<number, boolean>>({})

    const promoSlides = [
      {
        id: 1,
        title: "Summer Collection 2024",
        subtitle: "Up to 50% off on selected items",
        description: "Discover the latest trends in fashion with our exclusive summer collection.",
        image: "bg-gradient-to-r from-blue-500 to-purple-600",
        cta: "Shop Now",
        badge: "New"
      },
      {
        id: 2,
        title: "Free Shipping",
        subtitle: "On orders over $100",
        description: "Enjoy free shipping on all orders above $100. Limited time offer!",
        image: "bg-gradient-to-r from-green-500 to-teal-600",
        cta: "Learn More",
        badge: "Limited"
      },
      {
        id: 3,
        title: "Premium Quality",
        subtitle: "100% Organic Materials",
        description: "All our products are made from premium organic materials.",
        image: "bg-gradient-to-r from-orange-500 to-red-600",
        cta: "Explore",
        badge: "Premium"
      }
    ]

    const popularProducts = [
      {
        id: 1,
        name: "Premium Cotton T-Shirt",
        price: 49.99,
        originalPrice: 79.99,
        rating: 4.8,
        reviews: 128,
        image: "bg-gray-200",
        badge: "Bestseller"
      },
      {
        id: 2,
        name: "Denim Jacket",
        price: 89.99,
        originalPrice: 129.99,
        rating: 4.6,
        reviews: 95,
        image: "bg-gray-200",
        badge: "Sale"
      },
      {
        id: 3,
        name: "Sneakers",
        price: 129.99,
        originalPrice: 159.99,
        rating: 4.9,
        reviews: 203,
        image: "bg-gray-200",
        badge: "New"
      },
      {
        id: 4,
        name: "Hoodie",
        price: 69.99,
        originalPrice: 99.99,
        rating: 4.7,
        reviews: 156,
        image: "bg-gray-200",
        badge: "Popular"
      },
      {
        id: 5,
        name: "Jeans",
        price: 79.99,
        originalPrice: 119.99,
        rating: 4.5,
        reviews: 87,
        image: "bg-gray-200",
        badge: "Trending"
      }
    ]

    const categories = [
      { name: "Clothing", icon: Package, count: 156 },
      { name: "Shoes", icon: Package, count: 89 },
      { name: "Accessories", icon: Package, count: 234 },
      { name: "Sportswear", icon: Package, count: 67 }
    ]

    const features = [
      {
        icon: Truck,
        title: "Free Shipping",
        description: "On orders over $100"
      },
      {
        icon: Shield,
        title: "Secure Payment",
        description: "100% secure checkout"
      },
      {
        icon: RotateCcw,
        title: "Easy Returns",
        description: "30 day return policy"
      },
      {
        icon: Users,
        title: "24/7 Support",
        description: "Dedicated support"
      }
    ]

    const nextSlide = () => {
      setCurrentSlide((prev) => (prev + 1) % promoSlides.length)
    }

    const prevSlide = () => {
      setCurrentSlide((prev) => (prev - 1 + promoSlides.length) % promoSlides.length)
    }

    const toggleWishlist = (productId: number) => {
      setIsWishlisted(prev => ({
        ...prev,
        [productId]: !prev[productId]
      }))
    }

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
                  <Search className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon">
                  <Heart className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon">
                  <ShoppingCart className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </header>

        {/* Hero Slider */}
        <section className="relative h-96 md:h-[500px] overflow-hidden">
          <div className="relative h-full">
            {promoSlides.map((slide, index) => (
              <div
                key={slide.id}
                className={`absolute inset-0 transition-opacity duration-500 ${
                  index === currentSlide ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <div className={`h-full ${slide.image} flex items-center`}>
                  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                    <div className="max-w-2xl text-white">
                      <Badge variant="secondary" className="mb-4">
                        {slide.badge}
                      </Badge>
                      <h2 className="text-4xl md:text-6xl font-bold mb-4">
                        {slide.title}
                      </h2>
                      <p className="text-xl md:text-2xl mb-2 opacity-90">
                        {slide.subtitle}
                      </p>
                      <p className="text-lg mb-8 opacity-80">
                        {slide.description}
                      </p>
                      <Button size="lg" className="text-lg px-8 py-3">
                        {slide.cta}
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Slider Controls */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {promoSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentSlide ? 'bg-white' : 'bg-white/50'
                }`}
              />
            ))}
          </div>
          
          <Button
            variant="ghost"
            size="icon"
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white"
            onClick={prevSlide}
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
          
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white"
            onClick={nextSlide}
          >
            <ChevronRight className="h-6 w-6" />
          </Button>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                    <feature.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Categories Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Shop by Category</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Explore our wide range of products organized by categories for easy browsing
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {categories.map((category, index) => (
                <Card key={index} className="cursor-pointer hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-100 rounded-full mb-4">
                      <category.icon className="h-8 w-8 text-gray-600" />
                    </div>
                    <h3 className="font-semibold mb-2">{category.name}</h3>
                    <p className="text-sm text-gray-600">{category.count} items</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Popular Products Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-12">
              <div>
                <h2 className="text-3xl font-bold mb-2">Popular Products</h2>
                <p className="text-gray-600">Our most loved items by customers</p>
              </div>
              <Button variant="outline">
                View All
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {popularProducts.map((product) => (
                <Card key={product.id} className="group cursor-pointer hover:shadow-lg transition-shadow">
                  <CardContent className="p-4">
                    <div className="relative mb-4">
                      <div className={`aspect-square ${product.image} rounded-md flex items-center justify-center`}>
                        <Package className="h-12 w-12 text-gray-400" />
                      </div>
                      <Badge className="absolute top-2 left-2">
                        {product.badge}
                      </Badge>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
                        onClick={() => toggleWishlist(product.id)}
                      >
                        <Heart className={`h-5 w-5 ${isWishlisted[product.id] ? 'fill-current text-red-500' : ''}`} />
                      </Button>
                    </div>
                    
                    <h3 className="font-medium mb-2 line-clamp-2">{product.name}</h3>
                    
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="font-bold">${product.price}</span>
                      <span className="text-sm text-gray-500 line-through">${product.originalPrice}</span>
                    </div>
                    
                    <div className="flex items-center space-x-1 mb-3">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <StarIcon
                          key={star}
                          className={`h-4 w-4 ${
                            star <= Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'
                          }`}
                        />
                      ))}
                      <span className="text-sm text-gray-600 ml-1">({product.reviews})</span>
                    </div>
                    
                    <Button size="sm" className="w-full">
                      <ShoppingCart className="h-4 w-4 mr-2" />
                      Add to Cart
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-16 bg-blue-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Stay Updated
            </h2>
            <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter and be the first to know about new products, exclusive offers, and fashion tips.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-md border-0 focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600"
              />
              <Button variant="secondary" className="whitespace-nowrap">
                Subscribe
              </Button>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4">Fashion Store</h3>
                <p className="text-gray-400 text-sm mb-4">
                  Premium clothing and accessories for the modern lifestyle.
                </p>
                <div className="flex space-x-4">
                  <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                    <Instagram className="h-5 w-5" />
                  </Button>
                  <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                    <Facebook className="h-5 w-5" />
                  </Button>
                  <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                    <Twitter className="h-5 w-5" />
                  </Button>
                  <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                    <Youtube className="h-5 w-5" />
                  </Button>
                </div>
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
                  <div className="flex items-center space-x-2">
                    <Mail className="h-4 w-4" />
                    <span>support@fashionstore.com</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Phone className="h-4 w-4" />
                    <span>+1 (555) 123-4567</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin className="h-4 w-4" />
                    <span>123 Fashion St, NY 10001</span>
                  </div>
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
      </div>
    )
  }
}

