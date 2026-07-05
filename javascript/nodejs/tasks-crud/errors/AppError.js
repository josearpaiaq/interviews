export class AppError extends Error {
  constructor(status, message) {
    super(message);
    this.statusCode = status;
  }
}
