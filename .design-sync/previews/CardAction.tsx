import { Button, Card, CardHeader, CardTitle, CardDescription, CardAction } from 'jan_hoeck'

export function Default() {
  return (
    <Card style={{ maxWidth: 380 }}>
      <CardHeader>
        <CardTitle>Mit Aktion</CardTitle>
        <CardDescription>CardAction platziert ein Element oben rechts im Kopfbereich.</CardDescription>
        <CardAction>
          <Button variant="outline" size="sm">
            Bearbeiten
          </Button>
        </CardAction>
      </CardHeader>
    </Card>
  )
}
