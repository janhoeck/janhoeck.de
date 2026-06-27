import { Section, SectionCaption, P } from 'jan_hoeck'

export function Default() {
  return (
    <Section sectionKey="demo">
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        <SectionCaption>Über mich</SectionCaption>
        <P>
          Section ist der seitenfüllende Layout-Container für einen Bildschirm-Abschnitt –
          horizontal zentriert und auf eine maximale Breite begrenzt.
        </P>
      </div>
    </Section>
  )
}
