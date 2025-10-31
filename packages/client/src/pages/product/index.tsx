import clsx from 'clsx'
import styles from './index.module.css'
import vegetable from '../../assets/img/vegetableimage.avif'
import { Link } from 'react-router-dom'

const Product = () => {
  return (
    <section className={styles.section}>
      <figure className={styles.section__fig}>
        <img src={vegetable} alt="product image" />
        <figcaption className="offscreen">product image</figcaption>
      </figure>

      <div className={styles.section__actions}>
        <Link to="/cart" className={clsx(styles.section__button, styles.button__cart)}>
          Add to Cart
        </Link>
        <Link to="/checkout" className={clsx(styles.section__button, styles.button__buy)}>
          Buy Now
        </Link>
      </div>
    </section>
  )
}

export default Product
