import { Card, CardHeader, CardTitle, CardDescription } from 'jan_hoeck'

export function Default() {
  return (
    <Card style={{ maxWidth: 380 }}>
      <CardHeader>
        <CardTitle>Karten-Titel</CardTitle>
        <CardDescription>Der Kopfbereich bündelt Titel und Beschreibung am Kartenanfang.</CardDescription>
      </CardHeader>
    </Card>
  )
}
