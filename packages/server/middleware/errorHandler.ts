import type { Request, Response, NextFunction } from 'express'
// Assuming you define a custom error base class or structure
// We'll use a type guard to check if an error is an expected custom error
interface CustomError extends Error {
  statusCode?: number
}

const errorHandler = (
  err: CustomError, // Type the error better
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // 1. Determine Status Code: Use the error's code or default to 500
  const statusCode = err.statusCode || 500

  // 2. Log the Error (critical for debugging)
  console.error(`❌ [${statusCode}] Error:`, err.message)
  if (statusCode === 500) {
    console.error(err.stack) // Log stack trace for true server errors
  }

  // 3. Send Response using your ApiResponse structure
  res.status(statusCode).json({
    success: false, // Always false for an error response
    data: null, // Data is null on error
    message: err.message || 'An unexpected server error occurred.',
  })

  // Note: Do not call next() here unless you have another error handler to run.
}

export default errorHandler
