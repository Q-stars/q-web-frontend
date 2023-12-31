import { ReactNode } from 'react'

import { motion } from 'framer-motion'

import Header from '@/components/header'

import styles from './layout.module.scss'

const Layout = ({ children }: { children: ReactNode }) => (
  <>
    <Header />
    <div className={styles.headerMargin}>
      {children}
      {/* <motion.div
        initial={{ opacity: 0, x: '-100%' }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: '100%', display: 'none' }}
        transition={{ duration: 0.5 }} // Adjust the duration as needed
      ></motion.div> */}
    </div>
  </>
)

export default Layout
