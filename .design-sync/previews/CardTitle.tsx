import { Card, CardHeader, CardTitle, CardDescription } from 'jan_hoeck'

export function Default() {
  return (
    <Card style={{ maxWidth: 380 }}>
      <CardHeader>
        <CardTitle>Aussagekräftiger Titel</CardTitle>
        <CardDescription>CardTitle setzt die halbfette Kartenüberschrift.</CardDescription>
      </CardHeader>
    </Card>
  )
}
