import clsx from 'clsx'
import styles from './index.module.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const Header = () => {
  const [isSmallScreen, setIsSmallScreen] = useState<boolean>(false)

  return (
    <header className={styles.header}>
      <section className={styles.header__section}>
        <Link to={'/'} className={styles.header__link}>
          <figure className={styles.header__fig}>
            <img src="/rice.png" alt="logo" />
            <figcaption className="offscreen">AgriTrade</figcaption>
          </figure>
          <h1 className={styles.header__h1}>AgriTrade</h1>
        </Link>
        <button onClick={() => setIsSmallScreen(!isSmallScreen)} className={clsx(styles.header__button)}>
          {!isSmallScreen ? '☰' : 'X'}
        </button>
      </section>
      <ul className={clsx(!isSmallScreen ? styles.header__ul : styles.header__ul_small)}>
        <li>
          <Link to="/products">Products</Link>
        </li>
        <li>
          <Link to="/seller">Become a Seller</Link>
        </li>
        <li>
          <Link to="/seller/dashboard">Dashboard</Link>
        </li>
      </ul>
    </header>
  )
}

export default Header
