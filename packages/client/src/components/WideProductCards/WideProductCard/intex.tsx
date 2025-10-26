import clsx from 'clsx'
import styles from './intex.module.css'

const WideProductCard = () => {
  return (
    <section className={clsx(styles.section)}>
      <figure className={clsx(styles.section__fig)}>
        <img src="/vegetableimage.avif" alt="img" />
        <figcaption className="offscreen">product image</figcaption>
      </figure>
      <p>Product name</p>
      <strong>2399</strong>
    </section>
  )
}

export default WideProductCard
