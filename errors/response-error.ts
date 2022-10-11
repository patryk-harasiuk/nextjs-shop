export class ResponseError extends Error {
  constructor(message: string, status?: number) {
    super(message);
    this.name = 'ResponseError';
  }
}
