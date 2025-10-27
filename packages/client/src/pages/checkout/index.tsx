import clsx from 'clsx'
import styles from './index.module.css'
import { useState } from 'react'
import Button from '../../components/Form/Button'
import Input from '../../components/Form/Input'
import axios from 'axios'

const Checkout = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
  }
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError('')

    if (!name.trim() || !email.trim()) {
      setError('Please fill out all fields')
      return
    }

    try {
      setLoading(true)
      console.log(name, email)
      const res = await axios.post('api/user', { name, email })
      console.log('Checkout success:', res.data)
    } catch (err) {
      if (axios.isAxiosError(err)) {
        const message = err.response?.data?.message || 'Something went wrong.'
        setError(message)
      } else {
        setError('Unexpected error occurred.')
      }
    } finally {
      setLoading(false)
    }
  }

  return (
    <form className={clsx(styles.form)} onSubmit={handleSubmit} noValidate>
      <Input
        label="Name"
        name="name"
        type="name"
        value={name}
        placeholder="Enter your name"
        onChange={(e) => setName(e.target.value)}
        hasError={!!error && !name}
        errorMessage={!name ? error : ''}
      />
      <Input
        label="Email"
        name="email"
        type="email"
        value={email}
        placeholder="Enter your email"
        onChange={handleChange}
        hasError={!!error && !email}
        errorMessage={!email ? error : ''}
      />
      <Button className="" loading={loading} />
    </form>
  )
}

export default Checkout
