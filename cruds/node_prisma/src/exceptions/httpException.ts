export class HttpException extends Error {
  message: string;
  errorCode: ErrorCodes;
  statusCode: number;
  errors: any;

  constructor(
    message: string,
    errorCode: ErrorCodes,
    statusCode: number,
    errors: any,
  ) {
    super(message);
    this.message = message;
    this.errorCode = errorCode;
    this.statusCode = statusCode;
    this.errors = errors;
  }
}

export enum ErrorCodes {
  USER_NOT_FOUND = 1001,
  USER_ALREADY_EXISTS = 1002,
  INCORRECT_CREDENTIALS = 1003,
  REQUIRED_VALUES_EMPTY = 1004,
  LIST_NOT_FOUND = 1005,
  LIST_ALREADY_EXISTS = 1006,
  TODO_NOT_FOUND = 1007,
}
