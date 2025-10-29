export class ApiResponse<T = any> {
  constructor(
    public success: boolean,
    public data: T | null = null,
    public message: string | null = null
  ) {}
}
