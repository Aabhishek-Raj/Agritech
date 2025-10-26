import mongoose from 'mongoose'

export const connectDB = async () => {
  const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/test'
  try {
    const conn = await mongoose.connect(MONGO_URI)
    console.log(`MongoDB connected ${conn.connection.port}`)
  } catch (err) {
    console.log('DB connection failed', err)
    process.exit() // process code 1 code means exit with failure, 0 means success
  }
}
