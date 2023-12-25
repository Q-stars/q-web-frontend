'use client'

import Header from '../components/header/header'

import styles from './main.module.scss'

let imagePaths: string[] = []
for (let i = 0; i < 23; i++) {
  imagePaths.push(`/brains/${i + 1}.jpg`)
}

export default function Page() {
  return (
    <div>
      <Header />
      <div className={styles.carouselContainer}>
        {imagePaths.map((item, index) => (
          <div key={index} className={styles.carouselItem}>
            <img src={item} alt={`Photo ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  )
}
