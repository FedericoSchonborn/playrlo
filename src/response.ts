export type Response<T> =
  | T
  | { error: string };

export type CompileResponse = {
  success: boolean;
  code: string;
  stdout: string;
  stderr: string;
};

export type FormatResponse = {
  success: boolean;
  code: string;
  stdout: string;
  stderr: string;
};
