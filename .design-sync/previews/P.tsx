import { P } from 'jan_hoeck'

export function Default() {
  return (
    <P>
      Senior Frontend Entwickler aus dem Raum Köln, spezialisiert auf React, Next.js und
      TypeScript. Mit Leidenschaft für performante, barrierearme Web-Oberflächen.
    </P>
  )
}

export function Stacked() {
  return (
    <div style={{ maxWidth: 520 }}>
      <P>Der erste Absatz steht ohne oberen Abstand direkt am Anfang.</P>
      <P>
        Folgeabsätze erhalten automatisch einen oberen Abstand, sodass längere Fließtexte
        sauber gegliedert bleiben.
      </P>
    </div>
  )
}
