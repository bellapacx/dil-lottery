// src/app/layout.tsx
import Header from '@/components/Header'
import './globals.css'
import Sidebar from '@/components/Sidebar'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Dil Lottery Admin',
  description: 'Admin panel for managing the Dil Lottery system',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
    <body className={inter.className} style={{ backgroundColor: '#111827', color: '#D1D5DB' }}>
      <Header />
      <div className="flex pt-16">
        <Sidebar />
        <main className="ml-64 p-6 flex-1 min-h-screen">
          {children}
        </main>
      </div>
    </body>
  </html>
  )
}
