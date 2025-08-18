'use client'

import { 
  Layout, 
  Box, 
  Container, 
  Grid, 
  Stack, 
  Heading, 
  Text, 
  Button, 
  Card, 
  CardHeader, 
  CardTitle, 
  CardContent,
  ResponsiveImage,
  Section
} from '@poizon/ui-kit'
import { ProductResponse } from '@poizon/api/src/recommendations-api/models'

// Компонент карточки товара
const ProductCard = ({ product }: { product: ProductResponse }) => {
  const getPrice = (variants: any[]) => {
    if (!variants || variants.length === 0) return 0
    return Math.min(...variants.map((variant: any) => variant.priceCny || 0))
  }

  return (
    <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      <CardHeader className="p-0">
        <ResponsiveImage
          src={product.media?.[0] || 'https://picsum.photos/400/300'}
          alt={product.name}
          aspectRatio="1:1"
          objectFit="cover"
          className="rounded-t-lg"
        />
      </CardHeader>
      <CardContent className="p-4">
        <Stack spacing={3}>
          <Text type="body" size="sm" className="font-medium line-clamp-2 text-gray-900">
            {product.name}
          </Text>
          <Text type="body" size="lg" weight="bold" color="primary">
            от {getPrice(product.variants || [])} ₽
          </Text>
          {product.brandData && (
            <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold bg-gray-50">
              {product.brandData.name}
            </div>
          )}
        </Stack>
      </CardContent>
    </Card>
  )
}

// Компонент секции товаров
const ProductSection = ({ 
  title, 
  products, 
  viewAllLink 
}: { 
  title: string
  products: ProductResponse[]
  viewAllLink?: string 
}) => {
  return (
    <Section padding={{ xs: 6, md: 8 }} container>
      <Stack spacing={6}>
        <Box className="flex justify-between items-center">
          <Heading size="h2">{title}</Heading>
          {viewAllLink && (
            <Button variant="ghost" size="sm" asChild>
              <a href={viewAllLink}>Все модели →</a>
            </Button>
          )}
        </Box>
        
        <Grid columns={{ xs: 1, sm: 2, md: 3, lg: 4 }} gap={6}>
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </Grid>
      </Stack>
    </Section>
  )
}

// Компонент преимущества
const FeatureCard = ({ 
  icon, 
  title, 
  description 
}: { 
  icon: string
  title: string
  description: string 
}) => {
  return (
    <Card className="text-center hover:shadow-lg transition-shadow">
      <CardContent className="p-6">
        <Box className="w-16 h-16 bg-primary rounded-full mx-auto mb-4 flex items-center justify-center">
          <Text className="text-primary-foreground text-2xl">{icon}</Text>
        </Box>
        <Heading size="h4" className="mb-2">{title}</Heading>
        <Text type="body" size="sm" color="muted">
          {description}
        </Text>
      </CardContent>
    </Card>
  )
}

interface HomePageContentProps {
  popularProducts: ProductResponse[]
  trendingProducts: ProductResponse[]
}

