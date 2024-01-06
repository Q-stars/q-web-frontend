'use client'

import React, { useState, useEffect } from 'react'
import Layout from '@/components/layout'
import styles from './main.module.scss'

let imagePaths: string[] = []
for (let i = 23; i > 0; i--) {
  imagePaths.push(`/brains/${i}.jpg`)
}

const LoadingPage = () => {
  const [loading, setLoading] = useState(true)
  const [visibleIndex, setVisibleIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setVisibleIndex((prevIndex) => {
        if (prevIndex < imagePaths.length - 1) {
          return prevIndex + 1
        } else {
          setLoading(false)
          clearInterval(timer)
          return prevIndex
        }
      })
    }, 43) // Set the time interval between each photo appearance

    return () => clearInterval(timer)
  }, [])

  return (
    <Layout>
      <div className={styles.body}>
        <div
          className={`${styles.carouselContainer} ${
            !loading ? styles.skew : ''
          }`}
        >
          {imagePaths.map((item, index) => (
            <div
              key={index}
              className={`${styles.carouselItem} ${
                !loading ? styles.skew : ''
              } ${loading && index > visibleIndex ? styles.hidden : ''}`}
            >
              <img src={item} alt={`Photo ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </Layout>
  )
}

export default LoadingPage
