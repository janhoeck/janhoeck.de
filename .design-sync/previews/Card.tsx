import { Button, Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from 'jan_hoeck'

export function Default() {
  return (
    <Card style={{ maxWidth: 380 }}>
      <CardHeader>
        <CardTitle>CastCrafter Server</CardTitle>
        <CardDescription>Effizientes Live-Aufzeichnungs-Tool für Streamer.</CardDescription>
      </CardHeader>
      <CardContent>
        <p style={{ margin: 0, lineHeight: 1.6 }}>
          Eine kurze Beschreibung des Karteninhalts. Karten gruppieren zusammengehörige
          Informationen mit Titel, Beschreibung und Aktionen.
        </p>
      </CardContent>
      <CardFooter style={{ gap: 12 }}>
        <Button>Vorschau</Button>
        <Button variant="outline">GitHub</Button>
      </CardFooter>
    </Card>
  )
}

export function Minimal() {
  return (
    <Card style={{ maxWidth: 380 }}>
      <CardHeader>
        <CardTitle>Nur Kopfbereich</CardTitle>
        <CardDescription>Eine Karte kann auch nur einen Header enthalten.</CardDescription>
      </CardHeader>
    </Card>
  )
}
