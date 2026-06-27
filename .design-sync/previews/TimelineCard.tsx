import { TimelineCard, CardHeader, CardTitle, CardDescription } from 'jan_hoeck'

export function Default() {
  return (
    <div style={{ maxWidth: 440 }}>
      <TimelineCard>
        <CardHeader>
          <CardTitle>Karten-Inhalt</CardTitle>
          <CardDescription>TimelineCard ist die Karte innerhalb eines Timeline-Eintrags.</CardDescription>
        </CardHeader>
      </TimelineCard>
    </div>
  )
}
