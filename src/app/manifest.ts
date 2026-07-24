import { MetadataRoute } from 'next'

export const dynamic = 'force-static'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Jan Höck — Senior Frontend Entwickler',
    short_name: 'Jan Höck',
    description:
      'Persönliche Website von Jan Höck — Senior Frontend Entwickler aus dem Raum Köln, zuhause in React, Next.js und TypeScript.',
    start_url: '/',
    display: 'standalone',
    background_color: '#1b1b1d',
    theme_color: '#1b1b1d',
    lang: 'de-DE',
    icons: [
      {
        src: '/icon.png',
        sizes: '512x512',
        type: 'image/png',
      },
      {
        src: '/apple-icon.png',
        sizes: '180x180',
        type: 'image/png',
      },
    ],
  }
}
