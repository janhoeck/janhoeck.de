import { ReferenceCardProps } from './components/references/ReferenceCard'

export const referencesConfig: ReferenceCardProps[] = [
  {
    title: 'CastCrafter Server',
    description:
      'Die offizielle Community-Plattform zum Minecraft-Server von CastCrafter. Spieler loggen sich direkt ein, sehen ihre Statistiken live aus dem Spiel und wissen auf einen Blick, welche Events als Nächstes anstehen.',
    imageSrc: '/assets/references/castcrafter.webp',
    livePreviewUrl: 'https://server.castcrafter.de',
  },
  {
    title: 'Solymarmenor',
    description:
      'Über diese Seite werden Ferienhäuser an der spanischen Mittelmeerküste vermietet. Gäste stöbern durch die Galerie, sehen genau, welche Ausstattung sie erwartet, und fragen direkt über die Seite an.',
    imageSrc: '/assets/references/solymarmenor.webp',
    githubUrl: 'https://github.com/janhoeck/jan_hoeck/tree/master/apps/holiday_apartment',
    livePreviewUrl: 'https://solymarmenor.com',
  },
  {
    title: 'Hookah Awards',
    description:
      'Voting-Plattform für einen Twitch-Streamer: Einmal im Jahr kürt die Community hier die besten Clips des Jahres.',
    imageSrc: '/assets/references/hookahawards.webp',
    githubUrl: 'https://github.com/janhoeck/jan_hoeck/tree/master/apps/hookahawards',
    livePreviewUrl: 'https://hookahawards.de',
  },
  {
    title: 'Adventskalender',
    description:
      'Ein digitaler Adventskalender: Jeden Tag im Dezember geht ein neues Türchen auf – dahinter stecken kleine weihnachtliche Inhalte, gebaut mit viel Liebe zum Detail.',
    imageSrc: '/assets/references/adventscalendar.webp',
    githubUrl: 'https://github.com/janhoeck/jan_hoeck/tree/master/apps/adventscalendar',
    livePreviewUrl: 'https://jan-hoeck-adventscalendar.vercel.app/',
  },
]
