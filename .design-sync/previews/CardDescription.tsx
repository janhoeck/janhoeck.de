import { Card, CardHeader, CardTitle, CardDescription } from 'jan_hoeck'

export function Default() {
  return (
    <Card style={{ maxWidth: 380 }}>
      <CardHeader>
        <CardTitle>Projekt</CardTitle>
        <CardDescription>
          CardDescription liefert den gedämpften Beschreibungstext direkt unter dem Titel.
        </CardDescription>
      </CardHeader>
    </Card>
  )
}
