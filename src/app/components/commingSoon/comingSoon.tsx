'use client'

import Header from '../header/header'

import styles from './coming.module.scss'

const CoomingSoon = ({ index }: { index: string }) => {
  return (
    <div>
      <Header index={index} />
      <div className={styles.text}>Comming Soon...</div>
    </div>
  )
}

export default CoomingSoon
