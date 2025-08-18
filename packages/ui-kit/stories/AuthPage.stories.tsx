import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import { Button } from '../components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card'
import { Input } from '../components/ui/input'
import { Label } from '../components/ui/label'
import { Badge } from '../components/ui/badge'
import { Separator } from '../components/ui/separator'
import { Checkbox } from '../components/ui/checkbox'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs'
import { 
  Mail,
  Lock,
  Eye,
  EyeOff,
  User,
  Phone,
  Calendar,
  MapPin,
  Shield,
  CheckCircle,
  AlertCircle,
  ArrowRight,
  ArrowLeft,
  Github,
  Chrome,
  Facebook,
  Twitter,
  Instagram,
  Heart,
  ShoppingCart,
  Users
} from 'lucide-react'

const meta: Meta = {
  title: 'Pages/AuthPage',
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => {
    const [activeTab, setActiveTab] = React.useState('login')
    const [showPassword, setShowPassword] = React.useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = React.useState(false)
    const [rememberMe, setRememberMe] = React.useState(false)
    const [agreeToTerms, setAgreeToTerms] = React.useState(false)
    const [isLoading, setIsLoading] = React.useState(false)

    const [loginForm, setLoginForm] = React.useState({
      email: '',
      password: ''
    })

    const [registerForm, setRegisterForm] = React.useState({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      password: '',
      confirmPassword: '',
      birthDate: '',
      address: ''
    })

    const [resetForm, setResetForm] = React.useState({
      email: ''
    })

    const handleLogin = (e: React.FormEvent) => {
      e.preventDefault()
      setIsLoading(true)
      setTimeout(() => {
        setIsLoading(false)
        console.log('Login:', loginForm)
      }, 2000)
    }

    const handleRegister = (e: React.FormEvent) => {
      e.preventDefault()
      setIsLoading(true)
      setTimeout(() => {
        setIsLoading(false)
        console.log('Register:', registerForm)
      }, 2000)
    }

    const handleResetPassword = (e: React.FormEvent) => {
      e.preventDefault()
      setIsLoading(true)
      setTimeout(() => {
        setIsLoading(false)
        console.log('Reset password:', resetForm)
      }, 2000)
    }

    const socialProviders = [
      { name: 'Google', icon: Chrome, color: 'bg-red-500 hover:bg-red-600' },
      { name: 'Facebook', icon: Facebook, color: 'bg-blue-600 hover:bg-blue-700' },
      { name: 'Twitter', icon: Twitter, color: 'bg-sky-500 hover:bg-sky-600' },
      { name: 'GitHub', icon: Github, color: 'bg-gray-800 hover:bg-gray-900' }
    ]

    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        <header className="bg-white/80 backdrop-blur-sm border-b sticky top-0 z-50">
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

        <main className="flex items-center justify-center min-h-[calc(100vh-4rem)] p-4">
          <div className="w-full max-w-md">
            <Card className="shadow-xl">
              <CardHeader className="text-center pb-6">
                <div className="mx-auto w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle className="text-2xl">Welcome back</CardTitle>
                <CardDescription>
                  Sign in to your account or create a new one
                </CardDescription>
              </CardHeader>
              
              <CardContent className="p-6">
                <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                  <TabsList className="grid w-full grid-cols-3 mb-6">
                    <TabsTrigger value="login">Login</TabsTrigger>
                    <TabsTrigger value="register">Register</TabsTrigger>
                    <TabsTrigger value="reset">Reset</TabsTrigger>
                  </TabsList>

                  <TabsContent value="login" className="space-y-4">
                    <form onSubmit={handleLogin} className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="login-email">Email</Label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                          <Input
                            id="login-email"
                            type="email"
                            placeholder="Enter your email"
                            value={loginForm.email}
                            onChange={(e) => setLoginForm(prev => ({ ...prev, email: e.target.value }))}
                            className="pl-10"
                            required
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="login-password">Password</Label>
                        <div className="relative">
                          <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                          <Input
                            id="login-password"
                            type={showPassword ? 'text' : 'password'}
                            placeholder="Enter your password"
                            value={loginForm.password}
                            onChange={(e) => setLoginForm(prev => ({ ...prev, password: e.target.value }))}
                            className="pl-10 pr-10"
                            required
                          />
                          <Button
                            type="button"
                            variant="ghost"
                            size="icon"
                            className="absolute right-1 top-1 h-8 w-8"
                            onClick={() => setShowPassword(!showPassword)}
                          >
                            {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                          </Button>
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id="remember-me"
                            checked={rememberMe}
                            onCheckedChange={(checked) => setRememberMe(checked === true)}
                          />
                          <Label htmlFor="remember-me" className="text-sm">
                            Remember me
                          </Label>
                        </div>
                        <Button
                          type="button"
                          variant="ghost"
                          className="text-sm text-blue-600 hover:text-blue-700"
                          onClick={() => setActiveTab('reset')}
                        >
                          Forgot password?
                        </Button>
                      </div>

                      <Button type="submit" className="w-full" disabled={isLoading}>
                        {isLoading ? (
                          <div className="flex items-center">
                            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                            Signing in...
                          </div>
                        ) : (
                          <>
                            Sign In
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </>
                        )}
                      </Button>
                    </form>

                    <Separator />

                    <div className="space-y-3">
                      <p className="text-center text-sm text-gray-600">Or continue with</p>
                      <div className="grid grid-cols-2 gap-3">
                        {socialProviders.map((provider) => (
                          <Button
                            key={provider.name}
                            variant="outlined"
                            className={provider.color}
                          >
                            <provider.icon className="h-4 w-4 mr-2" />
                            {provider.name}
                          </Button>
                        ))}
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="register" className="space-y-4">
                    <form onSubmit={handleRegister} className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="first-name">First Name</Label>
                          <div className="relative">
                            <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                            <Input
                              id="first-name"
                              placeholder="John"
                              value={registerForm.firstName}
                              onChange={(e) => setRegisterForm(prev => ({ ...prev, firstName: e.target.value }))}
                              className="pl-10"
                              required
                            />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="last-name">Last Name</Label>
                          <div className="relative">
                            <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                            <Input
                              id="last-name"
                              placeholder="Doe"
                              value={registerForm.lastName}
                              onChange={(e) => setRegisterForm(prev => ({ ...prev, lastName: e.target.value }))}
                              className="pl-10"
                              required
                            />
                          </div>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="register-email">Email</Label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                          <Input
                            id="register-email"
                            type="email"
                            placeholder="john@example.com"
                            value={registerForm.email}
                            onChange={(e) => setRegisterForm(prev => ({ ...prev, email: e.target.value }))}
                            className="pl-10"
                            required
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <div className="relative">
                          <Phone className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                          <Input
                            id="phone"
                            type="tel"
                            placeholder="+1 (555) 123-4567"
                            value={registerForm.phone}
                            onChange={(e) => setRegisterForm(prev => ({ ...prev, phone: e.target.value }))}
                            className="pl-10"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="birth-date">Birth Date</Label>
                        <div className="relative">
                          <Calendar className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                          <Input
                            id="birth-date"
                            type="date"
                            value={registerForm.birthDate}
                            onChange={(e) => setRegisterForm(prev => ({ ...prev, birthDate: e.target.value }))}
                            className="pl-10"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="address">Address</Label>
                        <div className="relative">
                          <MapPin className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                          <Input
                            id="address"
                            placeholder="123 Main St, City, State"
                            value={registerForm.address}
                            onChange={(e) => setRegisterForm(prev => ({ ...prev, address: e.target.value }))}
                            className="pl-10"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="register-password">Password</Label>
                        <div className="relative">
                          <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                          <Input
                            id="register-password"
                            type={showPassword ? 'text' : 'password'}
                            placeholder="Create a password"
                            value={registerForm.password}
                            onChange={(e) => setRegisterForm(prev => ({ ...prev, password: e.target.value }))}
                            className="pl-10 pr-10"
                            required
                          />
                          <Button
                            type="button"
                            variant="ghost"
                            size="icon"
                            className="absolute right-1 top-1 h-8 w-8"
                            onClick={() => setShowPassword(!showPassword)}
                          >
                            {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                          </Button>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="confirm-password">Confirm Password</Label>
                        <div className="relative">
                          <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                          <Input
                            id="confirm-password"
                            type={showConfirmPassword ? 'text' : 'password'}
                            placeholder="Confirm your password"
                            value={registerForm.confirmPassword}
                            onChange={(e) => setRegisterForm(prev => ({ ...prev, confirmPassword: e.target.value }))}
                            className="pl-10 pr-10"
                            required
                          />
                          <Button
                            type="button"
                            variant="ghost"
                            size="icon"
                            className="absolute right-1 top-1 h-8 w-8"
                            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                          >
                            {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                          </Button>
                        </div>
                      </div>

                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="agree-terms"
                          checked={agreeToTerms}
                          onCheckedChange={(checked) => setAgreeToTerms(checked === true)}
                          required
                        />
                        <Label htmlFor="agree-terms" className="text-sm">
                          I agree to the{' '}
                          <a href="#" className="text-blue-600 hover:underline">
                            Terms of Service
                          </a>{' '}
                          and{' '}
                          <a href="#" className="text-blue-600 hover:underline">
                            Privacy Policy
                          </a>
                        </Label>
                      </div>

                      <Button type="submit" className="w-full" disabled={isLoading || !agreeToTerms}>
                        {isLoading ? (
                          <div className="flex items-center">
                            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                            Creating account...
                          </div>
                        ) : (
                          <>
                            Create Account
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </>
                        )}
                      </Button>
                    </form>

                    <Separator />

                    <div className="space-y-3">
                      <p className="text-center text-sm text-gray-600">Or sign up with</p>
                      <div className="grid grid-cols-2 gap-3">
                        {socialProviders.map((provider) => (
                          <Button
                            key={provider.name}
                            variant="outlined"
                            className={provider.color}
                          >
                            <provider.icon className="h-4 w-4 mr-2" />
                            {provider.name}
                          </Button>
                        ))}
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="reset" className="space-y-4">
                    <div className="text-center mb-6">
                      <div className="mx-auto w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                        <Mail className="h-6 w-6 text-orange-600" />
                      </div>
                      <h3 className="text-lg font-semibold mb-2">Reset your password</h3>
                      <p className="text-sm text-gray-600">
                        Enter your email address and we'll send you a link to reset your password.
                      </p>
                    </div>

                    <form onSubmit={handleResetPassword} className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="reset-email">Email</Label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                          <Input
                            id="reset-email"
                            type="email"
                            placeholder="Enter your email"
                            value={resetForm.email}
                            onChange={(e) => setResetForm(prev => ({ ...prev, email: e.target.value }))}
                            className="pl-10"
                            required
                          />
                        </div>
                      </div>

                      <Button type="submit" className="w-full" disabled={isLoading}>
                        {isLoading ? (
                          <div className="flex items-center">
                            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                            Sending reset link...
                          </div>
                        ) : (
                          <>
                            Send Reset Link
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </>
                        )}
                      </Button>
                    </form>

                    <div className="text-center">
                      <Button
                        variant="ghost"
                        onClick={() => setActiveTab('login')}
                        className="text-sm text-blue-600 hover:text-blue-700"
                      >
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        Back to login
                      </Button>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-center p-4 bg-white/50 backdrop-blur-sm rounded-lg">
                <Shield className="h-8 w-8 mx-auto text-blue-600 mb-2" />
                <h3 className="font-semibold text-sm mb-1">Secure</h3>
                <p className="text-xs text-gray-600">Bank-level security</p>
              </div>
              <div className="text-center p-4 bg-white/50 backdrop-blur-sm rounded-lg">
                <CheckCircle className="h-8 w-8 mx-auto text-green-600 mb-2" />
                <h3 className="font-semibold text-sm mb-1">Verified</h3>
                <p className="text-xs text-gray-600">Email verification</p>
              </div>
              <div className="text-center p-4 bg-white/50 backdrop-blur-sm rounded-lg">
                <AlertCircle className="h-8 w-8 mx-auto text-orange-600 mb-2" />
                <h3 className="font-semibold text-sm mb-1">Protected</h3>
                <p className="text-xs text-gray-600">Data encryption</p>
              </div>
            </div>
          </div>
        </main>
      </div>
    )
  }
}
