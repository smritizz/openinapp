import './globals.css'
import { Inter } from 'next/font/google'
import Provider from './AuthProvider.js'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Board.',
  description: 'OpenInApp Assignment to be completeed within 2 days',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true} className={inter.className}>
        <Provider>{children}</Provider>
      </body>
    </html>
  )
}
