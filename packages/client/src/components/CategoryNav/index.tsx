import clsx from "clsx"
import style from './intex.module.css'
import CategoryCard from "./CategoryCard/intex"

const CategoryNav = () => {
  return (
    <main className={clsx(style.main)}>
      <CategoryCard />
      <CategoryCard />
      <CategoryCard />
      <CategoryCard />
      <CategoryCard />
      <CategoryCard />
      <CategoryCard />
      <CategoryCard />
    </main>
  )
}

export default CategoryNav