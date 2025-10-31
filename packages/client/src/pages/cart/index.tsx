import BillCard from '../../components/cart/BillCard'
import DetailsCard from '../../components/cart/DetailsCard'
import styles from './index.module.css'

const Cart = () => {
  return (
    <section className={styles.cart}>
      <div className={styles.details}>
        <DetailsCard />
      </div>
      <div className={styles.bill}>
        <BillCard />
      </div>
    </section>
  )
}

export default Cart
