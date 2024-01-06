import { AppProps } from 'next/app'
import { Cormorant, Urbanist } from 'next/font/google'
import Head from 'next/head'
import { AnimatePresence } from 'framer-motion'

import './globals.scss'

const cormorant = Cormorant({
  subsets: ['latin'],
  variable: '--font-cormorant',
})

const urbanist = Urbanist({
  subsets: ['latin'],
  variable: '--font-urbanist',
})

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <div>
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <div className={`${cormorant.variable} ${urbanist.variable}`}>
        <Component {...pageProps} key={router.asPath} />;
      </div>
    </div>
  )
}
export default MyApp
