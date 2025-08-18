import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import { Button } from '../components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card'
import { Input } from '../components/ui/input'
import { Label } from '../components/ui/label'
import { Badge } from '../components/ui/badge'
import { Separator } from '../components/ui/separator'
import { Checkbox } from '../components/ui/checkbox'
import { RadioGroup } from '../components/ui/radio-group'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select'

import { 
  Heart, 
  ShoppingCart, 
  Star, 
  Filter,
  Grid,
  List,
  ChevronRight,
  ChevronLeft,
  Search,
  Package,
  Star as StarIcon,
  SlidersHorizontal,
  X,
  ArrowUpDown,
  Eye
} from 'lucide-react'

const meta: Meta = {
  title: 'Pages/CatalogPage',
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => {
    const [viewMode, setViewMode] = React.useState<'grid' | 'list'>('grid')
    const [sortBy, setSortBy] = React.useState('popular')
    const [priceRange, setPriceRange] = React.useState([0, 500])
    const [selectedCategories, setSelectedCategories] = React.useState<string[]>([])
    const [selectedBrands, setSelectedBrands] = React.useState<string[]>([])
    const [selectedSizes, setSelectedSizes] = React.useState<string[]>([])
    const [selectedColors, setSelectedColors] = React.useState<string[]>([])
    const [isWishlisted, setIsWishlisted] = React.useState<Record<number, boolean>>({})
    const [currentPage, setCurrentPage] = React.useState(1)

    const breadcrumbs = [
      { name: 'Home', href: '#' },
      { name: 'Shop', href: '#' },
      { name: 'Clothing', href: '#' },
      { name: 'T-Shirts', href: '#' }
    ]

    const products = [
      {
        id: 1,
        name: "Premium Cotton T-Shirt",
        price: 49.99,
        originalPrice: 79.99,
        rating: 4.8,
        reviews: 128,
        image: "bg-gray-200",
        badge: "Bestseller",
        category: "T-Shirts",
        brand: "Premium Brand",
        sizes: ["S", "M", "L", "XL"],
        colors: ["Black", "White", "Blue"]
      },
      {
        id: 2,
        name: "Denim Jacket",
        price: 89.99,
        originalPrice: 129.99,
        rating: 4.6,
        reviews: 95,
        image: "bg-gray-200",
        badge: "Sale",
        category: "Jackets",
        brand: "Denim Co",
        sizes: ["M", "L", "XL"],
        colors: ["Blue", "Black"]
      },
      {
        id: 3,
        name: "Sneakers",
        price: 129.99,
        originalPrice: 159.99,
        rating: 4.9,
        reviews: 203,
        image: "bg-gray-200",
        badge: "New",
        category: "Shoes",
        brand: "Sport Brand",
        sizes: ["7", "8", "9", "10"],
        colors: ["White", "Black", "Red"]
      },
      {
        id: 4,
        name: "Hoodie",
        price: 69.99,
        originalPrice: 99.99,
        rating: 4.7,
        reviews: 156,
        image: "bg-gray-200",
        badge: "Popular",
        category: "Hoodies",
        brand: "Casual Wear",
        sizes: ["S", "M", "L", "XL"],
        colors: ["Gray", "Black", "Blue"]
      },
      {
        id: 5,
        name: "Jeans",
        price: 79.99,
        originalPrice: 119.99,
        rating: 4.5,
        reviews: 87,
        image: "bg-gray-200",
        badge: "Trending",
        category: "Jeans",
        brand: "Denim Co",
        sizes: ["30", "32", "34", "36"],
        colors: ["Blue", "Black"]
      },
      {
        id: 6,
        name: "Polo Shirt",
        price: 39.99,
        originalPrice: 59.99,
        rating: 4.4,
        reviews: 73,
        image: "bg-gray-200",
        badge: "Sale",
        category: "Polo Shirts",
        brand: "Premium Brand",
        sizes: ["S", "M", "L"],
        colors: ["White", "Blue", "Red"]
      }
    ]

    const categories = [
      { name: "T-Shirts", count: 45 },
      { name: "Jackets", count: 23 },
      { name: "Shoes", count: 67 },
      { name: "Hoodies", count: 34 },
      { name: "Jeans", count: 28 },
      { name: "Polo Shirts", count: 19 }
    ]

    const brands = [
      { name: "Premium Brand", count: 23 },
      { name: "Denim Co", count: 15 },
      { name: "Sport Brand", count: 31 },
      { name: "Casual Wear", count: 27 }
    ]

    const sizes = [
      { name: "XS", count: 12 },
      { name: "S", count: 45 },
      { name: "M", count: 67 },
      { name: "L", count: 54 },
      { name: "XL", count: 23 },
      { name: "XXL", count: 8 }
    ]

    const colors = [
      { name: "Black", count: 89, color: "bg-black" },
      { name: "White", count: 67, color: "bg-white border" },
      { name: "Blue", count: 45, color: "bg-blue-500" },
      { name: "Red", count: 34, color: "bg-red-500" },
      { name: "Gray", count: 56, color: "bg-gray-500" }
    ]

    const toggleWishlist = (productId: number) => {
      setIsWishlisted(prev => ({
        ...prev,
        [productId]: !prev[productId]
      }))
    }

    const toggleCategory = (category: string) => {
      setSelectedCategories(prev => 
        prev.includes(category) 
          ? prev.filter(c => c !== category)
          : [...prev, category]
      )
    }

    const toggleBrand = (brand: string) => {
      setSelectedBrands(prev => 
        prev.includes(brand) 
          ? prev.filter(b => b !== brand)
          : [...prev, brand]
      )
    }

    const toggleSize = (size: string) => {
      setSelectedSizes(prev => 
        prev.includes(size) 
          ? prev.filter(s => s !== size)
          : [...prev, size]
      )
    }

    const toggleColor = (color: string) => {
      setSelectedColors(prev => 
        prev.includes(color) 
          ? prev.filter(c => c !== color)
          : [...prev, color]
      )
    }

    const clearFilters = () => {
      setSelectedCategories([])
      setSelectedBrands([])
      setSelectedSizes([])
      setSelectedColors([])
      setPriceRange([0, 500])
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
                  <a href="#" className="text-gray-900 font-medium">Shop</a>
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
              </div>
            </div>
          </div>
        </header>

        {/* Breadcrumbs */}
        <div className="bg-white border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <nav className="flex items-center space-x-2 text-sm">
              {breadcrumbs.map((crumb, index) => (
                <React.Fragment key={crumb.name}>
                  <a 
                    href={crumb.href} 
                    className={`hover:text-blue-600 ${
                      index === breadcrumbs.length - 1 ? 'text-gray-900 font-medium' : 'text-gray-500'
                    }`}
                  >
                    {crumb.name}
                  </a>
                  {index < breadcrumbs.length - 1 && (
                    <ChevronRight className="h-4 w-4 text-gray-400" />
                  )}
                </React.Fragment>
              ))}
            </nav>
          </div>
        </div>

        {/* Main Content */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Filters Sidebar */}
            <div className="lg:w-80 space-y-6">
              <div className="bg-white rounded-lg border p-6">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-lg font-semibold flex items-center">
                    <Filter className="h-5 w-5 mr-2" />
                    Filters
                  </h2>
                  <Button variant="ghost" size="sm" onClick={clearFilters}>
                    <X className="h-4 w-4 mr-1" />
                    Clear
                  </Button>
                </div>

                {/* Price Range */}
                <div className="mb-6">
                  <Label className="text-sm font-medium mb-3 block">Price Range</Label>
                  <div className="flex space-x-2 mb-2">
                    <div className="flex-1">
                      <Label htmlFor="min-price" className="text-xs text-gray-600">Min</Label>
                      <Input
                        id="min-price"
                        type="number"
                        placeholder="0"
                        value={priceRange[0]}
                        onChange={(e) => setPriceRange([parseInt(e.target.value) || 0, priceRange[1]])}
                        className="text-sm"
                      />
                    </div>
                    <div className="flex-1">
                      <Label htmlFor="max-price" className="text-xs text-gray-600">Max</Label>
                      <Input
                        id="max-price"
                        type="number"
                        placeholder="500"
                        value={priceRange[1]}
                        onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value) || 500])}
                        className="text-sm"
                      />
                    </div>
                  </div>
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>${priceRange[0]}</span>
                    <span>${priceRange[1]}</span>
                  </div>
                </div>

                <Separator className="my-6" />

                {/* Categories */}
                <div className="mb-6">
                  <Label className="text-sm font-medium mb-3 block">Categories</Label>
                  <div className="space-y-2">
                    {categories.map((category) => (
                      <div key={category.name} className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id={`category-${category.name}`}
                            checked={selectedCategories.includes(category.name)}
                            onCheckedChange={() => toggleCategory(category.name)}
                          />
                          <Label htmlFor={`category-${category.name}`} className="text-sm">
                            {category.name}
                          </Label>
                        </div>
                        <Badge variant="secondary" className="text-xs">
                          {category.count}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </div>

                <Separator className="my-6" />

                {/* Brands */}
                <div className="mb-6">
                  <Label className="text-sm font-medium mb-3 block">Brands</Label>
                  <div className="space-y-2">
                    {brands.map((brand) => (
                      <div key={brand.name} className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id={`brand-${brand.name}`}
                            checked={selectedBrands.includes(brand.name)}
                            onCheckedChange={() => toggleBrand(brand.name)}
                          />
                          <Label htmlFor={`brand-${brand.name}`} className="text-sm">
                            {brand.name}
                          </Label>
                        </div>
                        <Badge variant="secondary" className="text-xs">
                          {brand.count}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </div>

                <Separator className="my-6" />

                {/* Sizes */}
                <div className="mb-6">
                  <Label className="text-sm font-medium mb-3 block">Sizes</Label>
                  <div className="grid grid-cols-3 gap-2">
                    {sizes.map((size) => (
                      <Button
                        key={size.name}
                        variant={selectedSizes.includes(size.name) ? 'default' : 'outline'}
                        size="sm"
                        onClick={() => toggleSize(size.name)}
                        className="justify-between"
                      >
                        {size.name}
                        <Badge variant="secondary" className="text-xs ml-1">
                          {size.count}
                        </Badge>
                      </Button>
                    ))}
                  </div>
                </div>

                <Separator className="my-6" />

                {/* Colors */}
                <div className="mb-6">
                  <Label className="text-sm font-medium mb-3 block">Colors</Label>
                  <div className="grid grid-cols-2 gap-2">
                    {colors.map((color) => (
                      <Button
                        key={color.name}
                        variant={selectedColors.includes(color.name) ? 'default' : 'outline'}
                        size="sm"
                        onClick={() => toggleColor(color.name)}
                        className="justify-between"
                      >
                        <div className="flex items-center space-x-2">
                          <div className={`w-4 h-4 rounded-full ${color.color}`} />
                          <span>{color.name}</span>
                        </div>
                        <Badge variant="secondary" className="text-xs ml-1">
                          {color.count}
                        </Badge>
                      </Button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Products Section */}
            <div className="flex-1">
              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
                <div>
                  <h1 className="text-2xl font-bold">T-Shirts</h1>
                  <p className="text-gray-600">Showing {products.length} products</p>
                </div>
                
                <div className="flex items-center space-x-4 mt-4 sm:mt-0">
                  {/* Sort */}
                  <Select value={sortBy} onValueChange={setSortBy}>
                    <SelectTrigger className="w-48">
                      <SelectValue placeholder="Sort by" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="popular">Most Popular</SelectItem>
                      <SelectItem value="newest">Newest</SelectItem>
                      <SelectItem value="price-low">Price: Low to High</SelectItem>
                      <SelectItem value="price-high">Price: High to Low</SelectItem>
                      <SelectItem value="rating">Highest Rated</SelectItem>
                    </SelectContent>
                  </Select>

                  {/* View Mode */}
                  <div className="flex border rounded-md">
                    <Button
                      variant={viewMode === 'grid' ? 'default' : 'ghost'}
                      size="sm"
                      onClick={() => setViewMode('grid')}
                      className="rounded-r-none"
                    >
                      <Grid className="h-4 w-4" />
                    </Button>
                    <Button
                      variant={viewMode === 'list' ? 'default' : 'ghost'}
                      size="sm"
                      onClick={() => setViewMode('list')}
                      className="rounded-l-none"
                    >
                      <List className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>

              {/* Products Grid */}
              <div className={`grid gap-6 ${
                viewMode === 'grid' 
                  ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' 
                  : 'grid-cols-1'
              }`}>
                {products.map((product) => (
                  <Card key={product.id} className="group cursor-pointer hover:shadow-lg transition-shadow">
                    <CardContent className={`p-4 ${viewMode === 'list' ? 'flex space-x-4' : ''}`}>
                      <div className={`relative mb-4 ${viewMode === 'list' ? 'w-32 flex-shrink-0' : ''}`}>
                        <div className={`${product.image} rounded-md flex items-center justify-center ${
                          viewMode === 'list' ? 'aspect-square' : 'aspect-square'
                        }`}>
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
                      
                      <div className={`flex-1 ${viewMode === 'list' ? 'flex flex-col justify-between' : ''}`}>
                        <div>
                          <h3 className="font-medium mb-2 line-clamp-2">{product.name}</h3>
                          <p className="text-sm text-gray-600 mb-2">{product.brand}</p>
                          
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

                          {viewMode === 'list' && (
                            <div className="flex items-center space-x-2 mb-3">
                              <span className="text-sm text-gray-600">Sizes:</span>
                              <div className="flex space-x-1">
                                {product.sizes.slice(0, 3).map((size) => (
                                  <Badge key={size} variant="outline" className="text-xs">
                                    {size}
                                  </Badge>
                                ))}
                                {product.sizes.length > 3 && (
                                  <Badge variant="outline" className="text-xs">
                                    +{product.sizes.length - 3}
                                  </Badge>
                                )}
                              </div>
                            </div>
                          )}
                        </div>
                        
                        <div className={`flex space-x-2 ${viewMode === 'list' ? 'mt-4' : ''}`}>
                          <Button size="sm" className="flex-1">
                            <ShoppingCart className="h-4 w-4 mr-2" />
                            Add to Cart
                          </Button>
                          <Button variant="outline" size="sm">
                            <Eye className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Pagination */}
              <div className="flex items-center justify-between mt-8">
                <p className="text-sm text-gray-600">
                  Showing 1-{products.length} of {products.length} products
                </p>
                
                <div className="flex items-center space-x-2">
                  <Button variant="outline" size="sm" disabled={currentPage === 1}>
                    <ChevronLeft className="h-4 w-4 mr-1" />
                    Previous
                  </Button>
                  
                  <div className="flex space-x-1">
                    {[1, 2, 3].map((page) => (
                      <Button
                        key={page}
                        variant={currentPage === page ? 'default' : 'outline'}
                        size="sm"
                        onClick={() => setCurrentPage(page)}
                        className="w-10"
                      >
                        {page}
                      </Button>
                    ))}
                  </div>
                  
                  <Button variant="outline" size="sm">
                    Next
                    <ChevronRight className="h-4 w-4 ml-1" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    )
  }
}
