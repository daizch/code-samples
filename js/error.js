class CustomError {
  /**
   *
   * @param type
   * @param desc
   * @param isOperational or programmer errors
   *
   * example
   * throw new CustomError(errorManagement.commonErrors.InvalidInput, "Describe here what happened", true)
   */
  constructor(type, desc, isOperational) {
    Error.call(this)
    Error.captureStackTrace(this)
    this.commonType = type
    this.description = desc
    this.isOperational = isOperational
  }
}


