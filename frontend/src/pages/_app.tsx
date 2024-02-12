import { Inter } from 'next/font/google'

import Header from '@/components/Header'
import Sidebar from '@/components/Sidebar'

import '@styles/globals.css'

import type { AppProps } from 'next/app'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ Component, pageProps }: AppProps) {
  return (
    <div className={inter.className}>
      <Header />
      <div>
        <Sidebar />
        <div className="ml-72 bg-neutral-950">
          <main className="px-10 py-4">
            <Component {...pageProps} />
          </main>
        </div>
      </div>
    </div>
  )
}
