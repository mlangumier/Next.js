export interface IApiErrorData {
  statusCode: number;
  error: string;
  message?: string;
}

export class ApiError extends Error {
  private statusCode: number;

  public details?: string;

  constructor(error: IApiErrorData) {
    super(error.error);

    this.statusCode = error.statusCode;
    this.details = error.message;
  }

  get code(): number {
    return this.statusCode;
  }
}
