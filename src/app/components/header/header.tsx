import { useEffect, useState } from 'react'

import styles from './header.module.scss'

const Header = ({ index }: { index?: string }) => {
  const menuTexts = ['About', 'Whitepaper', 'charter', 'Research', 'Doc']
  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <a href="/">Q</a>
      </div>
      <div className={styles.menu}>
        <ul>
          {menuTexts.map((menuText) => {
            return (
              <li
                key={menuText}
                className={
                  index && index.toUpperCase() === menuText.toUpperCase()
                    ? styles.highlight
                    : ''
                }
              >
                <a href={`/${menuText.toLowerCase()}`}>{menuText}</a>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default Header
