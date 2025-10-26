import type { Request, Response, NextFunction } from 'express'

/**
 * Wrapper function to handle errors in asynchronous Express route handlers.
 * Catches rejected promises and forwards the error to the Express error middleware.
 * @param fn - The asynchronous controller function.
 * @returns A new function that wraps the controller with error handling.
 */
const asyncHandler =
  (fn: (req: Request, res: Response, next: NextFunction) => Promise<any>) =>
  (req: Request, res: Response, next: NextFunction) =>
    Promise.resolve(fn(req, res, next)).catch(next)

export default asyncHandler
