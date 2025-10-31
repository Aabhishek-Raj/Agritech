import styles from './intex.module.css'
import WideProductCard from './WideProductCard/intex'
import { Link } from 'react-router-dom'

const WideProductCards = () => {
  return (
    <section className={styles.section}>
      <h1 className={styles.section__h1}>Best of Electonics</h1>
      <div className={styles.section__div}>
        <Link to={'/product'}>
          <WideProductCard />
        </Link>
        <Link to={'/product'}>
          <WideProductCard />
        </Link>
        <Link to={'/product'}>
          <WideProductCard />
        </Link>
        <Link to={'/product'}>
          <WideProductCard />
        </Link>
        <Link to={'/product'}>
          <WideProductCard />
        </Link>
        <Link to={'/product'}>
          <WideProductCard />
        </Link>
      </div>
    </section>
  )
}

export default WideProductCards
