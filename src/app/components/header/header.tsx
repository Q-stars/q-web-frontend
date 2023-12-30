import { useEffect, useState } from 'react'

import styles from './header.module.scss'

const MenuIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="36"
    height="36"
    viewBox="0 0 36 36"
    fill="none"
  >
    <path
      d="M6 25.905V24.405H30V25.905H6ZM6 18.75V17.25H30V18.75H6ZM6 11.595V10.095H30V11.595H6Z"
      fill="black"
    />
  </svg>
)

const CloseIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="48"
    height="48"
    viewBox="0 0 48 48"
    fill="none"
  >
    <path
      d="M12.8 36.616L11.384 35.2L22.584 24L11.384 12.8L12.8 11.384L24 22.584L35.2 11.384L36.616 12.8L25.416 24L36.616 35.2L35.2 36.616L24 25.416L12.8 36.616Z"
      fill="black"
    />
  </svg>
)

const Header = ({ index }: { index?: string }) => {
  const menuTexts = ['About', 'Whitepaper', 'charter', 'Research', 'Doc']
  const isMobile = typeof window !== 'undefined' && window.innerWidth <= 820
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    setMenuOpen(isMobile ? false : true)
  }, [isMobile])

  const handleMenuIconClick = () => {
    setMenuOpen(!menuOpen)
  }

  const handleMenuListClick = (
    e: React.MouseEvent<HTMLUListElement, MouseEvent>,
  ) => {
    const target = e.target as HTMLElement

    if (target.tagName === 'A' || target.tagName === 'LI') {
      return
    }
    setMenuOpen(false)
  }

  const handleCloseIconClick = () => {
    setMenuOpen(false)
  }

  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <a href="/main">Q</a>
      </div>
      <div className={styles.menu}>
        <div className={styles.menuIcon} onClick={handleMenuIconClick}>
          <MenuIcon />
        </div>
        <div
          className={styles.closeIcon}
          onClick={handleCloseIconClick}
          style={
            menuOpen && isMobile ? { display: 'block' } : { display: 'none' }
          }
        >
          <CloseIcon />
        </div>
        <ul
          className={`${styles.menuList}`}
          style={menuOpen ? { display: 'flex' } : { display: 'none' }}
          onClick={(e) => handleMenuListClick(e)}
        >
          {menuTexts.map((menuText) => {
            return (
              <>
                <a href={`/${menuText.toLowerCase()}`}>
                  <li
                    key={menuText}
                    className={
                      index && index.toUpperCase() === menuText.toUpperCase()
                        ? styles.highlight
                        : ''
                    }
                  >
                    {menuText}
                  </li>
                </a>
              </>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default Header
