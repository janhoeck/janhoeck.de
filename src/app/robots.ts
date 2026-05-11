import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    sitemap: 'https://janhoeck.de/sitemap.xml',
    host: 'https://janhoeck.de',
  }
}
