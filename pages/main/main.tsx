'use client'

import Header from '@/components/header/header'
import Layout from '@/components/layout'

import styles from './main.module.scss'

let imagePaths: string[] = []
for (let i = 23; i > 0; i--) {
  imagePaths.push(`/brains/${i}.jpg`)
}

export default function Page() {
  return (
    <Layout>
      <div className={styles.body}>
        <div className={styles.carouselContainer}>
          {imagePaths.map((item, index) => (
            <div key={index} className={styles.carouselItem}>
              <img src={item} alt={`Photo ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </Layout>
  )
}
