import express from 'express';
import type { Request, Response } from 'express';
import helmet from 'helmet';
import cors from 'cors'
import userRoutes from './routes/user.route'
import { connectDB } from './config/db';

    const app = express();
    const port = 3000; 

    app.use(
      helmet({
        contentSecurityPolicy: false
      })
    )

    app.use(cors())
    app.use(express.json())
    app.use(express.urlencoded({ extended: false }))

    app.use('/api/user', userRoutes)

    app.get('/', (req: Request, res: Response) => {
      res.send('Hello, TypeScript with Express!');
    });


    app.listen(port, () => {
      connectDB()
      console.log(`Server is running on port ${port}`);
    });