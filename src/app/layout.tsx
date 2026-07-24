import type { Metadata, Viewport } from 'next'
import { Barlow, Barlow_Semi_Condensed, Space_Mono } from 'next/font/google'
import { twMerge } from 'tailwind-merge'

import './index.css'

const barlow = Barlow({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-barlow',
})

const barlowCondensed = Barlow_Semi_Condensed({
  subsets: ['latin'],
  weight: ['600', '700', '800'],
  variable: '--font-barlow-condensed',
})

const spaceMono = Space_Mono({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-space-mono',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://janhoeck.de'),
  title: {
    default: 'Jan Höck — Senior Frontend Entwickler',
    template: '%s | Jan Höck',
  },
  description:
    'Persönliche Website von Jan Höck — Senior Frontend Entwickler aus dem Raum Köln, zuhause in React, Next.js und TypeScript. Mit Lebenslauf, Skills und Referenzen.',
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
    firstName: 'Jan',
    lastName: 'Höck',
    locale: 'de_DE',
    siteName: 'Jan Höck',
    url: 'https://janhoeck.de',
    title: 'Jan Höck — Senior Frontend Entwickler',
    description:
      'Persönliche Website von Jan Höck — Senior Frontend Entwickler aus dem Raum Köln, zuhause in React, Next.js und TypeScript.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jan Höck — Senior Frontend Entwickler',
    description:
      'Persönliche Website von Jan Höck — Senior Frontend Entwickler aus dem Raum Köln, zuhause in React, Next.js und TypeScript.',
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

export const viewport: Viewport = {
  themeColor: '#1b1b1d',
  colorScheme: 'dark',
}

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      '@id': 'https://janhoeck.de/#person',
      name: 'Jan Höck',
      givenName: 'Jan',
      familyName: 'Höck',
      jobTitle: 'Senior Frontend Entwickler',
      description:
        'Senior Frontend Entwickler aus dem Raum Köln, spezialisiert auf React, Next.js und TypeScript.',
      url: 'https://janhoeck.de',
      image: 'https://janhoeck.de/assets/me.jpg',
      email: 'mailto:jan.hoeck@gmx.net',
      sameAs: ['https://github.com/janhoeck'],
      worksFor: {
        '@type': 'Organization',
        name: 'DeepL SE',
        url: 'https://www.deepl.com',
      },
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
    },
    {
      '@type': 'WebSite',
      '@id': 'https://janhoeck.de/#website',
      url: 'https://janhoeck.de',
      name: 'Jan Höck',
      description:
        'Persönliche Website von Jan Höck — Senior Frontend Entwickler aus dem Raum Köln.',
      inLanguage: 'de-DE',
      author: { '@id': 'https://janhoeck.de/#person' },
      publisher: { '@id': 'https://janhoeck.de/#person' },
    },
    {
      '@type': 'ProfilePage',
      '@id': 'https://janhoeck.de/#profilepage',
      url: 'https://janhoeck.de',
      name: 'Jan Höck — Senior Frontend Entwickler',
      inLanguage: 'de-DE',
      isPartOf: { '@id': 'https://janhoeck.de/#website' },
      mainEntity: { '@id': 'https://janhoeck.de/#person' },
    },
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang='de'
      className={twMerge(barlow.variable, barlowCondensed.variable, spaceMono.variable)}
    >
      <head>
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