export function HomePageContent({ popularProducts, trendingProducts }: HomePageContentProps) {
  return (
    <Layout
      header={
        <Box backgroundColor="primary" padding={4}>
          <Container>
            <Stack direction="horizontal" spacing={6} className="justify-between items-center">
              <Heading size="h3" className="text-primary-foreground">
                POIZON MARKET
              </Heading>
              <Stack direction="horizontal" spacing={4}>
                <Button variant="ghost" size="sm" className="text-primary-foreground" asChild>
                  <a href="/catalog">Каталог</a>
                </Button>
                <Button variant="ghost" size="sm" className="text-primary-foreground" asChild>
                  <a href="/about">О нас</a>
                </Button>
                <Button variant="ghost" size="sm" className="text-primary-foreground" asChild>
                  <a href="/contacts">Контакты</a>
                </Button>
              </Stack>
            </Stack>
          </Container>
        </Box>
      }
      footer={
        <Box backgroundColor="muted" padding={6}>
          <Container>
            <Stack spacing={6}>
              <Grid columns={{ xs: 1, md: 3 }} gap={6}>
                <Stack spacing={3}>
                  <Heading size="h4">POIZON MARKET</Heading>
                  <Text type="body" size="sm" color="muted">
                    Официальный маркетплейс POIZON в России
                  </Text>
                </Stack>
                <Stack spacing={3}>
                  <Heading size="h5">Информация</Heading>
                  <Stack spacing={2}>
                    <Text type="body" size="sm" color="muted">О компании</Text>
                    <Text type="body" size="sm" color="muted">Доставка</Text>
                    <Text type="body" size="sm" color="muted">Оплата</Text>
                  </Stack>
                </Stack>
                <Stack spacing={3}>
                  <Heading size="h5">Контакты</Heading>
                  <Stack spacing={2}>
                    <Text type="body" size="sm" color="muted">+7 (999) 123-45-67</Text>
                    <Text type="body" size="sm" color="muted">info@poizonmarket.ru</Text>
                  </Stack>
                </Stack>
              </Grid>
              <Box className="border-t pt-4">
                <Text type="body" size="sm" color="muted" className="text-center">
                  © 2024 POIZON MARKET. Все права защищены.
                </Text>
              </Box>
            </Stack>
          </Container>
        </Box>
      }
    >
      {/* Hero Section */}
      <Section padding={{ xs: 8, md: 12 }} container>
        <Box 
          padding={{ xs: 8, md: 12 }} 
          backgroundColor="primary" 
          borderRadius="xl"
          className="text-center"
        >
          <Stack spacing={8} className="max-w-3xl mx-auto">
            <Heading size="h1" className="text-primary-foreground">
              POIZON MARKET
            </Heading>
            <Text type="body" size="lg" className="text-primary-foreground/90">
              Официальный маркетплейс POIZON в России. Стильная одежда и аксессуары от лучших брендов.
            </Text>
            <Stack direction="horizontal" spacing={4} className="justify-center">
              <Button size="lg" variant="secondary" asChild>
                <a href="/catalog">Перейти в каталог</a>
              </Button>
              <Button size="lg" variant="outlined" className="text-primary-foreground border-primary-foreground" asChild>
                <a href="/about">Узнать больше</a>
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Section>

      {/* Популярные товары */}
      {popularProducts.length > 0 && (
        <ProductSection 
          title="Популярные товары" 
          products={popularProducts.slice(0, 4)}
          viewAllLink="/catalog"
        />
      )}

      {/* Трендовые товары */}
      {trendingProducts.length > 0 && (
        <ProductSection 
          title="В тренде" 
          products={trendingProducts.slice(0, 4)}
          viewAllLink="/catalog"
        />
      )}

      {/* Преимущества */}
      <Section padding={{ xs: 8, md: 12 }} container>
        <Stack spacing={8}>
          <Heading size="h2" align="center">Почему POIZON MARKET?</Heading>
          
          <Grid columns={{ xs: 1, md: 3 }} gap={6}>
            <FeatureCard 
              icon="🚀"
              title="Быстрая доставка"
              description="Доставляем по всей России от 9 до 25 дней"
            />
            <FeatureCard 
              icon="✅"
              title="Гарантия качества"
              description="Все товары проходят проверку на подлинность"
            />
            <FeatureCard 
              icon="💰"
              title="Лучшие цены"
              description="Прямые поставки от производителей"
            />
          </Grid>
        </Stack>
      </Section>

      {/* CTA Section */}
      <Section padding={{ xs: 6, md: 8 }} container>
        <Box 
          padding={{ xs: 8, md: 12 }} 
          backgroundColor="muted" 
          borderRadius="xl"
          className="text-center"
        >
          <Stack spacing={6} className="max-w-2xl mx-auto">
            <Heading size="h2">Готовы к покупкам?</Heading>
            <Text type="body" size="lg" color="muted">
              Присоединяйтесь к тысячам довольных клиентов POIZON MARKET
            </Text>
            <Button size="lg" asChild>
              <a href="/catalog">Начать покупки</a>
            </Button>
          </Stack>
        </Box>
      </Section>
    </Layout>
  )
}
