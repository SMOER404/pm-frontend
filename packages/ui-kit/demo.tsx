import React from 'react';
import { Button, Card, CardContent, CardDescription, CardHeader, CardTitle, Input } from './index';

export default function Demo() {
  return (
    <div className="p-8 space-y-8">
      <div>
        <h2 className="text-2xl font-bold mb-4">Button Component</h2>
        <div className="flex flex-wrap gap-4">
          <Button variant="default">Default Button</Button>
          <Button variant="secondary">Secondary Button</Button>
          <Button variant="outlined">Outlined Button</Button>
          <Button variant="ghost">Ghost Button</Button>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">Button Sizes</h2>
        <div className="flex flex-wrap items-center gap-4">
          <Button size="sm">Small</Button>
          <Button size="default">Default</Button>
          <Button size="lg">Large</Button>
          <Button size="xl">Extra Large</Button>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">Button with Icons</h2>
        <div className="flex flex-wrap gap-4">
          <Button leftIcon={<span>❤️</span>}>Like</Button>
          <Button rightIcon={<span>→</span>}>Continue</Button>
          <Button size="icon">🎯</Button>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">Button with Start/End Icons</h2>
        <div className="flex flex-wrap gap-4">
          <Button startIcon={<span>⬇️</span>}>Download</Button>
          <Button endIcon={<span>⬆️</span>}>Upload</Button>
          <Button startIcon={<span>❤️</span>} endIcon={<span>→</span>}>
            Like & Continue
          </Button>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">Full Width Buttons</h2>
        <div className="w-full max-w-md space-y-4">
          <Button fullWidth>Full Width Button</Button>
          <Button fullWidth variant="secondary">
            Full Width Secondary
          </Button>
          <Button fullWidth variant="outlined">
            Full Width Outlined
          </Button>
          <Button fullWidth variant="ghost">
            Full Width Ghost
          </Button>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">Loading States</h2>
        <div className="flex flex-wrap gap-4">
          <Button loading>Loading...</Button>
          <Button loading variant="secondary">Processing</Button>
          <Button loading variant="outlined">Submitting</Button>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">Card Component</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card>
            <CardHeader>
              <CardTitle>Card Title</CardTitle>
              <CardDescription>Card Description</CardDescription>
            </CardHeader>
            <CardContent>
              <p>This is the card content.</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Another Card</CardTitle>
              <CardDescription>Another description</CardDescription>
            </CardHeader>
            <CardContent>
              <p>More card content here.</p>
            </CardContent>
          </Card>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">Input Component</h2>
        <div className="space-y-4 max-w-md">
          <Input placeholder="Enter your name" />
          <Input type="email" placeholder="Enter your email" />
          <Input type="password" placeholder="Enter your password" />
        </div>
      </div>
    </div>
  );
}
