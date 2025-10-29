/**
 * Base class for all custom errors that need to return a specific HTTP status code.
 * This is used by the global errorHandler middleware.
 */
export class HttpError extends Error {
  public statusCode: number

  constructor(message: string, statusCode: number) {
    super(message)
    this.name = 'HttpError'
    this.statusCode = statusCode
    // Set prototype explicitly for correct inheritance in TypeScript
    Object.setPrototypeOf(this, HttpError.prototype)
  }
}

/**
 * Specific error for business logic/validation issues (e.g., 400 Bad Request, 409 Conflict).
 */
export class UserCreationError extends HttpError {
  constructor(message: string, statusCode: number = 400) {
    super(message, statusCode)
    this.name = 'UserCreationError'
    Object.setPrototypeOf(this, UserCreationError.prototype)
  }
}

/**
 * Error for when a requested resource is not found (404 Not Found).
 */
export class NotFoundError extends HttpError {
  constructor(message: string = 'Resource not found') {
    super(message, 404)
    this.name = 'NotFoundError'
    Object.setPrototypeOf(this, NotFoundError.prototype)
  }
}
