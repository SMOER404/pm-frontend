import type { Meta, StoryObj } from "@storybook/react"

const meta: Meta = {
  title: "Design System/Fonts",
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof meta>

export const AzorathFont: Story = {
  render: () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold mb-4">Azorath Font Family</h2>
      
      <div className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold mb-2">Light (300)</h3>
          <p className="font-azorath font-light text-2xl">
            The quick brown fox jumps over the lazy dog
          </p>
          <p className="font-azorath font-light text-lg">
            Быстрая коричневая лиса прыгает через ленивую собаку
          </p>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold mb-2">Regular (400)</h3>
          <p className="font-azorath font-normal text-2xl">
            The quick brown fox jumps over the lazy dog
          </p>
          <p className="font-azorath font-normal text-lg">
            Быстрая коричневая лиса прыгает через ленивую собаку
          </p>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold mb-2">Medium (500)</h3>
          <p className="font-azorath font-medium text-2xl">
            The quick brown fox jumps over the lazy dog
          </p>
          <p className="font-azorath font-medium text-lg">
            Быстрая коричневая лиса прыгает через ленивую собаку
          </p>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold mb-2">Bold (700)</h3>
          <p className="font-azorath font-bold text-2xl">
            The quick brown fox jumps over the lazy dog
          </p>
          <p className="font-azorath font-bold text-lg">
            Быстрая коричневая лиса прыгает через ленивую собаку
          </p>
        </div>
      </div>
    </div>
  ),
}

export const DrukTextCyrFont: Story = {
  render: () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold mb-4">DrukTextCyr Font Family</h2>
      
      <div className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold mb-2">Medium (500)</h3>
          <p className="font-druktextcyr font-medium text-2xl">
            THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG
          </p>
          <p className="font-druktextcyr font-medium text-lg">
            БЫСТРАЯ КОРИЧНЕВАЯ ЛИСА ПРЫГАЕТ ЧЕРЕЗ ЛЕНИВУЮ СОБАКУ
          </p>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold mb-2">Bold (700)</h3>
          <p className="font-druktextcyr font-bold text-2xl">
            THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG
          </p>
          <p className="font-druktextcyr font-bold text-lg">
            БЫСТРАЯ КОРИЧНЕВАЯ ЛИСА ПРЫГАЕТ ЧЕРЕЗ ЛЕНИВУЮ СОБАКУ
          </p>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold mb-2">Super (900)</h3>
          <p className="font-druktextcyr font-black text-2xl">
            THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG
          </p>
          <p className="font-druktextcyr font-black text-lg">
            БЫСТРАЯ КОРИЧНЕВАЯ ЛИСА ПРЫГАЕТ ЧЕРЕЗ ЛЕНИВУЮ СОБАКУ
          </p>
        </div>
      </div>
    </div>
  ),
}

export const FontComparison: Story = {
  render: () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold mb-4">Font Comparison</h2>
      
      <div className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold mb-2">System Font (Fallback)</h3>
          <p className="text-2xl">
            The quick brown fox jumps over the lazy dog
          </p>
          <p className="text-lg">
            Быстрая коричневая лиса прыгает через ленивую собаку
          </p>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold mb-2">Azorath Font</h3>
          <p className="font-azorath text-2xl">
            The quick brown fox jumps over the lazy dog
          </p>
          <p className="font-azorath text-lg">
            Быстрая коричневая лиса прыгает через ленивую собаку
          </p>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold mb-2">DrukTextCyr Font</h3>
          <p className="font-druktextcyr text-2xl">
            THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG
          </p>
          <p className="font-druktextcyr text-lg">
            БЫСТРАЯ КОРИЧНЕВАЯ ЛИСА ПРЫГАЕТ ЧЕРЕЗ ЛЕНИВУЮ СОБАКУ
          </p>
        </div>
      </div>
    </div>
  ),
}

export const FontLoadingTest: Story = {
  render: () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold mb-4">Font Loading Test</h2>
      
      <div className="space-y-4">
        <div className="p-4 border rounded">
          <h3 className="text-lg font-semibold mb-2">Body Text (Azorath)</h3>
          <p className="text-base">
            This is body text that should use Azorath font. If you see a different font, 
            it means the custom font hasn't loaded properly.
          </p>
        </div>
        
        <div className="p-4 border rounded">
          <h3 className="text-lg font-semibold mb-2">Heading (DrukTextCyr)</h3>
          <h1 className="text-3xl">
            THIS IS A HEADING THAT SHOULD USE DRUKTEXTCYR
          </h1>
        </div>
        
        <div className="p-4 border rounded">
          <h3 className="text-lg font-semibold mb-2">Mixed Content</h3>
          <h2 className="text-2xl mb-2">HEADING WITH DRUKTEXTCYR</h2>
          <p className="text-base">
            And this is body text with Azorath font. The fonts should be clearly different.
          </p>
        </div>
      </div>
    </div>
  ),
} 