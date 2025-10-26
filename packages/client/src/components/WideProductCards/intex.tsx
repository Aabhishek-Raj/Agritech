import clsx from 'clsx'
import styles from './intex.module.css'
import WideProductCard from './WideProductCard/intex'

const WideProductCards = () => {
  return (
    <section className={clsx(styles.section)}>
      <h1 className={clsx(styles.section__h1)}>Best of Electonics</h1>
      <div className={clsx(styles.section__div)}>
        <WideProductCard />
        <WideProductCard />
        <WideProductCard />
        <WideProductCard />
        <WideProductCard />
        <WideProductCard />
        <WideProductCard />
      </div>
    </section>
  )
}

export default WideProductCards
