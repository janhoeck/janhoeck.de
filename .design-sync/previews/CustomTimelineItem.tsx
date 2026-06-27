import { CustomTimelineItem } from 'jan_hoeck'

export function Default() {
  return (
    <div style={{ maxWidth: 480 }}>
      <CustomTimelineItem
        organization="FLOWACT GmbH"
        jobTitle="Senior Frontend Entwickler"
        timePeriod="Juli 2021 – heute"
        tasks={['Aufbau einer Design-System-Komponenten-Bibliothek', 'Mentoring & Code-Reviews']}
        lastItem
      />
    </div>
  )
}
