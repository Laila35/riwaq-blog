import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Riwaq Blog',
  description: 'A modern blog platform built with Next.js and TailwindCSS.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-gray-50">
        {children}
      </body>
    </html>
  )
}
