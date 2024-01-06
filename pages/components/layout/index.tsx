import { ReactNode } from 'react'

import { motion } from 'framer-motion'

import Header from '@/components/header'

const Layout = ({ children }: { children: ReactNode }) => (
  <>
    <Header />
    <motion.div
      initial={{ opacity: 0, y: '50rem' }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: '50rem' }}
      transition={{
        type: 'spring',
        stiffness: 260,
        damping: 20,
        duration: 1,
      }}
    >
      {children}
    </motion.div>
  </>
)

export default Layout
