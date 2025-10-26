import type { IUser } from '../model/user.model'
import { userRepository } from '../repository/user.repository'
import { NotFoundError, UserCreationError } from '../utils/error'

export const userService = {
  async createUser(data: Partial<IUser>): Promise<IUser> {
    if (!data.name || !data.email) {
      throw new Error('Missing required fields: name or email')
      //   throw new UserCreationError('Missing required fields: name or email.', 400);
    }
    const existing = await userRepository.findByEmail(data.email)
    if (existing) throw new Error('Email already exists')
    // throw new UserCreationError('Email already exists.', 409); // 409 Conflict

    return await userRepository.create(data)
  },

  async getUsers(): Promise<IUser[]> {
    const users = await userRepository.getAll()
    if (!users || users.length === 0) {
      throw new NotFoundError('No users found in the database.')
    }
    return users
  },
}
