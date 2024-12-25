import './globals.css'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Apple Watch Studio',
  description: 'Create your own style with Apple Watch Studio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

