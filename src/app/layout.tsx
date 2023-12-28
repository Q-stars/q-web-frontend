import type { Metadata } from 'next'
import { Cormorant, Urbanist } from 'next/font/google'
import './globals.scss'

const cormorant = Cormorant({
  subsets: ['latin'],
  variable: '--font-cormorant',
})

const urbanist = Urbanist({
  subsets: ['latin'],
  variable: '--font-urbanist',
})

export const metadata: Metadata = {
  title: 'Q Stars',
  description: '',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${cormorant.variable} ${urbanist.variable}`}>
        {children}
      </body>
    </html>
  )
}
