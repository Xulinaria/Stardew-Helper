import { Inter } from 'next/font/google'

import Header from '@/components/Header'
import Sidebar from '@/components/Sidebar'

import '@styles/globals.css'

import type { ReactElement, ReactNode } from 'react'
import type { NextPage } from 'next'
import type { AppProps } from 'next/app'

const inter = Inter({ subsets: ['latin'] })

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, P> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export default function RootLayout({
  Component,
  pageProps,
}: AppPropsWithLayout) {
  return (
    <div className={inter.className}>
      <Header />
      <div>
        <Sidebar />
        <div className="ml-72">
          <main className="px-10 py-4">
            <Component {...pageProps} />
          </main>
        </div>
      </div>
    </div>
  )
}
