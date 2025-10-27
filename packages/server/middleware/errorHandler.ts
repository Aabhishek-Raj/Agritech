import type { Request, Response, NextFunction } from 'express'
// Assuming you define a custom error base class or structure
// We'll use a type guard to check if an error is an expected custom error
interface CustomError extends Error {
  statusCode?: number
}

const errorHandler = (err: CustomError, req: Request, res: Response, next: NextFunction) => {
  const statusCode = err.statusCode || 500

  // For debugging
  console.error(`❌ [${statusCode}] Error:`, err.message)
  if (statusCode === 500) {
    console.error(err.stack)
  }

  // 3. Send Response using your ApiResponse structure
  res.status(statusCode).json({
    success: false,
    data: null,
    message: err.message || 'An unexpected server error occurred.',
  })
}

export default errorHandler
