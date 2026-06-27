import { TimelineItem, CardHeader, CardTitle, CardDescription } from 'jan_hoeck'

export function Default() {
  return (
    <div style={{ maxWidth: 440 }}>
      <TimelineItem lastItem>
        <CardHeader>
          <CardTitle>Stationen-Eintrag</CardTitle>
          <CardDescription>
            Ein einzelner Timeline-Eintrag: Punkt, Verbindungslinie und Karte. Die Linie wird beim
            letzten Eintrag (lastItem) ausgeblendet.
          </CardDescription>
        </CardHeader>
      </TimelineItem>
    </div>
  )
}
