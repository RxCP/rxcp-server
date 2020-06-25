export interface MessageResponseInterface {
  statusCode: number;
  message: string | string[];
  error?: string;
}
