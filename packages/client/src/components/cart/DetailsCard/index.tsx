import styles from './index.module.css'
import Button from '../../Form/Button'
import { Link } from 'react-router-dom'

const DetailsCard = () => {
  return (
    <section className={styles.details}>
      <div className={styles.details__main}>
        <figure>
          <img
            src="https://rukminim2.flixcart.com/image/224/224/xif0q/television/z/q/g/-original-imahfhnwctefdcq9.jpeg?q=90"
            alt="item_image"
          />
          <figcaption className="offscreen">item image and t</figcaption>
        </figure>
        <div className="details__description">
          <h3>Product Name</h3>
          <p>sellername: sellet.com</p>
          <strong>3400$</strong>
        </div>
      </div>
      <div className={styles.details__elements}>
        <div className={styles.details__count}>
          <button className={styles.count__incr}>-</button>
          <span className={styles.count__data}>3</span>
          <button className={styles.count__decr}>+</button>
        </div>
        <button className={styles.details__save}>Save for latter</button>
        <button className={styles.details__remove}>Remove</button>
      </div>
      <footer className={styles.details__footer}>
        <Link to="/checkout">
          <Button text="Place order" className={styles.order__button} />
        </Link>
      </footer>
    </section>
  )
}

export default DetailsCard
