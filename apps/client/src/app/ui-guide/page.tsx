'use client'

import React from 'react'
import {
  Button,
  Container,
  Text,
  Heading,
  Tabs, TabsList, TabsTrigger, TabsContent,
  Menu, MenuItem,
  Select, SelectTrigger, SelectValue, SelectContent, SelectItem,
  Checkbox, RadioGroup, Radio,
  Input,
  Separator,
  Badge,
  Accordion,
  Card,
  Chip,
  Progress,
  Rating,
  Skeleton, SkeletonText, SkeletonAvatar,
  Tooltip, TooltipProvider,
  Breadcrumb,
  Box,
  Stack,
  Grid,
  Section,
  BevelBox,
  Link,
  List,
  Label,
  Textarea,
  InputError,
  ToggleButton,
} from '@poizon/ui-kit'
import { 
  Heart, 
  Star, 
  ArrowRight, 
  Download, 
  Upload, 
  Plus, 
  Minus, 
  ChevronDown,
  User,
  Settings,
  LogOut,
  Info,
  ExternalLink,
  Home,
} from 'lucide-react'

export default function UiGuidePage() {
  const accordionItems = [
    {
      id: 'item-1',
      title: 'What is Poizon Market?',
      content: 'Poizon Market is a premium marketplace for fashion and lifestyle products, offering authentic items from top brands with fast delivery and excellent customer service.',
    },
    {
      id: 'item-2',
      title: 'How do I place an order?',
      content: 'Simply browse our catalog, add items to your cart, and proceed to checkout. You can pay with various methods including credit cards, PayPal, and bank transfers.',
    },
    {
      id: 'item-3',
      title: 'What is your return policy?',
      content: 'We offer a 30-day return policy for most items. Items must be in original condition with tags attached. Contact our support team to initiate a return.',
    },
  ]

  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Catalog', href: '/catalog' },
    { label: 'Shoes', href: '/catalog/shoes' },
    { label: 'Sneakers', href: '/catalog/shoes/sneakers' },
  ]

  return (
    <Container className="mt-10 mb-20">
      <Heading size="h1" className="mb-8 text-center">UI Kit — Complete Demo & Usage</Heading>
      
      {/* Typography Section */}
      <Section className="mb-12">
        <Heading size="h2" className="mb-6">Typography</Heading>
        
        <div className="space-y-6">
          <div>
            <Heading size="h3" className="mb-4">Headings</Heading>
            <div className="space-y-4">
              <Heading size="h1">Heading H1 (32px)</Heading>
              <Heading size="h2">Heading H2 (28px)</Heading>
              <Heading size="h3">Heading H3 (24px)</Heading>
              <Heading size="h4">Heading H4 (20px)</Heading>
              <Heading size="h5">Heading H5 (18px)</Heading>
              <Heading size="h6">Heading H6 (16px)</Heading>
            </div>
          </div>

          <div>
            <Heading size="h3" className="mb-4">Text Variants</Heading>
            <div className="space-y-2">
              <Text type="body" size="lg" weight="bold">Large Bold Text</Text>
              <Text type="body" size="md" weight="normal">Medium Normal Text</Text>
              <Text type="body" size="sm" weight="normal">Small Normal Text</Text>
              <Text type="caption" size="sm" color="muted">Caption Text</Text>
              <Text type="secondary" size="md" color="secondary">Secondary Text</Text>
            </div>
          </div>

          <div>
            <Heading size="h3" className="mb-4">Headings with Icons</Heading>
            <div className="space-y-4">
              <Heading size="h3" iconLeft={<Star className="h-6 w-6" />}>
                Heading with Left Icon
              </Heading>
              <Heading size="h3" iconRight={<ArrowRight className="h-6 w-6" />}>
                Heading with Right Icon
              </Heading>
            </div>
          </div>
        </div>
      </Section>

      <Separator />

      {/* Buttons Section */}
      <Section className="mb-12">
        <Heading size="h2" className="mb-6">Buttons</Heading>
        
        <div className="space-y-6">
          <div>
            <Heading size="h3" className="mb-4">Variants</Heading>
            <div className="flex flex-wrap gap-3">
              <Button variant="default">Default</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="outlined">Outlined</Button>
              <Button variant="ghost">Ghost</Button>
            </div>
          </div>

          <div>
            <Heading size="h3" className="mb-4">Sizes</Heading>
            <div className="flex flex-wrap items-center gap-3">
              <Button size="sm">Small</Button>
              <Button size="default">Default</Button>
              <Button size="lg">Large</Button>
              <Button size="xl">Extra Large</Button>
            </div>
          </div>

          <div>
            <Heading size="h3" className="mb-4">With Icons</Heading>
            <div className="flex flex-wrap gap-3">
              <Button leftIcon={<Heart className="h-4 w-4" />}>
                Like
              </Button>
              <Button rightIcon={<ArrowRight className="h-4 w-4" />}>
                Continue
              </Button>
              <Button startIcon={<Download className="h-4 w-4" />}>
                Download
              </Button>
              <Button endIcon={<Upload className="h-4 w-4" />}>
                Upload
              </Button>
            </div>
          </div>

          <div>
            <Heading size="h3" className="mb-4">Icon Buttons</Heading>
            <div className="flex flex-wrap items-center gap-3">
              <Button size="icon-sm" variant="default">
                <Heart className="h-4 w-4" />
              </Button>
              <Button size="icon" variant="secondary">
                <Star className="h-4 w-4" />
              </Button>
              <Button size="icon-lg" variant="outlined">
                <ArrowRight className="h-6 w-6" />
              </Button>
            </div>
          </div>

          <div>
            <Heading size="h3" className="mb-4">States</Heading>
            <div className="flex flex-wrap gap-3">
              <Button loading>Loading...</Button>
              <Button loading loadingText="Saving...">Save</Button>
              <Button disabled>Disabled</Button>
            </div>
          </div>

          <div>
            <Heading size="h3" className="mb-4">Full Width</Heading>
            <div className="w-full max-w-md space-y-3">
              <Button fullWidth>Full Width Button</Button>
              <Button fullWidth variant="secondary">Full Width Secondary</Button>
            </div>
          </div>
        </div>
      </Section>

      <Separator />

      {/* Form Controls Section */}
      <Section className="mb-12">
        <Heading size="h2" className="mb-6">Form Controls</Heading>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div>
              <Heading size="h3" className="mb-4">Input Fields</Heading>
              <div className="space-y-3">
                <Input placeholder="Введите текст" />
                <Input placeholder="Email" type="email" />
                <Input placeholder="Password" type="password" />
                <InputError error="This field is required" />
              </div>
            </div>

            <div>
              <Heading size="h3" className="mb-4">Textarea</Heading>
              <Textarea placeholder="Введите сообщение" rows={4} />
            </div>

            <div>
              <Heading size="h3" className="mb-4">Checkboxes</Heading>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Checkbox id="cb-1" />
                  <Label htmlFor="cb-1">Checkbox 1</Label>
                </div>
                <div className="flex items-center gap-3">
                  <Checkbox id="cb-2" defaultChecked />
                  <Label htmlFor="cb-2">Checkbox 2 (checked)</Label>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <Heading size="h3" className="mb-4">Radio Groups</Heading>
              <RadioGroup
                defaultValue="a"
                options={[
                  { value: 'a', label: 'Option A' },
                  { value: 'b', label: 'Option B' },
                  { value: 'c', label: 'Option C' },
                ]}
              />
            </div>

            <div>
              <Heading size="h3" className="mb-4">Select</Heading>
              <div className="space-y-4">
                <Select>
                  <SelectTrigger className="w-64">
                    <SelectValue placeholder="Выберите значение" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="option-1">Option 1</SelectItem>
                    <SelectItem value="option-2">Option 2</SelectItem>
                    <SelectItem value="option-3">Option 3</SelectItem>
                  </SelectContent>
                </Select>
                
                <Select disabled>
                  <SelectTrigger className="w-64">
                    <SelectValue placeholder="Disabled Select" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="option-1">Option 1</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div>
              <Heading size="h3" className="mb-4">Toggle Button</Heading>
              <div className="flex gap-2">
                <ToggleButton pressed={false}>Toggle Off</ToggleButton>
                <ToggleButton pressed={true}>Toggle On</ToggleButton>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Separator />

      {/* Navigation Components */}
      <Section className="mb-12">
        <Heading size="h2" className="mb-6">Navigation Components</Heading>
        
        <div className="space-y-6">
          <div>
            <Heading size="h3" className="mb-4">Tabs</Heading>
            <div className="space-y-4">
              <Tabs defaultValue="one" className="w-full">
                <TabsList>
                  <TabsTrigger value="one">Tab One</TabsTrigger>
                  <TabsTrigger value="two">Tab Two</TabsTrigger>
                </TabsList>
                <TabsContent value="one" className="pt-4">
                  <Text type="body" size="md">Content of Tab One</Text>
                </TabsContent>
                <TabsContent value="two" className="pt-4">
                  <Text type="body" size="md">Content of Tab Two</Text>
                </TabsContent>
              </Tabs>
              
              <Tabs defaultValue="account" className="w-full">
                <TabsList>
                  <TabsTrigger value="account">Account</TabsTrigger>
                  <TabsTrigger value="settings">Settings</TabsTrigger>
                </TabsList>
                <TabsContent value="account" className="pt-4">
                  <Text type="body" size="md">Account settings content</Text>
                </TabsContent>
                <TabsContent value="settings" className="pt-4">
                  <Text type="body" size="md">Settings content</Text>
                </TabsContent>
              </Tabs>
            </div>
          </div>

          <div>
            <Heading size="h3" className="mb-4">Menu</Heading>
            <div className="flex flex-wrap gap-4">
              <Menu trigger={<Button variant="outlined">Open Menu</Button>}>
                <MenuItem icon={<User className="h-4 w-4" />}>Profile</MenuItem>
                <MenuItem icon={<Settings className="h-4 w-4" />}>Settings</MenuItem>
                <MenuItem icon={<LogOut className="h-4 w-4" />}>Logout</MenuItem>
              </Menu>
            </div>
          </div>

          <div>
            <Heading size="h3" className="mb-4">Breadcrumb</Heading>
            <Breadcrumb items={breadcrumbItems} />
          </div>
        </div>
      </Section>

      <Separator />

      {/* Data Display Components */}
      <Section className="mb-12">
        <Heading size="h2" className="mb-6">Data Display Components</Heading>
        
        <div className="space-y-6">
          <div>
            <Heading size="h3" className="mb-4">Badges</Heading>
            <div className="flex flex-wrap gap-3">
              <Badge>Default Badge</Badge>
              <Badge variant="secondary">Secondary</Badge>
              <Badge variant="outline">Outline</Badge>
              <Badge variant="destructive">Destructive</Badge>
            </div>
          </div>

          <div>
            <Heading size="h3" className="mb-4">Chips</Heading>
            <div className="flex flex-wrap gap-3">
              <Chip>Default Chip</Chip>
              <Chip variant="secondary">Secondary</Chip>
              <Chip variant="outline">Outline</Chip>
              <Chip removable>Removable</Chip>
            </div>
          </div>

          <div>
            <Heading size="h3" className="mb-4">Cards</Heading>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <Card className="p-6">
                <Heading size="h4" className="mb-2">Card Title</Heading>
                <Text type="body" size="sm" color="muted" className="mb-4">
                  This is a sample card with some content to demonstrate the card component.
                </Text>
                <Button size="sm">Learn More</Button>
              </Card>
              
              <Card className="p-6">
                <Heading size="h4" className="mb-2">Another Card</Heading>
                <Text type="body" size="sm" color="muted" className="mb-4">
                  Cards can contain various content including text, buttons, and other components.
                </Text>
                <Button size="sm" variant="outlined">View Details</Button>
              </Card>
            </div>
          </div>

          <div>
            <Heading size="h3" className="mb-4">Accordion</Heading>
            <Accordion items={accordionItems} allowMultiple={true} />
          </div>

          <div>
            <Heading size="h3" className="mb-4">Rating</Heading>
            <div className="space-y-4">
              <Rating value={3} maxValue={5} />
              <Rating value={4.5} maxValue={5} showValue />
              <Rating value={2} maxValue={5} size="lg" />
            </div>
          </div>

          <div>
            <Heading size="h3" className="mb-4">Progress</Heading>
            <div className="space-y-4">
              <Progress value={25} />
              <Progress value={50} />
              <Progress value={75} />
              <Progress value={100} />
            </div>
          </div>

          <div>
            <Heading size="h3" className="mb-4">Skeleton</Heading>
            <div className="space-y-4">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-3/4" />
              <Skeleton className="h-4 w-1/2" />
              <div className="flex items-center space-x-4">
                <SkeletonAvatar />
                <div className="space-y-2">
                  <SkeletonText />
                  <SkeletonText />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Separator />

      {/* Layout Components */}
      <Section className="mb-12">
        <Heading size="h2" className="mb-6">Layout Components</Heading>
        
        <div className="space-y-6">
          <div>
            <Heading size="h3" className="mb-4">Box</Heading>
            <div className="flex gap-4">
              <Box className="p-4 bg-primary/10 rounded-lg">
                <Text type="body" size="sm">Primary Box</Text>
              </Box>
              <Box className="p-4 bg-secondary/10 rounded-lg">
                <Text type="body" size="sm">Secondary Box</Text>
              </Box>
            </div>
          </div>

          <div>
            <Heading size="h3" className="mb-4">Stack</Heading>
            <Stack direction="vertical" spacing="md" className="max-w-md">
              <Box className="p-3 bg-gray-100 rounded">Item 1</Box>
              <Box className="p-3 bg-gray-100 rounded">Item 2</Box>
              <Box className="p-3 bg-gray-100 rounded">Item 3</Box>
            </Stack>
          </div>

          <div>
            <Heading size="h3" className="mb-4">Grid</Heading>
            <Grid columns={3} gap="md">
              <Box className="p-4 bg-gray-100 rounded">Grid Item 1</Box>
              <Box className="p-4 bg-gray-100 rounded">Grid Item 2</Box>
              <Box className="p-4 bg-gray-100 rounded">Grid Item 3</Box>
              <Box className="p-4 bg-gray-100 rounded">Grid Item 4</Box>
              <Box className="p-4 bg-gray-100 rounded">Grid Item 5</Box>
              <Box className="p-4 bg-gray-100 rounded">Grid Item 6</Box>
            </Grid>
          </div>

          <div>
            <Heading size="h3" className="mb-4">BevelBox</Heading>
            <div className="flex gap-4">
              <BevelBox className="w-32 h-20 flex items-center justify-center">
                <Text type="body" size="sm" weight="bold">BevelBox</Text>
              </BevelBox>
              <BevelBox variant="secondary" className="w-32 h-20 flex items-center justify-center">
                <Text type="body" size="sm" weight="bold" color="secondary">Secondary</Text>
              </BevelBox>
            </div>
          </div>
        </div>
      </Section>

      <Separator />

      {/* Utility Components */}
      <Section className="mb-12">
        <Heading size="h2" className="mb-6">Utility Components</Heading>
        
        <div className="space-y-6">
          <div>
            <Heading size="h3" className="mb-4">Links</Heading>
            <div className="flex gap-4">
              <Link href="#" color="primary">Default Link</Link>
              <Link href="#" color="secondary">Secondary Link</Link>
              <Link href="#" color="muted">Muted Link</Link>
              <Link href="#" color="primary" showExternalIcon>
                External Link
              </Link>
            </div>
          </div>

          <div>
            <Heading size="h3" className="mb-4">Lists</Heading>
            <List
              items={[
                'First list item',
                'Second list item',
                'Third list item',
              ]}
              type="unordered"
            />
          </div>

          <div>
            <Heading size="h3" className="mb-4">Separators</Heading>
            <div className="space-y-4">
              <Text type="body" size="sm">Content above separator</Text>
              <Separator />
              <Text type="body" size="sm">Content below separator</Text>
            </div>
          </div>

          <div>
            <Heading size="h3" className="mb-4">Tooltips</Heading>
            <TooltipProvider>
              <div className="flex gap-4">
                <Tooltip content="This is a tooltip">
                  <Button variant="outlined">Hover me</Button>
                </Tooltip>
                
                <Tooltip content="Information tooltip">
                  <Button variant="ghost">
                    <Info className="h-4 w-4" />
                  </Button>
                </Tooltip>
              </div>
            </TooltipProvider>
          </div>
        </div>
      </Section>

      <Separator />

      {/* Color Palette */}
      <Section className="mb-12">
        <Heading size="h2" className="mb-6">Color Palette</Heading>
        
        <div className="space-y-6">
          <div>
            <Heading size="h3" className="mb-4">Primary Colors</Heading>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-lg mx-auto mb-2"></div>
                <Text type="caption" size="sm">Primary</Text>
                <Text type="caption" size="sm" color="muted">#AFEB0F</Text>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-secondary rounded-lg mx-auto mb-2"></div>
                <Text type="caption" size="sm">Secondary</Text>
                <Text type="caption" size="sm" color="muted">#292D30</Text>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-background border border-gray-300 rounded-lg mx-auto mb-2"></div>
                <Text type="caption" size="sm">Background</Text>
                <Text type="caption" size="sm" color="muted">#FFFFFF</Text>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-muted rounded-lg mx-auto mb-2"></div>
                <Text type="caption" size="sm">Muted</Text>
                <Text type="caption" size="sm" color="muted">#F5F5F5</Text>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-destructive rounded-lg mx-auto mb-2"></div>
                <Text type="caption" size="sm">Destructive</Text>
                <Text type="caption" size="sm" color="muted">#EF4444</Text>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Separator />

      {/* Typography Scale */}
      <Section className="mb-12">
        <Heading size="h2" className="mb-6">Typography Scale</Heading>
        
        <div className="space-y-4">
          <div className="space-y-2">
            <Text type="body" size="sm" color="muted">Font Family: Azorath</Text>
            <Text type="body" size="sm" color="muted">Font Family (Headings): DrukTextCyr</Text>
          </div>
          
          <div className="space-y-2">
            <Text type="body" size="sm" weight="bold">Small (14px / 20px line-height)</Text>
            <Text type="body" size="md" weight="bold">Medium (16px / 24px line-height)</Text>
            <Text type="body" size="lg" weight="bold">Large (18px / 28px line-height)</Text>
          </div>
        </div>
      </Section>

    </Container>
  )
}