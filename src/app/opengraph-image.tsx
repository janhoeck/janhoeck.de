import { ImageResponse } from 'next/og'
import { readFile } from 'fs/promises'
import { join } from 'path'

export const alt = 'Jan Höck — Senior Frontend Entwickler'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image() {
  const portraitBuffer = await readFile(join(process.cwd(), 'public', 'assets', 'me.jpg'))
  const portraitSrc = `data:image/jpeg;base64,${portraitBuffer.toString('base64')}`

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          background: 'linear-gradient(135deg, #1a1917 0%, #2a2724 100%)',
          color: '#f5f1ea',
          padding: '80px',
          fontFamily: 'sans-serif',
        }}
      >
        <img
          src={portraitSrc}
          width={420}
          height={420}
          style={{
            borderRadius: '50%',
            objectFit: 'cover',
            marginRight: '64px',
          }}
        />
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div
            style={{
              fontSize: 110,
              fontWeight: 800,
              letterSpacing: '-0.02em',
              lineHeight: 1,
              textTransform: 'uppercase',
            }}
          >
            Jan Höck
          </div>
          <div
            style={{
              fontSize: 36,
              fontWeight: 500,
              marginTop: 24,
              color: '#bfb6a8',
              textTransform: 'uppercase',
              letterSpacing: '0.01em',
            }}
          >
            Senior Frontend Entwickler
          </div>
          <div
            style={{
              fontSize: 28,
              fontWeight: 400,
              marginTop: 40,
              color: '#7d7468',
            }}
          >
            janhoeck.de
          </div>
        </div>
      </div>
    ),
    { ...size }
  )
}
