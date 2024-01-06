'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { motion } from 'framer-motion'

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
  const [hovered, setHovered] = useState(-1)

  index = usePathname().replace('/', '')

  useEffect(() => {
    setMenuOpen(isMobile ? false : true)
  }, [isMobile])

  const handleMenuIconClick = () => {
    setMenuOpen(!menuOpen)
  }

  const handleMenuListClick = (
    e: React.MouseEvent<HTMLUListElement, MouseEvent>,
  ) => {
    if (!isMobile) return

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
    <div className={styles.absoluteHeader}>
      <header className={styles.header}>
        <div className={styles.logo}>
          <Link href="/main">Q</Link>
        </div>
        <div className={styles.menu}>
          <div className={styles.menuIcon} onClick={handleMenuIconClick}>
            <MenuIcon />
          </div>
          {menuOpen && isMobile && (
            <div className={styles.closeIcon} onClick={handleCloseIconClick}>
              <CloseIcon />
            </div>
          )}
          <ul
            className={`${styles.menuList}`}
            style={menuOpen ? { display: 'flex' } : { display: 'none' }}
            onClick={(e) => handleMenuListClick(e)}
          >
            {menuTexts.map((menuText, i) => {
              return (
                <li
                  key={menuText}
                  className={`${
                    index && index.toUpperCase() === menuText.toUpperCase()
                      ? styles.highlight
                      : ''
                  }`}
                  onMouseOver={(e) => setHovered(i)}
                >
                  <Link
                    className={styles.link}
                    href={`/${menuText.toLowerCase()}`}
                  >
                    <span>{menuText}</span>
                    {!isMobile && hovered === i ? (
                      <motion.div
                        className={styles.underline}
                        layoutId="underline"
                      />
                    ) : null}
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
      </header>
    </div>
  )
}

export default Header
