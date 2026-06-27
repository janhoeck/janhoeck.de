import { Card, CardHeader, CardTitle, CardContent } from 'jan_hoeck'

export function Default() {
  return (
    <Card style={{ maxWidth: 380 }}>
      <CardHeader>
        <CardTitle>Inhalt</CardTitle>
      </CardHeader>
      <CardContent>
        <p style={{ margin: 0, lineHeight: 1.6 }}>
          CardContent nimmt den Hauptinhalt der Karte auf – Text, Listen oder Medien.
        </p>
      </CardContent>
    </Card>
  )
}
