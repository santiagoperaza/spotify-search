class ApiError extends Error  {
  message: string;
  statusCode: number;
  constructor(message: string, statusCode: number = 500) {
      super();
      this.message = message;
      this.statusCode = statusCode;
  }
}
export default ApiError;