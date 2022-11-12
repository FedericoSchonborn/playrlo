export type Response<T> = T | { error: string };

export type FormatResponse = {
  success: boolean;
  code: string;
  stdout: string;
  stderr: string;
};
