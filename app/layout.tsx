import type { Metadata } from 'next'
import './globals.scss'

export const metadata: Metadata = {
  title: 'Raymall Pérez / Full-Stack Developer',
  description: '',
  icons: {
    icon: 'data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%22100%22>👨🏽‍💻</text><text y=%22.9em%22 font-size=%22100%22>⚡️</text></svg>'
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}
