import Navbar from '@/components/Navbar'
import './globals.css'
import { Oxanium } from 'next/font/google'

const oxanium = Oxanium({ subsets: ['latin'] })

export const metadata = {
  title: 'ESPORTS | GAMING',
  description: 'gaming website',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${oxanium.className} bg-body text-white`} >
        <Navbar />
        {children}
        </body>
    </html>
  )
}
