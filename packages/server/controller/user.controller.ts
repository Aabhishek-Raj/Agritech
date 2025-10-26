import type { Request, Response } from 'express'
import User from '../model/user.model'

export const userController = {
    async getUser(req: Request, res: Response): Promise<void> {

    }
}

export const getUsers = async (req: Request, res: Response): Promise<void> => {
    
}

export const createUser = async (req: Request, res: Response): Promise<void> => {
    const user = req.body

    try {
        if (!user.name || !user.email) {
            res.status(400).json({ success: false, message: "Provide all fields"})
            return
        }
        const newUser = new User(user)
    
        await newUser.save()
        res.status(201).json({ success: true, data: newUser })
    } catch (err) {
        console.log(err)
        res.status(500).json({ success: false, message: "Server Error" })

    }
}