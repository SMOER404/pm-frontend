import React from 'react'
import {
  Container,
  Grid,
  Box,
  Section,
  Layout,
  ResponsiveImage,
  Stack,
  ImageList,
  Button,
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  Heading,
  Text,
  ResponsiveSpacing,
  ImageItem
} from './index'

// Sample images for ImageList
const sampleImages: ImageItem[] = [
  {
    src: "https://picsum.photos/400/300?random=1",
    alt: "Sample image 1",
    title: "Beautiful Landscape",
    description: "A stunning view of nature"
  },
  {
    src: "https://picsum.photos/400/300?random=2", 
    alt: "Sample image 2",
    title: "City Lights",
    description: "Urban night photography"
  },
  {
    src: "https://picsum.photos/400/300?random=3",
    alt: "Sample image 3", 
    title: "Mountain Peak",
    description: "High altitude adventure"
  },
  {
    src: "https://picsum.photos/400/300?random=4",
    alt: "Sample image 4",
    title: "Ocean Waves", 
    description: "Peaceful beach scene"
  }
]

export default function LayoutDemo() {
  return (
    <Layout
      header={
        <Box backgroundColor="primary" padding={4} className="text-center">
          <Heading level={1} className="text-primary-foreground">
            Layout Components Demo
          </Heading>
        </Box>
      }
      footer={
        <Box backgroundColor="muted" padding={4} className="text-center">
          <Text>Footer content</Text>
        </Box>
      }
    >
      {/* Container Demo */}
      <Section padding={{ xs: 4, md: 8 }} container>
        <Stack spacing={6}>
          <Heading level={2}>Container Component</Heading>
          
          <Container maxWidth="md" padding={4} backgroundColor="muted">
            <Text>This is a medium-width container with padding and background</Text>
          </Container>
          
          <Container maxWidth="lg" padding={{ xs: 2, md: 6 }} border>
            <Text>This is a large container with responsive padding and border</Text>
          </Container>
        </Stack>
      </Section>

      {/* Grid Demo */}
      <Section padding={{ xs: 4, md: 8 }} container>
        <Stack spacing={6}>
          <Heading level={2}>Grid Component</Heading>
          
          <Grid columns={{ xs: 1, sm: 2, md: 3 }} gap={4}>
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <Card key={i}>
                <CardHeader>
                  <CardTitle>Card {i}</CardTitle>
                </CardHeader>
                <CardContent>
                  <Text>This is card content {i}</Text>
                </CardContent>
              </Card>
            ))}
          </Grid>
        </Stack>
      </Section>

      {/* Box Demo */}
      <Section padding={{ xs: 4, md: 8 }} container>
        <Stack spacing={6}>
          <Heading level={2}>Box Component</Heading>
          
          <Grid columns={{ xs: 1, md: 2 }} gap={4}>
            <Box padding={4} backgroundColor="primary" borderRadius="lg">
              <Text className="text-primary-foreground">Primary colored box</Text>
            </Box>
            
            <Box padding={4} border borderRadius="xl" bevel>
              <Text>Box with bevel effect</Text>
            </Box>
          </Grid>
        </Stack>
      </Section>

      {/* Stack Demo */}
      <Section padding={{ xs: 4, md: 8 }} container>
        <Stack spacing={6}>
          <Heading level={2}>Stack Component</Heading>
          
          <Grid columns={{ xs: 1, md: 2 }} gap={6}>
            <Stack spacing={3} divider>
              <Text>Item 1</Text>
              <Text>Item 2</Text>
              <Text>Item 3</Text>
            </Stack>
            
            <Stack direction="horizontal" spacing={3} wrap>
              <Button size="sm">Button 1</Button>
              <Button size="sm">Button 2</Button>
              <Button size="sm">Button 3</Button>
            </Stack>
          </Grid>
        </Stack>
      </Section>

      {/* ResponsiveImage Demo */}
      <Section padding={{ xs: 4, md: 8 }} container>
        <Stack spacing={6}>
          <Heading level={2}>ResponsiveImage Component</Heading>
          
          <Grid columns={{ xs: 1, md: 2 }} gap={4}>
            <ResponsiveImage
              src="https://picsum.photos/800/600"
              alt="Responsive image demo"
              aspectRatio="16:9"
              responsiveSizes={{ xs: "full", md: "1/2" }}
            />
            
            <ResponsiveImage
              src="https://picsum.photos/600/600"
              alt="Square image demo"
              aspectRatio="1:1"
              objectFit="cover"
            />
          </Grid>
        </Stack>
      </Section>

      {/* ImageList Demo */}
      <Section padding={{ xs: 4, md: 8 }} container>
        <Stack spacing={6}>
          <Heading level={2}>ImageList Component</Heading>
          
          <Stack spacing={4}>
            <Heading level={3}>Grid Layout</Heading>
            <ImageList
              images={sampleImages}
              columns={{ xs: 1, sm: 2, md: 3, lg: 4 }}
              gap={4}
              aspectRatio="1:1"
            />
            
            <Heading level={3}>Gallery with Overlay</Heading>
            <ImageList
              images={sampleImages}
              variant="gallery"
              columns={{ xs: 1, sm: 2, md: 3 }}
              gap={3}
              overlay
              overlayContent={<Button>View Details</Button>}
              onImageClick={(index, image) => console.log('Clicked:', image.title)}
            />
          </Stack>
        </Stack>
      </Section>

      {/* Layout with Sidebar Demo */}
      <Section padding={{ xs: 4, md: 8 }} container>
        <Stack spacing={6}>
          <Heading level={2}>Layout with Sidebar</Heading>
          
          <Layout
            sidebar={
              <Box padding={4} backgroundColor="muted" className="h-fit">
                <Stack spacing={3}>
                  <Heading level={4}>Sidebar</Heading>
                  <Text>This is sidebar content</Text>
                  <Button>Sidebar Action</Button>
                </Stack>
              </Box>
            }
            gap={6}
          >
            <Box padding={6}>
              <Stack spacing={4}>
                <Heading level={3}>Main Content</Heading>
                <Text>
                  This is the main content area. The layout automatically adjusts
                  to accommodate the sidebar on larger screens and stacks vertically
                  on mobile devices.
                </Text>
                <Grid columns={{ xs: 1, md: 2 }} gap={4}>
                  <Card>
                    <CardContent>
                      <Text>Content card 1</Text>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent>
                      <Text>Content card 2</Text>
                    </CardContent>
                  </Card>
                </Grid>
              </Stack>
            </Box>
          </Layout>
        </Stack>
      </Section>
    </Layout>
  )
}
