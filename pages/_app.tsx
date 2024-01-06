import { AppProps } from 'next/app'
import { Cormorant, Urbanist } from 'next/font/google'
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
    <div className={`${cormorant.variable} ${urbanist.variable}`}>
      <AnimatePresence
        mode="wait"
        initial={false}
        onExitComplete={() => window.scrollTo(0, 0)}
      >
        <Component {...pageProps} key={router.asPath} />;
      </AnimatePresence>
    </div>
  )
}
export default MyApp
