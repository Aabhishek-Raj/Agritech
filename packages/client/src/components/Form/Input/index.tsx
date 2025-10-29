import React from 'react'
import clsx from 'clsx'
import styles from './index.module.css'

interface InputProps {
  id?: string
  name: string
  label?: string
  type?: string
  value: string
  placeholder?: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  loading?: boolean
  hasError?: boolean
  errorMessage?: string
  className?: string
}

const Input: React.FC<InputProps> = ({
  id,
  name,
  label,
  type = 'text',
  value,
  placeholder = '',
  onChange,
  loading = false,
  hasError = false,
  errorMessage = '',
  className = '',
}) => {
  const inputId = id || name

  return (
    <div className={clsx(styles.inputWrapper, className)}>
      {label && (
        <label htmlFor={inputId} className={clsx(styles.label)}>
          {label}
        </label>
      )}

      <input
        id={inputId}
        name={name}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        className={clsx(styles.input, { [styles.inputError]: hasError })}
        aria-invalid={!!hasError}
        aria-describedby={hasError ? `${inputId}-error` : undefined}
        disabled={loading}
      />

      {hasError && (
        <p id={`${inputId}-error`} className={clsx(styles.errorMessage)} role="alert">
          {errorMessage}
        </p>
      )}
    </div>
  )
}

export default Input
