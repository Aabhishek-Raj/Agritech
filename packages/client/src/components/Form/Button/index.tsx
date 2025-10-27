import clsx from 'clsx'
import styles from './index.module.css'

interface ButtonProps {
  className: string
  loading: boolean
}

const Button = (props: ButtonProps) => {
  const { className, loading } = props
  return (
    <button type="submit" className={clsx(styles.button, className)} disabled={loading} aria-busy={loading}>
      {loading ? 'Saving…' : 'Submit'}
    </button>
  )
}

export default Button
