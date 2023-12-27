'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

import styles from './loading.module.scss'

const totalImages = 23
let timegap = 2500
let speed = 10

const Loading = () => {
  const [progress, setProgress] = useState(0)
  //   const [fakeProgress, setFakeProgress] = useState(0)
  const [animationDone, setAnimationDone] = useState(false)
  const [loadingDone, setLoadingDone] = useState(false)

  const router = useRouter()

  let imagePaths = []
  for (let i = 0; i < totalImages; i++) {
    imagePaths.push(`/brains/${i + 1}.jpg`)
  }

  const [imagesLoaded, setImagesLoaded] = useState(0)

  const handleImageLoad = () => {
    console.log('set', imagesLoaded)
    setImagesLoaded((prev) => prev + 1)

    if (totalImages === imagesLoaded + 1) {
      console.log('done')
      setLoadingDone(true)
    }
  }

  useEffect(() => {
    let timer: string | number | NodeJS.Timeout | undefined

    const simulateLoading = () => {
      timer = setInterval(() => {
        if (progress < 90) {
          if (loadingDone) {
            speed *= 10
          }
          setProgress((prevProgress) => {
            const newProgress = prevProgress + speed
            return newProgress >= 100 ? 100 : newProgress
          })
        } else {
          setAnimationDone(true)
        }
      }, timegap / speed) // Increase progress every 5 seconds
    }

    simulateLoading()

    return () => {
      clearInterval(timer)
    }
  }, [progress, animationDone, loadingDone]) // Empty dependency array to run the effect only once

  useEffect(() => {
    setTimeout(() => {
      if (imagesLoaded === totalImages && animationDone) {
        // All images have been loaded, navigate to the next page
        setProgress(100)
        setTimeout(() => {
          router.push('/main')
        }, 1000)
      }
    }, 3000)
  }, [imagesLoaded, router, animationDone])

  return (
    <div className={styles.loadingContainer}>
      <div className={styles.videoContainer}>
        <video
          width="236"
          height="282"
          src={require('../../../public/loading.mp4')}
          autoPlay
          muted
          loop
        />
      </div>
      <div className={styles.progressBarContainer}>{progress}%</div>
      <div className={styles.preload}>
        {imagePaths.map((path, index) => (
          <img
            key={index}
            src={path}
            alt={`Preloaded Image ${index + 1}`}
            onLoad={handleImageLoad}
          />
        ))}
      </div>
    </div>
  )
}

export default Loading
