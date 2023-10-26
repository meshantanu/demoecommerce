import GlobalState from '@/context'
import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Vision Ias Store',
  description: `Vision IAS is India's premier Research and Training Institute for UPSC CSE | Offline & Live-Online General Studies Foundation Course | One to One Mentoring | Current Affairs | All India Test Series`,
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
       <link rel="icon" href="/favicon.ico.svg" />
      <body className={inter.className}>
        <GlobalState>
          <Navbar/>
          <main className='flex min-h-screen flex-col mt-[80px]'>{children}</main>
        </GlobalState>
      </body>
    </html>
  )
}
