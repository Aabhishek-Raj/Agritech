import clsx from 'clsx'
import styles from './intex.module.css'
import vegetableImage from '../../../assets/img/vegetableimage.avif'

const WideProductCard = () => {
  return (
    <section className={clsx(styles.section)}>
      <figure className={clsx(styles.section__fig)}>
        <img src={vegetableImage} alt="img" />
      </figure>
      <p>Product name</p>
      <strong>2399</strong>
    </section>
  )
}

export default WideProductCard
