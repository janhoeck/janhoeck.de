import type { Metadata } from 'next'
import { Barlow } from 'next/font/google'
import { twMerge } from 'tailwind-merge'

import './index.css'

const barlow = Barlow({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
})

export const metadata: Metadata = {
  title: 'Jan Höck',
  description: 'Personal website of Jan Höck (Frontend Developer)',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='de'>
      <body className={twMerge(barlow.className, 'dark')}>{children}</body>
    </html>
  )
}
