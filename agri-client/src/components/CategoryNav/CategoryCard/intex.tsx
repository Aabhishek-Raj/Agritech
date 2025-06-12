import clsx from "clsx"
import styles from './intex.module.css'


const CategoryCard = () => {
  return (
    <section className={clsx(styles.section)}>
        <figure className={clsx(styles.section__fig)}>
            <img src="/vegetableimage.avif" alt="vegimage" />
            <figcaption className="offscreen">veg image</figcaption>
        </figure>
        <p className={clsx(styles.section__p)}>vegetables</p>
    </section>
  )
}

export default CategoryCard