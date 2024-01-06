import { ReactNode } from 'react'

import { motion } from 'framer-motion'

import Header from '@/components/header'

import styles from './layout.module.scss'

const Layout = ({ children }: { children: ReactNode }) => (
  <>
    <Header />
    <div className={styles.headerMargin}>
      <motion.div
        initial={{ x: '-100%', opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: '100%', opacity: 0 }}
      >
        {children}
      </motion.div>
    </div>
  </>
)

export default Layout
