import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Serena Blake - Clinical Psychologist',
  description: 'Internship Project',
  generator: 'Nitesh Vashist',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
