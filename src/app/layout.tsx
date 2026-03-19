import type { Metadata } from 'next'
import { Montserrat, Playfair_Display } from 'next/font/google'
import './globals.css'

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-sans',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-display',
})

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
    <html lang="de" className={`${montserrat.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
