import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        const conn = await mongoose.connect('mongodb+srv://rsabhishek77:vjKFhP3ExLsSBmoH@cluster0.vm9bcwk.mongodb.net/agriDB?retryWrites=true&w=majority&appName=Cluster0')
        console.log(`MongoDB connected ${conn.connection.port}`)
    } catch (err) {
        console.log('DB connection failed', err)
        process.exit() // process code 1 code means exit with failure, 0 means success
    }
} 