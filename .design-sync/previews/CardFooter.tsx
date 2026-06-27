import { Button, Card, CardHeader, CardTitle, CardFooter } from 'jan_hoeck'

export function Default() {
  return (
    <Card style={{ maxWidth: 380 }}>
      <CardHeader>
        <CardTitle>Aktionen</CardTitle>
      </CardHeader>
      <CardFooter style={{ gap: 12 }}>
        <Button>Speichern</Button>
        <Button variant="outline">Abbrechen</Button>
      </CardFooter>
    </Card>
  )
}
