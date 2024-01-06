import styles from './back.module.scss'

const Back = () => {
  const handleBack = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <div className={styles.back} onClick={handleBack}>
      Back to the top
    </div>
  )
}

export default Back
