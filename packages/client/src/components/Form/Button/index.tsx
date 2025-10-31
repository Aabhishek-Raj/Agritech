import clsx from 'clsx'
import styles from './index.module.css'

interface ButtonProps {
  className: string
  loading?: boolean
  text?: string
}

const Button = (props: ButtonProps) => {
  const { className, loading = false, text = 'Submit' } = props
  return (
    <button type="submit" className={clsx(styles.button, className)} disabled={loading} aria-busy={loading}>
      {loading ? 'Saving…' : text}
    </button>
  )
}

export default Button
