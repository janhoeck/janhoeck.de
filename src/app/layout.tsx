import type { Metadata } from 'next'
import { Barlow } from 'next/font/google'
import { twMerge } from 'tailwind-merge'

import './index.css'

const barlow = Barlow({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
})

export const metadata: Metadata = {
  metadataBase: new URL('https://janhoeck.de'),
  title: {
    default: 'Jan Höck — Senior Frontend Entwickler',
    template: '%s | Jan Höck',
  },
  description:
    'Persönliche Website von Jan Höck — Senior Frontend Entwickler aus dem Raum Köln. Spezialisiert auf React, Next.js und TypeScript. Lebenslauf, Skills und Referenzen.',
  keywords: [
    'Jan Höck',
    'Senior Frontend Entwickler',
    'React Entwickler',
    'Next.js',
    'TypeScript',
    'Köln',
    'Web Performance',
    'Frontend Developer',
  ],
  authors: [{ name: 'Jan Höck', url: 'https://janhoeck.de' }],
  creator: 'Jan Höck',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'profile',
    locale: 'de_DE',
    siteName: 'Jan Höck',
    url: 'https://janhoeck.de',
    title: 'Jan Höck — Senior Frontend Entwickler',
    description:
      'Persönliche Website von Jan Höck — Senior Frontend Entwickler aus dem Raum Köln. Spezialisiert auf React, Next.js und TypeScript.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jan Höck — Senior Frontend Entwickler',
    description:
      'Persönliche Website von Jan Höck — Senior Frontend Entwickler aus dem Raum Köln. Spezialisiert auf React, Next.js und TypeScript.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  formatDetection: {
    email: false,
    telephone: false,
  },
}

const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  '@id': 'https://janhoeck.de/#person',
  name: 'Jan Höck',
  jobTitle: 'Senior Frontend Entwickler',
  url: 'https://janhoeck.de',
  image: 'https://janhoeck.de/assets/me.jpg',
  sameAs: ['https://github.com/janhoeck'],
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Köln',
    addressCountry: 'DE',
  },
  knowsAbout: [
    'React',
    'Next.js',
    'TypeScript',
    'JavaScript',
    'HTML5',
    'CSS3',
    'Web Performance',
    'Frontend Architecture',
  ],
}

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  url: 'https://janhoeck.de',
  name: 'Jan Höck',
  inLanguage: 'de-DE',
  author: { '@id': 'https://janhoeck.de/#person' },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='de'>
      <head>
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body className={twMerge(barlow.className, 'dark')}>
        <main>{children}</main>
      </body>
    </html>
  )
}
