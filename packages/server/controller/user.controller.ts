import type { Request, Response } from 'express'
import { userService } from '../service/user.service'
import asyncHandler from '../middleware/asyncHandler'
import { ApiResponse } from '../utils/ApiResponse'

/**
 * Controller function to create a user.
 * It is wrapped by asyncHandler in the route file, so NO try...catch is needed here.
 */
export const createUser = asyncHandler(async (req: Request, res: Response): Promise<void> => {
  // Business logic runs in the service layer
  const newUser = await userService.createUser(req.body)

  // Success response using the standardized wrapper
  res.status(201).json(new ApiResponse(true, newUser, 'User created successfully.'))
})

/**
 * Controller function to get all users.
 */
export const getUsers = asyncHandler(async (req: Request, res: Response): Promise<void> => {
  const users = await userService.getUsers()

  // Success response
  res.status(200).json(new ApiResponse(true, users))
})
