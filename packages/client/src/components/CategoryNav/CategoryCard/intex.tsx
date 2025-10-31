import styles from './intex.module.css'

const CategoryCard = () => {
  return (
    <section className={styles.section}>
      <figure className={styles.section__fig}>
        <img src="/vegetableimage.avif" alt="vegimage" />
        <figcaption className="offscreen">veg image</figcaption>
      </figure>
      <p className={styles.section__p}>vegetables</p>
    </section>
  )
}

export default CategoryCard
