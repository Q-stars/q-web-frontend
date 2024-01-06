'use client'

import Layout from '@/components/layout'

import styles from './coming.module.scss'

const CoomingSoon = ({ index }: { index: string }) => {
  return (
    <Layout>
      <div className={styles.text}>Comming Soon...</div>
    </Layout>
  )
}

export default CoomingSoon
