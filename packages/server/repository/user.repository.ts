import User, { type IUser } from '../model/user.model'

export const userRepository = {
  async create(data: Partial<IUser>): Promise<IUser> {
    const newUser = new User(data)
    return await newUser.save()
    // return (await newUser.save()).toObject() as IUser;
  },

  async findByEmail(email: string): Promise<IUser | null> {
    // Use .lean() for faster query performance when not modifying the document
    return (await User.findOne({ email }).lean()) as IUser | null
  },

  /**
   * Retrieves all users.
   * @returns An array of user documents.
   */
  async getAll(): Promise<IUser[]> {
    return (await User.find().lean()) as IUser[] | []
  },
}
