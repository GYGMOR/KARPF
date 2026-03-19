import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'KARPF | Meisterschaft der Gartenkunst',
  description: 'Professionelle Gartenpflege, Landschaftsbau und Gartengestaltung. KARPF - Ihr Partner für grüne Oasen.',
  keywords: 'Gartenbau, Landschaftsgärtnerei, Gartenpflege, Sarmenstorf, Gartengestaltung, KARPF',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  )
}
