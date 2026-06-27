import { Button } from 'jan_hoeck'
import { Github, ArrowRight, Mail } from 'lucide-react'

export function Variants() {
  return (
    <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center' }}>
      <Button>Default</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="destructive">Destructive</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="link">Link</Button>
    </div>
  )
}

export function Sizes() {
  return (
    <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
      <Button size="sm">Small</Button>
      <Button size="default">Default</Button>
      <Button size="lg">Large</Button>
    </div>
  )
}

export function WithIcons() {
  return (
    <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center' }}>
      <Button>
        <Github /> GitHub
      </Button>
      <Button variant="outline">
        Mehr erfahren <ArrowRight />
      </Button>
      <Button variant="outline" size="icon" aria-label="E-Mail">
        <Mail />
      </Button>
    </div>
  )
}

export function Disabled() {
  return <Button disabled>Nicht verfügbar</Button>
}
