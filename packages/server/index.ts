import express from 'express'
import type { Request, Response } from 'express'
import helmet from 'helmet'
import cors from 'cors'
import dotenv from 'dotenv'
import userRoutes from './routes/user.route'
import { connectDB } from './config/db'
import errorHandler from './middleware/errorHandler'

const app = express()
dotenv.config()
const PORT = process.env.PORT || 5000

app.use(
  helmet({
    contentSecurityPolicy: false,
  })
)

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/api/user', userRoutes)

app.get('/', (req: Request, res: Response) => {
  res.send('Hello, TypeScript with Express!')
})

app.use(errorHandler)

app.listen(PORT, () => {
  connectDB()
  console.log(`Server is running on port ${PORT}`)
})
