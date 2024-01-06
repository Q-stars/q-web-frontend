'use client'

import { useEffect, useState, useRef } from 'react'
import { useRouter } from 'next/navigation'
import styles from './loading.module.scss'

let totalImages = 23
let imagePaths: string[] = []
let timegap = 2500
let speed = 10

function addPics() {
  for (let i = 0; i < totalImages; i++) {
    imagePaths.push(`/brains/${i + 1}.jpg`)
  }

  // add three more backgrounds
  imagePaths.push('/about_bg1.jpg')
  imagePaths.push('/about_bg2.jpg')
  imagePaths.push('/whitepaper_bg.jpg')
}

const Loading = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null)

  const [progress, setProgress] = useState(0)
  //   const [fakeProgress, setFakeProgress] = useState(0)
  const [animationDone, setAnimationDone] = useState(false)
  const [loadingDone, setLoadingDone] = useState(false)
  const [isInit, setInit] = useState(false)

  const [imagesLoaded, setImagesLoaded] = useState(0)

  const router = useRouter()

  const picsLen = imagePaths.length

  useEffect(() => {
    if (!isInit) {
      setInit(true)

      addPics()
    }
  }, [])

  let handlePlay = () => {
    if (videoRef.current) {
      videoRef.current
        .play()
        .then(() => {
          // video start
        })
        .catch((error) => {})
    }
  }

  const handleImageLoad = () => {
    console.log('set', imagesLoaded)
    setImagesLoaded((prev) => prev + 1)

    if (picsLen === imagesLoaded + 1) {
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
      if (imagesLoaded === picsLen && animationDone) {
        // All images have been loaded, navigate to the next page
        setProgress(100)
        setTimeout(() => {
          router.push('/main')
        }, 1000)
      }
    }, 3000)
  }, [imagesLoaded, animationDone])

  return (
    <div className={styles.loadingContainer} onClick={handlePlay}>
      <div className={styles.videoContainer}>
        <video
          ref={videoRef}
          width="236"
          height="282"
          src={require('@/public/loading.mp4')}
          autoPlay
          muted
          loop
          playsInline
          poster="/video_poster.jpg"
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
