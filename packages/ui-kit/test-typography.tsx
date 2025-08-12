import React from 'react'
import { Heading } from './components/ui/heading'
import { Text } from './components/ui/text'
import { Link } from './components/ui/link'
import { List, ListItem } from './components/ui/list'
import { Star, Check } from 'lucide-react'

export default function TypographyTest() {
  return (
    <div className="p-8 space-y-8">
      {/* Heading Test */}
      <div className="space-y-4">
        <h2>Heading Test</h2>
        <Heading level="h1" color="primary">Primary Color H1</Heading>
        <Heading level="h2" color="secondary">Secondary Color H2</Heading>
        <Heading level="h3" color="error">Error Color H3</Heading>
        <Heading level="h4" iconLeft={<Star className="h-5 w-5" />}>With Left Icon</Heading>
        <Heading level="h5" iconRight={<Check className="h-5 w-5" />}>With Right Icon</Heading>
      </div>

      {/* Text Test */}
      <div className="space-y-4">
        <h2>Text Test</h2>
        <Text type="body" size="md" weight="normal" color="primary">Body Text Primary</Text>
        <Text type="caption" size="sm" weight="bold" color="secondary">Caption Text Secondary</Text>
        <Text type="secondary" size="lg" weight="normal" color="muted">Secondary Text Muted</Text>
        <Text as="span" type="body" size="md">Span Element</Text>
        <Text as="div" type="body" size="md">Div Element</Text>
      </div>

      {/* Link Test */}
      <div className="space-y-4">
        <h2>Link Test</h2>
        <Link href="#" color="primary" underline="always">Primary Link</Link>
        <br />
        <Link href="#" color="secondary" underline="hover">Secondary Link</Link>
        <br />
        <Link href="#" color="muted" underline="none">Muted Link</Link>
        <br />
        <Link href="https://example.com" target="_blank">External Link</Link>
      </div>

      {/* List Test */}
      <div className="space-y-4">
        <h2>List Test</h2>
        
        <div>
          <h3>Unordered with dots (spacing: sm)</h3>
          <List type="unordered" marker="dot" spacing="sm">
            <ListItem>Item 1</ListItem>
            <ListItem>Item 2</ListItem>
            <ListItem>Item 3</ListItem>
          </List>
        </div>

        <div>
          <h3>Unordered with checks (spacing: md)</h3>
          <List type="unordered" marker="check" spacing="md">
            <ListItem>Check Item 1</ListItem>
            <ListItem>Check Item 2</ListItem>
            <ListItem>Check Item 3</ListItem>
          </List>
        </div>

        <div>
          <h3>Unordered without markers (spacing: lg)</h3>
          <List type="unordered" marker="none" spacing="lg">
            <ListItem>No Marker Item 1</ListItem>
            <ListItem>No Marker Item 2</ListItem>
            <ListItem>No Marker Item 3</ListItem>
          </List>
        </div>

        <div>
          <h3>Ordered list</h3>
          <List type="ordered" spacing="md">
            <ListItem>Ordered Item 1</ListItem>
            <ListItem>Ordered Item 2</ListItem>
            <ListItem>Ordered Item 3</ListItem>
          </List>
        </div>
      </div>
    </div>
  )
}
