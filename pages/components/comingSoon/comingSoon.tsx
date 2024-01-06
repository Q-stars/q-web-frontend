'use client'

import Layout from '@/components/layout'

import styles from './coming.module.scss'

const CoomingSoon = ({ index }: { index: string }) => {
  return (
    <div style={{ width: '100%', height: '100%', overflow: 'hidden' }}>
      <Layout>
        <div className={styles.text}>Comming Soon...</div>
      </Layout>
    </div>
  )
}

export default CoomingSoon
