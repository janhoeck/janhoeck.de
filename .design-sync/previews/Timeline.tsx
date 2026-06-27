import { Timeline, CustomTimelineItem } from 'jan_hoeck'

export function Default() {
  return (
    <Timeline>
      <CustomTimelineItem
        organization="FLOWACT GmbH"
        jobTitle="Senior Frontend Entwickler"
        timePeriod="Juli 2021 – heute"
        tasks={['Aufbau einer Design-System-Bibliothek', 'Performance-Optimierung & Code-Reviews']}
      />
      <CustomTimelineItem
        organization="Agentur XYZ"
        jobTitle="Frontend Entwickler"
        timePeriod="2018 – 2021"
        tasks={['Umsetzung von React-Anwendungen', 'Enge Zusammenarbeit mit dem Design-Team']}
      />
      <CustomTimelineItem
        organization="Universität zu Köln"
        jobTitle="Studium Informatik"
        timePeriod="2014 – 2018"
      />
    </Timeline>
  )
}
