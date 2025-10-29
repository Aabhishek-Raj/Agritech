import type { Request, Response, NextFunction } from 'express'

const asyncHandler =
  (fn: (req: Request, res: Response, next: NextFunction) => Promise<any>) =>
  (req: Request, res: Response, next: NextFunction) => {
    console.log(`[AsyncHandler] Executing async handler for: ${req.path}`)
    Promise.resolve(fn(req, res, next)).catch(next)
  }

// const asyncHandler = (fn: (req:Request, res:Response, next:NextFunction) => Promise<void>) =>
//     async (req:Request, res:Response, next:NextFunction) => {
//       console.log('Return function--')
//       try {
//         console.log(req)
//         await fn(req, res, next)
//       } catch (error) {
//         next(error)
//       }
//     }

export default asyncHandler
