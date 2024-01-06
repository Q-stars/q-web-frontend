'use client'

import React, { useState, useEffect, useRef } from 'react'
import Layout from '@/components/layout'
import styles from './main.module.scss'

let imagePaths: string[] = []
for (let i = 23; i > 0; i--) {
  imagePaths.push(`/brains/${i}.jpg`)
}

const LoadingPage = () => {
  const [loading, setLoading] = useState(true)
  const [visibleIndex, setVisibleIndex] = useState(-1)
  const timerRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setVisibleIndex((prevIndex) => {
        if (prevIndex < imagePaths.length - 1) {
          return prevIndex + 1
        } else {
          setLoading(false)
          return prevIndex
        }
      })
    }, 43)

    return () => {
      if (timerRef.current !== null) {
        clearInterval(timerRef.current)
      }
    }
  }, [])

  const imageElements = imagePaths.map((item, index) => (
    <div
      key={index}
      className={`${styles.carouselItem} ${!loading ? styles.skew : ''} ${
        loading && index > visibleIndex ? styles.hidden : ''
      }`}
    >
      {index <= visibleIndex && <img src={item} alt={`Photo ${index + 1}`} />}
    </div>
  ))

  return (
    <Layout>
      <div className={styles.body}>
        <div
          className={`${styles.carouselContainer} ${
            !loading ? styles.skew : ''
          }`}
        >
          {imageElements}
        </div>
      </div>
    </Layout>
  )
}

export default LoadingPage
